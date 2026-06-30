---
title: 2026-06-23
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "pyodide", "sqlite", "opfs"]
---

# Simon Willison — 2026-06-23

## Highlight
The standout news today is a massive step forward for Datasette's mutation capabilities in the 1.0a35 release, introducing powerful new graphical interfaces for creating and altering tables. This shifts Datasette further from its read-only roots toward a full-fledged database management UI.

## Posts

**[datasette 1.0a35](https://simonwillison.net/2026/Jun/23/datasette/#atom-everything)**
Simon dropped a major pre-release for Datasette that introduces powerful new "Create table" and "Alter table" graphical interfaces, complete with their own backing JSON APIs. Users can now seamlessly define columns, NOT NULL constraints, and foreign keys, or modify existing tables by adding, dropping, or reordering columns directly from the UI. Additionally, the release formalizes the template context variables, generated directly from dataclass definitions, into a stable API for custom template authors to use until Datasette 2.0. Simon also shared a quick video demo walking through the new table mutation features.

**[OPFS + Pyodide test harness](https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything)**
In an effort to expand what Datasette Lite can do, Simon is exploring how to let the browser-based Pyodide application edit persistent SQLite files locally on a user's machine. To test the waters with the Origin Private File System (OPFS), he had Claude Code quickly generate a web playground UI to evaluate how different browsers handle OPFS access. 

## Project Pulse
Today's updates show a strong focus on expanding Datasette's capabilities as a read-write tool, both by adding comprehensive core table mutation features to the main project and by experimenting with OPFS to bring persistent local editing to the entirely browser-based Datasette Lite environment.