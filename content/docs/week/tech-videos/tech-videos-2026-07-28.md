---
title: 2026-07-28
weight: 6
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "ai agents", "developer tools", "hardware"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-07-28

## Watch First
**[AI Agents for Performance: Ship Faster, Pay Less — Rajat Shah, Netflix](https://www.youtube.com/watch?v=CgsWxRUY5Eo)** from AI Engineer. This is a pragmatic, highly technical dive into using LLMs to read production CPU profiling data (like flame graphs and call stacks) to automatically generate performance-optimizing pull requests, effectively bypassing the human bottleneck of manual performance engineering.

## Highlights by Theme

### Developer Tools & Platforms
From Google Cloud Tech, **[How to design a game with Claude code on Gemini Agent Platform](https://www.youtube.com/watch?v=tHO9vbS62M0)** showcases a live demo of using Claude Code in a Vertex AI environment to deterministically run "dynamic workflows" via parallel subagents to generate a browser game. On the GitHub channel, **[Write your first prompt in the GitHub Copilot app | Tutorial for beginners](https://www.youtube.com/watch?v=WrMt6T8yu18)** demonstrates basic prompt routing by switching between fast and reasoning models, and highlights remote agent execution. Visual Studio Code’s **[MigrateToSkills](https://www.youtube.com/watch?v=eBiS_QwhBZY)** briefly highlights a new one-click migration feature to move legacy prompts into reusable Skills directly within the IDE settings. Finally, Slack's **[Slack School | Deploying Your First Slack App](https://www.youtube.com/watch?v=SfQqs9EsaJU)** walks through local testing via WebSockets (`slack run`) and remote deployment (`slack deploy`) to their platform using the Deno runtime.

### AI & Machine Learning
NVIDIA’s **[GTC SJ 2026: The AI Native Digital Health Stack A Developer's Guide to 2026](https://www.youtube.com/watch?v=iWsKSxyfRIA)** details their new Nemotron 3 models (featuring a hybrid MoE architecture and 1M token context window) alongside the NIM 2.0 stack, which introduces distributed inference techniques like KV routing and disaggregated serving for 3-4x latency improvements. OpenAI announced two new ASR models in **[Introducing gpt-transcribe and gpt-live-transcribe](https://www.youtube.com/watch?v=WeP9VUf1OoE)**, offering both batch processing and real-time streaming connections with high robustness to background noise and multilingual speech. For applied AI engineering, Factory’s Eno Reyes in **[How Forward Deployed Engineering is done at Factory — Eno Reyes](https://www.youtube.com/watch?v=wpOA-UXynoM)** argues against treating FDE as standard professional services; instead, he advocates building verifiable "software factories" where agents autonomously resolve tickets bounded by strict, deterministic validation loops.

### Hardware & Infrastructure
In **[Serving 2 Million Models Without Melting: Scaling the Hugging Face Hub — Arek Borucki, Hugging Face](https://www.youtube.com/watch?v=lyL5QhgIOxc)** on the AI Engineer channel, Arek Borucki details scaling their backend from 20k to 3M models. The architecture cleanly separates binary objects in S3 from metadata in MongoDB Atlas, leveraging an Apache Lucene integration for full-text search and a dual-layer autoscaling system using Kubernetes HPA alongside Cast AI for node provisioning. On the market side, Bloomberg Tech’s **[Chipmaker Rout Drags Nasdaq 100 Near Correction](https://www.youtube.com/watch?v=3PN5OQJCmLw)** and **[SpaceX Falls 20% Below IPO Price, Loses $1.2T From Peak](https://www.youtube.com/watch?v=cakNwijgVHo)** track the AI hardware selloff, driven by hyperscaler CapEx concerns and emerging Chinese lithography and memory chip competition (like CXMT).

### Everything Else
For a dose of computing history, Computerphile’s **[PiDP6 & Lisp - Computerphile](https://www.youtube.com/watch?v=dXBmCIfb92k)** provides a fascinating demo of a PDP-6 software emulator running 1966 Lisp, explaining how hardware word structures (left and right halves) literally gave us the `car` and `cdr` functions. Additionally, Boom Supersonic CEO Blake Scholl presented at Y Combinator in **[Blake Scholl: "The Future Was Supposed to Be Faster"](https://www.youtube.com/watch?v=byAj35QlGbs)**, detailing their Mach 1.1 test flight and their strategy to vertically integrate digital manufacturing to bypass slow aerospace suppliers