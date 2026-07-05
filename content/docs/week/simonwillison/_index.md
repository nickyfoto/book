---
title: Simon Willison
weight: 16
bookCollapseSection: true
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "ai-ethics", "law", "hallucinations", "generative-ai", "llms", "prompt-injection", "openai", "security", "careers", "coding-agents", "agentic-engineering", "local-llms", "tools", "applescript", "html", "shot-scraper", "anthropic", "dspy", "prompt-engineering", "open-source", "datasette-lite"]
---

# Simon Willison — Week of 2026-06-25 to 2026-07-03

## Highlight of the Week
The single most impactful release this week was Simon's launch of `llm-coding-agent 0.1a0`, which successfully turns his popular `llm` library into a full-fledged coding agent capable of file manipulation and command execution. Bootstrapped entirely using Claude Fable 5 via test-driven development, this represents a massive leap forward for his CLI ecosystem and a brilliant showcase of using frontier models to build the very tools that will orchestrate them.

## Key Posts
**[llm-coding-agent 0.1a0]** · [Source](https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything)
Simon released a major alpha turning his `llm` library into a tool-wielding agent. He used Claude Code with Claude Fable 5 to write the spec, generating file manipulation tools and an unprompted Python API that he immediately used to build a SwiftUI app.

**[Have your agent record video demos of its work with shot-scraper video]** · [Source](https://simonwillison.net/2026/Jun/30/shot-scraper-video/#atom-everything)
Showcasing his "agentic engineering" workflow, Simon built a new `shot-scraper video` command driven by a YAML storyboard, using GPT-5.5. He notes a brilliant pattern for CLI design: putting detailed examples in `--help` output essentially creates an embedded skill file that coding agents can read to use the tools autonomously.

**[Ornith-1.0: Self-Scaffolding LLMs for Agentic Coding]** · [Source](https://simonwillison.net/2026/Jun/29/ornith/#atom-everything)
Exploring the cutting edge of local open-weights models, Simon tested the new MIT-licensed Ornith-1.0. Running the 35B MoE variant locally, he found it incredibly proficient at executing tool calls against a Datasette checkout, signaling practical steps forward for open-source AI developer tooling.

**[AI and Liability]** · [Source](https://simonwillison.net/2026/Jun/25/ai-and-liability/#atom-everything)
Taking a critical look at governance, Simon highlighted Bruce Schneier's analysis of a German court ruling against Google. Schneier forcefully argues that companies must face the exact same liability for AI-generated errors as they would for human employees to prevent disastrous corporate incentives.

**[Fable’s judgement]** · [Source](https://simonwillison.net/2026/Jul/3/judgement/#atom-everything)
A highly pragmatic prompt engineering tip for running agents locally ahead of token price hikes. Simon instructed Claude Fable to act as a manager that delegates mundane implementation tasks to smaller models (like Sonnet or Haiku), reserving the expensive Fable model for high-level design and review.

## Project Updates
It was a busy week for releases, headlined by the major alpha release of `llm-coding-agent 0.1a0` and `shot-scraper 1.10`, which introduced the powerful new YAML-driven video command. On the maintenance side, Simon shipped an "embarrassingly tiny" but critical `datasette-export-database 0.3a2` patch to fix a dependency pinning issue that broke Datasette compatibility, and added a new HTML table extractor to his collection of sharp, single-purpose web utilities.

## Themes
A massive recurring theme this week was the shift toward "agentic engineering," where developers must manage AI-generated complexity through token economics (GPT-5.6 caching, Sonnet 5 token bumps, Fable delegation) and mitigate "cognitive debt" to maintain fluency in their codebase. Philosophically, Simon explored how we fit into this loop, championing Jon Udell's concept of an "agent in the loop" rather than surrendering our engineering authority to unreviewable black boxes.