---
title: 2026-07-12
weight: 8
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "coding agents", "software engineering", "developer tools", "tech workforce"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-07-12

## Watch First
**[ReviewDebt: a practical framework for scoring every pull request — Sachin Gupta, Ebay](https://www.youtube.com/watch?v=TJPInBjhE4Q)** from AI Engineer is the most pragmatic watch of the day because it introduces a deterministic, LLM-free framework to measure the growing and dangerous gap between AI code generation speed and human review bandwidth. The talk demonstrates how this "review debt" accrues using cross-repo scans of over 500 PRs, providing actionable metrics like test-evidence gaps and cross-team ownership spread.

## Highlights by Theme

### Developer Tools & Platforms
The GitHub channel briefly announced that **[GitHub issue fields are now generally available](https://www.youtube.com/watch?v=rmzu6Eovgus)**, bringing structured, typed metadata to issues that can now be manipulated programmatically via their MCP server. On the AI Engineer channel, **[What Does Done Even Mean? Agents and Paperclip's Liveness Model - Dotta, Paperclip](https://www.youtube.com/watch?v=7P0elyLIxXo)** argues that coding agents treat task completion as a naive boolean, proposing a stateful control plane with watchdogs and first-class blockers to verify autonomous work without freezing it in human review queues. For mobile workflows, AI Engineer also featured a live demo of **[remobi.app: Don't change your terminal workflow for mobile](https://www.youtube.com/watch?v=5192csoTkVo)**, a PWA that securely bridges your existing `tmux` sessions and agent terminal environments to your phone via Tailscale.

### AI & Machine Learning
The most technically substantive AI talk is **[Semantic Blindness: 500,000 Sensors Confused an LLM - Raahul Singh & Vanč Levstik, Phaidra](https://www.youtube.com/watch?v=EUsPvBeIx70)** from AI Engineer, which breaks down why RAG and pure LLM context windows fail to scale when querying 1-gigawatt data centers with nearly 500,000 components. The engineers propose a hybrid architecture where models generate deterministic search plans against a pre-indexed hierarchical tree, achieving 100% accuracy while keeping token costs perfectly flat regardless of facility size. Also on AI Engineer, **[RLM: Recursive Language Models for Large Codebases - Shashi, Superagentic AI](https://www.youtube.com/watch?v=8oyalrfwgjw)** demos offloading context management by giving the model a dedicated execution environment to write scripts that dynamically inspect and slice massive monorepos. Lastly, **[Stop Evaluating Models Like It's the 50s - Alejandro Vidal, Mindmakers](https://www.youtube.com/watch?v=EfcfUB2uprc)** (AI Engineer) introduces Item Response Theory to LLM evaluation, showing how calculating residual errors can statistically reveal when an organization has secretly trained a model on benchmark test data.

### Everything Else
On Lenny's Podcast, **[Why the tech workforce is quietly splitting in two | Annual AI sentiment survey (Noam Segal)](https://www.youtube.com/watch?v=_cmpIveXnvE)** breaks down a 6,000-person tech survey revealing a workforce cut exactly in half: 50% feel amplified by AI, while the rest feel disoriented, destabilized, or resentful. The data shows severe burnout spiking over 10% year-over-year to 54.7%, driven heavily by management squeezing teams for higher velocity without commensurate compensation, leaving workers feeling like their cognitive skills are rotting. Meanwhile, in **[But Why?](https://www.youtube.com/watch?v=TPDRS38g-LU)**, ThePrimeagenHighlights rails against the modern acceptance of resource-gluttonous software, advocating for the pursuit of extreme IO performance and hardware efficiency simply for the sake of engineering excellence