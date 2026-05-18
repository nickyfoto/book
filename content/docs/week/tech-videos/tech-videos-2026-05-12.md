---
title: 2026-05-12
weight: 5
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "machine learning", "robotics", "cybersecurity"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-12

## Watch First
OpenAI’s [Computer use in Codex](https://www.youtube.com/watch?v=D_FCYsshMI4) features a highly compelling demo of Codex driving local Mac applications completely autonomously. It moves the goalpost of what an AI agent can do from purely textual generation into actual graphical desktop control, avoiding the need for fragile bespoke tools by baking the capability directly into the mainline models.

## Highlights by Theme

### Developer Tools & Platforms
In [Give Your Agent a Computer](https://www.youtube.com/watch?v=wflNENRSUb4) by the AI Engineer channel, Vercel demos tying their AI SDK to persistent sandboxes, giving agents a deterministic file system to store context and execute bash scripts across sessions. [How Cursor builds agentic workflows across the SDLC](https://www.youtube.com/watch?v=dJAVS1g3NDw) from Cursor provides a sobering look at how raw coding autocomplete plateaus around a 40% productivity gain; to break this ceiling, they're deploying autonomous agents for background PR security reviews and bug triaging. To address the testing bottleneck, Cursor also shows off agents spinning up their own VMs, testing their code, and producing video artifacts as proofs of success in [What happens when agents get their own computers](https://www.youtube.com/watch?v=_GljcHROPX8). Finally, [VS Code’s Integrated Browser](https://www.youtube.com/watch?v=X4nkmLkKGKI) (Visual Studio Code) is a practical update that embeds a browser directly in the editor, letting Copilot capture UI screenshots from localhost for context-aware CSS edits.

### AI & Machine Learning
For real-world AI deployment, [Lessons from Trillion Token Deployments at Fortune 500s](https://www.youtube.com/watch?v=X6NShR2ccOg) (AI Engineer) makes a credible case that Instruction Fine-Tuning (SFT) hits a wall for enterprise agents, and Reinforcement Learning on smaller models is mandatory to hit strict latency and economic limits. NVIDIA's [Ask the Experts: Nemotron 3 Nano Omni](https://www.youtube.com/watch?v=MulyE2A1bgU) (NVIDIA Developer) breaks down their joint audio/video training architecture, detailing how they skip the typical pipeline approaches and interleave multimodal tokens to enable proper cross-modal temporal reasoning. On the infrastructure front, the AWS Financial Services Keynote ([Rethink Everything](https://www.youtube.com/watch?v=uQpTC2PcWbI)) showcased a genuinely novel capability: Agent Core Payments via the open HTTP-native X42 protocol, allowing autonomous agents to execute sub-dollar microtransactions for paywalled API queries without a human in the loop.

### Hardware & Infrastructure
In [Fast robot teleoperation](https://www.youtube.com/watch?v=Y6mjiS00Y-0) (Lex Clips), the creator of VLC discusses Kyber, an open-source UDP-based protocol aiming for an aggressive 4ms glass-to-glass latency for robotics teleoperation by managing clock drift and forward error correction directly on the wire. Over in the industrial IoT space, [Deploying AI in Days, Not Months](https://www.youtube.com/watch?v=EM4VT10eQj8) (AWS Events) details how traditional factories are shifting from local PLC-heavy setups to pushing visual inspection edge inference models into managed Kubernetes clusters to drastically reduce local hardware sprawl.

### Everything Else
In a fascinating security anecdote, the lead developer of VLC reveals in [Intelligence agencies vs VLC](https://www.youtube.com/watch?v=5_tU6EXrUcU) (Lex Clips) how they refused backdoor requests from two state agencies and maintain paranoid security practices like offline compiler bootstrapping to prevent supply chain injections. For a masterclass on organizational scaling, [How We Grew Koch Industries to $150 Billion Without Going Public](https://www.youtube.com/watch?v=EIo3AuyvV84) (All-In Podcast) offers pragmatic insights on bounding your business by capabilities rather than industries, alongside the painful realities of trying to enforce "creative destruction" against the natural risk-aversion of middle management.