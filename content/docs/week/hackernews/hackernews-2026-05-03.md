---
title: 2026-05-03
weight: 4
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cryptography", "software engineering", "cybersecurity"]
---

# Hacker News — 2026-05-03

## Top Story
A major breakthrough in quantum computing and cryptography has the community debating the ethics of open science. Researchers developed a more efficient implementation of Shor's algorithm that cuts the memory needed to break 256-bit elliptic-curve cryptography by a factor of 20. However, citing security concerns, they refused to publish the actual quantum circuit, opting instead to release a machine-verifiable zero-knowledge proof demonstrating they possess the knowledge.

## Front Page Highlights

**[A Couple Million Lines of Haskell: Production Engineering at Mercury](https://blog.haskell.org/a-couple-million-lines-of-haskell/)**
Fintech company Mercury successfully maintains over 2 million lines of Haskell with a team of generalists who largely learned the language on the job. The post dispels academic purity myths, arguing that purity in production is a boundary to contain mutation and side effects, not a strict property of the language itself. The author highlights how Haskell's type system encodes crucial operational lore that outlasts employee churn, ensuring safe execution paths remain the path of least resistance.

**[Denuvo has been cracked in all single-player games it previously protected](https://www.tomshardware.com/video-games/pc-gaming/denuvo-has-been-bypassed-in-all-single-player-games-it-previously-protected-2k-games-and-denuvo-reportedly-retaliate-with-mandatory-14-day-online-checks)**
The infamous anti-tamper DRM Denuvo has effectively been bypassed across its entire single-player catalog. Crackers utilized a hypervisor-based bypass requiring users to disable Core Isolation and Driver Signature Enforcement, posing a significant security risk for gamers willing to install pirate kernel-level drivers. In retaliation, Denuvo and 2K Games implemented a mandatory 14-day online check for several titles, sparking the usual backlash about punishing paying customers.

**[Bad Connection: Global telecom exploitation by covert surveillance actors](https://citizenlab.ca/research/uncovering-global-telecom-exploitation-by-covert-surveillance-actors/)**
A fascinating and terrifying Citizen Lab report details how commercial surveillance vendors are exploiting global SS7 and Diameter mobile signaling protocols. Attackers are spoofing operator identities and manipulating routing paths to seamlessly ping target devices and execute zero-click SIM card exploits via binary SMS messages. Because these protocols inherently lack authentication and rely on peer-to-peer trust, these "ghost operators" can persist undetected for years.

**[Utah to hold websites liable for users who mask their location with VPNs](https://www.tomshardware.com/software/vpn/utah-becomes-first-us-state-to-target-vpn-use-with-age-verification-law)**
Utah has passed a technologically illiterate law making it the first US state to explicitly target VPN usage in age verification legislation. The law forces websites to somehow reliably detect VPN traffic and discern a user's true physical location—an impossible task for server operators without ISP-level deep packet inspection. Critics and privacy advocates point out this creates an unresolvable compliance trap that will only hurt regular users relying on commercial VPNs for legitimate privacy.

**[OpenAI’s o1 correctly diagnosed 67% of ER patients vs. 50-55% by triage doctors](https://www.theguardian.com/technology/2026/apr/30/ai-outperforms-doctors-in-harvard-trial-of-emergency-triage-diagnoses)**
A Harvard study published in *Science* showed that OpenAI's o1 reasoning model outperformed human physicians in high-pressure emergency room triage scenarios. When presented with standard electronic health records, the AI hit a 67% accuracy rate compared to the 50-55% achieved by human doctors. While it won't replace ER docs anytime soon—as it currently cannot read visual cues or patient distress—it demonstrates a genuine step forward in clinical reasoning models acting as a robust second-opinion tool.

## Show HN & Launches
We're seeing a massive wave of tooling built around managing the new AI-agent workflow. [DeepClaude](https://github.com/aattaran/deepclaude) is a clever drop-in proxy that swaps out Claude Code's expensive brain for DeepSeek V4 Pro, claiming to preserve the agentic UX while cutting costs by 90% via DeepSeek's context caching. On the creative front, [Open Design](https://github.com/nexu-io/open-design) launched as an open-source, local-first alternative to Anthropic's Claude Design, allowing users to leverage their existing coding CLI tools as engines driven by composable design systems. Finally, [Thoth](https://github.com/siddsachar/Thoth) is a local-first AI assistant desktop app that focuses on personal AI sovereignty, sporting an Obsidian-compatible knowledge graph and 39 curated local models via Ollama.

## Discussion & Debate
A poignant lament about the loss of the developer "flow state" struck a chord with the community this week. In [For thirty years I programmed with Phish on, every day](https://christophermeiklejohn.com/ai/personal/phish/flow/agents/2026/05/03/rift.html), an engineer reflects on how the continuous, deep focus of traditional coding has devolved into the staccato, interrupt-driven task of supervising AI agents. Meanwhile, the LWN comments on the Shor's algorithm ZK proof devolved into a classic academic flame war, debating whether publishing a cryptographic proof without the underlying circuit constitutes legitimate science or just "academic circle jerking".