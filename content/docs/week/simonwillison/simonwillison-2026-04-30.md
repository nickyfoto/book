---
title: 2026-04-30
weight: 2
categories: ["Blogs", "AI", "Tech"]
tags: ["ai-assisted-programming", "open-source", "zig", "llms", "coding-agents"]
---

# Simon Willison — 2026-04-30

## Highlight
The most fascinating discussion today centers on the cultural clash between AI-assisted programming and traditional open-source community building, specifically looking at the Zig project's strict ban on LLM-authored contributions. It perfectly articulates a growing divide: while AI can generate perfect code, it breaks the "contributor poker" investment model that maintainers rely on to grow trusted human collaborators over time. 

## Posts

**[The Zig project’s rationale for their firm anti-AI contribution policy](https://simonwillison.net/2026/Apr/30/zig-anti-ai/#atom-everything)**
Simon dives into Zig's stringent anti-LLM policy for issues, PRs, and bug tracker comments. He highlights Loris Cro's concept of "contributor poker," which argues that open-source maintainers invest in *people*, not just their initial code contributions. Because reviewing an LLM-assisted PR doesn't help the project cultivate a new, confident contributor, the maintainer's time is wasted. Interestingly, this policy means that Bun—an Anthropic-acquired JavaScript runtime built on a Zig fork—is keeping a massive 4x compile performance improvement un-upstreamed due to their heavy use of AI.

**[Codex CLI 0.128.0 adds /goal](https://simonwillison.net/2026/Apr/30/codex-goals/#atom-everything)**
OpenAI's Codex CLI coding agent has introduced an autonomous looping feature via the new `/goal` command. This allows the agent to continuously loop and evaluate its progress until the goal is met or it exhausts its token budget. Simon notes this agentic behavior is implemented elegantly under the hood by automatically injecting prompt continuations and budget limits at the end of a turn. 

**[Quoting Andrew Kelley](https://simonwillison.net/2026/Apr/30/andrew-kelley/#atom-everything)**
Following up on the Zig project's AI ban, Simon shares a striking quote from Zig creator Andrew Kelley about the "digital smell" of agentic coding. Kelley argues that LLM hallucinations and human mistakes are fundamentally different, making AI-assisted code easy for abstainers to spot. He compares the lingering trace of AI use to someone smoking in a room—it's immediately obvious to non-smokers.

**[We need RSS for sharing abundant vibe-coded apps](https://simonwillison.net/2026/Apr/30/rss-vibe-coded-apps/#atom-everything)**
Sparked by an observation from Matt Webb, Simon explores how "vibe-coding" is changing the cadence of software releases. As AI makes spinning up micro-apps and tools as frequent and personal as writing blog posts, traditional app discovery breaks down, making an RSS feed of "install" buttons a compelling idea. Putting this into practice, Simon had Claude generate an Atom feed and icon for his own tools directory. 

**[Our evaluation of OpenAI’s GPT-5.5 cyber capabilities](https://simonwillison.net/2026/Apr/30/gpt-55-cyber-capabilities/#atom-everything)**
Simon links to a new report from the UK's AI Security Institute evaluating GPT-5.5's ability to find security vulnerabilities. The evaluation shows GPT-5.5 performing comparably to Claude Mythos in the cyber domain, with the crucial distinction that GPT-5.5 is currently generally available.

**[llm 0.32a0](https://simonwillison.net/2026/Apr/29/llm-2/#atom-everything)**
A quick release note announcing the alpha release of `llm 0.32a0`. Users should check the annotated release notes for the full details of what's new in this version.

## Project Pulse
Today's posts reveal a deep fascination with the downstream effects of "agentic engineering" and AI-assisted coding. Simon is actively tracking how AI changes the mechanics of development (like Codex CLI's autonomous `/goal` loops and the proliferation of RSS-worthy "vibe-coded" micro-apps), while critically examining the necessary cultural pushback from open-source communities trying to preserve human trust and mentorship.