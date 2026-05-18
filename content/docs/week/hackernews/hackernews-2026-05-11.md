---
title: 2026-05-11
weight: 6
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "software engineering", "tech layoffs"]
---

# Hacker News — 2026-05-11

## Top Story
The backlash to "vibe coding" has officially arrived. In a post that dominated the front page, the creator of a Kubernetes TUI shared the brutal reality of letting an AI agent write his app for seven months: the AI generated a massive, unmaintainable 1,690-line "god object" that eventually collapsed under its own weight. He's throwing out the AI-generated Go code and rewriting the architecture by hand in Rust, noting the hard truth that while AI delivers incredible velocity on isolated features, it completely fails at system architecture.

## Front Page Highlights

**[Postmortem: TanStack NPM supply-chain compromise](https://tanstack.com/blog/npm-supply-chain-compromise-postmortem)**
Attackers successfully published 84 malicious versions across 42 `@tanstack` npm packages. It was a brilliantly executed supply-chain attack that chained three vulnerabilities: abusing `pull_request_target` on a fork, poisoning the GitHub Actions cache across the trust boundary, and ultimately extracting OIDC tokens from the runner's memory at runtime. The payload exfiltrated AWS, Vault, and SSH credentials from anyone running `npm install`.

**[Can Someone Please Explain Whether Cloudflare Blackmailed Canonical?](https://www.flyingpenguin.com/can-someone-please-explain-whether-cloudflare-blackmailed-canonical/)**
Canonical's Ubuntu repositories suffered a massive 20-hour outage, effectively breaking `apt update` worldwide. The attack was claimed by a group renting capacity from a commercial denial-of-service tool that is actively fronted and hosted by Cloudflare. Hours into the attack, Canonical paid to move its critical endpoints behind Cloudflare to stop the bleeding, effectively paying the same company that was shielding the attackers' infrastructure. 

**[Mythos Finds a Curl Vulnerability](https://daniel.haxx.se/blog/2026/05/11/mythos-finds-a-curl-vulnerability/)**
Anthropic recently hyped their new 'Mythos' AI model as being "dangerously good" at finding zero-days, supposedly keeping it restricted for safety reasons. Daniel Stenberg let it scan the hyper-audited `curl` codebase to see what it could actually do. The result? Out of five "confirmed" vulnerabilities, four were false positives or documented behaviors, and only one was a valid, low-severity bug. A perfect reality check against AI marketing hype.

**[GitLab Announces Workforce Reduction and End of Their CREDIT Values](https://about.gitlab.com/blog/gitlab-act-2/)**
GitLab is flattening its org chart and laying off staff to pivot hard into the "agentic era" of software engineering. In a somewhat dystopian corporate memo, CEO Bill Staples also announced the retirement of the company's long-standing 'CREDIT' values framework, stating those values were right for their "Act 1" but no longer fit an operating posture where software is increasingly built by machines.

**[Building a web server in aarch64 assembly to give my life (a lack of) meaning](https://imtomt.github.io/ymawky/)**
Pure masochism, but exactly the kind of weekend project the HN community loves. The author built a static HTTP server in raw AArch64 assembly for macOS, strictly forbidding the use of libc wrappers. Parsing HTTP headers byte-by-byte using raw syscalls serves as a fantastic, painful reminder of how many abstractions modern developers take for granted.

**[GM just laid off IT workers to hire those with stronger AI skills](https://techcrunch.com/2026/05/11/gm-just-laid-off-hundreds-of-it-workers-to-hire-those-with-stronger-ai-skills/)**
General Motors cut 10% of its IT department (about 600 people) to deliberately swap out legacy IT skillsets for AI-native developers. The automotive giant isn't looking for people who just know how to use AI productivity tools; they are aggressively hiring engineers who can build models, data pipelines, and agentic workflows from the ground up.

## Show HN & Launches
* **[BotCost.dev](https://botcost.dev)**: A free analyzer that parses your Nginx or Cloudflare access logs against 18 known AI bot fingerprints. It calculates exactly how much bandwidth money scrapers from OpenAI, Anthropic, and Perplexity are costing your infrastructure.
* **[e2a – Open-source email gateway for AI agents](https://github.com/Mnexa-AI/e2a)**: An authenticated email gateway built specifically for AI agents. It allows agents to receive emails via WebSockets (bypassing the need to expose public webhook URLs) and includes a "human in the loop" approval gate before agents can send outgoing messages.
* **[OpenGravity](https://github.com/ab-613/opengravity)**: A zero-install, BYOK (Bring Your Own Key) vanilla JavaScript clone of Google's Antigravity UI. It runs an autonomous agent in your browser hooked directly to a live WebContainer terminal.

## Discussion & Debate
The technical community is currently having a serious existential crisis about the long-term impact of LLMs on software quality and human labor. Threads across the board are warning that AI coding agents might double your output today, but will permanently trap teams in maintenance nightmares tomorrow. As one engineer pointed out, AI removes the cognitive friction required for good upfront design, leading to the deployment of brittle, un-debuggable systems. Meanwhile, a bleak dispatch from a Hollywood showrunner who resorted to gig-work training AI models—earning $16/hr to label data under intense, automated management surveillance—struck a nerve about the grim reality of the new "agentic" economy.