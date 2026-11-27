import { mkdir, readFile, writeFile, rm, stat } from "node:fs/promises";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";
import process from "node:process";
import { supportedLanguages } from "../src/i18n/languages.ts";
import { seoPages, resolveMetadata, getUnavailableMetadata, getNotFoundContent, SITE_ORIGIN, type SeoPage, type PageMetadata } from "../src/seo/metadata.ts";
import { escapeMarkup, renderInitialHtml } from "../src/seo/static-html.ts";

export async function generateStaticSeo(distDirectory: string, pages: readonly SeoPage[] = seoPages) {
  const dist = resolve(distDirectory);
  const template = await readFile(join(dist, "index.html"), "utf8");
  const paths = new Set<string>();
  const routes: { pathname: string; metadata: PageMetadata }[] = [];
  for (const page of pages) {
    if (!/^(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/.test(page.path) || paths.has(page.path)) {
      throw new Error(`Invalid or duplicate route: ${page.path}`);
    }
    paths.add(page.path);
    let translations = 0;
    for (const language of supportedLanguages) {
      if (!Object.hasOwn(page.translations, language)) continue;
      const pathname = `/${language}${page.path}`;
      const metadata = resolveMetadata(pathname, pages);
      if (!metadata) throw new Error(`Missing declared SEO copy: ${pathname}`);
      const image = new URL(metadata.image);
      if (image.origin !== SITE_ORIGIN || !(await stat(join(dist, image.pathname))).isFile()) {
        throw new Error(`Missing local OG image: ${metadata.image}`);
      }
      routes.push({ pathname, metadata });
      translations += 1;
    }
    if (!translations) throw new Error(`Route has no translations: ${page.path}`);
  }
  if (!routes.some((route) => route.metadata.indexable)) throw new Error("No indexable routes.");

  // These are generator-owned output directories, never source directories.
  for (const directory of ["_pages", "_errors", "_seo"]) {
    await rm(join(dist, directory), { recursive: true, force: true });
    await mkdir(join(dist, directory), { recursive: true });
  }
  for (const route of routes) {
    const file = join(dist, "_pages", route.pathname + ".html");
    await mkdir(resolve(file, ".."), { recursive: true });
    await writeFile(file, renderInitialHtml(template, route.metadata));
  }
  for (const language of supportedLanguages) {
    const pathname = `/${language}/__not_found__`;
    const content = getNotFoundContent(pathname);
    const errorBody = `<main><h1>${escapeMarkup(content.title)}</h1><p>${escapeMarkup(content.description)}</p><p><a href="/${language}">${escapeMarkup(content.home)}</a> · <a href="/${language}/projects">${escapeMarkup(content.projects)}</a></p></main>`;
    await writeFile(join(dist, "_errors", language + ".html"),
      renderInitialHtml(template, getUnavailableMetadata(pathname), errorBody));
  }
  const locations = routes.filter((route) => route.metadata.indexable)
    .map((route) => `  <url><loc>${escapeMarkup(route.metadata.canonical!)}</loc></url>`).join("\n");
  await writeFile(join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locations}\n</urlset>\n`);
  await writeFile(join(dist, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`);
  await writeFile(join(dist, "_seo", "routes.json"), JSON.stringify(routes, null, 2) + "\n");
  return routes;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const routes = await generateStaticSeo(process.argv[2] ?? "dist");
  process.stdout.write(`Generated ${routes.length} route documents; ${routes.filter((route) => route.metadata.indexable).length} sitemap entries.\n`);
}
