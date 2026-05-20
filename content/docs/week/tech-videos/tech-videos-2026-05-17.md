---
title: 2026-05-17
weight: 2
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "hardware", "robotics"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-17

## Watch First
[Fighting AI with AI — Lawrence Jones, Incident](https://www.youtube.com/watch?v=L2r6vLlLgs8) is a masterclass in pragmatic AI engineering for testing complex, multi-prompt agent systems. The standout trick: instead of fighting complex evaluation UIs, incident.io serializes massive UI trace graphs into static local file systems for Claude Code to natively ingest and debug, allowing the agent to effortlessly trace errors through hundreds of tool calls.

## Highlights by Theme

### Developer Tools & Platforms
In [Why Your AI UX Is Broken (and It's Not the Model's Fault) — Mike Christensen, Ably](https://www.youtube.com/watch?v=YNJvm7t3yq8), Mike Christensen explains why the default HTTP Server-Sent Events (SSE) pattern for streaming LLM responses fundamentally limits modern AI chat apps by breaking on disconnects and failing to sync across multiple tabs. He details how shifting to "durable sessions" via WebSockets and pub-sub architectures allows for resumability, cross-device syncing, and bi-directional agent cancellation. At [AIE Singapore Day 2](https://www.youtube.com/watch?v=m12vGjfbNlo), Cloudflare engineers introduced "Code Mode," a method to bypass the latency and context bloat of sequential MCP calls by instead prompting the model to write and execute parallelized TypeScript scripts against an API. Guillermo Rauch pushes a marketing-heavy vision in [Vercel's Guillermo Rauch on the next hot programming language](https://www.youtube.com/watch?v=sODwJlkbcFo), claiming English is the "next hot programming language" to onboard 500 million Slack and Teams users into software creation. Finally, a minor but useful workflow update is covered in [Create GitHub repositories from the mobile app](https://www.youtube.com/watch?v=HyOWj3ldwFY): GitHub has shipped the ability to initialize new public or private repositories directly from iOS and Android devices.

### AI & Machine Learning
In [Harnesses in AI: A Deep Dive — Tejas Kumar, IBM](https://www.youtube.com/watch?v=C_GG5g38vLU), Tejas Kumar gives an excellent practical demo on wrapping unreliable models with deterministic code "harnesses" rather than relying on fragile prompt engineering. By hard-coding Playwright logic to handle logins and state validation outside the LLM, he shows how to force stable outcomes even when using older, cheaper models like GPT-3.5. The expansive [AIE Singapore Day 2](https://www.youtube.com/watch?v=m12vGjfbNlo) stream features several other dense technical talks, notably Tusk's Junu demonstrating "Fence," an OS-level execution boundary that acts as a secure sandbox to prevent agents from overreaching on file and network access. In the same stream, Adaption's Sarah Hooker argues that brute-force model scaling is hitting diminishing returns, advocating instead for adaptive compute and "AutoScientist" to automate training data optimization. On the enterprise adoption side, Salesforce CEO Marc Benioff remarks in [“I am going to probably use $300M of Anthropic this year at Salesforce.” - Marc Benioff](https://www.youtube.com/watch?v=qoUhsZKy39M) that he anticipates spending $300M on Anthropic this year specifically because coding agents have drastically increased the speed and efficiency of building software.

### Hardware & Infrastructure
[Why we’re at the beginning of the AI hardware boom | Caitlin Kalinowski (ex–OpenAI, Meta, Apple)](https://www.youtube.com/watch?v=G5WTgB87rYQ) offers a sobering perspective on physical AI and hardware supply chains. Kalinowski warns hardware startups to pre-buy memory immediately, predicting prices could double as AI data centers consume global supply. She notes that while AI is accelerating software, generating complex 3D CAD models via AI remains stalled because current LLMs and video models cannot natively understand physical world constraints like solid surfaces, weight, or friction. Robotics infrastructure is also highlighted in [AIE Singapore Day 2](https://www.youtube.com/watch?v=m12vGjfbNlo), where Bifrost explains how they build custom synthetic simulators based on real-world data to generate extreme edge-case training scenarios, helping close the "sim-to-real gap" for autonomous systems.

### Everything Else
[They Built This Without Wheels or Metal - David Reich](https://www.youtube.com/watch?v=MnPwF178DhY) provides a brief historical detour regarding human engineering, marveling at how the massive ancient city of Teotihuacan in Mexico was constructed entirely without the use of metal, pack animals, or wheels.