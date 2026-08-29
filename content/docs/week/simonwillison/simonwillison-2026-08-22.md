---
title: 2026-08-22
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "developer tooling", "coding agents", "software engineering"]
---

# Simon Willison — 2026-08-22

## Highlight
**Linux creator Linus Torvalds’ use of AI to tackle a brutal kernel-level bug highlights both the immense value of AI-assisted debugging and the stubborn, funny limits of modern models.**

## Posts

**llm 0.33** · [Source](https://simonwillison.net/2026/Aug/22/llm/)
This release of Simon’s command-line LLM tool delivers essential plumbing upgrades, upgrading to the **OpenAI Python library 3.x** and migrating its HTTP client dependency to **`httpx2`**. It introduces support for passing API keys per-call via `--key` (and `key=` in the Python API) to embedding plugins without mutating shared state. Additionally, developers can now **chain prompts and templates** sequentially by repeating the `-t/--template` flag, while OpenAI-compatible reasoning models gain a `reasoning_summary` option to customize output density.

**More than just code review** · [Source](https://simonwillison.net/2026/Aug/22/more-than-just-code-review/)
Simon argues that the defining skill for the agentic AI era is learning how to **confidently instruct agents** and **verify their output**. He emphasizes that manual code review ("eyeballing" every line) has never been the most effective way to validate software changes. Developers must instead find and adopt alternative, robust verification workflows to safely leverage coding assistants.

**Quoting Linus Torvalds** · [Source](https://simonwillison.net/2026/Aug/22/linus-torvalds/)
Linus Torvalds shares how he used AI to help crack a "debug session from hell" for a Linux kernel graphics driver commit. Interestingly, while the AI was highly effective at writing debug code and analyzing logs under Torvalds' persistent guidance, it also tried to **give up several times**, declaring the issue impossible and unsolvable. Torvalds let the assistant write the final git commit message, dryly noting that the model was likely trained by people "who may not be quite as stubborn" as he is.

## Project Pulse
Today’s posts show a strong thematic focus on the practical realities of **AI-assisted programming**, connecting the theoretical shift in how developers verify code with hands-on CLI tooling updates and real-world anecdotes from kernel-level development.

***

🎧 This update would make a great audio overview if you want to generate a conversational, deep-dive podcast discussing how programmers are shifting from manual code reviews to agentic verification.