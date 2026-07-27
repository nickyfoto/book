---
title: 2026-07-24
weight: 2
categories: ["News", "Tech"]
tags: ["artificial intelligence", "security", "open source", "software engineering", "networking"]
---

# Hacker News — 2026-07-24

## Top Story
The Codeberg drama is tearing the open-source community apart after the platform updated its terms of service to outright ban projects featuring "heavy use of LLMs" or cryptocurrency. It's a massive ideological line in the sand that has triggered fierce debate; critics are arguing that vague, unenforceable bans will inevitably lead to malicious witch hunts, while proponents believe it is a necessary quarantine against the flood of AI-generated slop. The controversy is sparking a new exodus as developers question the long-term reliability of democratic, association-run infrastructure.

## Front Page Highlights

**[I got into YC by hacking it](https://obaid.wtf/jotbook/2026/07/18/how-i-got-into-yc-by-hacking-it.html)** · obaid.wtf
Y Combinator quietly rolled out an automated agent called Paxel to score the codebases of 1.2 million applicants. A developer realized the API lacked an HMAC signature for the grading fields, allowing anyone to intercept the request and easily forge a "Top 1%" evaluation. To their credit, YC patched the vulnerability within hours of public disclosure and rewarded the hacker with an invite to Startup School.

**[IRGC Claims It Destroyed Amazon’s Bahrain Data Center](https://houseofsaud.com/irgc-claims-destroyed-amazon-bahrain-data-center/)** · houseofsaud.com
The Islamic Revolutionary Guard Corps claims it leveled an AWS data center in Bahrain using cruise missiles, which marks a terrifying escalation where commercial cloud infrastructure is now being treated as a legitimate military target. If confirmed, this is the third kinetic attack on this specific facility since March, highlighting the extreme physical fragility of the multi-billion-dollar AI build-out currently happening in the Gulf.

**[Why Software Factories Fail](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/wsff.md)** · github.com/humanlayer
A sharp reality check on the "lights-off" AI software factory hype. The author points out that relying entirely on coding agents without human review is failing spectacularly because current models fundamentally lack the ability to maintain long-term software architecture. It is a strong argument that until benchmarks can evaluate for system design and maintainability rather than just pass/fail test execution, human-in-the-loop review remains mandatory to avoid production disasters.

**[My security camera shipped a GitHub admin token in its login page](https://hhh.hn/hanwha-github-token/)** · hhh.hn
A reverse-engineering exercise on Hanwha Vision security camera firmware uncovered an active GitHub admin token duplicated across 30 files, caused by a careless Vite build process dumping the entire CI environment into the production artifact. The researcher also discovered hardcoded IP addresses assigned to the US Department of Defense, raising serious questions given the company's ties to weapons manufacturing. 

**[Designing an Ethernet Switch ASIC](https://essenceia.github.io/projects/ethernet_switch_asic/)** · essenceia.github.io
An incredibly impressive deep dive from a solo engineer building a fully open-source, 3-port, 100 Mbps cut-through Ethernet switch ASIC from scratch. Because they are taping it out via the Tiny Tapeout shuttle, they had to ruthlessly optimize for area density and bypass the lack of an analog frontend by designing an RMII interface to connect to external PHY chips.

**[Government orders GitHub to remove Bluetooth-based chat app Bitchat](https://www.thehindu.com/news/national/government-orders-github-to-remove-bluetooth-based-chat-app-bitchat-over-security-concerns-jack-dorsey/article71262049.ece)** · thehindu.com
The Indian government has forced Microsoft to take down Jack Dorsey's decentralized messaging app, Bitchat, from GitHub. The app, which establishes peer-to-peer Bluetooth mesh networks without relying on centralized servers, was heavily utilized by protesters to bypass state-mandated internet shutdowns, making it a nightmare for lawful interception.

**[BGP ORIGIN attribute manipulation and its impact on the Internet](https://blog.cloudflare.com/bgp-origin-attribute/)** · blog.cloudflare.com
Cloudflare exposes a massive, silent shift in internet routing: roughly 70% of observed BGP routes are manipulating the ORIGIN attribute to attract traffic. Tier-1 transit providers are routinely rewriting ORIGIN values to IGP to game the BGP path selection algorithm and hijack routing preference, turning route selection into a revenue-driven arms race that completely breaks RFC compliance.

## Show HN & Launches
**[Claude Opus 5](https://www.anthropic.com/news/claude-opus-5)**: Anthropic dropped their new frontier model today, claiming it achieves near-Fable 5 intelligence for software engineering tasks at half the cost. They also quietly introduced a beta API feature allowing mid-conversation tool changes without invalidating the prompt cache.

**[Flux 3](https://bfl.ai/blog/flux-3)**: Black Forest Labs released a unified multimodal model that jointly learns across image, video, and audio to build a better representation of world physics. They've also partnered with Mimic Robotics to train FLUX-mimic, successfully extending the backbone's world knowledge into physical action prediction for robotics.

**[Show HN: Claude-thermos keeps your Claude session warm for you](https://github.com/izeigerman/claude-thermos)**: A brilliant local reverse proxy that prevents Anthropic’s prompt cache from silently expiring while your main agent waits on a subagent. By spoofing cheap 1-token "warm" requests before the 5-minute TTL hits, it saves users a massive 20% "tax" on re-encoding conversation history.

**[Buz – A fork of Bun using modern Zig](https://ziggit.dev/t/buz-a-drop-in-replacement-for-bun-using-modern-zig-with-sub-1s-incremental-builds/16891)**: An absolute mad-science project that forked Bun right before its Rust rewrite, moving the entire build graph into `build.zig` to achieve sub-second incremental builds. The author is using LLMs to aggressively rip out 11,000 lines of dead code and is explicitly refusing human contributions until the 600K lines of inherited "AI slop" are made sane.

## Discussion & Debate
The honeymoon phase of "vibe coding" is crashing hard today. Across several threads, senior engineers are sounding the alarm that the widespread adoption of AI coding agents is accelerating software rot and creating unmaintainable architectures. The prevailing sentiment is that while LLMs are great for bootstrapping generic boilerplate, trusting them to execute unsupervised codebase-wide refactors is resulting in fragile, logic-blind systems that are impossible for human maintainers to untangle when production inevitably breaks.