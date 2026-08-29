---
title: 2026-08-21
weight: 5
categories: ["Blogs"]
tags: ["developer tools", "compilers", "static analysis", "systems engineering"]
---

A common pitfall in systems design is **dogmatic architectural purity**—applying a single elegant abstraction to a problem space that actually exhibits highly bimodal usage patterns. In language tooling, this manifests as treating cold, third-party dependency code with the exact same heavy-duty incremental parsing and reactive querying mechanisms used for the file the developer is actively typing in. Aleksey Kladov's (matklad) reflection on **Rust Glancer** and the structural trade-offs of `rust-analyzer` offers a masterclass in pragmatic systems engineering. By contrasting the current state of Rust tooling with IntelliJ's multi-backend architecture, the piece exposes why building a language server is as much about data tiering and knowing when to cheat as it is about parsing theory.

# Engineering Reads — 2026-08-21

## The Big Idea
To build high-performance developer tools, we must abandon the architectural purity of applying incremental, snapshot-consistent indexing to all codebase dependencies. Instead, systems should use tiered data structures that treat hot, user-edited files separately from cold, read-only dependency code.

## Deep Reads

**[Rust Glancer](https://matklad.github.io/2026/08/21/rust-glancer.html)** · matklad · [matklad.github.io](https://matklad.github.io/2026/08/21/rust-glancer.html)
The author argues that modern Language Server Protocol (LSP) implementations like `rust-analyzer` suffer from severe memory bloat because they mistakenly use heavy, incremental query engines (`salsa`) and fully realized syntax trees (`rowan`) for thousands of unread, read-only dependency crates. Instead, an efficient analyzer should adopt IntelliJ’s "Stub Tree" strategy: utilize compact, on-disk representations—such as compiler `.rmeta` files—for the read-only cargo dependency graph, and transparently transition to lazy, in-memory incremental analysis only for files actively opened or modified by the user. Furthermore, high-overhead features like procedural macro expansion could be bypassed entirely using a Sorbet-like plugin mechanism that "explains" their effects with lightweight, empty implementation stubs. While this lazy-loading model drastically reduces memory footprints, it tradeoffs complete, pedantic correctness across the workspace, and it explicitly limits or omits support for complex build scripts and dynamic procedural macro expansion. This post is a must-read for systems engineers and tool builders who want to understand why dogmatic architectural consistency often compromises performance and how tiered data access can salvage IDE resource consumption.

***

### Systems Commentary & Deeper Trade-offs

For practitioners designing high-throughput or memory-constrained developer tools, Kladov's write-up highlights three critical engineering lessons:

1. **The Row vs. Array AST Representation**
   Highly general syntax trees like `rowan` are designed for incremental, mutation-style refactorings (e.g., automated renames or quick-fixes). However, this capability represents less than 1% of the tool's runtime workload. The other 99% is scanning code inside cold, external dependencies. For this read-only data, a flat, simple array-of-arrays representation is orders of magnitude more efficient than complex tree nodes.
2. **The "Sorbet Trick" and Pragmatic Cheating**
   Metaprogramming (like Rust's procedural macros) is notoriously hostile to fast static analysis because it requires executing external, arbitrary compiler plugins. Rather than running these expensive build scripts and macro compilers, we can employ "smart cheating." By utilizing pluggable compiler shims that output static, empty mock structures (e.g., `impl Serialize for T {}` with an empty body), an analyzer can preserve functional completions and type resolution without paying the massive memory and computational tax of macro expansion.
3. **Tiered Resolution Architectures**
   IntelliJ’s PSI (Program Structure Interface) succeeded because it separated code into three logical tiers:
   * **Tier 1 (Active):** Fully concrete syntax trees for the active buffer being edited.
   * **Tier 2 (Project):** A highly compressed, on-disk "Stub Tree" containing only public API signatures, omitting function bodies.
   * **Tier 3 (Dependencies):** Precompiled index binaries or byte-code files.
   
   Language servers written from scratch often attempt to force a single, uniform query-engine architecture (like `salsa` in Rust) across all three tiers. Recognizing when a system's domain is inherently bimodal is the key to escaping the "half-drawn horse" trap of tool performance.

🔍 We could do some web research to see how the Rust Glancer project has evolved since this post, or dive deeper into how compilers like Sorbet implement their metadata-only bypasses.