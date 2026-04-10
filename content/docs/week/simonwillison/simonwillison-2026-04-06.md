---
title: 2026-04-06
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["local llms", "datasette", "cli tools", "ios"]
---

# Simon Willison — 2026-04-06

## Highlight
The most substantial update today is Simon's look at the Google AI Edge Gallery, an official iOS app for running local Gemma 4 models directly on-device. It stands out as a major milestone for local AI, being the first time a local model vendor has shipped an official iPhone app with built-in tool-calling capabilities.

## Posts

**[Google AI Edge Gallery](https://simonwillison.net/2026/Apr/6/google-ai-edge-gallery/#atom-everything)**
Simon highlights Google's strangely-named but highly effective official iOS app for running Gemma 4 (and 3) models natively. The 2.54GB E2B model runs fast and includes features like vision, up to 30 seconds of audio transcription, and an impressive "skills" demo showcasing tool calling against eight different HTML widgets. Despite a minor app freeze bug and the unfortunate lack of permanent chat logs, Simon considers it a significant release as the first official iOS app from a local model vendor.

**[scan-for-secrets 0.3](https://simonwillison.net/2026/Apr/6/scan-for-secrets/#atom-everything)**
A useful update to his secret-scanning CLI tool. This release introduces an interactive `-r/--redact` flag that displays matches, asks for user confirmation, and safely replaces secrets with "REDACTED" while handling escaping rules. It also exposes a new `redact_file()` Python function for developers to integrate into their own codebases.

**[datasette-ports 0.1](https://simonwillison.net/2026/Apr/6/datasette-ports/#atom-everything)**
A classic example of Simon's README-driven development to solve a personal workflow friction. He built this plugin to solve the problem of losing track of multiple running Datasette instances (and in-development plugins) scattered across dozens of terminal windows. Running the tool quickly lists every active running instance so you can easily find them.

**[datasette-ports 0.2](https://simonwillison.net/2026/Apr/6/datasette-ports-2/#atom-everything)**
Released on the exact same day, this quick iteration makes the port-tracking tool significantly more flexible. It removes the hard dependency on Datasette itself, allowing it to be run as a standalone utility via `uvx datasette-ports`, while still cleanly providing the `datasette ports` command when installed as a plugin.

**[Cleanup Claude Code Paste](https://simonwillison.net/2026/Apr/6/cleanup-claude-code-paste/#atom-everything)**
A super-niche, small sharp tool built to scratch an immediate itch. It serves exactly one purpose: cleaning up the strange extra whitespace that appears when copying prompts directly out of the Claude Code terminal application.

## Project Pulse
Today reflects Simon's classic pattern of rapidly building small, sharp utilities to lubricate his daily developer workflows. From managing a sprawl of local Datasette environments to cleaning up messy Claude Code copy-pastes, it's a great example of shipping quick iterative releases to solve immediate personal annoyances.