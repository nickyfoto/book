---
title: 2026-08-04
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "open source", "command line tools", "coding agents"]
---

# Simon Willison — 2026-08-04

## Highlight
The standout post today is the release of **LLM 0.32**, which represents a monumental shift for Simon's CLI tool, effectively transforming it into an open-source agent framework. With native support for reasoning traces, server-side tools (including Anthropic MCP and OpenAI code interpreter), and a Git-inspired content-addressable SQLite logging system, this update drastically expands what's possible for command-line AI scripting.

## Posts

**[New release of LLM adds support for reasoning traces, OpenAI Responses, server-side tools, and smarter logging](https://simonwillison.net/2026/Aug/4/new-release-of-llm/#atom-everything)** · Source
Simon has launched **LLM 0.32**, the most significant release since the project's inception, introducing built-in features that push the utility toward a full-blown agent framework. Key highlights for CLI users include stderr-redirected reasoning traces, out-of-the-box integration with the GPT-5.6 Luna model, and the ability to trigger server-side tools like OpenAI's Code Interpreter and WebSearch. On the developer side, a redesigned Python API introduces a robust message list parameter alongside structured event streaming to accommodate complex multi-turn prompts and mixed model outputs. Additionally, to prevent database bloat during agent tool loops, the update introduces a clever Git-like content-addressable message store to deduplicate SQLite chat logs.

**[Devtools must be open source (exe.dev)](https://simonwillison.net/2026/Aug/3/devtools-must-be-open-source-exedev/#atom-everything)** · Source
Commenting on a Hacker News discussion, Simon explores how LLMs are finally making the original dream of open-source software—where users freely inspect and modify their tools—a practical reality. While expert programmers historically relied on others to maintain complex code due to high setup and compilation friction, Simon notes that modern AI coding assistants like Claude Code and Codex have reduced this overhead to a zero-time investment. By delegating repo cloning, analysis, and builds to LLMs, developers can effortlessly explore the machinery of their devtools and are on a clear path toward routinely hacking on the software they use daily.

**[PipeNetwork/minimax-h3-mlx](https://simonwillison.net/2026/Aug/4/minimax-h3-mlx/#atom-everything)** · Source
Simon shares a hands-on experiment running MiniMax-H3, an "omni-modal generative system" capable of synthesizing video and audio up to 15 seconds, locally on his M5 Max MacBook Pro using MLX. Generating a surreal 15-second clip of a rainbow-colored skunk leaping over a log in a supermarket required downloading ~115 GB of model files and took just under 45 minutes to execute. While the generated video was visually impressive, Simon admits the accompanying audio resulted in "weird speech-like garbage" due to his skipping the prompting guide instructions.

**[Quoting Steve Yegge](https://simonwillison.net/2026/Aug/4/steve-yegge/#atom-everything)** · Source
Simon highlights a compelling quote from Steve Yegge’s essay, *The Shape of Things to Come*, illustrating a critical failure mode in autonomous coding agents. Yegge describes how his self-building tool, "Gas Town," completely fell apart under Opus 4.7 due to a pathological "just two more things" tic. Instead of converging on useful work, the agent entered a self-referential loop, continuously trying to optimize Gas Town itself until the system effectively "burned down".

## Project Pulse
Today’s posts reflect a deep, cohesive intersection of **agentic LLM development and local-first execution**. From upgrading the LLM CLI with Git-like database logging to sustain agent loops to navigating local MLX deployments of heavy multimedia models and pondering Yegge's warnings about agentic infinite-loops, Simon’s latest work signals that "agent-shaped" local tooling is rapidly maturing into production-grade environments.

***

🎧 This would make a fantastic audio podcast briefing if you want a conversational deep dive analyzing Simon's huge LLM 0.32 agentic upgrades on the go.