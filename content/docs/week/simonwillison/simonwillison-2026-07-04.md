---
title: 2026-07-04
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "llm-tool-use", "coding-agents", "javascript", "ascii-art"]
---

# Simon Willison — 2026-07-04

## Highlight
The standout post today touches on a fascinating and slightly troubling trend in LLM tool use: state-of-the-art models like Opus 4.8 might actually be *worse* at interacting with custom developer tools because they are over-optimized for their proprietary, first-party environments. This highlights an emerging friction point for developers building third-party AI agents and coding harnesses.

## Posts

**[Better Models: Worse Tools](https://simonwillison.net/2026/Jul/4/better-models-worse-tools/#atom-everything)** · [Source](https://lucumr.pocoo.org/2026/7/4/better-models-worse-tools/)
Armin Ronacher discovered that newer Anthropic models, specifically Opus 4.8 and Sonnet 5, are failing to correctly use custom tool schemas in his Pi coding harness by hallucinating extra fields, a regression not seen in older models. He theorizes this happens because these newer models are heavily trained via Reinforcement Learning to perfectly use the specific edit tools integrated directly into Claude Code. Simon points out that OpenAI models are similarly optimized on their own `apply_patch` mechanisms, raising the question of whether open-source and third-party harnesses will now need to maintain entirely separate edit tool implementations optimized for each specific model family.

**[Building a World Map with only 500 bytes](https://simonwillison.net/2026/Jul/4/building-a-world-map-with-only-500-bytes/#atom-everything)** · [Source](https://www.experimentlog.com/blog/building-a-world-map-with-only-500-bytes)
Simon highlights a fun web trick from Iwo Kadziela, who used Codex to help generate a credible ASCII world map in merely 445 bytes. The neatest part of this hack relies on using deflate compression combined with a clever JavaScript snippet that executes `fetch()` directly on data URIs.