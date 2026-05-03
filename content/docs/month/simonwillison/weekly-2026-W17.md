---
title: Week 17 Summary
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite", "sql", "tools", "webassembly", "mlx", "gemma", "speech-to-text", "uv", "llms", "rust", "ai-assisted-programming", "cybersecurity", "ai", "datasette", "open-source", "gemini", "zig", "apple", "ai-ethics", "claude", "local-llms", "vibe-coding", "python", "pycon", "artificial intelligence"]
---

# Simon Willison — Week of 2026-04-11 to 2026-04-17

## Highlight of the Week
This week's most striking revelation came from Simon's infamous "pelican riding a bicycle" SVG generation benchmark, where a 21GB quantized local model (Qwen3.6-35B-A3B) unexpectedly outperformed Anthropic's brand-new Claude Opus 4.7 flagship. Running locally on a MacBook Pro via LM Studio, Qwen generated a better bicycle frame and even won a secret unicycle backup test, leading Simon to conclude that his joke benchmark's long-standing correlation with general model utility has finally broken down.

## Key Posts
**[SQLite 3.53.0 and Query Result Formatter Demo]** · [Source](#)
Simon highlighted the release of SQLite 3.53.0, which brings highly anticipated native `ALTER TABLE` constraint improvements for adding and removing `NOT NULL` and `CHECK` constraints. To experiment with the new Query Results Formatter library, he used Claude Code on his phone to compile the C library into WebAssembly, immediately dropping a working UI playground for developers to test the rendering options directly in the browser.

**[Cybersecurity Looks Like Proof of Work Now]** · [Source](#)
Reacting to the UK AI Safety Institute's model evaluations, Simon explored the paradigm shift of treating vulnerability discovery as an economic "proof of work" equation where spending more tokens yields better system hardening. He argued that this dynamic actually increases the long-term value of open-source software, as the immense token costs required for AI security reviews can be distributed among all of a project's users.

**[Gemini 3.1 Flash TTS]** · [Source](#)
When Google released the audio-only Gemini 3.1 Flash TTS API, Simon noted its highly unusual prompting guide. True to his rapid-prototyping ethos, he immediately used Gemini 3.1 Pro to "vibe code" a custom UI to stress-test the model by prompting for charismatic Newcastle and Exeter regional accents.

**[Join us at PyCon US 2026 in Long Beach]** · [Source](#)
Highlighting the deep integration of AI into the core Python community, Simon shared the newly added AI and Security tracks for PyCon US 2026. He used Claude Code to scrape and format the schedule, pointing out highly relevant upcoming sessions on local LLM quantization, browser-based inference, and async agent patterns.

## Project Updates
The Datasette ecosystem saw a major architectural shift with the `1.0a27` alpha release, which replaces legacy Django-style CSRF form tokens with modern `Sec-Fetch-Site` browser headers. This core update cascaded into necessary patches for his local tooling, including `datasette-export-database 0.3a1`, and was quickly followed by `1.0a28` to fix accidental breakages and prevent file descriptor exhaustion using a new `datasette.close()` method. Additionally, Simon released `llm-anthropic 0.25` to support the new `claude-opus-4.7` model, adding new boolean options and maximizing default token limits.

## Themes
A dominant theme this week is the frictionless acceleration of "vibe-coding" small, sharp tools using AI sidekicks like Claude Code and Claude Artifacts. Simon demonstrated using these tools to rapidly compile WebAssembly from C, prototype Rust CLIs, write Datasette bug fixes, and generate YAML preview interfaces. Another clear thread is the ongoing convergence of high-powered local and cloud AI, as he fluidly shifted between testing models like Gemma 4 and Qwen3.6 natively on Apple Silicon to leveraging cutting-edge APIs from Anthropic and Google.