---
title: 2026-05-18
weight: 1
categories: ["Blogs"]
tags: ["software engineering", "artificial intelligence", "version control", "markdown", "developer tools"]
---

# Engineering Reads — 2026-05-18

## The Big Idea
The limits of engineering capability—whether writing new software with AI or comprehending legacy systems—are ultimately dictated by the quality and tightness of our feedback loops. The tools we build to verify correctness or surface the context of past decisions will become far more critical than the raw generation of code or text.

## Deep Reads

**[What’s Easy Now? What’s Hard Now?]** · Marc Brooker · [Source](http://brooker.co.za/blog/2026/05/18/whats-easy-whats-hard.html)
Coding agents will eventually excel at deeply technical systems programming while struggling with UI/UX, directly inverting current conventional wisdom. Brooker argues that AI agents are fundamentally feedback loops wrapped around open-loop LLMs. Tasks with rigorous automated feedback—like writing a database storage engine verified by Rust, TLA+, or property-based tests—can be solved entirely by an agent iterating without human intervention. Conversely, front-end development relies on slow, inconsistent human feedback, making it a inherently difficult problem for autonomous agents. Engineering leaders and systems programmers should read this to understand why mastering formal specification tools will be their highest-leverage skill in an AI-assisted future.

**[Always Be Blaming]** · matklad · [Source](https://matklad.github.io/2026/05/18/always-be-blaming.html)
Reading code in a "4D" manner—understanding the historical evolution and the original author's mindset—requires in-place, temporal version control tooling rather than a standard, file-centric `git blame`. Because most code is shaped heavily by the state of the codebase at the time it was written, understanding the "why" requires checking out the exact historical snapshot. To build this "theory of mind", the author uses a custom local workflow that directly checks out historical commits (via `git switch --detach`), allowing LSPs and test runners to operate seamlessly within that past environment. A major tradeoff to this local workflow is that crucial historical context—like code review discussions—remains locked in proprietary web databases rather than the Git tree itself. Senior engineers debugging complex legacy systems should adopt these mental models to rapidly reconstruct the lost operational context of confusing code.

**[Marked 3 is officially out]** · Brett Terpstra · [Source](https://brett.trpstra.net/link/535/17343591/marked-3-is-officially-out)
Marked 3 transforms Markdown from an isolated developer convenience into a viable format for strict corporate environments via robust, two-way DOCX export capabilities. The software leverages CommonMark and Kramdown to support Inline Attribute Lists (IALs) and custom rules based on file metadata, enabling automated workflows and precise styling control over block elements. The transition to a $2.99/month subscription model may alienate some long-time users, but the author notes it replaces the stagnant upgrade cycles that plagued Marked 2. Technical writers and engineers who prefer to write in plain text but are forced to collaborate in Microsoft Word environments should explore this to streamline their documentation pipelines.

## Connecting Thread
Brooker emphasizes defining "what good looks like" so that automated tools can iteratively build correct systems, while matklad focuses on reconstructing "what good looked like in the past" so humans can maintain them. Both highlight a shift in modern engineering craft: the actual typing of syntax is becoming secondary to the high-leverage work of capturing architectural intent, constraints, and historical context.