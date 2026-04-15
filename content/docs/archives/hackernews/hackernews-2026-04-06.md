---
title: 2026-04-06
weight: 8
categories: ["News", "Tech"]
tags: ["artificial intelligence", "open source", "systems programming", "startups", "performance optimization"]
---

# Hacker News — 2026-04-06

## Top Story
Investors are aggressively trying to offload $600M in OpenAI secondary shares, but buyers have completely dried up, pivoting to dump cash into Anthropic instead. It's a stark market sentiment shift driven by Anthropic's dominance in the lucrative enterprise space and growing caution over OpenAI's ballooning infrastructure costs. 

## Front Page Highlights

**[We replaced Node.js with Bun for 5x throughput](https://trigger.dev/blog/firebun)** · [Source](https://trigger.dev/blog/firebun)
A deep, battle-tested engineering write-up on stripping down a hot-path service, profiling Node, and migrating to Bun. The team achieved a 5x throughput bump and shrunk their container from 180MB to 68MB by compiling to a single binary. It's classic HN catnip, made better by their documentation of a brutal memory leak in Bun's fetch handler where un-resolved `Promise<Response>` objects hold memory forever during client disconnects.

**[Case study: recovery of a corrupted 12 TB multi-device pool](https://github.com/kdave/btrfs-progs/issues/1107)** · [Source](https://github.com/kdave/btrfs-progs/issues/1107)
A system operator managed to rescue a 12TB Btrfs array from a 46,000+ commit infinite repair loop by writing 14 custom C tools against the internal btrfs-progs API. This is the kind of extreme file-system wizardry that the community loves, resulting in only 7.2MB of total data loss and yielding nine actionable upstream improvement proposals for the btrfs team.

**[Rendering arbitrary-scale emojis using the Slug algorithm](https://leduyquang753.name.vn/blog/2026/4/4/rendering-arbitrary-scale-emojis-using-the-slug-algorithm)** · [Source](https://leduyquang753.name.vn/blog/2026/4/4/rendering-arbitrary-scale-emojis-using-the-slug-algorithm)
With Eric Lengyel releasing the Slug algorithm into the public domain, it has been integrated into the HarfBuzz GPU library. This post is a fascinating graphics deep-dive into how to parse complex COLRv1 fonts and render vector gradient emojis at any scale, computing glyph coverage directly within the fragment shader without relying on pre-rendered bitmaps or SDFs.

**[Peter Thiel’s big bet on solar-powered cow collars](https://techcrunch.com/2026/04/04/unpacking-peter-thiels-big-bet-on-solar-powered-cow-collars/)** · [Source](https://techcrunch.com/2026/04/04/unpacking-peter-thiels-big-bet-on-solar-powered-cow-collars/)
Founders Fund just led a $220M round for Halter, a New Zealand startup putting solar-powered smart collars on cows to create virtual fences. It's a refreshing break from agentic AI—just solid hardware solving physical routing problems using audio and vibration cues, driving massive ROI for farmers by optimizing grazing.

**[Copilot is 'for entertainment purposes only’, per Microsoft’s terms of use](https://techcrunch.com/2026/04/05/copilot-is-for-entertainment-purposes-only-according-to-microsofts-terms-of-service/)** · [Source](https://techcrunch.com/2026/04/05/copilot-is-for-entertainment-purposes-only-according-to-microsofts-terms-of-service/)
Microsoft is catching heat because Copilot's Terms of Service literally claims it is for "entertainment purposes only" and shouldn't be relied upon for important advice, severely undermining their enterprise B2B push. Microsoft claims this is "legacy language" that will be updated, but it perfectly highlights the ongoing legal liability tap-dance around AI hallucinations.

## Show HN & Launches
A massive day for local and open-source AI tooling. [Modo](https://github.com/mohshomis/modo) launched as an MIT-licensed alternative to Cursor and Windsurf, forcing AI to write specs and task plans before generating code. [GuppyLM](https://github.com/arman-bd/guppylm) is a brilliant pedagogical project: a 9M parameter LLM trained in 5 minutes on a Colab notebook just to prove that model architecture isn't magic. For browser integration, [Gemma Gem](https://github.com/kessler/gemma-gem) stuffs a quantized Gemma 4 model directly into a Chrome extension via WebGPU, while [Recall](https://github.com/aayu22809/Recall) brings local multimodal semantic search to desktop files using Gemini Embedding 2 and ChromaDB. Also notable is [Sheets](https://github.com/maaslalani/sheets), a clean, Vim-keybind friendly TUI spreadsheet app written in Go.

## Discussion & Debate
[Endian wars and anti-portability: this again?](https://dalmatian.life/2026/04/03/endian-wars-and-anti-portability-this-again/) sparked the inevitable architectural holy war today. The author argues vehemently for maintaining big-endian and 32-bit support in Linux, noting that big-endian architectures routinely catch invalid type casts and memory corruption bugs (like a recent Git bug) that little-endian systems quietly ignore. The thread is a classic HN mix of C veterans validating strict codebase portability and pragmatists arguing against carrying technical debt for commercially dead platforms.