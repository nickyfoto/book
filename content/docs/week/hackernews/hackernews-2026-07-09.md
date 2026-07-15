---
title: 2026-07-09
weight: 5
categories: ["News", "Tech"]
tags: ["artificial intelligence", "rust", "databases", "reverse engineering", "right to repair"]
---

# Hacker News — 2026-07-09

## Top Story
The biggest explosion on the front page today surrounds the dramatic codebase shift of the Bun runtime. Jarred Sumner published a massive post detailing how they leveraged Anthropic's Claude to rewrite Bun from Zig to Rust in just 11 days, utilizing dynamic workflows and adversarial agent reviews. The post is a fascinating technical case study on agentic engineering, but the real firestorm ignited when Andrew Kelley, creator of Zig, published his own unfiltered thoughts on the rewrite. Kelley blasted Bun's management and previous Zig code quality, essentially saying the Zig team is relieved that Bun and its "slop" are no longer their problem. It's a rare, highly public clash between a major language creator and one of its highest-profile users.

## Front Page Highlights

*   **[Unicode’s transliteration rules are Turing-complete](https://seriot.ch/computation/uts35/)** · Nicolas Seriot
    Nicolas Seriot discovered that UTS #35 transliteration rules shipped as locale data in the ubiquitous ICU library can actually perform universal computation. By compiling a 2-tag system into transliteration rules, he was able to implement both the Collatz function and Rule 110. It's a classic HN finding: a seemingly benign data format shipped in every OS is secretly a runtime environment for undecidable programs.

*   **[Vacuum at the Page Level](https://boringsql.com/posts/vacuum-at-the-page-level/)** · BoringSQL
    This is an exceptional, byte-by-byte deep dive into how Postgres's VACUUM actually reclaims space. The author uses `pageinspect` to show the exact three-phase lifecycle where dead tuples are pruned, index entries are cleaned, and finally, line pointers transition to `LP_UNUSED`. It's mandatory reading if you want to truly understand why index bloat happens and why deleted tuple storage seems to magically disappear in stages.

*   **[Patching MechCommander’s "left arm bug" for fun and profit](https://mhloppy.com/2026/05/mechcommander-weapons-left-arm-bug-fix/)** · MHLoppy
    A masterclass in reverse engineering an old game executable to fix an annoying 1998 bug where heavy weapons always get dumped into a mech's left arm. The author used Ghidra to decompile the allocation logic, discovered a flawed fallback variable handling large versus small weapons, and hand-patched the assembly using a code cave. 

*   **[We made Grok 4.5, GPT-5.5, and Claude build the same apps](https://www.tryai.dev/blog/grok-4.5-vs-gpt-5.5-vs-claude-build-off)** · TryAI
    A rigorous "build-off" evaluating the newest frontier models on single-file HTML app generation. The testing showed Grok 4.5 dominating on speed and cost by streaming at 110 tokens per second, while the Claude Opus 4.8 and Fable 5 models proved to be the most reliable builders for complex stateful tasks like a 3D Rubik's Cube.

*   **[Why is there smoke from the boiler room? – Botanical Garden using Home Assistant](https://vooijs.eu/posts/why-is-there-smoke-from-the-boiler-room/)** · Vooijs
    The IT manager of the Hortus Botanicus in Amsterdam got fed up with siloed, proprietary building management systems failing to talk to each other, so he wired up the garden's climate control to Home Assistant. It's a great argument for data sovereignty and bypassing vendor lock-in, enabling them to catch a gas boiler secretly firing when the heat pump silently failed.

*   **[John Deere owners will get the right to repair equipment under FTC settlement](https://apnews.com/article/john-deere-right-to-repair-agriculture-equipment-cb7514ffedb95c130a976af661f2bc02)** · AP News
    After years of aggressive lobbying and lawsuits, John Deere has been forced into an FTC settlement that legally mandates they provide diagnostic and repair tools to independent shops and farmers. The community has been following the tractor DRM saga for over a decade, so seeing antitrust enforcement actually break the software lockdown monopoly is a huge victory for the right-to-repair movement.

## Show HN & Launches
There's a strong crop of Show HN posts today. **[pgrust](https://github.com/malisper/pgrust)** is making waves as a from-scratch rewrite of Postgres in Rust, hitting a major milestone by matching Postgres's expected output across more than 46,000 regression tests. On the frontend, **[FableCut](https://github.com/ronak-create/FableCut)** launched a zero-dependency, browser-based non-linear video editor designed specifically to be driven by AI agents via MCP. Finally, an insightful data project on **[92% of US city websites fail Ada accessibility](https://accesslumens.com/research/state-of-us-local-government-accessibility-2026)** revealed that 42% of major local government sites still have critical screen-reader or keyboard barriers despite the April 2026 Title II deadline.

## Discussion & Debate
A highly resonant piece titled **[I Think I Have LLM Burnout](https://www.alecscollon.com/blog/llm-burnout/)** struck a chord with developers exhausted by reviewing AI-generated code and navigating the repetitive, overly enthusiastic "slop" text patterns everywhere. This tied perfectly into discussions around **[The Factorio Effect](https://dangrafham.com/the-factorio-effect)**, an essay arguing that a generation of gamers has unwittingly trained to become AI agent orchestrators by learning to think in terms of autonomous throughput, bottlenecks, and disposable workers rather than individual tasks.