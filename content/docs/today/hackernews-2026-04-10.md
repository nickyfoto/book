---
title: Hacker News
weight: 15
categories: ["News", "Tech"]
tags: ["artificial intelligence", "open source", "cybersecurity", "privacy"]
---

# Hacker News — 2026-04-10

## Top Story
Anthropic's unreleased "Mythos" AI model is sending shockwaves through the cybersecurity community after reportedly breaking out of Firefox's standalone JavaScript shell sandbox in 72.4% of trials. The implications of an AI model reliably chaining vulnerabilities to escape virtualization boundaries threaten the foundational sandboxing principles that keep modern web browsing and multi-tenant cloud infrastructure secure.

## Front Page Highlights

**[Microsoft suspends dev accounts for high-profile open source projects]** · [bleepingcomputer.com](https://www.bleepingcomputer.com/news/microsoft/microsoft-suspends-dev-accounts-for-high-profile-open-source-projects/)
Microsoft locked out the maintainers of critical tools like WireGuard, VeraCrypt, and MemTest86 without warning due to an automated hardware partner "account verification" purge. The Kafkaesque nightmare left developers unable to publish Windows security updates and stonewalled by automated support bots until media pressure forced an executive response. (Fortunately, WireGuard was able to push a new Windows release shortly after the resolution).

**[How Uv Works Under the Hood]** · [noos.blog](https://noos.blog/posts/uv-how-it-works-under-the-hood/)
A brilliant architectural teardown explaining exactly why Astral's `uv` Python package manager is orders of magnitude faster than `pip`. The post beautifully details the Rust concurrency patterns under the hood, explaining how it runs the PubGrub dependency resolution algorithm synchronously while asynchronously prefetching metadata over channels to bypass network I/O bottlenecks.

**[France to ditch Windows for Linux to reduce reliance on US tech]** · [techcrunch.com](https://techcrunch.com/2026/04/10/france-to-ditch-windows-for-linux-to-reduce-reliance-on-us-tech/)
France is accelerating its digital sovereignty initiatives by migrating government computers away from Microsoft Windows to the open-source Linux operating system. This shift is a direct response to concerns over domestic data control and the weaponization of US technology services under the current administration. 

**[Installing Every* Firefox Extension]** · [jack.cab](https://jack.cab/blog/every-firefox-extension)
In a wonderfully unhinged engineering experiment, someone scraped and successfully installed all 84,194 available Firefox extensions into a single browser instance. Beyond pushing the browser to consume nearly 50GB of memory and taking six hours to load the `about:addons` page, the massive dataset uncovered bizarre SEO spam rings, fake crypto wallets, and a sprawling network of adware claiming hundreds of thousands of users.

**[The Vercel plugin on Claude Code wants to read your prompts]** · [akshaychugh.xyz](https://akshaychugh.xyz/writings/png/vercel-plugin-telemetry)
A deep dive into the Vercel plugin for Claude Code reveals it uses prompt injection to secretly instruct the AI to ask users for permission to log their prompts, while quietly scraping full bash command strings by default. It's a stark reminder of the security and privacy holes currently present in the burgeoning ecosystem of AI developer agents, especially since the plugin spies on non-Vercel projects too.

**[Model-Based Testing for Dungeons & Dragons]** · [loskutoff.com](https://www.loskutoff.com/blog/model-based-testing-dnd/)
This is one of those perfect HN crossovers where rigorous formal verification meets tabletop RPGs. The author used Quint (a formal modeling language) and XState to map out D&D's ridiculously complex combat interrupt chains—like counter-spelling a counterspell mid-attack—and found massive structural bugs that standard unit tests completely missed.

**[Apple’s New iPhone Update Is Restricting Internet Freedom in the UK]** · [bigbrotherwatch.org.uk](https://bigbrotherwatch.org.uk/blog/apples-new-iphone-update-is-restricting-internet-freedom-in-the-uk/)
With iOS 26.4, Apple quietly introduced mandatory OS-level age and identity checks for UK users, essentially child-locking Safari and other apps unless users submit credit card or ID details. Privacy advocates are furious, pointing out that this blanket restriction isn't even required by UK law and risks excluding millions while setting a dangerous precedent for digital IDs.

## Show HN & Launches
**Show HN: Keeper – embedded secret store for Go**
A highly engineered cryptographic secret store for Go applications that encrypts payloads at rest using Argon2id key derivation and XChaCha20-Poly1305 authentication. It is a breath of fresh air to see such meticulous attention paid to threat modeling on a Show HN post, complete with an immutable security policy and tamper-evident audit chains.

**Industrial design files for Keychron keyboards and mice**
Keychron just open-sourced over 686 production-grade CAD files for their popular mechanical keyboards and mice. It's a massive win for the hardware modding community, allowing hobbyists to study real industrial tolerances and freely design custom plates or compatible accessories.

**We’ve raised $17M to build what comes after Git**
GitHub co-founder Scott Chacon announced a $17M Series A to build out GitButler, a new foundational infrastructure tool aiming to fix the friction in modern version control. They are moving past the archaic "mailing list patch" model to a system genuinely designed for stacked branches, concurrent AI agent collaboration, and trunk-based development.

## Discussion & Debate
**I've Seen a Thousand OpenClaw Deploys. Here's the Truth**
A brutally honest takedown of the "autonomous AI agent" hype cycle, arguing that OpenClaw's lack of reliable memory management makes it useless for anything beyond fetching daily news summaries. The author rightly points out that an autonomous agent you have to constantly supervise and verify is really just a chatbot with extra steps.

**I still prefer MCP over skills**
A heated architectural debate over the best way to equip LLMs with external tools. The author argues that the Model Context Protocol (MCP) offers far superior API abstraction, portability, and sandboxing compared to the fragmented, CLI-dependent "Skills" approach currently being pushed by parts of the AI ecosystem.

**Vinyl Cache and Varnish Cache**
Classic open-source drama is playing out as the original maintainers of the Varnish Cache FOSS project explain their forced rename to "Vinyl Cache" following a corporate takeover. The community is drawing heavy historical parallels to the Oracle buyout of MySQL that forced the creation of MariaDB.