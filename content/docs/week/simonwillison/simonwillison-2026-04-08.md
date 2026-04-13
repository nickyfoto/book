---
title: 2026-04-08
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["docker", "sqlite", "llms", "code-interpreter", "meta"]
---

# Simon Willison — 2026-04-08

## Highlight
The most substantial piece today is a deep-dive into Meta's new Muse Spark model and its chat harness, where Simon successfully extracts the platform's system tool definitions via direct prompting. His exploration of Meta's built-in Python Code Interpreter and `visual_grounding` capabilities highlights a powerful, sandbox-driven approach to combining generative AI with programmatic image analysis and exact object localization. 

## Posts

**[Meta’s new model is Muse Spark, and meta.ai chat has some interesting tools](https://simonwillison.net/2026/Apr/8/muse-spark/#atom-everything)**
Meta has launched Muse Spark, a new hosted model currently accessible as a private API preview and directly via the meta.ai chat interface. By simply asking the chat harness to list its internal tools and their exact parameters, Simon documented 16 different built-in tools. Standouts include a Python Code Interpreter (`container.python_execution`) running Python 3.9 and SQLite 3.34.1, mechanisms for creating web artifacts, and a highly capable `container.visual_grounding` tool. He ran hands-on experiments generating images of a raccoon wearing trash, then used the platform's Python sandbox and grounding tools to extract precise, nested bounding boxes and perform object counts (like counting whiskers or his classic pelicans). Although the model is closed for now, infrastructure scaling and comments from Alexandr Wang suggest future versions could be open-sourced.

**[SQLite WAL Mode Across Docker Containers Sharing a Volume](https://simonwillison.net/2026/Apr/7/sqlite-wal-docker-containers/#atom-everything)**
Prompted by a Hacker News discussion, this quick research note confirms that running multiple SQLite processes in separate Docker containers against a shared volume is perfectly safe. Because containers running on the same host and filesystem correctly share the same shared memory, SQLite's Write-Ahead Logging (WAL) mode is able to collaborate and function exactly as it should.

**[Quoting Giles Turnbull](https://simonwillison.net/2026/Apr/8/giles-turnbull/#atom-everything)**
A brief post highlighting a resonant quote from Giles Turnbull regarding the reception of generative AI in the workplace. Turnbull notes that people are generally very enthusiastic about using AI to automate other people's professions, but are significantly less keen when those same tools are aimed at their own livelihoods.

## Project Pulse
Today's updates reflect a great mix of Simon's core interests: aggressively probing the edges of new LLM chat interfaces to document their hidden system tools and agentic capabilities, grounded by practical, real-world notes on durable developer infrastructure like Docker and SQLite.