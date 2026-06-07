---
title: Week 22 Summary
weight: 1
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "ai agents", "developer tools", "hardware", "local inference", "tech hiring", "model context protocol", "cloud infrastructure", "software engineering", "machine learning", "wearables", "frontend performance", "robotics", "cloud computing", "cryptocurrency", "autonomous agents"]
---

# Tech Videos — Week of 2026-05-22 to 2026-05-29

## Watch First
The single best video this week is "Reverse engineering a Viking VOIP phone protocol with Claude Code" by Boris Starkov from Eleven Labs. It provides a stunning, high-signal demonstration of an autonomous agent sniffing traffic and rewriting persistent memory to brute-force a hardware device, proving exactly how capable models have become at executing complex, multi-step engineering tasks.

## Week in Review
This week was heavily dominated by the maturation of AI agents, moving beyond basic text chat into structured, sandboxed integrations via the Model Context Protocol (MCP) and full GUI automation. We are witnessing a fundamental shift in daily workflows, with the terminal increasingly being bypassed in favor of IDE-embedded browsers and autonomous models generating massive, risky pull requests that demand stringent human review. Underpinning this is a ruthless optimization of infrastructure, spanning from Google splitting out specialized training and inference hardware to SpaceX aggressively cutting data center build times down to 66 days.

## Highlights by Theme

### Developer Tools & Platforms
Visual Studio Code was the clear center of gravity this week, with the Visual Studio Code channel announcing a new "Agent Window," remote agent tunneling, and a local SQLite "Chronicle" feature that finally makes past agent sessions queryable across repositories. The frontend community received a performance masterclass in "why claude, codex and cursor switched primitives", where Pierre Computer Company detailed how they leverage vanilla JS and the Shadow DOM to instantly render 150MB diff files without blocking the main thread. On the systems engineering front, the GitHub channel noted that Bun is fundamentally rewriting its core from Zig to synchronous Rust to eliminate memory bugs and shrink binary sizes. Meanwhile, Fireship highlighted "CUDA Oxide," an excellent grassroots tool that enables developers to write GPU kernels in pure Rust to entirely avoid legacy C++ memory footguns.

### AI & Machine Learning
The industry is actively moving away from naive vector RAG due to the "satisfaction of search" problem, where agents lazily stop retrieving at the first partial match, as discussed by Unblocked on the AI Engineer channel. Instead, engineers are adopting structured architectures like Graph-RAG, "neurosymbolic guardians" highlighted by AWS Developers to prevent prompt bypassing, and embedded decision traces as showcased by Neo4j. On the open weights front, Google for Developers detailed the highly capable Gemma 4 family, featuring a 26B mixture-of-experts model that runs locally by utilizing only 4 billion active parameters at a time. However, as agent capabilities rise, Cursor data warns that AI-generated "mega PRs" over 1,000 lines are sharply increasing, prompting Braintrust to strongly advise moving away from basic vibe checks toward rigorous LLM-as-a-judge pipelines.

### Hardware & Infrastructure
High-performance infrastructure took center stage, with Alex Cheema on the EXO Labs channel demonstrating how to cluster Apple Silicon and RTX GPUs using Thunderbolt 5 RDMA to radically drop inter-node communication latency down to single digits for local inference. At the hyperscale level, Anthropic is reportedly paying SpaceX $1.25 billion per month for access to orbital compute clusters, taking advantage of Elon Web Services' massive deployment speeds. Additionally, Google Cloud Tech provided crucial signal on network telemetry, proving that standard one-second averages mathematically hide the microscopic network bursts that cause 100% saturation and stall GPUs during ML training.

## Skippable
Feel free to skip the marketing fluff surrounding Google's I/O "agents building agents" keynote and Anthropic's contradictory fear-mongering PR around their Mythos model. Similarly, VC claims about AI creating "20x vampire developers" are entirely overhyped, as ThePrimeagen rightly pointed out that real productivity gains simply come from bypassing slow corporate bureaucracy rather than achieving superhuman output.