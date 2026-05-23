---
title: 2026-05-18
weight: 4
categories: ["Youtube", "Tech"]
tags: ["ai agents", "machine learning", "developer tools", "cloud computing", "software engineering"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-18

## Watch First
[Build Agents That Run for Hours (Without Losing the Plot) — Ash Prabaker & Andrew Wilson, Anthropic](https://www.youtube.com/watch?v=mR-WAvEPRwE) is a masterclass in scaffolding for LLMs that goes beyond "vibes", detailing the specific adversarial generator/evaluator patterns needed to keep an agent on track over 12-hour context windows. It's a required watch if you are building autonomous systems that need to execute reliable software engineering tasks for hours instead of minutes.

## Highlights by Theme

### Developer Tools & Platforms
In [Tracing Agent Sessions with OpenTelemetry & Aspire](https://www.youtube.com/watch?v=JsZ3q8OKsMM), the Visual Studio Code channel demonstrates a highly practical way to observe your AI agent's underlying behavior locally using OpenTelemetry and the .NET Aspire dashboard. Syntax's [This React Library Makes Videos For You](https://www.youtube.com/watch?v=kUmzkLKZgBU) sits down with the creator of Remotion to discuss how AI agent skills recently spiked the library's daily installs to 800,000, and they geek out on the experimental Chrome `HTML in Canvas` API for native DOM-based motion graphics. For data engineers, [Accelerating data workflows with AI Agents in your IDE | Let's Talk About Data](https://www.youtube.com/watch?v=D9xa7fUStCE) by AWS Events demonstrates connecting local IDEs like VS Code and Cursor to SageMaker Unified Studio, leveraging remote compute and Model Context Protocol (MCP) tools to catalog and analyze massive CSVs without ever leaving the editor.

### AI & Machine Learning
Google DeepMind's [Let's go Bananas with GenMedia — Guillaume Vernade, Google DeepMind](https://www.youtube.com/watch?v=BcWFc3H7Khg) showcases the new Gemini 3.3 and LIA real-time music models, but the most notable technical drop is the new stateful `interactions` API, which caches multi-turn contexts on the server to prevent continually re-uploading large documents. Over on AWS Events, [Network Language Models: Build, Customize, Collaborate | AWS Events](https://www.youtube.com/watch?v=NG33KbXBnvg) provides a pragmatic look at fine-tuning models specifically for telecom networking via NovaForge, explicitly highlighting a "data mix" technique that prevents the model from catastrophically forgetting general reasoning or SQL capabilities while learning domain specifics. Lastly, Google Cloud Tech's [Real time fraud detection with AlloyDB AI](https://www.youtube.com/watch?v=aYCuGy97Nf4) shows off an interesting hybrid architecture: using high-speed vector embeddings via the ScaNN algorithm for initial fraud flagging, and then falling back to Gemini's reasoning on borderline scores to break ties and reduce false negatives.

### Hardware & Infrastructure
Computerphile delivers an excellent low-level deep dive in [Why Multi-Threaded Code Can Sometimes Misbehave (Weak Memory Concurrency) - Computerphile](https://www.youtube.com/watch?v=E3hvLz717zM), explaining how CPU store buffers and differing memory models across x86, ARM, and Power architectures cause execution reordering that shatters the illusion of sequential consistency. For telecom edge infrastructure, [On-Premises Telecom Cloud: AT&T's Hybrid Cloud Modernization with AWS | AWS Events](https://www.youtube.com/watch?v=qIDkthml2n4) covers AT&T extending AWS into their own data centers using second-generation Outposts racks, modernizing legacy VMs with an agentic migration tool called Transform. On the less reliable side of infrastructure, [Coinbase Layoffs and Restructuring](https://www.youtube.com/watch?v=HXSfr5cGGtk) from ThePrimeagenHighlights roasts Coinbase for a 15-hour outage caused by a single AWS Availability Zone chiller failure—raising serious questions about the redundancy limits of their centralized exchange architecture.

### Everything Else
AI Engineer's [Rewiring the State — Eoin Mulgrew, 10 Downing Street](https://www.youtube.com/watch?v=ObNKGf9YR0g) details an elite, startup-like "insurgent" tech unit inside the UK government bypassing traditional bureaucracy to build custom AI tooling for civil servants. Finally, AWS Developers' [Become a Cloud Engineer in 2026](https://www.youtube.com/watch?v=ZkzkdhmcIVQ) points out that since AI agents now handle writing boilerplate infrastructure code, junior engineers must shift focus entirely to architectural fundamentals like systems economics, security, and reliability.