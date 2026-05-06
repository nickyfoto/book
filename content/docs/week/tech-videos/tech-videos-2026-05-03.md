---
title: 2026-05-03
weight: 2
categories: ["Youtube", "Tech"]
tags: ["ai agents", "edge ai", "developer tools", "ai infrastructure"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-03

## Watch First
[TLMs: Tiny LLMs and Agents on Edge Devices with LiteRT-LM — Cormac Brick, Google](https://www.youtube.com/watch?v=BKWpYIWvAo4) is the standout watch today, offering a highly technical deep dive into running 2-to-4-billion parameter models on mobile devices and edge NPUs using LiteRT-LM. Brick demonstrates how to build modular on-device agents that dynamically load lightweight JavaScript skills instead of relying on massive system prompts, optimizing the limited memory and context windows typical of edge hardware.

## Highlights by Theme

### Developer Tools & Platforms
In [Mergeable by default: Building the context engine to save time and tokens — Peter Werry, Unblocked](https://www.youtube.com/watch?v=5ID22ACI7IM), the Unblocked team tackles why naive RAG fails for coding agents by exploring the "satisfaction of search" problem, where models stop looking after finding technically compiling but historically incorrect code. They demonstrate how building a context engine—a social engineering graph mapping Slack chats, pull requests, and org history—can drastically cut agent doom loops and token usage. Similarly, [Context Is the New Code — Patrick Debois, Tessl](https://www.youtube.com/watch?v=bSG9wUYaHWU) argues that context is replacing raw code, necessitating a formal "Context Development Life Cycle" complete with prompt evals, automated LLM-judged CI/CD pipelines, and versioned context package registries.

### AI & Machine Learning
[TLMs: Tiny LLMs and Agents on Edge Devices with LiteRT-LM — Cormac Brick, Google](https://www.youtube.com/watch?v=BKWpYIWvAo4) delivers high signal for local inference, detailing the memory management of Gemma 4 (E2B and E4B) models which memory-map per-layer embedding tables so only the necessary bytes hit RAM. Brick emphasizes that for sub-500 million parameter models, fine-tuning over generic prompting is strictly required for production reliability, and outlines how constrained decoding forces the model output to map perfectly to valid tool calls.

### Hardware & Infrastructure
[The Trillion-Dollar Timing Problem in AI](https://www.youtube.com/watch?v=pV10LYdta7s) briefly covers the severe capital risks of current data center buildouts. Dwarkesh Patel outlines the dilemma that even if AI scales rapidly to "a country of geniuses in a data center in one to two years," the enterprise integration and economic diffusion will be much slower, potentially ruining infrastructure investors who mistime the ROI.

### Everything Else
The clips from the All-In Podcast are entirely noise today and can be safely skipped by engineers looking for signal. They feature Jason Calacanis arguing against journaling in [“Rumination is the path to unhappiness.” - J Cal](https://www.youtube.com/watch?v=FfC-A0Wdgug) and the hosts mocking Greg Brockman for taking detailed written notes that became discoverable in the Elon Musk/Sam Altman trial in ["What the f*** is he doing!?" - The Besties React to the Elon/Sam Altman Trial 😂](https://www.youtube.com/watch?v=jROZdAU0jV0).