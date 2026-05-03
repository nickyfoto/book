---
title: 2026-04-28
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["ai [1-3]", "python [2]", "llms [1, 3]", "vibe-coding [2]", "prompt-engineering [3]"]
---

# Simon Willison — 2026-04-28

## Highlight
The most fascinating read today is the breakdown of `talkie`, a 13B vintage language model trained purely on pre-1931 text. It raises excellent questions about training data purity ("vegan models") and the difficulty of preventing anachronistic contamination when fine-tuning with modern AI.

## Posts

**[Introducing talkie: a 13B vintage language model from 1930]** · [Source](https://simonwillison.net/2026/Apr/28/talkie/#atom-everything)
Nick Levine, David Duvenaud, and Alec Radford have released an Apache 2.0-licensed 13B model trained entirely on 260 billion tokens of pre-1931, out-of-copyright text. Simon dives into the concept of "vegan models"—LLMs trained solely on licensed or public domain data—noting that while `talkie`'s base model qualifies, its chat-finetuned version relies on Claude Sonnet and Opus for preference optimization and synthetic chats. This creates an anachronistic contamination problem, though the team ultimately hopes to use their vintage models as judges to bootstrap an era-appropriate post-training pipeline. When tested with a classic prompt for an SVG of a pelican riding a bicycle, the 1930 model generated a highly amusing, historically framed textual description instead.

**[What’s new in pip 26.1 - lockfiles and dependency cooldowns!]** · [Source](https://simonwillison.net/2026/Apr/28/pip-261/#atom-everything)
A major update to Python's default package installer introduces some highly anticipated features: native `pylock.toml` lockfiles and dependency cooldowns. Simon demonstrates using the new `--uploaded-prior-to P4D` flag to request a version of his own `LLM` CLI package that is at least 4 days old—a great practical defense against recent supply-chain attacks. This release also officially drops support for Python 3.9.

**[Quoting Matthew Yglesias]** · [Source](https://simonwillison.net/2026/Apr/28/matthew-yglesias/#atom-everything)
A short quote post capturing Matthew Yglesias's take on the "vibecoding" trend. Yglesias pushes back against the DIY agentic engineering movement, concluding that he would rather pay professionally managed companies that use AI to build better software products than actually vibecode himself.

**[Quoting OpenAI Codex base_instructions]** · [Source](https://simonwillison.net/2026/Apr/28/openai-codex/#atom-everything)
Simon highlights a highly specific and amusing system prompt extraction from GPT-5.5's OpenAI Codex. The base instructions explicitly forbid the model from talking about "goblins, gremlins, raccoons, trolls, ogres, pigeons, or other animals or creatures" unless it is absolutely relevant to the user's query. 

## Project Pulse
Today's posts reflect a great cross-section of the AI and Python ecosystems, balancing the hands-on practicality of `pip` supply chain security with deeper explorations into AI training boundaries, "vegan" historical datasets, and the hidden quirks of system prompts.