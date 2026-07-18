---
title: 2026-07-12
weight: 5
categories: ["News", "Tech"]
tags: ["artificial intelligence", "coding agents", "postgresql", "web browsers", "software engineering"]
---

# Hacker News — 2026-07-12

## Top Story
**[What xAI’s Grok Build CLI Actually Sends to xAI](https://gist.github.com/cereblab/dc9a40bc26120f4540e4e09b75ffb547)**
A meticulous reverse-engineering teardown reveals that xAI's official Grok Build CLI secretly uploads entire user repositories—including unredacted `.env` files—to a Google Cloud storage bucket. The multi-gigabyte background uploads occur regardless of what files the agent actually reads, and explicitly turning off the "Improve the model" setting does not stop the exfiltration.

## Front Page Highlights

**[Claude Code sends 33k tokens before reading the prompt; OpenCode sends 7k](https://systima.ai/blog/claude-code-vs-opencode-token-overhead)**
A proxy-based token audit reveals how much context overhead popular AI coding harnesses are silently burning. Claude Code proved exceptionally hungry and cache-inefficient, frequently rewriting tens of thousands of prompt-cache tokens mid-session and resulting in massive hidden costs compared to the much leaner OpenCode.

**[Since Chromium 148, Math.tanh is now fingerprintable to link underlying OS](https://scrapfly.dev/posts/browser-math-os-fingerprint/)**
A fascinatingly niche browser fingerprinting trick: V8 recently swapped its bundled `Math.tanh` implementation for the host OS's standard library `std::tanh`, meaning the lowest bits of the result now differ based on whether you're running glibc (Linux), libsystem_m (macOS), or UCRT (Windows). Spoofing this requires compiling bit-for-bit reproductions of the target OS's math library without FMA contraction.

**[Abject Praise](https://infrequently.org/2026/07/abject-praise/)**
Alex Russell delivers a blistering, data-driven critique of Apple's Safari 27 release. Using Web Platform Tests (WPT) data, he argues that despite marketing claims, WebKit continues to chronically underperform and block web compatibility due to intentional underinvestment designed to protect Apple's lucrative App Store moat.

**[We scaled PgBouncer to 4x throughput](https://clickhouse.com/blog/pgbouncer-clickhouse-managed-postgres)**
Because PgBouncer is strictly single-threaded, it routinely bottlenecks long before the underlying PostgreSQL database hits its limit. The ClickHouse Managed Postgres team solved this by running a fleet of PgBouncer processes behind `SO_REUSEPORT` and wiring them together with custom peering to handle cross-process connection cancellation, effectively quadrupling throughput.

**[How to Achieve Pruning When Querying by Non-Partitioned Columns in PostgreSQL](https://hakibenita.com/postgresql-partition-pruning)**
A clever optimization for PostgreSQL partition pruning. If your data has a strong correlation between a partition key (like timestamp) and a non-partition key (like session ID), you can use dynamically generated `CHECK` constraints to communicate these boundaries to the query planner. This allows the database to eliminate full partition scans without requiring unsupported global indexes.

**[Protobuf-py: Protobuf for Python, without compromises](https://buf.build/blog/protobuf-py)**
The team at Buf has rewritten the Protocol Buffers runtime for Python from scratch to replace the standard C-backed `upb` engine. By keeping message data as native Python objects with a Rust accelerator, it bypasses the expensive C-to-Python translation boundary on field reads, ultimately outperforming Google's official package in real-world workloads while passing the full conformance suite.

## Show HN & Launches

**[Show HN: Mindwalk – Replay coding-agent sessions on a 3D map of your codebase](https://github.com/cosmtrek/mindwalk)**
A visualizer that turns raw Claude Code and Codex JSONL session logs into a 3D "night map" of your repository, glowing where the agent searched, read, and edited. It provides an intuitive way to actually see what the agent was exploring before it committed an action.

**[Show HN: Skillscript – A declarative, sandboxed language for tool orchestration](https://github.com/sshwarts/skillscript)**
Rather than burning expensive frontier model tokens reasoning through repetitive procedures from scratch, Skillscript gives agents a restricted, orchestration-only language to write their logic down. The resulting programs are auditable by humans, Turing-incomplete by design, and run predictably against local models and tools.

**[Show HN: Nectar, a Rust-like React that compiles to WebAssembly](https://buildnectar.com)**
An ambitious new web framework offering compile-time safety and fine-grained O(1) reactive signals without a virtual DOM. Nectar removes JS dependencies completely, compiling your entire app—logic, state, and rendering—into a `.wasm` binary backed by just a 10KB JavaScript syscall layer.

## Discussion & Debate

**[I love LLMs, I hate hype](https://geohot.github.io//blog/jekyll/update/2026/07/12/i-love-llms.html)**
George Hotz (geohot) pushes back against the doom-and-gloom AGI hype propagated by major labs, framing it as a cynical attempt to justify valuations and mask their fear of open-source commoditization. He argues that while models are incredible tools—effectively a massive productivity boost akin to the invention of compilers—they are a continuation of the computing revolution, not an impending autonomous singularity.