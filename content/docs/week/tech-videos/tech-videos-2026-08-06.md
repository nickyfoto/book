---
title: 2026-08-06
weight: 2
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "software engineering", "developer tools", "ai agents", "infrastructure"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-08-06

## Watch First
**[The State of Model Routing — NVIDIA, Cognition, OpenRouter](https://www.youtube.com/watch?v=QHBjufYK8TA)** on **AI Engineer** is the single tech video most worth watching today, as it breaks down the complex mechanics of multi-model orchestration, context compaction, and KV-cache constraints. It offers actual technical depth rather than marketing fluff, detailing how smarter models are best used as orchestrators to delegate intensive execution subtasks to cheaper, more highly specialized models.

## Highlights by Theme

### Developer Tools & Platforms
On the **GitHub** channel, **[How to create, review, and merge stacked PRs on GitHub | GitHub Checkout](https://www.youtube.com/watch?v=jMuoFUzxB8g)** presents a live terminal and UI demo of the new native stacked pull requests workflow, explaining how developers can decompose monolithic additions into isolated, reviewable branches using the `gh stack` CLI extension. In **[Introducing Agent Plugins](https://www.youtube.com/watch?v=UaeWJK_vv-Y)** from **OpenAI**, a cross-industry coalition introduces a standard packaging format (`plugin.json`) to bundle Model Context Protocol (MCP) servers and reusable instructions natively. Finally, **AWS Developers** demonstrates **[Running Claude Code on Amazon Bedrock](https://www.youtube.com/watch?v=7alMWE6vo3Y)**, highlighting concrete configurations to point agentic CLI engines to Bedrock's Mantle runtime and cache shared prompts to reduce transaction latency and cost.

### AI & Machine Learning
On **Google Cloud Tech**, **[How to vibe code securely (without getting hacked)](https://www.youtube.com/watch?v=WsNABV2QQXI)** details critical deployment safeguards for coding agents, warning that developers must run agents in robust sandboxes like gVisor Sentry rather than standard Docker containers (which leak system calls to the host kernel) while managing "context diets" to prevent context collapse. Next, **AWS Developers** walks through **[LangGraph for Beginners](https://www.youtube.com/watch?v=sP4CNT3pDsM)**, explaining how to transition from linear prompts to complex state graphs, nodes, conditional edges, and implementing strict human-in-the-loop gates before executing state-altering actions. Additionally, in **[Garry Tan: "Personal AGI Is How You Stay Under Your Own Power"](https://www.youtube.com/watch?v=eRrc1pUY5oU)** on **Y Combinator**, Garry Tan delivers a sharp technical argument advocating for developers to store specialized agent instructions ("skill files") in personal, controlled git repositories rather than renting and relying entirely on corporate hosted wrappers.

### Hardware & Infrastructure
On **Bloomberg Tech**, **[AI Storage Demand Still Growing, Says WD CEO](https://www.youtube.com/watch?v=iZJkXoMCyR8)** explains the compound storage requirements of AI workloads, noting that Western Digital's upcoming 40 terabyte HDDs are critical because generated training data cannot be recycled like DRAM or compute. The financial backbone of this buildout is parsed on **[Sequoia, Alphabet, and the AI Capital Cycle | Bloomberg Tech 8/06/2026](https://www.youtube.com/watch?v=8egLiVNdy6U)**, highlighting Alphabet's massive \$25 billion bond sale to front-run AI infrastructure capex demands and secure their balance sheet flexibility. Finally, the physical defense implementation of edge AI is demonstrated in **[China Outbuilds America 230-to-1. Saronic Has a Plan](https://www.youtube.com/watch?v=jfxHHglA5Eo)** on the **All-In Podcast**, showing off autonomous warships built with robust localized ML navigation, multi-spectral sensor arrays, and direct programmatic API control over onboard subsystems.

### Everything Else
In **[Sequoia Capital’s \$10 Billion Plan for the AI Economy](https://www.youtube.com/watch?v=OybfqKh4GqQ)** on **Bloomberg Tech**, Sequoia partners discuss their flat operating structure where decision-making authority shifts strictly to technical expertise rather than hierarchy or tenure, validating this by highlighting their high-conviction \$2.5 billion Anthropic play. On the **No Priors: AI, Machine Learning, Tech, & Startups** channel, **[Chasing Trillion-Dollar Companies, Founder Ambition, Token Budgets, & Regulatory Capture](https://www.youtube.com/watch?v=6l8oAO_LBx4)** targets founder strategy, recommending bi-annual board reviews to track value capture and noting that over-regulation in California is aggressively driving tech migration toward Texas hubs. Finally, **[10 Questions Every Founder Should Ask Before Scaling | Tabs, Ali Hussain](https://www.youtube.com/watch?v=nEPa7foiGQI)** on **EO** advises early startups to build high-density, co-located teams in hubs like San Francisco or New York and focus on strictly tracking two or three critical metrics per department.

***

🎬 I could take the key architectural patterns from these agentic workflows—like model routing and gVisor sandboxing—and build a detailed PDF engineering playbook on secure agent deployment if you want to share a reference guide with your team.