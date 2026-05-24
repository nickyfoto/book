---
title: Week 20 Summary
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["html", "security", "prompt-engineering", "llms", "claude-code", "hallucinations", "journalism", "careers", "sqlite", "coding-agents", "agentic-engineering", "generative-ai", "llm", "datasette", "artificial intelligence", "debugging", "marketing", "ai-assisted-programming", "content-security-policy", "ai-agents", "codex", "vibe-coding", "inaturalist", "tools"]
---

# Simon Willison — Week of 2026-05-08 to 2026-05-15

## Highlight of the Week
The standout development this week is Simon's rapid adaptation to the latest frontier model capabilities, most notably releasing `llm 0.32a2` to expose and visualize the new interleaved reasoning tokens of GPT-5 class models directly in the terminal. This perfectly pairs with his hands-on explorations of embedding LLM calls deeply into developer workflows, such as executing prompts via script shebangs and leveraging models to output rich HTML rather than just Markdown.

## Key Posts

**[Using Claude Code: The Unreasonable Effectiveness of HTML]** · [Source](#)
Inspired by Anthropic's Thariq Shihipar, Simon questions the long-standing habit of restricting LLM outputs to Markdown, noting that modern models can leverage HTML for rich, interactive elements like SVG diagrams. He successfully proves this by piping obfuscated Python exploit code into his `llm` CLI to generate a fully styled, interactive explanation directly from the command line.

**[Using LLM in the shebang line of a script]** · [Source](#)
In a highly practical TIL, Simon explores how to invoke his `llm` CLI directly in the shebang (`#!/usr/bin/env llm`) of plain English text files. He demonstrates embedding tool calls and executing YAML templates that define extra tools as Python functions, including a complex setup that queries his blog via the Datasette SQL API.

**[Not so locked in any more]** · [Source](#)
Simon highlights a fundamental shift in software architecture driven by AI coding agents: programming language choices are increasingly fungible rather than permanent commitments. He shares an anecdote of a team using agents to rewrite native mobile apps into React Native, treating the framework as a temporary tool that can be cheaply ported back to native code later if it turns out to be the wrong choice.

**[CSP Allow-list Experiment]** · [Source](#)
Built using GPT-5.5 xhigh via the Codex desktop app, this technical experiment explores intercepting Content Security Policy (CSP) errors within sandboxed iframes. It features a custom `fetch()` wrapper that gracefully passes errors to the parent window, allowing users to dynamically approve domains for an allow-list before refreshing the page.

## Project Updates
It was a highly productive release week across Simon's ecosystem, headlined by the `llm 0.32a2` alpha, which adapts to OpenAI's new endpoints to natively display GPT-5 reasoning steps. In the Datasette world, he pushed `datasette 1.0a29` after using GPT-5.5 to debug a race-condition segfault, launched a dedicated Datasette project blog, and released the `datasette-ip-rate-limit 0.1a0` plugin built with Codex. Finally, he published `inaturalist-clumper 0.1`, a stabilized utility that compiles his personal iNaturalist sightings into JSON.

## Themes
A dominant theme this week is the broader architectural and economic impact of "agentic engineering," where AI not only accelerates development but fundamentally alters software maintenance costs and dissolves traditional language lock-in. Concurrently, Simon continues to demonstrate the power of AI-assisted "vibe-coding," consistently using tools like Codex and Claude to rapidly spin up small, sharp utilities—from QR code generators to rate-limiting plugins—to solve immediate infrastructural needs.