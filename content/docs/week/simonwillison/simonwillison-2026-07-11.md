---
title: 2026-07-11
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite-utils", "python", "sqlite", "ai-assisted-programming"]
---

# Simon Willison — 2026-07-11

## Highlight
The release of `sqlite-utils 4.1` showcases how Simon is aggressively integrating AI into his open-source workflow, using GPT-5.6 Codex not just to write code, but to triage issues and manually exercise edge cases in the terminal. It also introduces a clever workaround to migrate existing databases to SQLite's STRICT mode by utilizing the tool's built-in table transformation mechanism.

## Posts

**sqlite-utils 4.1** · [Source](https://simonwillison.net/2026/Jul/11/sqlite-utils/#atom-everything)
Just days after shipping version 4.0, Simon released `sqlite-utils 4.1` with a batch of minor but highly useful CLI features. Highlights include a `--code` option to generate rows for insertion directly via Python snippets, and a `--type` override to prevent CSV/TSV data like ZIP codes from being incorrectly parsed as integers. Inspired by an Evan Hahn post on Hacker News, the release adds `strict=True/False` toggles to the `transform` command, seamlessly migrating data to enforce SQLite's strict table schemas. Interestingly, Simon relied heavily on AI-assisted programming for this release: he had Codex scan his repository to find the easiest open issues, and used an advanced prompt instructing the model to use `uv run python -c` to manually test its own work and uncover edge cases.

## Project Pulse
Simon continues his rapid iteration on `sqlite-utils`, successfully blending traditional open-source maintenance with cutting-edge AI workflows—specifically utilizing autonomous models to clear out backlog requests and self-validate code.