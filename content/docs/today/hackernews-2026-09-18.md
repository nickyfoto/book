---
title: Hacker News
weight: 15
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "systems programming", "computer architecture"]
---

# Hacker News — 2026-09-18

## Top Story

**[Hacking OpenAI](https://www.hacktron.ai/blog/hacking-openai)** · hacktron.ai
Security researchers chained an unpatched `libheif` heap buffer overflow inside Discourse with OpenAI's SSO authentication flow to achieve remote code execution on OpenAI's community forum and take over internal ChatGPT/Codex accounts. The exploit—developed using **Claude Opus 5** in under four hours—enabled the team to open a pull request inside OpenAI's internal GitHub monorepo before immediately disclosing the bug for a \$6,500 bounty.

---

## Front Page Highlights

**[ZCode, the GLM coding agent, silently uploads your Git history](https://tokenstead.ai/guides/zcode-silent-git-history-upload)** · tokenstead.ai
Developer **ferstar** reverse-engineered Z.ai's ZCode desktop app and discovered that the editor silently packages, encrypts, and POSTs the user's entire workspace to Alibaba Cloud (Aliyun OSS). The payload includes complete `.git` commit histories, LFS caches, and reflogs—exposing deleted API keys and unpushed branches—while completely ignoring privacy toggles in the UI. The community discussion highlighted the growing danger of closed-source desktop wrappers around open-weight models shipping with hidden cloud telemetry pipelines.

**[Telstra outage: The night a network decided the year was 2006](https://www.netnod.se/blog/telstra-outage-night-network-decided-year-was-2006)** · netnod.se
An independent investigation into Australia's major July 2026 Telstra outage revealed that a single rebooted GPS receiver in Melbourne suffered a 1,024-week rollover bug and reset its date to 2006. Because NTP peering and missing architectural controls promoted this chassis to a top-tier Stratum 1 reference, the bad timestamp propagated nationwide, causing 5G TDD cells to jam each other and knocking out voice calls, emergency services, payment terminals, and train systems. Engineers in the comments analyzed how emergent peer-to-peer timing topologies can silently undermine hardcoded infrastructure resilience.

**[Microsoft exec called AI scraping 'the largest theft of labor in human history'](https://techcrunch.com/2026/09/17/microsoft-exec-called-ai-scraping-the-largest-theft-of-labor-in-human-history-new-unredacted-filings-reveal/)** · techcrunch.com
Unredacted court filings from *The New York Times* copyright lawsuit revealed that top Microsoft executives privately characterized AI training practices as theft and acknowledged that generative AI poses an existential threat to news publishers. Internal Microsoft data showed Copilot search summaries caused click-through rates for news domains to plunge by up to 93%, creating a self-destructive "doom loop" for web training data. The thread focused heavily on Satya Nadella's deposition, where he conceded under oath that paywalled content should be explicitly licensed before being scraped.

**[How I vibed a proof of Conway's conjecture in Lean using AI](https://gaearon.github.io/conway-refinement/)** · gaearon.github.io
React co-creator **Dan Abramov** spent a month and roughly 40 billion tokens steering Claude and ChatGPT agents to construct a formal Lean 4 proof of John Conway's 50-year-old refinement conjecture on surreal numbers. Operating with minimal advanced mathematical background, Abramov relied on multi-agent adversarial reviews, automated Mermaid diagram proof maps, and Lean's compiler checks to filter out AI hallucinations. The post sparked intense debate over whether LLM-guided formal verification engines will democratize pure mathematics for non-experts.

**[The Scourge of x86 Emulation](https://fex-emu.com/Scourge-of-emulation/)** · fex-emu.com
The developers behind **FEX-Emu** published a deep dive into the engineering hurdles of emulating the strict x86 Total Store Ordering (TSO) memory model on ARM's weakly ordered architecture. The article details how unaligned split-locks trigger latency spikes of up to 458x and how writing to write-combined GPU memory suffers up to an 800x bandwidth penalty under ARM release-store instructions. Technical commenters commended Apple's hardware-level TSO toggle on M-series chips while lamenting the lack of standardized unaligned atomic support across consumer ARM SoCs.

**[Subnormal floating-point numbers are expensive on Intel processors](https://lemire.me/blog/2026/09/15/subnormal-floating-point-numbers-are-expensive-on-intel-processors/)** · lemire.me
**Daniel Lemire** benchmarked IEEE 754 subnormal floating-point operations across modern server and desktop CPUs, demonstrating that Intel Granite Rapids and Emerald Rapids suffer massive 15x–40x performance slowdowns when handling subnormal values. In contrast, AMD Zen 5, AWS Graviton 5, and Apple M4 Max compute subnormals natively in hardware with near-zero latency penalty. The discussion unpacked why graphics and ML developers historically enable flush-to-zero flags to bypass Intel microcode traps.

**[Apple detectives solved mystery of ancient tree and rewrote the history of fruit](https://www.scientificamerican.com/article/how-apple-detectives-solved-the-mystery-of-an-ancient-tree-and-rewrote-the-history-of-fruit/)** · scientificamerican.com
Tree-fruit geneticists and Maine apple historians used single-nucleotide polymorphism (SNP) DNA fingerprinting to match gnarled, centuries-old farm trees to an empty "unknown founder" node in the North American apple pedigree. The analysis confirmed the living trees are exact clones of *Drap d'Or de Bretagne* ("Brittany's cloth of gold"), a lost French cultivar documented in 1628 and brought across the Atlantic by early settlers. Readers applauded this fascinating cross section of archival historical research, homesteading lore, and modern genomic sequencing.

---

## Show HN & Launches

- **[Goose](https://github.com/aardappel/goose/tree/master)** · github.com
  Created by Wouter van Oortmerssen (author of Lobster), Goose is a memory-safe systems language that eliminates both garbage collection and lifetime annotations by placing all dynamic data on compiler-managed data stacks. Early benchmarks show it executing 1.16x faster than C++ and 1.12x faster than safe Rust, while being implemented almost entirely using AI agent workflows.

- **[Delta](https://zed.dev/blog/delta-public-beta)** · zed.dev
  The team behind the Zed editor launched the public beta of Delta, a multiplayer coding environment tailored for AI agent collaboration. Built on DeltaDB, it tracks real-time incremental code deltas rather than git commits, allowing teams to disable traditional pull requests in favor of continuous multi-user agent threads.

- **[Code Scans by Devin](https://devin.ai/blog/introducing-code-scans)** · devin.ai
  Cognition introduced Code Scans for Devin, utilizing an "Agentic MapReduce" architecture (Plan, Shard, Map, Reduce) to execute codebase-wide audits for dead code, database N+1 queries, performance bottlenecks, and SEO defects.

- **[Ask A Monk](https://askamonk.online)** · askamonk.online
  A minimalist digital sanctuary built for sharing deep, open-ended questions anonymously and receiving human replies from strangers.

---

## Discussion & Debate

- **[Bend 2 and the Vibe-Coding Trap](https://blog.liampwll.com/posts/bend_vibe_coding/)** · blog.liampwll.com
  Liam Powell sparked a major thread on the pitfalls of "vibe-coding," arguing that LLM-driven development encourages engineers to construct bloated, reinvented systems without surveying established computer science literature. Pointing to Bend 2—where an LLM generated 442 lines of proof for a basic 2D game rule—Powell demonstrated how 50 lines of Ada/SPARK code achieve the exact same formal verification without needing AI.

- **[Claude Code from Source](https://claude-code-from-source.com/)** · claude-code-from-source.com
  A team extracted the full TypeScript source code of Anthropic's Claude Code CLI from shipped npm `.js.map` source maps and deployed 36 parallel AI agents to document and explain the entire architecture as a book in six hours. Commenters debated source map sanitization in commercial npm packages alongside the sheer speed of multi-agent technical synthesis.

- **[Pre-Greek: The lost language hidden within Ancient Greek](https://linguisticdiscovery.com/posts/pre-greek/)** · linguisticdiscovery.com
  A deep linguistic analysis explored ~1,000 Ancient Greek words—including *thálassa* (sea), *labyrinthos*, *hyacinth*, and names like *Odysseus* and *Athens*—that lack Indo-European roots. The comment section turned into a fascinating discussion on substrate languages of Aegean Neolithic farmers and Minoan adstrate trade leaving a permanent fossil record inside Classical Greek.

---

💡 **Want to dig deeper into any of these threads?** I can synthesize a detailed breakdown on the **x86 vs. ARM TSO emulation mechanics**, summarize the technical controversy around **Bend 2 vs. SPARK/Ada**, or pull out the exact **ZCode telemetry analysis**. What would you like to explore next?