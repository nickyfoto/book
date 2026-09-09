---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "open source", "developer tools", "python"]
---

# Simon Willison — 2026-09-08

## Highlight
The standout post today is a detailed exploration of **OpenAI's agentic resolution of the Navier–Stokes Millennium Prize Problem** and the surrounding ethical controversy over research priority and user data usage. It raises crucial questions about whether **rumors alone can trigger millions in compute to scoop researchers**, as well as how AI labs leverage user session data to train future models.

## Posts

**[On the Navier–Stokes Millennium Prize Problem](https://simonwillison.net/2026/Sep/8/on-navier-stokes/)** · [OpenAI](https://openai.com/index/navier-stokes-solution/)
OpenAI announced that an unreleased model resolved the **Navier–Stokes Millennium Prize Problem** using **4.9 million messages and 300 billion output tokens** (~\$15M public API equivalent) verified via Lean. However, the milestone triggered allegations from NYU professor Tristan Buckmaster and Anthropic researcher Levent Alpöge, who had spent a year working on the proof using OpenAI Codex before OpenAI launched a massive agent run after hearing rumors. Simon highlights the troubling precedent of **"rumour as an exploit,"** comparing it to security vulnerability hunting where a mere whisper can prompt massive compute deployment to scoop human researchers. He also reiterates ongoing privacy concerns about how AI labs utilize user session data to train models that might later replicate user discoveries.

**[Introducing ChatGPT Images 2.5](https://simonwillison.net/2026/Sep/8/introducing-chatgpt-images-25/)** · [OpenAI](https://openai.com/index/introducing-chatgpt-images-2-5/)
OpenAI released ChatGPT Images 2.5, introducing two new API models (**`gpt-image-2.5-sunburst`** for precise editing and **`gpt-image-2.5-flare`** for fast everyday generation) with improved multi-turn instruction following and subject preservation. Simon quickly updated his Python CLI tool `openai_image.py` to support multi-image reference inputs via `uv`. He tested the new capabilities by feeding an existing chart image into `gpt-image-2.5-sunburst` and prompting it to add a thoughtful raccoon scientist studying the chart.

**[llm 0.34](https://simonwillison.net/2026/Sep/2/llm/)** · [GitHub Release](https://github.com/simonw/llm/releases/tag/0.34)
The main release of Simon's core `llm` CLI tool adds **response duration tracking in milliseconds** and human-readable format to `llm logs --usage`, alongside a new `duration_ms` field in `llm logs --short`. It also incorporates community bug fixes and delivers a significant performance boost to log loading thanks to contributor waveplate. This release gives developers better visibility into model latency when running local or remote LLM workflows from the terminal.

**[llm-anthropic 0.28](https://simonwillison.net/2026/Sep/2/llm-anthropic/)** · [GitHub Release](https://github.com/simonw/llm-anthropic/releases/tag/0.28)
This update to the `llm-anthropic` plugin adds support for **Claude Fable 5.1** and enables **reasoning traces by default** for models that support them. It also introduces a dedicated `llm_anthropic.ClaudeRefusal` exception to gracefully handle API refusal responses. It ensures seamless integration when experimenting with Anthropic's latest reasoning models through the `llm` CLI.

**[llm-openrouter 0.7.1](https://simonwillison.net/2026/Sep/2/llm-openrouter/)** · [GitHub Release](https://github.com/simonw/llm-openrouter/releases/tag/0.7.1)
A maintenance patch for the `llm-openrouter` plugin that resolves performance slowdowns when loading OpenRouter models. Contributed by GitHub user waveplate, this fix complements the performance optimizations landed in the core `llm` 0.34 release.

## Project Pulse
Today's updates highlight **rapid iteration across Simon's open-source ecosystem**, combining performance tuning and new reasoning model support in the core `llm` CLI family alongside immediate script updates (`openai_image.py`) for newly dropped image APIs.

💡 If you'd like, I can help you draft a quick summary table comparing how Simon's `llm` CLI plugins handle model-specific features like reasoning traces and usage logs across providers.