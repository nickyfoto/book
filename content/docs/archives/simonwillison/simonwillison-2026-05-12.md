---
title: 2026-05-12
weight: 8
categories: ["Blogs", "AI", "Tech"]
tags: ["llm", "datasette", "artificial intelligence", "debugging", "marketing"]
---

# Simon Willison — 2026-05-12

## Highlight
The standout update today is the alpha release of `llm 0.32a2`, which adapts to OpenAI's new endpoints to expose interleaved reasoning across tool calls for GPT-5 class models. It's a great example of Simon quickly evolving his CLI tools to make the latest LLM reasoning capabilities highly visible and practical for developers.

## Posts

**llm 0.32a2** · [Source](https://simonwillison.net/2026/May/12/llm/#atom-everything)
Simon dropped a crucial update to his `llm` CLI to support the latest reasoning-capable OpenAI models (like the GPT-5 class), which now use a different endpoint rather than `/v1/chat/completions`. This shift enables interleaved reasoning across tool calls, and the CLI now natively displays these summarized reasoning tokens in a distinct color directly in the terminal. For those who prefer a cleaner output, you can easily suppress the reasoning steps using the new `-R` or `--hide-reasoning` flags.

**datasette 1.0a29** · [Source](https://simonwillison.net/2026/May/12/datasette/#atom-everything)
Another alpha release pushing towards Datasette 1.0 brings minor UI polish for empty tables and a UI fix for Mobile Safari. But the real highlight of the release notes is Simon's debugging journey: he encountered a "gnarly" segfault caused by a test teardown race condition where in-flight queries hit closing connections. To squash it, he leaned on AI assistance, using the Codex CLI with `GPT-5.5 xhigh` to generate a minimal Dockerfile that successfully isolated and reproduced the bug.

**Quoting Mitchell Hashimoto** · [Source](https://simonwillison.net/2026/May/12/mitchell-hashimoto/#atom-everything)
Simon highlights a sharp, cynical observation from Mitchell Hashimoto regarding enterprise tech sales, shared in the context of the Redis homepage design. Hashimoto argues that most Technical Decision Makers are primarily motivated by not getting fired, leading them to buy "defensible," buzzword-heavy tools—like a "Context Engine for AI Apps"—simply because analysts like Gartner or McKinsey have validated the trend. 

**Quoting Mo Bitar** · [Source](https://simonwillison.net/2026/May/12/mo-bitar/#atom-everything)
A hilarious, satirical link post featuring a quote from Mo Bitar's "Unethical Guide to Surviving AI Layoffs" on TikTok. The joke strategy involves confusing your CEO by inventing fake AI concepts like "Ralph Loops," demanding $18,000 in API credits, and publicly asserting in Slack that you've successfully "automated at Gary". 

## Project Pulse
It’s a double-release day for Simon's core open-source projects, `llm` and `datasette`. The updates highlight a dual trend in his current workflow: rapidly updating his tools to expose new frontier model capabilities (like GPT-5 reasoning tokens), while concurrently using those same advanced models (GPT-5.5) as active collaborators to debug complex, low-level segfaults in his test suite.