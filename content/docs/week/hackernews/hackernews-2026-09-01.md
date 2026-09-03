---
title: 2026-09-01
weight: 1
categories: ["News", "Tech"]
tags: ["software engineering", "artificial intelligence", "retro computing", "academic integrity"]
---

# Hacker News — 2026-09-01

## Top Story
**[Evidence of Fraud in an Influential Study About Procrastination](https://datacolada.org/138)** has emerged as the day's heaviest-hitting discussion, with Data Colada exposing **systematic data fabrication** in Dan Ariely's famous 2002 study on precommitments and deadlines. The investigation reveals cloned observations and impossible self-reported metrics, leading the authors to request a formal retraction and sparking a massive community debate on **academic replication crises**.

## Front Page Highlights

**[How accurate have Ed Zitron’s AI skeptic predictions been?](https://danluu.com/zitron/)** · Dan Luu
Dan Luu delivers a thorough, data-driven teardown of prominent AI skeptic Ed Zitron's prediction record. The analysis demonstrates how Zitron consistently relies on **flawed economic reasoning, selective metrics, and high-confidence predictions that repeatedly fail**, such as declaring "peak AI" in early 2024 or predicting the death of startups like Cursor right before its massive **\$60B exit**. The HN crowd is deeply engaged in discussing the difference between rigorous tech criticism and **outrage-driven engagement farming**.

**[How 2004 RuneScape fit a multiplayer RPG into 56k dialup](https://jkm.dev/posts/how-2004-runescape-fit-a-multiplayer-rpg-into-56k-dialup/)** · jkm.dev
This technical deep dive explores the decompiled client code of RuneScape 2 from 2004 to show how it squeezed a massive multiplayer game into narrow dial-up pipelines. The developers achieved this via a custom-tailored **bit-packed protocol** where idle players cost exactly **one bit per cycle**, shifting to byte-aligned structures only for cached static data like appearance buffers. The technical community is celebrating this as a masterclass in **extreme constraint-driven engineering** and protocol co-design.

**[Global Trade and the United States Navy](https://acoup.blog/2026/08/28/collections-global-trade-and-united-states-navy/)** · Bret Devereaux
Military historian Bret Devereaux writes an exhaustive 10,000-word essay arguing that the US Navy is the essential, **load-bearing pillar of the modern global economy**. He explains how global standards of living depend on maritime trade, which historically fragments into piracy and choke-point extortion without a global power capable of power-projection and logistical self-sustenance. The comments discuss the terrifying implications of the US voter souring on freedom of navigation and the **lack of any viable alternative navy** to pass the baton to.

**[AnkiDroid: Google Play no longer allowing Open Collective donation link](https://github.com/ankidroid/Anki-Android/issues/21656)** · GitHub (AnkiDroid)
The volunteer maintainers of the open-source flashcard app AnkiDroid are facing a ban from Google Play unless they remove their Open Collective donation link under protest. Google's policy team has rejected their **501(c)(6) tax-exempt determination** because it is not a 501(c)(3) charity, even though the app is free and relies on donations purely for hosting and maintenance. This has triggered a massive wave of anger on HN, with developers railing against Google's opaque, automated, and **monopolistic Play Store policies**.

**[UEFA’s Champions League draw creates unfair clusters; a Cayley graph fixes it](https://sariyuce.com/blog/2026/UEFA-Draw/)** · sariyuce.com
The author demonstrates how the Champions League's new "single-league" format accidentally generates **dense clusters of matchups**, penalizing certain teams' advancement odds through sheer bad luck. To eliminate this structural risk, they use a constraint solver to show how a symmetric, vertex-transitive **Cayley graph \\(C(36; \pm\{1, 4, 10, 17\})\\)** would guarantee perfect schedule fairness for every team. HN is highly appreciative of this elegant collision of sports format design, discrete math, and operations research.

**[44% on ARC-AGI-1 in 67 cents](https://mvakde.github.io/blog/44-on-arc-1/)** · mvakde.github.io
A solo researcher has matched the performance of complex, resource-heavy LLM pipelines on the ARC-AGI benchmark by training a small 8-layer transformer from scratch at test-time for just **67 cents of vast.ai compute**. By upgrading to a modern architecture with **SwiGLU, RMSNorm, and 3D RoPE embeddings**, they argue that pure deep learning can solve abstract reasoning without relying on recursive loops or synthetic data. The thread has sparked intense discussion on whether benchmark-hacking with massive pre-training obscures actual progress in **AI sample efficiency**.

## Show HN & Launches
Notable launches today include **[Tailcat](http://tailscale.com/tailcat)**, an open-source tool and Go library by Tailscale that allows developers to run their secure data plane (WireGuard + NAT traversal + DERP) independently of Tailscale's control plane. Also turning heads is the Beta launch of **[DoltLite](https://github.com/dolthub/doltlite)**, a version-controlled SQLite clone built on **Prolly Trees** using over 2,000 automated pull requests from a team of AI agents. Lastly, **[slotstream](https://github.com/carloslfu/slotstream)** debuted as a Show HN, allowing developers to run the massive 104GB Qwen3.8 model on consumer Macs with as little as 16GB of RAM by **streaming weights directly from the SSD**.

## Discussion & Debate
Dwarf Fortress creator Tarn Adams sparked a massive discussion on generative AI and corporate layoffs, arguing that game industry bosses are suffering from a form of **"psychosis"** by pushing for button-press game creation while laying off essential human talent. Commenters are actively debating his take, sharing their own experiences of corporate executives misunderstanding complex systems, the degradation of code quality from AI-generated commits, and the **unsustainable economics of a fully automated creative market**.

***

⚓ Want to dive deeper into the technical mechanics of these posts? I can provide a step-by-step breakdown of how RuneScape's 2004 bit-packing protocol works under the hood, or explain the discrete group theory behind the UEFA Cayley graph scheduling fix.