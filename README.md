# Conductor Task Management Prototype

HTML/Tailwind prototype for the Conductor Task Creation & Management PRD.

## Structure

9 navigable pages:
- `index.html` — Overview: problem statement, exec summary, stat cards
- `definitions.html` — Vocabulary lock (12 terms)
- `origins.html` — 5 origin buckets with examples
- `write-streams.html` — WRITE streams table + BPMN flow
- `read-streams.html` — READ streams table + BPMN flow
- `routing.html` — Routing tiers, competence map, default routing matrix
- `creation-flow.html` — Master Creation Swimlane BPMN
- `lifecycle.html` — Task lifecycle text + BPMN
- `open-questions.html` — 10 alignment-meeting questions

4 BPMN diagrams hand-coded in HTML/CSS matching the bpmn-trip-flow.html style.

## Viewing

Open `index.html` in a browser. Tailwind CDN + vanilla JS, no build step.

## Source of Truth

Notion PRD: https://www.notion.so/359d1ecb21898155814bd4ba6597645b  
Local markdown: `Backlog/Conductor_Task_Management_Outline_v0.1.md`

All text copied verbatim from the PRD. Prototype adds visual BPMN diagrams the Notion page cannot render natively.

## Stack

- Tailwind CSS (CDN)
- Inter + JetBrains Mono fonts
- Vanilla JavaScript
- Dark slate theme (Maestro convention)
