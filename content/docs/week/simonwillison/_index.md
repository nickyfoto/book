---
title: Simon Willison
weight: 16
bookCollapseSection: true
categories: ["Blogs", "AI", "Tech"]
tags: ["github", "github-actions", "commits", "platform activity", "ai-assisted-programming", "sqlite", "security", "agentic-engineering", "llms", "local llms", "datasette", "cli tools", "ios", "anthropic", "svg", "docker", "code-interpreter", "meta", "python", "asgi", "cors", "chatgpt", "openai", "kakapo"]
---

# Simon Willison — Week of 2026-04-04 to 2026-04-10

## Highlight of the Week
Anthropic's decision to delay the general release of their highly capable Claude Mythos model under "Project Glasswing" marks a significant turning point in the AI industry. The move underscores a massive shift in frontier model capabilities, as models evolve from generating text to autonomously chaining multiple minor vulnerabilities into sophisticated exploits, requiring a new level of security safeguards before release.

## Key Posts
**[Anthropic’s Project Glasswing - restricting Claude Mythos to security researchers - sounds necessary to me](#)**
Anthropic has restricted the release of their Claude Mythos model to trusted partners to allow defenders to patch foundational internet systems. Simon used git blame to verify a 27-year-old OpenBSD bug discovered by the model, concluding that providing $100M in credits to defenders and delaying general release is a necessary trade-off to handle these advanced capabilities.

**[Meta’s new model is Muse Spark, and meta.ai chat has some interesting tools](#)**
Simon aggressively probed Meta's new hosted Muse Spark model via its chat harness, successfully extracting the system definitions for 16 built-in tools. By utilizing its Python Code Interpreter and `visual_grounding` tool, he ran hands-on experiments to extract nested bounding boxes and exact object counts, demonstrating a powerful sandbox-driven approach to generative AI and image analysis.

**[Eight years of wanting, three months of building with AI](#)**
Highlighting a deep-dive by Lalit Maganti on building the `syntaqlite` SQLite parser, Simon explores the realities of "agentic engineering". The project reveals that while AI is incredible at plowing through tedious low-level implementation details like grammar rules, it still struggles significantly with high-level architectural design and subjective decision-making.

**[Google AI Edge Gallery](#)**
Google released a highly effective, official iOS app for natively running local Gemma 4 models on-device. As the first official iPhone app from a local model vendor, it stands out by running fast and including features like vision, up to 30 seconds of audio transcription, and a demonstration of tool calling against HTML widgets.

**[ChatGPT voice mode is a weaker model](#)**
Prompted by insights from Andrej Karpathy, Simon reflects on the counterintuitive reality that OpenAI's Advanced Voice Mode runs on an older model with an April 2024 knowledge cutoff. This highlights a widening gap between consumer-facing interfaces and top-tier B2B coding models, which hold more value and benefit significantly from verifiable reinforcement learning.

## Project Updates
Simon utilized Claude Code to rapidly scaffold and release several small, sharp tools this week, notably iterating `scan-for-secrets` up to version 0.3 to prevent API key leaks, and shipping `datasette-ports` to manage his local Datasette environments. He is also actively overhauling his foundational `llm` CLI tool to support server-side tool execution from major vendors. On the maintenance front, he shipped `asgi-gzip 0.3` to fix a Server-Sent Events compression bug caused by a silently failing GitHub Action that missed an upstream Starlette patch. 

## Themes
A major recurring thread this week is the rapid graduation of frontier and open-weights LLMs into agents capable of multi-step, autonomous execution—seen in GLM-5.1 debugging its own complex CSS animations and Claude Mythos discovering severe software vulnerabilities. Simon balanced this exploration of high-end capabilities with his pragmatic approach to building and debugging developer tooling, frequently highlighting both the acceleration AI brings to writing code and the invisible risks of automated workflows.