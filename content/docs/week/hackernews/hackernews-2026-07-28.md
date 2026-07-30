---
title: 2026-07-28
weight: 1
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "software engineering", "tech culture"]
---

# Hacker News — 2026-07-28

## Top Story
Researchers at Anthropic have used Claude Mythos Preview to autonomously discover significant new cryptographic vulnerabilities, including an attack that cuts the effective key strength of the post-quantum signature scheme HAWK-256 in half. The finding is creating waves because it demonstrates AI moving beyond simple code generation and into elite, zero-day cryptanalysis, marking a major shift in both offensive and defensive cybersecurity capabilities.

## Front Page Highlights

**[Judge Rejects Google’s Attempt to DMCA Its Way Out of Being Scraped](https://storage.courtlistener.com/recap/gov.uscourts.cand.461513/gov.uscourts.cand.461513.42.0.pdf)** · Techdirt
Google attempted to use the DMCA's anti-circumvention clause to stop SerpAPI from scraping its search results, but a judge threw out the core claims because Google does not hold the copyright to the underlying indexed websites. HN readers love the irony of a massive corporation built entirely on crawling the open web attempting to pull the ladder up behind it by weaponizing copyright law.

**[GrapheneOS Defends Data-Wiping Function That Blocked US Border Search](https://www.pcmag.com/news/grapheneos-defends-data-wiping-function-that-blocked-us-border-search)** · PCMag
An environmental activist used a "duress password" on his GrapheneOS Pixel to permanently wipe the device during a US Customs search, leading to a federal indictment for destroying property. GrapheneOS maintains they have no legal obligation to weaken their software's security, fueling a long-running community debate over encryption backdoors, border search overreach, and constitutional digital rights.

**[Running Kimi K3 on a M1 Mac](https://github.com/gavamedia/deltafin)** · GitHub
A new research project called Deltafin manages to run Moonshot's massive 2.8T parameter Mixture-of-Experts model (Kimi K3) on a single Apple Silicon laptop with 64GB of RAM. By keeping the 114 GB "spine" resident and streaming the 1.45 TB of active expert weights directly from an NVMe disk or over the network, it can execute reproducible inference at a sluggish but impressive 15 seconds per token.

**[Golang Maps: how Swiss Tables replaced the old bucket design](https://blog.gaborkoos.com/posts/2026-07-24-Golang-Maps-How-Swiss-Tables-Replaced-the-Old-Bucket-Design/)** · Gabor Koos
Go 1.24 replaces its classic hash map bucket implementation with a highly optimized Swiss Table-inspired design. It's a fantastic low-level engineering read that shows how continuous memory grouping, tight metadata scanning, and a flatter probe path dramatically reduce pointer chasing and CPU cache misses.

**[Zig’s Incremental Compilation Internals](https://mlugg.co.uk/posts/incremental-compilation-internals/)** · mlugg.co.uk
A Zig core team member explains how the language achieves lightning-fast rebuilds by caching generated ZIR on disk, tracking a granular dependency graph of source hashes, and memory-mapping the output file. Instead of recompiling everything, the compiler identifies exactly what changed and patches the bytes directly into the binary.

**[Removing React.js from the codebase and adapting Htmx for UI interactivity](https://misago-project.org/t/removing-reactjs-from-the-codebase-and-adapting-htmx-for-ui-interactivity/1267/)** · Misago
The developer of the Misago forum software details the painful realization that building both Django templates and React components was duplicating work and adding massive client-side bloat. Swapping React out for HTMX dropped their JavaScript bundle size significantly while retaining modern UI interactivity for features like moderation and upvoting.

## Show HN & Launches
**[Show HN: Yap – OSS on-device voice dictation for macOS](https://github.com/FrigadeHQ/yap)** is a blazing-fast, 4MB native Swift app that leverages macOS 26's built-in APIs for local dictation without requiring massive Whisper model downloads. **[Show HN: XY – Fast, composable, GPU-accelerated charts](https://github.com/reflex-dev/xy)** is a new Python and Rust charting library that can render 100 million exact markers in fractions of a second, or compute screen-bounded density surfaces for 10-billion-point datasets. OpenAI open-sourced **[Codex Security](https://github.com/openai/codex-security)**, a CLI and TypeScript SDK that allows developers to autonomously find, validate, and patch security vulnerabilities in their codebases using LLMs. Finally, **[Show HN: Formally verified 3D CSG](https://github.com/schildep/verified-3d-mesh-intersection)** demonstrates a fascinating hybrid of AI and formal verification: an LLM wrote 1,000+ lines of Lean 4 code and 60,000 lines of proofs for 3D mesh intersection, but humans only need to review and trust the 93-line mathematical specification.

## Discussion & Debate
A delightfully nerdy and heavily upvoted thread dissects the **[dangling document effect](https://austinsnerdythings.com/2026/07/28/claude-opus-5-dangling-document-effect/)** in Claude Opus 5, where sending the model a completely empty message containing only the markdown horizontal rule `---` tricks it into "completing" a phantom document. This boundary confusion reliably generates thousands of tokens of bizarre, unprompted creative writing—often about cartographers—proving that bare-metal API integrations need system prompts to ground the model in a conversational frame. Elsewhere, outrage and schadenfreude abound over a **[Netflix executive fired](https://nypost.com/2026/07/26/us-news/netflix-exec-goes-ballistic-after-being-fired-for-stunning-trust-exercise-confession-at-retreat-suit/)** after admitting to using medically prescribed ketamine during a corporate "vulnerability-trust exercise". The overwhelming community consensus: never treat HR as your friend, and forced vulnerability exercises are almost always a trap. Finally, a massive argument broke out after Shopify CEO Tobias Lütke endorsed a proposal for **[stripping voting rights](https://fortune.com/2026/07/27/shopify-ceo-voting-rights-stripping-americans-19th-century/)** from Americans who pay no income tax, sparking fierce debates over housing NIMBYism, tech oligarchy, and the political disconnect of Silicon Valley billionaires.