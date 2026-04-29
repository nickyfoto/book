---
title: 2026-04-16
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["claude", "local-llms", "vibe-coding", "datasette"]
---

# Simon Willison — 2026-04-16

## Highlight
The most fascinating takeaway today is a surprising win for local AI: a 21GB quantized Qwen3.6 model running on a laptop beat Anthropic's brand-new Claude Opus 4.7 at Simon's "pelican riding a bicycle" SVG generation benchmark. This result leads Simon to conclude that his joke benchmark's long-standing correlation with a model's general utility has finally broken down.

## Posts

**Qwen3.6-35B-A3B on my laptop drew me a better pelican than Claude Opus 4.7** · [Source](https://simonwillison.net/2026/Apr/16/qwen-beats-opus/#atom-everything)
Simon put the day's two major model releases—Alibaba's Qwen3.6-35B-A3B and Anthropic's Claude Opus 4.7—through his infamous "pelican riding a bicycle" SVG generation benchmark. Running locally on a MacBook Pro via LM Studio, the quantized Qwen model produced a better bicycle frame than Opus, and even won a "secret backup test" generating a flamingo riding a unicycle. Simon admits this breaks the historical correlation between his SVG benchmark and a model's general usefulness, noting he highly doubts the 21GB local model is actually more capable than Anthropic's proprietary flagship.

**datasette.io news preview** · [Source](https://simonwillison.net/2026/Apr/16/datasette-io-preview/#atom-everything)
To reduce the friction of manually editing the tricky `news.yaml` file that powers the datasette.io news section, Simon turned to "vibe-coding". He leveraged Claude's ability to clone GitHub repositories and analyze code contexts to build a custom preview UI via Claude Artifacts. The resulting tool allows him to paste his YAML to see how it renders on the homepage while automatically highlighting any markdown or YAML syntax errors.

**llm-anthropic 0.25** · [Source](https://simonwillison.net/2026/Apr/16/llm-anthropic/#atom-everything)
This release updates Simon's Anthropic plugin for the LLM CLI to support the newly released `claude-opus-4.7` model. Key updates include support for the `thinking_effort: xhigh` parameter, new `thinking_display` and `thinking_adaptive` boolean options, and bumping the default `max_tokens` up to the maximum limit allowed for each model.

## Project Pulse
Today's updates revolve heavily around the newly dropped Claude Opus 4.7, demonstrating Simon's immediate reflex to both benchmark its creative capabilities and ship tooling support for it via his LLM CLI. We also see his continued reliance on Claude Artifacts to quickly "vibe-code" small, sharp tools that reduce friction in his own project maintenance workflows.