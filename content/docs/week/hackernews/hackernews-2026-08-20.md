---
title: 2026-08-20
weight: 4
categories: ["News", "Tech"]
tags: ["rust", "artificial intelligence", "software engineering", "macos", "privacy"]
---

# Hacker News — 2026-08-20

## Top Story
A major supply chain security compromise hitcrates.io with the discovery of **`arrayref` version 0.3.10**, which introduced an obfuscated, malicious dependency named **`proc-macro1`**. Because the payload executes automatically during cargo compilation, it highlights how easily weaponized transitive dependencies can target local developer machines and CI pipelines.

## Front Page Highlights

**[AliExpress runs silent WebAudio fingerprinting that breaks Bluetooth multipoint](https://blog.laserphile.com/2026/08/aliexpress-webpage-keeping-multipoint.html)** · [Laserphile](https://blog.laserphile.com/2026/08/aliexpress-webpage-keeping-multipoint.html)
A brilliant piece of technical detective work reveals that the AliExpress homepage silently runs **obfuscated browser security scripts (`collina.js` and `fireyejs.js`)** that initialize active WebAudio oscillators and analyser nodes. Even though the final output gain is set to zero, connecting these nodes to the system's audio destination tricks the OS and browser into keeping the Bluetooth audio path active. This invasive fingerprinting technique—which also polls canvas, WebGL, and hardware configurations—has sparked outrage as it holds the Bluetooth hardware of unsuspecting site visitors hostage and silently breaks multipoint switching.

**[Rewriting in Rust](https://blog.jetbrains.com/rust/2026/08/10/rewriting-in-rust/)** · [JetBrains Blog](https://blog.jetbrains.com/rust/2026/08/10/rewriting-in-rust/)
A balanced, clear-eyed retrospective on the **Rewrite It In Rust (RIIR)** movement, contrasting developer enthusiasm with actual production outcomes. While Google's Android data demonstrates a direct linear reduction in memory safety vulnerabilities as Rust velocity increases, the authors caution that well-funded teams still routinely introduce severe logical regressions during rewrites. Project dropouts like Prisma, Loglog Games, and curl's abandoned `hyper` backend integration serve as warning signs, driving home the consensus that **incremental Rust expansion** is far superior to risking the whole farm on a complete, ground-up rebuild.

**[Turns are Better than Radians](https://www.computerenhance.com/p/turns-are-better-than-radians)** · [Computer Enhance](https://www.computerenhance.com/p/turns-are-better-than-radians)
This wonderfully contrarian math piece argues that game engines and trigonometry libraries should ditch **radians in favor of "turns" (parameterizing angles from 0 to 1)**. Programmers routinely convert values on a range to radians by multiplying by pi or tau, only for low-level trig libraries to immediately divide it back out. Beyond saving redundant CPU operations, switching to turns provides **exact binary floating-point representation** for common angles (e.g., 90 degrees is exactly 0.25) instead of losing precision on irrational pi multiples.

**[I Spent Twenty Years Becoming Good at the Wrong Game](https://savvynormie.com/i-spent-twenty-years-becoming-good-at-the-wrong-game/)** · [Savvy Normie](https://savvynormie.com/i-spent-twenty-years-becoming-good-at-the-wrong-game/)
An intensely personal essay from a Russian scholar who earned the highest academic doctorates before walking away from the entire system. He details how academic success often rewards hiding behind layers of impenetrable vocabulary and theoretical complexity to mask claims that are fundamentally untestable. At age 41, he burned his dissertation copies, deleted his notes, and started over as a complete coding beginner in computational linguistics—relishing that in software, unlike academic scoreboards, **"reality gets a vote" because code can actually fail**.

**[Raiders of the Lost Array: vibe-coding a macOS driver for my orphaned Drobo](https://fetzu.ch/blog/20260819_claudevsdrobo/)** · [fetzu.ch](https://fetzu.ch/blog/20260819_claudevsdrobo/)
With Drobo out of business and macOS deprecating Rosetta 2, the author was faced with their 14-year-old RAID array becoming a paperweight. They document using Claude to write a modern macOS DriverKit extension (`DroboDext`) and menu-bar app from scratch. The story is an excellent reality check on **"vibe-coding"** with LLMs: while the model successfully decoded the management protocol and generated working code, it still required hours of human tenacity to struggle through Apple’s undocumented DriverKit entitlements, package structures, and debugging with SIP disabled.

**[If this is true, the hyperscalers are toast](https://klementoninvesting.substack.com/p/if-this-is-true-the-hyperscalers)** · [Klement on Investing](https://klementoninvesting.substack.com/p/if-this-is-true-the-hyperscalers)
A critical look at Stanford research comparing local **Small Language Models (SLMs)** against cloud-bound Large Language Models (LLMs). The paper indicates that SLMs (like QWEN, Gemma, and Granite) running locally on M4 or Nvidia desktop chips achieve a **win/tie ratio of 98.6% on chat tasks and 81.2% on combined chat and reasoning tasks**, while slashing energy and compute costs by 50% to 85%. HN is eating this up as it validates local edge computing and threatens the immense capex projections of cloud hyperscalers.

## Show HN & Launches

**[Show HN: I trained a 125M model to autocomplete piano on-device](https://simedw.com/2026/08/20/midi-autocomplete/)** · [simedw.com](https://simedw.com/2026/08/20/midi-autocomplete/)
An impressive, high-effort project that delivers **RollTab, an iOS app that autocompletes piano play in real time**. By mapping MIDI events to a custom grouped pitch-duration-velocity representation and fine-tuning with Direct Preference Optimization (DPO) using pairwise judgments, the developer achieved a blazing-fast 108 notes per second on-device.

**[Show HN: Streambench – Native Mac Client for Kafka and NATS](https://streambench.app)** · [Streambench](https://streambench.app)
A beautifully designed, **local Apple Silicon desktop app** with a Rust broker core. It acts as a lightweight developer client (akin to TablePlus) to view topics, tail real-time messages, inspect consumer lag, and manage Kafka, Redpanda, or NATS JetStream configurations directly from a minimalist GUI.

## Discussion & Debate

**[Why the Ocean Cleanup Hasn’t Solved the Plastic Pollution Crisis](https://therevelator.org/why-ocean-cleanup-has-not-solved-plastic-pollution/)** · [The Revelator](https://therevelator.org/why-ocean-cleanup-has-not-solved-plastic-pollution/)
A scathing critique of Boyan Slat’s **The Ocean Cleanup** nonprofit, outlining how its open-ocean trash-sweeping nets have cost millions while killing thousands of ecologically vital marine organisms and threatened species. The comment section is a proxy war over the tech industry's obsession with **"teenage genius" silver bullets and "imported magic"** versus evidence-based policy and volunteer beach cleanups. Many note that Slat's team had to quietly pivot to basic river interceptors—a solution long advocated by the same scientific experts who were ridiculed online by tech evangelists.

**[AI didn’t erase the junior engineer’s value, it increased it](https://franciscotrindade.me/blog/the-kids-are-really-alright/)** · [Francisco Trindade](https://franciscotrindade.me/blog/the-kids-are-really-alright/)
An opinionated pushback against the popular narrative that AI code generators have destroyed the economic viability of junior engineers. The debate focuses on whether software engineering is fundamentally about typing syntax or **managing complexity and product context**. Supporters of the view argue that AI-native juniors can bypass basic syntax bottlenecks and spend their energy on real-world customer problem-solving.

***

🧩 I can do a technical deep dive into the malicious build-time payload mechanics of the `arrayref` compromised crate if you want to inspect how it escaped the compiler's sandbox.