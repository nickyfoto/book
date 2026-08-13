---
title: 2026-08-05
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "hardware", "open source"]
---

# Hacker News — 2026-08-05

## Top Story
**[Changes at Google DeepMind: Demis Hassabis from CEO to Chair, Jeff Dean departs](https://blog.google/company-news/inside-google/message-ceo/next-chapter-ai-momentum/)** · Google Blog
In a monumental leadership restructuring, **Demis Hassabis is stepping down from operational duties as CEO of Google DeepMind to become Chairman and Chief Scientist of Alphabet**. Concurrently, **systems legend Jeff Dean and senior fellow Sanjay Ghemawat are leaving Google after 27 years** to launch "Discovery Loop," an independent public benefit corporation that Google will back as an investor and cloud provider.

## Front Page Highlights

**[IP and DNS Leaks in WebKit Affecting Proxy Browsers and iCloud Private Relay](https://mysk.blog/2026/08/04/webkit-proxy-icloud-private-relay-ip-leak/)** · Mysk Blog
Researchers have exposed three major WebKit features—**DNS prefetching, WebAuthn Related Origin Requests, and WebTransport**—that completely bypass configured application-level proxy settings and send traffic directly from the user's device. Because Apple's App Store policy forces all iOS browsers to run on WebKit, **every proxy-based browser on iOS (including Tor-based browsers) is actively leaking users' real IP addresses and DNS servers**. The vulnerability also punctures Apple's iCloud Private Relay, though traditional system-level VPNs remain unaffected.

**[An SLM trained on \$8 ESP32-S3](https://github.com/Carloscodix/qapla)** · GitHub
Proving that you don't need a multi-million dollar datacenter to train neural networks, a developer successfully **trained a tiny, 319,000-parameter language model to learn the morphology of Klingon entirely on-device**. There are no pre-trained weights or external GPU calculations here; **every forward pass, loss computation, and backpropagation step was hand-coded in C and run on an \$8 microcontroller**. While training takes days and the model doesn't reason, it successfully learned to generate structurally valid Klingon prefixes, suffixes, and locatives from raw character data.

**[Keyv and friends compromised in active Shai-Hulud supply chain attack](https://www.aikido.dev/blog/keyv-and-friends-compromised-in-npm-supply-chain-attack)** · Aikido Blog
A highly aggressive supply chain attack has **compromised the GitHub account of the maintainer behind keyv, flat-cache, and other popular caching packages**, infecting over 440 packages representing 2 billion monthly installs. The attack injects an obfuscated preinstall script that **deploys a credential-stealing worm designed to harvest npm tokens, AWS credentials, Kubernetes secrets, and SSH keys**. Shockingly, the worm uses stolen credentials to **automatically infect and republish other packages owned by compromised maintainers**, scaling the exploit dynamically across the registry.

**[Nvidia’s Vera Whitepaper Has a Thread Loose](https://chipsandcheese.com/p/nvidias-vera-whitepaper-has-a-thread)** · Chips and Cheese
An in-depth analysis of Nvidia’s 45-page whitepaper for **Vera, its new 88-core monolithic ARM server CPU**, reveals that while the hardware is formidable, Nvidia's marketing narrative is filled with misleading claims. The critique dismantles Nvidia's attempt to spin traditional SMT as a "time-slicing" bottleneck while **suggesting its own "Spatial Multithreading" approach is superior**, when in fact SMT's dynamic resource sharing is often much better at keeping a wide core fed. Additionally, the paper is called out for **massaging memory bandwidth metrics by comparing Vera's LPDDR5X bus to an artificially degraded AMD EPYC memory bandwidth result**.

**[Stateless MCP has recaptured my interest](https://simonwillison.net/2026/Jul/31/stateless-mcp/)** · Simon Willison
The introduction of the Model Context Protocol (MCP) 2.0 spec **brings a stateless architecture that dramatically simplifies building LLM agent tools**. Unlike the legacy stateful version which required multiple roundtrips to initialize a session and execute tools, **stateless MCP collapses tool execution into a single, clean HTTP request**. This shift eliminates complex server-side state tracking, making agentic integrations far more secure and practical to run on smaller, local models.

**[Faster Than Ninja](https://build2.org/blog/faster-than-ninja.xhtml)** · build2 Blog
Exploring how close a modern native build system can get to the "speed of light" benchmark set by Ninja, **experiments with build2 demonstrate it can run up to 2.2% faster than Ninja on from-scratch builds**. While Ninja relies on external generators like CMake, **build2 is natively multi-threaded and achieves its performance through an advanced C/C++ compilation model**. By combining header dependency extraction with partial preprocessing and front-loading the workload before memory-intensive compilation starts, it maintains superior file-access locality.

## Show HN & Launches

On the project front, we saw **[Show HN: SIMD Viterbi Decoder in Rust](https://github.com/brian-armstrong/fec)**, an incredibly fast forward error correction crate designed for SDR and space applications that outpaces legacy C libraries on modern x86 architectures. For hardware hackers, **[Birduino: A card-triggered audio player for [learning] the birds](https://hannahilea.com/blog/birduino/)** is a delightful open-source, card-triggered birdcall player built around a TonUINO, clear acrylic, and physical NFC-tagged playing cards that plays masterfully edited Cornell bird vocalizations.

## Discussion & Debate

A massive debate erupted over **[Why is it all in the kernel?](https://lawrencecpaulson.github.io//2026/07/30/Collatz.html)** after a soundness bug in the Lean kernel allowed a false proof refuting the Collatz conjecture to pass both Lean and the Nanoda independent checker. This has reignited the classic fight between the "dead weight" of proof objects/certificates and **the "honest toil" of building recursive functions and data types from primitive axioms entirely outside the kernel**. As critics note, when proof calculus kernels get bloated with nested inductive types, they inevitably introduce the very vulnerabilities they are designed to prevent. 

Separately, a post on **[Flowise Is Shutting Down](https://flowiseai.com/sunset)** sparked a meta-discussion on the limits of no-code AI. The consensus is that rigid, drag-and-drop LLM builders are hitting structural walls as **developers increasingly abandon rigid workflow blocks to run autonomous coding agents directly in their terminals**.

***

📊 I could chart the performance metrics of the `build2` vs `Ninja` benchmarks or the Nvidia Vera vs AMD EPYC memory bandwidth scaling to make these technical comparisons easier to digest at a glance. Want me to do that next?