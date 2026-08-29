---
title: 2026-08-20
weight: 8
categories: ["Blogs", "AI", "Tech"]
tags: ["browser automation", "chatbot search", "javascript runtimes", "search engine optimization"]
---

# Simon Willison — 2026-08-20

## Highlight
Simon's hands-on prototyping with Bun 1.4's newly released **`Bun.WebView`** stands out as today's key highlight. It demonstrates how developers can now build lightweight, first-class browser automation APIs directly in Bun, while providing crucial container RAM benchmarks (requiring **192MB–256MB**) for running Chromium at scale.

## Posts

**[A shot-scraper-style JSON API on Bun 1.4’s new Bun.WebView](https://simonwillison.net/2026/Aug/20/bun-webview-json-api/)** · [Source](https://simonwillison.net/2026/Aug/20/bun-webview-json-api/)
Following the release of Bun 1.4—the first stable version since its massive Rust rewrite—Simon wasted no time testing **`Bun.WebView`**, which brings built-in browser automation via macOS WebKit or Chrome DevTools Protocol control to the core runtime. Intrigued by this, he used Claude Code to construct a web API prototype that loads pages and runs arbitrary JavaScript, drawing inspiration from his beloved **`shot-scraper`** tool. His practical benchmarking using cgroups is highly valuable for developers, revealing that running a full, headless Chromium process against complex web pages requires a container footprint of **192MB to 256MB** of RAM.

**[ChatGPT search now uses the site:operator at scale](https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/)** · [Source](https://simonwillison.net/2026/Aug/20/chatgpt-search-now-uses-the-siteoperator-at-scale/)
Simon comments on intriguing data from Promptwatch—a tool tracking chatbot behavior in the **Generative Engine Optimization (GEO)** space—revealing that ChatGPT's daily search fanouts using the `site:` operator surged from ~0.5% to **16-17%** around the GPT-5.6 Sol rollout on August 8th. Lacking transparent system prompts from OpenAI, Simon's manual testing suggests that ChatGPT Search likely implements a programmatic search tool with structured fields like `search(query, recency, domains)` rather than exposing raw operators. Furthermore, he highlights Promptwatch's August 18th findings that **Reddit citations are dropping** sharply, though his search of leaked system prompt repositories hasn't yet uncovered any explicit directives targeting Reddit.

## Project Pulse
This daily digest shows a strong focus on **agentic development and browser tools**, with Simon using AI assistants like Claude Code to prototype sharp, lightweight servers that test the boundaries of newly released core runtimes.

***

🤖 I can do some web research on Promptwatch's latest findings about Generative Engine Optimization (GEO) trends and ChatGPT's system prompt leaks if you'd like to see how other platforms are being optimized.