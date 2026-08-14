---
title: 2026-08-09
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite", "database compression", "github actions", "system prompts", "large language models"]
---

# Simon Willison — 2026-08-09

## Highlight
**Simon’s hands-on prototyping of a compressed text-history schema in SQLite represents a brilliant, highly pragmatic fusion of natural voice-driven brainstorming and programmatic LLM execution.** By utilizing ChatGPT's GPT-Live voice mode during a dog walk and following up with a deep-dive script generation run via GPT-5.6 Sol Pro, he demonstrated how modern developer workflows can rapidly benchmark and prove out novel database optimization strategies, cutting raw history storage overhead down by over 99%.

## Posts

**[SQLite compressed text-history prototypes](https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything)** · [Source](https://simonwillison.net/2026/Aug/9/sqlite-text-history-prototype/#atom-everything)
Simon explores a clever dog-walk brainstorm aimed at optimizing relational database revision histories for constantly edited documents. While traditional relational database schemas struggle with storage bloating—such as adding a full 20KB row for every minor text edit—Simon proposed compressing a single JSON array of all past revisions using zlib or Zstandard inside a SQLite BLOB column. After discussing the architecture stream-of-consciousness style with ChatGPT’s **GPT-Live voice mode**, he fed the transcript to **GPT-5.6 Sol Pro** with instructions to write experimental Python prototypes. The resulting test proved highly successful, compressing 1,000 simulated revisions (totaling 20.4 MB of raw text) down to a tiny 80.3 KB Zstandard-compressed JSON array. To solve the potential CPU overhead of decompressing and recompressing the entire array on every single edit, the generated prototype breaks the history across multiple rows, capping each row at either 128 revisions or 3MB of uncompressed JSON.

**[GitHub Models is now retired](https://simonwillison.net/2026/Aug/9/github-models-is-now-retired/#atom-everything)** · [Source](https://simonwillison.net/2026/Aug/9/github-models-is-now-retired/#atom-everything)
Simon flags the sudden and unannounced retirement of "GitHub Models," which he discovered when his automated repository readme-updater workflow broke during a scheduled service "brownout". This unique service provided a unified LLM playground and API across multiple providers, allowing code running natively within GitHub Actions to easily execute LLM prompts using the environment’s built-in GitHub API key. Simon theorizes that the service was shut down because the massive token consumption of complex **coding agent patterns** made it prohibitively expensive for GitHub to continue subsidizing free API access. To repair his broken workflow, Simon quickly swapped GitHub Models out for an **OpenAI API key running GPT-5.6 Luna**, implementing a monthly spending limit to protect against unexpected token costs while keeping his automated README summaries active.

**[Quoting Claude Opus 5 system prompt](https://simonwillison.net/2026/Aug/9/claude-opus-5-system-prompt/#atom-everything)** · [Source](https://simonwillison.net/2026/Aug/9/claude-opus-5-system-prompt/#atom-everything)
Simon shares a fascinating look at Anthropic's newly published system prompt instructions for **Claude Opus 5**, which specifically address the model’s own regulatory and operational history. The prompt details how Anthropic suspended access to Claude Fable 5 and Claude Mythos 5 in June 2026 to comply with U.S. Department of Commerce export controls, subsequently restoring access in July 2026 after controls were lifted. Since these real-world events occurred after Claude's pre-training cutoff date, Anthropic directly injected the exact facts and URLs into the system prompt to prevent the model from hallucinating or denying the suspension. This system prompt instructs Claude to address these topics in a fair, accurate, and matter-of-fact tone, offering developers a perfect case study in using system prompts to patch post-training knowledge gaps and guide models through sensitive operational disclosures.

## Project Pulse
**The overarching theme across today’s posts highlights the shift from experimental AI playthings to resilient, production-ready developer systems.** Whether it is Simon engineering a localized, highly compressed history-tracking architecture in SQLite, migrating critical repo automation to GPT-5.6 Luna in response to platform deprecations, or Anthropic engineering robust guardrails inside Claude Opus 5’s system prompt, the focus is squarely on making LLM-driven software stable, cost-contained, and performant.

📄 I can compile this daily digest into a clean, print-ready PDF report if you would like a polished offline copy to keep.