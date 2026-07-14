---
title: 2026-07-05
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite-utils", "claude fable", "coding agents", "agentic engineering"]
---

# Simon Willison — 2026-07-05

## Highlight
Simon demonstrates the profound impact of agentic engineering by having Claude Fable and GPT-5.5 audit and finalize the `sqlite-utils` 4.0rc2 release. The process highlights the power of cross-model review and reveals that a major codebase overhaul via autonomous agents would cost around $150 in raw API usage.

## Posts

**[sqlite-utils 4.0rc2, mostly written by Claude Fable](https://simonwillison.net/2026/Jul/5/sqlite-utils-fable/#atom-everything)**
Simon used Claude Code (running Claude Fable) from his iPhone to conduct a final review of the upcoming `sqlite-utils` 4.0 release, uncovering severe data-loss bugs related to transaction handling. Over 37 prompts and 34 commits, the agent churned through code asynchronously while Simon attended a 4th of July parade. Interestingly, Simon employed a cross-model review strategy, using GPT-5.5 to check Claude's work, which successfully caught two additional high-priority bugs. He also used the AgentsView tool to calculate that the entire autonomous refactoring session would have cost $149.25 in raw API fees. Finally, he notes that AI agents are perfect for generating release notes since they require boring, predictable accuracy.

**[sqlite-utils 4.0rc2](https://simonwillison.net/2026/Jul/5/sqlite-utils/#atom-everything)**
A brief release announcement for `sqlite-utils` version 4.0rc2. It directs readers to the main article detailing the AI-assisted development process.

## Project Pulse
Simon is heavily focused on pushing `sqlite-utils` 4.0 to stable while maximizing his use of the Claude Fable model for agentic coding before Anthropic changes its pricing on July 7th to charge full API costs.