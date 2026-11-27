import type { PageMetadata } from "./metadata.ts";

export function escapeMarkup(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}

export function renderMetadataTags(metadata: PageMetadata): string {
  const attribute = (value: string) => escapeMarkup(value);
  const tags = [
    `<title data-site-seo>${escapeMarkup(metadata.title)}</title>`,
    `<meta data-site-seo name="description" content="${attribute(metadata.description)}">`,
    `<meta data-site-seo name="robots" content="${metadata.indexable ? "index, follow" : "noindex, follow"}">`,
  ];
  if (metadata.canonical) {
    tags.push(`<link data-site-seo rel="canonical" href="${attribute(metadata.canonical)}">`);
    for (const alternate of metadata.alternates) {
      tags.push(`<link data-site-seo rel="alternate" hreflang="${alternate.language}" href="${attribute(alternate.href)}">`);
    }
    const openGraph = {
      "og:title": metadata.title, "og:description": metadata.description,
      "og:type": "website", "og:url": metadata.canonical,
      "og:image": metadata.image, "og:image:alt": metadata.imageAlt,
    };
    for (const [property, value] of Object.entries(openGraph)) {
      tags.push(`<meta data-site-seo property="${property}" content="${attribute(value)}">`);
    }
  }
  return tags.join("\n    ");
}

export function renderInitialHtml(template: string, metadata: PageMetadata, errorBody = ""): string {
  if ((template.match(/<head\b/gi) ?? []).length !== 1 ||
      (template.match(/<\/head>/gi) ?? []).length !== 1 ||
      (template.match(/<html\b/gi) ?? []).length !== 1 ||
      !template.includes('<div id="root"></div>')) {
    throw new Error("Expected the Vite HTML shell with one head, html and an empty root.");
  }
  // The input is the Vite shell, not a previously generated route document.
  if (template.includes("data-site-seo") || /<meta\b[^>]*name=["']robots["']/i.test(template)) {
    throw new Error("The shared Vite shell must not contain route SEO or robots policy.");
  }
  return template
    .replace(/<html\b([^>]*)>/i, (_, attributes: string) =>
      `<html${attributes.replace(/\s+lang\s*=\s*(?:"[^"]*"|'[^']*')/gi, "")} lang="${metadata.language}">`)
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace("</head>", `    ${renderMetadataTags(metadata)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${errorBody}</div>`);
}
