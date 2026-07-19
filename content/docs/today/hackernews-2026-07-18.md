---
title: Hacker News
weight: 15
categories: ["News", "Tech"]
tags: ["artificial intelligence", "retro computing", "cybersecurity", "software engineering"]
---

# Hacker News — 2026-07-18

## Top Story
**[Shipping OpenStrike: A Counter-Strike-Shaped FPS on a 2004 Handheld](https://pocketjs.dev/blog/shipping-openstrike/)**
A developer successfully ported a Counter-Strike-style FPS to the original 2004 Sony PSP, hitting a locked 60 frames per second. The engine is written in Rust, while the game rules and a Solid-based JSX HUD run entirely on an embedded QuickJS interpreter. Because the PSP's 333MHz MIPS processor completely lacks a JIT compiler, the developer had to heavily optimize the reactive state management down to the millisecond and bake lighting and PVS data into the maps at build time to fit inside 24MB of RAM. It is an incredible existence proof that modern web stack ergonomics can actually scale to real-time 3D games on ancient, heavily constrained hardware.

## Front Page Highlights

**[TP-Link Kasa cameras leaked home GPS via unauthenticated UDP for 6 years](https://github.com/BadChemical/IoT-Vulnerability-Research-Public/blob/main/TP-Link_Kasa_EC71/Kasa_EC71.md)**
Security researcher Christopher Childress disclosed an egregious vulnerability in TP-Link Kasa cameras where a single unauthenticated UDP packet sent to port 9999 would return the device owner's exact home GPS coordinates in cleartext. The disclosure timeline is a textbook study in vendor negligence, dragging on for six months of pulling teeth with support and even involving a botched beta firmware deployment that permanently bricked the researcher's test camera. 

**[The Kimi K3 Moment](https://stephen.bochinski.dev/blog/2026/07/18/the-kimi-k3-moment/)**
A major shift is happening in the AI landscape as unrestricted Chinese open-weight models like Kimi K3 and GLM 5.2 are now matching or beating heavily gated American models. The author argues that US AI policy has failed, resulting in restricted domestic models that refuse legitimate work while cheaper, frontier-quality open models are freely available overseas. Another post benchmarking Anthropic's Fable 5 against OpenAI's GPT-5.6 Sol on an NP-hard problem confirmed the models' raw intelligence, but highlighted how frustrating these tools' native `/goal` persistence loops can be when they blindly amplify bad optimization paths.

**[The Computer at the Bottom of a Canal](https://negroniventurestudios.com/2026/07/18/the-computer-at-the-bottom-of-a-canal/)**
In 1988, Scottish hi-fi company Linn Products built the Rekursiv, a custom 4-chip processor that checked memory bounds in hardware, garbage-collected its own heap directly in silicon, and treated memory and disk as a single object store. The project was economically crushed by the explosive rise of cheap RISC microprocessors, ending with the technical director allegedly dumping his hardware into the Forth and Clyde Canal. However, the author astutely notes that almost forty years later, the Rekursiv's contrarian ideas are finally being vindicated by modern architectures like Arm's memory-safe CHERI and workload-specific AI silicon.

**[Heresy](https://paulgraham.com/heresy.html)**
Paul Graham explores how the antiquated religious concept of "heresy" has been reborn in modern corporate, academic, and tech environments. He argues that aggressively conventional-minded people use ideological purity tests as conversational exceptions to bypass the search for truth, effectively punishing individuals for their current opinions regardless of their lifetime of objectively good work.

**[Learning a few things about running SQLite](https://jvns.ca/blog/2026/07/17/learning-about-running-sqlite/)**
Julia Evans shares her practical operational learnings from using SQLite in production for Django sites. She highlights the dramatic, immediate performance impact of running `ANALYZE` for full-text search queries and discusses the operational nuances of performing incremental backups using tools like Litestream.

**[The Zilog Z80 has turned 50](https://goliath32.com/blog/z80.html)**
An excellent, deep-dive retrospective on the Z80 architecture to celebrate its 50th anniversary. The piece breaks down the CPU's lineage from the Datapoint 2200-inspired 8008, to the 8080, and finally to Federico Faggin's founding of Zilog to create the Z80, detailing how its single 5V supply and built-in DRAM refresh vastly simplified 8-bit microcomputer design.

## Show HN & Launches

**[Show HN: Q3Edit](https://q3edit.com)**
A full Quake III Arena map editor running entirely in the browser using TypeScript and WebGL2. It leverages id Software's original `q3map` compiled to WebAssembly to generate BSPs, letting you compile and instantly play a map in browser-native ioquake3 with a single click.

**[Show HN: IKEA Complexity Index](https://ikea.greg.technology/)**
A fun data visualization of roughly 20,000 IKEA products, ranking them by a "complexity" metric. The index is calculated simply by multiplying the number of assembly steps by the total number of parts required.

**[Speech Recognition and TTS in less than 500kb](https://github.com/moonshine-ai/moonshine/tree/main/micro)**
Moonshine Micro is a new open-source AI voice toolkit precision-engineered for embedded systems. It bundles voice-activity detection, command recognition, and neural speech synthesis into a footprint of just 470 KB of RAM, targeting 80-cent microcontrollers like the Raspberry Pi RP2350.

## Discussion & Debate

**[A grumpy screed about AI in software engineering](https://sam.sutch.net/posts/a-grumpy-ai-screed)**
A highly resonant post capturing the fatigue many engineers currently feel as AI-generated "slop" floods pull requests, ticket descriptions, and design docs. The comments are filled with developers lamenting that using AI code generation has become culturally mandatory, turning the actual joy of the craft into a grueling, unrewarding slog of reviewing bot output.

**[Young adults are poor despite every metric which suggests otherwise](https://xcancel.com/i/article/2077113148524417439)**
A sharp rebuttal to the prevailing macroeconomic narrative that Millennials and Zoomers are doing fine based on median income data. The author argues that while consumer goods are cheap, the "social capital" of previous generations—safe public schools, trusted neighborhoods, and a predictable social fabric—has been destroyed, forcing young people to individually repurchase these basics at massive financial premiums through exorbitant real estate and private services.