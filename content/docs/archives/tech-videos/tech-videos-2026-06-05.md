---
title: 2026-06-05
weight: 8
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "machine learning", "hardware", "software engineering"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-05

## Watch First
**[Is DOOM a Tensor? | LIVE165](https://www.youtube.com/watch?v=5Pe1m-dgOOs)**
A delightfully cursed but highly educational technical talk where Anthony Shaw emulates a RISC-V CPU entirely inside an ONNX machine learning graph to run DOOM at 1 frame per 3 hours, perfectly illustrating how tensor execution graphs actually compute.

## Highlights by Theme

### Developer Tools & Platforms
Google’s Michael Hablich shares pragmatic engineering lessons in **[Building Agent Interfaces: Lessons from Chrome DevTools (MCP) for Agents — Michael Hablich, Google](https://www.youtube.com/watch?v=_B4Pv9ttFgY)**, warning that dumping raw JSON into agents crashes context windows and proposing a "tokens per successful outcome" metric and slim modes to prevent agent hallucination. GitHub is pushing agents deeper into the SDLC, showing off custom instructions stored in `.github/skills` to automate PR checks against team standards in **[How to extend Copilot code review with MCP and custom skills | demo](https://www.youtube.com/watch?v=JRDN_-4E9ts)**. To wrangle the chaos of parallel agents, VS Code introduced a dedicated control center to monitor local and remote tunnels across different repositories in **[The New Agents Window in VS Code | LIVE169](https://www.youtube.com/watch?v=oB-AA6312EA)**. We also got a fascinating look at the TypeScript compiler being ported to Go, achieving a 10x speedup by utilizing multi-threading and agent-assisted AST porting, featured during the **[GitHub, Copilot, VS Code, and More: Live from San Francisco | LIVE104](https://www.youtube.com/watch?v=AtWmQTfHZ74)** sessions.

### AI & Machine Learning
Microsoft detailed their new 137B MoE (5B active) model in **[How Microsoft AI builds coding models optimized for GitHub Copilot | LIVE158](https://www.youtube.com/watch?v=Agc6Ik00R1g)**, which is uniquely RLHF-trained directly against real IDE environments to master the Copilot harness. Speaking of harnesses, the VS Code team revealed in **[How we ship models in VS Code | LIVE161](https://www.youtube.com/watch?v=82WO6R--wxo)** that they silently hot-swap system prompts and tool schemas depending on if you pick GPT-5.5 or Claude 4.6, as each model requires bespoke hand-holding to function correctly. For open-source, NVIDIA dropped a 550B total (55B active) MoE model optimized for autonomous research in **[Nemotron 3 Ultra Tutorial: Build an Autonomous Research Agent with NemoHermes and OpenCode](https://www.youtube.com/watch?v=TaR3FKKuxvc)**. Finally, OpenClaw maintainers discuss the reality of running 70 concurrent agents using Git worktrees in **[Dark Factory: OpenClaw Ships Faster Than You Can Read the Diff — Vincent Koc, OpenClaw](https://www.youtube.com/watch?v=pmoDeA3RBZY)**, signaling a shift from brute-force token maxing to strict agent orchestration and evaluation.

### Hardware & Infrastructure
Agentic loops are destroying traditional compute assumptions. In the **[Dell Technologies World 2026 Keynote | May 18–21 | Las Vegas](https://www.youtube.com/watch?v=_BE4NSst6yA)**, NVIDIA's Jensen Huang notes that autonomous agents have driven compute demands up 100x to 1000x because they continuously generate tokens instead of waiting for human input. To unblock agents that are currently bottlenecked by database lookups, he highlighted the new "Vera" CPU, which breaks from the hyperscaler trend of maximizing core counts to strictly optimize for extreme single-threaded performance and memory bandwidth.

### Everything Else
Y Combinator launched a fascinating local tool in **[We just launched Paxel!](https://www.youtube.com/watch?v=ywS7Ytkx3A0)** that parses your Cursor and Claude logs to generate a "builder profile" of your engineering habits, which they are now using to evaluate Startup School applicants. On the business side, the CEO of Legora shares how they hit $100M ARR in 18 months in **[Max Junestrand, CEO of Legora](https://www.youtube.com/watch?v=mjmswQurIU4)**, proving that specialized workflow moats and aggressive sales can beat generic foundation models. As a healthy counter-narrative, The Pragmatic Engineer advocates for a "Zero token architecture" in **[“Zero token architecture”](https://www.youtube.com/watch?v=RS3PFeMB5BU)**, reminding devs that learning to solve human problems by thinking for yourself is still a required skill.