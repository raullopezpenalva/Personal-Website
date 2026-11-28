# Contributing to Personal Website

Start with the [README](README.md) for current capabilities and commands.
[AGENTS.md](AGENTS.md) is the agent entry point. Humans and agents use the same
issue/branch/PR traceability, architecture boundaries and review evidence.

1. Inspect and use the existing checkout; preserve unrelated local work.
2. Create or select a focused issue with scope, acceptance criteria and exclusions.
3. Start a task branch from current main, or continue the existing task PR.
4. Implement with the existing stack and update the owning documentation.
5. Verify proportionally and publish a PR to main with evidence and limitations.
6. Merge only with the maintainer's explicit instruction; deployment, tags and
   releases are separate actions.

Read the [workflow](docs/agents/workflow.md),
[environment and verification](docs/agents/environment.md) and
[architecture guardrails](docs/agents/architecture.md).

Use the existing devcontainer for agent package/tooling commands and application
execution. Do not install project tooling on the host to bypass an environment
blocker. Instructions/templates alone require document/diff checks, not
artificial application tests; the existing hosted PR checks still run.

The adoption rationale and reviewed references are recorded in
[method adoption](docs/agents/method-adoption.md). The GitHub backlog owns pending
tasks; this guide does not create a parallel roadmap.
