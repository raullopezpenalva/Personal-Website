# Adoption of the agent working method

Date: 2026-11-28. Status: adopted repository method for
[issue #78](https://github.com/raullopezpenalva/Personal-Website/issues/78).
This document records the rationale; executable instructions live in
[AGENTS.md](../../AGENTS.md) and its linked guides.

## Reviewed references

The maintainer requested a comparison of the AGENTS.md files in the existing
local projects. Reviewed the root instructions in Technical Production App,
Contact Service, homelab, homelab-reference, knowledge-system and
actividad-profesional, the TPA frontend/backend/docs instructions, homelab
service/infrastructure instructions, and Contact Service's linked workflow,
environment and architecture guides. These were read as references, not as
authority to operate on or modify those projects.

| Observed principle | Adaptation for this website |
| --- | --- |
| Contact Service's short entry point and mandatory linked guides | A concise root AGENTS.md with workflow, environment and architecture owners. |
| TPA's issue-driven implementation and focused branches | Issue → focused branch → change/docs → verification → PR; descriptive codex issue branches. |
| Contact Service and TPA container-only agent execution | Use the existing Node devcontainer, with no host dependency/tool installation fallback. |
| TPA's component/CSS ownership and restrained design system | Retain this repository's actual React/CSS organization and public identity. |
| Knowledge/professional repositories' evidence and document ownership | Distinguish proposal, branch, CI, image publication and production; keep each fact/backlog in its owning project. |
| Homelab's operational boundaries | Source/publication remain here; infrastructure and deployment remain in homelab. |
| Different merge defaults across projects | Personal Website requires explicit authorization for each task's merge; an authorization already given remains valid. |
| Existing workflow gaps exposed by the visual demo | Prefer the real local checkout, disclose path/permission mismatches, and never silently create a second clone. |

The methods differ in language, branch conventions and verification intensity.
The adopted rules reflect this public frontend: technical repository material
in English, conversation in Spanish, ES/EN public copy, existing product
documents retain their language. Documentation-only changes receive proportional
checks; a full local application build is not imposed just to edit prose.

## Boundaries of this adoption

This change introduces instructions, contribution guidance and templates.
It does not change application behavior, container configuration, CI workflows,
permissions or production deployment. It does not add an agent service or imply
multi-agent execution. It does not integrate the visual demo in #77.

The existing local checkout was inspected and had no local edits; its main was
behind its known remote tracking branch. This chat could read it but could not
write FETCH_HEAD, attach it as a writable checkout or access the local Docker
socket. The task therefore uses the authorized GitHub connector for branch/PR
delivery, with no replacement clone. Local fast-forward synchronization must not
be reported as completed without actual write access.

Follow the linked issue/PR for completion evidence and actual merge/CI state.
Do not treat these environment observations as a permanent property of future
agent sessions.
