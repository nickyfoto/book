---
title: 2026-06-06
weight: 7
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "multi-agent systems", "developer tools", "hardware"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-06

## Watch First
**[How to design a multi-agent system that skips the LLM](https://www.youtube.com/watch?v=Fzd0BWMH65s)** is the most pragmatic watch today, demonstrating how to scale to 10,000 concurrent agents by strategically intercepting LLM calls with deterministic code using a `before_model_call` callback.

## Highlights by Theme

### Developer Tools & Platforms
Stripe engineers share a genuinely interesting look at machine-to-machine commerce in **[Building safe Payment Infrastructure for the autonomous economy](https://www.youtube.com/watch?v=KLSuFPj2ld0)** by the AI Engineer channel, showing how to issue scoped, limited shared tokens and handle HTTP 402 payment requests programmatically so autonomous agents can safely complete checkouts. For IDE tooling, **[Building Interactive UIs in VS Code with MCP Apps](https://www.youtube.com/watch?v=_xIwFcnHqp4)** on the AI Engineer channel features a practical live demo of a Model Context Protocol server executing a Go profiler and rendering the resulting interactive flame graph back to the developer directly via a sandboxed iframe.

### AI & Machine Learning
In **[Evals Are Broken, Use Them Anyway](https://www.youtube.com/watch?v=QuuIywMG4s8)** on AI Engineer, Cline's Ara Khan gives a no-nonsense guide to building custom agent evals, emphasizing isolated testing environments and portfolio-allocating failures to fix specific agent harness levers instead of chasing public benchmark scores. The architecture discussion in **[Emergent: How Six Months of Tinkering Led To A $100M ARR Company](https://www.youtube.com/watch?v=yyXCQHX55N4)** by Y Combinator highlights the hidden complexity of building autonomous coding tools, noting their team had to build custom deep container technology for disk and memory snapshotting to preserve state across parallel agent swarms. Finally, Google Cloud Tech's **[How to design a multi-agent system that skips the LLM](https://www.youtube.com/watch?v=Fzd0BWMH65s)** offers a masterclass in hybrid architectures, using deterministic routing algorithms (like Dijkstra) over AI where appropriate, and employing community-built Redis session services to manage latency for stateless Cloud Run agents.

### Hardware & Infrastructure
**[The IPO Comeback: Why Tech Giants Are Finally Going Public | All-In Liquidity IPO Panel](https://www.youtube.com/watch?v=jLICvWE7w2Q)** from the All-In Podcast features Cerebras CEO Andrew Feldman defending their dinner-plate-sized wafer-scale chips as the optimal way to solve the memory-to-compute bottleneck for AI inference. Also notable is Planet Labs' Will Marshall pitching the surprisingly credible economics of space-based data centers, arguing that plunging launch costs and sun-synchronous orbits for continuous solar power will soon make hosting TPUs in orbit cheaper than powering terrestrial datacenters.

### Everything Else
The **[OpenAI Investor Innovation Day](https://www.youtube.com/watch?v=RwzRm-qCXwA)** video by OpenAI is purely enterprise marketing fluff consisting of generic corporate quotes, so feel free to skip it. For a brief cultural palate cleanser, the **[Open Source Assistive Technology Hackathon Highlights](https://www.youtube.com/watch?v=hbFuHHp_hJI)** by GitHub offers a quick look at developers building open-source accessibility tooling, while Dwarkesh Patel shares an unrelated but charming story about a taxi ride turning into a deep, day-long conversation in **[A 10-mile ride turned into a 1,000-mile spiritual quest - Adam Brown](https://www.youtube.com/watch?v=zh0CuHT3fvc)**.