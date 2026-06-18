---
title: 2026-06-09
weight: 8
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "ai agents", "hardware"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-09

## Watch First
**[RAG is dead, right?? — Kuba Rogut, Turbopuffer](https://www.youtube.com/watch?v=UM6sFg_jdlE)** cuts through the "agentic file search" hype by showing how Cursor actually indexes codebases: using Merkel trees and Turbopuffer to implement a semantic search tool that improves model answer accuracy by nearly 24% over naïve grep loops.

## Highlights by Theme

### Developer Tools & Platforms
Apple is fully embracing the open-source Model Context Protocol (MCP) in Xcode 27, as shown on **[Apple Developer](https://www.youtube.com/watch?v=nwy1m95AzCA)**, allowing developers to bring custom agents and MCP tools directly into their IDE plugins. In a practical look at agentic workflows, **[Visual Studio Code](https://www.youtube.com/watch?v=bCeHSAgHvB0)** highlighted how engineers are using the GitHub Copilot app in "autopilot" mode with local SQLite databases and MCP servers to asynchronously scaffold applications. Meanwhile, **[The Pragmatic Engineer](https://www.youtube.com/watch?v=tYQkg-RI5io)** offered a healthy dose of skepticism, warning against the chaos of giving autonomous agents raw AWS console access instead of enforcing infrastructure-as-code tools like Terraform.

### AI & Machine Learning
Anthropic released their highly autonomous Mythos-class model, showcased on **[Anthropic](https://www.youtube.com/watch?v=Y9Wz2PV404E)**, noting that Claude Fable 5 can run complex tasks for days but enforces safety by redirecting high-risk cyber and biology requests to the older Opus 4.8 model. On the audio front, Google DeepMind detailed Gemini 3.1 Flash Live on **[AI Engineer](https://www.youtube.com/watch?v=Bc6Ojl2XS1w)**, demonstrating a full-duplex, native audio-to-audio model that bakes reasoning directly into the audio stack to understand pacing, interruptions, and accents without cascading through a text layer. Finally, **[Google for Developers](https://www.youtube.com/watch?v=pLwB_63yUBY)** proved that small open-weight models are viable for local edge robotics, running Gemma 4 2B directly on Raspberry Pi 5 and Jetson Nano hardware for multimodal real-time inference.

### Hardware & Infrastructure
To address the massive token generation demands of agentic loops, **[NVIDIA](https://www.youtube.com/watch?v=Pkh0dqLCsrs)** broke down their Enterprise Reference Architectures, detailing how they validate scalable units from RTX Pro nodes up to NVL72 gigascale clusters using Spectrum X Ethernet. For developers wanting instant GPU access without the infrastructure overhead, **[AI Engineer](https://www.youtube.com/watch?v=zDGHt0LB-dA)** featured RunPod's Flash Python SDK, allowing you to decorate async Python functions to execute directly on cloud H100s with hot-model reloading from a local IDE.

### Everything Else
**[All-In Podcast](https://www.youtube.com/watch?v=0umrMuUClC4)** featured Bill Maris explaining the harsh math behind why smaller VC funds (under $750M) persistently outperform multi-billion dollar mega-funds that mathematically require unachievable exit velocities to return 3x. Reviewing WWDC 2026, **[Marques Brownlee](https://www.youtube.com/watch?v=_gCXmKjDecU)** noted that while Apple Intelligence upgrades are solid, the most advanced on-device Siri models are strictly hardware-gated to devices with 12GB of RAM, immediately outdating the iPhone 16 line.