---
title: 2026-06-30
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["generative-ai", "llms", "coding-agents", "shot-scraper", "anthropic"]
---

# Simon Willison — 2026-06-30

## Highlight
The release of `shot-scraper video` is a perfect illustration of Simon's "agentic engineering" workflow, showcasing how he leverages powerful local models like GPT-5.5 to write complex features that he wouldn't otherwise have time to build. It also demonstrates a brilliant pattern for CLI design: packing detailed examples into `--help` output so it functions like an embedded skill file for coding agents.

## Posts

**[Have your agent record video demos of its work with shot-scraper video](https://simonwillison.net/2026/Jun/30/shot-scraper-video/#atom-everything)**
Simon details the new `shot-scraper video` command, which uses a `storyboard.yml` file to drive Playwright and record application demos. He built this entire feature—including the code, documentation, and the Pydantic-validated YAML schema—using GPT-5.5 xhigh in Codex Desktop. He notes that making tools easily usable by coding agents allows them to record their own demos, especially when commands include rich `--help` text that agents can read directly.

**[shot-scraper 1.10](https://simonwillison.net/2026/Jun/30/shot-scraper/#atom-everything)**
This is the official release note for `shot-scraper` version 1.10. The major addition in this release is the `shot-scraper video` command and its accompanying `storyboard.yml` configuration.

**[What’s new in Claude Sonnet 5](https://simonwillison.net/2026/Jun/30/claude-sonnet-5/#atom-everything)**
Simon digs into the developer documentation for Anthropic's new Claude Sonnet 5, which claims Opus 4.8-level performance and features a 1 million token context window. While Anthropic advertises the same pricing as Sonnet 4.6, Simon used his Claude Token Counter tool to discover that the new tokenizer generates about 30% more tokens for the same input. This effectively makes Sonnet 5 roughly 1.28x more expensive for Python code and 1.42x more expensive for English text.

**[Quoting Anthropic](https://simonwillison.net/2026/Jun/30/anthropic/#atom-everything)**
A brief update quoting an Anthropic announcement on Twitter. The US Department of Commerce has lifted export controls on Claude Fable 5 and Mythos 5, and Anthropic will restore access to these models tomorrow.

**[Nano Banana 2 Lite](https://simonwillison.net/2026/Jun/30/nano-banana-2-lite/#atom-everything)**
Simon tests out Gemini 3.1 Flash Lite Image, also known internally as "Nano Banana 2 Lite," which Google positions as their fastest and cheapest image model. Generating a "Where's Waldo" style image of a raccoon with a ham radio, he found the results much improved compared to earlier versions, despite some lingering text spelling hallucinations.

**[The AI Compass](https://simonwillison.net/2026/Jun/30/the-ai-compass/#atom-everything)**
Simon shares a 29-question AI ethics quiz built by bambamramfan that placed him into "The Garage Tinkerer" archetype. He highlights the neat technical implementation, which operates as a single-page React app that avoids build steps by using the `<script type="text/babel">` trick.

## Project Pulse
Simon is heavily leaning into agent-assisted programming, using GPT-5.5 to write both the implementation and documentation for complex features, while simultaneously designing his CLI tools with detailed `--help` output so those same agents can use them autonomously.