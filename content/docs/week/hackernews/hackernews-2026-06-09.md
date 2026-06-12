---
title: 2026-06-09
weight: 2
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "software engineering", "apple", "rust"]
---

# Hacker News — 2026-06-09

## Top Story
Anthropic just dropped Claude Fable 5 (and its uncensored-for-cybersecurity sibling, Mythos 5), dominating today's front page. The capabilities are a massive leap—Ethan Mollick described it as acting more like an entire design studio you commission rather than a tool you steer. However, the release comes with heavy new safeguards, including controversial "silent nerfing" for developers asking the model about frontier AI development.

## Front Page Highlights

**[Grit: Rewriting Git in Rust with Agents](https://blog.gitbutler.com/true-grit)**
The GitButler team took a cue from Anthropic's recent agent-swarm experiment and successfully rewrote Git from scratch in memory-safe Rust. Costing roughly $15k in tokens and outputting over 360,000 lines of code, the library now passes 99.3% of the official Git test suite. It is a fascinating look at the actual logistics, frustrations, and workflow needed when orchestrating long-running, parallel AI agents to accomplish massive architectural overhauls.

**[Microsoft’s open source tools were hacked to steal passwords of AI developers](https://techcrunch.com/2026/06/08/microsofts-open-source-tools-were-hacked-to-steal-passwords-of-ai-developers/)**
Microsoft temporarily pulled dozens of GitHub repos after hackers injected password-stealing malware into popular Azure and AI-coding tools like the Gemini CLI and Claude Code. It is a nasty supply chain attack specifically targeting the AI developer ecosystem, proving that even massive tech giants with immense security resources are vulnerable to sophisticated repo-poisoning campaigns.

**[OpenCV 5 Is Here: The Biggest Leap in Years for Computer Vision](https://opencv.org/opencv-5/)**
After years in development, OpenCV 5 has finally dropped, completely replacing its aging deep learning module with a modern graph-based DNN engine. The library now boasts over 80% ONNX operator coverage, drops the legacy C API, and incredibly, runs LLMs and VLMs natively with a built-in tokenizer and KV-cache. It is exactly the modernization this foundational library needed to stay relevant to modern hardware pipelines.

**[Upcoming breaking changes for NPM v12](https://github.blog/changelog/2026-06-09-upcoming-breaking-changes-for-npm-v12/)**
In a massive win for the Node ecosystem's security, npm v12 will default to blocking implicit `install` and `postinstall` scripts, as well as disabling raw Git and remote URL dependencies out of the box. It is going to break a ton of legacy builds, but forcing developers to explicitly allowlist build scripts is a mandatory step to stem the endless tide of npm supply chain attacks.

**[Flat Datacenter Networks at Scale](https://perspectives.mvdirona.com/2026/06/flat-datacenter-networks-at-scale/)**
AWS is abandoning the classic fat-tree Clos topologies that have defined data centers for decades in favor of Resilient Network Graphs (RNG)—essentially, randomly wired networks. By leveraging randomness and removing hierarchical structural bottlenecks, they managed to cut router counts by 69% and power consumption by 40% while gaining 33% higher throughput.

**[FCC Wants to Kill Burner Phones by Forcing Telecoms to Get All Customers’ IDs](https://www.404media.co/fcc-wants-to-kill-burner-phones-by-forcing-telecoms-to-get-all-customers-ids/)**
The FCC is proposing a rule that would force all telecoms to collect government-issued IDs and physical addresses for any new or renewing phone plan. Pitched as a way to combat scammers, privacy advocates are rightfully pointing out that it effectively outlaws anonymous "burner" phones, stripping critical protections from journalists, whistleblowers, and abuse survivors.

**[Apple’s AI Can Now Change Your Passwords. What Could Possibly Go Wrong?](https://www.kylereddoch.me/blog/apples-ai-can-now-change-your-passwords-what-could-possibly-go-wrong/)**
In iOS 27, Apple Intelligence will be able to actively navigate websites to automatically rotate breached passwords for you. Security professionals are highly skeptical; granting an AI agent the authority to autonomously authenticate and manipulate sensitive account credentials across the chaotic open web is practically begging for catastrophic prompt-injection attacks and lockouts.

## Show HN & Launches
**[Show HN: Resonate – Low-latency, high-resolution spectral analysis](https://alexandrefrancois.org/Resonate/)**
A slick new algorithm and open-source library (in Python, Swift, and C++) that uses frequency-tracking resonators to compute spectrograms efficiently in real-time. 

**[GentleOS – Classic operating system with a lovely retro GUI](https://github.com/luke8086/gentleos32)**
A monolithic hobby OS designed to run bare-metal on vintage 32-bit PCs with i386 processors and 4MB of RAM. It is a fun throwback for those who want to tinker with true 90s-era x86 hardware.

**[Launch HN: Transload (YC P26) – Measuring freight items with CCTV](https://news.ycombinator.com/item?id=48463273)**
A new YC-backed startup attempting to solve freight dimensioning natively with simple security cameras.

## Discussion & Debate
The overarching theme in the comments today is the friction between AI hype and actual engineering reality. A highly upvoted post on **[Cleaning up after AI rockstar developers](https://www.codingwithjesse.com/blog/rockstar-developers/)** struck a nerve, describing the nightmare of maintaining "vibe-coded slop" generated by LLMs that spit out thousands of lines of unmaintainable, overly-complex code. This paired perfectly with Aaron Levie's critique of **[CEOs Who Think AI Replaces Their Employees Are Just Bad CEOs](https://www.techdirt.com/2026/06/09/ceos-who-think-ai-replaces-their-employees-are-just-bad-ceos/)**—a sharp takedown of executives who generate a working prototype with Claude Code and incorrectly assume they can fire their entire engineering staff, blissfully unaware of the "last mile" work required to ship scalable, secure production software.