---
title: 2026-07-19
weight: 8
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "machine learning", "software engineering"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-07-19

## Watch First
**[Build Evals That Actually Matter - Nick Ung, Lyft](https://www.youtube.com/watch?v=3z2uT5aDx_Y)** offers the most pragmatic signal of the day, detailing how Lyft moved past useless, generic LLM-as-a-judge scores to robust, binary classifiers evaluated on strict precision/recall metrics against human-labeled ground truth.

## Highlights by Theme

### Developer Tools & Platforms
In **[From Blind Spots to Merged PRs: Continuous Agentic Performance Optimization - May Walter, Hud](https://www.youtube.com/watch?v=JJGbw4ggaFs)**, Hud's CTO outlines an automated pipeline using GitHub Actions and MCP to map runtime latency data directly to code functions, deploying agents to autonomously find and fix issues like N+1 queries via human-reviewed PRs. Meanwhile, **[You Didn’t Ship a Bug. You Just Wrote It for a Human. - Ravi Madabhushi, Scalekit](https://www.youtube.com/watch?v=lMCxVorb9wM)** warns that human-centric auth models (like standard API keys or broad OAuth scopes) fail dangerously for non-deterministic AI agents, urging a shift to fine-grained, context-aware, and just-in-time permissions to prevent rogue database deletions. Finally, for a quick hit of software engineering history, **[JUnit was built on a plane](https://www.youtube.com/watch?v=xhplGdHRf_M)** reveals that Eric Gamma and Kent Beck wrote the foundational Java testing framework completely offline during a two-and-a-half-hour flight.

### AI & Machine Learning
Beyond their core CI/CD eval pipeline in **[Build Evals That Actually Matter - Nick Ung, Lyft](https://www.youtube.com/watch?v=3z2uT5aDx_Y)**, Lyft's engineers share a crucial lesson for simulating user data: default frontier models are far too polite, resulting in falsely inflated 90% pass rates. To build offline tests that actually mirror production, they had to fine-tune a simulator model on verbatim transcripts of angry, impatient riders. On the biotech front, **[From Tokens to Cells: Foundation Models for Single-Cell Biology - Akram Baharlouei, Altos Labs](https://www.youtube.com/watch?v=-561cZmir5Q)** provides a highly technical look at cellular modeling, noting that flow-matching architectures are currently outperforming standard autoregressive transformers when it comes to matching the noisy, highly heterogeneous distribution of single-cell RNA sequencing data. *(Note: **[Celebrating 2 million with you!](https://www.youtube.com/watch?v=AopewjYV1Ho)** from OpenAI was also published today, but lacked technical substance.)*

### Hardware & Infrastructure
In **[David Sacks: Kathy Hochul is LYING about Datacenters!](https://www.youtube.com/watch?v=FZHeOapzRZg)** on the All-In Podcast, Sacks pushes back against New York's moratorium on hyperscale data centers. He argues that modern AI infrastructure avoids stressing the public grid by utilizing behind-the-meter natural gas generation, and dismisses water consumption concerns as outdated since modern facilities recirculate their cooling water. *(Note: A placeholder for the **[NVIDIA Keynote Live at SIGGRAPH 2026](https://www.youtube.com/watch?v=vXDetI2TUWw)** appeared in today's feed, but specific hardware announcements were not captured in the raw transcripts.)*

### Everything Else
In **[Netflix CPTO on AI and the future of product and tech roles | Elizabeth Stone](https://www.youtube.com/watch?v=t0GiTyz4syY)** (and its accompanying short **[The Answer to "What’s My Job in the Age of AI?”](https://www.youtube.com/watch?v=NiDZmfkQbcU)**), Stone discusses how AI is blurring traditional roles, allowing product managers and designers to prototype independently without being bottlenecked by engineering. To manage this velocity safely, Netflix is deprioritizing the hiring of narrow domain specialists in favor of "systems thinkers" who can design scalable internal platforms and safe paved paths for the rest of the organization to use.