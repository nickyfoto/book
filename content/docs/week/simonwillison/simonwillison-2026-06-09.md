---
title: 2026-06-09
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["anthropic", "generative-ai", "llm-pricing", "llms"]
---

# Simon Willison — 2026-06-09

## Highlight
Anthropic dropped Claude Fable 5 today, and Simon's deep dive into its capabilities is a must-read. He highlights how this huge, albeit slow, new model can serve as an exceptionally capable coding partner, successfully tackling complex WASM Python environments and driving major architectural changes in his open-source LLM library.

## Posts

**[Initial impressions of Claude Fable 5](https://simonwillison.net/2026/Jun/9/claude-fable-5/#atom-everything)**
Anthropic's new Claude Fable 5 is slow, expensive, and remarkably capable, boasting a 1 million token context window, a 128,000 maximum output token limit, and massive internal knowledge. Simon tested the model's depth by having it catalog his open-source work, noting that such extensive factual recall is a strong proxy for a massive parameter count. He then unleashed it on two complex coding tasks: upgrading `micropython-wasm` to run full CPython in WebAssembly, and adding a human-in-the-loop pause/resume mechanism to Datasette Agent. Fable's performance was so strong it essentially authored the entire LLM 0.32a3 release, rewriting initial hacks into well-designed API features. 

**[Setting a custom price for a model in AgentsView](https://simonwillison.net/2026/Jun/9/agentsview-custom-model-price/#atom-everything)**
A quick TIL on patching Wes McKinney's AgentsView to track local token usage and costs for new models. Since Fable 5 wasn't in the tool's pricing database yet, Simon used Fable itself to reverse-engineer AgentsView and add custom pricing to help track his $110.42 daily token spend.

**[Quoting Andrej Karpathy](https://simonwillison.net/2026/Jun/9/andrej-karpathy/#atom-everything)**
Simon highlights a quote from Andrej Karpathy reflecting on the release of Claude Fable 5 and the modern AI coding experience. As working software becomes increasingly available "on a tap," Jevon's paradox kicks in, drastically increasing the developer's own demand for bespoke, single-use apps and custom internal tooling.

## Project Pulse
Today's updates perfectly capture the accelerating pace of AI-assisted development. We're seeing Simon actively leverage a massive new frontier model to immediately iterate and ship advanced tool-calling architectures—like pausing mid-execution for human approval—straight back into his own LLM CLI ecosystem.