---
title: 2026-05-20
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["generative-ai", "prompt-injection", "datasette", "gemini", "llms"]
---

# Simon Willison — 2026-05-20

## Highlight
Simon takes a critical look at Google I/O's Gemini Spark announcement, digging into the opaque "Antigravity" stack and questioning how Google plans to mitigate prompt injection risks for a tool with deep access to user data. This highlights the growing industry tension between powerful workspace AI agents and fundamental security vulnerabilities.

## Posts

**[Google I/O, Gemini Spark, Antigravity]** · [Source](https://simonwillison.net/2026/May/20/google-io/#atom-everything)
Sticking to his rule of only reviewing generally available tools, Simon breaks down the announcement of Gemini Spark, Google's new OpenClaw competitor that natively integrates with Workspace apps. He notes a strange FAQ detail claiming Spark runs on "Antigravity"—a moniker applied to a desktop app, a Go-based CLI, and a VS Code fork. Crucially, Simon questions whether Google's isolated VM approach and Agent Gateway will actually be enough to prevent an "agent security challenger disaster" when handling sensitive data via prompt injection. He also highlights that Google is deprecating its open-source Gemini CLI on June 18th in favor of a closed-source Antigravity CLI.

**[Quoting SpaceX S-1]** · [Source](https://simonwillison.net/2026/May/20/spacex-s1/#atom-everything)
Simon highlights a staggering detail from SpaceX's recent S-1 filing regarding their proprietary compute resources like COLOSSUS and COLOSSUS II. The document reveals that Anthropic signed an agreement in May 2026 to pay SpaceX $1.25 billion per month for compute capacity. This snippet underscores the astronomical infrastructure costs currently fueling top-tier AI research and development.

**[How fast is 10 tokens per second really?]** · [Source](https://simonwillison.net/2026/May/20/tokens-per-second/#atom-everything)
A quick link to a neat HTML tool built by Mike Veerman that simulates LLM text generation speeds ranging from 5 to 800 tokens per second. Simon notes this is a highly practical utility for developers who want to tangibly visualize what advertised model speeds actually look like in practice.

**[llm-gemini 0.32a0]** · [Source](https://simonwillison.net/2026/May/19/llm-gemini/#atom-everything)
A new alpha release for the `llm-gemini` plugin. This update brings compatibility with the `llm>=0.32a0` alpha and introduces the ability to stream reasoning tokens, keeping pace with Gemini's latest capabilities.

**[datasette-llm 0.1a8]** · [Source](https://simonwillison.net/2026/May/19/datasette-llm/#atom-everything)
A bug fix release for the `datasette-llm` plugin. This patches an issue where the `llm_prompt_context()` hook was failing to fully collect chains of responses.

**[datasette-llm-accountant 0.1a4]** · [Source](https://simonwillison.net/2026/May/19/datasette-llm-accountant/#atom-everything)
A companion release to `datasette-llm 0.1a8`. This update fixes a related bug in how chains of responses are tracked within the accountant plugin.

## Project Pulse
Today's releases show a focused effort on Simon's `llm` and `datasette` plugin ecosystems, specifically squashing bugs in response chain tracking and rolling out bleeding-edge support for streaming reasoning tokens in the Gemini CLI plugin.