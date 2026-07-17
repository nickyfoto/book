---
title: 2026-07-13
weight: 3
categories: ["News", "Tech"]
tags: ["artificial intelligence", "linux", "cybersecurity", "software engineering", "performance optimization"]
---

# Hacker News — 2026-07-13

## Top Story
GhostLock (CVE-2026-43499) is a stack use-after-free vulnerability in the Linux kernel's rtmutex implementation that has remained unnoticed for 15 years. It provides a highly stable privilege escalation and container escape on every major distribution without requiring special kernel configs or user namespaces. 

## Front Page Highlights

**Zig Creator Calls Spade a Spade, Anthropic Blows Smoke** · [Ray Myers](https://raymyers.org/post/zed-creator-calls-spade-a-spade/)
The tech community is dissecting Anthropic's PR framing of Bun's recent migration from Zig to Rust using AI agents. Zig creator Andrew Kelley responded bluntly, attributing Bun's memory bugs to a chaotic engineering culture and a lack of style guides rather than Zig's limitations. This sparked an intense debate over agent-driven development versus established engineering practices like static memory allocation.

**Migrating a production AI agent to GPT-5.6: 2.2x faster, 27% cheaper** · [Ploy](https://ploy.ai/blog/migrating-a-production-ai-agent-to-gpt-5-6)
OpenAI's newly released GPT-5.6 Sol model is outperforming Claude Opus 4.8 in production benchmarks, delivering a 2.2x speedup and a 27% cost reduction for agentic tasks. However, the migration exposed significant architectural friction because GPT-5.6 dropped partial-prefix prompt caching in favor of explicit, key-based caching that can easily bottleneck your throughput if configured incorrectly.

**Apple’s new SpeechAnalyzer API, benchmarked against Whisper** · [Inscribe](https://get-inscribe.com/blog/apple-speech-api-benchmark.html)
Apple's latest on-device SpeechAnalyzer API for iOS and macOS 26 decisively beat OpenAI's Whisper Small model in both accuracy and speed. Achieving a 2.12% word error rate on clean English speech, the system-level API runs roughly three times faster than Whisper Small while natively producing properly punctuated and cased text.

**We Put an L7 Firewall in the Kernel** · [Yeet](https://yeet.cx/blog/l7-firewall-in-the-kernel)
Engineers successfully built an HTTP/2-aware firewall directly into the Linux kernel using eBPF and Aho-Corasick DFAs to bypass the verifier's strict loop limits. Hooking at the XDP layer allows them to evaluate layer 7 rules—compiled dynamically from JavaScript—in under 200 nanoseconds per packet before the kernel even allocates a socket buffer.

**Leak of San Francisco Police Drone Footage Exposes Reality of Urban Surveillance** · [Wired](https://www.wired.com/story/sfpd-drone-video-leak-surveillance/)
Security researchers discovered that the SFPD inadvertently livestreamed hours of unencrypted drone surveillance footage, including thermal imaging and physical takedowns, onto the open internet. The leak stemmed from a misconfigured public web link in Skydio's software with an expiration date set a year into the future, leaving the stream exposed for six months.

**Linux on the Sega 32X** · [Cakehonolulu](https://cakehonolulu.github.io/linux-on-32x/)
A hardware hacker successfully ported Linux to the Sega 32X add-on by leveraging an extended flash cart mapper to use 4MB of ROM as RAM. Because the dual SH2 processors lack hardware synchronization primitives and cache coherency, the author had to implement Peterson's algorithm entirely in software to achieve symmetric multiprocessing.

**Quadrupling code performance with a "useless" if** · [Purple Syringa](https://purplesyringa.moe/blog/quadrupling-code-performance-with-a-useless-if/)
A developer optimizing a domain-specific compression algorithm used a volatile cast to insert a seemingly useless `if` statement, successfully tricking the CPU's branch prediction. This broke a loop's instruction dependency, shifting the hardware bottleneck from memory latency to throughput and yielding a 4x synthetic speedup.

## Show HN & Launches
DOM-docx is a new library that converts semantic HTML fragments directly into native, editable Word documents without requiring a headless browser for its default path, using visual regression testing against LibreOffice to ensure high layout fidelity. Clawk gives coding agents their own disposable, fast-booting Linux VMs based on Apple's Virtualization framework, allowing them to run dangerous commands and background services without compromising your host machine. YouTube Guitar Tab Parser is a zero-configuration CLI tool combining yt-dlp, ffmpeg, and Claude Vision to extract guitar tabs from YouTube lessons and stitch them into a deduplicated PDF. Finally, Claude is just Mr. Meeseeks is a fun plugin that plays a random Mr. Meeseeks audio clip whenever Claude Code completes a task or awaits user approval.

## Discussion & Debate
In a deeply opinionated tech policy piece, an author warns that frontier AI labs are lobbying for "neutral laws"—like massive compute thresholds and safety certifications—to effectively outlaw open-weight local models. The author argues that instead of relying on the courts, the community must defend itself architecturally by building decentralized, locally orchestrated AI infrastructure. Separately, users in an "Ask HN" thread are debating adding a flag for AI-generated articles, reflecting the community's growing exhaustion with low-effort synthetic content.