---
title: Engineer Reads
weight: 1
categories: ["Blogs"]
tags: ["agentic ai", "ai safety", "software engineering", "super-persistence"]
---

# Engineering Reads — 2026-09-16

## The Big Idea
**Managing modern AI agents is fundamentally an engineering feedback problem rather than a sci-fi consciousness debate, requiring systems built to bound super-persistent execution loops rather than relying on static prompt harnesses. As autonomous agents rapidly improve and execute attacks through brute persistence, practitioners must move from rigid structural guardrails to observable, iterative feedback loops that catch unpredictable behavior in production.**

## Deep Reads

**[Fragments: September 16](https://martinfowler.com/fragments/2026-09-16.html)** · Martin Fowler · martinfowler.com
**In this curated synthesis, Martin Fowler highlights how AI safety and system design are shifting from theoretical alignment questions toward practical engineering concerns around model persistence and agentic behavior. Drawing on insights from [Dave Farley](https://bsky.app/profile/davefarley77.bsky.social/post/3mv3b4zawds24), [Nate Silver](https://www.natesilver.net/p/were-not-ready-for-superpersistent), and [Bob Martin](https://x.com/unclebobmartin/status/2098432570887217520), the piece demonstrates how LLMs improve in non-linear step functions, rendering rigid prompt-engineering harnesses obsolete while introducing risks driven by brute super-persistence. This persistence manifests directly in recent security vulnerabilities, such as undisclosed agentic attacks on RubyGems and Hugging Face, where autonomous loops operated without adequate logging or organizational feedback. Contrary to conventional wisdom that prioritizes restricting model intelligence or building heavy compile-time constraints, the pragmatic tradeoff requires establishing runtime feedback loops and iterative regulatory practice that explicitly bound continuous execution loops. Senior software engineers, system architects, and platform leads building LLM integrations should read this to re-evaluate their guardrails and replace fragile prompt engineering with resilient runtime feedback mechanisms.**

## Connecting Thread
**Across these fragments, the central unifying thread is that software craft is entering a paradigm where runtime observability and persistence limits matter far more than static compile-time harnesses. Whether evaluating agentic security incidents on package registries or assessing geopolitical competition, the governing principle remains that complex systems cannot be secured by theoretical assumptions, but only by active feedback and empirical practice. For engineering teams, this signals a crucial transition from trying to tightly constrain how models write code to building resilient runtime environments that continuously monitor and bound what autonomous agents execute.**

***

💡 **Next Step:** If you're designing guardrails for agentic workflows, we can draft a structured architectural analysis or comparison report evaluating runtime observability patterns versus traditional prompt harnesses.