---
title: 2026-05-04
weight: 7
categories: ["Youtube", "Tech"]
tags: ["ai agents", "machine learning", "cybersecurity", "software engineering", "edge computing"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-04

## Watch First
[732 bytes of Python just borked every Linux machine on earth…](https://www.youtube.com/watch?v=lkifbWtxxlk)
If you manage Linux infrastructure updated since 2017, patch your systems yesterday: a 732-byte Python script discovered by an AI agent exploits a logic flaw in the kernel's `AF_ALG` and `splice()` functions, allowing unprivileged local users to write to the page cache of read-only files (like `su`) and gain root access.

## Highlights by Theme

### Developer Tools & Platforms
In [Ralph Loops: Build Dumb AI Loops That Ship — Chris Parsons, Cherrypick](https://www.youtube.com/watch?v=2TLXsxkz0zI), the speaker demonstrates why complex, multi-agent parallel orchestration workflows often fail due to contention and dependency nightmares, arguing instead for "dumb" sequential while-loops ("Ralph Loops") running in Claude Code to iteratively process flat Markdown tickets. For context management, [Skill Issue: How We Used AI to Make Agents Actually Good at Supabase — Pedro Rodrigues, Supabase](https://www.youtube.com/watch?v=GmAQKINjv1E) shows how "skills" can be used as a progressive disclosure mechanism to inject environment-specific instructions into agents. In a live demo, he uses a custom skill to prevent Claude from generating Postgres views that inadvertently bypass Row Level Security (RLS) via missing `security_invoker` flags. Finally, Google Cloud Tech's [How to scale Gen AI to billions of rows in BigQuery at a fraction of the cost](https://www.youtube.com/watch?v=-QLXKr94X6Q) introduces an "optimized mode" that drastically cuts LLM inference costs by sampling data embeddings to train a local distilled model within BigQuery rather than sending every row to an external API. 

### AI & Machine Learning
For a high-signal deep dive into model architecture, [Training an LLM from Scratch, Locally — Angelos Perivolaropoulos, ElevenLabs](https://www.youtube.com/watch?v=UsB70Tf5zcE) strips away high-level abstractions to walk through building and training a 1.8 million parameter GPT-2 style model using raw PyTorch. The workshop covers the pragmatic tradeoffs of using a 65-embedding character-level tokenizer to limit compute requirements and explicitly steps through building the attention blocks and the training loop. On the deployment side, NVIDIA's [Apr 14 - Jetson AI Lab Research Group Call - Tensor RT Edge LLM on Jetson & Culture](https://www.youtube.com/watch?v=Am5cjhLe0jo) showcases TensorRT Edge LLM, highlighting how NVFP4 quantization paired with speculative decoding delivers a 2x to 7x faster prefill for real-time edge workloads. Injecting a necessary dose of skepticism into the current hype cycle, [The #1 Rule for Building AI Agents in 2026 | Yutori, Abhishek Das](https://www.youtube.com/watch?v=wRDk9_JoIic) argues that the normalization of non-determinism in AI products is unacceptable; Das points out that in a 50-step agent workflow, even a 90% success rate at each node compounds into a highly unreliable overall product.

### Hardware & Infrastructure
NVIDIA is pushing hard to accelerate telecom infrastructure by moving the 6G physical layer to GPUs, as detailed in [Generating Performant 6G GPU-Accelerated Code From High-Level Programming Languages](https://www.youtube.com/watch?v=P5ZIrv-9H-A). The talk details a fascinating lowering toolchain where high-level Python code (written in JAX or PyTorch) is exported to a StableHLO intermediate representation, then compiled via the ML TensorRT compiler into optimized CUDA kernels. This allows researchers to deeply fuse neural networks into classical signal processing pipelines (like channel estimators) while still executing within the rigid 500-microsecond over-the-air slot time constraints required by the Aerial Framework runtime. 

### Everything Else
The Syntax podcast tackles developer crunch time in [Managing Deadlines + Stress](https://www.youtube.com/watch?v=55KhU-ImnB0), emphasizing the pragmatic need to log blockers immediately, communicate slippage early, and aggressively resist the urge to take technical shortcuts that will inevitably create permanent maintenance burdens. Meanwhile, a brief clip from The Pragmatic Engineer, [Mario & Armin: Product managers are now sending pull requests](https://www.youtube.com/watch?v=t6kr2r70A50), warns that the rise of AI coding assistants is leading to non-engineers committing code directly, exposing the critical need for strict process guardrails.