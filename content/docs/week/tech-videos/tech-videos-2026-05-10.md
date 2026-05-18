---
title: 2026-05-10
weight: 7
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "infrastructure", "corporate governance"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-10

## Watch First
[Two Roads to Durable Agents: Replay vs. Snapshot — Eric Allam, Trigger.dev](https://www.youtube.com/watch?v=svCnShDvgQg)
**Why:** A highly practical look at how the shift to long-running LLM agents breaks traditional stateless backend architectures, requiring a return to stateful compute via microVM memory snapshots.

## Highlights by Theme

### Developer Tools & Platforms
In [Two Roads to Durable Agents: Replay vs. Snapshot](https://www.youtube.com/watch?v=svCnShDvgQg), Eric Allam argues that standard replay-based durable execution falls apart for long-running AI sessions due to context bloat, advocating instead for using Firecracker microVMs to compress and snapshot machine state in milliseconds. On the product engineering side, Mehedi Hassan details in [You can’t just one shot it — Mehedi Hassan, Granola](https://www.youtube.com/watch?v=ON5LIT0M4do) how his team built internal LLM tool-call tracing to debug search trails and refactored their Electron app's frontend into a web shell for faster CI preview testing. Finally, Sally-Ann Delucia's [Hierarchical Memory: Context Management in Agents](https://www.youtube.com/watch?v=esY99nYXxR4) outlines the transition from prompt engineering to context engineering, showing how naive context truncation breaks reasoning and how offloading heavy data tasks to sub-agents is necessary to avoid hitting context limits.

### AI & Machine Learning
Hung-yi Lee's lecture [人工智慧能否自我成長 · Hung-yi Lee](https://www.youtube.com/watch?v=s06mSAGN4gM) provides a rigorous, math-heavy breakdown of self-improving AI, specifically exploring how models can generate their own proxy reward functions (Unsupervised RL) and use entropy minimization for test-time training. He warns that while models can bootstrap themselves to some extent, performance eventually plateaus without external human signals or stronger teacher models. Meanwhile, a brief clip from the All-In Podcast, [David Sacks: Is Anthropic Just Standard Oil With Better PR?](https://www.youtube.com/watch?v=mSvG57vJoCY), cynically evaluates Anthropic's exponential growth, suggesting their focus on "AI safety" is essentially brilliant PR to construct a massive regulatory moat around a rapidly expanding monopoly.

### Hardware & Infrastructure
Several clips from Lex Fridman's FFmpeg interviews highlight the gritty reality of low-level infrastructure, with developers detailing FATE (FFmpeg Automated Testing Environment)—a massive pivot-table of volunteer-hosted tests catching miscompilations across a staggering matrix of OS, compiler, and CPU architecture combinations in [The impossible task of testing FFmpeg code](https://www.youtube.com/watch?v=IHFb6Op9aKo). They also throw cold water on the "Rewrite it in Rust" meme in [Rust vs C vs Assembly programming languages](https://www.youtube.com/watch?v=k92DumKjoqs), pointing out that because FFmpeg relies heavily on handwritten assembly for performance, rewriting the C wrappers in Rust breaks the security model anyway unless you implement compile-time assembly instrumentation. On the data center front, [Elon was quietly building THIS BUSINESS all along...](https://www.youtube.com/watch?v=1HnzISC6HrM) highlights how xAI is quietly pivoting to become a hyperscale compute provider by monetizing their massive 1.2 gigawatt GPU cluster to subsidize internal model training.

### Everything Else
Eric Ries joins Lenny's Podcast in [How to build a company that withstands any era](https://www.youtube.com/watch?v=PoJ1vTdHpks) to discuss corporate governance as a technical defense mechanism against "financial gravity" and misaligned incentives. He highlights how structures like Public Benefit Corporations (PBCs) and Anthropic's Long-Term Benefit Trust are deployed to legally protect product quality and engineering integrity against hostile takeovers or activist investors pushing for short-term extraction.