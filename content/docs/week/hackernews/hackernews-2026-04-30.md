---
title: 2026-04-30
weight: 5
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "privacy", "open source", "hardware"]
---

# Hacker News — 2026-04-30

## Top Story
**[Copy Fail: 732 Bytes to Root on Every Major Linux Distribution](https://xint.io/blog/copy-fail-linux-distributions)**
A devastating logic flaw (CVE-2026-31431) in the Linux kernel's cryptographic subsystem allows unprivileged users to execute a controlled 4-byte write into the page cache of any readable file. By chaining an `AF_ALG` socket with `splice()`, an attacker can use a tiny 732-byte Python script to silently inject shellcode into a setuid binary like `/usr/bin/su`, gaining instant root access without modifying the actual file on disk. The vulnerability, found using an AI-assisted research tool, has existed silently for nearly a decade and works reliably across all major distributions without race conditions.

## Front Page Highlights

**[The Zig project’s rationale for their firm anti-AI contribution policy](https://simonwillison.net/2026/Apr/30/zig-anti-ai/)**
The Zig project has implemented a strict ban on LLM-authored pull requests and issues, sparking a massive community debate. The rationale revolves around "Contributor Poker": open-source maintainers invest review time not just to land code, but to groom confident, long-term human contributors. Reviewing AI slop—even when the code happens to be perfect—breaks this social contract and wastes maintainer energy.

**[LinkedIn scans for 6,278 extensions and encrypts the results into every request](https://404privacy.com/blog/linkedin-is-scanning-your-browser-extensions-this-is-how-they-use-the-data/)**
LinkedIn is actively executing covert, hardcoded fetch requests to `chrome-extension://` URLs to fingerprint visitors based on an aggressive list of over 6,200 browser extensions. Unlike anonymous web tracking, this invasive software inventory—which can easily reveal medical, political, or job-searching activities—is directly tied to users' verified professional identities without their consent. 

**[Opus 4.7 knows the real Kelsey](https://www.theargumentmag.com/p/i-can-never-talk-to-an-ai-anonymously)**
A writer discovered that Anthropic's new Claude Opus 4.7 model can accurately de-anonymize her unpublished, drastically different writing samples using style-recognition alone. The implication for the broader web is staggering: anyone with a significant public writing corpus essentially has no internet anonymity left, as AI models can trivially match pseudonymous forum posts or corporate reviews back to real-world identities.

**[Why isn’t AMD’s MI300X competitive?](https://newsletter.semianalysis.com/p/mi300x-vs-h100-vs-h200-benchmark-part-1-training)**
A brutal, five-month analysis by SemiAnalysis demonstrates that the impressive on-paper specs of AMD's MI300X hardware are entirely squandered by its disastrous software ecosystem. Despite having better memory bandwidth than Nvidia, AMD's out-of-the-box training experience is so riddled with bugs and poorly tuned heuristics that it requires extensive manual workarounds just to achieve performance that still lags significantly behind Nvidia's H100 and H200.

**[Shai-Hulud Themed Malware Found in the PyTorch Lightning AI Training Library](https://semgrep.dev/blog/2026/malicious-dependency-in-pytorch-lightning-used-for-ai-training/)**
A massive supply-chain attack compromised the PyPI `lightning` package, a ubiquitous dependency for deep learning and LLM fine-tuning. The malicious payload drops an obfuscated JavaScript runtime that systematically hunts for cloud secrets, AWS/GCP tokens, and SSH keys, while simultaneously injecting persistence hooks into developer tools like VS Code and Claude Code.

**[FastCGI: 30 years old and still the better protocol for reverse proxies](https://www.agwa.name/blog/post/fastcgi_is_the_better_protocol_for_reverse_proxies)**
On the 30th anniversary of the FastCGI specification, this retrospective argues that HTTP remains an objectively terrible protocol for reverse proxying. Because FastCGI cleanly isolates trusted proxy metadata from untrusted client headers, it entirely sidesteps the complex request smuggling (desync) attacks and header spoofing vulnerabilities that continuously plague modern HTTP/1.1 infrastructure.

## Show HN & Launches
*   **[TRiP](https://github.com/carlovalenti/TRiP)**: A single developer spent 18 months building a complete transformer engine from scratch in pure C to deeply understand the underlying linear algebra. The engine supports inference, training, and vision for architectures like Llama 2, Gemma, and PaliGemma.
*   **[honker](https://honker.dev/)**: A highly practical SQLite extension that adds Postgres-style `NOTIFY`/`LISTEN` semantics to your local database. It enables durable pub/sub and task queues natively within the `.db` file, eliminating the need for Redis or external brokers.
*   **[Cubedoom](https://spectrelang.org/log/devlog#cubedoom)**: A classic raycasting arena shooter (in the vein of Wolfenstein 3D) written entirely in "Spectre", a custom programming language designed by the author.

## Discussion & Debate
The overwhelming operational cost of navigating the "sea of AI slop" was a major theme today. The [Zulip 12.0 release notes](https://blog.zulip.com/2026/04/27/zulip-12-0-released/) detailed the maintainers' exhaustion from closing hundreds of useless LLM-generated PRs, forcing them to enact a strict "end-to-end human responsibility" policy. Meanwhile, [Mozilla filed official opposition](https://github.com/mozilla/standards-positions/issues/1213) to Chrome's new local Prompt API, and Scott Aaronson sparked a heated debate regarding his [stark warning](https://scottaaronson.blog/?p=9718) that fault-tolerant quantum computers will likely break deployed cryptography by 2029.