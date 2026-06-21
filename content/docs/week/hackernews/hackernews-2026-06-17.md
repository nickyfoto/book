---
title: 2026-06-17
weight: 3
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "gaming", "cybersecurity"]
---

# Hacker News — 2026-06-17

## Top Story
**[Leaked financial docs show OpenAI is losing billions of dollars a year](https://arstechnica.com/ai/2026/06/leaked-financial-docs-show-openai-is-losing-billions-of-dollars-a-year/)**
OpenAI's leaked 2025 financials reveal a staggering $20.92 billion operating loss on $13.07 billion in revenue, driven largely by massive compute and R&D costs paid out to Microsoft. As the company prepares for an impending IPO, this leak highlights the astronomical burn rate required to sustain frontier AI models, raising questions about whether compounding scale can outpace market patience before capital runs dry. 

## Front Page Highlights

**[U.S. Science Is in Chaos](https://www.scientificamerican.com/article/americas-compact-between-science-and-politics-is-broken/)**
Massive budget cuts spearheaded by the Department of Government Efficiency (DOGE) and strict new political filters have thrown federal research grants into unprecedented turmoil. With nearly 4,000 NASA employees taking buyouts and $1.4 billion in NIH and NSF grants currently frozen, researchers are warning of a generational collapse in the post-WWII compact that built American scientific dominance. 

**[Has AI already killed self-help nonfiction books?](https://tim.blog/2026/06/12/has-ai-already-killed-nonfiction/)**
Tim Ferriss unpacks a brutal 57% year-over-year drop in his own book sales for 2026, attributing the collapse directly to the ubiquity of LLMs. He argues that prescriptive "how-to" nonfiction is the canary in the coal mine, as readers abandon 600-page books in favor of free, instantly personalized protocols spit out by AI chatbots.

**[Correlated randomness in Slay the Spire 2](https://tck.mn/blog/correlated-randomness-sts2/)**
A fascinating reverse-engineering deep dive into how C#'s default `System.Random` implementation causes predictable RNG correlations in the *Slay the Spire 2* beta. Because the random outputs are linear relative to the absolute value of their seeds, savvy players can use early game events—like Neow's starting relics—to perfectly predict future drops, enemy targeting patterns, and shop inventories.

**[Tesco moving 40k server workloads off VMware amid Broadcom’s abusive conduct](https://arstechnica.com/information-technology/2026/06/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct/)**
Following Broadcom's acquisition of VMware, UK retail giant Tesco is migrating 40,000 workloads after facing what it claims in a lawsuit is a "manifestly unfair" 175% price hike. It's the latest high-profile fallout from Broadcom's aggressive monetization strategy, which is forcing massive enterprises to undertake risky, rushed migrations to alternative virtualization stacks.

**[Humiliating IIS servers for fun and jail time](https://mll.sh/humiliating-iis-servers-for-fun-and-jail-time/)**
A highly practical guide to bug bounty hunting on Microsoft IIS web servers, detailing methods to bypass Web Application Firewalls (WAFs) via HTTP Parameter Pollution and abuse legacy 8.3 shortname tilde enumeration. The author demonstrates how exploiting these misconfigurations can lead to exposing `web.config` machine keys, enabling highly reliable remote code execution.

**[Why Can’t Walnut Creek Build 3 Bedroom Apartments with a Playground?](https://kevin.burke.dev/kevin/walnut-creek-single-stair/)**
An urban planning critique of modern apartment design constraints in California. The author points out that strict minimum parking requirements and dual-staircase building codes result in dark, "double loaded corridor" buildings, making it financially impossible to build affordable, sunlit, multi-bedroom family apartments. 

**[Stop Killing Games fails to secure EU law despite 1.3M signatures](https://www.dexerto.com/gaming/stop-killing-games-fails-to-secure-eu-law-despite-1-3m-signatures-3376431/)**
The European Commission officially rejected a massive citizen initiative that demanded legal obligations for publishers to keep discontinued video games playable offline or via private servers. Citing IP rights and cybersecurity concerns, the EU opted instead to push for an unenforceable industry "code of conduct," dealing a significant blow to digital preservation advocates.

## Show HN & Launches
* **[Show HN: Adam (YC W25) – Open-Source AI CAD](https://github.com/Adam-CAD/CADAM)**: An impressive browser-based tool that translates natural language and uploaded images into fully parametric 3D CAD models (OpenSCAD, STL, DXF) using a local WebAssembly engine.
* **[Show HN: cuTile Rust: Safe, data-race-free GPU kernels in Rust](https://github.com/nvlabs/cutile-rs)**: NVlabs released an experimental framework for writing memory-safe, idiomatic Rust kernels that hit 7 TB/s for element-wise operations and 2 PFlop/s for GEMM on NVIDIA B200 hardware.
* **[Show HN: Inkwash, a watercolor sketching app and explanation](https://johnowhitaker.github.io/inkwash/about)**: A beautiful WebGL fluid simulation that accurately models paper wetness, pigment chromatography, and Gaussian splat strokes in real time directly in the browser.
* **[Show HN: Capacitor Alarm Clock](https://github.com/ArcaEge/capacitor-alarm-clock)**: A highly impractical, ESP32-powered alarm clock that wakes you up by purposefully overloading and violently exploding a capacitor.

## Discussion & Debate
* **[A robot is sprinting towards you. Do you want it running on Claude or Grok?](https://openrouter.ai/blog/insights/royale-last-agent-standing/)**: A developer dropped 11 LLMs into a 2D battle royale game. Grok 4.1 Fast won 43% of the matches due to its ruthless car-ramming strategies, while Claude Sonnet 4.6 repeatedly got eliminated trying to negotiate truces. It's sparking a great HN debate on the "alignment tax"—how training for safety and helpfulness actively degrades agentic performance in zero-sum, adversarial environments.
* **[AI demands more engineering discipline. Not less](https://charitydotwtf.substack.com/p/ai-demands-more-engineering-discipline)**: Charity Majors argues that AI turning code generation into a zero-cost commodity mirrors the DevOps shift toward immutable infrastructure. The community is fiercely debating her premise that raw code should become a disposable "materialized view of understanding," which would shift the true engineering bottleneck away from writing syntax and squarely onto architectural design and production validation.