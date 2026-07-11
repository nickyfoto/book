---
title: 2026-07-06
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite", "generative ai", "large language models", "developer tools"]
---

# Simon Willison — 2026-07-06

## Highlight
The latest release candidate for `sqlite-utils` is notable not just for its subtle breaking changes like compound foreign key support, but because Simon highlights his use of cutting-edge AI assistants like Claude Fable 5 and GPT-5.5 to aggressively churn through his issue backlog.

## Posts

**[sqlite-utils 4.0rc3](https://simonwillison.net/2026/Jul/6/sqlite-utils/#atom-everything)** · Source
Simon pushed out a third release candidate for `sqlite-utils` 4.0, delaying the stable release after using Claude Fable 5 and GPT-5.5 to clear out a large backlog of pull requests and issues. The most critical update is new support for introspecting and creating compound foreign keys, which requires a subtle breaking change to the `table.foreign_keys` Python API. Additionally, the tool now properly follows SQLite's convention for case-insensitive column names, an update that affected numerous parts of the codebase.

**[tencent/Hy3](https://simonwillison.net/2026/Jul/6/hy3/#atom-everything)** · Source
Tencent has dropped Hy3, a massive new 295-billion parameter (21B active) Mixture-of-Experts model released under an Apache 2.0 license. The model boasts a 256K context window but requires serious hardware, weighing 598GB for the full-sized version and 300GB for the FP8 quantized weights. Simon points out that it is currently free to try on OpenRouter until July 21st, where he immediately put it to work with his classic prompt test: generating an SVG of a pelican riding a bicycle.

## Project Pulse
Simon continues his hallmark dual focus: heavily iterating on his foundational data tooling while simultaneously keeping a close eye on the rapidly expanding open-weight LLM ecosystem. It is particularly interesting to see how his personal workflow now casually integrates next-generation models like GPT-5.5 and Claude Fable 5 to accelerate his open-source maintainership.