---
title: 2026-04-14
weight: 8
categories: ["Blogs", "AI", "Tech"]
tags: ["cybersecurity", "ai", "datasette", "open-source"]
---

# Simon Willison — 2026-04-14

## Highlight
Simon highlights a fascinating paradigm shift in AI security: treating vulnerability discovery as an economic "proof of work" equation where spending more tokens yields better hardening. This creates a compelling new argument for the enduring value of open-source libraries in the age of vibe-coding, as the massive cost of AI security reviews can be shared across all of a project's users.

## Posts

**[datasette PR #2689: Replace token-based CSRF with Sec-Fetch-Site header protection]** · [Source](https://simonwillison.net/2026/Apr/14/replace-token-based-csrf/#atom-everything)
Simon has replaced Datasette's cumbersome token-based CSRF protection with a new middleware relying on the `Sec-Fetch-Site` header, inspired by Filippo Valsorda's research and recent changes in Go 1.25. This modern approach eliminates the need to scatter hidden CSRF token inputs throughout templates or selectively disable protection for external APIs. Interestingly, while Claude Code handled the bulk of the commits under Simon's guidance with cross-review by GPT-5.4, Simon chose to hand-write the PR description himself as an exercise in conciseness and keeping himself honest.

**[Cybersecurity Looks Like Proof of Work Now]** · [Source](https://simonwillison.net/2026/Apr/14/cybersecurity-proof-of-work/#atom-everything)
Reacting to the UK AI Safety Institute's evaluation of Claude Mythos Preview, Simon highlights Drew Breunig's observation that finding exploits with AI is becoming a brutal equation of spending more money and tokens than your attackers. This dynamic acts as a proof-of-work mechanism for system hardening. Simon points out that this makes open-source software even more valuable, as the immense token costs required to secure a codebase can be distributed among its users, directly countering the narrative that AI "vibe-coding" will make existing open-source libraries less attractive.

**[Trusted access for the next era of cyber defense]** · [Source](https://simonwillison.net/2026/Apr/14/trusted-access-openai/#atom-everything)
OpenAI has responded to Anthropic's Claude Mythos with a new cyber-permissive model variant called GPT-5.4-Cyber and an identity-verified "Trusted Access for Cyber" program. Simon finds the announcement somewhat convoluted, noting its heavy emphasis on democratizing access despite the reality that gaining access to their top-tier security tools still requires an extra Google Form application. Ultimately, he feels OpenAI's approach to gating these capabilities doesn't feel substantially different from Anthropic's own Project Glasswing initiative.

## Project Pulse
Today's updates reveal a strong thematic focus on the intersection of AI and cybersecurity, ranging from macro-level economic shifts in how we value open-source security to practical, AI-assisted vulnerability hardening implemented directly within the Datasette codebase.