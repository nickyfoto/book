---
title: 2026-08-29
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["open-weight models", "reasoning models", "tencent", "large language models"]
---

# Simon Willison — 2026-08-29

## Highlight
Simon dives into Tencent's new **Hy4 Preview**, a massive 770B parameter open-weight reasoning model featuring a 1M token context window. By inspecting the model's chat template and running his classic pelican-on-a-bicycle benchmark, he highlights how frontier open-weight models optimize internal reasoning traces for token efficiency.

## Posts

**[Introducing Hy4 Preview](https://simonwillison.net/2026/Aug/29/hy4/)** · [Source](https://hy.tencent.ai/research/hy4-preview)
Tencent released **Hy4 Preview**, an open-weight, text-only model boasting 770B total parameters (49B active) and a 1M token context window, representing a significant size jump over July's 295B Hy3. Inspecting the model's Hugging Face chat template revealed that it supports two explicit reasoning effort settings: a default "high" mode and a "no_think" option that turns reasoning off entirely. Running his benchmark prompt to generate an SVG of a pelican riding a bicycle via OpenRouter, Simon observed the model debating visual touches like helmets and sunglasses in its hidden chain-of-thought. His key takeaway centers on the model's reasoning trace style: it relies on slightly truncated English, showing how models shed strict grammar inside hidden thoughts to maximize token efficiency.

## Project Pulse
Simon continues refining his hands-on playbook for newly dropped open-weight models, pairing direct inspection of Hugging Face chat templates with his standard pelican SVG generation benchmark to evaluate reasoning behavior.

***

💡 Would you like to explore how Hy4's architecture and active parameter ratio compare to previous open-weight releases in your archive?