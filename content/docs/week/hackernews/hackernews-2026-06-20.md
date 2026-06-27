---
title: 2026-06-20
weight: 5
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "linux", "open source"]
---

# Hacker News — 2026-06-20

## Top Story
The "AURpocalypse" is unfolding as the Arch User Repository faces a massive, sustained supply-chain attack. Threat actors have been spinning up new accounts to adopt orphaned packages en masse, injecting data-harvesting malware via npm and Bun into hundreds of PKGBUILD files. It's a stark reminder of the fragility of community-maintained repositories, and the Arch maintainers are currently playing whack-a-mole while forcing a halt on new user registrations to stop the bleeding. 

## Front Page Highlights

**[GPT-5.5 hallucinates 3x more than MIT-licensed GLM-5.2](https://arrowtsx.dev/bigger-models/)** · arrowtsx.dev
The "bigger is better" AI narrative is starting to crack under its own weight. A new analysis reveals that while massive proprietary models like GPT-5.5 and DeepSeek V4 Pro top the benchmarks, their hallucination rates are soaring (86% and 94% respectively on the AA-Omniscience benchmark) compared to smaller open-weight models like the 40B active-parameter GLM-5.2. The trillion-parameter models have essentially forgotten how to say "I don't know," opting instead to confidently generate highly structured, technically impossible solutions to logic paradoxes.

**[I Stored a Website in a Favicon](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/)** · timwehrle.de
A beautifully pointless web dev hack that epitomizes the hacker spirit. The author realized that since a favicon is just an image, and pixels are just bytes, you can cram an entire HTML payload into the RGB channels of the file. By using a 9x9 pixel PNG, they packed a 208-byte payload into the image and wrote a tiny JS bootstrap loader to unpack the bytes and render the site. 

**[Linux Eliminates the Strncpy API After Six Years of Work](https://www.phoronix.com/news/Linux-7.2-Drops-strncpy)** · phoronix.com
Good riddance to a persistent source of security flaws. After six years of sustained effort and 362 commits, the Linux 7.2 kernel has finally eradicated the deprecated and dangerous `strncpy()` function. Kernel developers are now forced to use safer alternatives like `strscpy()` for NUL-terminated destinations, closing the book on an API known for counter-intuitive behavior and redundant zero-filling performance hits.

**[Agency stole bestselling author’s book, used AI to relaunch as their own](https://waxy.org/2026/06/the-wholesale-plagiarism-of-obscure-sorrows/)** · waxy.org
A grim look at modern SEO and AI grift. A San Francisco marketing agency ripped the entirety of John Koenig’s *The Dictionary of Obscure Sorrows*, replaced the original human-made art with artifact-ridden DALL-E slop, injected their own affiliate links, and used the wholesale theft as a portfolio piece. Thanks to the rapid decay of search quality, the bootleg site now outranks the actual author on Google and is cited as the official source by AI search engines like ChatGPT and Gemini.

**[Inference cost at scale with napkin math](https://injuly.in/blog/napkin-inference-cost/index.html)** · injuly.in
An excellent, pragmatic deep dive into the hardware economics of serving Large Language Models. The author breaks down matrix multiplication costs and memory bandwidth limits on NVIDIA B200s, explaining why KV-caching is absolutely mandatory to prevent compute cores from sitting idle. With a 32B parameter model and techniques like Grouped-Query-Attention, the math shows you can comfortably serve over 300 users concurrently per GPU if you manage your memory correctly.

**[The Doctor Who Treats Patients with a Gaming Mouse](https://textexpander.com/blog/doctor-gaming-mouse)** · textexpander.com
Fascinating workflow optimization from the telehealth frontlines. A doctor mapped the 12 side buttons of a Razer Naga MMO gaming mouse to trigger massive, branching TextExpander snippets. Instead of typing out notes and risking omission errors due to decision fatigue late in a shift, a single thumb click generates comprehensive, standard-compliant clinical assessments, prescriptions, and follow-up plans. 

**[Big Tech is borrowing like never before](https://startupfortune.com/big-tech-is-borrowing-like-never-before-and-the-fed-just-made-that-a-lot-more-expensive/)** · startupfortune.com
The AI infrastructure buildout has quietly shifted from being a cash-flow story to a bond-market story. With Nvidia selling $25 billion in investment-grade debt, and Oracle, Alphabet, Meta, and Amazon following suit, the industry is leveraging heavily to fund their data center races. With interest rates hovering around 4% and the Fed remaining hawkish, the old tech trade of focusing strictly on margins and cash reserves is increasingly tied to macroeconomic policy and debt servicing.

**[From PGP to Mythos: a brief history of export controls](https://techcrunch.com/2026/06/19/encryption-spyware-and-now-mythos-history-shows-why-cyber-export-control-doesnt-work/)** · techcrunch.com
The White House recently ordered Anthropic to restrict the export of its powerful 'Mythos' and 'Fable' AI models to anyone outside the US over national security concerns, sparking a massive debate on the viability of digital export controls. The piece draws sharp parallels to the 1990s Crypto Wars, when the US government unsuccessfully tried to classify PGP encryption as a dangerous munition, highlighting that these bans historically do little to stop the global proliferation of software.

## Show HN & Launches
Lots of great indie and open-source launches today. **[Microcrad](https://github.com/oraziorillo/microcrad)** is a tiny, scalar-valued automatic differentiation engine and neural network written entirely in C—an excellent educational port of Andrej Karpathy's Micrograd. On the mobile side, **[Ember](https://github.com/DatanoiseTV/ember-hackernews)** is a new native iOS Hacker News reader built in pure SwiftUI that treats accessibility (like dynamic type, color-blind friendly cues, and VoiceOver) as a first-class feature rather than an afterthought. Finally, **[Make PDFs look scanned](https://github.com/overflowy/make-look-scanned)** is a neat CLI and in-browser WASM tool that degrades pristine PDFs to look like physical printouts, complete with skew, scanner grain, and edge shadow.

## Discussion & Debate
The AUR supply-chain attack sparked a predictable but necessary debate about the security posture of Linux package managers, with commenters arguing fiercely over whether mandatory 2FA or strict local code review is the actual fix for trusting random maintainers. Meanwhile, the UK government's newly proposed "age-gate" ban on VPNs for users under 16 is drawing heavy fire, with the technical community pointing out the obvious impossibility of enforcing it without completely compromising internet privacy.