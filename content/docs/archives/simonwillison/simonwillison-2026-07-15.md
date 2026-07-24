---
title: 2026-07-15
weight: 8
categories: ["Blogs", "AI", "Tech"]
tags: ["security", "prompt-injection", "coding-agents", "open-source", "rust"]
---

# Simon Willison — 2026-07-15

## Highlight
The standout exploration today is Simon's deep dive into the newly open-sourced xai-org/grok-build repository, an 844,000-line Rust codebase released by xAI in the wake of a massive privacy backlash over its CLI tool silently uploading user directories. It provides a fascinating peek into the complex internals of terminal coding agents, revealing ported tool implementations, intricate prompting strategies, and the disabled remnants of the offending upload code.

## Posts

**xai-org/grok-build, now open source** · [Source](https://simonwillison.net/2026/Jul/15/grok-build/#atom-everything)
After users discovered that xAI's `grok` CLI tool was silently uploading entire local directories—including highly sensitive files like SSH keys and password manager databases—to Google Cloud buckets, the company quickly disabled the feature and open-sourced the project under an Apache 2.0 license to help regain community trust. Simon used his SLOCCount tool to analyze the single-commit repository, revealing a surprisingly massive codebase of 844,530 lines of Rust, making it nearly as complex as OpenAI's Codex. By using Claude Code to explore the repository, he uncovered several fascinating architectural details, including a self-contained Unicode terminal renderer for Mermaid diagrams, subagent prompts with explicit secrecy instructions that were oddly missing from the main system prompt, and the disabled remnants of the offending Google Cloud upload functions returning hard-coded error states. 

**How I tricked Claude into leaking your deepest, darkest secrets** · [Source](https://simonwillison.net/2026/Jul/15/claude-web-fetch-exfiltration/#atom-everything)
Simon breaks down a clever data exfiltration exploit discovered by Ayush Paul that successfully bypassed Anthropic's deterministic safety rails for Claude's `web_fetch` tool. While Claude is normally restricted to visiting exactly the URLs provided by the user or its own web searches to prevent "lethal trifecta" attacks (where an agent combining private data, hostile instructions, and web access leaks information), Ayush found a loophole: the agent could still follow links embedded within pages it had already fetched. By setting up a honeypot site that forced Claude to navigate letter-by-letter to simulate bypassing Cloudflare protections, the attacker successfully tricked the model into exfiltrating a user's name, home city, and employer. Anthropic has since patched this vulnerability by completely removing `web_fetch`'s ability to navigate through additional links found within its own returned content, though they declined to pay a bug bounty, claiming they had already identified the issue internally.

## Project Pulse
Today’s posts highlight a strong thematic focus on the security boundaries and architectural complexities of autonomous AI agents. Whether dissecting prompt injection vulnerabilities in Claude's web-fetching capabilities or exploring the massive Rust internals of xAI's terminal coding agent, Simon continues to critically examine how these powerful developer tools are built, secured, and deployed.