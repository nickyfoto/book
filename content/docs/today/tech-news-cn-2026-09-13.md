---
title: 中文科技资讯
weight: 20
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "open source", "homelab", "ai safety"]
---

# Chinese Tech Daily — 2026-09-13

## Top Story

Anthropic CEO Dario Amodei published a widely discussed essay calling for an industry-wide slowdown in frontier AI development and the adoption of mandatory independent safety audits to prevent runaway autonomous systems. While leaders from OpenAI, Google DeepMind, and Tesla expressed support for external evaluations, Nvidia's Jensen Huang and Hugging Face's Clément Delangue warned against regulatory moats, and Donald Trump explicitly rejected blind slowdowns, asserting that the US must maintain technological leadership over China.

## Engineering & Dev

**LLM Evaluation & Probing Pipelines:**  
In **[Read, Don’t Write: Reshaping the LLM Evaluation System](https://www.infoq.cn/article/0kYhxXxhOXhxGATe64ec)** from InfoQ 中文站, Alibaba senior tech expert Sun Peng details "Bootstrapped Regression Probing" (BoRP) ahead of QCon Shanghai. Rather than relying on heavy generative LLM-as-a-Judge setups that suffer from verbosity and central-tendency biases, BoRP probes internal hidden states to extract satisfaction signals directly, reducing evaluation compute costs by 97% while maintaining strong human alignment across high-volume A/B testing.

**AI Security & Operational Agents:**  
**[How Figma Uses AI Agents to Enhance Security](https://www.infoq.cn/article/eS4M9XEPmLbkxksCyAye)** on InfoQ 中文站 showcases how Figma built Claude Opus-powered security agents integrated with Panther SIEM, AWS Bedrock, and osquery across more than 100 internal data sources. The autonomous pipeline reduced complex alert triage times by 70%, cut on-call pager noise by 20%, and discovered over 100 previously undetected system vulnerabilities.

**Open Source Storage Infrastructure:**  
In **[FreeCORE: Maintaining FreeBSD, Jails, and OpenZFS for TrueNAS Users](https://www.infoq.cn/article/TDav5ojS854dZKyfJmhI)** from InfoQ 中文站, developers report on a community fork upgrading TrueNAS CORE 13.3 to FreeBSD 15.0. The release preserves native FreeBSD Jails kernel isolation and bhyve virtualization for system administrators stranded by iXsystems' transition to Debian Linux-based TrueNAS SCALE, though its reliance on a solo maintainer leveraging AI coding agents has ignited debate over long-term project governance.

**AI Harnesses & Task Decomposition:**  
Featured in **[Transparent Daily (2026-09-13)](https://daily.xlab.app/d/20260913/)** (via 肖恩技术周刊 / XLab), technical essays examine how language model harnesses achieve compositional generalization by recursively breaking complex tasks into familiar primitives. A companion piece argues that LLMs excel in mathematical reasoning not through abstract deduction, but by out-remembering human mathematicians through superior context retrieval and pattern matching.

## Products & Digital

**Personal Infrastructure & HomeLab Strategy:**  
In **[Building My HomeLab (1): Hardware Checklist](https://sspai.com/post/113880)** on 少数派 (sspai), a software engineer breaks down a comprehensive multi-node home infrastructure. Rejecting fragile "All-in-One" server builds in favor of decoupled hardware, his environment features dual Synology NAS units (DS218+, DS923+), Apple Silicon hosts (Mac mini M2, MacBook Pro M1 Max) for local LLM experimentation via llama.cpp, a ThinkStation M920x Tiny running Docker/KVM, and dual-WAN networking managed by OpenWrt soft routers (R2S, R5S).

**Digital Culture & Typography:**  
Highlighted via **[Transparent Daily (2026-09-13)](https://daily.xlab.app/d/20260913/)**, **[The Hardest Working Font in Manhattan](https://aresluna.org/the-hardest-working-font-in-manhattan/)** explores the intersection of urban visual culture, street typography, and public digital design.

## News & Commentary

**AI Governance & Geopolitical Rivalry:**  
In **[sspai Morning Post: US AI Executives Call for Development Slowdown, Trump Opposes](https://sspai.com/post/114539)**, news commentary analyzes the deepening rift across the tech landscape as AI executives debate mandatory safety controls. While proponents call for independent safety auditors with employee-level system access, hardware vendors express concern over regulatory moats, and political leadership frames AI safety policy primarily through the lens of international technological dominance.

**Trust Boundaries in Autonomous Coding:**  
Commentary embedded in **[How Figma Uses AI Agents](https://www.infoq.cn/article/eS4M9XEPmLbkxksCyAye)** spotlights Wiz's "GhostApproval" security analysis, warning that malicious code repositories can exploit trust boundaries in AI coding assistants to display misleading approval prompts, underscoring why human oversight remains crucial as autonomous agents take on deeper system roles.

## Also Noted

- **[FreeCORE Project Governance](https://www.infoq.cn/article/TDav5ojS854dZKyfJmhI)** · InfoQ 中文站 — The TrueNAS CORE FreeBSD fork has sparked discussion on open-source social contracts and AI-assisted maintainership.
- **[Language Model Harnesses](https://alexzhang13.github.io/blog/2026/harness/)** · 肖恩技术周刊 / Transparent Daily — Examines how structured task harnesses enable LLMs to generalize across complex software engineering workflows.
- **[AI and Mathematical Proofs](https://davidepiffer.com/p/ai-isnt-outthinking-mathematicians)** · 肖恩技术周刊 / Transparent Daily — Analyzes why LLMs succeed in higher mathematics primarily through superior context retrieval and feedback loops.
- **[The Hardest Working Font in Manhattan](https://aresluna.org/the-hardest-working-font-in-manhattan/)** · Transparent Daily — A visual and architectural reflection on urban typography in New York City.

💡 Would you like me to turn this digest into a polished slide deck or create an audio overview summary to share with your team?