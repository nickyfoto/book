---
title: Simon Willison
weight: 16
bookCollapseSection: true
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "privacy", "memory", "advertising", "css", "html", "screen-readers", "web-standards", "datasette", "llms", "open-source", "github-issues", "security", "generative-ai", "prompt-injection", "coding-agents", "openai", "anthropic", "sqlite", "claude", "ai", "sql"]
---

# Simon Willison — Week of 2026-05-22 to 2026-05-29

## Highlight of the Week
This week's most significant milestone is the release of Datasette 1.0a31, which fundamentally shifts the project's paradigm by introducing UI support for executing write queries directly against the database. This officially bridges Datasette from a purely read-only tool to one that embraces secure data mutation, allowing developers to save and template insert, update, and delete operations.

## Key Posts
**[I think Anthropic and OpenAI have found product-market fit]** · Source
Simon analyzes the shift in enterprise pricing to argue that AI coding agents have crossed the threshold into massive usage and real revenue generation. He points to Anthropic's staggering $1.25 billion monthly compute spend and notes that labs are pivoting to capture enterprise value directly from heavy agent users rather than relying on middlemen.

**[Claude Opus 4.8: "a modest but tangible improvement"]** · Source
Simon highlights Anthropic's refreshing honesty regarding this incremental update, which lowers the prompt cache minimum to 1,024 tokens and allows mid-conversation system messages. He immediately tested the model's decreased hallucination rate and new caching mechanics using his LLM CLI to generate SVG pelicans in an agentic loop.

**[The memory shortage is causing a repricing of consumer electronics]** · Source
Exploring the physical ripple effects of the AI boom, Simon breaks down how data centers' insatiable demand for High-Bandwidth Memory (HBM) is consuming fixed silicon wafer capacity. This supply chain constraint is severely impacting standard consumer RAM production, threatening the availability and pricing of cheap smartphones globally.

**[Microsoft Copilot Cowork Exfiltrates Files]** · Source
Simon digs into a fascinating prompt injection vulnerability demonstrating the severe data exfiltration risks inherent in enterprise agentic systems. Attackers can manipulate the Copilot agent to send unapproved emails with pre-authenticated OneDrive links, which are then secretly leaked via network requests from rendered external images.

## Project Updates
Datasette saw massive ecosystem momentum this week, anchored by the 1.0a30 alpha which added a customizable "Jump to..." menu, and the 1.0a31 alpha which introduced game-changing write query capabilities. Simon aggressively dogfooded the new Python and JavaScript extension hooks by simultaneously shipping the `datasette-agent` and `datasette-fixtures` plugins. On the CLI front, he released `llm-anthropic 0.25.1` to immediately support Claude Opus 4.8's constraints and fast mode options.

## Themes
A dominant thread this week is the real-world friction of agentic AI systems colliding with existing ecosystems, spanning from physical supply chains to open-source software maintenance. Simon repeatedly explored how automated agents are altering the security and maintainer landscape, noting how they flood projects like `curl` with vulnerabilities, generate AI "slop" in issue trackers, and force repositories like SQLite to establish formal rules of engagement for LLMs.