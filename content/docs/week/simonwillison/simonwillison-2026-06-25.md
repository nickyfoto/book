---
title: 2026-06-25
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "ai-ethics", "law", "hallucinations"]
---

# Simon Willison — 2026-06-25

## Highlight
Today's most substantive post tackles the critical issue of AI liability, highlighting Bruce Schneier's perspective on a recent German court ruling against Google. It is a vital read for anyone tracking the intersection of generative AI, corporate accountability, and the legal frameworks shaping how these models are deployed in production.

## Posts

**AI and Liability** · [Source](https://simonwillison.net/2026/Jun/25/ai-and-liability/#atom-everything)
Simon shares commentary from Bruce Schneier regarding a recent German ruling that holds Google legally responsible for errors and hallucinations produced by its AI overviews. Schneier argues forcefully that AI models act as agents for the organizations deploying them, meaning companies should face the exact same liability as if they had hired human writers. Allowing corporations to dodge accountability by blaming "faulty AI" would create disastrous incentives, ultimately encouraging businesses to replace human experts—like doctors or lawyers—with cheaper, unaccountable models.

**datasette-export-database 0.3a2** · [Source](https://simonwillison.net/2026/Jun/25/datasette-export-database/#atom-everything)
This is an "embarrassingly tiny" but highly necessary patch release for the `datasette-export-database` plugin. The previous `pyproject.toml` had inadvertently pinned the dependency to an exact alpha release (`datasette==1.0a27`), which broke compatibility with all other versions of Datasette. The dependency requirement has now been correctly updated to `datasette>=1.0a27`.

## Project Pulse
Today offers a standard mix of Simon's ecosystem maintenance and broader tech commentary, pairing a quick metadata fix for a Datasette plugin with a much larger discussion on generative AI governance and liability.