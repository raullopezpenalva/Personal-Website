# Personal Website — agent instructions

Personal Website is the public professional website for Sound Engineering,
AV Networking and Technical Systems. Keep it understandable and maintainable by
its owner. Discuss work in Spanish; use English for code identifiers, technical
guides, issues, commits and PRs. Preserve the language of existing product/content
documents and provide public UI copy in ES/EN.

## Read before working

- Read [README](README.md), [workflow](docs/agents/workflow.md) and
  [environment and verification](docs/agents/environment.md) before execution.
- Read [architecture](docs/agents/architecture.md) before changing application
  code, styling, dependencies, routing, SEO, API integration or delivery.
- Read relevant accepted decisions in [docs/adr/](docs/adr/) and any closer
  AGENTS.md. Linked guides are mandatory where stated; their directory name does
  not make them automatically loaded instructions.

## Working boundaries

- The maintainer's current explicit request takes precedence over repository
  defaults. Resolve routine reversible choices autonomously within that scope.
- Prefer the existing local checkout. Inspect its path, Git status, branch and
  remote before editing. Never silently create a second clone or substitute an
  unrelated task branch. Preserve all unrelated local changes.
- Track implementation in an issue and deliver a focused PR. Issue creation,
  task branches, fixes, verification, commits, pushes and PR creation are routine
  steps within an authorized implementation request.
- Merge only when the maintainer explicitly requests it for the current work.
  An existing explicit merge request is sufficient; do not ask again. Without
  that request, leave the PR ready for human review. Do not enable auto-merge.
- Deployment, tags, releases, infrastructure changes and work in other
  repositories require their own applicable authorization. Merging main can
  trigger its existing image-publication workflow; publication is not deployment.
- Run application services, package managers, tests, builds and project tooling
  in the configured devcontainer. Do not install runtimes, packages, browser
  tooling or project dependencies on the host. Existing host editing/Git/Docker
  bootstrap and connected GitHub tools are allowed.
- Keep API business logic in contact-service and operational deployment in
  homelab. Do not change either repository merely to complete frontend work.
- Never commit secrets, contact submissions, private client data or generated
  output. Use fixtures/mocks for validation; do not send real contact requests
  or notifications.
- A proposal, branch, green check or published image is not evidence of a
  production deployment. Report exactly what was changed and verified.

Keep this entry point short. Maintain procedural detail in the linked guides and
update it with the behavior it describes.
