---
title: 2026-08-27
weight: 5
categories: ["Youtube", "Tech"]
tags: ["cuda optimization", "distributed inference", "agentic software engineering", "verifiable databases"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-08-27

## Watch First
The single video most worth a senior engineer's time is **[Can LLMs Write Fast Multi-GPU Kernels? — Simran Arora, Together AI](https://www.youtube.com/watch?v=pOvWgX7IJsc)** on the AI Engineer channel, which strips away AI code-gen marketing hype with a rigorous evaluation of frontier LLMs (including GPT 5.5) on a new 87-problem CUDA benchmarking suite. The benchmark reveals that while models excel at single-GPU syntax, they fundamentally fail to reason about multi-GPU memory hierarchies, register pressure, and communication interconnects.

## Highlights by Theme

### Developer Tools & Platforms
Peter Werry's presentation on the **[AI Engineer](https://www.youtube.com/watch?v=qdAkxLoYNI8)** channel shows how a codebase context engine integrates repositories, PR history, and Slack threads into a semantic graph, helping agents avoid "satisfaction of search" traps where they halt at the first sub-optimal solution they find. The context engine significantly cuts token overhead by 50%. For open-source builders, the maintainers of the viral **[OpenClaw Went Viral](https://www.youtube.com/watch?v=5VSwaUXtPIE)** project on the **[GitHub](https://www.youtube.com/watch?v=5VSwaUXtPIE)** channel outline the DevOps and security realities of managing a massive agentic project, including handling malicious pull requests, Microsoft's 11,000-employee internal deployment, and enforcing strict container boundaries to prevent directory escape. Finally, Debanshu's talk on the **[Google Cloud Tech](https://www.youtube.com/watch?v=Z9WbG3m7Da4)** channel introduces a modular agent "skills" architecture—grouping capabilities like domain knowledge, test-driven pipelines, and clarification prompts ("`/grill-me`")—to prevent prompt bloat and keep agent execution deterministic.

### AI & Machine Learning
Barat Namoti on the **[Microsoft Research](https://www.youtube.com/watch?v=yJQsNCtCOiw)** channel presents TruthTable, a verifiable database engine built in 54,000 lines of Rust (using ARCPOP) that processes SQL query plans as cryptographic witness traces, outperforming traditional Snark setups by up to 80x in prover time. Meanwhile, an EEG research talk on **[Microsoft Research](https://www.youtube.com/watch?v=zl_RxpwPsIY)** exposes a major scalability caveat in bio-signal foundation models, demonstrating that 3-to-5 million parameter EEG models fail to outperform simple supervised baselines on brain-computer interfaces due to subject-specific overfitting on noisy ICU training data. In the agentic commerce space, Ahnaf Prio on the **[AI Engineer](https://www.youtube.com/watch?v=G7cgLjZtmMU)** channel details Best Buy's work on the Agentic Commerce Stack, breaking down Google's new open Agentic Payment Protocol (AP2) and the need for strict behavior evals to prevent users from hijacking commercial checkout agents for free programming compute.

### Hardware & Infrastructure
Yuchen Fama and Ashish Kamra on **[AI Engineer](https://www.youtube.com/watch?v=YXowceUKYJI)** detail Red Hat's distributed inference framework (LLMD) on Kubernetes, showcasing a 9x inter-token latency improvement (100ms vs 900ms) by disaggregating prefill and decode phases to eliminate compute-heavy phase interference. However, they emphasize that prefill-decode disaggregation is highly fabric-dependent, requiring high-speed RDMA or RoCE networking to avoid crippling bottlenecks during the transfer of massive KV caches between nodes. Complementing this, **[Computerphile](https://www.youtube.com/watch?v=xs5iOwkX9fU)** provides a low-level lesson on system time, explaining how the x86 `rdtsc` and `rdtscp` instructions are mapped into unprivileged user space (vDSO) to avoid expensive context switches, while detailing the complexities of dynamic CPU frequency scaling and microarchitectural instruction leakage.

### Everything Else
In systems engineering culture, **[Fireship](https://www.youtube.com/watch?v=UuqSy1jPSUw)** analyzes Knight Capital's \$440 million manual deployment disaster in 2012, highlighting how a 9-year-old zombie test flag ("`Power Peg`") was accidentally triggered on a single unpatched server. Additionally, David Heinemeier Hansson (DHH) on **[Lex Clips](https://www.youtube.com/watch?v=tzGLLFFhqeU)** discusses Linus Torvalds' pragmatism in welcoming both Rust and AI-generated code to the 40-million-line Linux kernel, emphasizing that high-stakes infrastructure engineering demands a ruthless pursuit of technical excellence over polite standards.

***

📊 I can write a script to extract the performance and cost metrics from the Together AI and Red Hat talks and chart them side-by-side to compare multi-GPU compiler benchmarks versus inference disaggregation gains.