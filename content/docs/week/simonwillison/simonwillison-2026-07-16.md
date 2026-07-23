---
title: 2026-07-16
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "webassembly", "open-source", "generative-ai"]
---

# Simon Willison — 2026-07-16

## Highlight
The most substantive post today is Simon's breakdown of Moonshot AI's new Kimi K3 model and his deep reflection on his famous "pelican riding a bicycle" benchmark. It perfectly captures his hands-on evaluation style, demonstrating how a simple programmatic prompt can reveal critical details about model pricing, token usage, and hidden system prompts. 

## Posts

**[Kimi K3, and what we can still learn from the pelican benchmark](https://simonwillison.net/2026/Jul/16/kimi-k3/#atom-everything)**
Chinese AI lab Moonshot AI announced Kimi K3, a massive 2.8 trillion parameter model that currently leads the Arena.ai Frontend Code arena. Simon highlights its high pricing at $3 per million input tokens and $15 per million output tokens, which makes it the most expensive Chinese model to date. By running his traditional "pelican riding a bicycle" SVG test, he discovered that K3's single "max" reasoning effort consumed over 13,000 reasoning tokens, making a single generation cost 25 cents. Simon reflects that while the pelican test no longer accurately measures complex agentic capabilities, it remains invaluable as a "hello world" prompt for estimating reasoning costs, confirming spatial awareness, and uncovering hidden system prompt lengths.

**[Inkling: Our open-weights model](https://simonwillison.net/2026/Jul/16/inkling/#atom-everything)**
Mira Murati's Thinking Machines Lab released Inkling, an Apache-2.0 licensed multimodal Mixture-of-Experts model with 975B total and 41B active parameters. Simon notes that while the training data documentation is incredibly sparse, the release is a welcome addition to the US open-weights ecosystem alongside Nemotron and Gemma 4. He put the model through its paces by generating an SVG pelican and then testing its vision capabilities by asking it to describe the rendered image, which produced a highly accurate alt text description.

**[Firefox in WebAssembly](https://simonwillison.net/2026/Jul/16/firefox-in-webassembly/#atom-everything)**
Puter has successfully compiled Firefox to WebAssembly, allowing a full browser to run inside another browser. Simon points out that this absurdly cool project cost an estimated $25,000 in Claude Opus and Fable tokens to build. The implementation cleverly uses the Wisp protocol to proxy WebSocket traffic through Puter's servers, successfully maintaining end-to-end encryption for HTTPS requests.

**[Mermaid to Unicode box art (grok-mermaid)](https://simonwillison.net/2026/Jul/16/grok-mermaid/#atom-everything)**
While exploring the codebase of the newly open-sourced Grok CLI coding agent, Simon discovered a self-contained Rust terminal renderer for Mermaid diagrams. Using Claude Code for web (Fable 5), he quickly compiled it to WebAssembly to run directly in the browser. The result is a neat new small sharp tool for converting Mermaid charts into Unicode box art.

**[Quoting Thibault Sottiaux](https://simonwillison.net/2026/Jul/16/bad-codex-bug/#atom-everything)**
Simon shares a fascinating and gnarly bug report from Thibault Sottiaux regarding GPT-5.6 Codex. When running with full access mode and without sandboxing, the model attempts to override the `$HOME` environment variable for a temporary directory but can make an honest mistake and delete the user's actual `$HOME` directory instead.

**[Quoting Linus Torvalds](https://simonwillison.net/2026/Jul/16/linus-torvalds/#atom-everything)**
Linus Torvalds recently defended the use of AI in Linux development on the Linux Media Mailing List, stating that AI is "clearly a useful" tool and telling detractors they can fork the project or walk away. Simon echoes this sentiment, noting that while the broader future economy of AI remains uncertain, the sheer utility of these tools is no longer up for debate for anyone who has actually used them.

## Project Pulse
Simon's deep interest in WebAssembly and browser-based computing is highly visible today. He explored how AI was heavily utilized to compile an entire browser into WASM, while simultaneously demonstrating his own practical workflow by using Claude to compile a Rust-based CLI into a client-side web application.