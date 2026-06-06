---
title: 2026-06-03
weight: 2
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "software engineering", "cryptography", "linux"]
---

# Hacker News — 2026-06-03

## Top Story
**[1-Click GitHub Token Stealing via a VSCode Bug](https://blog.ammaraskar.com/github-token-stealing/)**
Security researcher Ammar Askar dropped a terrifying write-up of a zero-click exploit in github.dev and VSCode webviews. By abusing cross-origin message passing and keyboard shortcut bubbling, an attacker can silently install a malicious local workspace extension on your machine, exfiltrating your GitHub token with full read/write access to all your private repositories. It's a sobering reminder of the massive attack surface embedded in Electron applications trying to securely render untrusted content.

## Front Page Highlights

**[GitHub and the crime against software](https://eblog.fly.dev/githubbad.html)**
Efron Licht delivers a blistering, data-backed takedown of GitHub's frontend rot. Comparing payload sizes and heap snapshots against Gitlab and Codeberg, the post argues that Microsoft's obsession with injecting "agentic" AI buttons everywhere has fundamentally broken GitHub's reliability and performance, resulting in 540,000 lines of code just to render a blank repository page. 

**[I was recently diagnosed with anti-NMDA receptor encephalitis](https://burntsushi.net/encephalitis/)**
Andrew Gallant (better known as burntsushi, creator of the legendary `ripgrep` tool) shares a deeply personal account of his sudden, terrifying battle with an autoimmune disorder that causes brain inflammation and severe psychosis. It's a stark reminder of our physical fragility, though thankfully he was diagnosed early and is making a strong recovery.

**[A Post-Quantum Future for Let’s Encrypt](https://letsencrypt.org/2026/06/03/pq-certs)**
Instead of just swapping in massive post-quantum signatures that would bloat TLS handshakes past 10 kilobytes and degrade network performance, Let's Encrypt is shifting the Web PKI toward Merkle Tree Certificates (MTCs). This elegant approach batches certificates under a single signature, keeping handshakes small and baking Certificate Transparency directly into the issuance protocol.

**[Use your Nvidia GPU’s VRAM as swap space on Linux](https://github.com/c0dejedi/nbd-vram)**
Absolute peak HN hackery: a daemon that allocates idle Nvidia VRAM via the CUDA driver API and serves it as a block device using the NBD protocol over a Unix socket. Bypassing the kernel modules and P2P API restrictions on consumer GeForce cards, it turns your unused 8GB of VRAM into high-priority, ultra-low-latency swap space.

**[Did Claude Opus 4.8 distill Alibaba’s Qwen? Here’s what the evidence says](https://blog.kilo.ai/p/did-claude-opus-48-distill-alibabas)**
When prompted with "What model are you?" in Chinese, Anthropic's new Claude Opus 4.8 has occasionally been introducing itself as Alibaba's Tongyi Qianwen (Qwen). While rumors immediately pointed to illicit model distillation, the reality is likely much more boring: Chinese training-data contamination, prompt fragility, or API proxy routing simply regurgitating the highest-probability tokens.

**[Uber’s $1,500/month AI limit is a useful signal for AI tool pricing](https://simonwillison.net/2026/Jun/3/uber-caps-usage/)**
Simon Willison highlights Uber's new policy capping engineers at $1,500 of monthly token spending per AI coding tool (like Claude Code or Cursor). It’s a rational corporate response to the unpredictable burn rate of agentic loops, and provides a fascinating benchmark for how much raw monetary value big tech actually assigns to developer-assist tools.

## Show HN & Launches
The highly anticipated **[Elixir v1.20](https://elixir-lang.org/blog/2026/06/03/elixir-v1-20-0-released/)** is out, officially bringing gradual, set-theoretic typing to the language and catching "verified bugs" at compile time without requiring manual type annotations. On the AI front, Google dropped **[Gemma 4 12B](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemma-4-12b/)**, an encoder-free multimodal model small enough to run locally on a 16GB laptop while processing audio and vision natively in the LLM backbone. For the system builders, **[Show HN: Rscrypto](https://github.com/loadingalias/rscrypto)** provides a pure-Rust, hardware-accelerated crypto stack in a single dependency, and **[Self-hosted dev sandboxes](https://github.com/tastyeffectco/sandboxes)** open-sources the complex multi-tenant backend required to build V0 or Cursor-style coding agents.

## Discussion & Debate
Ted Chiang penned a sharp essay in The Atlantic, **[Artificial intelligence is not conscious](https://www.theatlantic.com/philosophy/2026/06/no-artificial-intelligence-is-not-conscious/687378/)**, tearing into Anthropic for publishing a "constitution" for Claude. He warns that anthropomorphizing sentence-continuation machines allows tech companies and users alike to evade moral responsibility. Meanwhile, the **[Stop Killing Games](https://jxself.org/stop-killing-games.shtml)** movement sparked heavy debate, with free software advocates arguing that complaining about server shutdowns misses the root cause: the inherent injustice and absolute developer control baked into proprietary software.