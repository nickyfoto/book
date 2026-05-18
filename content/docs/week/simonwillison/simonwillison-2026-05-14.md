---
title: 2026-05-14
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "coding-agents", "generative-ai", "llms"]
---

# Simon Willison — 2026-05-14

## Highlight
The single most interesting theme today is the changing paradigm of programming languages from being a permanent "lock-in" to fungible, replaceable assets, driven by AI coding agents. Simon highlights this shift through Mitchell Hashimoto's commentary on Bun's recent language rewrite and a real-world anecdote of agent-assisted mobile app migration.

## Posts

**[Not so locked in any more]** · [Source](https://simonwillison.net/2026/May/14/not-so-locked-in/#atom-everything)
Expanding on thoughts about modern software architecture, Simon shares an anecdote from a recent conference about a tech company that used coding agents to rewrite their legacy iPhone and Android apps into React Native. The development team wasn't overly concerned about committing to React Native, reasoning that if it turned out to be the wrong choice, the lowered cost of agent-driven development means they could just port it back to native code later. This underscores a major industry shift where programming language choices are increasingly no longer the permanent lock-in they once were.

**[Quoting Mitchell Hashimoto]** · [Source](https://simonwillison.net/2026/May/14/mitchell-hashimoto/#atom-everything)
Simon highlights a notable quote from Mitchell Hashimoto regarding the Bun project's swift migration from Zig to Rust. Hashimoto points out that modern programming languages are becoming highly fungible, observing that a project like Bun can be completely rewritten in roughly a week or two. The core takeaway is that a language is now only useful until it isn't, at which point it can simply be discarded and replaced without the traditional massive development overhead.

**[datasette-ip-rate-limit 0.1a0]** · [Source](https://simonwillison.net/2026/May/14/datasette-ip-rate-limit/#atom-everything)
Simon released a new configurable rate limiting plugin, `datasette-ip-rate-limit 0.1a0`, to defend the datasette.io site against poorly-behaved crawlers. He built this practical tool using Codex (GPT-5.5 xhigh). This perfectly demonstrates how generative AI can be leveraged to quickly spin up small, sharp utility plugins to solve immediate production infrastructure issues.

## Project Pulse
Today's posts reveal a strong thematic focus on the broader architectural impacts of AI-assisted programming and agentic engineering. Whether he is deploying Codex to rapidly generate a Datasette plugin or reflecting on how LLMs make language lock-in obsolete, Simon is documenting how AI tools are fundamentally altering the cost, speed, and permanence of software development.