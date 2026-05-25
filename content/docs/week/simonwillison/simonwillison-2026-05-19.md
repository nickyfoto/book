---
title: 2026-05-19
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "gemini", "local-llms", "coding-agents", "llm-pricing"]
---

# Simon Willison — 2026-05-19

## Highlight
Simon's annotated PyCon US 2026 lightning talk provides a sharp, insightful retrospective on the "November 2025 inflection point," identifying exactly when coding agents became reliable daily drivers and laptop-grade local models started wildly overperforming. It is a quintessential Willison post that perfectly frames the recent tectonic shifts in AI developer tooling.

## Posts

**[The last six months in LLMs in five minutes]** · [Source](https://simonwillison.net/2026/May/19/5-minute-llms/#atom-everything)
Simon shares his annotated slides from a PyCon US 2026 lightning talk summarizing the past six months of LLM developments. He zeroes in on two main themes: coding agents crossing the threshold from "often-work" to "mostly-work" driven by Reinforcement Learning from Verifiable Rewards, and the astonishing capability of local models like the 20.9GB Qwen3.6-35B-A3B and Gemma 4. The post also tracks the recent surge of "Claws" (personal AI assistants running locally on Mac Minis) and features his ongoing "pelican riding a bicycle" SVG visual benchmark to compare models.

**[Gemini 3.5 Flash: more expensive, but Google plan to use it for everything]** · [Source](https://simonwillison.net/2026/May/19/gemini-35-flash/#atom-everything)
Google announced Gemini 3.5 Flash at I/O, integrating it broadly across their ecosystem from Search to Android Studio. Simon notes a broader industry trend hidden in the developer docs: the model is accompanied by a significant price bump, costing 3x more than 3 Flash Preview. This hike aligns with recent moves by OpenAI and Anthropic, signaling that major AI labs are actively probing the price tolerance of their API customers. The model boasts a 1,048,576 token context window, though the API notably omits computer use capabilities.

**[llm-gemini 0.32]** · [Source](https://simonwillison.net/2026/May/19/llm-gemini-2/#atom-everything)
A swift release note announcing the update of his `llm-gemini` CLI plugin to version 0.32. This update immediately adds support for the new `gemini-3.5-flash` model, allowing developers to start querying it right from their terminals.

## Project Pulse
Today showcases Simon's signature tight feedback loop between frontier model exploration and open-source tool building: analyzing the brand new Gemini 3.5 Flash announcement, benchmarking it with his custom SVG test, and shipping an update to his `llm` CLI ecosystem to support it, all on the exact same day.