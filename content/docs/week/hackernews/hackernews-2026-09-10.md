---
title: 2026-09-10
weight: 1
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "cryptography", "mobile development", "open source"]
---

# Hacker News — 2026-09-10

## Top Story
Automattic's board has forced founder and CEO Matt Mullenweg onto a paid leave of absence following years of escalating litigation with WP Engine, open-source community friction, and internal employee fallout. CFO Mark Davies has taken over as interim CEO while Mullenweg remains on the board, marking a dramatic shift for the company behind WordPress.com.

## Front Page Highlights

**[Factoring RSA 260](https://cognition.com/blog/factoring-rsa-260)** · Cognition
Cognition researcher Eric Lu directed a swarm of Devin autonomous agents to develop a drop-in GPU lattice siever for CADO-NFS, ultimately factoring the 260-digit RSA-260 number in three weeks. The run cost roughly \$414k in GPU compute—a 10x cost reduction over CPU state-of-the-art—demonstrating how agentic coding can break domain-specific performance bottlenecks. Community discussion focused both on the technical achievement of AI-optimized GPU kernels and the broader implications for cryptographic parameter scaling and human oversight.

**[Shopify moves back to Native from React Native](https://shopify.engineering/back-to-native)** · Shopify Engineering
Six years after going all-in on React Native, Shopify announced it is migrating its entire mobile application suite back to native Swift and Kotlin. The engineering team noted that modern AI coding agents have neutralized the cross-platform maintenance advantage, making the raw performance and first-party API access of native code the clear winner. Developers praised Shopify's pragmatic pivot and the custom "Helix" agentic verification system used to rebuild the Shop app in just 12 weeks.

**[Version Control Second Coming](https://psantosl.github.io/posts/version-control-second-coming/)** · P. Santos L
Plastic SCM founder and Origin engineer Pablo Santos reflects on why the version control ecosystem is experiencing its biggest shakeup since Git replaced Bitkeeper in 2005. Driven by agentic coding workloads generating unprecedented commit velocity and high monorepo demand, a wave of new forges and tools—including Entire, Pierre, Cursor's Origin, GitButler, Google's Jujutsu, Diversion, and Epic's Lore—are challenging GitHub's dominance. The post sparked lively conversation around the transition from local `git push` workflows to server-side, versioned cloud workspaces.

**[Mathematicians want proof OpenAI didn’t use their work](https://www.theverge.com/ai-artificial-intelligence/993263/where-does-openai-get-mathematics-training-data)** · The Verge
Mathematician Andreas Thom accused OpenAI of training its Astra model on unreleased user conversations regarding Gromov's soficity conjecture before claiming the proof as an in-house AI breakthrough. Following similar complaints from NYU's Tristan Buckmaster over Navier-Stokes proofs, mathematicians are demanding dataset transparency and auditing of how ChatGPT interactions leak into pretraining data. The thread ignited intense debate over whether AI labs are quietly assimilating private user research into model weights under the guise of "de-identified data".

**[Bending Spoons buying Miro for \$1.355B](https://investors.bendingspoons.com/newsroom/bending-spoons-agrees-to-acquire-miro)** · Bending Spoons
Italian tech conglomerate Bending Spoons has agreed to acquire collaborative whiteboard platform Miro at an enterprise value of \$1.355 billion. Coming right on the heels of Bending Spoons acquiring Airtable, the deal signals an aggressive consolidation of SaaS collaboration tools. Commenters expressed deep skepticism over Bending Spoons' roll-up strategy, pointing to aggressive monetization across past acquisitions like Evernote and WeTransfer.

**[>10x More Efficient Pretraining](https://magic.dev/blog/pretraining#)** · Magic.dev
AI startup Magic.dev revealed a pretraining recipe that achieves over 10x greater compute efficiency than open-weight baselines like DeepSeek V4 Pro and Kimi K2. By scaling algorithmic efficiency and low-precision FP8 stability rather than raw cluster size, they matched DeepSeek V4 Pro Base using ~50x fewer FLOPs (\$500k on GB200 GPUs). The HN community celebrated the focus on algorithmic optimizations over brute-force compute hoarding.

**[Muse, the band, lost its social media handles to Muse, Meta’s new AI agent](https://www.engadget.com/2254419/muse-the-band-lost-its-social-media-handles-to-muse-meta-s-new-ai-agent/)** · Engadget
Meta expropriated social media handles previously belonging to the British rock band Muse to promote its newly released "Muse" AI agent. The takeover echoes past instances where Meta forcibly acquired handles like @Meta from a motorcycle magazine and @threads from a small fashion retailer. HN readers voiced strong outrage over big tech platforms arbitrarily stripping handles from legitimate owners whenever brand alignment dictates.

## Show HN & Launches
- **[Show HN: The same nine streaming subscriptions cost \$702/year more than in 2021](https://honestlyranked.com/guides/streaming-price-increases/)**: A tracked breakdown of major streaming services reveals a 61% price jump over five years (\$95.91/mo to \$154.41/mo), with Apple TV+ up 200% and Disney+ up 138%. Readers bonded over aggressive cord-cutting strategies and the resurgence of self-hosted media servers.
- **[Show HN: Compute polynomials twice as fast](https://thomasahle.com/fast-polynomials/)**: Demonstrates how coefficient preprocessing allows evaluating any monic polynomial of degree *n* in just ⌊n/2⌋+1 multiplications, effectively doubling speed over standard Horner's method. Technical commenters appreciated the practical applications in cryptographic hashing and signal processing.
- **[Show HN: Persistent Jupyter kernel execution and live output streaming in VSCode](https://github.com/rnoro/tithon)**: Solves dead Jupyter session frustration by running a detached host daemon that journals code outputs to SQLite WAL and streams live logs back upon editor reconnects. Engineers welcomed the clean text `.py` representation that avoids `.ipynb` JSON bloat and token-wasting base64 images.
- **[Show HN: What if the speed of light was 5 km/h?](https://rivendell.dmitrybrant.com/relativity/)**: An interactive browser simulation that lowers *c* to walking speed, letting users experience relativistic visual effects like Doppler color shifts, Lorentz contraction, and light aberration in real time.

## Discussion & Debate
- **[One resignation turned the embers of AI fear into a wildfire](https://www.interconnects.ai/p/one-resignation-turned-the-embers)**: Nathan Lambert analyzes the fallout from Anthropic researcher Jacob Coxon's public resignation over existential AI risk, highlighting the rift between lab safety culture and real-world infrastructure vulnerabilities. Commenters debated whether frontier lab culture has turned insular while stressing that practical risks like cyber attacks demand far more immediate attention than extinction scenarios.
- **[Software Drives People Insane](https://graybeard.ing/software-drives-people-insane/)**: An opinionated essay arguing that software's lack of physical constraints leads engineers and executives to lose all sense of proportion, turning glorified spreadsheets into high-stakes existential battles. The comments filled with veteran devs sharing war stories of over-engineered platforms and absurd corporate debates over simple features.
- **[Object storage is all you need](https://www.tigrisdata.com/blog/object-storage-all-need/)**: Tigris Data breaks down building an entire SaaS control plane on top of FoundationDB/object storage using compare-and-swap headers rather than a traditional relational database. Systems engineers traded insights on the trade-offs, specifically read amplification, eventual consistency hazards, and lost updates in multi-region deployments.

---
☕ *Want me to dive deeper into any of these threads or compile a comparison table on the AI benchmark releases mentioned today?*