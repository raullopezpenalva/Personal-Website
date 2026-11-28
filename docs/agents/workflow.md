# Agent task workflow

## Start in the right checkout

1. Identify the requested result, scope and definition of done. Exploration stays
   in analysis until implementation is requested.
2. Locate the existing repository using the workspace/project context and any
   path supplied by the maintainer. Inspect `pwd`, `git rev-parse --show-toplevel`,
   `git status --short --branch`, `git remote -v` and applicable instructions.
   Report a path mismatch instead of assuming the chat directory is the checkout.
3. Preserve staged, unstaged and untracked user work. Do not reset, clean, stash,
   switch away from an active task or reuse its branch without assessing what
   would be affected. Never move unrelated edits into this task.
4. If the checkout is unavailable or filesystem access blocks writes, explain
   the concrete limit. Do not silently clone, create a worktree, install tools,
   change permissions or move the project. Authorized remote documentation/PR
   work may continue through the connected GitHub tools; state which local
   actions remain unavailable. Another checkout needs an explicit reason and
   applicable maintainer authorization.
5. Read the issue and relevant discussion. Search for an existing issue before
   creating one. Read-only investigation may precede issue creation. Tiny
   maintenance corrections may use the PR itself as their trace.

## Define and implement

An implementation issue states the problem/outcome, scope, observable acceptance
criteria, exclusions, dependencies and validation expectations. Use the
[task template](../../.github/ISSUE_TEMPLATE/agent-task.yml).

Fetch current remote references. For new work, create
`codex/<issue-number>-<short-description>` from current `origin/main`.
Continue an existing PR on its own branch. Do not stack unrelated work or merge
an experimental design branch as part of another task. The existing `dev`
branch is optional integration history, not a required extra hop to main.

Check relevant accepted ADRs, design status, nearby code and tests. Keep one
coherent responsibility per change. Use the established stack and avoid
incidental refactors, new frameworks or abstractions without a demonstrated need.
For an architectural or public-contract change outside the approved scope,
document alternatives, impact and the decision needed before implementing it.
An explicit decision already made in the task does not require another approval.

Update the owning document in the same PR. Do not duplicate the backlog, copy
another project's private material or turn historic proposals into implemented
features.

## Verify and publish

Follow the [verification matrix](environment.md#verification-by-change).
Use meaningful tests for behavior; prose changes do not need tests that mirror
their text. Inspect failures and fix in-scope causes without weakening checks.
A blocked local check must be reported, not relabelled as passing or silently
replaced with host execution.

Review the entire diff and intended staged files. Commit only this task's work,
using clear English messages with a suitable conventional prefix such as
`docs:`, `fix:`, `feat:` or `chore:`. Do not force-push or rewrite shared history
as routine cleanup.

Push the task branch and open a PR to `main` using the
[PR template](../../.github/pull_request_template.md). Describe the problem,
resulting behavior, validation evidence and material limitations. Use
`Closes #N` only when the delivered scope satisfies the issue.

Inspect the actual PR checks and resolve failures caused by the change. Keep
local verification, hosted CI and production validation distinct.

## Merge and hand back

Merge requires the maintainer's explicit instruction for this work. If already
given, proceed after the diff is reviewed and required checks pass; do not add
another confirmation gate. Recheck the exact PR head and target before merging.
Do not merge unrelated PRs, enable auto-merge, deploy, tag or release.

After an authorized merge, verify main contains the change and check the issue
state. Synchronize the existing local checkout with a fast-forward only when it
is clean, on the appropriate branch and writable. Never overwrite local work
to make synchronization succeed. Report permission or divergence blockers.

Close with the issue/PR links, outcome, verification, remaining limits and actual
checkout/branch used. For a local demo, state its checkout and URL. Do not say
"updated locally" when only GitHub was updated.
