---
title: Youtube Tech Channels
weight: 3
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "hardware", "apple"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-04-29

## Watch First
[The math behind how LLMs are trained and served – Reiner Pope](https://www.youtube.com/watch?v=xmkSf5IS-zw)
MatX CEO Reiner Pope delivers an incredible blackboard breakdown of inference economics, showing exactly how memory bandwidth and KV cache capacity fundamentally dictate batch sizes and latency limits. If you want to cut through the marketing noise and understand why AI APIs cost what they do, or why context length scaling has hit a hard memory wall, this is the single best technical explanation available.

## Highlights by Theme

### Developer Tools & Platforms
In [Building Pi, and what makes self-modifying software so fascinating](https://www.youtube.com/watch?v=n5f51gtuGHE) on The Pragmatic Engineer channel, Pi creator Mario Zner and Flask creator Armin Ronacher offer a refreshingly pragmatic take on AI coding agents, noting that unsupervised agents are currently driving up codebase complexity and technical debt because they do not "feel the pain" of bad design. They also provide a solid technical argument for why CLI pipes are more composable than the current Model Context Protocol (MCP) spec, which often chokes the LLM context window with data transformations. Over on the AI Engineer channel, [Codex and Subagents — Vaibhav Srivastav & Katia Gil Guzman, OpenAI](https://www.youtube.com/watch?v=MhHEGMFCEB0) demos OpenAI's latest Codex features, showing how to spin up multiple parallel sub-agents to review code or map vulnerabilities, a powerful workflow that now requires "guardian approvals" to safely sandbox privileged tasks.

### AI & Machine Learning
[Everything I Learned Training Frontier Small Models — Maxime Labonne, Liquid AI](https://www.youtube.com/watch?v=fLUtUkqYHnQ) from the AI Engineer channel is a highly substantive look at the architecture of small, sub-1B parameter edge models. Labonne explains how these models are heavily memory-bound and vulnerable to "doom looping" in reasoning tasks, a failure mode Liquid AI successfully mitigates through temperature sampling during preference alignment and RL with verifiable rewards. For a broader look at Google's current model ecosystem, [Build & deploy AI-powered apps — Paige Bailey, Google DeepMind](https://www.youtube.com/watch?v=G_bHFmEAarM) walks through the deployment of Gemini 3.1 Flash and Project Genie 3. The presentation stands out for a compelling live demo of Gemini dynamically executing Python code in a sandbox to handle visual data science tasks efficiently and securely.

### Hardware & Infrastructure
[Finding Hardware Bugs - Computerphile](https://www.youtube.com/watch?v=G1VgXqKZMZE) features a deep dive into fuzzing Electronic Design Automation (EDA) tools, specifically place-and-route software for FPGAs. The video details a fascinating real-world bug where an EDA tool incorrectly optimized out an inverter on a dynamically reconfigured lookup table, highlighting the urgent need for formal verification in modern chip design. On the cloud networking front, [Simplify On-Premises Connectivity to AWS with AWS Interconnect Last Mile & Lumen](https://www.youtube.com/watch?v=z73RpEk3ihk) on the AWS Events channel demos a new service replacing painful physical cross-connect procurement with logical APIs, allowing instant bandwidth scaling of BGP sessions from 1Gbps to 100Gbps without downtime.

### Everything Else
In [My Take on The New Apple](https://www.youtube.com/watch?v=i9TvUGeTltE), Marques Brownlee unpacks the corporate reshuffling that places John Ternus as Apple's new CEO. It is a notable shift from Tim Cook's supply-chain focus back to a pure hardware engineering background, which may signal a welcome return to riskier, product-driven swings over the safe, iterative releases of the last decade.