---
title: 2026-05-16
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "llm", "css", "openclaw", "git"]
---

# Simon Willison — 2026-05-16

## Highlight
The standout update today is the release of `datasette-llm-limits 0.1a0`, which introduces a practical way to manage LLM API costs directly within Datasette. It's a highly useful piece of infrastructure for anyone building and exposing AI tools, solving the very real problem of managing usage limits for local or hosted LLM integrations.

## Posts

**[datasette-llm-limits 0.1a0]**(https://simonwillison.net/2026/May/15/datasette-llm-limits/#atom-everything)
Simon released an alpha version of `datasette-llm-limits`, a new plugin that works alongside the `datasette-llm` and `datasette-llm-accountant` packages. It allows administrators to configure per-user or global spending limits for LLM usage inside of Datasette. This is a crucial addition for safely scaling AI-assisted database workflows by keeping API usage costs strictly under control.

**[Warelay -> OpenClaw]**(https://simonwillison.net/2026/May/16/openclaw-names/#atom-everything)
While preparing for a PyCon US lightning talk, Simon tracked the name evolution of his OpenClaw project since its first commit in November. He used a custom Python script, `first_line_history.py`, to parse the Git history of the project's README file. The tool revealed the project's journey through six different names, starting as Warelay and transitioning through CLAWDIS, CLAWDBOT, Clawdbot, and Moltbot before finally settling on OpenClaw.

**[Quoting Julia Evans]**(https://simonwillison.net/2026/May/16/julia-evans/#atom-everything)
Simon highlights a post from Julia Evans about her decision to move away from Tailwind and embrace raw CSS. She notes that treating CSS seriously as a technology, rather than devaluing it because "it's hard," shifted her entire perspective. By understanding that CSS tackles fundamentally complex layout problems, she found that historical frustrations like centering have actually been resolved for a long time.

**[Western Gull, Rock Pigeon]**(https://simonwillison.net/2026/May/15/sighting-361818285/#atom-everything)
In a quick personal update, Simon shares a bird sighting from the Los Angeles area. While on a morning bird walk before PyCon, he spotted a local seagull enjoying a Starbucks.

## Project Pulse
Simon is clearly in the midst of PyCon US, with both his lightning talk prep and morning bird walks tied directly to the conference. He's also continuing to flesh out the Datasette LLM ecosystem, shifting his focus toward practical production concerns like API accountability and cost management tools.