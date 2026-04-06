---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["ai-assisted-programming", "sqlite", "security", "agentic-engineering", "llms"]
---

# Simon Willison — 2026-04-05

## Highlight
Simon highlights a deep-dive post by Lalit Maganti on the realities of "agentic engineering" when building a robust SQLite parser. The piece beautifully articulates a crucial lesson for our space: while AI is incredible at plowing through tedious low-level implementation details, it struggles significantly with high-level design and architectural decisions where there isn't an objectively right answer.

## Posts

**[Eight years of wanting, three months of building with AI](https://simonwillison.net/2026/Apr/5/building-with-ai/#atom-everything)**
Simon shares a standout piece of long-form writing by Lalit Maganti on the process of building `syntaqlite`, a parser and formatter for SQLite. Claude Code was instrumental in overcoming the initial hurdle of implementing 400+ tedious grammar rules, allowing Lalit to rapidly vibe-code a working prototype. However, the post cautions that relying on AI for architectural design led to deferred decisions and a confusing codebase, ultimately requiring a complete rewrite with more human-in-the-loop decision making. The core takeaway is that while AI excels at tasks with objectively checkable answers, it remains weak at subjective design and system architecture.

**[research-llm-apis 2026-04-04](https://simonwillison.net/2026/Apr/5/research-llm-apis/#atom-everything)**
Simon is working on a major overhaul to his foundational `llm` CLI tool to support new vendor features like server-side tool execution, which break the existing abstraction layer. To design the new architecture, he had Claude Code read the Python client libraries for Anthropic, OpenAI, Gemini, and Mistral to craft curl commands. The resulting repository captures the scripts and raw JSON outputs for both streaming and non-streaming modes across different scenarios, providing a robust reference for building the new plugin abstraction.

**[Syntaqlite Playground](https://simonwillison.net/2026/Apr/5/syntaqlite/#atom-everything)**
Prompted by the Hacker News discussion surrounding `syntaqlite`, Simon revisited an earlier research project where he compiled the C and Rust library into a WebAssembly wheel to run in Pyodide. He published a new web-based playground that loads the Python library directly in the browser. The UI allows developers to experiment hands-on with formatting, parsing into an AST, validating, and tokenizing SQLite SQL queries.

**[scan-for-secrets 0.1](https://simonwillison.net/2026/Apr/5/scan-for-secrets-3/#atom-everything)**
Driven by the paranoia of inadvertently leaking API keys in his published Claude Code transcripts, Simon built a new Python CLI tool using README-driven-development and red/green TDD with Claude Code. The tool scans specified directories not only for literal secrets but also for common encodings like JSON or backslash escaping. Users can define a configuration file (`~/.scan-for-secrets.conf.sh`) that echoes the exact secrets they always want to keep protected.

**[scan-for-secrets 0.2](https://simonwillison.net/2026/Apr/5/scan-for-secrets/#atom-everything)**
This rapid update improves performance for large directories by streaming CLI results as they are found, rather than waiting for the entire scan to finish. The release also adds support for multiple directories, a `-f` flag for scanning individual files, a verbose mode, and exposes new Python API functions (`scan_directory_iter`, `scan_file`, and `scan_file_iter`).

**[scan-for-secrets 0.1.1](https://simonwillison.net/2026/Apr/5/scan-for-secrets-2/#atom-everything)**
A quick patch release that documented the various escaping schemes the tool scans for. It also removed an unnecessary `repr` escaping scheme because it was already handled by the existing JSON scanning logic.

**[Quoting Chengpeng Mou](https://simonwillison.net/2026/Apr/5/chengpeng-mou/#atom-everything)**
Simon highlights some striking statistics shared by Chengpeng Mou, Head of Business Finance at OpenAI, regarding healthcare-related queries. Anonymized ChatGPT data reveals approximately 2 million weekly health insurance messages, 600,000 queries from individuals in "hospital deserts," and shows that 7 out of 10 of these interactions occur outside regular clinic hours.

## Project Pulse
Simon had a highly productive sprint exploring the practicalities of "agentic engineering," simultaneously leaning on Claude Code to rapidly scaffold a new security CLI tool (`scan-for-secrets`) and researching the raw JSON APIs for a major `llm` rewrite. His deep engagement with Lalit Maganti's SQLite parser project clearly influenced this burst of practical, AI-assisted toolmaking and his reflections on AI's limits in system design.