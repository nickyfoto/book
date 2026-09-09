---
title: 2026-09-06
weight: 1
categories: ["Blogs"]
tags: ["webassembly", "rust", "proof of work", "compilers"]
---

# Engineering Reads — 2026-09-06

## The Big Idea
**Sharing high-performance binaries across client and server via WebAssembly is an elegant architectural goal**, but deploying it to production reveals a minefield of toolchain inconsistencies, compiler bugs, and legacy browser limitations. The lesson is that the "compile once, run anywhere" promise of WASM still demands **handcrafted ABIs and heavy investment in bespoke infrastructure** to handle real-world edge cases.

## Deep Reads

**[It took a year to ship WebAssembly in Anubis](https://anubis.techaro.lol/blog/2026/anubis-wasm/)** · Xe Iaso · [Anubis Blog](https://anubis.techaro.lol/blog/2026/anubis-wasm/)
In this deep dive, Xe details the grueling, year-long journey of moving Anubis's CPU-hard challenges to **memory-hard Argon2id proof-of-work functions** using WebAssembly. To bypass the immature WebAssembly Component Model, the author hand-crafted a **low-level ABI based on raw pointers and linear memory buffers** to share a single Rust binary between a Go server and older browser clients. To accommodate clients with WASM disabled (like iOS Lockdown mode), they compiled WASM to JavaScript using `wasm2js`, which produced **massive, slow-running files** that highlighted the limits of uniform runtime fallbacks. Further complicating production was an **esoteric compiler bug in LLVM** that broke deterministic builds, forcing the author to vendor toolchains, alongside **standard library reference-type incompatibilities** in older Chrome engines that required aggressive post-processing using fuzzed `wasm-opt` feature-stripping flags. Any engineer considering WebAssembly for edge compute or client-side heavy lifting should read this to understand the **immense operational tax** of maintaining deep backwards compatibility across legacy platforms and fragile toolchains.

***

💡 We could dive deeper into how Xe set up "chromesweep" with Kubernetes NetworkPolicies and Kata containers for automated browser testing—let me know if you want a detailed technical breakdown of that sandbox architecture.