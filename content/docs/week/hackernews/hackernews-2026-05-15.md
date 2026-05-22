---
title: 2026-05-15
weight: 6
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "open source", "privacy", "rust"]
---

# Hacker News — 2026-05-15

## Top Story
The standout news today is the Calif.io team successfully bypassing Apple's Memory Integrity Enforcement (MIE) on the M5 chip to achieve a macOS kernel memory corruption exploit. What makes this particularly fascinating for the technical community is that the researchers built the exploit in just a week with the direct assistance of Anthropic's restricted Claude Mythos Preview model. It is a stark proof-of-concept of what happens when top-tier human researchers pair with agentic AI against state-of-the-art hardware mitigations.

## Front Page Highlights

**Mullvad exit IPs are surprisingly identifying** · [tmctmt.com](https://tmctmt.com/posts/mullvad-exit-ips-as-a-fingerprinting-vector/)
A brilliant piece of reverse engineering showed that Mullvad's WireGuard exit IPs are not truly random. The author discovered that due to a naive seed-based RNG implementation in Rust, exit IPs are deterministically assigned based on the user's public key. This demonstrates how seemingly harmless bounds-scaling with static seeds can create a massive deanonymization vector, allowing correlation attacks across different servers with over 99% accuracy.

**Welcome to the Strip Mining Era of OSS Security** · [metabase.com](https://www.metabase.com/blog/strip-mining-era-of-open-source-security)
Metabase sounded the alarm on a new reality for open-source maintainers, where LLMs are increasingly being used to bulk-scan repositories for vulnerabilities. While finding software bugs is ultimately good, the sheer volume of automated, low-effort reports and minor vulnerabilities is turning open-source maintenance into a grueling, reactive chore. 

**O(x)Caml in Space** · [gazagnaire.org](https://gazagnaire.org/blog/2026-05-14-borealis.html)
A fantastic write-up from the Parsimoni team about deploying a pure-OCaml CCSDS protocol stack to low Earth orbit. They leveraged Jane Street's OxCaml fork to achieve strict latency guarantees, dropping p99.9 latency to 9ns by using stack-bound allocations to completely eliminate garbage collection pressure on the hot path. 

**reCAPTCHA Mobile Verification Is Bringing the Play Integrity API to Desktops** · [discuss.grapheneos.org](https://discuss.grapheneos.org/d/35428-recaptcha-mobile-verification-is-bringing-the-play-integrity-api-to-desktops)
A heavily discussed privacy warning about Google and Apple pushing hardware-based attestation to the web. Google's plan to require QR scans from certified smartphones to pass desktop captchas threatens to lock out alternative OS users, such as those on GrapheneOS or desktop Linux. The community largely views this as an anti-competitive enclosure of the web masquerading as a security feature.

**Power Tools Got Worse on Purpose** · [worseonpurpose.com](https://www.worseonpurpose.com/p/your-power-tools-got-worse-on-purpose)
An excellent deep dive into the corporate consolidation of tool brands. The author contrasts Techtronic Industries, which bought Milwaukee and invested heavily in R&D, with Stanley Black & Decker, which bought Craftsman and Porter-Cable and gutted their manufacturing to extract margin. It is a classic case study in private equity destroying institutional value.

**WinCE64 – Windows CE 2.11 for N64** · [github.com/ThroatyMumbo/WinCE64](https://github.com/ThroatyMumbo/WinCE64)
A developer built a custom HAL to run stock Windows CE 2.11 on a real Nintendo 64. It features a functional desktop shell, mouse support via the N64 controller, and SD card mounting over an EverDrive cartridge. This is peak hacker joy, doing something incredibly difficult at a very low level for absolutely no practical reason.

**A 0-click exploit chain for the Pixel 10** · [projectzero.google](https://projectzero.google/2026/05/pixel-10-exploit.html)
Project Zero dropped an elegant exploit chain for the Pixel 10. After porting an existing Dolby 0-click vulnerability, they audited the new VPU driver and found a trivial memory mapping bug that allows mapping arbitrary physical memory. Achieving arbitrary kernel read-write access took just five lines of code.

## Show HN & Launches
`WhichLLM` is a highly practical CLI tool that auto-detects your local hardware and recommends the best open-weight LLMs you can actually run, ranking them by merged benchmark scores rather than falling back on a simplistic size heuristic. `Sx` launched as an open-source package manager designed specifically for sharing AI skills, rules, and MCP configs across engineering teams. In the health tech space, `GlycemicGPT` offers an open-source, self-hosted diabetes management platform that pulls data directly from CGMs and insulin pumps to provide AI-powered analysis while keeping user data private.

## Discussion & Debate
The most heated technical drama today revolves around an issue in the Bun repository regarding a Rust rewrite. The codebase reportedly fails basic Miri checks and allows undefined behavior in safe Rust, prompting frustrated commenters to beg the team to stop "vibe coding" with AI and hire a real Rust developer. Meanwhile, the Turso database team sparked a wider industry debate about open-source incentives by retiring their $1,000 bug bounty program. They were simply overwhelmed by an army of "slop" consisting of LLM-generated bug reports with hallucinated vulnerabilities, making the triage process completely unsustainable for their maintainers.