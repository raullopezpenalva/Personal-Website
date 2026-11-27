import { afterEach, describe, expect, it } from "vitest";
import { applyMetadata, clearMetadata } from "./head";
import { getUnavailableMetadata, resolveMetadata } from "./metadata";

afterEach(() => {
  clearMetadata();
  document.head.querySelectorAll("[data-test-preserve]").forEach((node) => node.remove());
});

describe("metadata ownership", () => {
  it("adopts and deduplicates existing static tags while preserving unrelated head content", () => {
    document.head.insertAdjacentHTML("beforeend", `
      <meta charset="utf-8" data-test-preserve>
      <link rel="icon" href="/favicon.svg" data-test-preserve>
      <title>Static title</title><title>Duplicate</title>
      <meta name="description" content="Old"><meta name="description" content="Duplicate">
      <meta name="robots" content="noindex">
      <link rel="canonical" href="https://example.com">
      <link rel="canonical" href="https://example.com/duplicate">
      <link rel="alternate" hreflang="fr" href="https://example.com/fr">
      <meta property="og:title" content="Old"><meta property="og:title" content="Duplicate">
    `);
    const metadata = resolveMetadata("/es/contact")!;
    applyMetadata(metadata);
    applyMetadata(metadata); // StrictMode/repeated application must be idempotent.
    expect(document.head.querySelectorAll("title")).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="robots"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[property="og:title"]')).toHaveLength(1);
    expect(document.title).toBe("Contacto | Raúl López Penalva");
    expect(document.documentElement.lang).toBe("es");
    expect(document.head.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("index, follow");
    expect(document.head.querySelectorAll('link[rel="alternate"][hreflang]')).toHaveLength(2);
    expect(document.head.querySelector('link[hreflang="fr"]')).toBeNull();
    expect(document.head.querySelectorAll("[data-test-preserve]")).toHaveLength(2);
  });

  it("replaces route metadata and clears stale noindex, alternates and OG on unavailable pages", () => {
    applyMetadata(resolveMetadata("/es/blog")!);
    expect(document.head.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, follow");
    expect(document.head.querySelector('link[rel="alternate"]')).toBeNull();
    applyMetadata(resolveMetadata("/en/services")!);
    expect(document.title).toBe("Sound, AV Networking & Technical Production Services | Raúl López Penalva");
    expect(document.head.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("index, follow");
    expect(document.head.querySelectorAll('meta[property^="og:"]')).toHaveLength(6);
    expect(document.head.querySelector('meta[property="og:url"]')?.getAttribute("content"))
      .toBe("https://raullopezpenalva.com/en/services");

    applyMetadata(getUnavailableMetadata("/es/missing"));
    expect(document.title).toBe("Página no encontrada | Raúl López Penalva");
    expect(document.head.querySelector('link[rel="canonical"]')).toBeNull();
    expect(document.head.querySelector('link[rel="alternate"]')).toBeNull();
    expect(document.head.querySelector('meta[property^="og:"]')).toBeNull();
    clearMetadata();
    expect(document.head.querySelector("[data-site-seo]")).toBeNull();
  });
});
