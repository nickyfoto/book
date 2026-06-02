---
title: 2026-05-22
weight: 8
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software development", "systems engineering", "economics", "cybersecurity"]
---

# Hacker News — 2026-05-22

## Top Story
Microsoft's internal rollout of Claude Code hit a brick wall this week after the Experiences & Devices division burned through its entire annual AI budget in just a few months. They're pulling licenses by June 30 and forcing engineers back to GitHub Copilot CLI. This isn't just a corporate procurement hiccup; it's the canary in the coal mine for token-based API billing in the enterprise. As another trending post pointed out, flat-rate AI pricing was an illusion that is currently colliding with the harsh reality of memory and GPU constraints. You simply can't sell unlimited seats when your underlying compute costs scale linearly with induced demand.

## Front Page Highlights

**[Bun’s unreleased Rust port has 13,365 unsafe blocks]** · [Source](https://bun.com/bun-unsafe-audit)
The `yt-dlp` maintainers announced they are deprecating support for the Bun runtime, citing alarming security concerns over Bun's unreleased Rust rewrite. The Bun team apparently used Claude to aggressively port their Zig codebase to Rust, resulting in a staggering 13,365 `unsafe` blocks. The `yt-dlp` team dismissed the new architecture as "fully vibe-coded", sparking a massive community debate on the long-term maintainability and security risks of using LLMs for systems-level rewrites.

**[AI is killing the cheap smartphone]** · [Source](https://davidoks.blog/p/ai-is-killing-the-cheap-smartphone)
A fascinating look at the downstream supply chain casualties of the AI boom. To feed the insatiable demand for High-Bandwidth Memory (HBM) in AI data centers, memory makers like SK Hynix and Samsung are aggressively reallocating wafer capacity away from commodity DDR and LPDDR. The resulting 200-400% price spike in mobile memory has completely destroyed the economics of sub-$100 Android phones, effectively pricing the developing world out of the smartphone market. 

**[We should get rid of average CPU utilization]** · [Source](https://www.theocharis.dev/blog/why-we-should-get-rid-of-average-cpu-utilization/)
A crucial systems engineering PSA: if your latency-sensitive containerized apps are randomly dying with timeout errors but your CPU graphs look fine, you're looking at the wrong metric. Average CPU utilization completely hides kernel CFS (Completely Fair Scheduler) throttling. A bursty workload can exhaust its 100ms quota in 50ms across multiple cores, leading to massive p99 latency spikes while your dashboard utilization reads a healthy 40%. The author argues engineers need to monitor `cpu.stat` throttling metrics instead.

**[The IBM-ification of Google?]** · [Source](https://zeroshot.bearblog.dev/google-is-shattering-under-its-own-weight-the-ibm-ification-of-google/)
A viral rant capturing the technical community's exhaustion with modern Google. Between random billion-dollar GCP account bans with zero human support, the aggressive enshittification of Search with AI overviews that strip source links, and an endless product graveyard, Google is exhibiting the exact symptoms of IBM's historical slide into irrelevance. It's not a sudden crash, but a "slow deflation" into a digital slumlord.

**[Project Glasswing: An Initial Update]** · [Source](https://www.anthropic.com/research/glasswing-initial-update)
Anthropic pointed their new "Mythos Preview" model at critical open-source infrastructure and easily uncovered over 10,000 high- and critical-severity vulnerabilities. The real story here isn't just the AI's capability, but the structural bottleneck it exposes: discovering zero-days is now automated and incredibly cheap, but verifying, disclosing, and patching them remains painfully human and slow. 

## Show HN & Launches
**Deno 2.8** just dropped and it's a massive release. They've pushed their Node.js test suite compatibility up to 76.4% (smashing Bun's 40.6%), made `npm:` the default CLI behavior without requiring a prefix, and introduced `deno pack` to easily bundle Deno or JSR projects into npm-publishable tarballs. 

Also on the front page is **Superset (YC P26)**, an IDE purpose-built for orchestrating multiple CLI-based AI coding agents (like Claude Code and Cursor) in parallel. It isolates each agent in its own git worktree so they don't step on each other's toes. Finally, **Tight C** launched as a minimalist, 10-keyword systems programming language that compiles cleanly to C11, avoiding garbage collection and OOP overhead.

## Discussion & Debate
Astral's `uv` tool is universally loved for its blistering speed, but a highly-upvoted critique tore into its package management UX today. The lack of a simple `outdated` command and the fact that `uv` performs unsafe, unbounded major version upgrades by default had the community aggressively debating the merits of strict Semantic Versioning and dependency safety. 

Meanwhile, **Paul Graham** triggered an inevitable HN economics flame war with a brief post arguing that a 1% wealth tax is mathematically equivalent to a 20% income tax, assuming a 5% risk-free rate of return.