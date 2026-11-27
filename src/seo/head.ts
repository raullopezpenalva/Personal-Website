import type { PageMetadata } from "./metadata";

// Adopt matching static tags as well as tags from earlier SPA routes.
// React and a future build-time generator must not create competing head owners.
export function applyMetadata(metadata: PageMetadata, doc: Document = document): void {
  const head = doc.head;
  const remove = (selector: string) => head.querySelectorAll(selector).forEach((node) => node.remove());
  const upsert = (selector: string, tag: string, attributes: Record<string, string>, text?: string) => {
    const [first, ...duplicates] = Array.from(head.querySelectorAll<HTMLElement>(selector));
    duplicates.forEach((node) => node.remove());
    const node = first ?? doc.createElement(tag);
    Object.entries(attributes).forEach(([name, value]) => node.setAttribute(name, value));
    node.setAttribute("data-site-seo", "");
    if (text !== undefined) node.textContent = text;
    if (!first) head.appendChild(node);
  };

  doc.documentElement.lang = metadata.language;
  upsert("title", "title", {}, metadata.title);
  upsert('meta[name="description"]', "meta", { name: "description", content: metadata.description });
  upsert('meta[name="robots"]', "meta", {
    name: "robots", content: metadata.indexable ? "index, follow" : "noindex, follow",
  });

  if (metadata.canonical) {
    upsert('link[rel="canonical"]', "link", { rel: "canonical", href: metadata.canonical });
  } else {
    remove('link[rel="canonical"]');
  }

  remove('link[rel="alternate"][hreflang]');
  metadata.alternates.forEach(({ language, href }) => {
    upsert(`link[rel="alternate"][hreflang="${language}"]`, "link", {
      rel: "alternate", hreflang: language, href,
    });
  });

  const openGraph: Record<string, string> = metadata.canonical ? {
    "og:title": metadata.title,
    "og:description": metadata.description,
    "og:type": "website",
    "og:url": metadata.canonical,
    "og:image": metadata.image,
    "og:image:alt": metadata.imageAlt,
  } : {};
  for (const property of ["og:title", "og:description", "og:type", "og:url", "og:image", "og:image:alt"]) {
    const selector = `meta[property="${property}"]`;
    const content = openGraph[property];
    if (content) upsert(selector, "meta", { property, content });
    else remove(selector);
  }
}

export function clearMetadata(doc: Document = document): void {
  doc.head.querySelectorAll("[data-site-seo]").forEach((node) => node.remove());
}
