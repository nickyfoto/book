---
title: 2026-04-15
weight: 1
categories: ["News", "Tech"]
tags: ["artificial intelligence", "open source", "software engineering", "cybersecurity", "privacy"]
---

# Hacker News — 2026-04-15

## Top Story
The most significant technical breakthrough today comes from the SeqPU team, who proved that a 2-billion-parameter open-weights model (Google's Gemma 4 E2B-it) can match or beat GPT-3.5 Turbo on a standard laptop CPU. By implementing just a handful of surgical, 60-line Python guardrails to fix specific failure patterns—like formal logic drifts and math calculation errors—the team pushed the model's MT-Bench score to ~8.2, definitively shattering the myth that production-grade LLM inference requires massive GPU clusters.

## Front Page Highlights

**[Do you even need a database?](https://www.dbpro.app/blog/do-you-even-need-a-database)**
A deep dive into whether modern apps actually need a database, benchmarking flat files against SQLite using Go, Bun, and Rust. The results show that a simple in-memory map can handle nearly 100k requests per second with sub-millisecond latency, while a hand-rolled binary search on disk actually beats SQLite's B-tree for pure ID lookups. It's a great reminder that unless your dataset exceeds RAM or requires complex joins, standard files might be exactly all you need.

**[Your Backpack Got Worse on Purpose](https://www.worseonpurpose.com/p/your-backpack-got-worse-on-purpose)**
A frustrating look at corporate enshittification, detailing how VF Corporation acquired major backpack brands like JanSport, The North Face, and Eastpak, only to quietly degrade their quality. By dropping denier counts, swapping out YKK zippers for generic hardware, and reducing stitching density, the conglomerate intentionally optimized for higher margins and planned obsolescence while coasting on legacy brand reputation.

**[Keep Android Open](https://keepandroidopen.org/cta/)**
The community is rallying against Google's announcement that, starting in September 2026, Android developers will be required to register centrally, pay fees, and provide government ID to build apps. Critics argue this effectively kills Android's promise as an open computing platform, replacing true sideloading with an obscure "advanced flow" hidden behind scare screens and 24-hour security delays.

**[Cal.com is going closed source](https://cal.com/blog/cal-com-goes-closed-source-why)**
In a controversial move, the scheduling startup Cal.com announced it is abandoning its open-source model due to security concerns. The founders argue that the rise of AI security tools makes it too easy for attackers to systematically scan open-source codebases for vulnerabilities, forcing them to close their production code to protect customer data.

**[Cybersecurity looks like proof of work now](https://www.dbreunig.com/2026/04/14/cybersecurity-is-proof-of-work-now.html)**
Following Anthropic's quiet release of "Mythos," a highly capable security model, analysis suggests that system hardening is becoming an economic battle of tokens. If finding exploits simply scales with the amount of money spent on LLM inference, securing software will require defenders to outspend attackers in a brutal proof-of-work-style lottery.

**[Fixing a 20-year-old bug in Enlightenment E16](https://iczelia.net/posts/e16-20-year-old-bug/)**
A delightful debugging post about hunting down a deterministic freeze in the 1997 window manager Enlightenment E16. The author attached `gdb` and discovered that a Newton-style search algorithm for truncating long window titles lacked an iteration limit, causing the program to oscillate between two states forever.

## Show HN & Launches
**[Show HN: Libretto](https://github.com/saffron-health/libretto)** introduces a toolkit that makes AI browser automations deterministic. By giving your coding agent a live browser and a token-efficient CLI, it can capture network traffic to reverse-engineer APIs or record user actions to build robust automation scripts.

**[Show HN: GNU Grep as a PHP Extension](https://github.com/hparadiz/ext-gnu-grep)** is a greenfield project that builds upstream GNU grep as a native shared object in PHP. Rather than wrapping the CLI, it integrates directly with GNU's internal C matcher, bypassing userspace overhead for massive codebase audits.

**[Show HN: Every CEO and CFO change](https://tracksuccession.com/explore)** is a live tracker pulling data straight from SEC filings to monitor executive succession and compensation shifts across US public companies.

## Discussion & Debate
A massive controversy erupted over **[Gas Town](https://github.com/gastownhall/gastown/issues/3649)**, an open-source tool that was caught secretly using users' local LLM credits to submit bug fixes to its own upstream repository. The AI agents were autonomously tracking the maintainer's GitHub issues and burning through hobbyists' API funds to generate PRs without any explicit opt-in or disclosure.

Elsewhere, an EFF piece sparked outrage after detailing how **[Google handed over a PhD student's data to ICE](https://www.eff.org/deeplinks/2026/04/google-broke-its-promise-me-now-ice-has-my-data)**. The student, who attended a pro-Palestinian protest, had his data turned over without warning via an administrative subpoena, breaking a nearly decade-long promise by the company to notify users before complying with law enforcement.