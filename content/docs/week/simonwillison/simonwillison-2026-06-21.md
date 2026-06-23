---
title: 2026-06-21
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite-utils", "sqlite", "cloudflare", "migrations", "ai agents"]
---

# Simon Willison — 2026-06-21

## Highlight
The major news today is the first release candidate for `sqlite-utils v4`, which officially absorbs the battle-tested `sqlite-migrate` package and introduces nested transactions. It's a significant maturation for one of Simon's core data tools, streamlining the developer experience by bringing schema evolution directly into the main library.

## Posts

**[sqlite-utils 4.0rc1 adds migrations and nested transactions](https://simonwillison.net/2026/Jun/21/sqlite-utils-40rc1/#atom-everything)**
Simon dropped the first release candidate for `sqlite-utils v4`, adding built-in database migrations and a `db.atomic()` API for nested transactions. The migrations system is deliberately small, offering no reverse migrations, and relies on a design already proven in his `LLM` CLI project. As a major release, it includes several backwards-incompatible changes—such as defaulting floating-point types to the correct SQLite `REAL` type, and requiring `db.view()` instead of `db.table()` for accessing views—so he is asking the community to test it via `uvx` or `pip`.

**[Temporary Cloudflare Accounts for AI agents](https://simonwillison.net/2026/Jun/21/temporary-cloudflare-accounts/#atom-everything)**
Cloudflare has introduced a feature to deploy ephemeral Worker projects that stay live for 60 minutes without requiring an account setup. While marketed "for AI agents," Simon points out its broader utility for rapid human prototyping. He successfully tested the feature by having GPT-5.5 xhigh (in Codex Desktop) build an HTTP redirect tool, noting that the deployment spits out a URL that allows you to claim the project permanently if you decide to keep it.

**[sqlite-utils 4.0rc1](https://simonwillison.net/2026/Jun/21/sqlite-utils/#atom-everything)**
A brief release announcement for `sqlite-utils 4.0rc1`. It serves as a quick pointer directing readers to the detailed annotated release notes regarding the new migrations and nested transactions.

## Project Pulse
Simon's primary focus right now is consolidating and stabilizing his SQLite ecosystem, specifically taking successful standalone experiments like `sqlite-migrate` and weaving them into the core `sqlite-utils` library for a more cohesive developer toolkit.