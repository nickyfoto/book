---
title: 2026-05-23
weight: 8
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "software engineering", "hardware", "open source"]
---

# Hacker News — 2026-05-23

## Top Story
[Pardon MIE? Bypassing Apple MIE](https://ironpeak.be/blog/bypassing-apple-mie/)
The standout post today is a brilliant, highly technical teardown of CVE-2026-28952, revealing how researchers bypassed Apple's heavily marketed Memory Integrity Enforcement (MIE) on the new M5 silicon. It took a three-person team and an AI assistant just five days to go from zero to a root shell. The vulnerability was a classic integer overflow inside `_zalloc_ro_mut`—the single trusted kernel function allowed to modify read-only zones—and Apple patched it by simply moving an overflow check two instructions earlier. It’s a perfect reminder that hardware-level memory tagging doesn't protect you if the authorized gatekeeper can be tricked into writing to the wrong slot.

## Front Page Highlights

**[Microsoft reports AI is more expensive than paying human employees](https://fortune.com/2026/05/22/microsoft-ai-cost-problem-tokens-agents/)**
Microsoft is abruptly pulling Claude Code licenses from its internal developers ahead of the new financial year, pushing them toward GitHub Copilot CLI instead. The economics of agentic AI are proving brutal; Uber's CTO even admitted the company burned through its entire 2026 AI coding budget in just four months. Token deflation simply isn't keeping up with the sheer volume of consumption required by AI agents.

**[JWT is a scam and your app doesn’t need it](https://www.dusanmalusev.dev/blog/jwt-is-a-scam-and-your-app-doesnt-need-it)**
A fiery, cathartic rant attacking the industry-wide cargo cult of using JWTs for user sessions. The author points out that "stateless auth" is a myth because proper invalidation requires maintaining a revocation list in a database anyway, negating the entire point of skipping the database round-trip. The community broadly agrees: just use opaque bearer tokens backed by a fast Redis lookup and save yourself the refresh-token dance.

**[We made our filesystem 47× faster by deleting it](https://microsandbox.dev/blog/oci-filesystem-47x-faster)**
The team behind microsandbox got tired of the FUSE boundary latency killing their VM performance. Instead of trying to optimize their user-space overlay, they replaced it entirely by compiling a pre-built EROFS Linux disk image and letting the guest VM mount it directly. Trashing their own clever user-space code for a boring in-kernel feature resulted in a massive 47x speedup across the board.

**[Improving C# Memory Safety](https://devblogs.microsoft.com/dotnet/improving-csharp-memory-safety/)**
C# is stealing the best parts of Rust's safety model for .NET 11. The `unsafe` keyword is being expanded from simply marking pointers to defining explicit, caller-facing safety contracts that propagate through the call graph. It’s a huge language shift that forces developers to explicitly document and discharge safety obligations at the boundaries.

**[Reverse engineering circuitry in a Spacelab computer from 1980](https://www.righto.com/2026/05/reverse-engineering-spacelab-computer.html)**
Ken Shirriff delivers again, this time tearing down the French-built Mitra 125 MS minicomputer used on the Space Shuttle's Spacelab. Built entirely without microprocessors, the system's 32-bit ALU spanned multiple boards packed with 74181 chips. Pure hardware nostalgia and a fascinating look at aerospace computing history.

**[Don’t just paste the AI at me](https://dontquotetheai.com/)**
A sharp cultural pushback against people dumping raw ChatGPT output into PRs, emails, and comments. The author argues that lazily pasting unedited bot responses is the modern equivalent of "forwarding the email" and instantly makes colleagues lose respect for you.

## Show HN & Launches

**[Sp.h is the standard library that C deserves](https://spader.zone/sp/)**
A 15,000-line, single-header C99 library designed to completely replace `libc`. It drops legacy cruft, forces programs to own their memory allocations instead of relying on a runtime heap, and entirely ditches null-terminated strings in favor of pointer-plus-length string views.

**[Rubish: A Unix shell written in pure Ruby](https://github.com/amatsuda/rubish)**
An interactive shell that is fully Bash-compatible but compiles syntax into Ruby code executed by the Ruby VM.

**[Bun.Image](https://bun.com/docs/runtime/image)**
Bun just shipped a chainable image processing pipeline built natively on libjpeg-turbo and SIMD geometry kernels. It runs completely off the main JavaScript thread with zero npm dependencies and no native addon build steps. 

## Discussion & Debate

**[BambuStudio has been violating PrusaSlicer AGPL license since their fork](https://xcancel.com/josefprusa/status/2054602354851254330)**
Josef Prusa sparked a massive fight in the 3D printing community by calling out Bambu Lab for AGPL violations regarding their closed-source network plugins. The thread evolved into a heated debate about the ethics of hardware companies leveraging open-source code while locking down telemetry and routing data through restrictive legal frameworks.

**[Polsia raised $30M; source map: fake ARR, dead users](https://zero-arr.vercel.app)**
HN loves a good forensic accounting takedown of startup grift, and this post dismantling a company's "$10M ARR" claim delivered. The teardown revealed that 20% of their "ARR" was actually just ad-spend pass-through money, prompting intense discussions about the sheer lack of due diligence happening in the current VC funding cycle.