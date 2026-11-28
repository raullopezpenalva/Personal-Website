# Static SEO delivery

Implemented by #72 on top of the [route metadata contract](seo-metadata.md). The [decision](adr/0001-static-seo.md) was recorded before the build changes.

## Build

`npm run build` now runs TypeScript, Vite and `npm run build:seo`. The generator uses Node 22's native type stripping; use Node 22.18+ as in current CI and the build image. No dependency was added.

The generator imports the same pure route registry, exact locale copy and metadata resolver as the SPA. It validates paths, duplicates, declared copy and the local OG image. Missing locales are omitted; declared empty copy fails. HTML/XML values are escaped. Rebuilding recreates only the generator-owned directories, removing obsolete routes.

| Output | Purpose | Public URL |
| --- | --- | --- |
| `dist/index.html` | Original root language-selection shell | `/` |
| `dist/_pages/es.html` | ES Home metadata and SPA shell | `/es` |
| `dist/_pages/es/about.html` | ES About metadata and SPA shell | `/es/about` |
| `dist/_pages/<language>/projects/<slug>.html` | Per-case-study metadata and SPA shell | Extensionless project route |
| `dist/_errors/{en,es}.html` | Localized error document and recovery links | Internal only, retains 404 status |
| `dist/_seo/routes.json` | Expected metadata for runtime verification | Not publicly served |
| `dist/sitemap.xml` | Canonical indexable URLs | `/sitemap.xml` |
| `dist/robots.txt` | Crawl policy and sitemap URL | `/robots.txt` |

There are currently 24 route documents: 22 indexable pages and two nonindexable Blog placeholders. The sitemap contains 22 entries, omitting root selection, errors, query/fragment variants and lastmod.

This generates the initial head and language, not the normal page body. Content still renders with React. Error documents additionally contain useful text and links without JavaScript. No SSR server, browser prerender service or bot-specific response was introduced.

## HTTP contract

NGINX resolves extensionless routes to generated files; there is no fallback to Home for arbitrary paths. Internal files are not public .html aliases.

- Valid routes and Blog: 200 with the correct HTML head and lang.
- Trailing slash on an existing route: relative 308 to the extensionless path without it, preserving query strings.
- `/index.html`: relative 308 to `/`, preserving query strings.
- Missing routes/slugs and unsupported languages: 404 with localized noindex and no canonical or alternates.
- Missing assets, robots or sitemap: actual 404, never Home.
- The shared portrait is served at `/images/og/profile.webp` as WebP.
- Error language is selected from the original request: ES under `/es`, otherwise EN.

Client-side missing paths show NotFound without changing the requested URL. A client navigation cannot change the status of the already received document; direct navigation/refresh obtains the server's 404. Recovery navigation removes stale noindex metadata.

The root preference-based language selection remains client-side. Host/HTTPS redirects, TLS, edge headers/caches and API proxy routing remain homelab responsibilities, checked end-to-end in #73.

## Metadata consistency

The generator marks SEO tags with `data-site-seo`. The existing updater adopts/deduplicates those tags on startup and replaces them on navigation using the same resolver. The shared index.html does not carry a global noindex.

Adding a case study still requires its shared identity, data, translations and assets; rebuilding creates the corresponding heads and sitemap entries. Do not edit generated documents or maintain another route list.

## Verification

The Vitest suite creates disposable build directories using the real portrait. It checks every initial head and language, XML, missing translations, stale output removal, escaping, invalid input and static-to-client metadata identity. Application tests cover NotFound, recovery, languages, query/hash and semantic headings.

The existing `scripts/verify-runtime.sh` invokes `scripts/verify-seo-runtime.py`. HTTP requests run through Docker exec and container loopback with no published ports, host mounts, credentials, production configuration or outbound network.

Runtime verification checks every generated route, metadata/MIME, robots, sitemap and image; normalization, private-path rejection and 404/error language. It finally removes robots and sitemap only inside the disposable container to test missing-file failures. The image remains unchanged and the shell trap removes the container.

Run lint, tests, build and isolated runtime verification. `npm run build:seo` alone requires a Vite dist first. Vite dev/preview are development servers; the production HTTP contract is checked against the NGINX image.

#73 remains responsible for the deployed digest, public proxy/headers, redirects, social previews and Search Console when accessible. CI does not demonstrate deployment or indexing.

## References

- [Node 22 TypeScript support](https://nodejs.org/docs/latest-v22.x/api/typescript.html).
- [NGINX try_files and error_page](https://nginx.org/en/docs/http/ngx_http_core_module.html).
