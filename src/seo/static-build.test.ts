import { mkdtemp, mkdir, readFile, writeFile, copyFile, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { generateStaticSeo } from "../../scripts/generate-static-seo.ts";
import { resolveMetadata, getUnavailableMetadata, type SeoPage } from "./metadata";
import { renderInitialHtml } from "./static-html";
import { applyMetadata } from "./head";

const directories: string[] = [];
const template = '<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>Fallback</title><script type="module" src="/assets/app.js"></script></head><body><div id="root"></div></body></html>';

async function fixture() {
  const directory = await mkdtemp(join(tmpdir(), "personal-website-seo-"));
  directories.push(directory);
  await mkdir(join(directory, "images", "og"), { recursive: true });
  await copyFile("public/images/og/profile.webp", join(directory, "images", "og", "profile.webp"));
  await writeFile(join(directory, "index.html"), template);
  return directory;
}

afterEach(async () => {
  await Promise.all(directories.splice(0).map((directory) => rm(directory, { recursive: true, force: true })));
});

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const headSnapshot = (doc: Document) => Array.from(doc.head.querySelectorAll("[data-site-seo]"))
  .map((node) => JSON.stringify([
    node.tagName,
    Array.from(node.attributes).map((attribute) => [attribute.name, attribute.value]).sort(),
    node.textContent,
  ])).sort();

describe("static metadata generation", () => {
  it("writes 24 initial documents and 22 sitemap URLs with head values identical to the client", async () => {
    const dist = await fixture();
    const routes = await generateStaticSeo(dist);
    expect(routes).toHaveLength(24);
    for (const route of routes) {
      const html = await readFile(join(dist, "_pages", route.pathname + ".html"), "utf8");
      const doc = parse(html);
      expect(doc.documentElement.lang).toBe(route.metadata.language);
      expect(doc.title).toBe(route.metadata.title);
      expect(doc.getElementById("root")?.innerHTML).toBe(""); // Normal body remains a SPA.
      expect(doc.head.querySelectorAll("title")).toHaveLength(1);
      expect(doc.head.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(route.metadata.canonical);
      expect(doc.head.querySelector('meta[property="og:image"]')?.getAttribute("content")).toBe(route.metadata.image);
      const before = headSnapshot(doc);
      applyMetadata(route.metadata, doc);
      applyMetadata(route.metadata, doc);
      expect(headSnapshot(doc)).toEqual(before);
      expect(doc.head.querySelectorAll("script")).toHaveLength(1);
    }
    const xml = new DOMParser().parseFromString(await readFile(join(dist, "sitemap.xml"), "utf8"), "application/xml");
    expect(xml.querySelector("parsererror")).toBeNull();
    const locations = Array.from(xml.querySelectorAll("loc")).map((entry) => entry.textContent);
    expect(locations).toHaveLength(22);
    expect(new Set(locations).size).toBe(22);
    expect(locations.every((location) => !location?.includes("/blog"))).toBe(true);
    expect(xml.querySelector("lastmod")).toBeNull();
    expect(await readFile(join(dist, "robots.txt"), "utf8"))
      .toBe("User-agent: *\nAllow: /\nSitemap: https://raullopezpenalva.com/sitemap.xml\n");
    expect(await readFile(join(dist, "index.html"), "utf8")).toBe(template);
    const error = parse(await readFile(join(dist, "_errors", "es.html"), "utf8"));
    expect(error.documentElement.lang).toBe("es");
    expect(error.querySelector("h1")?.textContent).toBe("Página no encontrada");
    expect(error.head.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, follow");
    expect(error.head.querySelector('link[rel="canonical"]')).toBeNull();
    expect(error.querySelector('a[href="/es"]')).not.toBeNull();
  });

  it("omits absent locales and removes stale generated route documents on regeneration", async () => {
    const dist = await fixture();
    await generateStaticSeo(dist);
    const pages: SeoPage[] = [{
      path: "/article", indexable: true,
      translations: { en: { title: "Article", description: "English only" } },
    }];
    await generateStaticSeo(dist, pages);
    expect((await readFile(join(dist, "sitemap.xml"), "utf8")).match(/<loc>/g)).toHaveLength(1);
    await expect(stat(join(dist, "_pages", "es", "article.html"))).rejects.toThrow();
    await expect(stat(join(dist, "_pages", "es.html"))).rejects.toThrow();
    const initial = await readFile(join(dist, "_pages", "en", "article.html"), "utf8");
    await generateStaticSeo(dist, pages);
    expect(await readFile(join(dist, "_pages", "en", "article.html"), "utf8")).toBe(initial);
  });

  it("fails on unsafe/duplicate paths, missing declared copy and missing OG assets", async () => {
    const dist = await fixture();
    const page: SeoPage = {
      path: "/article", indexable: true,
      translations: { en: { title: "Article", description: "Description" } },
    };
    await expect(generateStaticSeo(dist, [page, page])).rejects.toThrow("duplicate route");
    await expect(generateStaticSeo(dist, [{ ...page, path: "/../escape" }])).rejects.toThrow("Invalid");
    await expect(generateStaticSeo(dist, [{
      ...page, translations: { en: { title: "Article", description: " " } },
    }])).rejects.toThrow("Missing declared SEO copy");
    await rm(join(dist, "images", "og", "profile.webp"));
    await expect(generateStaticSeo(dist)).rejects.toThrow();
  });

  it("escapes title/attribute markup and rejects a global noindex or malformed template", () => {
    const dangerous = '</title><script>alert("x")</script>&';
    const metadata = { ...resolveMetadata("/en/contact")!, title: dangerous, description: dangerous };
    const doc = parse(renderInitialHtml(template, metadata));
    expect(doc.title).toBe(dangerous);
    expect(doc.head.querySelector('meta[name="description"]')?.getAttribute("content")).toBe(dangerous);
    expect(doc.querySelectorAll("script")).toHaveLength(1);
    expect(() => renderInitialHtml(template.replace("</head>", '<meta name="robots" content="noindex"></head>'), metadata)).toThrow("must not contain");
    expect(() => renderInitialHtml("<html></html>", getUnavailableMetadata("/missing"))).toThrow("Vite HTML shell");
  });
});
