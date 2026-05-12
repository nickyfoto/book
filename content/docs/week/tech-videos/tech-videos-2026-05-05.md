---
title: 2026-05-05
weight: 5
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "kubernetes", "edge computing"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-05

## Watch First
[Let AI Agents Tell You What They Need — Raj Navakoti, IKEA](https://www.youtube.com/watch?v=_QAVExf_1uw) from the AI Engineer conference is the most grounded talk today. It pragmatically argues against blind "push" strategies for RAG and MCP, proposing instead to let agents fail on real Jira tickets to identify undocumented tribal knowledge so humans can efficiently fill the exact missing gaps in the documentation.

## Highlights by Theme

### Developer Tools & Platforms
On the GitHub channel, [What is TanStack AI? The new open source toolkit](https://www.youtube.com/watch?v=wS8CV85RTO8) introduces a framework-agnostic AI library bringing much-needed type-safe "isomorphic tools" to both server and client without vendor lock-in. Meanwhile, Google for Developers demonstrates [Add Databases to Your App with AI Studio](https://www.youtube.com/watch?v=YUmB-BnNs18) with a live demo of vibe coding a functional web UI and Firebase database via natural language, which is neat but mostly shows off standard prompt-to-code capabilities. OpenAI also released [Prep for sales meetings faster with Codex](https://www.youtube.com/watch?v=y5hogSW2mqU), stringing together Salesforce, Google Drive, and Slack plugins into a single workflow, though it functions more as a slick product demo than deep technical architecture.

### AI & Machine Learning
For substantive infrastructure, [The Small Model Infrastructure Nobody Built (So We Did)](https://www.youtube.com/watch?v=qdh_x-uRs9g) dives deep into multiplexing small embedding and reranker models onto single GPUs by re-implementing forward passes to handle variable-length flash attention and padding. Also from AI Engineer, [Accelerating AI on Edge](https://www.youtube.com/watch?v=Lm8BLHkxiAo) details Google's Gemma 4 2B/4B models running on the Light RT framework, showing native NPU acceleration capable of 3x to 10x performance boosts and a live hardware demo running locally on a Raspberry Pi.

### Hardware & Infrastructure
AWS Developers dropped [EKS Auto Mode: Production Kubernetes in One Click](https://www.youtube.com/watch?v=s9d61eYkGzs) and [AI on Kubernetes? EKS Auto Mode Handles the Burst](https://www.youtube.com/watch?v=H2JpzZo3y7w) detailing a managed data plane backed by the open-source Carpenter autoscaling project. The real technical signal here is native support for parallel downloading and unpacking of massive, multi-gigabyte container image layers to radically reduce cold-start times for expensive GPU inference nodes.

### Everything Else
Over on The Pragmatic Engineer, [Mario & Armin: A good engineer says no, a lot](https://www.youtube.com/watch?v=GkEWAzx2xRI) makes the sharp cultural observation that while senior engineers say "no", AI agents always say "yes", creating a dynamic where juniors use LLMs to bypass architectural pushback. [Lenny's Podcast](https://www.youtube.com/watch?v=FFzACjO_stA) features a philosophical cut on how building things locally unlocks personal agency in [Agency isn't evenly distributed](https://www.youtube.com/watch?v=FFzACjO_stA), but you can safely skip the Apple Store iPhone consumer shorts entirely.