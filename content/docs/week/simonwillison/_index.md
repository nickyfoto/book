---
title: Simon Willison
weight: 16
bookCollapseSection: true
categories: ["Blogs", "AI", "Tech"]
tags: ["generative ai", "llms", "wildlife", "web development", "artificial intelligence", "local llms", "svg", "browser tools", "***", "training data", "amazon", "large language models", "mojo", "open source", "python", "compilers", "gpu programming", "sandboxing", "software architecture", "developer tooling", "browser automation", "chatbot search", "javascript runtimes", "search engine optimization", "user interfaces", "command line tools"]
---

# Simon Willison — Week of 2026-08-15 to 2026-08-21

## Highlight of the Week
The highlight of this week is Simon’s extensive hands-on testing of the Apache-2 licensed, 27B local vision LLM, **Qwen 3.8**, which showcases massive leaps in local model capability on consumer-grade hardware. To solve its speed bottlenecks and overthinking tendencies under default "xhigh" settings, he detailed a massive **72% performance boost** achieved by running speculative drafting via Multi-Token Prediction (MTP). He also built and released **CORS Chat**, a lightweight web utility that allows developers to seamlessly test these local OpenAI-compatible endpoints directly in the browser while progressively rendering streaming SVG animations in real-time.

## Key Posts
**[Qwen 3.8 27B is excellent, but it defaults to wildly overthinking things](https://simonwillison.net/2026/Aug/16/qwen-38-27b/)** · [Source](https://simonwillison.net/2026/Aug/16/qwen-38-27b/)
Simon evaluated the newly released 27B vision-capable model locally using LM Studio and llama-server on his M5 Max MacBook Pro and a DGX Spark. While the model excels at driving local coding agent loops and executing precise vision bounding box coordinates, its default "xhigh" reasoning settings lead to hilarious over-engineering, such as consuming over **22,000 reasoning tokens** to draw a pelican SVG. Fortunately, implementing speculative drafting with Multi-Token Prediction (MTP) provided a 72% local performance boost to help mitigate these severe latency bottlenecks.

**[Conceptual integrity and counting lines of code](https://simonwillison.net/2026/Aug/19/conceptual-integrity-and-counting-lines-of-code/)** · [Source](https://simonwillison.net/2026/Aug/19/conceptual-integrity-and-counting-lines-of-code/)
Following a podcast appearance, Simon outlines how AI coding agents have fundamentally broken lines of code as an engineering productivity metric by generating massive volumes of software. The real development bottleneck has shifted from raw code output to human **cognitive capacity**, specifically senior engineers' ability to safely review and maintain this output. He warns against losing "conceptual integrity" to cheap feature bloat, noting that developers must exercise manual, intentional discipline to keep their architectures from turning into disjointed monstrosities.

**[Mojo🔥 is now open source](https://www.modular.com/blog/mojo-open-source)** · [Source](https://simonwillison.net/2026/Aug/18/mojo-is-now-open-source/)
Modular has open-sourced its Mojo compiler and toolchain under the permissive Apache 2 license, fulfilling a major promise made to the developer community. In his commentary, Simon highlights Mojo’s strategic pivot away from achieving 100% Python compatibility, with Modular instead betting on modern **AI-assisted tools** to migrate Python codebases over to Mojo. Mojo is now positioned as an independent systems programming language designed to make high-performance GPU programming as painless as possible.

**[Stop Making TUIs](https://simonwillison.net/2026/Aug/21/stop-making-tuis/)** · [Source](https://simonwillison.net/2026/Aug/21/stop-making-tuis/)
Simon highlights an argument from Thomas Ptacek asserting that developers should stop building Terminal User Interfaces (TUIs) in favor of **native desktop applications**. Thanks to AI coding agents, the effort and cost required to generate standard, functional native GUIs has plummeted to near zero. Reflecting on his own experience with "vibe-coded" SwiftUI system monitors that he still uses daily, Simon agrees that the excuses for avoiding native app development are rapidly vanishing.

## Project Updates
Simon released several updates to his personal open-source projects, including **llm-openrouter 0.7**, which adds support for server-side tools like WebSearch and WebFetch. He also pushed an urgent **llm 0.32.1** patch to address a dependency break caused by the upstream OpenAI library dropping httpx. In addition, he built and launched **CORS Chat** to test local model APIs, and upgraded his browser-based **markdown-svg-renderer** with WebAssembly-based ffmpeg.wasm to compile animated SVGs into MP4 videos entirely on the client side.

## Themes
A recurring theme throughout the week is how AI-assisted programming is drastically lowering the cost of software construction, allowing developers to build everything from native desktop apps to custom web tools on a whim. However, this explosive velocity introduces new structural challenges, highlighting a critical industry shift toward robust **sandboxing environments** like smolvm to run untrusted agent code, alongside a renewed need for developer self-discipline to preserve architectural and conceptual integrity.