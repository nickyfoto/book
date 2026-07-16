---
title: 2026-07-08
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["ai-assisted-programming", "sqlite-utils", "agentic-engineering", "llms"]
---

# Simon Willison — 2026-07-08

## Highlight
Jarred Sumner’s post on rewriting Bun from Zig to Rust using AI agents is an incredible showcase of how frontier LLMs are upending the old Spolsky rule of "never rewrite from scratch". It is a masterclass in agentic engineering, utilizing dynamic workflows and a TypeScript conformance suite to successfully port millions of lines of code.

## Posts

**[Rewriting Bun in Rust](https://simonwillison.net/2026/Jul/8/rewriting-bun-in-rust/#atom-everything)** · Source
Jarred Sumner details the agentic engineering process of rewriting Bun from Zig to Rust to solve complex memory management issues. Using a language-independent TypeScript test suite as a conformance suite, an agent harness powered by Claude Mythos/Fable automated the massive code translation. The sheer scale of the project required 5.9 billion input tokens—around $165,000 at API pricing—proving that coordinated parallel agents fundamentally change the calculus of ground-up software rewrites.

**[Introducing GPT‑Live](https://simonwillison.net/2026/Jul/8/introducing-gptlive/#atom-everything)** · Source
OpenAI has finally updated ChatGPT's voice mode, enabling it to delegate complex reasoning and web searches to the frontier GPT-5.5 model behind the scenes. Simon notes the previous GPT-4o era model was too weak and outdated for effective brainstorming, making the new GPT-Live a significant and impressive upgrade. He also highlights a strange bug from the preview period where the model would inappropriately interrupt him to laugh, a quirk that OpenAI has since tweaked.

**[github-code Web Component](https://simonwillison.net/2026/Jul/7/github-code-component/#atom-everything)** · Source
Simon used GPT-5.5 to build an experimental, small sharp tool: a Web Component for embedding GitHub code snippets. The component takes a standard GitHub URL, transforms it into a raw user content link, and fetches the specific line ranges to display them natively with line numbers. It is a quick and highly practical experiment, though it currently lacks syntax highlighting.

**[Quoting Kenton Varda](https://simonwillison.net/2026/Jul/8/kenton-varda/#atom-everything)** · Source
Simon shares a quote from Kenton Varda declaring a strict moratorium on AI-generated change descriptions, such as PR and commit messages, from his team. Varda found that AI tools simply summarize the visible, obvious code details rather than providing the necessary high-level framing for the changes, making them worse than useless for actual code review.

**[sqlite-utils 4.0](https://simonwillison.net/2026/Jul/7/sqlite-utils/#atom-everything)** · Source
The stable release of `sqlite-utils 4.0` is now available. This major update to his popular CLI tool and Python library natively introduces database schema migrations.

**[sqlite-migrate 0.2](https://simonwillison.net/2026/Jul/7/sqlite-migrate/#atom-everything)** · Source
This release officially retires the `sqlite-migrate` library. It now serves purely as a backward-compatibility shim against the newly released `sqlite-utils 4.0` dependency, which handles all database migrations natively.

**[sqlite-utils 4.0rc4](https://simonwillison.net/2026/Jul/7/sqlite-utils-2/#atom-everything)** · Source
This was the final release candidate before the major 4.0 stable launch. It mainly incorporated feedback from a detailed, AI-assisted code review performed by Claude Fable 5.

## Project Pulse
This digest marks a major milestone for Simon's SQLite ecosystem with the stable release of `sqlite-utils 4.0` bringing built-in schema migrations and officially retiring the standalone `sqlite-migrate` tool. Meanwhile, his posts show a deep interest in testing the agentic limits of new frontier models, from whipping up Web Components with GPT-5.5 to extensively reviewing library code with Claude Fable 5.