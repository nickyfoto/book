---
title: 2026-07-25
weight: 8
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "prompt injection", "ruff", "anthropic", "llms"]
---

# Simon Willison — 2026-07-25

## Highlight
The standout today is Simon's practical integration of AI coding assistants to handle the massive linting changes introduced in Ruff v0.16.0. It perfectly demonstrates how small, sharp developer tools paired with the latest LLMs can effortlessly resolve technical debt across multiple repositories at scale.

## Posts

**[Ruff v0.16.0](https://simonwillison.net/2026/Jul/25/ruff/#atom-everything)** · Source
Astral recently released Ruff v0.16.0, dramatically increasing the number of default enabled rules from 59 to 413 to automatically catch severe runtime and syntax issues. After noticing CI failures in his projects, Simon ran the new Ruff against Datasette, sqlite-utils, and LLM, uncovering hundreds of minor issues. Taking advantage of Astral's detailed error outputs—and noting their new home at OpenAI—Simon deployed Codex (GPT-5.6 Sol high) and Claude Code (with Opus 5) to automatically execute the upgrades and fix his repositories.

**[Quoting Boris Cherny](https://simonwillison.net/2026/Jul/25/boris-cherny/#atom-everything)** · Source
Simon highlights an observation from Boris Cherny regarding Anthropic's Claude Opus 5 and its robust resistance to prompt injection. Buried in the system card, evaluation scores across red teaming indicate that Opus 5 is extremely difficult to successfully prompt inject, marking a significant security milestone for the model.

## Project Pulse
Today's posts reflect a strong theme of leaning on the newest frontier models—specifically Opus 5 and GPT-5.6—both as subjects of security evaluation and as highly capable tools for automating massive codebase refactoring.