---
title: 2026-03-31
weight: 7
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-31

## Watch First
[CUDA: New Features and Beyond | NVIDIA GTC](https://www.youtube.com/watch?v=VdIVQcMn0CA)
NVIDIA details "Green Contexts" for dynamic GPU SM partitioning and the new CUDA Tile compiler stack, fundamentally changing how engineers can optimize concurrent prefill and decode inference workloads without the overhead of multi-process solutions.

## Highlights by Theme

### Developer Tools & Platforms
[Announcing ADK Go 1.0](https://www.youtube.com/watch?v=Alu4L3Pgzkw) by Google for Developers introduces a pragmatic enterprise agent stack featuring native OpenTelemetry (OTel) structured tracing and explicit human-in-the-loop security pauses for sensitive tool calls. Meanwhile, the [Fireship](https://www.youtube.com/watch?v=o7NYXvYohYk) channel reports a critical supply-chain RAT payload hidden in a post-install script of a rogue Axios dependency (`plain-crypto-js`) that exfiltrates AWS and OpenAI keys. For rapid scaffolding, [Build real-time multimodal agents with Gemini and Pipecat](https://www.youtube.com/watch?v=Fk2t9AG721E) demonstrates spinning up multi-agent voice workflows entirely locally, explicitly reducing the model's "thinking level" to improve real-time latency. 

### AI & Machine Learning
In [Agentic AI 101 | NVIDIA GTC](https://www.youtube.com/watch?v=ETq3ZTqxFlo), NVIDIA addresses the enterprise security of open-source autonomous agents by outlining NeMoClaw, a sandbox utilizing OpenShell and a "privacy router" to safely constrain the viral OpenClaw project. To combat the practical problem of agent context window degradation, [The OpenClaw unlock that changes the game](https://www.youtube.com/watch?v=47GHJZaF4Z8) on Lenny's Podcast recommends rigidly partitioning tasks into highly specific sub-agents rather than relying on a single omniscient assistant. Additionally, [NVIDIA DGX Spark & Reachy Photo Booth Playbook](https://www.youtube.com/watch?v=6f1x8ReGLjc) provides a hands-on technical walkthrough of tying local multimodal LLMs (GPT-OSS 20B, Riva, Flux.1) to physical robotics state machines via the NeMo Agent Toolkit.

### Hardware & Infrastructure
Returning to the standout [CUDA: New Features and Beyond | NVIDIA GTC](https://www.youtube.com/watch?v=VdIVQcMn0CA), NVIDIA is targeting asymmetric parallelism by letting developers isolate execution streams within sandboxed "Green Contexts," drastically improving the bin-packing of differing workloads on a single GPU. They also announced C++ support for the CUDA Tile compiler, which allows a single array-based tensor algorithm to run efficiently across Ampere, Hopper, and Blackwell architectures without rewriting kernels. On the geopolitical and supply chain front, [Huawei Was About to Beat NVIDIA - Dylan Patel](https://www.youtube.com/watch?v=x21Sac_RnyE) on the Dwarkesh Patel channel notes that before the TSMC ban, Huawei's Ascend chip was actually pacing months ahead of the A100 and Google's TPU.

### Everything Else
In [Ryan Roslansky: Turning AI anxiety into skills...](https://www.youtube.com/watch?v=p2Gjm7VYXeU), the LinkedIn CEO advocates treating jobs as a collection of augmentable tasks rather than fixed titles, highlighting the rise of the un-siloed "Builder" role replacing traditional PM-to-engineering handoffs. Finally, for a mathematical palate cleanser, [The Original Biggest Numbers - Numberphile](https://www.youtube.com/watch?v=sJqceEImtew) explores how ancient Jainism derived a number so massive (roughly a 10^135 tower of tens) it requires modern Knuth arrow notation to express, formulated entirely by imagining continental cubic pits endlessly filled and emptied of mustard seeds.