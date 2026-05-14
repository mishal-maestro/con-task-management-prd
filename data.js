// data.js -- Page metadata and navigation config for Conductor Task Management prototype

const NAV_CONFIG = [
  { id: 'index',                section: '§1',     label: 'Overview',                href: 'index.html' },
  { id: 'definitions',          section: '§2',     label: 'Definitions',             href: 'definitions.html' },
  { id: 'origins',              section: '§3',     label: 'Task Origins',            href: 'origins.html' },
  { id: 'event-streams',        section: '§4',     label: 'Event-driven Streams',    href: 'event-streams.html' },
  { id: 'schedule-streams',     section: '§5',     label: 'Schedule-driven Streams', href: 'schedule-streams.html' },
  { id: 'routing',              section: '§6',     label: 'Routing Logic',           href: 'routing.html' },
  { id: 'lifecycle',            section: '§7',     label: 'Lifecycle',               href: 'lifecycle.html' },
  { id: 'open-questions',       section: '§8',     label: 'Open Questions',          href: 'open-questions.html' },
  { id: 'success-metrics',      section: '§10',    label: 'Success Metrics',         href: 'success-metrics.html' },
  { id: 'creation-flow',        section: 'App. A', label: 'Creation Flow',           href: 'creation-flow.html' },
  { id: 'task-inventory',       section: 'App. B', label: 'Task Inventory',          href: 'task-inventory.html' },
  { id: 'stream-direction',     section: 'App. C', label: 'Stream Direction',        href: 'stream-direction.html' },
  { id: 'example-records',      section: 'App. D', label: 'Example Records',         href: 'example-records.html' },
  { id: 'analogy-walkthroughs', section: 'App. E', label: 'Analogy Walkthroughs',    href: 'analogy-walkthroughs.html' },
  { id: 'task-types',           section: 'App. F', label: 'Task Types',              href: 'task-types.html' },
  { id: 'changelog',            section: 'Log',    label: 'Changelog',               href: 'changelog.html' },
];

const PAGE_DATA = {
  title: 'Conductor Task Management',
  version: 'Interactive Outline · v1.0',
  notionUrl: 'https://www.notion.so/35fd1ecb2189816fbd68fbce0cac241a',
};
