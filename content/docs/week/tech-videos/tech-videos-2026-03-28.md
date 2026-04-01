---
title: 2026-03-28
weight: 3
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-28

## Watch First
[How to Build a production-ready RAG AI agent](https://www.youtube.com/watch?v=Ni1P8TITtE8) from Google Cloud Tech is the most actionable watch today. It provides a credible, hands-on walkthrough of moving from batch LLM processing to a low-latency, real-time RAG pipeline using Cloud SQL, pgvector (HNSW indexing), and Apache Beam for scalable stream processing. 

## Highlights by Theme

### Developer Tools & Platforms
Google Cloud Tech's [Build an AI Agent knowledge base using SQL (BigQuery + Gemini)](https://www.youtube.com/watch?v=zvmtHZSt8es) shows a pragmatic approach to ETL by using BigQuery external tables to point to GCS buckets, allowing you to prompt Gemini to extract structured JSON from unstructured text in parallel without duplicating data. Meanwhile, Visual Studio Code's [How you can become an agent orchestrator](https://www.youtube.com/watch?v=nz-y09r6PRk) briefly highlights using agent sessions to manage local and cloud agents from a single dashboard. The short clip explicitly notes the use of the Model Context Protocol (MCP) to seamlessly supply custom tools and agents with critical workflow context. 

### AI & Machine Learning
In [Nemotron 3: NVIDIA’s new open-source AI model explained](https://www.youtube.com/watch?v=RIIY6PVC3wg), Jensen Huang details Nemotron 3, a 120-billion parameter open-weight model that notably combines both transformer and state-space model (SSM) architectures. In [Did NVIDIA predict OpenClaw?](https://www.youtube.com/watch?v=VHg7g7N1Axs), Huang argues that agentic systems like OpenClaw fundamentally change computing requirements because digital workers need to natively access file systems and tools rather than waiting for massive pre-trained knowledge updates. To mitigate the obvious security risks of agents executing code and communicating externally, NVIDIA released "Nemo Claw" to wrap these open systems with enterprise access controls. 

### Hardware & Infrastructure
In [Why NVIDIA is 3 years ahead of everyone](https://www.youtube.com/watch?v=gRnxZI_o96U), Huang explains how NVIDIA codesigns hardware by anticipating algorithmic shifts 2-3 years out, such as increasing to NVLink 72 specifically to keep an entire multi-trillion parameter Mixture of Experts (MoE) model in one computing domain. He notes the resulting architectural split between the Grace Blackwell rack (optimized for pure LLM inference) and the new Vera Rubin rack (augmented with storage accelerators and the new Vera CPU to handle tool-heavy agents). Finally, [Future of AI clusters in space](https://www.youtube.com/watch?v=s5Jzr-eZNOA) discusses the engineering realities of space-based AI edge compute, noting that on-satellite inference is necessary to process continuous, centimeter-scale telemetry locally rather than beaming petabytes of raw data down to Earth.

### Everything Else
On the [All-In Podcast](https://www.youtube.com/watch?v=gxze1s3dexg), the hosts theorize that AI will diminish the value of corporate brands by commoditizing the ability to produce cheaper, faster, and better products, meaning consumers will prioritize abundance over brand affiliation. In a fascinating historical aside in [Why the Past Feels Slower Than It Was](https://www.youtube.com/watch?v=pIpyXMxJm-I), Ada Palmer points out that the video game *Civilization* artificially skews our perception of historical pacing by compressing turn times from 50 years in antiquity to 1 year in modernity, masking how fast the past actually moved.