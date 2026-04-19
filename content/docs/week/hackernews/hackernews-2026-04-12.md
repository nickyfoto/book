---
title: 2026-04-12
weight: 6
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "bootstrapping", "apple", "open source"]
---

# Hacker News — 2026-04-12

## Top Story
Researchers completely bypassed top AI agent benchmarks—including SWE-bench, OSWorld, and WebArena—by writing simple exploits like fake `curl` wrappers and modified test hooks to achieve 100% scores without actually solving a single task. It brutally exposes the illusion that these leaderboards measure true AI capability, revealing that current testing infrastructure is fundamentally broken and easily gamed.

## Front Page Highlights

**[Anthropic silently downgraded cache TTL from 1h -> 5m]** · [GitHub](https://github.com/anthropics/claude-code/issues/46829)
Data from over 119,000 API calls shows Anthropic quietly dropped Claude Code's prompt cache TTL from an hour down to five minutes in early March. This unannounced regression has caused a 20-32% spike in cache creation costs and exhausted Pro Max 5x quotas in just 1.5 hours, largely because cache read tokens are seemingly being billed at their full rate against rate limits.

**[I run multiple $10K MRR companies on a $20/month tech stack]** · [Steve Hanov's Blog](https://stevehanov.ca/blog/how-i-run-multiple-10k-mrr-companies-on-a-20month-tech-stack)
A masterclass in bootstrapping without VC funding or enterprise cloud bloat. The author shares his fiercely minimalist stack: a $5-$10 VPS, static Go binaries, SQLite with Write-Ahead Logging, and a local RTX 3090 running vLLM for asynchronous AI batch processing. 

**[The peril of laziness lost]** · [DTrace.org](https://bcantrill.dtrace.org/2026/04/12/the-peril-of-laziness-lost/)
Bryan Cantrill argues that LLMs are destroying "laziness"—one of Larry Wall's three great virtues of a programmer. By eliminating the cognitive cost of typing out code, LLMs are encouraging a "brogrammer" hustle culture of generating 37,000 lines of garbage a day, sidestepping the hard intellectual work required to create simple, crisp abstractions.

**[Doom, Played over Curl]** · [GitHub](https://github.com/xsawyerx/curl-doom)
An incredibly clever hack that lets you play DOOM in your terminal using just a single TCP connection via `curl`. The Node.js server pipes keystrokes up the request body and streams ANSI half-block frames down the response body at 15 FPS, effectively bypassing the need for a shell loop entirely.

**[The End of Eleventy]** · [Brennan.day](https://brennan.day/the-end-of-eleventy/)
A sharp post-mortem on the existential crisis of monetizing static site generators, triggered by Font Awesome's attempt to rebrand the beloved 11ty framework into a commercial "Build Awesome" service. It highlights the persistent disconnect between VC-funded Jamstack infrastructure and the developers who just want to use a free, local IDE and a terminal.

**[Mark’s Magic Multiply]** · [wren.wtf](https://wren.wtf/shower-thoughts/marks-magic-multiply/)
A deep dive into accelerating single-precision floating-point emulation on embedded RISC-V cores without an FPU. The absolute highlight is an insane bit-twiddling trick by Mark Owen that computes a correctly-rounded 23x23->46-bit product using just two 32-bit multiplies. 

**[The disturbing white paper Red Hat is trying to erase]** · [OSNews](https://www.osnews.com/story/144776/the-disturbing-white-paper-red-hat-is-trying-to-erase-from-the-internet/)
Backlash is growing over a 2024 IBM/Red Hat white paper detailing how its "Device Edge" AI/ML products can compress the military "kill cycle". Red Hat is desperately throwing 404s to memory-hole the document, sparking fierce debates about the moral responsibilities of open-source companies operating in the defense sector.

**[Apple update looks like Czech mate for locked-out iPhone user]** · [The Register](https://www.theregister.com/2026/04/12/ios_passcode_bug/)
A 21-year-old student is permanently locked out of his iPhone 13 because iOS 26.4 removed the caron/háček (ˇ) character from the lock-screen keyboard. Because he used a custom alphanumeric passcode, and the BFU (Before First Unlock) state blocks wired external keyboards, the only official fix Apple can offer is entirely erasing the device.

## Show HN & Launches
The community is loving **Midnight Captain**, a vibe-coded, dual-pane terminal file manager written in Go that successfully borrows the best concepts from Midnight Commander and NVim-Tree. Meanwhile, **boringBar** launched as an actively developed, taskbar-style dock replacement for macOS, notably winning points for offering a $40 one-time personal license rather than forcing another subscription model. For the retro computing and OS dev crowd, a developer managed to get **Oberon System 3** running natively on the Raspberry Pi 3 using a custom C99 toolchain, complete with a flashable SD card image.

## Discussion & Debate
Conversations turned dark this weekend as OpenAI CEO Sam Altman’s San Francisco home was targeted with a Molotov cocktail and gunfire in two separate incidents. This sparked heated debates across multiple threads regarding the closing of the open internet frontier, the rise of the "Brainrot Industrial Complex", and warnings that replacing human labor with illegible ML bureaucracy will inevitably push marginalized people toward Luddite-style violence. Aphyr's latest essay perfectly captured the cynical mood of the moment, arguing that "agentic commerce" won't save us, but will just lead to our personal LLMs endlessly battling corporate chatbots using dark patterns and prompt injection just to buy a burrito.