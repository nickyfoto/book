---
title: 2026-05-13
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["ai-assisted-programming", "datasette", "content-security-policy", "ai-agents", "codex"]
---

# Simon Willison — 2026-05-13

## Highlight
Simon's standout experiment today demonstrates a clever UX workaround for sandboxed iframes, intercepting Content Security Policy (CSP) errors and passing them to the parent window for user approval. It is a great example of his hands-on AI-assisted programming, notably built using GPT-5.5 xhigh in the Codex desktop app.

## Posts

**[CSP Allow-list Experiment]** · [Source](https://simonwillison.net/2026/May/13/csp-allow/#atom-everything)
This technical experiment explores how to load an app within a CSP-protected sandboxed iframe while maintaining a smooth user experience. Simon implemented a custom `fetch()` that catches CSP errors and passes them up to the parent window. The parent window can then prompt the user to add the blocked domain to an allow-list before refreshing the page. He built the tool using GPT-5.5 xhigh via the Codex desktop app.

**[Welcome to the Datasette blog]** · [Source](https://simonwillison.net/2026/May/13/welcome-to-the-datasette-blog/#atom-everything)
With a wave of neat announcements on the horizon, Datasette has officially launched its own project blog. Simon built the blog using the OpenAI Codex desktop app, calling out its highly anticipated feature that allows exporting session transcripts as Markdown. He also made sure to publish the transcript of the specific session that generated the blog.

**[Quoting Boris Mann]** · [Source](https://simonwillison.net/2026/May/13/boris-mann/#atom-everything)
Simon shares a pragmatic quote from Boris Mann that pushes back against current industry jargon around AI. Mann argues that the phrase "11 AI agents" is functionally meaningless, comparing it to bragging about having 11 spreadsheets or 11 browser tabs open to do work.

## Project Pulse
There is a clear theme of AI-assisted tooling in today's updates, with Simon actively testing the OpenAI Codex desktop app to build both his CSP experiment and the new Datasette blog. It is also an exciting signal for the Datasette ecosystem, which is gearing up for a new wave of releases that necessitated the dedicated blog.