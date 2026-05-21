---
title: 2026-05-16
weight: 4
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "open source", "web development"]
---

# Hacker News — 2026-05-16

## Top Story
**[I broke AppLovin’s mediation cipher protocol](https://www.buchodi.com/i-broke-applovins-mediation-cipher-protocol/)**
A masterclass in reverse engineering where the author decrypted AppLovin's ad-mediation traffic and proved that the network deterministically fingerprints iPhones regardless of Apple's App Tracking Transparency (ATT) settings. By cracking a weak, unauthenticated SplitMix64 cipher, they revealed a payload of 50 device fields—including boot time, system volume, and free memory—being broadcast to dozens of ad networks, proving that the privacy controls iOS users rely on are functionally theater.

## Front Page Highlights

**[O(x)Caml in Space](https://gazagnaire.org/blog/2026-05-14-borealis.html)**
A pure-OCaml protocol stack is running in low Earth orbit, proving that functional programming and memory safety have real applications in mission-critical aerospace environments. By using Jane Street's OxCaml fork, the team dropped latency to 9ns per packet and completely eliminated garbage collection pauses on the hot path. 

**[Europe built sovereign clouds to escape US control. Forgot about the processors](https://www.theregister.com/systems/2026/05/16/europe-built-sovereign-clouds-to-escape-us-control-then-forgot-about-the-processors/5237735)**
A sharp piece pointing out that Europe's €2B push for "sovereign clouds" completely ignores the hardware layer. Intel's Management Engine (ME) and AMD's Platform Security Processor (PSP) run at Ring -3, and under the US RISAA law, hardware manufacturers can be compelled to provide intelligence access regardless of local cloud certifications.

**[Windows 9x Subsystem for Linux](https://codeberg.org/hails/wsl9x)**
The unhinged weekend project of the week: a developer managed to run a modern Linux kernel (6.19) cooperatively inside the Windows 9x kernel. It relies on a custom VxD driver and MS-DOS prompts for TTY, meaning you get memory protection and preemptive scheduling without having to reboot your retro battlestation.

**[Mode collapse has a name, and he’s selling cancer treatment advice on Amazon](https://danielmay.co.uk/posts/cheap-agents-alumni-shirts-and-elias-thorne/)**
A terrifying write-up on how LLM instruction tuning reliably produces the exact same character archetypes across completely different foundation models—like a lighthouse keeper named "Elias Thorne". That exact name is now generating slop books on Amazon about leukemia treatments and YouTube algorithms, highlighting how the internet's trust substrate is actively collapsing.

**[I tried to make Claude make me money on open-source bounties](https://github.com/ztc00/algora-scout/blob/main/POST.md)**
A developer set up a Claude AI agent to hunt open-source coding bounties on Algora and made exactly $0. The takeaway isn't that AI can't code; it's that the open bounty market is so saturated with automated agent spam that maintainers are ignoring legitimate PRs entirely, completely breaking the economic loop for hunters.

**[Gaining control of every projector and camera on campus](https://www.edna.land/blogs/posts/scanning/)**
A classic college network hacking story where the author brute-forced internal DNS subdomains at the Colorado School of Mines and eventually used AF_XDP to mass-scan the network at 300,000 ports per second. They found unauthenticated APIs for campus projectors and cameras, allowing them to make the hardware dance in sync.

**[Someone Shared a Real Monet Painting as AI and Asked for Critiques](https://petapixel.com/2026/05/14/someone-shared-a-real-monet-painting-as-ai-and-asked-for-critiques/)**
A user posted a real Claude Monet painting on social media, tagged it "Made with AI", and asked for critiques. Naturally, people wrote essays trashing its "egregiously vague" depth and "incoherent composition," perfectly demonstrating the human psychological bias against AI-generated art.

**[Moving away from Tailwind, and learning to structure my CSS](https://jvns.ca/blog/2026/05/15/moving-away-from-tailwind--and-learning-to-structure-my-css-/)**
Julia Evans details her migration away from Tailwind to semantic HTML and vanilla CSS. It's a pragmatic look at how modern CSS features like Grid, nested selectors, and `auto-fit` have matured to the point where heavy build steps and massive utility class files aren't strictly necessary anymore.

## Show HN & Launches
* **[Rocksky](https://tangled.org/rocksky.app/rocksky)** launched as a decentralized music tracking and scrobbling platform built on the AT Protocol, offering a drop-in replacement for Last.fm.
* **[Epiq](https://ljtn.github.io/epiq/)** was released as a new local-first, distributed Git-based issue tracker built entirely as a terminal UI.
* The **[Zulip Foundation](https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/)** was announced, transitioning the open-source team chat to an independent nonprofit as the founder steps back to join Anthropic.
* **[Erlang/OTP 29.0](https://www.erlang.org/news/188)** is officially out, bringing native records (EEP-79) and dropping 32-bit Windows support entirely.

## Discussion & Debate
The community is actively grieving the death of the open CTF (Capture The Flag) format as AI agents completely overrun the leaderboards, destroying the traditional ladder for beginners to build genuine cybersecurity skills. There is also a bleak, highly-commented thread reacting to a [Meta employee's account](https://sfstandard.com/pacific-standard-time/2026/05/15/meta-employee-gets-real-horror-working-right-now/) of the psychological toll of imminent layoffs and the grim irony of being pressured to use the AI tools intended to replace them. Finally, a satirical piece declaring ["No way to prevent this"](https://kevinpatel.xyz/posts/no-way-to-prevent-this/) regarding npm supply chain attacks continues to strike a nerve with anyone tired of the JavaScript ecosystem's fragility.