---
title: 2026-09-07
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "software engineering", "webassembly", "geospatial", "web crawling"]
---

# Simon Willison — 2026-09-07

## Highlight
This daily digest captures Simon's core philosophy on software engineering, highlighting a **strong warning against greenfield rewrites** alongside practical demonstrations of **vibe-coding browser-based utilities** like a client-side WebAssembly video compressor.

## Posts

**[There’s No Limit to How Bad Code Can Get](https://simonwillison.net/2026/Sep/6/theres-no-limit-to-how-bad-code-can-get/)** · [Lobste.rs Comment](https://lobste.rs/s/rfn2mn/there_s_no_limit_how_bad_code_can_get#c_8kdtaw)
Simon shares his perspective on why **starting a project from scratch when technical debt builds up is almost always a trap**. In a Lobste.rs comment, he explains that old systems remain moving targets during rewrites, while the new greenfield teams often underestimate the sheer scale and undocumented nuances of what they are replacing. This usually results in having **two systems in production** rather than one. Simon advises developer teams to instead **shore up legacy code with automated testing and targeted refactors**, referencing Will Larson's article on migrations as the scalable fix to technical debt.

**[Video compressor](https://simonwillison.net/2026/Sep/7/video-compressor/)** · [Tool Demo](https://tools.simonwillison.net/video-compressor)
Faced with a heavy video demo of his map animation recorded on his phone, Simon vibe-coded a client-side video compressor. He utilized **Claude Fable 5.1 in Claude Code for web** to build the single-page application. By leveraging a **WebAssembly build of FFMPEG**, the tool runs completely in the browser, eliminating the need to upload sensitive media files to external servers.

**[Mercator ↔ Equal Earth](https://simonwillison.net/2026/Sep/7/equal-earth/)** · [Tool Demo](https://tools.simonwillison.net/equal-earth)
Following a recent UN vote regarding map projections, Simon got curious about the **Equal Earth projection**. To visualize it, he had **GPT-6 Astra (medium) in ChatGPT Work** generate an animated transition between Mercator and Equal Earth using **D3**. The resulting tool is a smooth, animated in-browser demonstration of the differences between the two map projections.

**[Creepy crawlies](https://simonwillison.net/2026/Sep/7/creepy-crawlies/)** · [git.kernel.org Post](https://people.kernel.org/monsieuricon/creepy-crawlies)
Simon links to a post detailing the **abusive background radiation of crawlers and scrapers** hitting git.kernel.org. Konstantin Ryabitsev highlights that the Linux kernel repository currently spends **more CPU cycles rendering commits for scrapers than on legitimate access** (like git clones), tying up 14 CPU cores across 5 geo-distributed nodes. Simon flags this as a significant concern for **Datasette**, which similarly exposes a large footprint of crawlable, dynamic web pages.

**[llm 0.35](https://simonwillison.net/2026/Sep/7/llm/)** · [GitHub Release](https://github.com/simonw/llm/releases/tag/0.35)
Simon has released **llm 0.35**, a minor update to his flagship command-line LLM utility. The sole update in this release is the integration of OpenAI's newly announced **gpt-6-astra** model.

**[Quoting Jakub Pachocki](https://simonwillison.net/2026/Sep/7/jakub-pachocki/)** · [OpenAI Source](https://openai.com/index/an-alien-mind/#scalable-defense)
This post quotes OpenAI Chief Scientist Jakub Pachocki arguing for **scalable defense via AI**. Pachocki suggests that developing more powerful, aligned models quickly is essential to protect infrastructure and counter rogue agents in real time. However, he emphasizes that the need for defense **should never be used as a cover for recklessness** in AI development.

## Project Pulse
Simon is leaning heavily into **building single-page utilities via generative AI models** (specifically GPT-6 Astra and Claude Fable 5.1), which he refers to as 'vibe-coding'. We also see immediate support for OpenAI's newest models landing in **his open-source LLM CLI tool**, showing his agility in keeping his personal toolchain up to date with frontier capabilities.

🧠 Would you like me to build an interactive quiz based on these 2026 developer trends and AI techniques to test your knowledge?