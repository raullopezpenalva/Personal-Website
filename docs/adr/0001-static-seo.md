# ADR 0001: Static route metadata in the existing Vite delivery

Status: accepted for #72. Date: 2026-11-27.

## Context

#71 provides a pure ES/EN route metadata resolver and one client-side head owner. The application is delivered as static files in an NGINX image. Initial responses still have a generic head and the SPA fallback hides missing paths.

## Decision

After Vite builds, run a small TypeScript generator using Node 22's native type stripping. Reuse the route registry to create one HTML shell per available locale/route, including the Blog's nonindexable shell, and localized error documents. Escape every generated HTML/XML value. Generate sitemap and robots from the same metadata.

Store route documents under a private `_pages` directory and serve them at extensionless public URLs with NGINX try_files. This avoids directory-index redirects to trailing slashes and public .html aliases. Unknown routes return HTTP 404 and a localized static error shell; client navigation shows NotFound without redirecting to an unrelated page.

The root language selector remains a separate SPA entry. Static metadata generation does not prerender page body content, introduce SSR, or detect bots. Normal browser startup and navigation retain the existing head ownership contract.

## Consequences

No new runtime or build dependency is introduced. Node 22 with type stripping is required for generation. Runtime tests must verify initial HTML, XML/text/image MIME, valid and invalid paths, normalization, static-to-client tag adoption and missing-file failures in a disposable isolated container.

Generated metadata and sitemap must fail the build on inconsistent routes, missing declared copy, invalid paths or missing local OG assets. Generated directories are build outputs only. Homelab continues to own DNS, TLS, reverse proxy configuration, image selection and deployment; public end-to-end validation remains #73.

A browser-based full prerender or framework migration would require a separate decision.
