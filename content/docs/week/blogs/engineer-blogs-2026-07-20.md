---
title: 2026-07-20
weight: 4
categories: ["Blogs"]
tags: ["memory safety", "buffer overflow", "tagged unions", "c programming"]
---

# Engineering Reads — 2026-07-20

## The Big Idea
The most theoretically difficult memory safety problem to solve—type confusion via tagged union aliasing—is not necessarily the most impactful one to fix in practice. Pragmatic language design should prioritize mitigating highly exploitable issues like buffer overflows with simple mechanisms like bounds checking and slice syntax, rather than purely chasing theoretical soundness.

## Deep Reads

**[Memory Safety’s Hardest Problem](https://matklad.github.io/2026/07/20/memory-safety-hardest-problem.html)** · matklad
The hardest conceptual memory safety challenge doesn’t stem from heap allocation or destructors, but rather from type confusion in tagged unions. The technical mechanism is subtle: if you initialize a union as type A, take a pointer to its internal data, overwrite the union as type B, and then dereference the initial pointer, you end up reading B's bytes through A's type definition. While this edge case successfully breaks the memory models of even strict languages like Ada, the author argues that its real-world exploitability remains unclear compared to ubiquitous threats. The industry's true failure was ignoring pragmatic solutions to the most common exploits—like Walter Bright's argument for introducing slice syntax (`char a[..]`) to C to trivially bound-check buffer overflows. Anyone evaluating systems programming languages or designing safety mitigations should read this to recalibrate the balance between theoretical correctness and practical exploit prevention.