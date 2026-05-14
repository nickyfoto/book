---
title: Hacker News
weight: 15
categories: ["News", "Tech"]
tags: ["artificial intelligence", "reverse engineering", "linux", "databases", "self-hosting"]
---

# Hacker News — 2026-05-13

## Top Story
GitHub's absorption into Microsoft's CoreAI division and its recent default opt-in for Copilot training data is pushing serious developers and the Dutch government toward self-hosted alternatives like Forgejo. It's a stark reminder that if you don't control the infrastructure, your repositories are treated as grist for the LLM mill.

## Front Page Highlights

**[Preserving Fisher-Price Pixter]** · [dmitry.gr](https://dmitry.gr/?r=05.Projects&proj=37.%20Pixter)
Dmitry.gr drops an absolute masterclass in reverse engineering, fully dumping and emulating the 2000s-era Fisher-Price Pixter toy line. He discovers an undocumented 6502 core, decodes bizarre "BEX" buses, and navigates some truly cursed cost-cutting hardware choices. This is exactly the kind of deep, obsessive hardware hacking that built this community.

**[When "idle" isn't idle: how a Linux kernel optimization became a QUIC bug]** · [blog.cloudflare.com](https://blog.cloudflare.com/quic-death-spiral-fix/)
Cloudflare shares a brilliant debugging saga where a 2017 TCP CUBIC optimization in the Linux kernel caused HTTP/3 downloads to get permanently stuck at minimum congestion windows after severe packet loss. A tiny flaw in how "idle" time was calculated off the last sent packet instead of the last ACK led to a continuous recovery-state death spiral.

**[Quack: The DuckDB Client-Server Protocol]** · [duckdb.org](https://duckdb.org/2026/05/12/quack-remote-protocol)
DuckDB is stepping out of the strictly in-process world with "Quack," a native HTTP-based client-server protocol. By bypassing the overhead of Arrow Flight and Postgres protocols, they're pushing 60M rows in under 5 seconds, opening up high-throughput concurrent writes without sacrificing their lightweight roots.

**[Linux gaming is faster because Windows APIs are becoming Linux kernel features]** · [xda-developers.com](https://www.xda-developers.com/linux-gaming-is-getting-faster-because-windows-apis-are-becoming-linux-kernel-features/)
The NTSYNC driver has landed in the Linux kernel, natively implementing Windows NT synchronization primitives. Instead of Wine and Proton emulating these calls in user space, the kernel now handles them directly, eliminating edge-case stutters and highlighting Valve's massive influence on upstream Linux development.

**[The Emacsification of Software]** · [sockpuppet.org](https://sockpuppet.org/blog/2026/05/12/emacsification/)
Thomas Ptacek argues that LLMs are turning native UI development into the modern equivalent of tweaking `.emacs` scripts. Instead of suffering through sluggish Electron bloatware, developers can now prompt one-off, bespoke native macOS apps in minutes to solve hyper-specific personal workflows.

**[Amazon employees are "tokenmaxxing" due to pressure to use AI tools]** · [arstechnica.com](https://arstechnica.com/ai/2026/05/amazon-employees-are-tokenmaxxing-due-to-pressure-to-use-ai-tools/)
As leadership mandates AI adoption, developers are pushing back against the cognitive fatigue and "deskilling" caused by verifying LLM-generated code. At Amazon, this has devolved into "tokenmaxxing," where engineers use internal bots to automate garbage tasks just to pad their usage stats on corporate leaderboards.

## Show HN & Launches
`fc` is a new lossless compressor specifically tuned for IEEE-754 64-bit floating-point streams, crushing general-purpose algorithms like zstd on structured analytical data with parallel decode speeds of ~1.28 GB/s. `Traceway` launched as an MIT-licensed, OpenTelemetry-native observability stack that self-hosts in 90 seconds, aiming squarely at Datadog's enterprise pricing. Finally, `Rars` is a Rust implementation of the RAR protocol, notably generated almost entirely via OpenAI Codex and Claude. It's a fascinating, if slightly horrifying, glimpse into using LLMs for brute-force reverse engineering and spec implementation.

## Discussion & Debate
The C++ community is hotly debating the real-world compile-time cost of C++26 reflection. Benchmarks show that while the reflection algorithms themselves are fast, simply including the `<meta>` header adds a ~155ms tax per translation unit, making old-school preprocessor macros vastly superior for compile-time sensitive codebases.