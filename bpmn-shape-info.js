// BPMN Shape Info — content for click popovers.
// Maps element IDs to their BPMN type, role, and 2-3 trip-management-domain examples.

window.BPMN_SHAPE_INFO = {
  // ============================================================
  // LIFECYCLE BPMN
  // ============================================================
  'lc-start': {
    name: 'Trigger fires',
    type: 'Start event',
    role: 'A trigger that may produce a task — message, signal, scheduled query, or manual creation.',
    examples: [
      'Client message arrives via WhatsApp',
      'Signal monitor detects a flight delay',
      'Ops associate clicks "+ New Task"'
    ]
  },
  'lc-fork': {
    name: 'Creation methods',
    type: 'Parallel gateway',
    role: 'Indicates the system supports all three creation methods in parallel — not a runtime split.',
    examples: [
      'Manual + automatic + hybrid all available simultaneously',
      'Same client can have AI-suggested and human-created tasks at once'
    ]
  },
  'lc-manual': {
    name: 'Manual',
    type: 'Manual task',
    role: 'A human creates the task directly. AI may pre-fill fields, but a human is in the driver\'s seat.',
    examples: [
      'Click on a chat message → "Create task" with AI-pre-filled title',
      'Click "+ New Task" on the dashboard',
      'Capture an ad-hoc reminder mid-conversation'
    ]
  },
  'lc-auto': {
    name: 'Automatic',
    type: 'Service task',
    role: 'AI detects a task-shaped trigger above auto-confidence threshold and creates the task without human review.',
    examples: [
      'Per-message classifier on a clear "book hotel" request',
      'Scheduled query: trips at T-7 days auto-creates pre-arrival checklist',
      'Booking confirmation email auto-creates "send confirmation to client" task'
    ]
  },
  'lc-hybrid': {
    name: 'Hybrid (AI proposes)',
    type: 'User task',
    role: 'AI detects a trigger but confidence is below auto threshold. Task created in "needs review" state for human approval.',
    examples: [
      'Conversation watcher: ambient suggestion mid-chat',
      'Vague taste signal: "the Lutetia was way too modern" → preference task awaits review',
      'Award-space alert at 75% confidence → human confirms before booking'
    ]
  },
  'lc-entered': {
    name: 'Task entered',
    type: 'Intermediate event',
    role: 'Task is now active in the system, visible in the dashboard, ready to execute.',
    examples: [
      'Task appears in the All Tasks view',
      'Assignee gets a notification',
      'Activity log: "Created by AI / human" recorded'
    ]
  },
  'lc-exec-gate': {
    name: 'Routing decision',
    type: 'Exclusive gateway',
    role: 'Routes the task to AI or a human based on its routing tier (auto / assist / escalate).',
    examples: [
      'Auto tier → AI executes end-to-end',
      'Assist tier → AI proposes, human approves',
      'Escalate tier → human takes over immediately'
    ]
  },
  'lc-ai-exec': {
    name: 'AI executes',
    type: 'Service task',
    role: 'AI takes the task end-to-end, no human gate during execution.',
    examples: [
      'Auto-classifier marks confirmation email "received" and updates the task',
      'Scheduled query closes pre-arrival tasks once the departure date passes',
      'Booking-confirmation parser updates a task when a supplier email arrives'
    ]
  },
  'lc-human-exec': {
    name: 'Human executes',
    type: 'User task',
    role: 'Ops or TA does the work, often touching the supplier or client directly.',
    examples: [
      'TA calls Four Seasons George V to negotiate a suite upgrade',
      'Ops associate sends pre-arrival message to a client traveling to Seoul',
      'TA writes a personalised birthday note for a returning client'
    ]
  },
  'lc-check': {
    name: 'Completion check',
    type: 'Intermediate event',
    role: 'System evaluates whether the task is done. If yes, route to closure; if not, loop back.',
    examples: [
      'Booking confirmation email arrives → check passes',
      'Reply received from supplier → check passes',
      'Time-out reached without progress → check fails, escalate'
    ]
  },
  'lc-close-gate': {
    name: 'Closure path',
    type: 'Exclusive gateway',
    role: 'Picks one of four closure paths based on signal type.',
    examples: [
      'Manual completion → human marks done',
      'AI auto-close → AI signals completion (auto-tier task)',
      'AI propose + ACK → AI suggests close, human confirms',
      'Dismiss → cancel without completion'
    ]
  },
  'lc-manual-complete': {
    name: 'Manual complete',
    type: 'Manual task',
    role: 'A human marks the task done. Always available — lowest trust bar.',
    examples: [
      'TA ticks off "called the hotel" task',
      'Ops manager closes a follow-up after talking to the client',
      'Manual close on a high-stakes task even if AI thinks it\'s done'
    ]
  },
  'lc-ai-auto-close': {
    name: 'AI auto-close',
    type: 'Service task',
    role: 'AI closes a task it owned end-to-end. AI knows the task is done because it executed.',
    examples: [
      'Auto-tier "fetch hotel rate" — AI got the rate, marks itself done',
      'Auto-tier "send pre-arrival message" — AI sent it, closes task',
      'Auto-tier "monitor flight status" closes when the flight lands'
    ]
  },
  'lc-ai-propose': {
    name: 'AI propose + ACK',
    type: 'User task',
    role: 'AI detects evidence of completion and surfaces a one-click close prompt for human confirmation.',
    examples: [
      'AI sees confirmation email → "Close task?" prompt',
      'Conversation moves past the issue → "Looks resolved, close?"',
      'External signal: booking confirmed by supplier → "Close booking task?"'
    ]
  },
  'lc-dismiss': {
    name: 'Dismiss',
    type: 'Manual task',
    role: 'A human cancels the task without completion. Reason captured for audit.',
    examples: [
      'Client cancelled the trip — dismiss all related tasks',
      'Duplicate task created in error',
      'Task no longer relevant — dismiss with reason "scope changed"'
    ]
  },
  'lc-end': {
    name: 'Task closed',
    type: 'End event',
    role: 'Task is fully closed (completed or dismissed). Activity log records the closure reason. Reopening still possible.',
    examples: [
      'Task moves to Done state in dashboard',
      'Activity log: "Closed by AI auto-close at 14:32"',
      'Closure reason captured for audit'
    ]
  },

  // ============================================================
  // WRITE STREAMS BPMN
  // ============================================================
  'write-start': {
    name: 'Event arrives',
    type: 'Start event',
    role: 'A real-time event hits the system — could be any of the 9 WRITE streams from §4.',
    examples: [
      'Client WhatsApp message',
      'Trip pipeline state change (Booking → Confirmed)',
      'Booking confirmation from Four Seasons',
      'Payment processor webhook'
    ]
  },
  'write-classify': {
    name: 'Classify',
    type: 'Service task',
    role: 'AI classifier evaluates the event and decides whether (and how) to create a task.',
    examples: [
      'Per-message classifier: "is this task-shaped intent?"',
      'Conversation watcher: "should we propose a task here?"',
      'Returns: yes/no + confidence score + tier suggestion'
    ]
  },
  'write-gate': {
    name: 'Confidence?',
    type: 'Exclusive gateway',
    role: 'Confidence-threshold split. Above threshold → auto. Below → human review.',
    examples: [
      'Confidence ≥ 90% → auto',
      'Confidence 60–89% → assist (human review)',
      'Confidence < 60% → escalate (urgent attention)'
    ]
  },
  'write-auto': {
    name: 'Task created (auto)',
    type: 'End event',
    role: 'Task is created without human review and starts executing immediately.',
    examples: [
      'Booking confirmation auto-creates "send confirmation to client"',
      'Compliance alert auto-creates "renew passport" reminder'
    ]
  },
  'write-review': {
    name: 'Human review',
    type: 'User task',
    role: 'Ops or TA reviews the AI-proposed task and approves, edits, or rejects it.',
    examples: [
      'Vague client signal → human refines task title before approving',
      'Task suggested for VVIP client → human rewrites to add personal context',
      'Low-confidence proposal → human rejects'
    ]
  },
  'write-approve': {
    name: 'Approve / reject',
    type: 'Exclusive gateway',
    role: 'Human reviewer decides: create the task or dismiss it.',
    examples: [
      'Approve → task enters dashboard',
      'Edit + approve → task created with human edits',
      'Reject → no task; AI suggestion logged for retraining'
    ]
  },
  'write-created': {
    name: 'Task created',
    type: 'End event',
    role: 'Task is created after human approval and starts executing.',
    examples: [
      'Task appears in All Tasks view',
      'Assignee notified',
      'Activity log: "Created by AI, approved by [TA name]"'
    ]
  },
  'write-dismissed': {
    name: 'Dismissed',
    type: 'End event',
    role: 'Human rejected the AI proposal. No task created.',
    examples: [
      'False-positive AI suggestion',
      'Duplicate of existing task',
      'Out-of-scope for the current trip'
    ]
  },

  // ============================================================
  // READ STREAMS BPMN
  // ============================================================
  'read-timer': {
    name: 'Scheduled trigger',
    type: 'Timer start event',
    role: 'Cadence-driven trigger fires per its schedule (15 min / hourly / daily).',
    examples: [
      '15-min poll: tasks past due-date',
      'Hourly: clients with no message for > N hours',
      'Daily: trips departing in 7 days; visa expiring < 6 months'
    ]
  },
  'read-query': {
    name: 'Run query',
    type: 'Service task',
    role: 'System runs the configured query against stored data, returning a list of matches.',
    examples: [
      'Query: trips where departure_date − today = 7',
      'Query: clients with last_outbound_msg older than 2 hours',
      'Query: saved hotel searches with rate ≤ threshold'
    ]
  },
  'read-loop': {
    name: 'For each match',
    type: 'Service task (multi-instance)',
    role: 'Loop over each match returned by the query and process them one at a time.',
    examples: [
      '14 trips depart in 7 days → 14 task proposals',
      '3 clients have award-space matches → 3 alerts',
      '7 visas expiring soon → 7 reminders'
    ]
  },
  'read-propose': {
    name: 'Propose task',
    type: 'Service task',
    role: 'For each match, generate a candidate task with title, owner, due date, and category.',
    examples: [
      'Pre-arrival checklist for the Wong family\'s Tokyo trip',
      '"Book QF first class LAX-SYD" alert for client X',
      '"Renew passport" reminder for client Y\'s March trip'
    ]
  },
  'read-gate': {
    name: 'Confidence?',
    type: 'Exclusive gateway',
    role: 'Same auto / assist / escalate routing logic as the WRITE side.',
    examples: [
      'Pre-arrival checklist confidence high → auto-create',
      'Loyalty milestone proposal medium → human review',
      'Ambiguous match → skip rather than fire'
    ]
  },
  'read-auto': {
    name: 'Auto-create',
    type: 'End event',
    role: 'Task created without human review.',
    examples: [
      'Daily pre-arrival checklist auto-fires for trips at T-7',
      'Compliance reminder for an expiring passport auto-creates',
      'Templated post-trip follow-up auto-creates at T+2'
    ]
  },
  'read-review': {
    name: 'Human review',
    type: 'User task',
    role: 'Lower-confidence proposals queued for human approval before they reach the dashboard.',
    examples: [
      'Loyalty milestone proposal → human picks the gesture',
      'Hotel rate alert → human decides whether to message client now',
      'Stuck-trip diagnostic → human checks before escalating'
    ]
  },
  'read-skip': {
    name: 'Reviewed',
    type: 'End event',
    role: 'Human reviewed the proposal — either approved (becomes a task) or skipped (no task).',
    examples: [
      'Approved → task lands in dashboard',
      'Skipped → no task; signal logged for tuning'
    ]
  },

  // ============================================================
  // CREATION FLOW (MASTER SWIMLANE)
  // ============================================================
  'cf-msg': {
    name: 'Client message',
    type: 'Start event',
    role: 'A new message arrives from the client through any channel.',
    examples: [
      'WhatsApp: "Need to push Tokyo dates by 2 days"',
      'In-app chat: "Can we add a stopover in Singapore?"',
      'Email: "What\'s the cancellation policy on the Aman?"'
    ]
  },
  'cf-sig': {
    name: 'External signal',
    type: 'Start event',
    role: 'A non-message event from outside our system that may matter for active trips.',
    examples: [
      'Typhoon warning over Seoul, client arriving in 48 hrs',
      'Lufthansa cancels client\'s outbound the day before departure',
      'Four Seasons George V notifies of suite renovation'
    ]
  },
  'cf-state': {
    name: 'Trip / state change',
    type: 'Start event',
    role: 'A trip pipeline transition or calendar milestone fires.',
    examples: [
      'Trip moves to Confirmed → invoice client',
      'T-7 days from departure → pre-arrival checklist',
      'Trip ends → post-trip follow-up window opens'
    ]
  },
  'cf-prompt': {
    name: 'Ops prompts agent',
    type: 'Start event',
    role: 'A TA explicitly asks the AI agent to do work in the agent workspace.',
    examples: [
      '"Find luxury hotels in Porto for the Wongs"',
      '"Check award availability for QF12 LAX-SYD in August"',
      '"Draft a birthday note for client X"'
    ]
  },
  'cf-spot': {
    name: 'Ops spots something',
    type: 'Start event',
    role: 'Human notices a task is needed and creates one manually — bypasses AI entirely.',
    examples: [
      'TA in chat: "I just remembered we need to confirm the dietary"',
      'Ops associate after a call: "Need to follow up on the pricing question"',
      'Manager during portfolio review: "Add a check-in task for client X"'
    ]
  },
  'cf-classifier': {
    name: 'Per-message classifier',
    type: 'Service task',
    role: 'AI runs on every inbound message to decide if it contains task-shaped intent.',
    examples: [
      'Classifies "book Aman Tokyo for our anniversary" → high-confidence task',
      'Classifies "thanks for the heads up" → no task',
      'Classifies "the Lutetia was way too modern" → low-confidence preference task'
    ]
  },
  'cf-watcher': {
    name: 'Conversation watcher',
    type: 'Service task',
    role: 'Ambient AI watching active chat threads, surfaces inline suggestions to ops as conversations unfold.',
    examples: [
      '"Should we create a task to confirm dietary with the restaurant?"',
      '"Looks like the client wants to push by 2 days — task for date change?"',
      '"Mentioned a chemo last trip — care-context check-in task?"'
    ]
  },
  'cf-monitor': {
    name: 'Signal monitor',
    type: 'Service task',
    role: 'Polls or subscribes to external feeds, evaluates relevance to active trips.',
    examples: [
      'Weather feed: typhoon warning + client traveling to that city',
      'Flight tracker: schedule change on a booked flight',
      'Vendor feed: rate change on a booked hotel'
    ]
  },
  'cf-scheduler': {
    name: 'Scheduled query',
    type: 'Service task',
    role: 'Periodic query against our own data to find situations needing tasks.',
    examples: [
      'Daily: trips at T-7 days → pre-arrival checklists',
      'Hourly: unanswered client messages > 2 hrs',
      '15-min: tasks past due-date'
    ]
  },
  'cf-agent': {
    name: 'Agent mode',
    type: 'Service task',
    role: 'TA-prompted AI workspace. Splits the goal into AI sub-tasks (executable by AI) and human sub-tasks (need a human).',
    examples: [
      '"Find Porto hotels" → AI: search/rank/summarise. Human: TA picks 3 to send.',
      '"Plan the Tokyo trip" → AI: research dining/transfers. Human: TA confirms preferences.',
      '"Check QF award" → AI: live API check. Human: TA decides whether to book.'
    ]
  },
  'cf-review-gate': {
    name: 'Review queue',
    type: 'Exclusive gateway',
    role: 'AI proposals below auto-confidence land here for human approve / edit / reject.',
    examples: [
      'AI says 75% sure this is a task — human reviews first',
      'Conversation watcher proposal — TA judges if the moment is right',
      'Signal monitor proposal — TA decides if alert warrants client outreach'
    ]
  },
  'cf-manual': {
    name: 'Manual create',
    type: 'Manual task',
    role: 'Human-driven task creation, bypassing AI classification entirely.',
    examples: [
      'Click on a message → "Create task" with optional AI pre-fill',
      'Top-right "+ New Task" button on the dashboard',
      'After a phone call: ops captures follow-up tasks themselves'
    ]
  },
  'cf-created': {
    name: 'Task created',
    type: 'End event',
    role: 'Task is live in the system, assigned, and ready to execute.',
    examples: [
      'Visible in All Tasks filter',
      'Assignee receives notification',
      'Activity log: "Created by [source]"'
    ]
  },
  'cf-dismissed': {
    name: 'Dismissed',
    type: 'End event',
    role: 'AI proposal rejected by human reviewer. No task created.',
    examples: [
      'False-positive proposal',
      'Duplicate of existing task',
      'Out-of-scope or low priority'
    ]
  }
};
