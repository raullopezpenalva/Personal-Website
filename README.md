# Personal Website

**Live:** [raullopezpenalva.com](https://raullopezpenalva.com)

Professional website and portfolio focused on **Sound Engineering · AV Networking · Technical Systems** for live events and production environments.

The website presents my services, hybrid technical background and professional case studies. Its implementation also demonstrates frontend development, backend integration, container delivery and operation on self-hosted infrastructure.

The frontend is a React single-page application built into static files with Vite and served by NGINX. Contact requests are sent to the separate `contact-service` backend; persistence and business logic belong to that service.

## Current capabilities

- Home with service previews, hybrid profile, featured case studies and contact CTA.
- About page describing the connection between audiovisual work, networking and systems.
- Services page covering Sound Engineering, Sound System Engineering, AV Networking and Technical Production.
- Data-driven portfolio with reusable cards, detail pages and photo galleries.
- Spanish and English routes, shared UI translations, language switching and a preference stored in `localStorage`.
- Contact form with submission state, success feedback, field validation errors returned by the API and general error handling.
- Initial HTML and client-side metadata in ES/EN: titles, descriptions, canonicals, reciprocal language alternates and Open Graph, with a nonindexable Blog placeholder.
- Generated sitemap and robots, extensionless route delivery and localized NotFound pages with real HTTP 404 responses in the NGINX image.

The portfolio currently contains six case studies:

1. Sound Engineering for Live Events and Shows.
2. Touring Sound Support with Ominira.
3. Location Sound and Audio Postproduction for AV.
4. Corporate AV, Conferences and Hybrid Events.
5. Homelab and Self-hosted Infrastructure.
6. Personal Website and Software Projects.

### Pending work

These items are tracked in the backlog and are not implemented features:

- [Static blog MVP — #26](https://github.com/raullopezpenalva/Personal-Website/issues/26): the Blog route currently shows a coming-soon placeholder.
- [Certifications section — #65](https://github.com/raullopezpenalva/Personal-Website/issues/65).
- [Public HTTP, preview and homelab integration validation — #73](https://github.com/raullopezpenalva/Personal-Website/issues/73).
- [Possible blog API integration — #30](https://github.com/raullopezpenalva/Personal-Website/issues/30): a future evaluation, separate from the static MVP.

## Technology

| Area | Implementation |
| --- | --- |
| Frontend | React 19, TypeScript, Vite 7 |
| Routing | React Router 7 |
| Internationalization | i18next and react-i18next |
| Styling | Custom CSS and CSS Modules |
| Quality checks | ESLint, Vitest, React Testing Library, jsdom |
| Runtime | Docker image serving static files through NGINX |
| Delivery | GitHub Actions and GitHub Container Registry (GHCR) |

Dependency ranges and development commands are defined in [package.json](package.json); resolved versions are recorded in [package-lock.json](package-lock.json).

## Routes and content

The [router](src/router.tsx) defines the following routes under both `/es` and `/en`:

| Path | Page |
| --- | --- |
| `/:lang` | Home |
| `/:lang/about` | About |
| `/:lang/services` | Services |
| `/:lang/projects` | Portfolio |
| `/:lang/projects/:slug` | Case study detail |
| `/:lang/contact` | Contact |
| `/:lang/blog` | Blog placeholder |

The root path `/` redirects using the stored language preference, then the browser language, with English as the fallback.

Case study metadata, slugs, tags and image references live in [case-studies.ts](src/data/case-studies.ts). Portfolio cards and detail pages render this data; localized copy lives in the ES/EN translation files. Adding a case study involves updating the data, translations and image assets.

## Project structure

| Location | Responsibility |
| --- | --- |
| [src/main.tsx](src/main.tsx), [src/router.tsx](src/router.tsx) | Application entry point and routes |
| [src/pages/](src/pages/) | Home, About, Services, portfolio, case study, Contact and Blog views |
| [src/components/layout/](src/components/layout/) | Shared page layout, header, footer and container |
| [src/components/ui-primitives/](src/components/ui-primitives/) | Text, buttons, stacks and icons |
| [src/components/ui-patterns/](src/components/ui-patterns/) | Sections, subsections and bullet lists |
| [src/components/domain/](src/components/domain/) | Service previews, case study cards and galleries, contact form |
| [src/components/routing/](src/components/routing/) | Scroll and hash navigation support |
| [src/data/](src/data/) | Portfolio and Home content metadata |
| [src/i18n/](src/i18n/) | Language routing, persistence and ES/EN translation namespaces |
| [src/assets/](src/assets/) | Images and other imported assets |
| [src/index.css](src/index.css), [src/styles/](src/styles/) | Global, layout, page and component styles |
| [src/App.test.tsx](src/App.test.tsx), [src/tests/](src/tests/) | Frontend smoke test and test setup |
| [nginx/default.conf](nginx/default.conf), [Dockerfile](Dockerfile) | Generated route delivery, HTTP 404 handling and container build |
| [scripts/](scripts/) | Runtime smoke check and image publication helpers |
| [.github/workflows/](.github/workflows/) | Verification and image publication |
| [docs/](docs/) | Delivery contract and versioned content/design documentation |

## Working method

Read [AGENTS.md](AGENTS.md) and [CONTRIBUTING.md](CONTRIBUTING.md) before implementation.
They link the issue/PR workflow, existing-checkout rules, container environment,
proportional verification and architecture boundaries. Agent application/tooling
commands run in the existing devcontainer; do not install project tooling on the
host. Merging requires the maintainer's explicit instruction for the task.

Issue branches start from `origin/dev` and their pull requests target `dev`.
An authorized release uses a separate pull request from `dev` to `main`.
The push to `main` triggers image publication. Homelab handles production
promotion and deployment.

## Local development

Use the existing [VS Code devcontainer](.devcontainer/devcontainer.json) with **Node.js 22.18+** and **npm**, matching CI and the Docker build. It forwards Vite ports 5173 and 4173 and currently runs `npm install` on creation. Verify with `npm ci` against the committed lockfile.

Run these commands from the repository root **inside the devcontainer**:

```bash
npm ci
npm run dev
```

Open the URL printed by Vite, normally [http://localhost:5173](http://localhost:5173).

### Contact backend

The form sends JSON to `POST /api/v1/contact/messages` with `email`, `subject` and `content`.

During development, [vite.config.ts](vite.config.ts) proxies `/api` to `http://localhost:8089`. Run the backend separately at that address, or adapt the local proxy target to your development environment. The frontend can be explored without the backend, but submitting the form requires the API.

In production, homelab's reverse proxy must route the API path to `contact-service`. The frontend container's NGINX configuration serves static files and does not configure that backend route. The Vite development proxy is not part of the production build.

### Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check, build Vite files and generate static route metadata/sitemap into `dist/` |
| `npm run build:seo` | Regenerate static SEO files after a Vite build |
| `npm run preview` | Preview the production build locally, after building |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Apply available ESLint fixes |
| `npm test` | Run Vitest in watch mode |
| `npm run test:run` | Run frontend tests once |
| `npm run test:ci` | Run frontend tests with coverage |

The current Vitest suite covers the application smoke render and SEO metadata/head/static-generation behavior. It does not provide comprehensive page, accessibility or backend integration coverage.

In an authorized container environment with Python 3, publication helper tests can also be run:

```bash
python3 -m unittest discover -s scripts/tests -v
```

In an authorized container environment with Docker access (or hosted CI), build a test image and check its static runtime. The current devcontainer does not declare a Docker socket; see [environment guidance](docs/agents/environment.md):

```bash
docker build --platform linux/amd64 -t personal-website:local .
bash scripts/verify-runtime.sh personal-website:local
```

The Docker build runs frontend tests and builds the application. The runtime smoke check validates NGINX and the served HTML in an isolated container; it does not exercise the backend or production infrastructure. Local test images are not publication receipts or deployment candidates.

## CI and image publication

[verify.yml](.github/workflows/verify.yml) is the reusable verification workflow. It runs `npm ci`, lint, frontend tests and the production build, then builds a labelled Linux/amd64 runtime image and runs the isolated runtime and publication helper checks.

| Workflow | Trigger | Outcome |
| --- | --- | --- |
| [CI dev test](.github/workflows/CI-dev-test.yml) | Push to `dev`; PR targeting `dev` | Verification |
| [CI main test](.github/workflows/CI-main-test.yml) | PR targeting `main` | Verification |
| CI main test | Manual invocation | Verification and image artifact transfer check, without registry publication |
| [Verify and publish image for homelab](.github/workflows/CI-package.yml) | Push to `main`; published release; manual invocation on `main` | Verification followed by publication of the exact tested image |

Release source commits must belong to `main` history. Pull request verification does not publish images.

The publication job downloads the tested image artifact by its immutable artifact ID and verifies its identity before registry login; it does not rebuild the image. Only this job receives package write permission.

Images are published to `ghcr.io/raullopezpenalva/personal-website` with:

- `sha-<full-commit-sha>` as the commit tag.
- The release tag as an additional alias for a published semantic-version release.
- A registry digest recorded in the `image-publication.json` artifact and workflow summary.

The workflow does not update `latest`. Tags can move; homelab uses the digest reference (`ghcr.io/...@sha256:...`) as the immutable deployment identity. Publication receipts are retained for 90 days.

### Deployment boundary

This repository owns the frontend source, verification, container build and image publication. **Homelab owns production configuration, secrets, image selection, validation, promotion and deployment.**

Publishing an image does not deploy it or change production traffic. The producer workflow does not access production servers. The deployed frontend container serves generated route documents and assets, with real 404 responses for missing paths. The infrastructure reverse proxy handles the public domain, TLS and backend routing.

See [Image publication and homelab promotion](docs/image-publication.md) for the delivery contract, receipt fields and operational checks.

## Documentation

| Document | Purpose |
| --- | --- |
| [Agent workflow](docs/agents/workflow.md) | Checkout selection, issue-to-PR delivery and explicit merge authorization |
| [Environment and verification](docs/agents/environment.md) | Devcontainer commands and checks proportional to the change |
| [Architecture guardrails](docs/agents/architecture.md) | Frontend, content, SEO, backend and deployment ownership |
| [Method adoption](docs/agents/method-adoption.md) | Comparison with the maintainer's other repositories and adaptation rationale |
| [Static SEO delivery — #72](docs/seo-static-delivery.md) | Initial route HTML, crawl files, NGINX behavior and verification |
| [Static SEO decision](docs/adr/0001-static-seo.md) | Architecture decision and delivery tradeoffs |
| [Route metadata — #71](docs/seo-metadata.md) | Client-side SEO ownership, route data and integration contract for initial HTML |
| [SEO audit — #69](docs/seo-audit.md) | Audit baseline, ES/EN policy and follow-up backlog |
| [Image publication and homelab promotion](docs/image-publication.md) | Current image delivery and deployment ownership contract |
| [Homepage content — v2.0.0](docs/content/homepage-content-v2.0.0.md) | Home messaging and structure |
| [About page content — v2.0.0](docs/content/about-page-content-v2.0.0.md) | Hybrid professional profile narrative |
| [Services definition — v2.0.0](docs/content/services-definition-v2.0.0.md) | Professional offering and positioning |
| [Case study categories — v2.0.0](docs/content/case-studies-categories-v2.0.0.md) | Portfolio categories and balance |
| [Projects / case studies definition — v2.0.0](docs/content/projects-case-studies-definition-v2.0.0.md) | Portfolio content, cards and detail structure |
| [DevOps visibility strategy — v2.0.0](docs/content/devops-visibility-strategy-v2.0.0.md) | Role of infrastructure and software within the AV positioning |

The `docs/content/*v2.0.0.md` files preserve the design and content decisions for that release. They may contain proposals and alternatives; they are not a claim that every described item is implemented. Current behavior is defined by the source and workflows.

See [open issues](https://github.com/raullopezpenalva/Personal-Website/issues) for pending work and [releases](https://github.com/raullopezpenalva/Personal-Website/releases) for published versions.

## License

[MIT](LICENSE).
