---
title: 2026-07-29
weight: 8
categories: ["Blogs", "AI", "Tech"]
tags: ["generative-ai", "prompt-injection", "model-context-protocol", "cryptography", "sqlite-utils"]
---

# Simon Willison — 2026-07-29

## Highlight
Prompt injection techniques continue to evolve, with Simon highlighting a fascinating new self-replicating worm attack against Microsoft Word's Copilot. It demonstrates how hidden text can manipulate AI into silently carrying malicious instructions across documents, showcasing the unresolved, structural challenges in securing LLM-assisted workflows.

## Posts

**AI Worming through Word** · [Source](https://simonwillison.net/2026/Jul/29/ai-worming-through-word/#atom-everything)
Simon points to a clever prompt injection variant discovered by Håkon Måløy that escalates into a full self-replicating worm. An attacker hides instructions in a document, which Copilot then processes and inadvertently copies into new drafts, turning them into fresh carriers that can infect subsequent workflows. Simon notes that while hidden white-on-white text tricks are common, this is the first instance he has seen explicitly designed to copy instructions for self-replication. Despite a 144-day responsible disclosure period, Microsoft has yet to deploy a comprehensive mitigation for this class of attack.

**Adding a custom MCP server to Claude and ChatGPT** · [Source](https://simonwillison.net/2026/Jul/29/mcp-in-claude-and-chatgpt/#atom-everything)
In a new TIL (Today I Learned) entry, Simon explores the rapidly growing Model Context Protocol (MCP) ecosystem. He confirms that it is entirely possible to connect a custom MCP server directly to the standard chat interfaces of both Claude and ChatGPT. However, he cautions that establishing this integration currently requires quite a few manual steps.

**Quoting Matthew Green** · [Source](https://simonwillison.net/2026/Jul/29/matthew-green/#atom-everything)
Simon shares commentary from Matthew Green regarding Anthropic's recent research on discovering cryptographic weaknesses using Claude. Green points out that as the industry transitions to new post-quantum cryptographic algorithms, there couldn't be a better time for AI to develop massive public cryptanalysis capabilities. In the best-case scenario, robust AI involvement will help the security community build real confidence in our newly identified hard problems.

**Quoting D. Richard Hipp** · [Source](https://simonwillison.net/2026/Jul/29/d-richard-hipp/#atom-everything)
Sharing a quote from SQLite creator D. Richard Hipp, Simon draws a historical parallel to the rise of modern AI code generation tools. Hipp compares the advent of SQL—which allowed users to simply specify queries rather than paying expensive COBOL programmers to write complex data extraction code—to current industry shifts. The core takeaway is that programming did not go away with SQL; rather, the job simply changed, which mirrors expectations for AI's long-term impact on software engineering.

**sqlite-utils 3.39.1** · [Source](https://simonwillison.net/2026/Jul/26/sqlite-utils/#atom-everything)
A minor patch release for one of Simon's core open-source Python CLI tools. This update back-ports a bug fix for the `table.delete_where()` method that originally shipped in version 4 of the library.

## Project Pulse
Today's posts heavily lean into the security and broader industry implications of generative AI, spanning from novel prompt injection vulnerabilities to optimistic takes on AI-assisted cryptanalysis and the historical evolution of the programmer's role.