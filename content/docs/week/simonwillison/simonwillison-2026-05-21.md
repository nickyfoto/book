---
title: 2026-05-21
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "llms", "sqlite", "generative-ai", "sandboxing"]
---

# Simon Willison — 2026-05-21

## Highlight
The major news today is the official announcement of Datasette Agent, merging Simon's three years of work on the LLM library with Datasette to create an extensible, conversational AI assistant for querying data. It represents a huge milestone for his ecosystem, opening the door for users to naturally interrogate their databases and easily build custom tools using a new plugin architecture.

## Posts

**[Datasette Agent](https://simonwillison.net/2026/May/21/datasette-agent/#atom-everything)**
Simon officially announced Datasette Agent, a conversational AI interface that lets users ask questions of the data stored in Datasette. The post features a live demo using Gemini 3.1 Flash-Lite to successfully query a blog database to find a bird-watching record. He highlights a growing plugin ecosystem—including charts, image generation, and sandbox execution—and notes that tools like Claude Code and OpenAI Codex are proving excellent at writing these extensions. Looking ahead, Simon teased a major refactor for his LLM library, a Claude Artifacts-style plugin, and a personal AI assistant named "Claw" built using his older Dogsheep tools.

**[datasette-agent 0.1a3](https://simonwillison.net/2026/May/21/datasette-agent-2/#atom-everything)**
This release focuses on UX improvements and transparency for the new agent, notably adding "View SQL query" buttons for visible tables and collapsed SQL result tool calls. It also cleans up the UI by hiding empty reasoning chunks and ensures that tables still display correctly to the user even if the agent's SQL results were truncated.

**[datasette-agent-charts 0.1a1](https://simonwillison.net/2026/May/20/datasette-agent-charts/#atom-everything)**
This release significantly improves data visualization for the agent, adding sequential color shading by magnitude for bar and waffle charts without color columns, and an `observable10` categorical scheme for text columns. It also introduces interactive tooltips, checks `execute-sql` permissions before querying for column names, and fixes a bug where waffleY charts weren't properly described to the agent.

**[datasette-agent-charts 0.1a2](https://simonwillison.net/2026/May/21/datasette-agent-charts/#atom-everything)**
A fast follow-up release to the charts plugin that brings it inline with the main agent app's transparency goals by adding "View SQL query" buttons directly below the rendered charts.

**[datasette-agent-sprites 0.1a0](https://simonwillison.net/2026/May/21/datasette-agent-sprites/#atom-everything)**
Simon released the very first alpha of `datasette-agent-sprites`, a plugin that provides the agent with tools for executing code securely within a persistent Fly Sprites sandbox.

**[datasette-agent 0.1a2](https://simonwillison.net/2026/May/15/datasette-agent/#atom-everything)**
A quick update focused on security, allowing tool availability to be restricted by a `required_permission`. The default background agent tools now require the newly introduced `datasette-agent-background` permission to operate.

**[datasette-agent 0.1a1](https://simonwillison.net/2026/May/14/datasette-agent/#atom-everything)**
An early alpha release note indicating that the agent now properly respects the `execute-sql` permission when deciding which database tables should be listed to the user.

## Project Pulse
Today's updates were a massive, coordinated burst entirely dedicated to launching the `datasette-agent` ecosystem. Simon is rapidly iterating on both the core agent and its plugins, with a clear engineering focus on UI transparency (exposing the generated SQL queries), robust permission checks, and bridging LLMs with external tools like Observable Plot and Fly Sprites.