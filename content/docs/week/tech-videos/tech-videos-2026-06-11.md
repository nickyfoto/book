---
title: 2026-06-11
weight: 2
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "large language models", "model context protocol"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-11

## Watch First
**[What we learned shipping VS Code weekly (without breaking everything) | BRK204](https://www.youtube.com/watch?v=hH4RiA7pk5Q)** details the operational fallout of adopting AI: a massive spike in AI-generated code forced the Visual Studio Code team from monthly to weekly releases, leading them to build agentic pipelines that automatically triage issues, test UI components via screenshot loops, and proactively merge bug fixes.

## Highlights by Theme

### Developer Tools & Platforms
In the frontend space, the AI Engineer channel features **[The agent-ready web: Simplify user actions with WebMCP — Tara Agyemang, Google](https://www.youtube.com/watch?v=ghJmWQCIHRM)**, which introduces WebMCP as an experimental browser standard that exposes a website's UI capabilities as structured JSON tools to agents, saving them from brittle DOM scraping. For native development, Apple Developer announced updates in **[Use any LLM through one Swift API](https://www.youtube.com/watch?v=5DIZPo19Lt0)** to the Foundation Models Framework, allowing developers to swap between local Apple Private Cloud Compute models and third-party APIs like Claude and Gemini through a single Swift interface. Additionally, GitHub demoed running parallel Copilot agents in isolated Git Worktrees to avoid branch conflicts in **[Rubber Duck Thursdays! Let’s talk about Microsoft Build!](https://www.youtube.com/watch?v=Y7agj5T0GHE)**, and WorkOS showcased "Studio," an internal agent that uses MCP to query Snowflake and dynamically generate reusable React widgets instead of static dashboards in **[Why Can’t Anyone Answer Questions About the Business? — Garrett Galow, WorkOS](https://www.youtube.com/watch?v=iUWwcG-C8OU)**.

### AI & Machine Learning
On the Cursor channel, engineers discussed the bleeding edge of agent orchestration in **[Running 128 Coding Agents at Once](https://www.youtube.com/watch?v=-jnwTZ789V0)**, specifically noting how they use KV cache compaction to handle the massive context overhead of running up to 128 parallel agents efficiently. In AI research, Google for Developers released **[Yossi Matias on the golden age of research](https://www.youtube.com/watch?v=FPBwadTeph0)**, explaining how techniques like speculative decoding are practically doubling LLM inference speeds without quality loss, alongside new multi-agent systems like Co-Scientist for automated hypothesis generation. On the frontier model side, Fireship provided a skeptical breakdown in **[Fable is the most powerful AI you’re allowed to use...](https://www.youtube.com/watch?v=1PBRhm5ZnjU)** of Anthropic's new "Claude Fable" model, noting it is essentially the underlying "Mythos 5" model heavily lobotomized by classifier guardrails, yet still topping coding benchmarks. OpenAI's Codex also featured heavily in specialized vertical demos, including **[Creating black hole simulations with Codex](https://www.youtube.com/watch?v=4XSI4SClBMA)** where an agent evaluated numerical schemes to optimize a black hole simulation algorithm to run 1000x faster.

### Hardware & Infrastructure
AWS Events outlined the migration of industrial tech stacks to "Physical AI" in **[From Shop Floor Control to Physical AI: Bridging Industrial Connectivity and Intelligent Automation](https://www.youtube.com/watch?v=RFbM296653c)**, advocating for the replacement of hard-coded, physical PLCs with software-defined Virtual PLCs (vPLCs) managed via standard DevOps practices. The video demos factory floor cells governed by distributed agents communicating via MQTT and MCP, completely virtualizing the logical operation and troubleshooting of automated production lines.

### Everything Else
On the OpenAI channel, BBVA’s AI chief detailed the organizational reality of rolling out ChatGPT Enterprise to 120,000 employees in **[Customer Ignite Talk: Antonio Bravo Acin (Global Head of AI Transformation, BBVA) & OpenAI](https://www.youtube.com/watch?v=UNJSk90Lz1c)**, mapping the deployment to six specialized "robots" to handle banking, risk, and internal software development backlogs. For a non-software palate cleanser, Quanta Magazine's interview with Nobel laureate Jennifer Doudna in **[What Is the Future of Gene Editing? | PODCAST: The Joy of Why](https://www.youtube.com/watch?v=T1SzNRElup0)** offers a deep dive into the real-world state of CRISPR, including a recent case where an infant’s rare metabolic disease was cured in eight months using an off-the-shelf CRISPR delivery mechanism originally designed for COVID vaccines.