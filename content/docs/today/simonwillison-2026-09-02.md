---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["large language models", "prompt engineering", "developer tooling", "model context protocol", "software development"]
---

# Simon Willison — 2026-09-02

## Highlight
The highlight of the day is Simon’s deep dive into the **new Claude Fable 5.1 system prompt**, which reveals aggressive copyright filtering and significant behavioral adjustments. This post is highly substantive, demonstrating how Simon used Fable 5.1 to build a Git-scraping pipeline that tracks and diffs Anthropic's system prompts automatically.

## Posts

**[Claude’s new system prompt really doesn’t want to reproduce song lyrics](https://simonwillison.net/2026/Sep/2/claudes-new-system-prompt/)** · [Source](https://simonwillison.net/2026/Sep/2/claudes-new-system-prompt/)
Anthropic recently reorganized their system prompts, prompting Simon to build a GitHub tracking pipeline that automatically diffs prompt versions and uses GPT-5.6 Luna to summarize changes. The newly analyzed Fable 5.1 prompt reveals aggressive new safeguards banning the reproduction of copyrighted song lyrics and trademarked SVG characters. Additionally, the prompt refines Claude's persona by forbidding qualifiers like "honestly" and "genuinely", and removes standard guidelines for terminating abusive conversations in favor of maintaining un-submissive self-respect. This post demonstrates a powerful Git-scraping technique while showing how AI safety and style rules are increasingly codified in prompt layers.

**[Quoting Rick Brewster](https://simonwillison.net/2026/Sep/2/rick-brewster/)** · [Source](https://simonwillison.net/2026/Sep/2/rick-brewster/)
Simon highlights a commentary from Paint.NET creator Rick Brewster, who details using Claude to write a clean-room reverse-engineered rewrite of Direct2D from scratch to enable Paint.NET on Wine. The massive project, generating 180,000 lines of code, represents the ultimate case study in LLM-assisted "vibe coding". While Claude successfully solved complex math formulas for Direct2D’s effects library, Rick had to extensively supervise the model to correct poor architectural decisions and COM reference-counting bugs. The takeaway is that coding agents can accomplish monumental engineering feats but require rigorous human oversight and "babysitting" to avoid structural failure.

**[GeoJSON Map Viewer](https://simonwillison.net/2026/Sep/1/geojson/)** · [Source](https://simonwillison.net/2026/Sep/1/geojson/)
Simon details how GPT-5.6-Sol proactively generated a new web tool for displaying GeoJSON boundaries after Simon requested help mapping local community service districts. Working with Claude Code and Fable 5.1, he iterated on the codebase to build a complete viewer capable of rendering overlaid polygons and exporting the final map as a PNG. Simon also notes a handy technique of using ChatGPT Work to gather, merge, and export structured boundary coordinates from government databases. This serves as a great example of AI-assisted prototyping for highly specific, functional developer utilities.

**[datasette-mcp 0.2](https://simonwillison.net/2026/Sep/1/datasette-mcp/)** · [Source](https://simonwillison.net/2026/Sep/1/datasette-mcp/)
This release represents the first non-alpha version of Simon’s plugin that connects Datasette databases to the Model Context Protocol (MCP). The main update changes the output of the `execute_sql` tool so that rows are formatted as an array of objects rather than an array of arrays. This adjustment helps weaker language models avoid losing track of column mappings. Simon notes that he has been using the plugin heavily and is confident in its stability.

**[llm-gemini 0.34](https://simonwillison.net/2026/Sep/2/llm-gemini/)** · [Source](https://simonwillison.net/2026/Sep/2/llm-gemini/)
This update to Simon's Gemini plugin for his LLM CLI tool introduces support for the new `gemini-3.8-flash` model. Users can now leverage Gemini 3.8 Flash's low, medium, and high thinking levels directly from the command line. The release also fixes a bug where asynchronous responses failed to record the resolved model version.

## Project Pulse
Today’s activity shows a strong focus on **AI-assisted software creation and tooling integration**. Simon continues to push the envelope on building "small, sharp tools" like his GeoJSON viewer and LLM CLI updates while highlighting the practical realities of massive "vibe coding" projects.

***

🎙️ Would you like to turn this daily digest into an Audio Overview podcast episode to listen on the go?