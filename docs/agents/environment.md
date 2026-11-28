# Environment and verification

## Host and container boundary

Use [.devcontainer/devcontainer.json](../../.devcontainer/devcontainer.json)
for local agent application execution, dependency management, builds, tests and
project-specific tools. It uses the Node 22 TypeScript image, the `node` user,
GitHub CLI feature and forwarded Vite ports 5173/4173. Its current creation hook
runs `npm install`; use `npm ci` for verification against the committed lockfile.
Confirm Node 22.18+ for the static SEO generator.

Existing host editing, Git and Docker bootstrap tools and connected GitHub tools
may manage the checkout, issues and PRs. Lightweight document/diff inspection
does not require installing a tool or starting application services.

Do not install Node, npm packages, Python packages, Playwright, GitHub CLI or a
Dev Container CLI on the host. Do not fall back to host execution after a
container failure. Any durable additional project tooling belongs in the
container configuration and must have a task-specific need.

Discover the container for the actual checkout, not an old path or ID:

```sh
docker ps -a --filter "label=devcontainer.local_folder=$(pwd)" \
  --format '{{.ID}} {{.Status}} {{.Names}}'
```

An already installed Dev Container CLI may be used from the repository root:

```sh
devcontainer up --workspace-folder "$PWD"
devcontainer exec --workspace-folder "$PWD" node --version
```

The editor's existing Dev Containers integration is an alternative. Confirm the
workspace mount and repository before running commands inside it. Do not assume
a hardcoded container workspace path, Docker socket or personal machine path.
If Docker or an existing entry point is unavailable, report the prerequisite;
do not change socket permissions or expose Docker over TCP.

## Frontend commands

Inside this repository's devcontainer, at its root:

```sh
npm ci
npm run lint
npm run test:run
npm run build
git diff --check
```

The [package scripts](../../package.json) are authoritative:
`build` runs TypeScript project checks, Vite and static SEO generation.
`test:run` runs the existing Vitest suite once; `test:ci` adds coverage.
There is no separate `typecheck` script. Do not invent one in completion reports.

For a visual demo, run inside the devcontainer:

```sh
npm run dev
```

Use the editor's localhost forwarding. The current dev script binds Vite to
`0.0.0.0` inside its container; keep host forwarding local. Do not add public
listeners or tunnels. Report the actual URL and checkout. Stop temporary
services you started when the review no longer needs them; preserve unrelated
services and persistent data.

The [Vite proxy](../../vite.config.ts) targets `http://localhost:8089` from the
frontend process. In a container that is the container's own loopback, not the
host or another service. No backend is needed to review the frontend. For
authorized end-to-end validation, first resolve the intended non-production
backend/network target; do not silently connect to production or send genuine
contact/notification traffic.

## Verification by change

| Change | Required evidence |
| --- | --- |
| Instructions, Markdown, issue/PR templates | Relative links, paths/commands, template structure, diff and exclusions; existing PR CI still applies. No artificial prose tests or local app build solely for text edits. |
| React, TypeScript, dependencies or API UI behavior | Focused behavior tests when meaningful, then lint, existing suite and production build in the devcontainer. |
| CSS, layout or public content presentation | Affected screens in ES/EN, desktop/tablet/mobile, keyboard/focus, reflow and reduced-motion behavior; standard frontend checks when affected. |
| Routing, i18n or SEO | Direct entry/refresh, language switch, canonical/alternates, valid/missing slugs, generated HTML and crawl files; relevant tests and build. |
| Dockerfile, NGINX, static generator or publication tooling | Frontend checks plus isolated runtime/helper checks and the actual PR CI. No infrastructure access. |

For runtime changes, use an existing authorized container environment with Docker
access or hosted CI. The current devcontainer does not declare Docker socket
access, Docker-in-Docker or Python tooling; do not assume these capabilities.
Inside such an appropriate environment, the repository's commands are:

```sh
docker build --platform linux/amd64 -t personal-website:local .
bash scripts/verify-runtime.sh personal-website:local
python3 -m unittest discover -s scripts/tests -v
```

The smoke script starts and removes an isolated container without published
ports, application secrets, persistent data mounts or outbound network.
Local images and checks do not authorize registry publication or deployment.
Clean up only disposable resources created for the task.

## Hosted checks and evidence

[verify.yml](../../.github/workflows/verify.yml) owns frontend verification and
the Linux/amd64 image/runtime/helper checks. PRs targeting main invoke it through
[CI-main-test.yml](../../.github/workflows/CI-main-test.yml). Hosted CI runs in its
own environment; its tool setup does not authorize host installation by an agent.

Inspect the check results for the delivered PR head. Record passed, failed,
pending and unavailable checks accurately. Green hosted CI does not prove a
local devcontainer works or production has been deployed.

Keep node_modules, dist, coverage, caches, reports and scratch files out of
commits. Report commands not run and their concrete reason.
