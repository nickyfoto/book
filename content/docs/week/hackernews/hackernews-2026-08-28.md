---
title: 2026-08-28
weight: 5
categories: ["News", "Tech"]
tags: ["open source", "web development", "security", "ai tooling", "compilers"]
---

# Hacker News — 2026-08-28

## Top Story
**[Htmx 4.0.0 has been released](https://four.htmx.org/announcements/2026-08-28-htmx-4.0.0-is-released)**, marking a major milestone for hypermedia by swapping out legacy `XMLHttpRequest` for modern `fetch()`, making attribute inheritance explicit, and bringing built-in DOM morphing to the core library. The release solidifies the framework's anti-SPA posture for long-term web development while giving engineers cleaner event architectures and streaming HTML extensions.

## Front Page Highlights

**[Just the rumour of a bug is enough to find an exploit these days](https://anil.recoil.org/notes/rumour-is-the-exploit)** · [recoil.org](https://anil.recoil.org/notes/rumour-is-the-exploit)
Anil Madhavapeddy revealed that his server was hit with targeted attack probes within ten minutes of submitting a public patch for an OCaml `cohttp` path-traversal bug. With modern frontier models capable of synthesizing viable exploits from vague security descriptions in under a minute, the timeline from disclosure to exploitation has effectively collapsed to negative days. The community reaction highlighted the unsustainable "bugonomics" facing open-source maintainers, who must endure rigorous patch validation while automated attackers exploit public repository activity in real time.

**[Select * from Internet.blogposts](https://pfrazee.leaflet.pub/3mu3p2smmis22)** · [leaflet.pub](https://pfrazee.leaflet.pub/3mu3p2smmis22)
In response to X sending cease-and-desist letters to shut down the open-source Nitter viewer, Bluesky engineer Paul Frazee argues that the walled-garden era has made traditional web APIs an evolutionary dead end. Rather than begging centralized platforms for limited, revocable endpoints, Frazee champions `atproto`'s model of treating the open web as a shared, replicated database of Personal Data Servers. The thread struck a deep chord with engineers fed up with the predictable bait-and-switch lifecycle of corporate platform APIs.

**[Luanti removed from Google Play due to baseless AI copyright notice](https://blog.luanti.org/2026/08/27/luanti-dmca-tracer-ai/)** · [luanti.org](https://blog.luanti.org/2026/08/27/luanti-dmca-tracer-ai/)
The Android app for open-source voxel game engine Luanti (formerly Minetest) was pulled from Google Play after Tracer.AI filed an automated copyright takedown on behalf of Microsoft and Minecraft. The notice cited proprietary Minecraft assets despite Luanti shipping with zero default game assets or textures, illustrating the hazards of unchecked AI brand-enforcement bots. Developers in the comments voiced widespread outrage over platform negligence, noting that automated takedowns routinely ignore statutory counter-notice timelines while paralyzing non-profit projects.

**[Bootstrappable Builds: How and Why](https://lwn.net/Articles/1088279/)** · [lwn.net](https://lwn.net/Articles/1088279/)
LWN covered Timothy Sample's FOSSY talk on the bootstrappable builds movement in GNU Guix, which seeks to eliminate hundreds of megabytes of opaque binary blobs by building entire operating systems from tiny, auditable seeds. The project specifically addresses Ken Thompson's classic "Trusting Trust" vector by replacing circular compiler dependencies with verifiable chains starting from tools like a 2.25KB Scheme interpreter. HN's technical contingent engaged in a masterclass on compiler mechanics, debating everything from Forth-based bootstrap monitors to the difficulty of verifying the Linux kernel itself.

**[Processing in Memory: DRAM Is About to Do Math](https://ben3d.ca/blog/processing-in-memory)** · [ben3d.ca](https://ben3d.ca/blog/processing-in-memory)
Samsung unveiled an LPDDR5X-PIM package at Hot Chips 2026 that unlocks 614 GB/s of internal memory bandwidth by placing arithmetic logic units directly beside DRAM banks to bypass the bus bottleneck during LLM inference. While benchmarked at triple the token generation speed for memory-bandwidth-bound GEMV workloads, the architecture relies on conventional memory controllers using an address-alignment scheme. Commenters tempered the hardware hype by dissecting the steep software barriers ahead, including incompatible GGUF k-quants, lack of OS memory-allocator support, and poor fit with grouped-query attention and MoE models.

**[Decompiling a Nintendo 64 game in 84 days](https://blog.chrislewis.au/decompiling-a-nintendo-64-game-in-84-days/)** · [chrislewis.au](https://blog.chrislewis.au/decompiling-a-nintendo-64-game-in-84-days/)
Chris Lewis detailed how a small team achieved a 100% byte-matching decompilation of *Snowboard Kids* in just 84 days, completing the feat seven times faster than its sequel by augmenting human expertise with autonomous LLM agents. By distributing work across Git worktrees and integrating compiler pass-replay diagnostics into agent loops, they successfully reconstructed standard library routines and idiosyncratic IDO compiler output. The community celebrated the project as a textbook example of using AI for high-leverage verification and tedious matching without sidelining human domain insight.

## Show HN & Launches
Developer attention in today's launches leaned heavily toward securing autonomous workflows, led by **[Show HN: Conduct](https://github.com/sseshachala/conductai)**, which provides signed, cryptographically chained guardrails to intercept LLM and MCP tool calls before execution. Similarly tackling agent sandboxing, **[Show HN: Talos](https://talos-agent.ch/)** introduced a permission kernel that sits between language models and shell execution with adversarial verification. On the infrastructure side, **[Show HN: IndexFlow](https://github.com/IndexFlowing/IndexFlow-core)** landed a lightweight Rust toolkit for parsing sitemaps and debugging technical SEO in the AI search era.

## Discussion & Debate
The comment section under the LWN bootstrappable builds feature turned into an incredible deep-dive on compiler trust, with Diverse Double Compiling pioneer David A. Wheeler and kernel veterans debating whether Forth, minimal Lisp, or breadboard 8-bit CPUs offer the only true defense against invisible backdoors. Meanwhile, a fiery debate flared over **[keyboard-driven GUIs](https://ckardaris.com/blog/2026/08/28/keyboard-driven-guis.html)**, where terminal purists and GUI defenders clashed over whether modern TUIs are ergonomic triumphs or stubborn regressions.

---
☕ *Want to dig deeper into any specific post or break down the benchmarks from the local LLM and hardware threads?*