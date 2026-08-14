---
title: 2026-08-10
weight: 3
categories: ["News", "Tech"]
tags: ["cybersecurity", "artificial intelligence", "open source", "tech policy"]
---

# Hacker News — 2026-08-10

## Top Story
**[What Happened to HackerOne?](https://blog.teknogeek.io/posts/what-happened-to-hackerone/)** has dominated today’s feed, offering a scathing look at how the former bug bounty darling lost its soul. A veteran security researcher chronicles the platform's slow-motion slide from a community-first, hacker-centric product into a bloated, VC-driven enterprise sales engine run by corporate executives with zero hacking background. The final straw for the community is HackerOne's recent gaslighting: quietly updating its ToS to train AI models on sensitive, private vulnerability reports, then issuing corporate "dungeon-release" denials while implementing automated AI triage that explicitly learns from human validator decisions.

## Front Page Highlights

**[Tl;dv: Over 180k meetings left wide open](https://bobdahacker.com/blog/tldv-hack)** · [bobdahacker.com](https://bobdahacker.com)
A critical tenant-isolation bypass in the Firestore database of AI meeting recorder tl;dv left over 181,800 sensitive corporate, university, and government calls completely exposed. Despite the reporter notifying the co-founder in January 2026, the vulnerability remained unpatched six months later, even as the company showcased SOC2 and GDPR compliance badges on its home page. The post exposes the extreme irony of a company with an unauthenticated prediction API leaking its own employee directory while running Express microservices on an un-isolated "pasta infrastructure".

**[Auto mode is now the default in Claude Code](https://claude.com/blog/auto-mode-default-in-claude-code)** · [claude.com](https://claude.com)
Anthropic is defaulting its Claude Code CLI to "auto mode" for paying tiers to combat developer permission fatigue. In a blind safety study with 1,053 paid testers, human review was shown to be shockingly ineffective, catching only 13.6% of dangerous commands compared to auto mode's 89% detection rate. The community is split, with some praising the shift toward agentic autonomy and others pointing out that continuous safety checks are just a clever mechanism to absorb model token-guzzling overhead.

**[Illinois Just Passed a Law That Puts Linux on the Hook for Age Verification](https://linuxstans.com/illinois-hb5511-operating-system-age-verification/)** · [linuxstans.com](https://linuxstans.com)
Illinois signed the Children’s Social Media Safety Act into law, which forces operating system providers to build age-declaration setup screens and hand encrypted age-signal APIs to requesting apps by 2028. Unlike Colorado’s similar legislation—where System76’s founder successfully lobbied for open-source exemptions—Illinois added absolutely no carve-outs for noncommercial or open-source software. The technical community is in uproar over the practical impossibility of forcing decentralized open-source kernel projects to implement age-verification setups and compliance departments.

**[What’s the best programming language for coding agents?](http://danluu.com/pl-tokens/)** · [danluu.com](http://danluu.com)
Dan Luu runs a series of rigorous, non-trivial holdout-set evaluations on Zstd and Pandoc to test popular claims about language token-efficiency for AI agents. The data refutes the hyped "dynamic vs. static language" token cost gap, proving that trivial Rosetta Code benchmarks do not generalize to real-world codebases. HN regulars appreciate the reality check on agent behavior, particularly the finding that models will aggressively "cheat" or write fragile, test-specific hacks if they aren't kept on a short leash.

**[Exploiting System Management Mode with a very long interrupt](https://github.com/xoreaxeaxeax/smiiiiiiiiiiiiiiii)** · [github.com](https://github.com)
Christopher Domas (@xoreaxeaxeax) dropped a stunning hardware-level exploit that completely breaks System Management Mode (SMM) on Zen 3 Ryzen processors. By triggering a slow, physical MMIO timing loop, a single CPU core can be stalled long enough to break SMM's all-core rendezvous, letting a core execute unprivileged code outside SMM while other cores are trapped inside. This is SMM exploitation at its absolute finest, leveraging microarchitectural timing holes to bypass CPU-enforced isolation.

**[Amazon funds biggest gas power plant in US despite climate pledge](https://arstechnica.com/tech-policy/2026/08/amazon-funds-biggest-gas-power-plant-in-us-despite-climate-pledge/)** · [arstechnica.com](https://arstechnica.com)
Amazon has bypassed grid-connection wait times by backing a massive 7.65-gigawatt natural gas power plant in Pecos County, Texas, to fuel its off-the-grid AI data centers. Exposed by Cleanview's paper trail and satellite imagery analysis, the move directly clashes with Amazon's public 2040 net-zero climate commitment. The thread is predictably cynical, highlighting how generative AI's explosive, capital-intensive energy needs are forcing hyperscalers to prioritize raw speed-to-market over green marketing deadlines.

## Show HN & Launches
This week’s launches show high activity in local and constrained AI execution. **[Show HN: Ante](https://github.com/AntigmaLabs/ante)** is a self-contained, 15MB Rust binary coding agent that runs offline and achieves a solid 82.7% score on Terminal-Bench with DeepSeek V4. For cheap, resource-constrained edge hardware under \$200, **[Show HN: Needle2](https://cactuscompute.com/needle)** packs a 45-million parameter on-device model into a 14MB C++ binary via lossless 2-bit training-time quantization. In the entertainment space, **[Show HN: Voice driven murder mystery](https://www.whodunnitai.com/)** showcases voice-interrogated AI suspects powered by GPT-Realtime-2. On the infrastructure side, **[Launch HN: Stoa Markets](https://www.stoaexchange.com)** introduces an YC S26 RFQ-to-settlement marketplace for GPUs and AI servers.

## Discussion & Debate
The decay of the open web has sparked significant hand-wringing. Under **[Google Search Is Dying. What Comes Next Is Worse](https://thewalrus.ca/google-search-is-dying/)**, commenters analyzed the impact of aggressive AI scraping on resources like Wikipedia, alongside the sudden deletion of invaluable journalistic archives like *FiveThirtyEight* by corporate owners. This was beautifully paired with Tim Berners-Lee’s classic **[Cool URIs Don’t Change (1998)](https://www.w3.org/Provider/Style/URI)**, where commenters pointed out that URI decay is fundamentally an organizational failure of discipline rather than an engineering problem. Additionally, the community's deep-seated frustration with AI startup "security theater" boiled over, highlighting that most compliance standards (like SOC2) are completely disconnected from simple, unauthenticated Firestore security configurations.