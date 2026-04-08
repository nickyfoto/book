---
title: 2026-04-06
weight: 1
categories: ["Social Media", "Tech"]
tags: ["artificial intelligence", "ai agents", "large language models", "hardware", "open source"]
---

{{< sources "company-twitter" >}}

# Company@X — 2026-04-06

## Signal of the Day
Anthropic revealed its run-rate revenue has skyrocketed to $30 billion, up from $9 billion at the end of 2025, signaling extraordinary enterprise demand for Claude. To support this rapid scaling, the company signed an agreement with Google and Broadcom to secure multiple gigawatts of next-generation TPU capacity starting in 2027. 

## Key Announcements

**AWS** · [Source](http://twitter.macworks.dev/awscloud/status/2041247262341255227#m)
AWS introduced Amazon Quick, a cross-application AI layer designed to connect apps, understand context, and execute actions across a user's workflow. The product signals Amazon's push into persistent, enterprise-wide AI agents that turn queries into automated task completion rather than just generating text.

**OpenClaw** · [Source](http://twitter.macworks.dev/openclaw/status/2040998570317197607#m)
Open-source agent harness OpenClaw shipped version 2026.4.5, rolling out built-in video and music generation and an experimental "/dreaming" system for long-term memory consolidation. The project also announced that Anthropic has effectively cut them off by blocking standard Claude subscriptions from covering third-party harnesses. As a result, developers are being pushed to rely on API keys or pivot to alternative models like OpenAI's updated GPT-5.4, Qwen, or MiniMax.

**NVIDIA** · [Source](http://twitter.macworks.dev/outsource_/status/2040059394126205233#m)
NVIDIA launched a quantized version of the multimodal Gemma 4 31B model on Hugging Face utilizing NVFP4 compression. The Blackwell-optimized compression reduces the model's weight footprint by 4x while maintaining 99.7% of its baseline accuracy on GPQA. This drastically changes the local compute economics, allowing a frontier-class, 256K-context model to run everyday tasks efficiently on 24GB consumer GPUs.

**Cursor** · [Source](http://twitter.macworks.dev/cursor_ai/status/2041235628810232243#m)
Cursor introduced "warp decode," completely rebuilding how Mixture-of-Experts (MoE) models generate tokens on Blackwell GPUs. The architectural improvement yields a 1.84x faster inference speed and higher output accuracy. Cursor noted this directly accelerates their internal training loops for the Composer model, enabling them to ship improved versions far more frequently.

**Google Cloud** · [Source](http://twitter.macworks.dev/GoogleCloudTech/status/2041169805609214359#m)
Google introduced Veo 3.1 Lite via the Gemini API and Google AI Studio. The model supports both text-to-video and image-to-video generation at less than half the cost of Veo 3.1 Fast, demonstrating an aggressive pricing strategy to capture the high-volume developer market.

## Also Noted
- **Google Developers** ([Source](http://twitter.macworks.dev/GoogleCloudTech/status/2041169807463063571#m)): Released ADK for Go 1.0, an agent development kit featuring native OpenTelemetry integration, a plugin system, and human-in-the-loop security protocols.
- **OpenAI** ([Source](http://twitter.macworks.dev/OpenAI/status/2041202511647019251#m)): Launched the OpenAI Safety Fellowship to fund and support independent research on AI safety and alignment.
- **Y Combinator** ([Source](http://twitter.macworks.dev/ycombinator/status/2041184159960633357#m)): Welcomed Harshita Arora, former co-founder of fleet infrastructure company AtoB, as the firm's newest General Partner.
- **Bud** ([Source](http://twitter.macworks.dev/budapp/status/2041172034508701865#m)): The startup formerly known as Orchids rebranded to Bud and revealed it has crossed seven figures in ARR with its autonomous app-building agent.
- **Google AI Studio** ([Source](http://twitter.macworks.dev/GoogleCloudTech/status/2041169809522536815#m)): Shipped updates to Lyria 3 featuring a "composer mode" that lets users construct prompts to describe, preview, and export music generation to code.