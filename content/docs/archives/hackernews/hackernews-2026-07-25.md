---
title: 2026-07-25
weight: 8
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cloud infrastructure", "software engineering", "privacy"]
---

# Hacker News — 2026-07-25

## Top Story
**[IRGC claims it destroyed Amazon’s Bahrain data center](https://houseofsaud.com/irgc-claims-destroyed-amazon-bahrain-data-center/)**
It’s the ultimate "the cloud is just someone else's computer" reality check. The Islamic Revolutionary Guard Corps claims to have leveled AWS's ME-South-1 data center with cruise missiles, explicitly tying the strike to US actions against Iranian nuclear facilities. Hyperscale cloud infrastructure is now officially a military target, and the blast radius of Middle Eastern geopolitics has just hit enterprise tech stacks directly.

## Front Page Highlights

**[Engineering management after the cost of code collapsed](https://karimjedda.com/engineering-management-after-cost-of-code-collapse/)** · [karimjedda.com](https://karimjedda.com/engineering-management-after-cost-of-code-collapse/)
A sharp, highly pragmatic look at how AI actually changes engineering orgs. The author points out that while "plumbing time" has collapsed, semantic verification and accountability remain human bottlenecks. It serves as a stark warning to managers against letting teams devolve into "slop cannons" that confidently generate plausible but incorrect code at massive volume.

**[Fly.io CEO Kurt Mackey is stepping down](https://fly.io/blog/kurt-scott-money-sprites/)** · [fly.io](https://fly.io/blog/kurt-scott-money-sprites/)
Fly.io is pivoting hard to cater to AI coding agents, replacing CEO Kurt Mackey with former Docker CEO Scott Johnston. Mackey admits the company was suffering an identity crisis but is now betting the farm on "Sprites"—semi-disposable compute units tailored for agentic workflows rather than traditional, human-curated CI/CD pipelines.

**[GC and Exceptions in Wasmtime](https://bytecodealliance.org/articles/wasmtime-gc)** · [bytecodealliance.org](https://bytecodealliance.org/articles/wasmtime-gc)
A massive, years-in-the-making technical milestone for WebAssembly. Wasmtime 47 now enables Wasm GC and Exceptions by default. This finally opens the door for high-level, object-oriented languages to run efficiently on Wasm without having to bloat their binaries with embedded garbage collectors.

**[Buz – A fork of Bun using modern Zig](https://ziggit.dev/t/buz-a-drop-in-replacement-for-bun-using-modern-zig-with-sub-1s-incremental-builds/16891)** · [ziggit.dev](https://ziggit.dev/t/buz-a-drop-in-replacement-for-bun-using-modern-zig-with-sub-1s-incremental-builds/16891)
Prime HN drama. A developer is forking Bun into modern Zig, claiming to have already ripped out 11,000 lines of dead code from the original project. The kicker? They consider the original codebase to be "slop," refuse to accept human PRs for now, and are relying exclusively on LLMs to untangle and rewrite the subsystems. 

**[Android May Soon Restrict On-Device ADB](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)** · [kitsumed.github.io](https://kitsumed.github.io/blog/posts/android-may-soon-restrict-on-device-adb/)
Google is reportedly moving to block loopback ADB connections (`127.0.0.1`) to prevent privilege escalation exploits on Android. While justifiable for general security, power users are alarmed because this change will completely break popular on-device tweaking and automation tools like Shizuku.

**[PyPI Blog: Releases now reject new files after 14 days](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)** · [blog.pypi.org](https://blog.pypi.org/posts/2026-07-22-releases-now-reject-new-files-after-14-days/)
A solid supply chain security move. PyPI is locking down old releases so compromised maintainer accounts or CI pipelines can't quietly poison long-stable packages. This permanently closes a major attack vector related to mutable references in GitHub Actions.

## Show HN & Launches

**[Running a 28.9M parameter LLM on an $8 microcontroller](https://github.com/slvDev/esp32-ai)**
A brilliant piece of embedded hacking. By applying Google's "Per-Layer Embeddings" concept to an ESP32-S3, the author fit a 28M parameter model entirely in flash memory. It achieves roughly 9 tokens per second on a device with only 512KB of SRAM, obliterating previous constraints on microcontroller ML.

**[Proxmox -> Share your host’s Bluetooth with a VM over the network](https://github.com/lucid-fabrics/proxmox-bluetooth)**
A clever workaround for a notorious homelab headache. Intel Bluetooth chips physically wipe their firmware when passed through to a VM, breaking wireless controllers for gaming distros like Bazzite. This project seamlessly bridges the host's Bluetooth over the network so the VM sees a normal adapter.

**[Yorishiro – a macOS terminal where AI agents live](https://github.com/sktkkoo/Yorishiro)**
A novel "Presence Harness" that gives your AI agent (like Claude Code) a physical 3D avatar that inhabits your terminal. The avatar reacts instantly to PTY output and uses your screen's lighting as environmental cues when it needs your input.

## Discussion & Debate

**[Memory Safety Absolutists](https://itsallaboutthebit.com/memory-safety-absolutists/)**
The eternal memory safety holy war flares up again, this time catalyzed by the new Fil-C compiler for C/C++. The author pushes back hard against critics who argue Rust is inherently unsafe because of its `unsafe` escape hatch, pointing out the absolute pragmatism of Rust's proven 1000x reduction in vulnerabilities compared to legacy systems languages.

**[The Dark Night of Mathematics](https://kirwinhampshire.substack.com/p/the-dark-night-of-mathematics)** and **[General Resolution: LLM Usage in Debian](https://www.debian.org/vote/2026/vote_002)**
Two threads capturing peak existential angst over generative AI. In the first, mathematicians are suffering spiritual crises as LLMs begin spitting out novel proofs, fearing the permanent loss of human mathematical discovery. Concurrently, the Debian community is fiercely debating a total ban on LLM-assisted contributions to protect the project's copyright hygiene, stability, and volunteer fabric.

**[The growing vigilante movement to knock out Flock surveillance cameras](https://www.theguardian.com/us-news/ng-interactive/2026/jul/25/flock-surveillance-cameras)**
A fascinating look at analog pushback against mass surveillance. Armed with tape, wire cutters, and 3D-printed blockers, a decentralized movement of vigilantes is systematically blinding automated license plate readers (ALPRs) across the US. Comments focus on the balance between public safety and the creeping normalization of warrantless, nationwide vehicle tracking.