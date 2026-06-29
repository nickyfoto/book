---
title: 2026-06-27
weight: 1
categories: ["Social Media", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "open source llms", "local inference", "ai agents"]
---

{{< sources "company-twitter" >}}

# Company@X — 2026-06-27

## Signal of the Day
Anthropic announced that the US government has permitted the redeployment of its cybersecurity model, Mythos 5, to organizations defending critical infrastructure, following a suspension that began on June 12. This marks a significant development in the regulatory oversight and restriction of frontier models, particularly as Fable 5 remains fully blocked from general use.

## Key Announcements

**Anthropic** · [Source](http://twitter.macworks.dev/AnthropicAI/status/2070665903440871779#m)
After working closely with the US government since June 12, Anthropic is restoring access to Mythos 5, its most capable cybersecurity model, specifically for US organizations managing critical infrastructure. The company states they are working quickly to redeploy the model for these specific groups while continuing to negotiate the general release of Fable 5 and broader access to Mythos 5. This underscores the tight, selective deployment parameters being applied to advanced AI assets under government purview.

**Ornith** · [Source](http://twitter.macworks.dev/NielsRogge/status/2070167671430119910#m)
Ornith has released Ornith-1.0, a family of open-source, MIT-licensed LLMs aimed specifically at agentic coding, ranging from 9B to a 397B MoE. Post-trained on top of gemma4 and qwen3.5, the models utilize a novel self-improving reinforcement learning strategy that jointly optimizes solution rollouts and task-specific scaffolds. The release is highly competitive for the open-source community, beating Anthropic's Opus 4.8 and sitting just below the much larger GLM-5.2 on Terminal Bench 2.1.

**Xenova** · [Source](http://twitter.macworks.dev/xenovacom/status/2070210622239707568#m)
Using an agentic WebGPU kernel optimization framework powered by Opus 4.8, developers managed to push Liquid AI's new LFM2.5 230M model to an astonishing 1,400 tokens per second locally in-browser. This milestone was achieved by continuing the automated kernel optimization work that initially began with the now-suspended Fable 5 model. The results signal a major leap forward for high-speed, on-device inference driven by AI-written kernels.

**Google Cloud** · [Source](http://twitter.macworks.dev/GoogleCloudTech/status/2070899959914795254#m)
Google Cloud has moved its URL filtering for Cloud Next Generation Firewall into General Availability (GA). This enterprise networking feature allows administrators to block access to specific domains even when destination servers host trusted sites, providing a more simplified and granular layer of network security.

## Also Noted
- **Google Cloud** ([Source](http://twitter.macworks.dev/GoogleCloudTech/status/2070945260008546330#m)): Google launched a new codelab to train developers on building AI agents using the Agent Development Kit, Agent Skills, and the Model Context Protocol (MCP).
- **Victor Mustar / Hugging Face** ([Source](http://twitter.macworks.dev/victormustar/status/2070190742991994967#m)): Hugging Face accounts now offer enough free credits to use GLM-5.2 on HuggingChat—which leverages Exa for internet research—to automatically build and deploy websites to a static HF Space.
- **Maziyar Panahi** ([Source](http://twitter.macworks.dev/MaziyarPanahi/status/2070503452178796704#m)): Developers are successfully running GLM-5.2 locally via llama.cpp on Mac Studio hardware to orchestrate "swarms" of on-device OpenMed expert agents without relying on cloud APIs.