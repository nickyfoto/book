---
title: 2026-04-27
weight: 2
categories: ["News", "Tech"]
tags: ["apple", "artificial intelligence", "cybersecurity", "software engineering", "open source"]
---

# Hacker News — 2026-04-27

## Top Story
Tim Cook has officially announced his departure from Apple, sparking a massive, highly critical retrospective of his tenure across the community. While no one is disputing his operational mastery in building a three-trillion-dollar empire, engineers are aggressively dissecting the quiet software rot, convoluted settings menus, and subscription-nagging dark patterns that have eroded the daily experience of using Apple products over the last decade. 

## Front Page Highlights

**[GitHub Copilot is moving to usage-based billing]** · [Source](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
The era of unlimited AI autocomplete is officially ending on June 1, as GitHub transitions from premium request units to a token-based AI credit system. Agentic, multi-step coding sessions have drastically increased inference demands, and this shift is a clear signal that Microsoft is no longer willing to subsidize the heavy compute costs of power users at a flat monthly rate.

**[4TB of voice samples just stolen from 40k AI contractors at Mercor]** · [Source](https://app.oravys.com/blog/mercor-breach-2026)
Extortion group Lapsus$ has dumped a horrifying dataset: 4TB of studio-quality voice recordings perfectly paired with government ID scans from over 40,000 AI training contractors. Security researchers are highlighting that this isn't just a standard leak; it hands attackers the exact inputs needed to flawlessly execute voice cloning and bypass banking verifications in a single package.

**[Fast16: High-precision software sabotage 5 years before Stuxnet]** · [Source](https://www.sentinelone.com/labs/fast16-mystery-shadowbrokers-reference-reveals-high-precision-software-sabotage-5-years-before-stuxnet/)
SentinelLABS has uncovered a 2005 Windows kernel driver, powered by an embedded Lua VM, designed explicitly to introduce floating-point calculation errors into engineering and physics software. Predating Stuxnet by at least five years, it acts as a digital fossil that forces the infosec community to re-evaluate how long state actors have been manipulating physical outcomes through targeted software corruption.

**[The fastest Linux timestamps]** · [Source](https://www.hmpcabral.com/2026/04/26/the-fastest-linux-timestamps/)
A masterclass in x86 optimization that bypasses the standard `clock_gettime()` vDSO calls to directly read the timestamp counter (TSC). By caching the data page and avoiding the seqlock entirely, the author shaved 50% of the timing overhead off their C++ tracing library to hit a ~20ns median latency. It's the kind of extreme low-latency tuning that is unnecessary for almost everyone, but irresistible to read.

**[The Woes of Sanitizing SVGs]** · [Source](https://muffin.ink/blog/scratch-svg-sanitization/)
A developer for the TurboWarp project breaks down the doomed, whack-a-mole history of SVG sanitization vulnerabilities in the Scratch ecosystem. Attempting to filter out malicious payloads with regex or DOMPurify inevitably fails against obscure CSS imports and nested styling; the author argues the only sane solution is trapping the SVG in a strictly locked-down iframe.

## Show HN & Launches
We got two excellent terminal-based spreadsheets today: [Cell](https://github.com/garritfra/cell), a Rust-based CSV editor featuring native Vim keybindings, and [L123](https://github.com/duane1024/l123), which faithfully recreates the classic Lotus 1-2-3 DOS interface while maintaining modern `.xlsx` compatibility. In the AI tooling space, [Utilyze](https://www.systalyze.com/utilyze) launched as an open-source alternative to `nvtop` that measures true GPU arithmetic throughput rather than just binary kernel scheduling, while [Dirac](https://github.com/dirac-run/dirac) topped the TerminalBench 2.0 leaderboard for open-source coding agents by utilizing AST-native precision and hash-anchored edits. Finally, an independent community port has brought [Notepad++ for Mac](https://notepad-plus-plus-mac.org/) natively to Apple Silicon without needing Wine or compatibility layers.

## Discussion & Debate
Lawrence Paulson’s post ["Why not just use Lean?"](https://lawrencecpaulson.github.io//2026/04/23/Why_not_Lean.html) provoked a fierce debate over the cultism and insularity in the dependent-typed theorem proving community, arguing that older LCF-style systems like Isabelle still offer vastly superior automation and readability. Elsewhere, a deeply reflective post-mortem on building multiplayer browsers ([Lessons from building multiplayer browsers](https://www.alejandro.pe/writing/sail-muddy-lessons)) struck a nerve with founders, as the author admitted that trying to build the "future of personal computing" often fails because actual work is far more siloed than real-time collaborative software visions want to admit.