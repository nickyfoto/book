---
title: 2026-04-17
weight: 4
categories: ["News", "Tech"]
tags: ["artificial intelligence", "open source", "programming languages", "cybersecurity", "privacy"]
---

# Hacker News — 2026-04-17

## Top Story
The biggest firestorm today is the deceptively named "Parents Decide Act" (H.R. 8250), which would mandate that Apple, Google, and every OS vendor verify the age of users at the OS level during device setup. The community is up in arms because this essentially outlaws anonymous general-purpose computing, effectively forcing a national identification layer onto everything from laptops to smart TVs.

## Front Page Highlights

**[Discourse Is Not Going Closed Source](https://blog.discourse.org/2026/04/discourse-is-not-going-closed-source/)**
After Cal.com closed their codebase citing the threat of AI vulnerability scanners, Discourse's co-founder fired back with a vigorous defense of the GPL. The post argues that hiding code is a business decision masquerading as security, and that fighting AI-powered attacks requires an open ecosystem where defenders can run the exact same LLM scanners to find and patch bugs first.

**[Ada, Its Design, and the Language That Built the Languages](https://www.iqiipi.com/the-quiet-colossus.html)**
A phenomenal piece of PL archaeology pointing out that the safety features Rust, Go, and C# are currently championing were mostly solved by the DoD's Ada back in 1983. It is a great reminder that the industry spent forty years ignoring Ada for being "too verbose," only to slowly and painfully reinvent its module separation, generic constraints, and memory safety checks from scratch.

**[288,493 Requests – How I Spotted an XML-RPC Brute Force from a Weird Cache Ratio](https://marcindudek.dev/blog/xmlrpc-brute-force-cache-rate/)**
A fantastic debugging write-up where the author noticed their Cloudflare cache hit ratio had unexpectedly plummeted to 0.8%. Instead of a noisy server crash, the culprit was a quiet but massive `system.multicall` XML-RPC brute-force attack testing hundreds of credentials per single POST request to slip past basic rate limits.

**[How Silicon Valley Is Turning Scientists into Exploited Gig Workers](https://www.thenation.com/article/society/ai-silicon-valley-andreesen-thiel-stem/)**
An incisive critique alleging that tech elites like Peter Thiel and Marc Andreessen have actively pushed to defund public science agencies. The resulting academic job drought has conveniently created a desperate talent pool of PhDs willing to train and verify AI models for $30 an hour on platforms like ScaleAI and Mercor.

**[30 Years of HPC: many hardware advances, little adoption of new languages](https://chapel-lang.org/blog/posts/30years/)**
A sobering look at High-Performance Computing, where core counts have jumped from the thousands to the millions over thirty years, but the software stack is still largely stuck relying on C, C++, Fortran, and MPI. The author argues that the lack of modern, hardware-agnostic scalable languages with built-in locality awareness is severely holding the field back.

**[Taking a Look at Compression Algorithms](https://cefboud.com/posts/compression/)**
One of those classic HN rabbit holes where a developer set out to write a custom Kafka broker and ended up deep-diving into DEFLATE, LZ77, and Huffman coding. A highly readable breakdown of how compression formats construct binary trees from the bottom up to assign shorter codes to frequent symbols.

## Show HN & Launches
In hardware hacking, someone hooked up Claude Code directly to an oscilloscope and SPICE simulator to build a tight feedback loop for circuit design verification. For massive codebases, **[mergetopus](https://github.com/mwallner/mergetopus)** launched—a slick Git tool that splits agonizing, highly-conflicted merges into isolated, parallelizable slice branches for your team to resolve independently. There is also an incredibly clever project called **[One Pager](https://www.patrickweaver.net/blog/one-pager-self-editing-html/)**, an HTML file that uses `contenteditable` attributes to literally edit itself in the browser and save the changes back locally without a backend. Finally, robotics tinkerers should check out **[ReBot-DevArm](https://github.com/Seeed-Projects/reBot-DevArm)**, a 100% open-source 6-DOF robotic arm aimed at embodied AI.

## Discussion & Debate
There is a highly pedantic (and thus, very HN) debate happening over a Red Hat blog post calling out VMware's recent Kubernetes benchmark claims. Red Hat correctly points out that VMware padded their "5.6x pod density" victory by pitting 300 virtual nodes against just 4 of OpenShift's bare-metal nodes, turning a performance test into a queuing theory parlor trick. Elsewhere, a TechCrunch piece on marketing firms manufacturing indie rock hype using "creator farms" on TikTok has sparked a cynical but predictable thread validating the Dead Internet Theory.