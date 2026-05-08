# Conductor Task Management — Interactive PRD

Web companion to the Conductor Task Creation & Management PRD. The Notion page is the canonical source of truth; this site renders the same content with embedded BPMN diagrams and clickable shape popovers that Notion can't render natively.

## Structure

9 navigable pages:
- `index.html` — Overview: problem statement, stat cards, three-jobs cards, reference patterns
- `definitions.html` — Vocabulary (12 terms in a 3-column grid)
- `origins.html` — 5 origin buckets, 5 examples each
- `write-streams.html` — WRITE streams table + BPMN flow
- `read-streams.html` — READ streams table + BPMN flow
- `routing.html` — Routing tiers (3-column), AI vs human competence (2-column), default-routing matrix
- `lifecycle.html` — Lifecycle text (3-column) + Lifecycle BPMN
- `creation-flow.html` — Master Creation Swimlane BPMN
- `open-questions.html` — 10 alignment-meeting questions

## BPMN diagrams

4 hand-coded HTML/CSS BPMN diagrams (lifecycle, WRITE flow, READ flow, master creation swimlane) with:
- Edge-routing (arrows touch shape borders, not centres)
- Embedded horizontal scroll containers
- Click-popover on every shape (type, role, 2-3 trip-management examples)

## Viewing

Open `index.html` in a browser. Tailwind via CDN + vanilla JS, no build step.

## Source of truth

- Notion: https://www.notion.so/359d1ecb21898155814bd4ba6597645b
- Local markdown: `Backlog/Conductor_Task_Management_Outline_v0.1.md`

All text copied verbatim from the PRD. The Interactive PRD adds visual BPMN diagrams and a navigable layout — it is not a replacement for the Notion doc.

## Stack

- Tailwind CSS (CDN)
- Inter + JetBrains Mono fonts
- Vanilla JavaScript (no framework, no build)
- Dark slate theme matching Maestro convention
