---
title: 2026-07-29
weight: 7
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "hardware", "robotics", "ai agents"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-07-29

## Watch First
**[Multi-GPU Kernels, Intelligence per Watt, Heterogeneous Inference, and More | YC Paper Club](https://www.youtube.com/watch?v=n8dz2FX0_uY)**
If you only watch one video, make it this dense Y Combinator breakdown of multi-GPU communication and heterogeneous inference. It skips the hype and dives straight into the low-level optimizations (like CUDA memory hierarchies) required to squeeze actual performance out of modern AI hardware.

## Highlights by Theme

### Developer Tools & Platforms
**[Benchling cuts migration time by 75% with cloud agents](https://www.youtube.com/watch?v=f_iA2NtIxBU)** from Cursor shows the practical reality of AI orchestration, detailing how cloud agents reduced a year-long React refactor to just one quarter. On the platform architecture side, GitHub's **[How to set up custom themes, sounds, and MCP servers in the GitHub Copilot app](https://www.youtube.com/watch?v=qEeo__k2IIg)** demonstrates how to build custom visual canvases and inject local MCP (Model Context Protocol) servers to orchestrate agent sessions. Finally, for an honest look at code verification, **[Formal methods with Hillel Wayne](https://www.youtube.com/watch?v=KSkcgIYQy0U)** on The Pragmatic Engineer argues that while LLMs generate code rapidly, they remain terrible at writing formal mathematical specifications like TLA+, making human-driven system verification a critical bottleneck.

### AI & Machine Learning
**[Your Agent Didn’t Fail. Your Harness Did. — Vinoth Govindarajan, OpenAI](https://www.youtube.com/watch?v=BInpv7lGp1o)** on the AI Engineer channel is a standout systems design talk emphasizing that production agent failures are usually state ownership and routing issues rather than model hallucinations. NVIDIA's **[Inside NVIDIA Cosmos | SIGGRAPH 2026 Keynote](https://www.youtube.com/watch?v=sYLU40u9L-k)** unveils a "world foundation model" that combines auto-regressive and diffusion transformer towers to natively simulate real-world physics for robot policy training. For applied AI, **[How Kepler Built Verifiable AI for Financial Services — Vinoo Ganesh](https://www.youtube.com/watch?v=Tt2kX2sgQio)** explains a clever architecture that isolates an LLM's probabilistic reasoning from a deterministic execution substrate, ensuring math and data extraction are mechanically verifiable.

### Hardware & Infrastructure
The aforementioned YC Paper Club video also details "Parallel Kittens," a framework that optimizes multi-GPU kernels by precisely balancing copy engines, tensor memory accelerators, and register instructions. On the macro scale, Bloomberg's **[SK Hynix Slips Ahead of Big Tech Results](https://www.youtube.com/watch?v=1-zGa-0XRFg)** highlights the sheer scale of the hardware build-out, noting SK Hynix's $31 billion CapEx to meet unprecedented, highly-committed AI memory demand. Exploring the physical deployment of hardware, the All-In Podcast's **[The $1/Hour Robot Is Coming](https://www.youtube.com/watch?v=TqNiSTeNtb0)** covers the evolving unit economics of autonomous machines, with leaders from Boston Dynamics and 1X charting the path to operating humanoid and quadruped robots for roughly a dollar an hour.

### Everything Else
Former React core team member Dan Abramov explains the AT Protocol in Syntax's **[ATPROTO isn’t just for Bluesky weiners](https://www.youtube.com/watch?v=D77GjVt0H6w)**, describing it as a decentralized JSON storage layer where users own their data and apps merely act as views. For a dose of computing history, Computerphile's **[PiDP10 - Computerphile](https://www.youtube.com/watch?v=hISbyatih44)** demos a Raspberry Pi-powered PDP-10 simulator, bringing MIT's legendary 1960s Incompatible Timesharing System (ITS) and its early multiplayer games back to life.