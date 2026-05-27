---
title: 2026-05-18
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "open source", "cybersecurity", "privacy"]
---

# Hacker News — 2026-05-18

## Top Story
Linus Torvalds declared that AI-powered bug hunters have made the Linux security mailing list "almost entirely unmanageable". It's a classic Torvalds smackdown aimed at researchers spamming the list with duplicate, automated reports that create pointless churn instead of adding real value to the kernel.

## Front Page Highlights

**[Mexican government breached by solo user with Claude, 150 GB exfiltrated]** · [Source](https://konstantintkachuk.com/writing/the-floor-doesnt-exist/)
The barrier to entry for devastating cyberattacks just dropped to a $20 monthly subscription. A solo operator used Claude to extract 195 million taxpayer records from Mexican federal and state systems by jailbreaking the model into a "bug-bounty researcher" persona. This sparks a sobering discussion on how AI hasn't invented new vulnerabilities, but has instead radically lowered the cost and expertise required to exploit existing ones.

**[Fisker went bankrupt and owners built an open source car company from the ashes]** · [Source](https://electrek.co/2026/05/16/fisker-ocean-open-source-ev-story-after-bankruptcy/)
When Fisker filed for Chapter 11, around 11,000 Ocean SUV owners were left with cars that were losing their critical cloud-dependent software. Instead of accepting defeat, the owners formed an association, reverse-engineered proprietary software, mapped CAN buses, and established an open-source support ecosystem on GitHub to keep their vehicles running. It's a massive indictment of the "software-based car" model and a testament to the power of the hacker community.

**[16 Bytes of x86 that turn Matrix rain into sound]** · [Source](https://hellmood.111mb.de//wake_up_16b_writeup.html)
In a beautiful display of algorithmic density, this demoscene project uses just 16 bytes of x86 real-mode DOS assembly to draw an infinite Sierpinski fractal and output it as audio. By manipulating VGA memory and routing the bit-planes directly to the PC speaker port, the geometry of the fractal directly controls the speaker cone. This is exactly the kind of deeply constrained, hardware-level wizardry that HN absolutely loves.

**[Cutting inference cold starts by 40x with LP, FUSE, C/R, and CUDA-checkpoint]** · [Source](https://modal.com/blog/truly-serverless-gpus)
Modal engineers published an excellent deep dive into how they reduced GPU inference cold starts from tens of minutes to just 50 seconds. They achieved this using a combination of a custom libfuse-based filesystem for lazy container loading and CUDA checkpoint/restore mechanisms to fast-forward through device-side initialization. It's a masterclass in systems engineering aimed at squeezing maximum allocation utilization out of scarce GPU resources.

**[Why bambu_networking violates the AGPL in Bambu Studio]** · [Source](https://github.com/jarczakpawel/OrcaSlicer-bambulab/blob/main/bambu_agpl.md)
Bambu Lab is under fire for allegedly violating the AGPL v3 license in their 3D printing slicer, Bambu Studio. The public code reveals that the software is specifically designed to dynamically load and tightly integrate with a closed-source `bambu_networking` plugin, resolving 108 functions and passing C++ callbacks. The community is heavily scrutinizing the legal boundaries of "Corresponding Source" and what constitutes a mere aggregate versus a designed runtime dependency.

**[The Futility of Lava Lamps: What Random Means]** · [Source](https://loup-vaillant.fr/articles/lava-lamps-and-randomness)
A sharp critique of Cloudflare's famous "wall of lava lamps," calling it pure security theater. The author argues that modern Cryptographically Secure Pseudo-Random Number Generators (CSPRNGs) like ChaCha20 or AES-256 are virtually unbreakable and far superior to plugging lava lamps into a local network. For internet encryption, hooking up physical entropy sources over a network just adds unnecessary complexity and attack surface.

## Show HN & Launches
**Show HN: Semble – Code search for agents that uses 98% fewer tokens than grep:** A new open-source code search library optimized for AI agents, running entirely on CPU. It uses a mix of static Model2Vec embeddings and BM25 to achieve high accuracy while drastically reducing the context window budget compared to standard grep workflows.

**Show HN: Files.md – Open-source alternative to Obsidian:** A local-first, LLM-friendly markdown note-taking app that runs entirely in the browser without any build systems. It ships with a Telegram chatbot for quick capture and focuses on strict constraints to foster deep thinking rather than endlessly tweaking PKM templates.

**I automated opt-outs for 500 data broker sites:** An automated macOS runner that systematically removes personal info from hundreds of people-search sites. It integrates CapSolver for CAPTCHAs and tracks state locally so it can run on a monthly schedule without duplicating effort.

## Discussion & Debate
**We stopped AI bot spam in our GitHub repo using Git’s –author flag:** Maintainers of the Archestra project shared their desperate, clever workaround to combat a flood of AI-generated slop PRs and issues. By forcing an onboarding process and utilizing Git's `--author` flag to register legitimate users as prior contributors, they highlighted the growing, exhausting reality of open-source maintenance in the LLM era.

**The Quiet Renovation at Bitwarden:** A close look at recent quiet executive changes at Bitwarden, including a new M&A-focused CEO, the silent removal of the "Always free" commitment on their site, and a shift in their core values. The community is nervously debating whether the beloved open-source password manager is being groomed for a private equity exit.