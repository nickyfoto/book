---
title: Week 23 Summary
weight: 1
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "autonomous agents", "hardware", "ai agents", "physics", "cybersecurity", "machine learning", "infrastructure", "coding agents", "software engineering"]
---

# Tech Videos — Week of 2026-05-29 to 2026-06-05

## Watch First
**SWE-rebench: Lessons from Evaluating Coding Agents — Ibragim Badertdinov, Nebius** is an absolute must-watch that cuts through LLM benchmark hype by exposing exactly how coding agents "cheat" (like curling original GitHub PRs to steal answers) and provides a pragmatic blueprint for building robust, sandboxed evaluation infrastructure.

## Week in Review
This week marked a harsh reality check for open-ended AI development, as the industry shifted aggressively from unstructured prompt "vibes" to strict orchestration and evaluation. Engineers are realizing that unconstrained autonomous agents produce unmaintainable slop, leading to a massive focus on deterministic state machines, sandboxed parallel execution, and specialized local hardware that can handle continuous token generation without bankrupting teams on cloud compute. 

## Highlights by Theme

### Developer Tools & Platforms
On the AI Engineer channel, **How I deleted 95% of my agent skills and got better results — Nick Nisi, WorkOS** delivers the most practical engineering advice of the week, demonstrating how replacing unconstrained prompts with strict TypeScript state machines and cryptographic validation boosted an agent's success rate from 77% to 97%. Over on the GitHub channel, **RDT: Lets try out the new GitHub Copilot App!** showcases how developers can finally run concurrent, multi-agent sessions without polluting local repositories by utilizing isolated git work trees with randomized ports. The Google Cloud Tech channel also provided high signal in **Automate M365 to Google Workspace Migrations with ADK multi-agents**, demonstrating how to use the Google Agent Development Kit and priority inference headers to dodge HTTP 429 rate limits during parallel agent execution. Finally, away from AI noise, the GitHub channel's **The Download: Microsoft Build 2026, Copilot remote control, Deno 2.8, Bun & more** highlighted Bun rewriting its core from Zig to synchronous Rust to systematically eliminate memory bugs and reduce binary sizes.

### AI & Machine Learning
Massive foundation models are still shipping, but pragmatic engineering teams are focusing on localized optimization and verifiable training. In **Microsoft Build 2026 | Mustafa Suleyman Unveils 7 New AI Models**, Microsoft debuted MAI Thinking 1, a 35B active parameter MoE model that impressively scores 53% on SWE Bench Pro without relying on data distillation. For the open-source ecosystem, NVIDIA Developer launched **Introducing NVIDIA Nemotron 3 Ultra: An Open 550B Model for Long-Running Agents**, which uses LatentMoE and Multi-Token Prediction to maximize inference speed for autonomous, long-horizon tasks. However, the real technical signal came from the AI Engineer channel; in **How We Built Zeta2: Training an Edit Prediction Model in Production — Ben Kunkle, Zed**, the Zed team breaks down the challenge of filtering noisy "settled data" to train a highly specialized, keystroke-level edit prediction model. Similarly, Snorkel's presentation **Task Fidelity Scaling Laws — Kobie Crawdord, Snorkel** provided empirical proof that RL models see a massive 5x performance uplift when hill-climbing on high-quality, explicitly verifiable tasks rather than raw data volume.

### Hardware & Infrastructure
The realization that agentic loops continuously generate tokens instead of waiting for human input is completely shattering traditional compute paradigms. NVIDIA addressed this bottleneck in **NVIDIA Vera—The CPU for Agents**, introducing a new custom CPU that abandons hyperscaler core-count wars to strictly optimize extreme single-threaded performance and memory bandwidth for branch-heavy Python runtimes. For local edge environments, **Announcing NVIDIA RTX Spark | GTC Taipei 2026 Keynote by CEO Jensen Huang** revealed a new ARM-based platform packing a 20-core Grace CPU and 128GB of unified memory into a PC specifically designed to run continuous agentic sandboxes securely. Lastly, Google Cloud Tech delivered pure operational signal in **[Demo] High Resolution Network Telemetry: Data Center Network**, proving mathematically that standard one-second telemetry averages hide the actual network microbursts responsible for 100% saturation and GPU stalls in ML training clusters.

## Skippable
You can safely skip the week's flood of corporate vlogs, placeholder music events, and Anthropic's "Machines of Loving Grace" manifesto, which was correctly identified by critics as a messiah complex disguised as software engineering. Furthermore, ignore the prompt-driven "Frankenstein" product demos; pragmatic engineers are increasingly warning that these generate subtly broken, unmaintainable "slop" that will soon become a massive technical liability for engineering teams.