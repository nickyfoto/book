---
title: 2026-07-13
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite", "datasette", "ai-assisted-programming", "llms", "coding-agents"]
---

# Simon Willison — 2026-07-13

## Highlight
DOOMQL stands out as a wonderfully unreasonable experiment—running a Doom engine entirely in SQLite. It perfectly highlights the creative potential of AI-assisted programming when combined with Simon's ecosystem, as he used Claude to instantly build a live-updating companion minimap using his new Datasette Apps plugin.

## Posts

**DOOMQL** · [Source](https://simonwillison.net/2026/Jul/13/doomql/#atom-everything)
Peter Gostev used GPT-5.6 Sol to build a functional Doom-like game where SQLite acts as the game engine, handling everything from collision to a recursive CTE ray tracer for rendering. Simon took this a step further by using Claude Fable 5 and his Datasette Apps plugin to quickly generate a live-updating HTML and JavaScript minimap that reflects the game state in the browser while playing in the terminal. It is a brilliant showcase of using LLMs to push small sharp tools to their absolute limits.

**sqlite-utils 4.1.1** · [Source](https://simonwillison.net/2026/Jul/12/sqlite-utils/#atom-everything)
This release patches a dangerous edge case in `table.transform()` involving destructive `ON DELETE` actions inside open transactions. Interestingly, the bug was caught during a Claude chat while experimenting with the previous 4.1 release. The update also vastly improves the documentation by comprehensively cross-referencing the CLI and Python API sections.

**datasette code-frequency chart on GitHub** · [Source](https://simonwillison.net/2026/Jul/13/datasette-code-frequency/#atom-everything)
Simon reflects on how recent cutting-edge coding agents have accelerated his open-source output. A quick look at the GitHub code-frequency chart for Datasette shows a massive spike in recent activity, perfectly aligning with his adoption of next-generation models like Opus 4.8, Fable 5, and GPT-5.6 Sol.

## Project Pulse
The overarching theme across these posts is the massive productivity multiplier of the newest generation of AI models like GPT-5.6 Sol and Fable 5. Whether it is spotting obscure database transaction bugs in sqlite-utils, accelerating Datasette commits, or generating instant UI tools for a recursive-CTE ray tracer, AI-assisted programming is deeply embedded in every layer of Simon's workflow.