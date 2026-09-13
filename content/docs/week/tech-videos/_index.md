---
title: Youtube Tech Channels
weight: 3
bookCollapseSection: true
weekly_summary_date: '2026-09-13'
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "hardware", "software engineering", "ai agents", "programming languages", "cybersecurity", "tech infrastructure", "llm inference", "semiconductors", "cloud infrastructure", "apple"]
---

# Tech Videos — Week of 2026-09-05 to 2026-09-11

## Watch First
The standout video of the week is **[Deep dive on LLM Inference at Scale — Harshul Jain, Audible & Tanmay Sah, Independent AI Researcher](https://www.youtube.com/watch?v=y2W4FNAuPEA)** from **AI Engineer**. It provides an exceptional, first-principles masterclass on LLM inference mechanics, dissecting memory versus compute bounds, HBM transfer bottlenecks, and live H100 benchmarks comparing vLLM and SGLang.

## Week in Review
This week's content centered on transitioning AI agents away from real-time chat interfaces into asynchronous, deterministic execution harnesses built in Rust or orchestrated via local Model Context Protocol (MCP) servers. At the hardware and infrastructure level, coverage highlighted next-generation 2nm silicon, ultra-low latency memory architectures like d-Matrix's Raptor XPU, and production LLM inference scaling bottlenecks. Meanwhile, technical discussions critically evaluated the limits of recursive self-improvement, long-horizon context retention, and autonomous security risks.

## Highlights by Theme

### Developer Tools & Platforms
**The Pragmatic Engineer** detailed why OpenAI built their Codex agent harness in open-source Rust for deterministic control and memory efficiency in **[Why Codex was built in Rust](https://www.youtube.com/watch?v=MMHNmfQvw8Q)**. On **AI Engineer**, **[500 Skills, Zero Fine-Tuning: LinkedIn's Playbook for AI Agents — Ajay Prakash, LinkedIn](https://www.youtube.com/watch?v=9wZpvF3QleU)** showcased how LinkedIn scales 1,300+ tools across 8,000 developers using local Model Context Protocol (MCP) servers, while **[Building ambitious software — Jonathan Kelley, Dioxus Labs & Cognition](https://www.youtube.com/watch?v=H7vFrcNWXzs)** introduced the Blitz rendering engine for Rust. **Syntax** explored browser-native agent integrations in **[WebMCP is here (and you should care)](https://www.youtube.com/watch?v=xtVvkRTH5ck)**, explaining how web apps can expose native code actions directly to co-browsing models. Additionally, **Lex Clips** featured multi-agent terminal setups in **[DHH’s new setup for programming with AI - terminal, 16 agents, Herdr, Tailscale | Lex Fridman](https://www.youtube.com/watch?v=4Xg1AE6Uu1k)**, alongside **Fireship** reviewing cost-saving local inference stacks in **[Big AI wants you broke... here are some free alternatives](https://www.youtube.com/watch?v=Y5rSSvXfL4g)**.

### AI & Machine Learning
**Dwarkesh Patel** hosted a debate on the limits of recursive self-improvement and RL sample inefficiency in **[AI researchers debate how close we are to recursive self-improvement](https://www.youtube.com/watch?v=PrSf7IOYu-I)**, while also dissecting autonomous agent security breaches in **[The OpenAI Hugging Face Hack explained in plain English](https://www.youtube.com/watch?v=imodZWltU8Q)**. **AI Engineer** featured technical benchmarks in **[How long can your skills be before your agent forgets what you told it? — Laurie Voss, Arize AI](https://www.youtube.com/watch?v=XzJD1bvXKjs)**, testing frontier models against 10,000-word constraint ceilings to identify specific failure modes like Claude's safety refusals and Gemini's overthinking timeouts. **OpenAI** demonstrated multimodal execution and full-duplex speech APIs in **[GPT-Live-1 is now in the API](https://www.youtube.com/watch?v=OSaP6bJoU44)** and **[GPT-6 Astra handles the editing busywork](https://www.youtube.com/watch?v=4bGb2OjU5tA)**. Meanwhile, **YC Paper Club** presented a first-principles breakdown of agentic memory hierarchy in **[Self-Improving Harnesses, Local Personal AI And YC’s Agent For Work | YC Paper Club](https://www.youtube.com/watch?v=n9xKblqyQ28)**, comparing agent context buffers to von Neumann cache levels.

### Hardware & Infrastructure
**Apple** unveiled its 2nm A20 Pro silicon and foldable dual-battery chassis in **[Introducing the new iPhone 18 Pro](https://www.youtube.com/watch?v=Q3zwkxqh1t0)** and **[iPhone Duo: Everything announced about the first foldable iPhone](https://www.youtube.com/watch?v=ZlMvbjknrIg)**. On the data center side, **Bloomberg Tech** reported on d-Matrix's 3D-stacked DRAM Raptor XPU for low-latency inference in **[d-Matrix Plugs Into Nvidia’s AI Ecosystem](https://www.youtube.com/watch?v=2DDHMSlWkDM)**, alongside Microsoft's massive compute expansion plans in **[Microsoft's Data Center Plans Face Big Costs](https://www.youtube.com/watch?v=9Oq7clr7bTs)**. Furthermore, **No Priors: AI, Machine Learning, Tech, & Startups** challenged GPU-only hype in **[The CPU Will Never Die](https://www.youtube.com/watch?v=0zYHeBLhCcM)**, highlighting CPUs as essential orchestrators for inference-heavy reinforcement learning.

## Skippable
Videos focusing on superficial developer productivity metrics—such as optimizing Linux installs down to 12 seconds or tracking total lines of code written by agents—offer little practical engineering value. Likewise, high-level marketing claims around recursive self-improvement and "AGI" game generation collapse upon closer technical inspection, as models still struggle with long-horizon context retention and sim-to-real gaps.