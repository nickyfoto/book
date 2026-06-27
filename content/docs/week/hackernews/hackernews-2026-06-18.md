---
title: 2026-06-18
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "software engineering", "hardware"]
---

# Hacker News — 2026-06-18

## Top Story
Leaked audited financials reveal that OpenAI is bleeding cash at a terrifying rate, booking a $20.92 billion operating loss in 2025 despite ballooning revenues of $13.07 billion. R&D and massive inference compute costs are vastly outpacing subscriptions, raising serious questions about the long-term sustainability of scaling laws without a massive structural shift in how we price intelligence.

## Front Page Highlights

**[I found 10k GitHub repositories distributing Trojan malware](https://orchidfiles.com/github-repositories-distributing-malware/)** 
A solo developer successfully bypassed GitHub's API limits to uncover 10,000 repositories pushing malware via malicious zip links. The attackers cleverly exploit trust by perfectly cloning existing repos—including the full commit history and contributor list—and simply updating the README every few hours to evade detection algorithms.

**[Tesco moving 40k server workloads off VMware amid Broadcom’s abusive conduct](https://arstechnica.com/information-technology/2026/06/tesco-moving-40000-server-workloads-off-vmware-amid-broadcoms-abusive-conduct/)** 
Broadcom's post-acquisition strategy of squeezing massive enterprise customers is triggering an exodus. Tesco is suing over breach of contract after Broadcom demanded a 175% price hike and forced subscription models on perpetually licensed software, pushing the retail giant into a highly risky infrastructure migration.

**[A robot is sprinting towards you. Do you want it running on Claude or Grok?](https://openrouter.ai/blog/insights/royale-last-agent-standing/)** 
A fascinating experiment dropped 11 LLMs into a 2D battle royale simulator to observe emergent tactical behaviors. Grok won 43% of the matches by aggressively ramming opponents with cars, while Claude's safety alignment manifested as a fatal flaw in a zero-sum environment—repeatedly trying to negotiate truces and broadcasting its location.

**[AMD silently removes memory encryption from consumer Ryzen CPUs](https://www.tomshardware.com/pc-components/cpus/amd-silently-removes-memory-encryption-from-consumer-ryzen-cpus-leaving-users-unaware-that-they-may-be-vulnerable-security-feature-vanishes-after-newer-agesa-firmware-amd-engineers-go-radio-silent-when-pressed-about-the-change)** 
A Linux power user noticed that AMD quietly killed Transparent Secure Memory Encryption (TSME) in a recent AGESA firmware update for non-Pro chips. AMD engineers went completely silent when pressed on GitHub, leaving the community debating whether this is a firmware bug or a hostile product segmentation strategy.

**[I restarted a 10 year old Xeon 174 times to delete 12 flags and gain 4 TPS](https://point.free/blog/delete-12-flags/)** 
A rigorous ablation study of `llama.cpp` performance running Gemma 4 on older hardware. The author painstakingly proves that the community is cargo-culting startup flags: half of them do absolutely nothing, and features like speculative decoding actively tank performance on long-context tasks.

**[Unity vs. Floating Point](https://aras-p.info/blog/2026/06/11/Unity-vs-floating-point/)** 
Aras Pranckevičius dives into the surprisingly complex ways Unity handles math functions, revealing that the Mono runtime converts single-precision floats to doubles for intermediate calculations, severely degrading performance. To get actual native speeds, you have to bypass standard libraries and rely strictly on Burst and `Unity.Mathematics`.

## Show HN & Launches
* **[Show HN: We built an 8-bit CPU as 2nd year EE students](https://github.com/c0rRupT9/STEPLA-1)**: A fantastic hardware project where students built a fully functional 8-bit Harvard architecture CPU entirely out of individual 74-series logic gates in Logisim, eschewing the usual microcode EEPROMs for hardwired combinational logic.
* **[TesterArmy](https://tester.army)**: A YC P26 launch offering AI agents that navigate web and mobile apps to catch regressions visually. A compelling alternative to maintaining brittle Cypress or Playwright test suites.
* **[MicroUI](https://github.com/rxi/microui)**: A portable, immediate-mode UI library written in just ~1100 lines of ANSI C, operating entirely within a fixed-size memory region with zero allocations. 
* Cursor has officially acquired the open-source coding agent **[Continue](https://www.continue.dev/)**, promising to keep their commitment to amplifying developers rather than automating them.

## Discussion & Debate
The front page is currently roasting Microsoft over the WebView2 bloat of the "New" Outlook, which takes upwards of 10 seconds to load a specific email from a system notification. Running a multi-process Chromium wrapper that eats 600MB of RAM at idle just to check your inbox is driving power users back to the classic Win32 app, highlighting the industry's frustrating pivot away from native performance.

Meanwhile, serious drama is unfolding in the European tech policy sphere regarding **[W Social](https://blog.elenarossini.com/w-social-public-institutions-and-the-theater-of-european-digital-sovereignty/)**. Shortly after major EU institutions migrated their accounts to the platform under the guise of "digital sovereignty," the Bluesky fork quietly scrubbed its public repositories and seemingly went closed-source. The community is fiercely debating the hypocrisy of backing a venture capital-funded platform heavily tied to identity verification and Big Tech executives over genuinely open federated alternatives.