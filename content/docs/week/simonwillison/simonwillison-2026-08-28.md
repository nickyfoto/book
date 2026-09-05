---
title: 2026-08-28
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["cybersecurity", "coding agents", "vulnerability disclosure", "open source maintainers", "cve"]
---

# Simon Willison — 2026-08-28

## Highlight
**Modern coding agents have become so proficient at turning mere hints of vulnerabilities into functional exploits within minutes that traditional open-source embargo and disclosure workflows are breaking down.** Simon highlights this shift through reports from Cambridge professor Anil Madhavapeddy and rclone maintainer Nick Craig-Wood, showing how automated watchers and AI tools are overwhelming maintainers and straining infrastructure like GitHub CVE assignments.

## Posts

**[Just a rumour of a bug is enough to find a security exploit these days](https://simonwillison.net/2026/Aug/28/just-a-rumour-of-a-bug/)** · [Source](https://anil.recoil.org/notes/rumour-is-the-exploit)
Simon highlights an alarming report by Cambridge computer science professor and OCaml compiler core maintainer Anil Madhavapeddy, who observed active exploit probes on an OCaml project site within ten minutes of sharing patch discussions. Madhavapeddy demonstrated that autonomous coding agents can locate vulnerabilities from minimal information, successfully reproducing the behavior with DeepSeek V4 Pro after Claude Fable refused the task. Simon points out that this speed of discovery renders standard open-source embargo periods obsolete, demanding fresh approaches to maintainer and community safety. The severity of the issue is echoed by rclone maintainer Nick Craig-Wood, who reported receiving over 40 security reports in a single month—compared to 20 over the project's first decade—while GitHub CVE turnaround times degraded from 2–3 days to 3–4 weeks.

## Project Pulse
Today's post captures a critical inflection point in developer tooling, highlighting how autonomous coding agents and automated watchers are upending open-source security disclosure norms and inundating project maintainers.

***

🛡️ Would you like to explore how open-source teams are beginning to adjust their vulnerability disclosure workflows and patch discussions in response to AI-driven exploit scanning?