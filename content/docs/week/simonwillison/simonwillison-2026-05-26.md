---
title: 2026-05-26
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["security", "generative-ai", "prompt-injection", "llms"]
---

# Simon Willison — 2026-05-26

## Highlight
Today's updates emphasize the dual-edged sword of AI in security, contrasting how AI tools are overwhelming open-source maintainers with a flood of valid vulnerability reports while simultaneously introducing novel data exfiltration risks in enterprise agentic systems like Microsoft Copilot.

## Posts

**The pressure** · [Source](https://simonwillison.net/2026/May/26/the-pressure/#atom-everything)
Daniel Stenberg highlights the unprecedented toll that high-quality, AI-assisted security reports are taking on the curl project's team. The volume of credible vulnerabilities has surged to over one report per day—double the rate seen in 2025—leading to severe work-life balance issues for maintainers. Fortunately, because curl is well-architected, these AI-discovered flaws are almost exclusively categorized as LOW or MEDIUM severity, with no HIGH severity issues found since late 2023.

**Microsoft Copilot Cowork Exfiltrates Files** · [Source](https://simonwillison.net/2026/May/26/copilot-cowork-exfiltrates-files/#atom-everything)
Simon explores a fascinating data exfiltration vulnerability in Microsoft's "Copilot Cowork" product, underscoring the ongoing challenge of securing agentic systems. Through prompt injection, an attacker could force the agent to generate unapproved emails sent to the user's own inbox containing pre-authenticated OneDrive download links. When the user opens the compromised message, these links can be secretly leaked to the attacker via network requests triggered by rendered external images.

**Quoting Paul Graham** · [Source](https://simonwillison.net/2026/May/26/paul-graham/#atom-everything)
Paul Graham criticizes founders who rely on generative AI to write their outreach emails, noting the emergence of an unmistakable "hard-hitting journalistic style". Graham argues that using LLMs for these communications feels deceptive, signaling to the recipient that the founder either cannot write well unaided or is attempting a cheap trick.

**Quoting Corey Quinn** · [Source](https://simonwillison.net/2026/May/26/corey-quinn/#atom-everything)
A brief quote from Corey Quinn marveling at Anthropic co-founder Christopher Olah's influence on the Pope's *Magnifica Humanitas*. Quinn humorously characterizes the canonization of an AI product's technical limitations into a spiritual treatise as the ultimate act of vendor lobbying.

**California Brown Pelican, Snowy Egret, California Sea Lion, Harbor Seal** · [Source](https://simonwillison.net/2026/May/25/sighting-365297287/#atom-everything)
A quick personal update capturing local wildlife sightings in San Mateo County, CA. Simon shares that he took his new folding kayak out into the harbor and spotted sea lions, harbor seals, and various coastal birds hanging around the docks.

## Project Pulse
A strong thematic focus on the broader consequences of AI adoption, specifically how large language models are reshaping the security landscape through both defensive bug hunting and offensive prompt injection techniques.