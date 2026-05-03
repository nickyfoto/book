---
title: 2026-04-29
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "llm", "generative-ai", "projects"]
---

# Simon Willison — 2026-04-29

## Highlight
The standout update today is the alpha release of `llm 0.32a0`, which introduces a major architectural shift to handle the complex realities of modern frontier models. By moving from a simple text-in/text-out abstraction to one based on message sequences and typed streaming parts, Simon is future-proofing the library to seamlessly support reasoning tokens, server-side tool calls, and multi-modal inputs and outputs.

## Posts

**[LLM 0.32a0 is a major backwards-compatible refactor]** · [Source](https://simonwillison.net/2026/Apr/29/llm/#atom-everything)
Simon has released an alpha version of his LLM Python library and CLI tool that significantly refactors how models process prompts and responses. Recognizing that modern LLMs possess complex capabilities like reasoning, executing tool calls, and returning images or audio, the original text-in/text-out abstraction was no longer sufficient. The library now models inputs as a sequence of conversational messages and outputs as a stream of typed message parts. Developers can use the new `llm.user()` and `llm.assistant()` builder functions to cleanly feed in previous conversation turns without relying on SQLite, while the updated streaming interface elegantly interleaves text, tool execution requests, and reasoning output. For CLI users, the only visible change is a new `-R/--no-reasoning` flag that suppresses thinking tokens, and Python API users gain a new built-in serialization mechanism to roll their own storage alternatives. 

**[llm 0.32a1]** · [Source](https://simonwillison.net/2026/Apr/29/llm-3/#atom-everything)
This is a rapid follow-up patch to the `0.32a0` alpha release. It addresses a specific bug where conversations that included tool-calling were failing to correctly reinflate from the SQLite storage layer.

## Project Pulse
Today is entirely dedicated to the `llm` project, marking a critical evolution in its core abstractions to keep pace with the rapidly advancing reasoning and multi-modal capabilities of modern AI models. Simon is actively using this alpha phase to exercise the new design in real-world environments, with an eye toward a future redesign of the SQLite logging system to model these complex, repeated conversations as a deduplicated graph.