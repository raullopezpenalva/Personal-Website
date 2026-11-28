# Architecture and implementation guardrails

## Sources and ownership

Read the requested issue/accepted maintainer decisions, relevant accepted ADRs in
[docs/adr/](../adr/), the current [README](../../README.md), and the affected code.
Use code and actual checks as evidence of implemented behavior; do not treat a
design document or old issue as proof of deployment. Resolve material conflicts
explicitly. Keep proposals, implementation and verified production distinct.

The responsibility map is:

| Owner | Responsibility |
| --- | --- |
| Personal Website | Public React frontend, bilingual content presentation, routing/metadata, contact UI, static delivery image and publication contract. |
| contact-service | Contact persistence, business rules, administration, authentication and notifications. |
| homelab | Domain/TLS, reverse proxy, environment/secrets, image selection, promotion and deployment. |
| content-studio | Editorial preparation and future publishing automation. |
| knowledge-system / actividad-profesional | Overall direction and professional strategy; not duplicated application backlogs. |

Reading a sibling repository as reference does not authorize editing it.
Use structural and visual principles, not copies of its private data or
unrelated domain implementation.

## Preserve the existing frontend

React, TypeScript, Vite, React Router, i18next, custom CSS/CSS Modules and the
existing testing stack remain the baseline. This is not a backend monolith or
private operational dashboard. Do not copy TPA's application workspace layout
or contact-service's Java layers into this frontend.

| Existing path | Responsibility |
| --- | --- |
| `src/pages/` | Route-level composition. |
| `src/components/layout/` | Public shell, header, footer, container. |
| `src/components/ui-primitives/` and `ui-patterns/` | Small controls and reusable compositions. |
| `src/components/domain/` | Service/case-study presentation and contact form. |
| `src/data/` | Current content metadata, case-study slugs and image references. |
| `src/i18n/` | Locale resources, selection, persistence and language routing. |
| `src/seo/` | Route metadata resolver and client head ownership. |
| `src/index.css`, `src/styles/` | Tokens/resets, import manifests and owned component/page styles. |
| `scripts/`, `nginx/`, `Dockerfile` | Static SEO generation, isolated runtime checks and delivery image. |

Keep route composition, presentation, state and transport responsibilities
readable. The existing contact form owns its request and error handling; a
separate client abstraction is not a prerequisite for every change. Extract
transport or state when it has an actual responsibility, without reorganizing
unrelated code. Preserve request/error contracts when doing so.

Use strict TypeScript, explicit names and small cohesive components. Prefer
`unknown` plus validation at untrusted boundaries over `any`. Avoid generic
dumping grounds and abstractions for trivial single uses. Review source files
approaching 400 lines for mixed responsibilities; do not mechanically split
cohesive content/data or lockfiles.

## CSS and public UX

Preserve the dark professional identity and approved palette. Use custom CSS
and tokens in `src/index.css`; style rules belong with their component/page
owner in `src/styles/`. Import manifests should not become unrelated global
rule collections. Respect CSS Modules versus global selector boundaries.

Group tokens by fonts/line heights, colors/surfaces, spacing/aliases, layout,
typography, borders/radii/layers and component aliases. Reuse tokens for repeated
values. Prefer clear hierarchy, readable line lengths and purposeful photography
over decorative effects or an accumulating override stylesheet.

Use semantic headings, meaningful alternative text, labelled controls, visible
focus and keyboard/touch access. No essential information may depend only on
hover. Preserve form input on recoverable errors and distinguish field/global
feedback. Check reflow and reduced motion. Add dependencies or a new styling
framework only after a scoped architecture decision.

## Content, i18n and SEO

Public UI is ES/EN; preserve existing namespaces and language-prefixed routes.
Case studies are driven by `src/data/case-studies.ts` and locale copy. Keep slugs,
images and translations aligned. Do not publish invented projects, achievements,
certifications or results. Updating professional positioning or adding content
requires that scope, rather than being incidental to a visual change.

The current Blog route is a nonindexable placeholder. Neither a blog API nor
certifications nor the proposed workflow diagram becomes implemented by
documenting it. Follow the current issue and code rather than a duplicated list.

The accepted [static SEO decision](../adr/0001-static-seo.md) retains Vite/React:
the post-build generator reuses route metadata to produce initial head documents,
localized errors, robots and sitemap. It does not prerender body content or add
SSR. Preserve the single client head owner, ES/EN canonicals/alternates, valid
slugs, noindex policy and NGINX's real HTTP 404 behavior. Coordinate changes with
[metadata](../seo-metadata.md) and [static delivery](../seo-static-delivery.md).

## Contact and delivery boundaries

The public UI sends `POST /api/v1/contact/messages` with email, subject and content.
Backend business/security/notification behavior belongs to contact-service.
Keep tests mocked or pointed at an explicitly authorized isolated backend.

[Image publication](../image-publication.md) owns the build-to-homelab contract.
The existing push-to-main workflow can publish the verified image; it does not
deploy it. Preserve verified-image identity, digest receipts, CI isolation and
the separation between publication and homelab promotion. Do not add SSH,
production credentials, mutable deployment shortcuts or a second deployer.

Material changes to framework, repository boundaries, routing/SEO delivery, API
contracts or deployment require a recorded decision within the authorized scope.
Use `docs/adr/` for new architecture decisions; do not move or silently rewrite
accepted ADRs to match a sibling project's directory convention.
