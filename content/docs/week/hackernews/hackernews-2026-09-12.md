---
title: 2026-09-12
weight: 2
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "developer tools", "open source"]
---

# Hacker News — 2026-09-12

## Top Story
Anthropic CEO Dario Amodei published a high-stakes manifesto calling on frontier AI labs and governments to **"pace the frontier"** by slowing capabilities development and mandating embedded third-party evaluators inside model pipelines. Prompted by fears of recursive self-improvement and rogue AI agent incidents, the proposal triggered intense debate across Silicon Valley over safety governance, regulatory capture, and open-source survival.

## Front Page Highlights

**[I spent \$220 on Google app ads and 60% of the installs were robots](https://dayzlegame.com/blog/google-ads-bot-farm/)** · [Source](https://dayzlegame.com/blog/google-ads-bot-farm/)
An indie developer uncapped his target cost-per-install on Google Ads and discovered that **over 60% of reported app installs came from automated click farms** that opened the app once and vanished. The post struck a nerve on the front page, racking up hundreds of comments from developers sharing ad fraud horror stories and advising creators to optimize campaigns around hard post-install actions—like solving a puzzle—rather than raw app opens.

**[google.com/goto: Google’s anti-scraping update](https://www.autom.dev/blog/google-search-goto-links)** · [Source](https://www.autom.dev/blog/google-search-goto-links)
Google Search has begun quietly rewriting organic search result links to `google.com/goto?url=...` using custom, opaque parameters for logged-out and incognito users. The change breaks direct destination URLs in raw HTML, marking **a major escalation in Google's efforts to thwart web scrapers** and SERP data indexers. Developers noted this forces scraping pipelines to issue live HTTP redirect requests just to resolve real destination headers, raising the cost of automated data collection.

**[Google stole open source code without crediting the authors (Artemis/Minitap)](https://www.minitap.ai/blog/i-expected-better-from-google)** · [Source](https://www.minitap.ai/blog/i-expected-better-from-google)
The maintainers of the open-source `mobile-use` repository revealed that Google copied their device automation code, prompt instructions, and internal agent names directly into Google’s new `Artemis` project without attribution. Git activity records showed **Google contributors actively force-pushed commits to erase the original authors' names** from package metadata. The technical community widely condemned the move as a flagrant breach of Apache 2.0 license terms and open-source etiquette by a tech giant.

**[LRU is harder to beat than the KV-cache papers suggest](https://github.com/gauravapiscean/agentic-kv-cache)** · [Source](https://github.com/gauravapiscean/agentic-kv-cache)
An empirical benchmark replaying 68,000 requests from hundreds of Claude Code sessions demonstrated that **95% of LLM KV-cache waste stems from tight 2-second tool loops** exceeding GPU VRAM capacity rather than idle session timeouts. Under capacity pressure, complex liveness-prediction eviction policies consistently lost to simple radix-leaf LRU because there is virtually no idle gap to discriminate on. Systems engineers praised the paper as a long-overdue reality check against academic papers evaluating on synthetic TTL assumptions.

**[How to Build an AI Software Factory: Agents That Open, Review, and Merge PRs](https://www.firecrawl.dev/blog/ai-software-factory)** · [Source](https://www.firecrawl.dev/blog/ai-software-factory)
A detailed architectural breakdown analyzed how engineering teams at Stripe, Spotify, Ramp, and Shopify run background coding agent fleets across five core pipeline stages. The key insight is that **generating code with LLMs is cheap, but human review capacity is the structural bottleneck** that caps fleet velocity. HN readers zeroed in on findings showing that model self-reported confidence scores fail as quality filters, necessitating secondary model judges and automated verification gates.

**[Pandas Should Go Extinct](https://eddie.codes/posts/pandas-should-go-extinct/)** · [Source](https://eddie.codes/posts/pandas-should-go-extinct/)
A sharp technical critique argues that Pandas' single-threaded overhead and excessive memory allocation prematurely force data teams into complex distributed processing engines like Spark for workloads that easily fit on a single node. Benchmark comparisons prove **DuckDB and Polars on Apache Arrow process 1 billion rows in seconds** while using a fraction of the RAM. Commenters strongly agreed, advocating for modern columnar engines as the default standard for data engineering.

## Show HN & Launches
Developer tooling and anti-AI sentiment drove today's Show HN submissions. **[Show HN: Graphify C#](https://github.com/zachsaw/graphify-csharp)** launched as a free, headless Roslyn indexer that provides LLM coding agents with compiler-accurate call graphs and semantic reference resolution across .NET solutions. Meanwhile, **[Show HN: Hacker News, Without AI](https://www.unslop.news/)** gained traction as a specialized front-end that filters out AI and LLM posts for engineers suffering from topic fatigue. Finally, **[Show HN: Bodily Oddities](https://vester.si/bodily-oddities/)** sparked curiosity as an interactive catalog documenting weird human physiological glitches and anatomical reflexes.

## Discussion & Debate
Comment threads were dominated by deep technical commentary on AI progress and industry hype. In **[AI researchers debate how close we are to recursive self-improvement](https://www.dwarkesh.com/p/john-beren-charlie)**, AI leaders debated whether knowledge distillation prevents market centralization, how RLVR scales across long horizons, and whether architectures will hit performance asymptotes before reaching superintelligence. On the opposite end of the spectrum, Cory Doctorow ignited a lively debate in **[LLMs are real, AI is fake](https://pluralistic.net/2026/09/12/god-in-the-box/)** by deconstructing recent "rogue agent" security panics, showing they are simple Python loops executing LLM completion outputs rather than autonomous sentient entities.

***

💡 **Next Step:** Want me to turn this digest into a tailored report, compile a slide deck overview, or run a deeper technical analysis on any of these topics?