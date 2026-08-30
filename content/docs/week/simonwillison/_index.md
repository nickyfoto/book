---
title: Simon Willison
weight: 16
bookCollapseSection: true
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "developer tooling", "coding agents", "software engineering", "ai economics", "anthropic fable", "model routing", "sqlite", "linux", "python", "ai-agents", "game development", "software migration", "legacy code", "local llms", "mixture of experts", "prompt-injection", "sandboxing", "security", "claude-code", "ai-safety", "cybersecurity", "vulnerability disclosure", "open source maintainers", "cve"]
---

# Simon Willison — Week of 2026-08-22 to 2026-08-28

## Highlight of the Week
The collapse of traditional vulnerability disclosure workflows under the pressure of autonomous coding agents marks the week's most alarming inflection point. Reports from Cambridge professor Anil Madhavapeddy and rclone maintainer Nick Craig-Wood demonstrated that AI tools can reverse-engineer functional exploits from mere patch rumours in minutes, rendering embargo periods obsolete and overwhelming maintainers with CVE reports. Coupled with Johann Rehberger’s prompt injection exploit against Claude Code’s Auto Mode, the week delivered a stark reminder that software-level safety guardrails are insufficient and unattended agents must run inside isolated container or OS sandboxes.

## Key Posts
**[Just a rumour of a bug is enough to find a security exploit these days](https://simonwillison.net/2026/Aug/28/just-a-rumour-of-a-bug/)** · [Source](https://anil.recoil.org/notes/rumour-is-the-exploit)
Anil Madhavapeddy observed automated exploit probes targeting an OCaml project site within ten minutes of sharing patch discussions, reproducing the behaviour using autonomous coding models like DeepSeek V4 Pro after Claude Fable refused. Nick Craig-Wood corroborated the strain on open-source ecosystems, noting that rclone received over 40 vulnerability reports in a single month while GitHub CVE response times slowed significantly.

**[Breaking Claude Code Opus 5 Auto Mode](https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/)** · [Source](https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/)
Security researcher Johann Rehberger demonstrated a prompt injection attack against Claude Code's default Auto Mode via a malicious zip file containing a rogue `struct.py` that hijacks Python's base64 module. Strikingly, when Claude detected the breach and attempted to terminate the rogue process, its internal safety classifier actively blocked its own cleanup command, demonstrating why untrusted agent execution requires strict OS-level containerization rather than model-level classifiers.

**[Your executable is a SQLite database](https://simonwillison.net/2026/Aug/24/your-executable-is-a-sqlite-database/)** · [Source](https://fzakaria.com/2026/08/23/your-executable-is-a-sqlite-database)
Farid Zakaria developed a technique to store and execute Linux ELF binaries directly inside a SQLite database by assigning the application ID to `SELF` (Structured Executable & Linkable Format) and mapping ELF structures to database tables. Paired with a custom C-based self-exec interpreter and Linux `binfmt_misc` registration, the pattern allows databases to run as native CLI executables, exemplifying SQLite's versatility as an application container.

**[EVE Online: The Move to Python 3 Begins!](https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/)** · [Source](https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/)
CCP Games announced the migration of EVE Online's 2.4-million-line codebase from Stackless Python 2.7 to Python 3, concluding a sixteen-year era in one of the gaming industry's largest Python deployments. The development team is addressing approximately 20,000 runtime behavior differences with the `futurize` script, while their open-source `carbonengine/scheduler` project serves as the probable architecture to replace Stackless tasklets.

## Project Updates
Simon released **llm 0.33**, introducing support for the OpenAI Python 3.x library, migrating underlying HTTP client operations to `httpx2`, enabling per-call API keys for embedding plugins via `--key`, allowing sequential template chaining with `-t`, and adding `reasoning_summary` controls for OpenAI-compatible reasoning models. In parallel, he published **llm-anthropic 0.27** to ensure compatibility with `anthropic v1.0.0` and its switch to `httpx2`, automating the migration by pointing Claude Code and Fable 5 directly at Anthropic's migration guide. Core Datasette saw no tagged releases during this window, with release work concentrated squarely on LLM CLI maintenance and modernizing its Python dependencies.

## Themes
A primary thread across the week was the maturation of agentic software engineering, moving past superficial code generation to grapple with agent verification, Linus Torvalds' kernel debugging sessions, and automated SDK upgrades. Simultaneously, posts addressed the security and economic boundaries of AI tooling, highlighting how frontier pricing is driving pragmatic model routing while automated exploit discovery mandates hardened, sandboxed execution environments. Underpinning these AI developments was a persistent appreciation for foundational systems craft, seen in EVE Online's historic Python 3 overhaul and inventive low-level SQLite polyglots.