# Route metadata (ES/EN)

Implemented by #71. This is the client-side metadata layer for the existing React/Vite SPA.

## Responsibilities

- `src/seo/metadata.ts` resolves title, description, canonical, language alternates, robots policy and Open Graph values without browser APIs or image imports.
- `src/data/case-study-routes.ts` owns the shared case study route/content identities. Both the visual portfolio and SEO use those same slugs and translation keys.
- General page copy lives in `src/i18n/locales/{en,es}/seo.json`. Case study title/summary come from the exact locale's `projects.json`; SEO never uses i18next's English fallback to advertise a missing translation.
- `src/seo/RouteMetadata.tsx` runs once per pathname change at the router root, including client navigation and language switching.
- `src/seo/head.ts` is the single owner of SEO tags. It adopts matching static tags, removes duplicates and replaces obsolete values. It preserves unrelated head content.

There are 22 indexable localized URLs today. The Blog placeholder has its own localized title/description and self canonical, but receives `noindex, follow` and no language alternates. Unknown/untranslated metadata resolves to an unavailable, nonindexable state without a canonical or Open Graph URL. Existing route redirects are unchanged; actual NotFound handling and HTTP 404 responses remain #72.

## URL and image policy

Canonicals use `https://raullopezpenalva.com`, the route's explicit language and no trailing slash, query or fragment. ES and EN each canonicalize to themselves. Alternates are reciprocal and only include actual nonempty translations; x-default is omitted.

Open Graph uses localized title/description, `website`, the canonical URL and the shared public portrait at `/images/og/profile.webp`. This is an unchanged copy of the existing About portrait (1200 × 1200 WebP), reviewed as the site's general profile image. Alt text is localized. New case-study-specific images may be added later without inventing URLs to runtime-only imports.

The semantic page titles use the existing `Text as="h1"` API. Title-class margins preserve the previous paragraph spacing. Blog's visible placeholder title is localized as well.

## Why a small head updater

React 19 supports native title/meta/link hoisting. Native tags were considered, but hoisting alone does not establish ownership of a static title or future generated tags already in the document. This implementation uses a small updater to adopt and deduplicate the existing head rather than maintaining two writers. No runtime dependency was added.

SEO-owned nodes are marked `data-site-seo` and removed on effect cleanup. Matching static title/description/robots/canonical/OG tags are adopted even without that marker. Language alternates are regenerated from the resolver. Other head consumers must not write these same tags independently.

The updater sets attributes and textContent, not interpolated HTML. The existing index.html title is retained as a pre-JavaScript fallback and adopted when React starts; there is no global noindex in that shell.

## Contract for #72

- Reuse `seoPages` and `resolveMetadata` to generate initial metadata and a sitemap. Exclude entries with `indexable: false` and absent locale copy.
- Keep canonical, alternates, robots policy and image identity identical between the initial HTML and client navigation.
- Use this same ownership contract; do not add another head library or an independent route list.
- Add initial per-route html lang and metadata, robots.txt, sitemap.xml and the image/runtime checks in #72.
- Validate status codes, redirect normalization, MIME and deployed previews in #73.

The current initial response still contains the generic Vite shell. This change does not claim complete social crawler support or prerendered body content. The public portrait URL becomes available only when this image is deployed through homelab.

## Checks

The Vitest suites cover all 22 application routes, one h1 per page, metadata uniqueness, StrictMode, seeded static tag adoption, ES/EN switching, navigation through Blog noindex, reciprocal alternates, query/hash normalization and missing translations.

Run `npm run lint`, `npm run test:run` and `npm run build`. The existing CI also builds and smoke-tests the runtime image.

## References

- [SEO audit and findings](seo-audit.md).
- [React title](https://react.dev/reference/react-dom/components/title), [meta](https://react.dev/reference/react-dom/components/meta) and [link](https://react.dev/reference/react-dom/components/link).
