---
title: 2026-04-17
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "datasette", "pycon", "artificial intelligence"]
---

# Simon Willison — 2026-04-17

## Highlight
The most exciting news today is the addition of a dedicated AI track at PyCon US 2026, signaling the deep integration of AI engineering into the core Python community. With talks covering everything from local LLM quantization to async patterns for AI agents, it's a clear indicator of where the Python ecosystem is heading this year.

## Posts

**[Join us at PyCon US 2026 in Long Beach - we have new AI and security tracks this year]** · [Source](https://simonwillison.net/2026/Apr/17/pycon-us-2026/#atom-everything)
PyCon US heads to Long Beach this May, and Simon highlights the addition of dedicated AI and Security tracks to the conference. He shares the full AI track schedule—which he naturally scraped using Claude Code and his Rodney tool—featuring highly relevant sessions on local quantization, browser-based inference, and async agent patterns. Simon also emphasizes the value of the conference's open spaces, where he plans to instigate discussions around Datasette and agentic engineering.

**[datasette 1.0a28]** · [Source](https://simonwillison.net/2026/Apr/17/datasette/#atom-everything)
Simon pushed a quick alpha release of Datasette to fix a nasty collection of accidental breakages discovered while upgrading Datasette Cloud to 1.0a27. The update introduces a new `datasette.close()` method and a handy pytest plugin for automatic resource cleanup, specifically designed to prevent file descriptor exhaustion in older plugin test suites. Notably, Simon implemented most of these fixes using Claude Code alongside the newly released Claude Opus 4.7 model.

## Project Pulse
A clear theme today is Simon's continued integration of AI-assisted programming into his daily workflow: he explicitly mentions using Claude Code in both posts, leveraging it for everything from writing Datasette bug fixes to scraping and formatting conference schedules into Markdown.