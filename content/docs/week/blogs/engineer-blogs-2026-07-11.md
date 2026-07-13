---
title: 2026-07-11
weight: 1
categories: ["Blogs"]
tags: ["linear algebra", "large language models", "engineering leadership", "technical debt"]
---

# Engineering Reads — 2026-07-11

## The Big Idea
As software systems and organizations evolve, they accumulate hidden, uninspected layers—whether they are disjoint "soil horizons" of legacy code, poisoned layers of AI-generated reasoning, or invisible backlogs of suppressed operational demand. Surviving this complexity requires a ruthless return to first principles: rigorously proving the mathematical equivalents of your abstractions, actively inspecting the details of your reasoning, and recognizing that resolving technical debt often unearths even more systemic demand.

## Deep Reads

**[Dot product: Component vs. Geometric definition](https://eli.thegreenplace.net/2026/dot-product-component-vs-geometric-definition/)** · Eli Bendersky
Bendersky dissects the equivalence between the component ($\sum a_i b_i$) and geometric ($|a||b|\cos\theta$) definitions of the Euclidean dot product. He bridges the algebraic and spatial realities using two mechanisms: a geometric proof relying on the law of cosines, and a projection proof leveraging standard orthonormal basis vectors. Beyond standard Euclidean vectors, he elevates the concept to generalized inner product spaces, proving the foundational requirements of symmetry, linearity in the first argument, and positive-definiteness. The primary takeaway is how intuitive geometric properties, like the Pythagorean theorem, scale robustly into multi-dimensional component formulations. Engineers building vector databases or graphics engines should read this for a rigorous refresher on the linear algebra primitives underpinning their systems.

**[Make no assumptions.](https://lethain.com/make-no-assumptions/)** · Will Larson
Larson expands the concept of code "soil horizons"—disjoint layers of architecture left by successive technical leads—into the increasingly dangerous territory of "reasoning horizons". As developers and engineering leaders use LLMs to generate load-bearing work, they risk building critical decisions on top of fundamentally flawed, uninspected AI reasoning layers. Larson warns that this unprincipled adoption of AI erodes social norms around quality, creating an exhausting environment where every piece of context must be manually inspected to avoid catastrophic mistakes. To counteract this decay, he argues for a strict "make no assumptions" policy, demanding that authors act as the first human-in-the-loop and use LLMs strictly for structural exploration rather than final reasoning. Engineering leaders and senior ICs must read this to understand the systemic risks of AI adoption and how to safely navigate the proliferation of automated coding harnesses.

**[Generated and suppressed demand.](https://lethain.com/generated-demand/)** · Will Larson
Revisiting his framework for restoring struggling teams, Larson introduces the mechanics of "suppressed" and "generated" demand. When a team successfully digs out of technical debt and begins shipping rapidly, they inevitably unblock previously suppressed demand—requests that other teams had stopped making because the struggling team was previously a known bottleneck. This creates a disorienting, demoralizing cycle where a highly effective team suddenly feels completely underwater again despite doing everything right. Broad-interface teams, like Developer Experience or Customer Operations, are especially susceptible to sitting on massive invisible backlogs of this suppressed work. Managers and staff engineers leading organizational turnarounds should read this to recalibrate their expectations and correctly identify a flood of generated demand as a signal of trust and success, rather than failure.

## Connecting Thread
Across both mathematical theory and organizational design, these pieces highlight the danger of accepting abstractions at face value. Just as you must rigorously prove the equivalence of geometric and component vectors to safely operate in inner product spaces, you must actively inspect the "reasoning layers" of AI outputs and the hidden demand backlogs of engineering teams to understand the true state of your systems.