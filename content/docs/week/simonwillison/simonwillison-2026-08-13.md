---
title: 2026-08-13
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "databases", "coding agents", "software packaging"]
---

# Simon Willison — 2026-08-13

## Highlight
Simon's morning "shower project" sparked the creation of **[alchemy-utils 0.1a0](https://github.com/simonw/alchemy-utils/releases/tag/0.1a0)**, a database-agnostic utility backed by SQLAlchemy and co-authored by AI coding agents, representing a major milestone in broadening his popular SQL tool ecosystem.

## Posts

**[alchemy-utils 0.1a0](https://github.com/simonw/alchemy-utils/releases/tag/0.1a0)** · [Source](https://simonwillison.net/2026/Aug/12/alchemy-utils/)
In a rapid prototyping session triggered by a morning shower idea, Simon experimented with building a database-agnostic sibling to his popular `sqlite-utils` library. He tasked AI coding agents **Codex** and **GPT-5.6 Sol Ultra** with conducting a research spike to see if they could construct a library featuring the same core API (such as `insert`, `upsert`, `insert_all`, `upsert_all`, and table introspection) but backed by **SQLAlchemy** to support multiple database backends. Testing against **PostgreSQL, SQLite, and DuckDB** using test-driven development (TDD), `pytest`, and `uv`, the coding agents produced an alpha-grade codebase with very few follow-up prompts. Simon demonstrated the library's utility with one-liners using `uvx` to list rows from a local PostgreSQL database and bulk-insert a CSV of San Francisco tree history into a DuckDB instance. When the initial DuckDB import took almost an hour, he instructed Codex to optimize the code, which successfully reduced the execution time to just **35 seconds**.

**[sqlite-utils 4.2.1](https://github.com/simonw/sqlite-utils/releases/tag/4.2.1)** · [Source](https://simonwillison.net/2026/Aug/13/sqlite-utils-2/)
This quick-turnaround patch was released to resolve a crashing bug introduced in the recent `sqlite-utils 4.2` release. The crash occurred because the **typing-extensions** package had not been formally declared as a project dependency; it had gone unnoticed during local development because other dev dependencies transitively pulled it in. However, when running the CLI tool cleanly in isolation via `uvx`, the missing dependency resulted in immediate failure. To prevent similar packaging regressions, Simon established a robust smoke testing methodology using the command `uv run --no-default-groups --isolated`, which forces `uv` to ignore default development dependency groups and isolate the run from any local virtual environments to ensure perfect execution from clean installs.

**[alchemy-utils 0.1a1](https://github.com/simonw/alchemy-utils/releases/tag/0.1a1)** · [Source](https://simonwillison.net/2026/Aug/13/alchemy-utils/)
Following up immediately on the heels of the first alpha, Simon released **alchemy-utils 0.1a1**. This release specifically packages and delivers a **performance boost for DuckDB exports and CSV imports**. This optimization represents the immediate incorporation of the performance enhancements developed alongside Codex during the initial `0.1a0` prototype spike.

## Project Pulse
Today's blog activity highlights a heavy focus on database interoperability and robust packaging tooling. Simon is actively leveraging state-of-the-art coding agents to bootstrap database-agnostic utilities while polishing Python deployment hygiene using `uv` and automated CLI smoke tests.

***

🛠️ I can generate a clean template script in your workspace demonstrating how to run isolated Python CLI smoke tests using Simon's exact `uv` command configuration.