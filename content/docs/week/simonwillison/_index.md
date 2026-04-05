---
title: Simon Willison
weight: 16
bookCollapseSection: true
categories: ["Blogs", "AI", "Tech"]
tags: ["security", "generative-ai", "ai-security-research", "open-source", "social-engineering"]
---

# Simon Willison — Week of 2026-03-30 to 2026-04-03

## Highlight of the Week
This week highlighted a monumental shift in the open-source security landscape, marking the sudden end of "AI slop" security reports and the arrival of a tsunami of high-quality, AI-generated vulnerability discoveries. High-profile maintainers of the Linux kernel, cURL, and HAPROXY are reporting an overwhelming influx of legitimate bugs found by AI agents, fundamentally altering the economics of exploit development and forcing open-source projects to rapidly adapt to a massive increase in valid bug reports.

## Key Posts
**[Supply Chain Attack on Axios Pulls Malicious Dependency from npm](#)**
Simon analyzed the recent compromise of the Axios HTTP client, sharing a critical, actionable heuristic for spotting malicious packages: investigating npm publishes that lack an accompanying GitHub release. He later detailed the post-mortem, revealing that attackers used sophisticated, highly targeted social engineering—impersonating a company founder and tricking a maintainer into installing a Remote Access Trojan during a fake MS Teams update.

**[Mr. Chatterbox is a (weak) Victorian-era ethically trained model you can run on your own computer](#)**
Exploring the boundaries of ethically trained public-domain models, Simon reviewed a 340m-parameter model trained entirely on 28,000 out-of-copyright Victorian texts from the British Library. While Chinchilla scaling laws indicate the model is starved for data and functions more like a Markov chain, Simon used Claude Code to successfully build a fully working `llm-mrchatterbox` Python CLI plugin entirely from scratch to run it locally.

**[Highlights from my conversation about agentic engineering on Lenny’s Podcast](#)**
Simon shared comprehensive notes from his podcast appearance, outlining how highly competent models like GPT 5.1 and Claude Opus 4.5 pushed developers past a critical "November inflection point". He discussed the emergence of "dark factories" where humans neither type nor read code, and noted that with prototyping becoming incredibly cheap, the primary bottleneck in software engineering has shifted directly to usability testing and validation.

**[Vulnerability Research Is Cooked](#)**
Summarizing the dramatic changes in security, Simon noted that frontier models are uniquely suited for exploit development because they never tire of constraint-solving for exploitability and possess massive context windows for scanning entire source trees. He is tracking this trend closely enough to create a dedicated `ai-security-research` tag, observing that AI agents simply pointing at code and searching for zero-days will drastically alter the security ecosystem.

## Project Updates
It was an intensive week of open-source yak shaving and architectural refactoring across Simon's ecosystem, heavily focused on making `datasette-llm` the centralized hub for model configuration across plugins like `datasette-extract` and `datasette-enrichments-llm`. Simon also executed a rapid development loop to bridge sync/async architectural friction, using Claude to build `llm-all-models-async` to wrap his Mr. Chatterbox model, which cascaded into core hook updates in `llm 0.30` and multiple testing utility releases. Finally, the release of DeepMind's Gemma 4 models triggered rapid local evaluation and a swift bump to `llm-gemini 0.30` to support the new Google AI Studio API endpoints.

## Themes
The dominant threads this week were the rapidly evolving open-source security landscape—both the threat of targeted social engineering supply-chain attacks and the influx of AI zero-day discoveries—and the practical realities of agentic engineering. Simon's hands-on work with Claude Code to write the Mr. Chatterbox plugin, alongside his architectural standardization of Datasette, perfectly demonstrated the tight, optimistic feedback loop between experimenting with new AI capabilities and continuously updating the tooling stack to support them.