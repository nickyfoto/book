---
title: videos-2026-03-21
weight: 2
---

# Tech Videos — 2026-03-21

## Watch First

If you only have time for one, watch the Google Cloud Tech multi-agent tutorial. It is the only video in this batch that provides concrete code, architectural diagrams, and a live deployment of Model Context Protocol (MCP) servers and agent routing patterns.

## Video Rundown

**[Build a multi-agent system | Hands On AI (Part 1)](https://www.youtube.com/watch?v=rHtRWyxVQps)** · Google Cloud Tech
This hands-on lab provides a detailed code walkthrough for building multi-agent systems utilizing Google's Agent Development Kit (ADK) and the Model Context Protocol (MCP). The presenters demonstrate how to write and configure MCP servers to expose external APIs, mathematical functions, and Cloud SQL databases, followed by deploying them to Cloud Run. Technically, the most valuable segment is the practical implementation of sequential, parallel, and loop routing patterns to orchestrate sub-agents. Verdict: Worth watching in full (or skimming the codebase) if you are actively building agent orchestrations or evaluating MCP on GCP.

**[Andrej Karpathy Automated His Home](https://www.youtube.com/watch?v=WhB2dfwVHsM)** · No Priors: AI, Machine Learning, Tech, & Startups
Andrej Karpathy shares an anecdote about deploying a local LLM agent to autonomously discover and control his smart home subsystems. He claims the agent successfully searched his local area network, reverse-engineered API endpoints for devices like Sonos, HVAC, and lights, and generated a centralized dashboard to control them. While there is no code, repository, or live demo shown to validate the implementation, it serves as a highly interesting conceptual use case for agentic network discovery. Verdict: Skim for the entertaining proof-of-concept, but skip if you need reproducible technical details.

**[Perplexity just announced an AI personal computer](https://www.youtube.com/watch?v=gaDKGrStr3E)** · GitHub
A short news snippet covering Perplexity's announcement of an "AI personal computer" built on top of a Mac Mini. The video outlines Perplexity's vision to move away from ephemeral browser sessions to a persistent AI instance that runs continuously and has direct access to the user's local files. The product is currently waitlist-only and the video does not provide any technical demonstrations, benchmarks, or architectural explanations. Verdict: Skip; this is purely marketing noise and product signaling until actual hardware reviews or system specs drop.

## Themes

A clear theme across these updates is the engineering push to move LLMs out of isolated chat interfaces and plug them directly into private, stateful environments. Whether the goal is securely querying a private Cloud SQL database via MCP, mapping a local home area network, or persisting context across a local macOS filesystem, the focus is entirely on localized system integration.
