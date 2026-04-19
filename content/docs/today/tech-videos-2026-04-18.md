---
title: Youtube Tech Channels
weight: 3
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "software engineering", "cloud computing", "hardware", "ai agents"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-04-18

## Watch First
[[The Friction is Your Judgment — Armin Ronacher & Cristina Poncela Cubeiro, Earendil]](https://www.youtube.com/watch?v=_Zcw_sVF6hU) is the most necessary watch for any engineering leader dealing with the flood of AI-generated code, bypassing the usual hype to offer practical, structural strategies for designing "agent-legible" codebases and reintroducing essential friction to prevent your systems from drowning in brittle technical debt.

## Highlights by Theme

### Developer Tools & Platforms
In an excellent talk from the [AI Engineer](https://www.youtube.com/watch?v=_Zcw_sVF6hU) channel, Armin Ronacher and Cristina Poncela Cubeiro outline how to adapt codebases for AI agents by enforcing constraints like unique function names, erasable syntax-only TypeScript, and single-query interfaces to reduce machine-generated entropy. On the deployment side, [Google Cloud Tech](https://www.youtube.com/watch?v=njWyDHKYeVA) walks through hosting Gemma 4 on Cloud Run GPUs, detailing the trade-offs between Ollama for fast-starting local development and VLM for memory-efficient production serving via PagedAttention. A follow-up [Google Cloud Tech](https://www.youtube.com/watch?v=7wENq-LMHgQ) video demonstrates securing these endpoints with Model Armor at the load balancer level to block prompt injections, while hooking up Prometheus sidecars to export custom metrics like token generation rates.

### AI & Machine Learning
Raia Hadsell of Google DeepMind presented substantive non-LLM updates at [AI Engineer](https://www.youtube.com/watch?v=zZsTVBXcbow), demonstrating Genie 3's real-time, playable world models and highlighting GenCast's ability to generate 15-day probabilistic weather forecasts in eight minutes on a single chip. Meanwhile, Anthropic's unreleased Claude Mythos Preview sparked debate after a [GitHub](https://www.youtube.com/watch?v=T6YYOf0MZi8) video highlighted its terrifying proficiency at autonomously chaining kernel flaws and crushing human cybersecurity benchmarks. However, the [All-In Podcast](https://www.youtube.com/watch?v=aU5tX2qP_Q8) raised pragmatic skepticism, suggesting Anthropic's altruistic pause might actually be a marketing spin to cover up an inability to financially serve the massive model, thereby preserving their compute for the upcoming Opus 4.7 instead.

### Hardware & Infrastructure
In an interview with [Dwarkesh Patel](https://www.youtube.com/watch?v=wvzJHVmvEwU), Nvidia's Jensen Huang dismissed the idea that export controls will completely block China from AI development. He argues that China's massive excess power infrastructure can compensate for using older, less efficient chips by networking them together into giant supercomputers using silicon photonics. In another [Dwarkesh Patel](https://www.youtube.com/watch?v=rqNWGjgTg2w) clip, Huang explains Nvidia's strategy of investing in all foundation model companies rather than picking winners, noting that Nvidia's own early graphics architecture was "precisely wrong" and they survived their early startup days entirely against the odds.

### Everything Else
[No Priors](https://www.youtube.com/watch?v=6qTr3KXZfis) highlighted claims that ServiceNow is now managing 90% of its customer service cases with AI agents, shifting human workers to judgment-based roles and allegedly decimating the need for net new headcount. Contrasting this enterprise hype, the [All-In Podcast](https://www.youtube.com/watch?v=MjAfC_9Jii0) reminds us that AGI isn't here yet, and actual enterprise deployment will face massive friction from undocumented processes and bureaucratic change management, even if smaller tech companies are successfully using agents to accelerate their shipping velocity.