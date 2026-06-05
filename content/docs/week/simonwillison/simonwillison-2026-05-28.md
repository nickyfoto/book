---
title: 2026-05-28
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["anthropic", "claude", "llms", "generative-ai", "ai"]
---

# Simon Willison — 2026-05-28

## Highlight
Anthropic's release of Claude Opus 4.8 brings welcome improvements to model honesty and prompt caching, which Simon immediately put to the test using his newly updated `llm-anthropic` CLI plugin to generate SVGs of pelicans riding bicycles.

## Posts

**[Claude Opus 4.8: "a modest but tangible improvement"](https://simonwillison.net/2026/May/28/claude-opus-4-8/#atom-everything)** 
Simon highlights Anthropic's refreshing honesty in marketing this release as an incremental upgrade, noting the model's decreased hallucination rate achieved by simply abstaining when uncertain. Key technical changes include a reduced prompt cache minimum of 1,024 tokens and the ability to insert system messages mid-conversation, which preserves cache hits and reduces input costs in agentic loops. He tested the model by generating SVG pelicans riding bicycles at different thinking levels via his LLM CLI, using Opus 4.8 to build the rendering HTML tool and relying on GPT-5.5 as a "code security blanket" to patch XSS vulnerabilities.

**[llm-anthropic 0.25.1](https://simonwillison.net/2026/May/28/llm-anthropic/#atom-everything)** 
A quick release for Simon's `llm-anthropic` plugin to support the newly announced Claude Opus 4.8 model. This update adds a `-o fast 1` option for organizations with fast mode enabled and fixes a constraint by setting the default `max_tokens` to the model's actual maximum output rather than an arbitrary 8,192 limit.

## Project Pulse
Simon continues to maintain his LLM CLI ecosystem in lockstep with major frontier model releases, immediately shipping an `llm-anthropic` update to start kicking the tires on Opus 4.8's new capabilities and confirming his library's recent redesign can gracefully handle Anthropic's new mid-conversation system prompt steering.