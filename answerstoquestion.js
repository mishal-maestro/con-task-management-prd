// answerstoquestion.js
// =====================================================================
// SOURCE-OF-TRUTH for Open Questions answers.
//
// HOW TO UPDATE:
//   1. Edit the strings below — one per question (Q1-Q10).
//   2. Commit + push to GitHub.
//   3. The Pages site rebuilds in ~30-60 sec; new answers go live.
//
// FORMAT: each value is a plain string. Use \n for line breaks if you
// want multi-paragraph. Markdown is rendered as plain text — no markdown
// parser is loaded. Keep it short / direct.
//
// Empty string '' = "not yet answered" (shown muted on the page).
// =====================================================================

window.QUESTION_ANSWERS = {
  1: '',  // Bucket priority for MVP
  2: '',  // Listening cadence per WRITE stream and READ query
  3: '',  // Default routing per bucket
  4: '',  // Tolerance for false positives, per bucket
  5: '',  // Closure-confidence model
  6: '',  // Default views: ops associate vs TA
  7: '',  // Agent sub-tasks: same entity model as ops tasks, or separate?
  8: '',  // Scope boundary — Tasks vs Alerts/Monitoring
  9: '',  // VVIP / high-stakes bypass
  10: '', // Audit + undo bar
};
