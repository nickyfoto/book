---
title: 2026-04-11
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite", "sql", "tools", "webassembly"]
---

# Simon Willison — 2026-04-11

## Highlight
The standout update today centers on the release of SQLite 3.53.0, where Simon highlights highly anticipated native `ALTER TABLE` constraint improvements and showcases his classic rapid-prototyping workflow by using Claude Code on his phone to build a WebAssembly-powered playground for the database's new Query Result Formatter. 

## Posts

**SQLite 3.53.0** · [Source](https://simonwillison.net/2026/Apr/11/sqlite/#atom-everything)
This is a substantial release following the withdrawal of SQLite 3.52.0, packed with accumulated user-facing and internal improvements. Simon specifically highlights that `ALTER TABLE` can now directly add and remove `NOT NULL` and `CHECK` constraints, a workflow he previously had to manage using his own `sqlite-utils transform()` method. The update also introduces `json_array_insert()` (alongside its jsonb equivalent) and brings significant upgrades to the CLI mode's result formatting via a new Query Results Formatter library. True to form, Simon leveraged AI assistance—specifically Claude Code on his phone—to compile this new C library into WebAssembly to build a custom playground interface.

**SQLite Query Result Formatter Demo** · [Source](https://simonwillison.net/2026/Apr/11/sqlite-qrf/#atom-everything)
Serving as a practical companion to his SQLite release notes, this post drops a working UI playground for the new Query Result Formatter library. The tool allows developers to directly experiment with the various visual rendering options for SQL result tables. Powered by the WebAssembly compilation mentioned in his previous post, it provides an immediate, hands-on way to test out the new SQLite CLI formatting capabilities right in the browser.

## Project Pulse
Today's updates show a tight focus on the SQLite ecosystem, blending Simon's ongoing interest in data tooling (like his `sqlite-utils` project) with bleeding-edge AI workflows, demonstrating how tools like Claude Code can drastically accelerate the process of turning upstream C library updates into accessible, WebAssembly-driven web utilities.