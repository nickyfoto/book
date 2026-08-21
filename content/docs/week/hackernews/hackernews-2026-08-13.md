---
title: 2026-08-13
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "hardware hacking", "internet history", "open-source"]
---

# Hacker News — 2026-08-13

## Top Story
The most electrifying post of the day is Christopher Domas's (aka @xoreaxeaxeax) **[Spaghettifying DRAM](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts)**, a mind-bending security exploit that bypasses physical memory protections by hacking the memory controller itself. By poking the DRAM controller's translation registers on AMD Family 16h CPUs, he demonstrates how to scramble physical addresses mid-flight so that physical memory fences sit entirely oblivious to the aliases beneath them, unlocking SMM, PSP, and microcode boundaries with the help of linear algebra and a z3 solver.

## Front Page Highlights

**[I Built a 500k-Domain Search Engine for Makers in a Weekend for \$10](https://alexmorleyfinch.github.io/marlin/history/v1/article/the_birth.html)** · [alexmorleyfinch.github.io](https://alexmorleyfinch.github.io/marlin/history/v1/article/the_birth.html)
Tired of corporate SEO sludge and bloated documentation pages, the author built "Marlin," a personal homepage search engine designed to discover small-scale artists, writers, and software makers. Powered by a lightweight fetcher, a local 4B parameter Gemma model running on a rented cloud GPU, and an automated "steward" process to filter booking and spam mills, the pipeline successfully cataloged over 560,000 domains for around \$10. The HN community was highly enthusiastic about this practical, cost-effective blueprint for reclaiming the web using custom local AI indexing.

**[Where did the old web go? We followed 657,607 links to find out](https://0.mk/blog/link-rot)** · [0.mk](https://0.mk/blog/link-rot)
Macedonian URL shortener 0.mk restored a 2009–2014 database backup and crawled over 650,000 historical destinations in August 2026, revealing a devastating picture of link rot: 76.7% of the links no longer loaded. While tech giants like YouTube and Wikipedia survived, the "small web" of personal blogs, forums, and local Macedonian newsrooms has been completely vaporized. Commenters shared a deep sense of nostalgia and debated the sheer impermanence of modern digital media, urging self-hosting and archival efforts.

**[From 13.5M installs to 499 active devices](https://games.lukicengineering.com/blog/2013-vs-2026/)** · [games.lukicengineering.com](https://games.lukicengineering.com/blog/2013-vs-2026/)
A solo game developer from Belgrade shares a sobering, data-heavy retrospective comparing Google Play's discovery mechanics from 2014 to 2026. In 2014, his game hit over a million installs in 27 days thanks to organic placement on the "Top New Free" chart, whereas his newly released 2026 title received zero installs despite a popular launch post on Reddit. The thread turned into a collective sigh from developers who lamented that organic discovery has been systematically replaced by pay-to-play ad-tech cartels.

**[We Have AI at Home Chapter 1: A Box of Scraps](https://jdagostino.github.io/ai-pt1-box-o-scraps/index.html)** · [jdagostino.github.io](https://jdagostino.github.io/ai-pt1-box-o-scraps/index.html)
The author details building a local AI server in his garage out of cheap eBay "e-waste," utilizing four AMD V620 workstation GPUs (32GB VRAM each, overproduced for a failed 2022 cloud gaming venture) and a 2017 Intel i9 motherboard. He shares hilarious details about custom-modeling a carbon-fiber ASA cooling shroud for the server cards and coding an Arduino-based fan controller with help from a local DeepSeek model (which briefly suffered an existential crisis in the process). The thread was filled with old-school hackers cheering the DIY spirit and trading tips on resizable BAR and cooling.

**[My Rules for Using Spreadsheets](https://leancrew.com/all-this/2026/08/my-rules-for-using-spreadsheets/)** · [leancrew.com](https://leancrew.com/all-this/2026/08/my-rules-for-using-spreadsheets/)
The author outlines an opinionated approach to data analysis, arguing that his primary rule for spreadsheets is simply "Don't" due to opaque, un-named, and inconsistent nested formulas. He demonstrates using Pandas and SQLite to process the massive US baby names dataset—which comfortably exceeds Excel's 1-million-row limit—to show why separating analysis logic from raw data is far more robust. HN regulars agreed, citing the infamous Reinhart-Rogoff spreadsheet error as a prime warning of the dangers of using Excel for serious macroeconomic modeling.

**[What sort of maths are LLMs good at?](https://gowers.wordpress.com/2026/08/12/what-sort-of-maths-are-llms-good-at/)** · [gowers.wordpress.com](https://gowers.wordpress.com/2026/08/12/what-sort-of-maths-are-llms-good-at/)
Fields Medalist Timothy Gowers writes a brilliant meta-analysis following OpenAI's recent breakthrough in solving ten major open math and computer science problems (such as constructing a non-sofic group). He argues that LLMs are currently exceptional at finding "counterexamples" or examples to existence statements because they can brute-force search trees that humans would naturally prune, while humans still retain an advantage in deep, conceptual "nose" reasoning. The comment thread was highly technical, debating whether a "nose" for fruitful directions is an emergent property that scaling up will eventually solve.

## Show HN & Launches
We had a bumper crop of excellent open-source releases today:
* **[MCP Memory](https://github.com/fellowgeek/mcp-memory)**: An open-source Model Context Protocol server that gives agents persistent, long-term memory compliant with the Open Knowledge Format (OKF v0.2), indexed via a local SQLite FTS5 database.
* **[Pixy](https://pixydesignapp.com/)**: A visual editor for coding agents that treats your live web page as the workspace, allowing the agent to write code directly to your codebase instead of drawing abstract, lossy mockups.
* **[Bullet](https://www.codewithbullet.com)**: A YC S26-backed coding agent engineered to route simple tasks rapidly and proactively stop execution loops before they spiral out of control.
* **[Woxi](https://woxi.ad-si.com)**: An open-source Mathematica and Wolfram Language reimplementation featuring Woxi Studio, a cell-based notebook editor for .nb files.

## Discussion & Debate
* **[AI Is Threatening Natural Resources for Billions](https://unric.org/en/ais-environmental-costs-threaten-water-land-and-climate/)**: A massive UNU-INWEH report details the hidden water and land footprints of data centers, showing how "green-carbon" transitions (like bioenergy) can multiply water usage thirty-fold. HNers engaged in a fierce debate over Jevons' Paradox, arguing that per-query efficiency gains are routinely wiped out by sheer volume growth, and highlighted real-world strain on local grids in Dublin, Querétaro, and Montevideo.
* **[Claude users are mad that Anthropic’s new watermarks will catch them](https://techcrunch.com/2026/08/12/some-claude-users-are-mad-that-anthropics-new-watermarks-will-catch-them-cheating-at-their-jobs-classes/)**: Reddit erupted over Anthropic's new invisible watermark policy (implemented to satisfy the EU AI Act's Transparency Code) that embeds statistical bias into model choices. HNers analyzed the watermarking mechanics (diluted by light editing, but only erased by complete re-composition) and debated the deep irony of watermarking an editorial product generated by scraping human work.
* **[McDonald’s Built a 515-Page Dossier on Me](https://www.wired.com/story/mcdonalds-built-a-515-page-dossier-on-me-it-says-ill-never-leave/)**: A California resident retrieved his loyalty data under CCPA, revealing highly invasive predictive modeling (down to predicting exact future visits and assigning him a "zero attrition likelihood" score). Commenters dissected the predatory nature of modern loyalty apps and the dark mechanics of "commercial surveillance".

***

📊 I could write a script to parse and visualize the distribution of link rot by year or domain from the 0.mk dataset if you want to dig deeper into the actual death of the small web.