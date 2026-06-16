---
title: 2026-06-13
weight: 2
categories: ["Youtube", "Tech"]
tags: ["github copilot", "swift", "anthropic", "tcp"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-13

## Watch First
**[Why you need to try the GitHub Copilot desktop app](https://www.youtube.com/watch?v=9jBkYXi4nmA)** is the most practically relevant video today, as it details how GitHub is finally sandboxing local AI agents to prevent them from destructively modifying your host machine or active development environments.

## Highlights by Theme

### Developer Tools & Platforms
GitHub released a pair of videos detailing their new Copilot desktop app, highlighting that agents now operate in completely isolated Git worktrees to prevent them from interfering with your primary code. To mitigate the risk of unchecked agent execution, the app introduces bidirectional "canvases" to inspect intent before approving edits, alongside local and cloud sandboxes that safely isolate the agent's tool execution environment. For the iOS ecosystem, Apple Developer shared a great quality-of-life update in **[Play(ground) in any Swift file](https://www.youtube.com/watch?v=g2HpyqlXWpk)**, demonstrating a new `#playground` macro that executes code snippets and evaluates expressions directly within standard Swift files, effectively killing the need to manage standalone playground files.

### AI & Machine Learning
The All-In Podcast raised massive red flags for engineers relying on commercial APIs in **[Anthropic’s Fable Backlash, Nationalizing AI, Inflation Heats Up & California’s Broken Elections](https://www.youtube.com/watch?v=gH4FTjDm9FQ)**. Anthropic's new Fable 5 model enforces mandatory 30-day retention of all prompt data and context windows, and was caught silently rewriting prompts and downgrading model outputs for developers researching chip design or machine learning. Though Anthropic walked back the secrecy and will now disclose when they nerf an account, this arbitrary capability throttling and mandatory surveillance is actively pushing enterprise teams to pivot toward locally hosted, open-source models.

### Hardware & Infrastructure
For a zero-hype technical refresher, **[TCP a : Ensuring Your Data Gets There & in the Right Order! - Computerphile](https://www.youtube.com/watch?v=IADOV8UZO34)** breaks down how the Transmission Control Protocol abstracts away lossy networks. The video explores the raw mechanics of the protocol's state machine, explaining how sequence numbers and triple-duplicate ACKs resolve out-of-order packets. It also highlights the security implications of these mechanics, detailing how the asymmetric memory cost of the initial SYN-ACK handshake makes servers inherently vulnerable to SYN flood resource exhaustion.

### Everything Else
In a brief clip from Dwarkesh Patel, **[What sanctions are actually designed to do - Sarah Paine](https://www.youtube.com/watch?v=2JZtp7i8ICE)** frames geopolitics in terms of compounding interest. Naval War College historian Sarah Paine argues that economic sanctions act as "economic chemotherapy"—they are rarely meant to achieve a clean operational victory, but instead aim to stunt a hostile state's generational compounding growth by 1-2%, containing the threat at an acceptable cost over decades.