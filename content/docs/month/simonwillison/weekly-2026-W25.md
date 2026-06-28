---
title: Week 25 Summary
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["ai", "openai", "webrtc", "audio", "tools", "pyodide", "webassembly", "anthropic", "llms", "python", "careers", "generative-ai", "software engineering", "datasette", "sqlite", "jailbreaking", "claude-code", "local-llms", "large language models", "open source", "web components", "ai-assisted programming", "sandboxing", "javascript", "content-security-policy", "ai-assisted-programming"]
---

# Simon Willison — Week of 2026-06-12 to 2026-06-18

## Highlight of the Week
The most impactful release this week is the launch of `datasette-apps`, a major new plugin that allows developers to run self-contained, sandboxed HTML and JavaScript applications directly against a persistent Datasette backend. It brilliantly merges Simon's ongoing experiments with AI-generated "vibe-coded" single-file tools and robust security architectures, pushing Datasette from a read-only publishing platform into a comprehensive ecosystem for building interfaces over data.

## Key Posts
**Datasette Apps: Host custom HTML applications inside Datasette**
Simon details the security architecture behind his new plugin, which uses an `<iframe sandbox="allow-scripts">` tag combined with immutable Content-Security-Policy (CSP) headers to safely execute untrusted JavaScript code. Fascinatingly, before access to Claude Fable 5 was restricted by export controls, he used the model to evaluate the tool's security, and it successfully identified a severe data exfiltration vulnerability that he immediately patched.

**The Fable 5 Export Controls Harm US Cyber Defense** 
Reacting to the US government's directive forcing Anthropic to suspend access to Fable 5 and Mythos 5 over "jailbreak" concerns, Simon points out the absurdity of penalizing a model for fixing security flaws. Drawing on commentary from security expert Katie Moussouris, he argues that the government fundamentally misunderstands how AI assists in defensive security, mistaking the standard "find, fix, and test loop" for a dangerous exploit.

**GLM-5.2 is probably the most powerful text-only open weights LLM** 
Simon takes Z.ai's new 753B parameter open-weights model for a spin, testing its UI-generation capabilities with his standard SVG prompts. While it produced a flawless animated pelican on a bicycle and currently tops major coding leaderboards, it failed on other prompts, showing a curious mix of impressive benchmark dominance and regressions compared to its predecessor.

**Why AI hasn’t replaced software engineers, and won’t** 
Highlighting an essay by Arvind Narayanan and Sayash Kapoor, Simon reflects on the shifting economics of software engineering. He echoes their conclusion that while AI accelerates the actual typing of code, a developer's real value remains anchored in deep systemic understanding—specifically the human context needed to specify what to build and verify the delivery.

**Publishing WASM wheels to PyPI for use with Pyodide** 
Celebrating the Pyodide 314.0 release, Simon explores how developers can finally publish Pyodide-built Python packages directly to PyPI, eliminating a massive ecosystem bottleneck. He immediately leveraged Codex and GPT-5.5 xhigh to compile and deploy an experimental C++ WebAssembly project, showcasing the power of combining AI assistance with bleeding-edge web tooling.

## Project Updates
It was a massive week for tool releases, particularly around the Datasette ecosystem. Simon shipped `datasette-agent 0.3a0`, enabling users to execute structural database changes and modify records on the fly using natural language from the terminal via a new `--unsafe` auto-approval mode. This agentic write-capability directly inspired the release of `datasette 1.0a34`, which finally adds long-overdue built-in GUI tools for row insertion, editing, and deletion. He also released `luau-wasm 0.1a0` to test PyPI's new WASM wheel support, and published `datasette-tailscale 0.1a0`, an experimental plugin built on `tailscale-rs` that securely exposes local databases to a Tailnet.

## Themes
Two major themes dominated this week: the friction of AI regulation and the paradigm shift in AI-assisted programming. Simon repeatedly criticized the US export controls on Anthropic's models, highlighting how banning capable models over narrow jailbreak fears actively harms local development and defensive cybersecurity efforts. Meanwhile, his practical work underscored how developers are moving from simply writing code to orchestrating systems—relying on cutting-edge models to discover obscure SQLite C-level functions, patch CSP vulnerabilities, and rapidly package complex C++ WebAssembly pipelines.