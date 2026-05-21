---
title: 2026-05-14
weight: 6
categories: ["Youtube", "Tech"]
tags: ["ai agents", "cybersecurity", "developer tools", "databases", "machine learning"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-14

## Watch First
[A single PR just hijacked the NPM registry...](https://www.youtube.com/watch?v=gwTQLZSIlsU) is a must-watch breakdown of a devastating supply-chain attack on Tanstack packages. It clearly explains how an attacker exploited the `pull_request_target` GitHub action from a closed fork to steal an NPM publish token and propagate self-replicating malware across Python and JavaScript ecosystems.

## Highlights by Theme

### Developer Tools & Platforms
In [Rubber Duck Thursdays](https://www.youtube.com/watch?v=iI5s3jx2-RM) from the GitHub channel, a live terminal demo shows the pragmatic reality of building with GitHub Copilot CLI in "plan mode." The presenter uses an MCP context server to pull up-to-date documentation for an Electron app patch, demonstrating how a "rubber duck review" passes plans between Claude and GPT model families to catch reasoning errors early. On the agent tooling side, Iterate's Jonas Templestein makes a compelling technical case in [Make your own event-sourced agent harness using stream processors](https://www.youtube.com/watch?v=vi-2nasppAg) for discarding stateful, tightly coupled agent harnesses. He argues for purely event-sourced architectures where agent state is simply a synchronous `reduce` function over a persistent log, allowing distributed plugins—like prompt injection protectors—to securely and asynchronously interrupt LLM execution.

### AI & Machine Learning
For model training, Microsoft Research's [New fine-tuning of language models: Match meaning, not tokens](https://www.youtube.com/watch?v=8efKuAWVCMs) introduces Energy-Based Fine-Tuning (EBFT), which optimizes for long-range sequence calibration by matching feature maps over whole responses instead of relying on next-token cross-entropy or brittle RLHF reward models. For production deployment, Arize's Laurie Voss offers a highly practical framework in [Ship Real Agents: Hands-On Evals for Agentic Applications](https://www.youtube.com/watch?v=Xfl50508LZM). Voss argues for "Swiss cheese" safety layering, warning against monolithic "God evaluators" and demonstrating how to balance cheap, deterministic code evaluations against expensive LLM-as-a-judge semantic checks. Microsoft Research also shipped a notable safety unlock in [Introducing Interwhen: Steering reasoning agents with real-time verification](https://www.youtube.com/watch?v=s8vkG5czZtY), which details an open-source framework that projects LLM outputs into verifiable properties to enforce test-time tool execution constraints asynchronously.

### Hardware & Infrastructure
In an excellent database engineering deep dive, Cursor's [Simon Eskildsen on scaling Shopify, building turbopuffer, and the future of databases](https://www.youtube.com/watch?v=bWyOyyrVIXk) outlines why new database giants typically only emerge when new storage hardware or architectures appear. He explains that modern OLAP databases rely fundamentally on separating compute from storage to map to NVMe SSDs, noting that Turbopuffer's design specifically depended on Amazon S3 finally achieving strong consistency in 2020. Shifting to macro infrastructure, Jacob Helberg details the U.S. State Department's strategy in [Pax Silica: Inside the Trump Administration’s Tech Strategy](https://www.youtube.com/watch?v=xjlYpGaxIPA). The episode highlights a 4,000-acre "forward deployed industrial base" in the Philippines aiming to physically secure the sprawling supply chain inputs for AI robotics and data centers outside of China.

### Everything Else
[The insane difficulty of reverse engineering video codecs](https://www.youtube.com/watch?v=v2xe5ki4oHw) from Lex Clips tells the grueling story of how developers reverse-engineered proprietary 20MB video blobs for VLC and FFmpeg by pausing CPUs and dumping memory states via virtual machines. On the startup execution front, Glean CEO Arvind Jain in [Two Unicorns Built in 12 Years...](https://www.youtube.com/watch?v=Ve_nYKw1TfA) shares a pragmatic strategy: rely heavily on external foundational models like GPT-4 or Claude, and spend all engineering cycles strictly on the messy enterprise context retrieval layer where the platform providers won't invest.