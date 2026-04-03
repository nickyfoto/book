---
title: Simon Willison
weight: 16
---

# Simon Willison — 2026-04-02

## Highlight
Simon's detailed highlights from his conversation about agentic engineering on Lenny's Podcast stands out today. It offers a comprehensive look at how the "November inflection point" of highly competent models is fundamentally shifting the software engineering landscape.

## Posts

**[Highlights from my conversation about agentic engineering on Lenny’s Podcast](https://simonwillison.net/2026/Apr/2/lennys-podcast/#atom-everything)**
Simon breaks down his appearance on Lenny Rachitsky's podcast, sharing his notes on how models like GPT 5.1 and Claude Opus 4.5 brought us past a critical inflection point. He discusses "dark factories" where humans neither type nor read code, the mental exhaustion of managing parallel coding agents, and the massive popularity of the "digital pet" OpenClaw despite its security hurdles. He also notes that prototyping is now incredibly cheap, shifting the primary bottleneck for developers directly to usability testing and validation.

**[Gemma 4: Byte for byte, the most capable open models](https://simonwillison.net/2026/Apr/2/gemma-4/#atom-everything)**
DeepMind released four new vision-capable, Apache 2.0 licensed Gemma 4 models ranging from 2B to a 26B-A4B Mixture-of-Experts. Simon tested the GGUFs in LM Studio, finding that while the 31B model failed, the 26B-A4B generated the best local "pelican riding a bicycle" he has seen to date. He also highlights the models' impressive intelligence-per-parameter, achieved by using Per-Layer Embeddings to maximize on-device efficiency.

**[llm-gemini 0.30](https://simonwillison.net/2026/Apr/2/llm-gemini/#atom-everything)**
Simon shipped a swift update to his LLM CLI plugin to support the newly released Google models. Version 0.30 brings `gemini-3.1-flash-lite-preview`, `gemma-4-26b-a4b-it`, and `gemma-4-31b-it` into the tool. This rapid integration allowed him to run his pelican benchmark directly against the 31B model using the Google AI Studio API.

**[March 2026 sponsors-only newsletter](https://simonwillison.net/2026/Apr/2/march-newsletter/#atom-everything)**
Simon released his March 2026 sponsors-only monthly newsletter. This month's edition covers topics like agentic engineering patterns, running MoE models on a Mac, vibe porting, and recent supply chain attacks affecting PyPI and NPM.

## Project Pulse
Today's posts reflect a tight feedback loop between experimenting with new local LLMs and immediately updating the open-source tooling ecosystem to support them. The release of Gemma 4 triggered rapid local evaluation, a quick bump to the `llm-gemini` CLI plugin, and broader reflection on how these increasingly capable tools feed into the "agentic engineering" patterns Simon continues to document.