---
title: 2026-06-17
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "large language models", "open source", "web components", "ai-assisted programming"]
---

# Simon Willison — 2026-06-17

## Highlight
The deep dive into Z.ai's GLM-5.2 model is today's most significant read, offering a hands-on look at a new 753B parameter open-weights giant that is currently topping intelligence and coding benchmarks. It captures the rapid evolution of massive models and provides practical prompt testing on their UI-generation capabilities.

## Posts

**GLM-5.2 is probably the most powerful text-only open weights LLM** · [Source](https://simonwillison.net/2026/Jun/17/glm-52/#atom-everything)
Chinese AI lab Z.ai has released GLM-5.2, a massive 753B parameter open-weights model with a 1 million token context window. Simon notes it is currently leading the Artificial Analysis Intelligence Index and ranking second on the Code Arena WebDev leaderboard, which is deeply impressive for a text-only model lacking image inputs. He tested it via OpenRouter with his standard SVG generation prompts, finding it produced a flawless, self-contained animated pelican on a bicycle. However, it disappointingly failed to animate an opossum on an e-scooter, marking a regression from its predecessor, GLM-5.1.

**datasette 1.0a34** · [Source](https://simonwillison.net/2026/Jun/16/datasette/#atom-everything)
This long-overdue alpha release finally introduces built-in tools to insert, edit, and delete rows directly within the standard Datasette user interface. Simon highlights that this feature was directly inspired by his recent work on Datasette Agent. After adding SQL write support to the agent, it highlighted the absurdity of being able to edit data via an AI chat interface but not through the project's regular GUI.

**Quoting Charity Majors** · [Source](https://simonwillison.net/2026/Jun/17/charity-majors/#atom-everything)
Simon shares a poignant quote from Charity Majors reflecting on how AI-assisted programming has completely upended the economics of code production. The core takeaway is that code has transitioned practically overnight from a carefully curated, expensive asset to something that is cheap, disposable, and instantly regenerable.

**— a still that plays** · [Source](https://simonwillison.net/2026/Jun/17/click-to-play-component/#atom-everything)
Simon highlights a handy Web Component designed as a progressive enhancement tool. It transforms basic markup into a static frame with a click-to-play button, ensuring that large, bandwidth-heavy GIFs are only loaded on demand when a user explicitly chooses to view them.

**NetNewsWire Status** · [Source](https://simonwillison.net/2026/Jun/17/netnewswire-status/#atom-everything)
Simon expresses admiration for Brent Simmons, who is spending his retirement focusing on making the open-source RSS reader NetNewsWire exceptionally good, completely free from commercial pressure. Simon notes he has found the open-source software absolutely indispensable on both his Mac and iPhone for several years.

## Project Pulse
Simon continues to effectively bridge his work on core data tools with his explorations of emerging AI, directly demonstrating how agentic chat capabilities are highlighting and inspiring missing features in traditional GUIs like Datasette.