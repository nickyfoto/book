---
title: 2026-03-30
weight: 1
---

# Engineering Reads — 2026-03-30

## The Big Idea
The hardware we colloquially call "GPUs" in the data center has fundamentally diverged from its namesake; in the relentless pursuit of maximum compute density for machine learning workloads, modern enterprise chips have physically excised their actual graphics processing pipelines.

## Deep Reads

**[Small note about AI 'GPUs'](https://xeiaso.net/notes/2026/ai-gpus-cant-process-graphics/)** · xeiaso.net 
As the AI industry continues its rapid capital expansion, a common assumption among hardware enthusiasts is that an eventual market contraction will flood the secondary market with cheap, high-VRAM server GPUs perfectly suited for high-fidelity gaming. This brief note dismantles that expectation by highlighting a fundamental hardware design tradeoff: modern enterprise "GPUs" have evolved into purely parallel math accelerators. To pack as much raw compute density as possible onto the silicon for CUDA operations (specifically AI training and inference), hardware vendors have completely removed video outputs and graphics processing logic from the die. As a result, these enterprise cards literally cannot process or render graphics. Systems engineers and hardware practitioners should read this as a blunt reminder of how domain-specific architectural optimization inevitably sheds legacy capabilities—even the very rendering pipelines that gave the hardware its original name.