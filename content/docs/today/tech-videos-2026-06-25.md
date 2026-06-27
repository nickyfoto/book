---
title: Youtube Tech Channels
weight: 3
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "machine learning", "hardware", "cloud infrastructure"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-25

## Watch First
**[The Miranda Hypothesis: How Hamilton Poisoned Persona Evals](https://www.youtube.com/watch?v=IJXjTLPzvAU)** is a rigorous, must-watch takedown of current LLM benchmarks, demonstrating that persona evaluations measure fluency and pop-culture composites rather than historical accuracy.

## Highlights by Theme

### Developer Tools & Platforms
In an excellent architectural argument on the AI Engineer channel, **[The Log Is The Agent](https://www.youtube.com/watch?v=UPwGaM2MKHY)** argues that an agent's state should be treated purely as an append-only event log rather than an active process, making resume, failover, and multi-agent orchestration structurally trivial. On the NVIDIA Developer channel, **[Query Your Codebase with DeepSeek V4 and vLLM](https://www.youtube.com/watch?v=sHWENVcor1Q)** provides a practical demo of serving a 284B DeepSeek V4 Flash model with a 1M context window via vLLM on two B200 GPUs to generate architecture maps from an 80k-token repository. Additionally, the GitHub channel explores the shift from manual prompting to automated agent loops using work trees, cron jobs, and skills in **[Understanding Loop Engineering](https://www.youtube.com/watch?v=bcY3oCj0A9o)**.

### AI & Machine Learning
Google Cloud Tech's **[Implementing DeepMind innovation: Deep research API](https://www.youtube.com/watch?v=05043f3GseE)** showcases a substantive new API that handles long-running, multi-step research tasks, complete with remote Model Context Protocol (MCP) server support and visual chart generation. Over at Microsoft Research, **[Plenary Talk 1: Navigating the AI Horizon: Promises, Perils, and the Power of Collaboration](https://www.youtube.com/watch?v=8_PNaejTpN8)** details the training behind the Pharaoh 1.5 computer-use agent and suggests that agent performance scales differently than standard LLM parameter curves.

### Hardware & Infrastructure
For Kubernetes operators, **[Engineering the future of Kubernetes for AI at scale](https://www.youtube.com/watch?v=yVvLjWDmb0Y)** from Google Cloud Tech is highly relevant, detailing Dynamic Resource Allocation (DRA) for mapping workloads to underlying hardware topologies and non-disruptive, in-place pod resizing to optimize resource bin-packing. On the hardware front, **[NVIDIA & Coherent: Reindustrializing America, Manufacturing for the AI Era](https://www.youtube.com/watch?v=GsqW5MPFajw)** highlights the scaling of a 6-inch indium phosphide fab in Texas, directly addressing the silicon photonics interconnect bottlenecks in massive AI clusters. Lastly, cryptography engineers should check out Microsoft Research's **[Provable Security and Privacy Analysis of WPA3’s SAE and SAE-PK Protocol](https://www.youtube.com/watch?v=_oN68iE2zsQ)**, which exposes role confusion and offline dictionary vulnerabilities in Wi-Fi 3 authentication logic.

### Everything Else
Microsoft Research dives into the biological constraints of cognitive decline and the search for reliable blood biomarkers using multi-modal data in **[Plenary Talk 4: Aging Brain Research: Challenges and Opportunities](https://www.youtube.com/watch?v=JWmcc-mwyj8)**. On the cultural side of engineering, **[What AI coding costs engineers](https://www.youtube.com/watch?v=X_LrhBI3Z2Y)** on Lenny's Podcast briefly touches on the isolation caused by heavy agent reliance and the deliberate reintroduction of pair programming to maintain team knowledge transfer.