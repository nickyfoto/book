---
title: 2026-08-26
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "local llms", "software engineering", "mixture of experts"]
---

# Simon Willison — 2026-08-26

## Highlight
**Simon's hands-on benchmarking of the newly released Qwen3.8-Flash-Next open-weights model highlights the rapid progression of Mixture of Experts (MoE) architectures and the practical viability of running massive, highly-quantized models on local hardware.**

## Posts

**[Qwen3.8-Flash-Next](https://simonwillison.net/2026/Aug/26/qwen38-flash-next/)** · [Source](https://simonwillison.net/2026/Aug/26/qwen38-flash-next/)
Simon dives into Qwen’s new multimodal MoE open-weights model, which features 125B total tokens with only 6B active to deliver a massive performance efficiency boost. He tested the model locally on a DGX Spark using Unsloth quantized GGUFs, evaluating how well the 72.5GB and 78.9GB versions handle his signature "pelican riding a bicycle" prompt. He used his custom `markdown-svg-renderer` tool to visualize the results, noting that his favorite output came from an "xhigh reasoning effort" run using the 78.9GB quantization.

**[Quoting Paul Dix](https://simonwillison.net/2026/Aug/26/paul-dix/)** · [Source](https://simonwillison.net/2026/Aug/26/paul-dix/)
Simon quotes Paul Dix from his piece, "The end of programming," which explores the mind-blowing capabilities of AI-assisted development and coding agents. Dix argues that an AI writing one million lines of code and iteratively refining it into a stable application deployed on millions of developer machines is a massive, paradigm-shifting milestone. The key takeaway is that when developers can construct robust verification systems and provide proper guidance, AI is fully capable of building and maintaining highly sophisticated software systems.

## Project Pulse
**Both of today's posts underscore the shifting boundaries of software development, demonstrating how advanced local reasoning LLMs and autonomous coding agents are transitioning from experimental toys to practical, highly sophisticated engineering partners.**

***

📄 I can save this compiled daily digest as a clean markdown file in your Studio panel if you'd like to export or share it.