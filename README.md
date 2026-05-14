# Conductor Task Management — Interactive Outline

Web companion to the Conductor Task Creation & Management v1.0 outline. The Notion page is the canonical source of truth; this site renders the same content with embedded BPMN diagrams and clickable shape popovers that Notion can't render natively.

This is an **outline** — a territory map for the alignment meeting. Not a locked-down PRD with acceptance criteria. The Notion doc and this site live alongside each other; either is canonical.

## Structure

16 navigable pages:
- `index.html` — Overview: executive summary, reading guide, stat cards, problem statement, three-jobs cards, reference patterns
- `definitions.html` — Vocabulary (14 terms in a 3-column grid)
- `origins.html` — 5 origin buckets, with §3.1a Explicit / §3.1b Behavioural split for Client-driven
- `event-streams.html` — Event-driven Streams (push) — table + BPMN flow
- `schedule-streams.html` — Schedule-driven Streams (pull) — table + BPMN flow
- `routing.html` — Routing tiers (3-column), AI vs human competence (2-column), default-routing matrix, §6.5 PR-review vs Incident analogy
- `lifecycle.html` — Lifecycle text (3-column for Creation/Management/Closure) + Lifecycle BPMN with 4-stage Creation flow + §7.4 Explainability
- `open-questions.html` — 15 alignment-meeting questions
- `success-metrics.html` — Six signals (not targets) per §10
- `creation-flow.html` — Master Creation Swimlane BPMN (4-stage flow: Signal → AI processing → Suggestion → Approval gate → Canonical task)
- `task-inventory.html` — Working list of task types per origin (Appendix B)
- `stream-direction.html` — Orthogonality of stream direction vs task intent (Appendix C)
- `example-records.html` — 3 worked task records with all 23 canonical fields populated (Appendix D)
- `analogy-walkthroughs.html` — 3 end-to-end walkthroughs (PR-review pattern, Incident pattern, multi-signal correlation) (Appendix E)
- `task-types.html` — 9 task_type categories phased v1/v2/v3 + Surface rollout summary (Appendix F)
- `changelog.html` — Version history (v0.2 + v1.0 entries)

## BPMN diagrams

4 hand-coded HTML/CSS BPMN diagrams (lifecycle, Event-driven flow, Schedule-driven flow, master creation swimlane) with:
- Edge-routing (arrows touch shape borders, not centres)
- Embedded horizontal scroll containers
- Click-popover on every shape (type, role, 2-3 trip-management examples)

## Viewing

Open `index.html` in a browser. Tailwind via CDN + vanilla JS, no build step.

## Source of truth

- Notion v1.0: https://www.notion.so/35fd1ecb2189816fbd68fbce0cac241a
- Notion Changelog: https://www.notion.so/35fd1ecb21898129a433ee3150f805ff
- Local markdown: `Backlog/Conductor_Task_Management_Outline_v1.0.md`
- Local changelog: `Backlog/Conductor_Task_Management_Outline_Changelog.md`

All text copied from the Notion outline. The Interactive Outline adds visual BPMN diagrams and a navigable layout — it is not a replacement for the Notion page.

## Stack

- Tailwind CSS (CDN)
- Inter + JetBrains Mono fonts
- Vanilla JavaScript (no framework, no build)
- Dark slate theme matching Maestro convention
