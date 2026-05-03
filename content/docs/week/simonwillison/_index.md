---
title: Simon Willison
weight: 16
bookCollapseSection: true
categories: ["Blogs", "AI", "Tech"]
tags: ["prompt-engineering [1, 2]", "system-prompts [2, 3]", "claude [2, 3]", "coding-agents [1]", "generative-ai [1-3]", "apis", "ai", "saas", "salesforce", "speech-to-text", "microsoft", "openai", "translation", "mlx", "ai [1-3]", "python [2]", "llms [1, 3]", "vibe-coding [2]", "prompt-engineering [3]", "python", "llm", "generative-ai", "projects", "ai-assisted-programming", "open-source", "zig", "llms", "coding-agents", "inaturalist", "claude-code", "tools"]
---

# Simon Willison — Week of 2026-04-18 to 2026-05-01

## Highlight of the Week
The alpha release of `llm 0.32a0` marks a foundational architectural pivot for Simon's ecosystem of CLI tools. By moving away from a simple text-in/text-out abstraction to one that natively models complex message sequences and typed streams, the library is now future-proofed to handle the realities of modern frontier models. This opens the door for seamless integration of server-side tool calls, multi-modal inputs, and reasoning tokens.

## Key Posts
**[Changes in the system prompt between Claude Opus 4.6 and 4.7]** · [Source](url)
Simon analyzed the hidden diffs in Anthropic's Claude Opus 4.7 system prompt, uncovering fascinating tweaks to its safety wrappers and instructions designed to make the model less verbose. He also identified a new native knowledge cutoff of January 2026 and extracted 23 hidden UI tools by directly prompting the model about its own capabilities.

**[Headless everything for personal AI]** · [Source](url)
A compelling look into the "Second Wave of the API-first Economy," driven by AI agents that require programmable access rather than awkward GUI interfaces. Simon examines the implications for per-seat SaaS pricing as industry giants like Salesforce pivot to "headless" models to accommodate non-human agents operating via APIs.

**[Introducing talkie: a 13B vintage language model from 1930]** · [Source](url)
This post explores a fascinating "vegan model" trained entirely on 260 billion tokens of pre-1931 public domain text. It raises excellent questions about data purity and the difficulty of preventing anachronistic contamination when fine-tuning historically constrained models using modern AI tools like Claude Sonnet and Opus.

**[The Zig project’s rationale for their firm anti-AI contribution policy]** · [Source](url)
An insightful breakdown of the cultural clash between AI-generated code and open-source sustainability. Simon highlights Loris Cro's "contributor poker" concept, arguing that maintainer review time spent on LLM-assisted code fails to cultivate the human trust and mentorship necessary for a project's long-term survival. 

**[iNaturalist Sightings]** · [Source](url)
A brilliant showcase of Simon's rapid-prototyping architecture, built entirely on his phone while camping using Claude Code for web. He chained together a Python CLI, Git scraping, and an AI-generated static frontend to create a highly functional, CORS-friendly personal utility that clusters his wildlife observations.

## Project Updates
Simon's major release this week was the `llm 0.32a0` alpha, which refactors the library to process inputs as a sequence of conversational messages and outputs as a stream of typed message parts. Developers can utilize new `llm.user()` and `llm.assistant()` builder functions to cleanly feed in conversation history, while CLI users gain a `-R/--no-reasoning` flag to suppress thinking tokens. He quickly followed up with `llm 0.32a1` to patch a bug that was preventing tool-calling conversations from correctly reinflating from the SQLite storage layer.

## Themes
The overarching theme of the week is the friction and transformation brought by "agentic engineering". Simon continuously explored how AI agents are changing the mechanics of software—ranging from headless APIs and automated `Claude Code` deployment loops to the cultural pushback from open-source communities navigating the "digital smell" of AI-assisted code. Additionally, audio and speech processing was a strong recurring interest, highlighted by local VibeVoice diarization experiments on Apple Silicon and observations of Google Meet's alpha real-time translations.