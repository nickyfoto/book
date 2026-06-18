---
title: 2026-06-10
weight: 7
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "large language models", "data centers"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-10

## Watch First
**[Stop Making Models Bigger, Make Them Behave — Kobie Crawdord, Snorkel](https://www.youtube.com/watch?v=TNwJ1LMiENk)**. This is the most technically substantive talk today, proving that a targeted RL pipeline using GRPO for under $500 can make a 4 billion parameter model outperform a 235 billion parameter model (Qwen 3) at tool-use tasks. It demonstrates that fixing tool-invocation discipline is vastly more effective for production stability than brute-forcing reasoning capabilities.

## Highlights by Theme

### Developer Tools & Platforms
On the AI Engineer channel, **[Self Driving Products: Product Signals to Pull Requests — Joshua Snyder, PostHog](https://www.youtube.com/watch?v=zMiSRliEzv4)** walks through an automated pipeline that turns observability signals into sandbox-tested PRs. It includes a critical warning for engineers: off-the-shelf embedding models cluster by structural similarity (e.g., grouping all stack traces together) rather than semantic relevance. To fix this, you must have an LLM generate search queries before embedding to group related signals properly. Over at Apple, **[Dub Dub Daily: Day 3 | WWDC26](https://www.youtube.com/watch?v=tns0COilIx8)** details the new Foundation Models framework. It notably offers "Dynamic Profiles" that allow developers to conditionally route simple, privacy-sensitive prompts to on-device models while passing complex tasks to Private Cloud Compute or third-party APIs.

### AI & Machine Learning
Google DeepMind announced the Gemma 4 family in **[Sovereign Escape Velocity: Ownership w Open Models — Gus Martins, & Ian Ballantyne, Google DeepMind](https://www.youtube.com/watch?v=SS-A8sE7hkw)**, highlighting a 26B Mixture of Experts model that only requires the memory of a 4B model at runtime. This architecture effectively brings frontier-level text, vision, and audio reasoning capabilities to edge hardware and single-GPU setups. Mistral CTO Tim Lacroix joined the NVIDIA podcast in **[How Mistral Is Building Frontier AI for the Enterprise | NVIDIA AI Podcast Ep. 301](https://www.youtube.com/watch?v=mYQR-xfqOPY)** to discuss adapting their infrastructure for the new Blackwell GB200 architecture. He notes that running inference in NVFP4 precision has yielded a 2.5x speedup for their large sparse MoE models, though maintaining attention accuracy over long contexts in 4-bit remains a scaling challenge.

### Hardware & Infrastructure
A sobering reality check on data center scaling is delivered in **[Dan Dreyfus: The Next AI Bottleneck is Copper](https://www.youtube.com/watch?v=xTO1aQ_m44I)** on the All-In Podcast. Dreyfus breaks down the math: a 1 GW AI data center requires 50,000 tons of copper, meaning a projected 15 GW/year US buildout alone will consume 750,000 tons annually. Meanwhile, the entire global copper supply only grew by 500,000 tons last year. In a related segment, **[Senators John Fetterman and Dave McCormick: Bipartisanship, Money in DC, Datacenters, Graham Platner](https://www.youtube.com/watch?v=0y28p0jqPro)** discusses the massive bipartisan push to circumvent regulatory bottlenecks and fulfill these energy demands, highlighting a single 3.4 GW retrofit at a former coal plant in Pennsylvania.

### Everything Else
Brex CEO Pedro Franceschi outlines a highly pragmatic approach to corporate AI adoption in **[The CEO Must Be the Chief AI Officer](https://www.youtube.com/watch?v=mPAHvz8kW24)**. He details how Brex solved internal security compliance by open-sourcing "Crab Trap," an HTTP proxy that audits and conditionally blocks an agent's network traffic rather than trying to perfectly constrain the LLM prompt directly. Finally, Mark Zuckerberg discusses the open-sourcing of ESM-fold in **[Biohub: The Future of Biology is Open-Source with Mark Zuckerberg, Priscilla Chan, and Alex Rives](https://www.youtube.com/watch?v=u8cYwaLzN-k)**. The team shows how protein language models trained on billions of sequences are discovering zero-shot atomic structures and nanomolar binders without task-specific training.