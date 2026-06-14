---
title: 2026-06-07
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["ai", "datasette", "llm-tool-use", "generative-ai"]
---

# Simon Willison — 2026-06-07

## Highlight
Simon released an early alpha of a foundational plugin that brings Claude-inspired, agentic text editing tools to the Datasette ecosystem. This creates a reliable, standardized baseline for future plugins that need to safely edit Markdown, SQL, or SVGs.

## Posts

**datasette-agent-edit 0.1a0** · [Source](https://simonwillison.net/2026/Jun/7/datasette-agent-edit/#atom-everything)
Simon released `datasette-agent-edit 0.1a0` as a base plugin to simplify agentic text modifications, such as collaborative Markdown editing, updating large SQL queries, or tweaking SVG files. Noting that LLM-driven text editing is notoriously tricky to get right, he modeled the core tools—`view` (with line numbers), strict `str_replace` (which fails if the string isn't unique), and line-based `insert`—directly on the published design of the Claude text editor. Rather than recreating these common patterns for every new tool, future Datasette Agent plugins can simply adapt these proven fundamentals.

## Project Pulse
Simon continues to methodically build out the capabilities of `datasette-agent`, currently focusing on establishing and standardizing complex LLM tool-use patterns to make agentic workflows safer and more reproducible.