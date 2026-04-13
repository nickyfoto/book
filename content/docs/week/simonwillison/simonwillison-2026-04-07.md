---
title: 2026-04-07
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "security", "anthropic", "svg"]
---

# Simon Willison — 2026-04-07

## Highlight
Anthropic's decision to restrict access to their new Claude Mythos model underscores a massive, sudden shift in AI capabilities. It is a fascinating look at an industry-wide reckoning as open-source maintainers transition from dealing with "AI slop" to facing a tsunami of highly accurate, sophisticated vulnerability reports.

## Posts

**[Anthropic’s Project Glasswing - restricting Claude Mythos to security researchers - sounds necessary to me]** · [Source](https://simonwillison.net/2026/Apr/7/project-glasswing/#atom-everything)
Anthropic has delayed the general release of Claude Mythos, a general-purpose model similar to Claude Opus 4.6, opting instead to limit access to trusted partners under "Project Glasswing" so they can patch foundational internet systems. Simon digs into the context, tracking how credible security professionals are warning about the ability of frontier LLMs to chain multiple minor vulnerabilities into sophisticated exploits. He even uses `git blame` to independently verify a 27-year-old OpenBSD kernel bug discovered by the model. He concludes that delaying the release until new safeguards are built, while providing $100M in credits to defenders, is a highly reasonable trade-off.

**[GLM-5.1: Towards Long-Horizon Tasks]** · [Source](https://simonwillison.net/2026/Apr/7/glm-51/#atom-everything)
Z.ai has released GLM-5.1, a massive 754B parameter MIT-licensed model. Testing it via OpenRouter, Simon used his standard SVG "pelican" prompt, and the model surprisingly generated a full HTML page with CSS animations completely unprompted. When the CSS transform broke the layout, Simon made a rare exception to his no-follow-up testing rule, and the model correctly diagnosed the coordinate system issue and spat out fresh HTML to fix it. 

## Project Pulse
Both posts today highlight a broader trend of frontier and open-weights LLMs rapidly gaining autonomous, multi-step execution capabilities. Whether it is Claude Mythos stringing together three to five disparate bugs to create high-severity exploits, or GLM-5.1 generating and successfully debugging its own complex SVG/CSS animations on the fly, the models are graduating from simple text generation to performing deep, context-aware engineering tasks.