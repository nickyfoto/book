---
title: 2026-05-27
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["coding-agents", "llms", "openai", "anthropic", "sqlite"]
---

# Simon Willison — 2026-05-27

## Highlight
Simon makes a compelling case that April 2026 marks a new inflection point where frontier AI labs have found true product-market fit with coding agents. By analyzing sudden enterprise pricing pivots, sales hiring sprees, and massive inference compute deals, he illustrates how the enterprise adoption of AI agents is finally turning massive usage into real revenue.

## Posts

**[I think Anthropic and OpenAI have found product-market fit](https://simonwillison.net/2026/May/27/product-market-fit/#atom-everything)**
Simon argues that the sudden shift by OpenAI and Anthropic to charge enterprise customers full API token prices for agent usage signals true product-market fit. He notes that heavy coding agent users easily burn thousands of dollars in token equivalents, prompting labs to pivot away from middlemen like Cursor or Copilot to capture this enterprise value directly. The piece features some classic Simon dogfooding—using Claude Code and Datasette Agent to analyze AI lab job listings—and highlights a SpaceX S-1 filing revealing Anthropic's staggering $1.25 billion monthly compute spend.

**[sqlite AGENTS.md](https://simonwillison.net/2026/May/27/sqlite-agents/#atom-everything)**
SQLite has introduced an `AGENTS.md` file aimed directly at LLM coding agents interacting with their repository. While the project explicitly refuses to accept agent-generated code, they are actively welcoming "agentic bug reports" that include reproducible test cases. Simon notes that the flood of AI-generated issues has even prompted SQLite to create a dedicated bug forum, where D. Richard Hipp is actively addressing them.

**[Quoting Kyle Ferrana](https://simonwillison.net/2026/May/27/kyle-ferrana/#atom-everything)**
A quick link post highlighting a clever Star Trek metaphor from Kyle Ferrana about AI misuse and coding agents. The dialogue uses Picard and Data to illustrate that defensive measures ("raising shields") aren't hubris or a claim of immunity, but simply prudent strategy when managing automated systems.

## Project Pulse
Coding agents are clearly dominating the current discourse, shifting from experimental novelties to daily drivers that consume massive compute and generate real revenue. We are also seeing the fascinating second-order effects of this shift in the open-source ecosystem, such as major projects like SQLite formalizing rules of engagement for automated agents exploring their codebases.