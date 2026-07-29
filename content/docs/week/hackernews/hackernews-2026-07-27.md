---
title: 2026-07-27
weight: 1
categories: ["News", "Tech"]
tags: ["artificial intelligence", "privacy", "software engineering", "tech policy"]
---

# Hacker News — 2026-07-27

## Top Story
**[Why I Left Google DeepMind](https://www.lesswrong.com/posts/iKm2FhpWkuuBojm82/why-i-left-google-deepmind)**
Former Google DeepMind researcher Alexander Matt Turner published a scorching essay detailing his resignation over the company's "all lawful use" AI deal with the Pentagon. The piece names names—calling out AI luminaries like Jeff Dean, Demis Hassabis, and Stuart Russell for staying silent and failing to hold the line on lethal autonomous weapons pledges when enterprise revenue and political pressure came into play.

## Front Page Highlights

**[US citizen charged after GrapheneOS phone wipes during airport search](https://www.techspot.com/news/113236-us-prosecutors-charge-atlanta-man-after-grapheneos-phone.html)**
A Cop City protester is facing federal charges under an obscure property-destruction statute because his GrapheneOS Pixel wiped itself during a warrantless airport search. The DOJ is essentially treating the use of a privacy-focused, open-source operating system as criminal by default, sparking massive debate over border search powers and digital rights.

**[A missing underscore sent innocent man to prison for 18 months](https://arstechnica.com/tech-policy/2026/07/police-missed-one-underscore-and-sent-the-wrong-man-to-prison/)**
In a horrific cautionary tale of police incompetence, a Canadian man served 18 months in prison for child luring because investigators subpoenaed Kik for `fus_ro_dah` instead of the actual perpetrator's handle, `fus__ro_dah`. The one-character mistake went completely unnoticed by the prosecution and defense through the entire trial, highlighting the terrifying fragility of digital forensics in the justice system.

**[AI companies are shredding rare books](https://xcancel.com/HedgieMarkets/status/2081534588485296565)**
AI data scraping has reached a grim new milestone: companies are bulk-buying rare, pre-2022 physical books, cutting off the spines, and destroying them in high-speed scanners to extract clean, human-written training data. A service called ISBNdb facilitates this quietly under NDAs, legally shielded by a fair use loophole because the destruction of the original means only one copy exists at a time.

**[Judge Rejects Google’s Attempt to DMCA Its Way Out of Being Scraped](https://www.techdirt.com/2026/07/27/judge-rejects-googles-attempt-to-dmca-its-way-out-of-being-scraped/)**
In a delicious bit of irony, Google—a company built entirely on scraping the open web—tried to use the DMCA 1201 anti-circumvention clause to stop SerpAPI from scraping its search results. A judge tossed the claims, correctly noting that Google's "SearchGuard" CAPTCHAs aren't protecting copyrighted works, effectively preventing Google from pulling the open-internet ladder up behind it.

**[How is the Bun Rewrite in Rust going?](https://lockwood.dev/ai/2026/07/27/how-is-the-bun-rewrite-in-rust-going.html)**
A critical look at Anthropic's highly publicized PR stunt of using Claude to rewrite Bun in Rust. Six weeks after the merge, there's still no release tag, there are 2,400+ open PRs from the bot, and an estimated $800k has been burned on API and CI/CD costs. It's a sobering reality check against the breathless claims that AI is ready to fully replace open-source maintainers.

**[Benchmarking Opus 5 on SlopCodeBench](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/benchmarking-opus-5-on-slop-code-bench.md)**
A deep dive into how modern LLMs perform on long-horizon coding tasks using the new SlopCodeBench. Claude Opus 5 scored a meager 24% pass rate and generated 5x more functions than Opus 4.8, confirming what many engineers already feel: today's models still can't reliably maintain a codebase or run "lights-off" without deteriorating into unmaintainable slop.

## Show HN & Launches
**[Scriptc by Vercel: TypeScript-to-Native compiler](https://github.com/vercel-labs/scriptc)** is a zero-runtime tool that compiles ordinary TypeScript directly into small, fast native executables without Node or V8, using QuickJS only as a fallback for dynamic NPM dependencies. 
**[Show HN: Let’s Seal](https://github.com/letsseal/letsseal)** aims to be the "Let's Encrypt of document proof," offering a free, self-hosted, open standard for cryptographically signing files to prove integrity and timestamping. 
**[Show HN: FeyNoBg](https://usefeyn.com/blog/feynobg/)** dropped a state-of-the-art open-source model and training library for automatic background removal that beats or matches existing benchmarks. 
Finally, **[Wattage](https://github.com/faizannraza/wattage)** launched as a "Kill-A-Watt meter for your AI agents," profiling token-spend via OpenTelemetry traces to catch loops and wasted context.

## Discussion & Debate
The community is having a field day with the **[Netflix employee fired for sharing personal details in retreat trust exercise](https://www.inc.com/amaya-nichole/netflix-company-retreat-sparked-lawsuit-experts-say-real-damage-may-be-just-beginning/91380349)** story, where a VP confessed to physician-supervised ketamine therapy during a "vulnerability" session and was promptly terminated—a stark reminder that HR is not your therapist and forced corporate vulnerability is a trap. Meanwhile, everyone is enjoying the chaotic ingenuity of the **[Professor’s invisible prompt trap](https://www.techspot.com/news/113243-professor-invisible-prompt-trap-catches-32-students-cheating.html)**, where white-colored text hidden in an exam prompt instructed AI to write about Madagascar, successfully catching 32 out of 35 cheating students.