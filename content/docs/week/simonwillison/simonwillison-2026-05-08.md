---
title: 2026-05-08
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["html", "security", "prompt-engineering", "llms", "claude-code"]
---

# Simon Willison — 2026-05-08

## Highlight
Simon re-evaluates his long-standing habit of asking LLMs for Markdown output, sparked by Anthropic's Thariq Shihipar advocating for the rich capabilities of HTML. He tests this out practically by using his `llm` CLI to generate an interactive HTML explanation of a newly discovered Linux security exploit.

## Posts

**[Using Claude Code: The Unreasonable Effectiveness of HTML]** · [Source](https://simonwillison.net/2026/May/8/unreasonable-effectiveness-of-html/#atom-everything)
Simon reflects on a piece by Thariq Shihipar (from Anthropic's Claude Code team) that argues for requesting HTML instead of Markdown from Claude. While Markdown's token-efficiency was a strict necessity during the 8,192-token GPT-4 days, modern LLMs can leverage HTML to output SVG diagrams, interactive widgets, and rich in-page navigation. Simon tests this technique by piping an obfuscated Python exploit from `copy.fail` into `gpt-5.5` via his `llm` CLI tool, successfully prompting the model to generate a fully styled, interactive HTML explanation of the code. 

## Project Pulse
Simon is expanding his recent work on HTML tooling—moving beyond just building standalone interactive utilities to leveraging LLMs for rich, ad-hoc HTML explanations generated directly from the command line.