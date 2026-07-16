---
title: 2026-07-08
weight: 6
categories: ["Blogs"]
tags: ["observability", "ai agents", "large language models", "system architecture"]
---

# Engineering Reads — 2026-07-08

## The Big Idea
The defining characteristic of a system's power is often not its surface interface or compute engine, but the structure of its underlying state and context. Whether transitioning from siloed observability pillars to unified columnar databases, or recognizing that an AI agent's true identity lives in its stateful context rather than its neural network weights, engineering leverage fundamentally comes from how we store and connect data.

## Deep Reads

**[Now Go Build CTO Fellowship: Season 2](https://www.allthingsdistributed.com/2026/07/now-go-build-cto-fellowship-season-2.html)** · All Things Distributed
The second season of the Now Go Build documentary series focuses on how global technology leaders are tackling complex, systemic issues. The release features five episodes that follow practitioners solving difficult domain challenges specifically within the healthcare and education sectors. While technical specifics are abstracted into a narrative format, the overarching focus remains on the applied reality of building systems that matter. Engineering leaders who want to step back from code to consider the human and societal impact of large-scale technology deployments should watch this series.

**[Experiences with local models for coding](https://martinfowler.com/articles/exploring-gen-ai/local-models-for-coding-experiences.html)** · Birgitta Böckeler
Birgitta Böckeler explores the practical realities of using locally hosted Large Language Models for daily software engineering tasks. By pitting various local models against two standardized coding tasks, she provides a grounded comparison of their actual utility compared to cloud-based alternatives. The analysis focuses on evaluating the most promising candidate for day-to-day use, navigating the inevitable friction of local hardware constraints. Developers who are constrained by corporate data privacy policies, or who simply prefer offline code generation, should read this to understand current local model tradeoffs.

**[Have you heard? Clickhouse is winning the observability wars!](https://charity.wtf/p/have-you-heard-clickhouse-is-winning)** · Charity Majors
Charity Majors leverages a recent industry epiphany to argue that columnar storage engines are the only viable architecture for high-scale observability. She dismantles the traditional "three pillars" approach of separating metrics, logs, and traces, arguing that artificially dividing telemetry destroys the relationships that give data its context and value. At massive scales like 10TB per day, systems backed by unified columnar storage like Clickhouse scale linearly without the performance cliffs or schema lock-ins of older tools. Majors harshly critiques newer vendors who build on columnar storage but mask its benefits by mimicking the pricing and product limitations of incumbents like Datadog. Systems architects and reliability engineers struggling with runaway observability costs should read this to understand why wide, structured events are structurally superior to siloed data.

**[Agents are monads (but not that kind)](https://xeiaso.net/blog/2026/hyle-pneuma/)** · Xe Iaso
Xe Iaso presents a philosophical framework for AI agents, arguing that an agent's true identity is defined entirely by its accumulated state rather than its neural network weights. Drawing on Leibniz's concept of monads, Iaso posits that an agent is an individuated entity completely encapsulated by its internal state of messages, memories, and derived facts. The model weights are merely the substrate—swapping a model preserves the agent, but altering the context window creates an entirely new entity. Despite the plaintext legibility of this state, the mechanical contribution of any single token to the model's emergent reasoning remains completely opaque. Engineers building stateful LLM applications should read this to reconsider how they architect memory, realizing that prompt engineering and state management are the true soul of the system.

## Connecting Thread
A striking architectural parallel emerges between Charity Majors' take on observability and Xe Iaso's philosophy of AI agents: the immense value of unified, unbroken context. Just as splitting telemetry into the "three pillars" destroys the relational value of system data, ignoring an AI agent's stateful memory fundamentally misunderstands what gives the system its power and identity. In both paradigms, the underlying compute engine—whether the storage backend or the LLM weights—is commoditized, while the rich, contextual state is where the true engineering leverage resides.