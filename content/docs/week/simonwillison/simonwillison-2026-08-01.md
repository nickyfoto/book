---
title: 2026-08-01
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["openai", "datasette", "generative-ai", "tools", "mathematics"]
---

# Simon Willison — 2026-08-01

## Highlight
OpenAI's application of their Astra model to solve ten decade-old mathematical problems signals a fascinating shift toward Terence Tao's concept of "big mathematics". It perfectly illustrates a near-future where AI handles massive technical grunt work while humans guide the creative direction of complex research.

## Posts

**[Ten advances in mathematics and theoretical computer science](https://simonwillison.net/2026/Aug/1/ten-advances-in-mathematics/#atom-everything)** · Source
OpenAI has just showcased an internal version of Astra solving ten decade-old mathematical problems, reportedly spending less than $2,000 per problem on GPT-5.6 Sol tokens. While Simon appreciates the transparency of OpenAI providing Lean 4 formalizations and an LLM-generated reasoning walkthrough, he notes the conspicuous absence of the actual prompts used. He connects this milestone—a collective "Deep Blue" moment for mathematicians—to Terence Tao’s vision of "big mathematics," where AI handles the technical heavy lifting in decentralized collaborations with humans.

**[datasette-agent 0.4a0](https://simonwillison.net/2026/Jul/31/datasette-agent/#atom-everything)** · Source
This release introduces an exciting new `await context.browser_task()` mechanism for Datasette Agent plugins. It allows agent tools to execute custom JavaScript directly within the user's browser. This opens up powerful new capabilities for browser-based automation and interactive testing within the Datasette ecosystem.

**[datasette-apps 0.2a0](https://simonwillison.net/2026/Aug/1/datasette-apps/#atom-everything)** · Source
Leveraging the new browser task capability introduced in `datasette-agent 0.4a0`, this update adds an `app_debug()` tool that allows the agent to invisibly test applications via JavaScript. It works by rendering the app in a completely transparent, non-interactive iframe, enabling the agent to run smoke tests and measure DOM elements inside a sandbox. There is also a new `app_list()` tool to help the agent discover which apps the user has permission to edit.

**[Quoting Greg Brockman](https://simonwillison.net/2026/Aug/1/greg-brockman/#atom-everything)** · Source
Simon highlights a poignant observation from OpenAI's Greg Brockman regarding the deployment of AI in the workplace. Brockman noted that employees strongly dislike being contacted by a coworker's ChatGPT agent for help, even if they'd gladly assist the human coworker directly. It’s a great reminder that humans deeply value their social relationships and want AI to give time back, rather than acting as a sterile layer that separates people.

**[Slack Emoji Maker](https://simonwillison.net/2026/Jul/31/slack-emoji-maker/#atom-everything)** · Source
To solve the highly specific problem of creating 128x128 transparent emojis for Slack, Simon had the Fable AI tool build him a custom, single-purpose image editor. It's a perfect example of using AI to quickly generate small, sharp tools that eliminate everyday developer friction.

**[llm-mcp-client 0.1a0](https://simonwillison.net/2026/Jul/31/llm-mcp-client/#atom-everything)** · Source
A quick release note announcing version 0.1a0 of `llm-mcp-client`. The post points to a broader blog entry discussing stateless Model Context Protocol (MCP) implementations.

## Project Pulse
A strong theme of agentic browser integration is emerging across Simon's open-source projects. The introduction of `context.browser_task()` enables Datasette to break out of purely server-side LLM interactions and empowers the agent to invisibly instrument, interact with, and test the browser DOM directly.