---
title: 2026-09-13
weight: 2
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "open source", "hardware", "software engineering"]
---

# Hacker News — 2026-09-13

## Top Story
The front page was dominated by an explosive controversy surrounding AI existential risk following Anthropic researcher Jacob Coxon's resignation and public claims that AI poses a greater than 10% chance of human extinction. The event triggered intense debate across Silicon Valley, prompting Anthropic CEO Dario Amodei to propose "pacing the frontier", David Sacks to warn against lab cartels, and veteran engineers to criticize the irresponsible spread of AI doom rhetoric.

## Front Page Highlights

**[Reverse-Engineering Claude Web's MicroVM: Uncovering Anthropic's Hidden Antspace](https://aprilnea.me/en/blog/reverse-engineering-claude-code-antspace)** · aprilnea.me
A deep dive into Claude Code Web's runtime environment uncovered an unstripped 27MB Go binary containing full debug symbols and internal monorepo package structures. Beyond inspecting its Firecracker MicroVM setup, the analysis revealed "Antspace", an unannounced internal PaaS deployment protocol designed into Anthropic's platform. The technical community is closely examining how Anthropic is building a vertically integrated stack spanning model generation down to application hosting.

**[Homebrew 7.0.0](https://brew.sh/2026/09/13/homebrew-7.0.0/)** · brew.sh
Homebrew released version 7.0.0 featuring concurrent package installations, Landlock-based Linux sandboxing, a native macOS app called BrewUI, and integrated vulnerability scanning via `brew vulns`. The major release formally transitions Intel macOS support to Tier 3 and drops support for macOS 10.15 Catalina. Engineers welcomed the performance gains and Landlock integration, while Intel Mac users noted the shrinking support timeline.

**[I’m being cyberattacked by Tesla, Inc](https://dreamstation.systems/personal/tesla.html)** · dreamstation.systems
A developer operating a volunteer node in the public NTP Pool discovered thousands of exploit payloads flooding his server carrying `pool-ntp.tesla.com` headers. The source was identified as Tesla's automated Assetnote security scanner, which misidentified CNAME-resolved public NTP pool IP addresses as internal Tesla assets and began active scanning. The thread gained traction on HN as commenters discussed asset discovery blunders and the hazards of scanning dynamic CNAME targets.

**[Matt Mullenweg reportedly returns as Automattic CEO 2 days after getting booted](https://www.theverge.com/tech/994087/matt-mullenweg-automattic-ceo-return)** · theverge.com
Two days after being placed on a paid leave of absence amid board tensions, Automattic founder Matt Mullenweg announced on Slack that he had returned to full control as CEO. Mullenweg later publicly posted about the event, describing it as his fifth corporate "coup attempt". The rapid turn of events sparked wide discussion regarding board governance and corporate leadership dynamics at Automattic.

**[Why is the x86 undefined instruction called ud2? Why 2?](https://devblogs.microsoft.com/oldnewthing/20260910-00/?p=112689)** · devblogs.microsoft.com
Raymond Chen breaks down the history of x86 invalid opcodes used by compilers to trap execution in unreachable code paths. Developers historically relied on undocumented opcodes like `0F FF` and `0F B9`, until new CPU generations altered their behavior and broke software, demonstrating Hyrum's Law in practice. Intel subsequently formalized a permanently undefined instruction as `ud2`, retroactively designating earlier informal variants as `ud0` and `ud1`.

**[US Customs supervisor busted for stealing hardware from Homeland Security PCs](https://www.tomshardware.com/pc-components/us-customs-supervisor-busted-for-stealing-core-i7-cpus-ram-and-hard-drives-from-homeland-security-pcs-stolen-tech-swapped-with-inferior-hardware-and-cashed-out-on-newegg)** · tomshardware.com
An FBI investigation led to the arrest of a U.S. Customs supervisor in Maine who extracted Intel 14th Gen Core i7 CPUs, RAM, and storage from 46 Homeland Security computers. The supervisor replaced the components with low-end Pentium processors and inferior hardware, then traded the stolen parts into Newegg's trade-in program for store credit. Readers were astonished by the paper trail left behind, which included using official government emails to manage retailer shipping labels and trade-in receipts.

## Show HN & Launches
Notable hardware and software launches were led by **[JetKVM Mini](https://jetkvm.com/blog/introducing-jetkvm-mini)**, a \$39 ESP32-P4X-powered open-source IP-KVM delivering 1080p video capture, virtual media, and WebRTC streaming in a matchbox enclosure. On the machine learning front, **[CUDA for AMD on Windows](https://github.com/Speedstu/CUDA-for-AMD-Windows)** introduced a reproducible setup combining ZLUDA and ROCm/HIP to run CUDA-targeted LibTorch workloads on Radeon graphics cards. Additional projects highlighted by the community include **[TailTalk](https://github.com/FeralFirmware/TailTalk/)**, a modern async AppleTalk stack built in Rust and Tokio for networking classic Macintosh hardware, and **[Vintage Scientific Papers with LaTeX](https://github.com/Foadsf/vintage-latex)**, providing 20 standalone templates that recreate historic scientific typography and figures.

## Discussion & Debate
A major thread of debate centered on developer identity and AI-generated code, kicked off by Purplesyringa's essay **[Don’t call yourself an artisanal programmer](https://purplesyringa.moe/blog/dont-call-yourself-an-artisanal-programmer/)**, which argued that hands-on software engineering without LLMs is being unfairly labeled as a hobbyist pursuit while "vibecoding" becomes the uncritical default. This echoed Vicki Boykis's post **[Bad Code Is Kudzu](https://vickiboykis.com/2026/09/01/bad-code-is-kudzu/)**, which warned that developers must actively prune generated complexity before codebases drown under unmaintainable AI slop. In parallel, Y Combinator CEO Garry Tan sparked debate in **[Garry Tan wants US open-weight AI labs to 'distill' frontier models, too](https://techcrunch.com/2026/09/11/y-combinators-garry-tan-wants-u-s-open-weight-ai-labs-to-distill-frontier-models-too/)** by advocating that American open-weight labs should freely distill closed frontier models to prevent a single monolithic AI provider from controlling the industry.

---

💡 If you'd like, I can extract all security-focused posts from this batch or do a deeper breakdown on the reverse-engineering analysis of Anthropic's infrastructure.