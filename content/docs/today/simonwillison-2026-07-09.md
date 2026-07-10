---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "openai", "meta", "llm-tool-use", "generative-ai"]
---

# Simon Willison — 2026-07-09

## Highlight
The standout update today is Simon's deep dive into the newly released GPT-5.6 family, where he unpacks OpenAI's new API features like programmatic tool calling and analyzes their latest benchmark rivalry with Anthropic. It is a highly substantive read for developers trying to track the rapidly evolving landscape of agentic workflows and advanced API-level orchestration.

## Posts

**[The new GPT-5.6 family: Luna, Terra, Sol](https://simonwillison.net/2026/Jul/9/gpt-5-6/#atom-everything)** · Source
OpenAI launched its GPT-5.6 flagship models in three sizes (Luna, Terra, Sol) alongside claims of superior long-running agentic performance compared to Claude Fable 5. Simon highlights the fascinating benchmark drama, noting that while Fable 5 beat GPT-5.6 Sol on SWE-Bench Pro, OpenAI recently published an article claiming that ~30% of that specific benchmark is broken. For developers, the most valuable part of the post is Simon's exploration of new API capabilities, including a built-in multi-agent pattern, explicit prompt cache breakpoints, and "Programmatic Tool Calling" that lets models write JavaScript to orchestrate sub-tools. He also generated 18 different pelican images across the models and reasoning levels to test exact token costs.

**[Introducing Muse Spark 1.1](https://simonwillison.net/2026/Jul/9/muse-spark-1-1/#atom-everything)** · Source
Meta has released Muse Spark 1.1, which is notably the first Spark model to offer an official API and features major improvements for agentic tool calling and computer use. Simon highlights a fun detail from the evaluation report regarding "Attractor States in Self-Conversation," where two instances of the model talking to each other start generating existentially amusing statements. After getting preview access, Simon immediately built and released a new plugin to interact with the model via his own CLI utilities.

**[llm-meta-ai 0.1](https://simonwillison.net/2026/Jul/9/llm-meta-ai/#atom-everything)** · Source
Simon released `llm-meta-ai 0.1`, a brand-new plugin specifically built for his LLM ecosystem. This release enables developers to run prompts against Meta's new `muse-spark-1.1` model directly from their command line or by using the Python library. 

**[llm 0.31.1](https://simonwillison.net/2026/Jul/9/llm/#atom-everything)** · Source
This patch release for the core LLM utility fixes a JSON error bug affecting OpenAI Chat Completion endpoints. Simon actually discovered this edge-case issue—which triggered when a tool call was made with empty arguments—while he was testing his brand new `llm-meta-ai` plugin.

## Project Pulse
Simon is maintaining an incredibly tight development loop with the broader AI ecosystem, shipping both a core `llm` bug fix patch and a brand-new `llm-meta-ai` plugin on the exact same day that Meta launched their API.