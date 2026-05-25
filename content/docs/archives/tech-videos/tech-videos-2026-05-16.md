---
title: 2026-05-16
weight: 8
categories: ["Youtube", "Tech"]
tags: ["ai agents", "software testing", "knowledge graphs", "developer tools", "vertical ai"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-16

## Watch First
[Beyond Code Coverage: Functionality Testing with Playwright — Marlene Mhangami, Microsoft](https://www.youtube.com/watch?v=FWEInOtngmM) is the standout watch because it directly addresses how to prevent AI coding assistants from introducing massive entropy into our repositories. The live demo utilizing a Playwright Model Context Protocol (MCP) server to drive behavior-based test generation offers a credible, pragmatic blueprint for AI-assisted Test-Driven Development.

## Highlights by Theme

### Developer Tools & Platforms
[Beyond Code Coverage: Functionality Testing with Playwright — Marlene Mhangami, Microsoft](https://www.youtube.com/watch?v=FWEInOtngmM): With GitHub projecting a staggering 14 billion commits in 2026 fueled by AI agents, Microsoft's Marlene Mhangami argues that unchecked AI generation degrades code quality without clean testing guardrails. She demonstrates an AI-driven TDD workflow where agents first use a Playwright MCP server to write failing end-to-end functionality tests, and only then generate code to pass them. The live demo is actually worth your time, showing Playwright agents autonomously navigating a browser to successfully test UI search and filter features.

[A tiny React alternative built with AI](https://www.youtube.com/watch?v=dlSfOx8pUpk): The GitHub channel highlights Tanner Lindsley's "Redact" experiment, which uses AI to create a minimal, custom-shaped React runtime projection while keeping the standard public API. It is an interesting proof-of-concept making the case that AI drastically changes the economics of dependencies, potentially making it viable to ship stripped-down, tailored implementations rather than massive default libraries.

[Vercel’s Guillermo Rauch on monetizing apps in v0](https://www.youtube.com/watch?v=BDXIpktNOFE): A brief clip where Vercel's CEO notes they integrated Stripe directly into the v0 AI app builder to automatically provision a payment sandbox. This is a smart platform play to tighten the feedback loop for users wanting to instantly test monetization on AI-generated apps. 

### AI & Machine Learning
[Connecting the Dots with Context Graphs — Stephen Chin, Neo4j](https://www.youtube.com/watch?v=eW_vxrjvERk): Chin argues against the limitations of flat vector RAG, proposing "context graphs" to give AI agents structured short-term, long-term, and reasoning memory. Using an open-source Neo4j agent memory package, he walks through a financial services demo where an agent queries cross-platform CRM and support data to explain a loan rejection based on historical margin trades and fraud patterns. This is highly relevant for architects looking to build auditable, multi-hop reasoning traces into their agentic workflows.

### Everything Else
[How to Leverage Domain Expertise — Chris Lovejoy, Notius Labs](https://www.youtube.com/watch?v=kfSDc2eVLo4): A pragmatic organizational-design talk for teams building vertical AI products. Lovejoy outlines three ways to integrate domain experts: as Oracles (directly tweaking prompts), Evaluators (defining data science metrics), or Architects (building automated learning systems). Using real-world scale-up examples from Granola and Tandem, he shows why your domain expert needs to transition from raw use-case knowledge to having data science intuition as the product matures.

[Why did humans suddenly start making art 50,000 years ago? - David Reich](https://www.youtube.com/watch?v=8Qs6W0s-erU): In a short clip from Dwarkesh Patel, geneticist David Reich explains that a 2016 DNA scan found no single genetic mutation responsible for the explosion of human culture 50,000 years ago. Any biological adaptation during that period was likely polygenic rather than a neat, single evolutionary switch.

[Vercel’s Guillermo Rauch on optimizing your pricing](https://www.youtube.com/watch?v=JQXHhDLgMfc): Quick business advice from Stripe's channel, with Rauch emphasizing fast iteration and hybridizing on-demand billing with traditional seat-based SaaS models.