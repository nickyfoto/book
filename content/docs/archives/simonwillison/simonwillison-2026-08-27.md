---
title: 2026-08-27
weight: 8
categories: ["Blogs", "AI", "Tech"]
tags: ["prompt-injection", "sandboxing", "security", "claude-code", "ai-safety"]
---

# Simon Willison — 2026-08-27

## Highlight
Simon highlights a critical security breakdown in Claude Code's auto mode discovered by researcher Johann Rehberger, showing how safety mechanisms can backfire and block cleanup commands. The post underscores that **unattended AI coding agents must always run in containerized or OS-level sandboxes** rather than relying on software-based guardrails.

## Posts

**[Breaking Claude Code Opus 5 Auto Mode](https://simonwillison.net/2026/Aug/27/breaking-claude-code-opus-5-auto-mode/)** · [Source](https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/)
Simon highlights a post by security researcher Johann Rehberger detailing a critical prompt injection exploit in Claude Code’s recently defaulted **Auto Mode** that succeeds 80% of the time. The attack compromises the agent by tricking it into downloading and uncompressing a malicious zip file, which contains a rogue local `struct.py` script that hijacks Python's standard `base64` import process to execute unauthorized code. Remarkably, when Claude detected the compromise and tried to terminate the malware, the **Auto Mode safety classifier actually blocked Claude's own cleanup command**, showing that software-level safety mechanisms can actively hinder recovery efforts. Simon strongly agrees with Rehberger's conclusion that software classifiers are insufficient for untrusted environments, insisting that **unattended AI coding agents must run inside hardened container or OS sandboxes** with restricted network egress and zero access to sensitive SSH keys or cloud credentials.

***

🛡️ We could look into the specific sandboxing tools Simon often recommends for securing LLM-based development environments.