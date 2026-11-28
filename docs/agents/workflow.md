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
`codex/<issue-number>-<short-description>` from current `origin/dev`.
Continue an existing PR on its own branch. Do not stack unrelated work or merge
an experimental design branch as part of another task.

Keep `dev` aligned with fixes already accepted into `main`. If `dev` is a strict
ancestor of `main`, an authorized fast-forward can restore the baseline without
rewriting history. If both branches contain unique commits, review and verify
a separate `main` → `dev` synchronization PR before merging it.

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

Push the task branch and explicitly target `dev` (for example,
`gh pr create --base dev`) using the
[PR template](../../.github/pull_request_template.md). Describe the problem,
resulting behavior, validation evidence and material limitations. Use `Refs #N`
in PRs targeting `dev`. GitHub's automatic issue closure applies to PRs
targeting the default branch, `main`.

Inspect the actual PR checks and resolve failures caused by the change. Keep
local verification, hosted CI and production validation distinct.

## Merge and hand back

Merge requires the maintainer's explicit instruction for this work. If already
given, proceed after the diff is reviewed and required checks pass; do not add
another confirmation gate. Recheck the exact PR head and target before merging.
Do not merge unrelated PRs, enable auto-merge, deploy, tag or release.

After an authorized merge, verify that the target branch contains the change.
Close the linked issue when its accepted outcome is complete and record the PR
and any remaining validation separately. Synchronize the existing local
checkout with a fast-forward only when it is clean, on the appropriate branch
and writable. Never overwrite local work to make synchronization succeed.
Report permission or divergence blockers.

## Release to main

When the maintainer requests a release, prepare a separate `dev` → `main` PR.
Review the complete release diff and wait for the main PR checks. Merge it only
with explicit authorization for that release. A push to `main` runs the
[image publication workflow](../image-publication.md). Creating a tag or
publishing a GitHub release requires applicable authorization. Homelab uses the
verified image digest for separately authorized production promotion and
deployment.

## Report the result

Close with the issue/PR links, outcome, verification, remaining limits and actual
checkout/branch used. For a local demo, state its checkout and URL. Do not say
"updated locally" when only GitHub was updated.
