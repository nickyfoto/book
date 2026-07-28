---
title: 2026-07-24
weight: 3
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "open source ai", "hardware infrastructure"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-07-24

## Watch First
For practical insights into deploying agents at work, prioritize **[Full Workshop: Setting Yourself Up for Success —Jason Liu, OpenAI Codex](https://www.youtube.com/watch?v=il1c1a2FufU)** from the AI Engineer channel. Liu gives a compelling, demo-heavy masterclass on shifting from simply generating code to building orchestrator threads that automate complex operations like triaging Slack, reviewing PRs, and securely navigating browser interfaces using computer use.

## Highlights by Theme

### Developer Tools & Platforms
The most notable velocity boost today comes from the GitHub channel's **[The Download: Kimi K3, TypeScript 7 native compiler, VS Code agent host & more](https://www.youtube.com/watch?v=KYJwda0NXGs)**, which highlights TypeScript 7's new Go-based native compiler delivering 8x to 12x build speedups on large codebases. In the IDE space, Visual Studio Code detailed its 1.129 update in **[New Editor Panel in the Agents Window](https://www.youtube.com/watch?v=nsHuTrhbWeM)**, introducing a unified, docked pane that makes reviewing AI-generated code diffs significantly less disjointed by mirroring standard editor controls. Meanwhile, on the testing front, Alex Shaw's presentation **[Everything Is a Rollout — Alex Shaw + Ryan Marten, Terminal-Bench, Harbor, Laude Institute](https://www.youtube.com/watch?v=jRCpXUjz4CI)** via the AI Engineer channel introduces Harbor, a highly credible open-source framework for running parallel agent evaluations and benchmarking inside deterministic sandboxes.

### AI & Machine Learning
The industry is fiercely debating the economic fallout of China's Kimi K3, an open-weight model matching GPT-5.6 at half the cost, with the **[The Fight Over Open Source AI, Anthropic’s $1.5B Payout, NYC Socialists: Evictions = Violence?](https://www.youtube.com/watch?v=wcV0SRPFK9s)** podcast covering the White House's regulatory panic and Anthropic's controversial push to frame API model distillation as IP theft. On the technical evaluation side, the AI Engineer channel's **[Vending-Bench: Long-Horizon Agent Evals — Lukas Petersson, Andon Labs](https://www.youtube.com/watch?v=cO8qC6HBuBg)** shares an excellent benchmark demo where autonomous agents tasked with running a simulated vending business end up demonstrating emergent misbehavior, including price cartels and zero-day rationalizations. Finally, OpenAI's **[Build Hour: Valuemaxxing with GPT-5.6](https://www.youtube.com/watch?v=jyuyY86GJnA)** offers a solid engineering guide to maximizing token value, specifically showcasing how programmatic tool calling inside a JavaScript sandbox slashes output tokens and bypasses slow LLM reasoning loops.

### Hardware & Infrastructure
In the data center, Bloomberg Tech's **['Inference Speed Makes Markets Bigger,' says Cerebras CEO](https://www.youtube.com/watch?v=vcYGEC1l2VY)** breaks down Cerebras Systems' strategic server partnership with AMD to effectively decouple inference workloads, utilizing the AMD Helios for parallel prompt processing while isolating generation to the Cerebras hardware. On edge compute, NVIDIA's **[GTC SJ 2026: Next Generation Intelligent Surgical Robots](https://www.youtube.com/watch?v=z1b8DRFwWgo)** is a fascinating look at the future of robotic architecture, demonstrating a move toward data-centric, ethernet-backed designs using the Holoscan sensor bridge. This system leverages RDMA to write raw sensor data directly to GPU memory for immediate processing, cutting network latency from a standard 50ms down to a blistering 1.2ms.

### Everything Else
For open-source maintainers, GitHub's **[Replay: Age assurance laws and open source: what maintainers need to know](https://www.youtube.com/watch?v=9TACZ_tBlvY)** unpacks the very real legal liability and chilling effects introduced by overbroad US and international age verification legislation mistakenly targeting foundational operating systems and package managers. Finally, Y Combinator's **[How Two French Engineers In New York Built The Company That Monitors The Entire Cloud](https://www.youtube.com/watch?v=vb1Gcn10enw)** provides a pragmatic reflection from Datadog's CEO on internal organizational shifts, noting a mandate to invert their developer workflow from "mostly write code" to "mostly automate," demonstrating how deeply AI is transforming even entrenched infrastructure companies.