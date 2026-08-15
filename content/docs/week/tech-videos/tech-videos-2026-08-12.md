---
title: 2026-08-12
weight: 2
categories: ["Youtube", "Tech"]
tags: ["developer tools", "continual learning", "ai infrastructure", "robotics"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-08-12

## Watch First
**[The Workflow of the Future With Zed](https://www.youtube.com/watch?v=GsLyhrxaMIo)** on **Syntax** is the single most critical watch for senior engineers today. It cuts through the typical agent marketing to detail **Delta**, a new agent-focused editor built on a custom database layer (**Delta DB**) and conflict-free replicated work trees that virtualize Git repositories, enabling real-time developer-agent co-authoring with zero lag.

## Highlights by Theme

### Developer Tools & Platforms
In **[The Workflow of the Future With Zed](https://www.youtube.com/watch?v=GsLyhrxaMIo)** (Syntax), Nathan Sobo explains how Delta virtualizes the work tree using **copy-on-write persistent B-trees** and maps rendering tasks directly to the GPU via their custom GPUI Rust framework. For corporate Java environments, **[Getting started with your first Java app](https://www.youtube.com/watch?v=ZX8LEQpKPx0)** (Visual Studio Code) demonstrates how the Spring Boot extension pack integrates the **Model Context Protocol (MCP)** to publish backend services as AI tools. On-device developers also get minor updates: **[🎙️ Dictate in Multiple Languages in #VSCode](https://www.youtube.com/watch?v=d_d6GkCAVko)** (Visual Studio Code) showcases local multilingual dictation using **on-device speech-to-text modules**, while **[Slack Developer Sandboxes | Slack](https://www.youtube.com/watch?v=VOBLoqMbOJ4)** (Slack) introduces free, isolated enterprise environments for safe API prototyping away from production code.

### AI & Machine Learning
Physical AI and continual learning (CL) dominated the technical talks today. In **[Chelsea Finn: This is the State of the Art in Robotics](https://www.youtube.com/watch?v=cRZNwgvcWUg)** (Y Combinator), Finn demonstrates Physical Intelligence's **PIO7 generalist model**, showing how metadata and subtask prompting achieve zero-shot skill transfer across different robot joint configurations and unseen appliances. On evaluation, UC Berkeley’s **[Beyond Static Intelligence: Evaluating Continual Learning — Parth Asawa, UC Berkeley](https://www.youtube.com/watch?v=iqloyWCGYQQ)** (AI Engineer) introduces **Continual Learning Bench 1.0** and a **'Gain' metric** designed to isolate stateful, online learning from baseline model strength, complemented by Sakana.ai’s **[Memory Harnesses for Long-Running Research Agents — Stefania Druga, Sakana.ai](https://www.youtube.com/watch?v=R3-anFK1YM8)** (AI Engineer) showing that **ranked-recall policies** on local M3 Ultra hardware dramatically reduce token context costs and drift. To scale these CL pipelines, **[Scaling up Continual Learning — Ronak Malde, Trajectory](https://www.youtube.com/watch?v=zL1kLftVTlo)** (AI Engineer) details **On-Policy Self-Distillation (OPSD)** but flags a critical **'buttweight problem'** where long-horizon models over-diverge and collapse into filler hedging words. On inference, **[Meta's new model wants "deep access" to your personal life...](https://www.youtube.com/watch?v=G55HSGpuh1M)** (Fireship) breaks down **Muse Glimmer**, a distilled 30B open model optimized for consumer GPUs via **4-bit quantization and speculative decoding**.

### Hardware & Infrastructure
AI infrastructure remains severely undersupplied, with Morgan Stanley's Michelle Weaver warning in **[Why Open-Weight AI Models Won’t Kill the Closed Model](https://www.youtube.com/watch?v=vqw7jVffd3s)** (Bloomberg Tech) of a **40-gigawatt power shortfall** through 2028 alongside specialized labor bottlenecks. To hedge these massive capital expenditures, Carmen Li explains in **[Silicon Data Raises \$30.5M to Benchmark AI Compute](https://www.youtube.com/watch?v=9lz250OEO2M)** (Bloomberg Tech) that the **CME plans to list GPU futures** starting October 5, cash-settled against independent H100 indices to manage price volatility. Meanwhile, hyper-scalers are printing high margins; **[CoreWeave, Supermicro Lead Tech Stocks Higher on Results | Bloomberg Tech 8/12/2026](https://www.youtube.com/watch?v=aEOu5HaGQXA)** (Bloomberg Tech) highlights Supermicro’s massive **\$15B revenue guide** and CoreWeave's lucrative strategy of extraction pricing on older A100 inventory.

### Everything Else
In **[Stop being skeptical about AI for development with Charity Majors](https://www.youtube.com/watch?v=HC8T1OlgYi0)** (The Pragmatic Engineer), Charity Majors warns of a quiet dip in code quality across the industry and argues that since code generation is cheap, engineers should treat **'code as cash'**—replacing broken functions entirely rather than editing them in place. On consumer tech, Marques Brownlee’s **[Google Pixel 11/Pro/Fold Impressions: It Is What It Is](https://www.youtube.com/watch?v=o4SSoURPODY)** (Marques Brownlee) critiques Google’s incremental upgrades and **'Ramageddon'**—a cost-cutting move that dropped starting Pro models from 16GB to 12GB RAM. Finally, we get management and cultural perspectives from **[Why Airbnb doesn’t have a CPO | Brian Chesky (CEO of Airbnb)](https://www.youtube.com/watch?v=EcxCWFP1xFI)** (Lenny's Podcast) on corporate reorganization, alongside **[Khabib Nurmagomedov: Dagestan, MMA, UFC, Islam, Conor, Fedor & Football | Lex Fridman Podcast #500](https://www.youtube.com/watch?v=l6USUAIKJls)** (Lex Fridman), which delivers an exhaustive masterclass on spartan work ethic and remaining grounded under massive success.

---

🔮 If you'd like, I can do some web research to find out how other financial institutions are responding to CME's upcoming GPU futures and what the current sentiment is around this new risk-management layer.