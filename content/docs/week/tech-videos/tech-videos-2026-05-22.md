---
title: 2026-05-22
weight: 4
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "ai agents", "developer tools", "hardware"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-22

## Watch First
The standout video today is [Chip design from the bottom up – Reiner Pope](https://www.youtube.com/watch?v=oIk3R-sMX5o) from the Dwarkesh Patel channel. Reiner Pope (CEO of MatX) provides a phenomenal, zero-fluff explanation of how AI chips fundamentally work—starting from basic logic gates, detailing the specific math of multiplier-accumulators, and building all the way up to why systolic arrays efficiently balance compute versus communication in modern TPUs and GPUs.

## Highlights by Theme

### Developer Tools & Platforms
On [Google Cloud Tech](https://www.youtube.com/watch?v=l4lneZYtjQg), ["What's new in Go"](https://www.youtube.com/watch?v=l4lneZYtjQg) details the new Green Tea Garbage Collector in Go 1.26, a vector-accelerated overhaul that shifts memory operations to contiguous pages, cutting GC CPU overhead by up to 50% without requiring any code changes. Also on [Google Cloud Tech](https://www.youtube.com/watch?v=rjoMZyxncUI), ["The ABCs of agent building"](https://www.youtube.com/watch?v=rjoMZyxncUI) formalizes integrations for agent-based development, moving beyond brittle API wrappers by utilizing the Model Context Protocol (MCP) for tool discovery, the Universal Commerce Protocol (UCP) for structured ordering, and the Agent Payments Protocol (AP2) to enforce hard spending limits. Finally, [Fireship's](https://www.youtube.com/watch?v=9OQ5vaYbGV0) digest ["Google’s AI endgame is here…"](https://www.youtube.com/watch?v=9OQ5vaYbGV0) highlights "Antigravity"—an agent-focused VS Code fork that impressively live-demoed writing its own drivers to run the game Doom on a scratch-built operating system.

### AI & Machine Learning
For practical architecture, [AWS Developers'](https://www.youtube.com/watch?v=O-QEhFFhXNA) ["Stop AI Hallucinations With These 5 Techniques"](https://www.youtube.com/watch?v=O-QEhFFhXNA) outlines code-level guardrails, such as using Graph-RAG over vector RAG for deterministic aggregation, and writing "neurosymbolic guardians" in Python to strictly block LLMs from bypassing constraints that they would otherwise ignore in prompts. On the open weights front, [Google for Developers](https://www.youtube.com/watch?v=oUtiZbrehrw) announced the Gemma 4 lineup in ["What's new in the Gemma open model family"](https://www.youtube.com/watch?v=oUtiZbrehrw), releasing a highly efficient 26B Mixture-of-Experts (MoE) model and a 31B dense model, both featuring a 256k context window and a permissive Apache 2.0 license. Addressing inference speed, ["Fast Models Need Slow Developers"](https://www.youtube.com/watch?v=TeGsFFNqRLA) by [AI Engineer](https://www.youtube.com/watch?v=TeGsFFNqRLA) argues that because Cerebras Codex Spark hits 1,200 tokens per second, expensive test suite validations and massive diff generations are practically free, requiring a fundamental shift in how developers loop with AI.

### Hardware & Infrastructure
In a massive infrastructure revelation discussed on the [All-In Podcast's](https://www.youtube.com/watch?v=HGbA6ze0_3M) ["SpaceX’s $2T Case..."](https://www.youtube.com/watch?v=HGbA6ze0_3M), Anthropic is reportedly paying SpaceX $1.25 billion per month for access to the Colossus orbital compute clusters. On the silicon side, [Fireship](https://www.youtube.com/watch?v=9OQ5vaYbGV0) notes that Google is officially splitting its custom tensor hardware into distinct jobs, creating the TPU-T optimized for training and the TPU-I optimized for inference. For edge compute workloads, [Google for Developers'](https://www.youtube.com/watch?v=boy-UjB8hpA) ["Bring the power of on-device AI to life..."](https://www.youtube.com/watch?v=boy-UjB8hpA) showcases LiteRT-LM, an optimized runtime that uses device NPUs and memory caching to run Gemma 2B and 4B models locally with zero network latency.

### Everything Else
On the corporate governance front, [Y Combinator's](https://www.youtube.com/watch?v=7VKliOQXQ9M) interview with Eric Ries in ["How The Best Companies Defend Against Mediocrity And Rot"](https://www.youtube.com/watch?v=7VKliOQXQ9M) strongly challenges the standard Delaware C-Corp structure, arguing that founders must leverage Public Benefit Corporations (PBCs) or trust structures to legally shield their technical mission from short-sighted activist investors. Providing a much-needed dose of skepticism, [ThePrimeagenHighlights'](https://www.youtube.com/watch?v=zdXsGF1hiZk) ["Industry Wide AI Psychosis"](https://www.youtube.com/watch?v=zdXsGF1hiZk) amplifies Mitchell Hashimoto’s warning that heavily relying on AI agents for rapid feature shipping is masking deep architectural decay and creating a false sense of security within software engineering.