---
title: Weekly Summary
weight: 0
---

# Tech Videos — Week of 2026-03-20 to 2026-03-26

## Watch First
[加快語言模型生成速度 (2/2)：KV Cache](#) by Hung-yi Lee is the single highest-signal video this week for anyone dealing with AI infrastructure. It breaks down the brutal VRAM bottlenecks of LLM inference and the math behind architectural optimizations like Multi-Head Latent Attention far better than any high-level blog post.

## Week in Review
The industry is aggressively moving away from monolithic, synchronous LLM chat wrappers toward decoupled, multi-agent swarms constrained by deterministic protocols like MCP and A2A. Simultaneously, the hyper-acceleration of the coding "inner loop" is exposing massive friction downstream, with machine-generated output completely overwhelming traditional CI/CD and human review pipelines. Infrastructure is shifting closer to the metal, with a clear focus on owning the compute layer and managing sub-millisecond latencies to make agentic workflows economically viable.

## Highlights by Theme

### Developer Tools & Platforms
[Nicole Forsgren: Leading high-performing engineering teams in the age of AI](#) from *The Pragmatic Engineer* provides a vital look at how AI tools are breaking existing software delivery systems, noting that fast AI feedback loops are ironically exhausting developers who must constantly rebuild their mental models of the codebase. On the orchestration front, *Google Cloud Tech* shipped a highly practical [Build a multi-agent system](#) series detailing how to decouple tools using the Model Context Protocol (MCP) and deploy independent agents to Cloud Run. Finally, *Visual Studio Code* highlighted pragmatic workflow updates, showing how to isolate risky AI agent edits to separate Git worktrees while running multiple parallel sessions.

### AI & Machine Learning
[Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI](#) from *No Priors* is an essential watch, outlining the paradigm shift toward "AI psychosis" where engineers stop typing and instead write high-level markdown specifications to orchestrate asynchronous agent loops. *NVIDIA* echoed this architectural shift in their [GTC 2026 Open Models Panel](#), arguing that production AI will rely on "compound agents" orchestrating specialized, air-gapped open-source models for strict enterprise data control. For developers building multimodal applications, Google's [Building LiveKit Agents with Gemini Live API](#) tutorial offers a robust, code-level guide to deploying low-latency voice agents that bypass brittle text-to-speech pipelines by processing native 16kHz PCM audio.

### Hardware & Infrastructure
[Unlock Predictable, High-Performance Serverless with AWS Lambda Managed Instances](#) is the standout infrastructure update, demonstrating how attaching dedicated EC2 compute to serverless functions can cut steady-state execution costs by up to 80% without abandoning managed environments. On a macro scale, Jensen Huang's appearance on the [Lex Fridman Podcast](#) details NVIDIA's pivot from chip design to "AI factory" rack-scale co-design, coordinating GPUs, networking, and power delivery to overcome physical hardware limits. Additionally, AWS's [Agentic AI with AWS Streaming](#) session provides pragmatic warnings against invoking LLMs for every streaming event, advocating instead for specialized micro-agents connected via SQS queues for safe, fault-tolerant anomaly detection.

## Skippable
Avoid the flood of B2C marketing shorts and brief promotional highlight reels from enterprise vendors pitching AI as a magic solution to organizational problems. These videos consistently lack architectural blueprints, error rate disclosures, or any real technical signal, functioning purely as corporate posturing.