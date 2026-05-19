---
title: 2026-05-08
weight: 7
categories: ["Blogs"]
tags: ["zig", "code formatting", "tooling", "developer experience"]
---

# Engineering Reads — 2026-05-08

## The Big Idea
Code formatters should amplify developer intent rather than blindly override it. Tools that rely on subtle syntactic cues to steer layout often yield cleaner, more readable code than rigid, algorithmically-driven alternatives.

## Deep Reads

**[Steering Zig Fmt]** · matklad.github.io · [Source](https://matklad.github.io/2026/05/08/steering-zig-fmt.html)
The core insight here is that `zig fmt` outperforms rigid alternatives like `rustfmt` or `deno fmt` because it is uniquely "steerable". Rather than applying a strict layout heuristic, the tool relies on developer-provided cues—such as a trailing comma—to seamlessly toggle a function call between single-line and multi-line layouts. It even handles complex columnar alignments for arrays by simply mirroring the developer's first line break, and allows varying items per line using concatenation operators like `++`. The underlying philosophy acknowledges a subtle tradeoff: while total automation eliminates stylistic arguments, it destroys semantic grouping, since the best formatting relies heavily on logical blocks and intermediate variables that machines cannot infer. By leaning into human choices rather than eliminating them, the tool strikes a pragmatic balance. Anyone building developer tooling or designing language ergonomics should read this to understand why leaving room for human intent often yields a superior developer experience.