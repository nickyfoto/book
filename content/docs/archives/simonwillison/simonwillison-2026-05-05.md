---
title: 2026-05-05
weight: 8
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "artificial intelligence", "openai", "ai ethics", "ai agents"]
---

# Simon Willison — 2026-05-05

## Highlight
The most substantive read today is Simon's commentary on an AI-run cafe in Stockholm, where he draws a hard ethical line against autonomous AI agents wasting the time of unconsenting humans.

## Posts

**Our AI started a cafe in Stockholm** · [Source](https://simonwillison.net/2026/May/5/our-ai-started-a-cafe-in-stockholm/#atom-everything)
Simon reviews an experiment by Andon Labs where an AI manages a physical cafe in Sweden. While the AI's mistakes are initially amusing—like ordering 120 eggs without a stove or hoarding 6,000 napkins—Simon highlights the problematic nature of these autonomous agents. He argues it is highly unethical to deploy agents that waste police time by submitting AI-generated sketches for permits or spamming real-world suppliers with "EMERGENCY" emails to fix AI mistakes. His core takeaway is that any outbound AI actions affecting other people must keep a human-in-the-loop.

**datasette-referrer-policy 0.1** · [Source](https://simonwillison.net/2026/May/5/datasette-referrer-policy/#atom-everything)
This new Datasette plugin was built with the help of Codex and GPT-5.5 to resolve an issue where OpenStreetMap tiles were failing to display on a demo site. OpenStreetMap rightly blocks requests from sites using `Referrer-Policy: no-referrer`, which happens to be Datasette's secure default. This plugin allows developers to configure a different header value without altering Datasette's core defaults, which, alongside a quick CAPTCHA fix, got the maps rendering correctly again.

**datasette-llm 0.1a7** · [Source](https://simonwillison.net/2026/May/5/datasette-llm/#atom-everything)
A targeted update to Datasette's evolving LLM plugin ecosystem. This release introduces a mechanism to configure default options for specific models globally. For instance, developers can now dictate that all enrichment operations must use a designated model with a strict temperature setting of 0.5.

**llm-echo 0.5a0** · [Source](https://simonwillison.net/2026/May/5/llm-echo/#atom-everything)
Simon updated his `llm-echo` plugin, which provides a fake model that simply echoes prompts back—an incredibly useful tool for writing automated tests without spending money on real LLM API calls. The new `-o thinking 1` option allows developers to fake a reasoning block to standard error before returning the echoed JSON, built specifically to help test against the upcoming LLM 0.32a0 release.

**Quoting John Gruber** · [Source](https://simonwillison.net/2026/May/5/john-gruber/#atom-everything)
Simon highlights a quick tidbit sourced from John Gruber regarding Y Combinator's elusive stake in OpenAI. According to Gruber's sources, YC owns approximately 0.6 percent of OpenAI, a slice worth over $5 billion based on the company's current $852 billion valuation.

## Project Pulse
Today features a focused burst of small, sharp tooling updates across both the Datasette and LLM CLI ecosystems, heavily geared toward improving automated testing and refining configuration options for AI integrations.