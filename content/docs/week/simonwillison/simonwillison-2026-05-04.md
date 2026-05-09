---
title: 2026-05-04
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["generative-ai", "llms", "regular-expressions", "webassembly"]
---

# Simon Willison — 2026-05-04

## Highlight
Simon's WASM-compiled Redis Array Playground is today's standout, showcasing how quickly we can now spin up interactive sandboxes for in-flight C pull requests using AI agents like Claude Code.

## Posts

**[Redis Array Playground](https://simonwillison.net/2026/May/4/redis-array/#atom-everything)**
Salvatore Sanfilippo recently submitted a PR adding a new array data type to Redis. To try out the newly proposed commands, including a server-side `ARGREP` powered by the vendored TRE regex library, Simon utilized Claude Code to build an interactive WASM playground that runs a subset of Redis directly in the browser. The post also points to Salvatore's own write-up on the AI-assisted development process behind the new array type.

**[TRE Python binding — ReDoS robustness demo](https://simonwillison.net/2026/May/4/tre-python-binding/#atom-everything)**
Prompted by the inclusion of Ville Laurikari's TRE engine in the Redis PR, Simon again used Claude Code to generate an experimental Python `ctypes` binding for the regular expression library. He then subjected the library to malicious ReDoS (Regular Expression Denial of Service) attacks. Thanks to its lack of backtracking, TRE handled these malicious payloads significantly better than Python's standard library implementation.

**[Granite 4.1 3B SVG Pelican Gallery](https://simonwillison.net/2026/May/4/granite-41-3b-svg-pelican-gallery/#atom-everything)**
Following IBM's Apache 2.0 release of the Granite 4.1 LLM family, Unsloth published 21 quantized GGUF variants of the 3B model. Simon downloaded all 51.3GB of these variants to run an experiment prompting each quantized model to "Generate an SVG of a pelican riding a bicycle". The results were uniformly terrible, yielding no discernible relationship between model file size and output quality for this specific drawing task.

**[Quoting Andy Masley](https://simonwillison.net/2026/May/4/andy-masley/#atom-everything)**
Simon highlighted a quote from Andy Masley pushing back on the argument that AI data centers are consuming too much agricultural land. Masley notes that the land footprint of hyperscalers is minuscule compared to the massive amount of land farmers have independently sold off since 2000, none of which has negatively impacted US food access.

**[April 2026 newsletter](https://simonwillison.net/2026/May/4/april-newsletter/#atom-everything)**
Simon published his sponsors-only monthly newsletter covering major AI updates like Opus 4.7, GPT-5.5, Claude Mythos, and ChatGPT Images 2.0. For those wanting a preview of the $10/month subscription content, he has unlocked the previous March edition.

## Project Pulse
A clear theme of agent-accelerated tool building emerges today, with Simon utilizing Claude Code to quickly wrap and expose low-level C codebases—from compiling an experimental Redis branch to WebAssembly, to generating a Python `ctypes` binding for a robust regex engine.