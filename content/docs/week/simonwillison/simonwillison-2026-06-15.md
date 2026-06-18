---
title: 2026-06-15
weight: 2
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "sqlite", "llms", "anthropic", "jailbreaking"]
---

# Simon Willison — 2026-06-15

## Highlight
The most exciting update today is the release of `datasette-agent 0.3a0`, which introduces natural language database modification right from the terminal. By combining the new `execute_write_sql` tool with an `--unsafe` auto-approval mode, Simon has made it possible to chat directly with a SQLite database and modify its schema and records on the fly.

## Posts

**[datasette-agent 0.3a0](https://simonwillison.net/2026/Jun/15/datasette-agent/#atom-everything)** · Source
Simon just shipped a major update to his experimental `datasette-agent` project, adding an `execute_write_sql` tool that can prompt for user approval before writing to a database. He also enhanced the CLI chat terminal with options like `--yes`, `--root`, and `--unsafe` to streamline or bypass these permission checks entirely. Using the `--unsafe` flag alongside a model like `gpt-5.5`, developers can now converse directly with a specific database to execute structural changes, such as creating tables or inserting records via natural language.

**[Mapping SQLite result columns back to their source table.column](https://simonwillison.net/2026/Jun/13/sqlite-column-provenance/#atom-everything)** · Source
To enrich how Datasette renders arbitrary SQL queries (including complex syntax like joins and CTEs), Simon is exploring how to programmatically map result columns back to their origin tables and columns. Forced to use Claude Code with the Opus 4.8 model due to the current US government ban on Anthropic's Fable, he tasked the LLM with finding a solution. The model successfully surfaced several promising approaches, including using `apsw`, interrogating `EXPLAIN` outputs, and employing a clever `ctypes` trick to access the unexposed `sqlite3_column_table_name()` C function.

**["They screwed us": Personality clashes sent Anthropic’s models offline](https://simonwillison.net/2026/Jun/15/axios-clashes-anthropics/#atom-everything)** · Source
Simon comments on a recent Axios piece detailing the behind-the-scenes drama and government export controls that led to Anthropic's Mythos and Fable models being taken offline. Noting that key Anthropic staff are currently meeting with the Commerce Department, he expresses pessimism about Fable returning soon without perfect jailbreak resistance or a major shift in attitude. He also connects the government's concerns about narrow jailbreaks to Anthropic's 2023 research on adversarial attacks and their ongoing Constitutional Classifiers work.

**[Quoting Julia Evans](https://simonwillison.net/2026/Jun/15/julia-evans/#atom-everything)** · Source
Simon shares a quick piece of technical writing advice from Julia Evans. She recommends focusing your writing on a specific person, often imagining that target audience as either a good friend or yourself from three years ago.

## Project Pulse
Today's posts highlight a deep focus on pushing the boundaries of SQLite tooling with AI, whether it's giving LLMs direct write-access to Datasette or using Claude Code to unravel obscure C-level SQLite functions. There is also a notable undercurrent of frustration with the current US AI export controls, which are actively shaping which cutting-edge models are available for his local development and tooling experiments.