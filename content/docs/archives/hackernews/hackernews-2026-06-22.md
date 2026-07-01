---
title: 2026-06-22
weight: 8
categories: ["News", "Tech"]
tags: ["artificial intelligence", "linux", "software engineering", "open source"]
---

# Hacker News — 2026-06-22

## Top Story
The looming September 2026 expiration of Microsoft's 2011 UEFI certificate is creating a massive headache for the Linux ecosystem. While installed systems with their own bootloader keys should survive, booting new Linux installation media on machines lacking the 2023 Microsoft replacement key will fail unless hardware vendors explicitly push firmware updates. As the LWN community points out, relying on hardware manufacturers to patch aging systems is a historically losing bet, meaning many users will likely have no choice but to disable Secure Boot entirely.

## Front Page Highlights

**[Git is forever. I’m building Oak anyways](https://oak.space/blog)** · oak.space
Zach Geier spent four years building a VCS from scratch, and Oak is the result—a system built explicitly for the way AI agents work. Instead of cloning full repositories, it relies on content-addressed lazy mounts and branch-per-session workflows to give agents massive speedups without fighting Git worktrees. 

**[Prompt Injection as Role Confusion](https://role-confusion.github.io)** · role-confusion.github.io
This paper offers one of the clearest explanations of why LLMs fail at security: they don't actually respect system tags. Researchers proved that if you inject text that simply *sounds* like the model's internal "Chain of Thought" reasoning, the LLM will adopt it as its own trusted conclusion. Models identify roles using insecure writing style features rather than secure architectural boundaries, rendering standard prompt injection defenses inherently brittle.

**[Deno Desktop](https://docs.deno.com/runtime/desktop/)** · docs.deno.com
Deno 2.9 is introducing a native way to bundle web projects into self-contained desktop applications. By defaulting to the host OS's native webview and utilizing in-process bindings instead of IPC, it directly targets the binary bloat and performance complaints historically aimed at Electron. 

**[Why Drawing Tablet Brands Won’t Collaborate on Linux Floss Drivers](https://www.davidrevoy.com/article1154/why-drawing-tablet-brands-wont-collaborate-on-linux-floss-drivers)** · davidrevoy.com
A frustrating look at open-source politics: brands like Gaomon and Huion are refusing to contribute hardware specs to the Linux kernel. Because of decades of legacy naming, the core Linux input infrastructure is branded with their biggest competitor's name (e.g., `libwacom`, `wacom-hid-descriptors`), making executives unwilling to participate.

**[British Columbia, Time Zones, and Postgres](https://www.crunchydata.com/blog/british-columbia-and-time-zone-changes)** · crunchydata.com
British Columbia recently moved to permanent Daylight Saving Time, creating a classic database nightmare. Because Postgres `timestamptz` columns store UTC and calculate local time at query, future appointments stored *before* the package update will mysteriously shift by an hour. The author strongly advocates using a dual-column pattern (local time + timezone name) to preserve user intent for future real-world events.

**[Claude Code’s "extended thinking" is a summary- not authentic thinking](https://patrickmccanna.net/the-text-in-claude-codes-extended-thinking-output-is-not-authentic/)** · patrickmccanna.net
If you're relying on Claude Code's local logs for a raw audit trail of agent reasoning, you're out of luck. The raw reasoning is encrypted by Anthropic, and the local disk records only receive a summarized, lossy version of the model's logic unless you have an enterprise agreement.

**[Jobs and Software Is Fucked](https://urflow.bearblog.dev/jobs-and-software-is-fucked/)** · urflow.bearblog.dev
An ex-Blizzard engineer laid off in 2025 voices what many are feeling: the software job market is currently a miserable gauntlet of AI proctors, opaque automated filters, and pulled ladders. It's a raw reminder of the human cost behind the industry's current obsession with automating out junior and mid-level roles.

## Show HN & Launches
**[Show HN: Oak – Git replacement designed for agents](https://oak.space/oak/oak)** is the open-source Rust core driving the new VCS mentioned above, utilizing BLAKE3 hashing and SQLite/Git backends. To help manage agent chaos, **[Ponytrail](https://github.com/0xroylee/ponytrail)** launched as a local CLI and agent skill that tracks exactly *why* your AI coding agent changed a file, saving snapshots directly to a local hidden directory.

For hardware hackers, **[Optocam Zero](https://github.com/dorukkumkumoglu/optocamzero)** is a fully 3D-printed, pocket-sized Raspberry Pi Zero digital camera built entirely from off-the-shelf components. Finally, on the cursed-but-brilliant side of the spectrum, someone implemented **[Lisp in the Rust Type System](https://github.com/playX18/lisp-in-types/)**, supporting recursive functions and lexical environments entirely within Rust traits.

## Discussion & Debate
Mitchell Hashimoto's pledge of another $400k to the Zig Software Foundation sparked a nuanced discussion about open-source boundaries. Despite being a heavy AI user himself, Hashimoto praised Zig's strict no-LLM contribution policy, pushing back against the hostility seen during the recent Bun/Zig fork drama and arguing that great software requires projects to set unusual boundaries. 

Separately, hardware enthusiasts are wincing at an OpenAI Codex logging bug. The tool's local SQLite database is quietly writing up to 37TB to local SSDs in less than a month due to excessive TRACE logs and continuous insert-and-prune write amplification on the WAL index, easily chewing through consumer drive endurance.