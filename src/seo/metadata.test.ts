import { describe, expect, it } from "vitest";
import { caseStudyRoutes } from "../data/case-study-routes";
import { supportedLanguages } from "../i18n/languages";
import { getUnavailableMetadata, resolveMetadata, seoPages, SITE_ORIGIN, type SeoPage } from "./metadata";

describe("route metadata contract", () => {
  it("covers 22 indexable URLs with reciprocal language variants", () => {
    const urls = new Set<string>();
    for (const page of seoPages.filter((entry) => entry.indexable)) {
      for (const language of supportedLanguages) {
        const metadata = resolveMetadata(`/${language}${page.path}`);
        expect(metadata).not.toBeNull();
        expect(metadata!.canonical).toBe(`${SITE_ORIGIN}/${language}${page.path}`);
        expect(metadata!.description.trim()).not.toBe("");
        expect(metadata!.image).toBe(`${SITE_ORIGIN}/images/og/profile.webp`);
        expect(metadata!.imageAlt.trim()).not.toBe("");
        expect(metadata!.alternates).toHaveLength(2);
        for (const alternate of metadata!.alternates) {
          const other = resolveMetadata(new URL(alternate.href).pathname);
          expect(other!.alternates).toContainEqual({
            language, href: metadata!.canonical,
          });
        }
        urls.add(metadata!.canonical!);
      }
    }
    expect(urls.size).toBe(22);
  });

  it("reuses every case study slug and localized summary", () => {
    expect(Object.values(caseStudyRoutes)).toHaveLength(6);
    const metadata = resolveMetadata("/es/projects/homelab-self-hosted-infrastructure");
    expect(metadata!.title).toBe("Homelab e infraestructura self-hosted | Raúl López Penalva");
    expect(metadata!.description).toContain("servidores Linux, Docker, NGINX");
    expect(resolveMetadata("/en/projects/homelab-self-hosted-infrastructure")!.title)
      .toBe("Homelab and Self-hosted Infrastructure | Raúl López Penalva");
    for (const route of Object.values(caseStudyRoutes)) {
      expect(resolveMetadata(`/es/projects/${route.slug}`)?.indexable).toBe(true);
      expect(resolveMetadata(`/en/projects/${route.slug}`)?.indexable).toBe(true);
    }
  });

  it.each(["/es/contact/", "/es/contact?utm_source=linkedin", "/es/contact#form", "/es/contact/?ref=test#form"])(
    "canonicalizes %s without query, fragment or trailing slash", (path) => {
      expect(resolveMetadata(path)!.canonical).toBe(`${SITE_ORIGIN}/es/contact`);
    },
  );

  it.each(["/", "/fr/about", "/es/missing", "/en/projects/missing", "/es//about"])(
    "does not invent Home metadata for %s", (path) => {
      expect(resolveMetadata(path)).toBeNull();
      const metadata = getUnavailableMetadata(path);
      expect(metadata.indexable).toBe(false);
      expect(metadata.canonical).toBeNull();
      expect(metadata.alternates).toEqual([]);
      expect(metadata.title).not.toContain("Sound Engineering, AV Networking");
    },
  );

  it("omits missing or empty translations rather than using English fallback", () => {
    const pages: SeoPage[] = [{
      path: "/article", indexable: true,
      translations: { en: { title: "Article", description: "English content" } },
    }];
    expect(resolveMetadata("/es/article", pages)).toBeNull();
    expect(resolveMetadata("/en/article", pages)!.alternates).toEqual([
      { language: "en", href: `${SITE_ORIGIN}/en/article` },
    ]);
    pages[0].translations.es = { title: "Artículo", description: " " };
    expect(resolveMetadata("/es/article", pages)).toBeNull();
    expect(resolveMetadata("/en/article", pages)!.alternates).toHaveLength(1);
  });

  it.each(["en", "es"])("keeps the %s blog placeholder out of indexable routes and alternates", (language) => {
    const blog = resolveMetadata(`/${language}/blog`);
    expect(blog!.indexable).toBe(false);
    expect(blog!.alternates).toEqual([]);
    expect(blog!.canonical).toBe(`${SITE_ORIGIN}/${language}/blog`);
  });
});
