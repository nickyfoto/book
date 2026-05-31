---
title: Week 21 Summary
weight: 1
categories: ["Youtube", "Tech"]
tags: ["ai agents", "software testing", "knowledge graphs", "developer tools", "vertical ai", "hardware", "robotics", "machine learning", "cloud computing", "software engineering", "artificial intelligence", "cloud infrastructure", "rust", "cybersecurity"]
---

# Tech Videos — Week of 2026-05-16 to 2026-05-22

## Watch First
[Build Agents That Run for Hours (Without Losing the Plot)](#) by Anthropic is the required watch of the week for anyone building autonomous systems. It eschews hype for pragmatic scaffolding details, explaining the specific adversarial generator and evaluator patterns necessary to keep LLMs reliably executing software tasks over 12-hour context windows.

## Week in Review
The dominant theme this week is the urgent industry shift from fragile prompt engineering to rigid, deterministic scaffolding for AI agents to prevent massive codebase entropy. Across the board, engineering teams are frantically building protocol-level guardrails—like the Model Context Protocol (MCP), secure execution sandboxes, and neurosymbolic guardians—to stabilize complex agentic workflows. Simultaneously, hardware architecture is formally fracturing, with dedicated silicon and runtime optimizations splitting raw training workloads from constrained edge inference limits.

## Highlights by Theme

### Developer Tools & Platforms
The tooling ecosystem is rapidly adapting to host autonomous agent workloads, highlighted by Google heavily pushing its Antigravity 2.0 orchestration UI and standalone CLI in [What’s new in Gemini API, Google AI Studio and Google Antigravity](#). For pragmatic testing, Marlene Mhangami's [Beyond Code Coverage: Functionality Testing with Playwright](#) provides a highly credible blueprint for using Model Context Protocol (MCP) servers to enforce Test-Driven Development on AI coding assistants. To keep streaming agent UIs stable, Mike Christensen argues against Server-Sent Events (SSE) in favor of WebSockets for cross-tab resumability in [Why Your AI UX Is Broken (and It's Not the Model's Fault)](#). Finally, fundamental language updates made waves, including a deep architectural dive into Rust's integration into the Linux kernel in [Why Rust is different, with Alice Ryhl](#), and the introduction of a vector-accelerated Green Tea Garbage Collector in [What's new in Go](#).

### AI & Machine Learning
AI engineering is heavily focusing on shrinking models and enforcing execution boundaries to make inference practical and reliable. In [From 46% to 90%: Fine-Tuning Tiny LLMs for On-Device Agents](#), Google details how fine-tuning a 270-million parameter "Function Gemma" on synthetic data doubled function calling success rates. To combat the unreliability of flat vector RAG architectures, [Connecting the Dots with Context Graphs](#) by Neo4j advocates for structured, multi-hop context graphs to give agents auditable reasoning memory. On the frontier model side, [Let's go Bananas with GenMedia](#) introduces a vital stateful interactions API for Gemini 3.3 that caches multi-turn contexts on the server to save network bandwidth. Furthermore, engineers are employing deterministic fallbacks, such as the hard-coded Playwright logic demonstrated in [Harnesses in AI: A Deep Dive](#) or the code-level constraints outlined in [Stop AI Hallucinations With These 5 Techniques](#).

### Hardware & Infrastructure
The sheer scale of AI compute demand is forcing extreme infrastructure shifts, underscored by reports in [SpaceX’s $2T Case...](#) that Anthropic is paying $1.25 billion monthly for orbital compute clusters. For a foundational understanding of this silicon rush, [Chip design from the bottom up](#) delivers an exceptional, zero-fluff explanation of modern TPU and GPU systolic arrays. Infrastructure engineers should also note Google's massive quantum error correction milestone in [Building the quantum-AI future](#), which accelerates the timeline for post-quantum cryptographic threats, and the architectural consolidation demonstrated in [Search Smarter: Hybrid Full-Text & Vector Search](#), proving Valkey 9.0 can execute concurrent queries in milliseconds and replace fragmented cache stacks.

## Skippable
You can safely skip Vercel's marketing-heavy claims about English being the "next hot programming language". Similarly, while Google's keynote demos of "vibe coding" Android apps natively in AI Studio look impressive on a keynote stage, they warrant deep skepticism regarding their viability for maintaining actual production codebases.