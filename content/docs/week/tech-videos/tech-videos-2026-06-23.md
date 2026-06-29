---
title: 2026-06-23
weight: 5
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "ai agents", "machine learning"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-23

## Watch First
**[Closer to the Material, Ryo Lu | Compile 26](https://www.youtube.com/watch?v=az6OEZV8iHw)** from Cursor is a highly recommended watch that rejects the "black box" slot-machine model of AI dev tools in favor of a transparent "Glass" UI paradigm. It offers a sharp, philosophical architecture discussion on why exposing an agent's planning, state, and tool execution is necessary to preserve engineering judgment and taste as software generation costs approach zero.

## Highlights by Theme

### Developer Tools & Platforms
In the IDE space, the VS Code team demoed **[Building with MAI-Code-1-Flash in VS Code](https://www.youtube.com/watch?v=IZWTaKejlek)**, showing off a fast, 5-billion parameter local model trained on Copilot telemetry that leverages adaptive thinking to handle React/TypeScript feature edits for pennies. For orchestrating multi-agent systems, AWS Developers' **[Your AI Agent Needs a Tool](https://www.youtube.com/watch?v=22E0bXQwwZ8)** gives a clean, practical breakdown of using the Model Context Protocol (MCP) to replace custom API wrappers with standardized servers, complete with a live Python demonstration connecting a GitHub MCP client. GitHub also demonstrated bringing their platform directly into the CLI in **[New in GitHub Copilot CLI: Bring GitHub right into your terminal](https://www.youtube.com/watch?v=YpgA1hJsNF8)**, letting you review PRs and issues via a native terminal UI. Finally, a quick tip from Syntax in **[why you are always out of space (node_modules)](https://www.youtube.com/watch?v=jjDNEKFnVw4)** reminds us to run `npx npkill` to easily reclaim disk space from stale project dependencies.

### AI & Machine Learning
For the most rigorous technical dive of the day, Microsoft Research's **[Inferring Unobserved Trajectories from Multiple Temporal Snapshots](https://www.youtube.com/watch?v=PjbtjEzlWjA)** explores using Stochastic Differential Equations (SDEs) and a novel iterative Schrödinger Bridge projection to reconstruct single-observation trajectories. This is highly notable for avoiding the pitfalls of naive Brownian motion priors when modeling biological cells or ocean currents. On the systems and security side, Google DeepMind discussed the risks of scaling agentic economies in **[When millions of AI agents meet](https://www.youtube.com/watch?v=V04bm-3d6EQ)**, specifically warning of "dynamic cloaking" traps on the web that display benign pages to human users while serving malicious prompt injections to autonomous agents. Providing a much higher-level pitch, NVIDIA's **[Advancing Scientific Discovery in the Agentic AI Era](https://www.youtube.com/watch?v=Il4dhCv0Li0)** briefly summarizes how biological models and agent orchestrations are collapsing simulation times.

### Hardware & Infrastructure
Google Cloud Tech's **[Converting T-SQL code to PL/pgSQL with confidence](https://www.youtube.com/watch?v=eHnUcar6tL4)** provides a strong infrastructure demo of the Database Migration Service. Rather than performing naive, line-by-line translation, the tool leverages Gemini to intelligently refactor legacy multi-step temporary tables into Postgres Common Table Expressions (CTEs), a much superior pattern that significantly optimizes the execution paths for the Postgres query planner. 

### Everything Else
Fireship's **[Midjourney’s next product wants to get inside you...](https://www.youtube.com/watch?v=a2i9h2ip-nY)** covers Midjourney's pivot into healthcare with a proposed "ultrasonic CT" scanner and wellness spa, though skepticism remains heavy since the laws of physics prevent ultrasound waves from penetrating air or bone. In engineering workflows, Lenny's Podcast's **[Fiona Fung’s Claude now automatically reads her Slack every morning?](https://www.youtube.com/watch?v=Dh50sbzOXfE)** touches on the ongoing shift from synchronous prompting to automated, asynchronous agent "routines". Lastly, Dwarkesh Patel’s **[Why Italians Saw the Pope Very Differently - Ada Palmer](https://www.youtube.com/watch?v=9VmJewRHL7s)** offers an interesting historical detour on how geographic proximity naturally alters a population's perception of institutional authority.