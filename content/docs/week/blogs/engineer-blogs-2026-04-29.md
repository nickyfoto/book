---
title: 2026-04-29
weight: 2
categories: ["Blogs"]
tags: ["software engineering", "agentic programming", "code verification", "conceptual modeling"]
---

# Engineering Reads — 2026-04-29

## The Big Idea
As AI tools accelerate code generation, the primary engineering bottleneck shifts from writing implementation logic to verifying it and providing structural intent. The high-leverage work of a senior engineer is evolving from writing instructions to building deterministic verification harnesses and formalizing clear conceptual boundaries.

## Deep Reads

**[On Agentic Programming and Verification]** · Chris Parsons · [Fragments: April 29](https://martinfowler.com/fragments/2026-04-29.html)
Chris Parsons argues that as AI throughput scales, verification can no longer rely purely on human reading. Instead, modern verification must rely on tests, type checkers, and automated gates to handle the volume. The core bottleneck in software engineering is no longer how fast we can generate code, but how fast we can determine if that generated code is correct. He contrasts "vibe coding" with rigorous "agentic engineering," where shaping the inner harness is a distinct advantage. For senior engineers, reviewing endless AI diffs is a dead end; the real compounding value lies in training the AI to get it right the first time and shaping the review surfaces. Read this if you are a senior engineer trying to figure out how your role scales in an AI-heavy workflow.

**[Harness Engineering and Computational Sensors]** · Birgitta Böckeler & Chris Ford · [Fragments: April 29](https://martinfowler.com/fragments/2026-04-29.html)
Böckeler and Ford dive into the concept of "Harness Engineering" by emphasizing computational sensors like static analysis and automated tests. While LLMs excel at exploring fuzzy rules, systems ultimately demand formal, unambiguous, and deterministic assurances that AI inherently lacks. Interestingly, Böckeler's experiments reveal a mechanical advantage of AI: agents will systematically fix *every* static analysis warning in a harness without the fatigue or slacking off that plagues human developers. The tradeoff is that the harness must be rigorously defined up front to provide this deterministic feedback. This is essential reading for platform engineers and technical leads tasked with building the infrastructure to safely capture and deploy agent-generated code.

**[Function Length and AI Code Comprehension]** · Adam Tornhill · [Fragments: April 29](https://martinfowler.com/fragments/2026-04-29.html)
Tornhill revisits the classic debate over function length, viewing it through the practical lens of how AI models parse codebase structures. Unlike humans, AI models do not possess inferred semantic understanding; they rely heavily on literal features, explicit identifiers, and local context tokens. Consequently, when developers use arbitrary names or fail to structure their code, model performance degrades significantly. Tornhill and Fowler agree that the goal isn't arbitrary line limits, but rather separating intent from implementation by defining useful conceptual boundaries. Any developer using AI assistants should read this to understand why ruthless code structuring and explicit naming are actually more critical in the age of generative models, not less.

**["Software Brain" and the Limits of Legibility]** · Nilay Patel & Ezra Klein · [Fragments: April 29](https://martinfowler.com/fragments/2026-04-29.html)
Patel diagnoses the tech industry's "Software Brain" as the pervasive fallacy of viewing the real world entirely as a set of structured databases to be controlled with code. This mindset falters against messy reality, where precise, consistent conceptual definitions are notoriously difficult to maintain. Compounding this phenomenon, Klein notes the current tech-industry rush to make all human knowledge "legible" to AI, sacrificing privacy and unstructured thought to feed the machine's context window. Fowler pushes back on this temptation in the context of writing and thinking, noting that offloading the struggle of articulation to an LLM cripples the human mind's ability to refine its own ideas. This is a vital philosophical read for architects who assume messy internal data can be magically organized by an LLM without deep, human-driven conceptual modeling.

## Connecting Thread
Across these fragments, a clear theme emerges: as the raw generation of text and code becomes cheap, the market places a massive premium on structure, precise definition, and automated verification. Whether you are building automated harnesses for agentic coding, explicitly naming functions so models can parse intent, or resisting the urge to let an LLM do your writing, an engineer's highest-leverage work is now anchored in rigorous conceptual modeling and deterministic validation.