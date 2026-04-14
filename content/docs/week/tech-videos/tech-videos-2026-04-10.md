---
title: 2026-04-10
weight: 3
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "large language models", "ai agents", "developer tools", "hardware"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-04-10

## Watch First
[Judge the Judge: Building LLM Evaluators That Actually Work with GEPA](https://www.youtube.com/watch?v=X4dEHRzBLmc) is the standout talk today for its pragmatic, no-nonsense look at prompt optimization using the GEPA algorithm. It skips the marketing hype and dives straight into the real engineering challenge of creating calibrated LLMs-as-a-judge that actually correlate with human annotations without severely overfitting to your test data.

## Highlights by Theme

### Developer Tools & Platforms
[AI Didn’t Kill the Web, It Moved in!](https://www.youtube.com/watch?v=XZ0boOjtbNo) from the AI Engineer channel gives an excellent demonstration of using the Chrome DevTools Model Context Protocol (MCP) to let agents directly debug network requests and modify CSS. The talk also highlights the experimental W3C `window.ai` prompt APIs for running local, on-device models directly in the browser without external network calls or token costs. For teams dealing with agent sprawl, [One Registry to Rule them All](https://www.youtube.com/watch?v=VXfRt_H-V08) details an enterprise-grade MCP and Agent-to-Agent (A2A) registry built by Amplifon to handle authentication, cost attribution, and CI/CD metadata deployments across 26 countries. Finally, on the frontend side, Syntax's [This custom highlight API is NEAT](https://www.youtube.com/watch?v=iGrLxdC99jA) briefly notes that the new native CSS Highlight API is replacing the need to use heavy, hacky JavaScript DOM overlays for code editor text decorations.

### AI & Machine Learning
[Teach AI to Code in Every Language with NVIDIA NeMo](https://www.youtube.com/watch?v=d8yQ358u-rE) provides a highly credible, technical breakdown of pre-training and supervised fine-tuning a Qwen 3 1.7B model on Python and Rust using only 0.88 trillion tokens. The talk avoids empty platitudes, instead covering practical workflows like checkpoint merging, fill-in-the-middle (FIM) infilling strategies, and verifiable reward reinforcement learning (RLVR). Elsewhere, Anthropic's unreleased "Mythos" model is generating significant noise for allegedly chaining zero-day exploits in older C codebases like OpenBSD and FFmpeg, as discussed in Fireship's [Claude Mythos is too dangerous for public consumption...](https://www.youtube.com/watch?v=d3Qq-rkp_to) and the [All-In Podcast](https://www.youtube.com/watch?v=DVBJQQCjgXU). However, skepticism is warranted, as throwing $20k of parallel compute and 1,000 agent iterations at a codebase using existing models like Opus 4.6 might yield the exact same bug-finding results.

### Hardware & Infrastructure
[Running LLMs locally: Practical LLM Performance on DGX Spark](https://www.youtube.com/watch?v=c5-kx2bwoCk) evaluates NVIDIA's new Grace Blackwell-powered DGX Spark for local AI developer workloads. The benchmarking data shows that utilizing NVFP4 quantization allows a 14B parameter model to achieve a highly responsive 20 tokens per second locally, proving that memory bandwidth—not just capacity—is the critical bottleneck for local inference systems.

### Everything Else
[How promotions work at Big Tech](https://www.youtube.com/watch?v=arFszOVcecg) from The Pragmatic Engineer serves as a quick, blunt reminder that your manager acts strictly as your lawyer for promotions. Without clear visibility into your shipped work, they cannot build the broader consensus case required to actually get you leveled up.