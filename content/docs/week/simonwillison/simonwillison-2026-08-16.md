---
title: 2026-08-16
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "local llms", "svg", "browser tools", "***"]
---

# Simon Willison — 2026-08-16

## Highlight
The standout post of the day is hands-on coverage of **[Qwen 3.8 27B is excellent, but it defaults to wildly overthinking things](https://simonwillison.net/2026/Aug/16/qwen-38-27b/)**, an incredibly capable **17GB local vision LLM** that demonstrates massive leaps in local model capability. Simon's detailed testing exposes the hilarious over-engineering caused by its **"extra high" default reasoning effort** while offering practical, local optimization strategies like **Multi-Token Prediction (MTP)** to solve its speed bottlenecks.

## Posts

**[Qwen 3.8 27B is excellent, but it defaults to wildly overthinking things](https://simonwillison.net/2026/Aug/16/qwen-38-27b/)** · [Source](https://simonwillison.net/2026/Aug/16/qwen-38-27b/)
Simon runs the new **Apache 2 licensed, 27B vision-capable model** locally using LM Studio and `llama-server` on his M5 Max MacBook Pro and a DGX Spark. While the model excels at **vision bounding boxes**, driving local **coding agent loops** with Pi, and writing custom Python utilities, its default **xhigh reasoning effort** leads to spectacular over-thinking—such as taking **21 minutes and 22,276 reasoning tokens** to draw a pelican SVG, or automatically building custom canvas mockups just to demo a bounding box tool. Fortunately, he benchmarks a massive **72% performance boost** on his local setup by running the server with speculative drafting via **Multi-Token Prediction (MTP)**.

**[Markdown SVG upgrades](https://simonwillison.net/2026/Aug/16/markdown-svg-upgrades/)** · [Source](https://simonwillison.net/2026/Aug/16/markdown-svg-upgrades/)
Simon updates his in-browser `markdown-svg-renderer` tool, which is a neat utility designed for rendering and sharing Markdown transcripts containing inline SVG blocks. The big addition is a new **"MP4" tab**. The browser-based tool scans SVGs for animations, estimates the loop duration, renders the frames, and then spins up **`ffmpeg.wasm` compiled to WebAssembly** to compile those frames into an MP4 video entirely on the client side. This clever, serverless implementation makes it easy to share animated SVG designs on social media and other platforms that lack native SVG support.

**[Quoting Dario Amodei](https://simonwillison.net/2026/Aug/16/dario-amodei/)** · [Source](https://simonwillison.net/2026/Aug/16/dario-amodei/)
Simon highlights Anthropic CEO Dario Amodei's sharp take on the public's negative view of artificial intelligence. Amodei argues that the industry's bad reputation isn't caused by AI leaders warning of existential threats, but is instead a **decades-long "crisis of trust"** in large institutions, governments, and tech companies. Rather than attempting glitzy marketing campaigns or making clichéd claims about curing cancer, Amodei asserts that the only way to build trust is to **actually deliver on the promises** and build AI that benefits the world.

## Project Pulse
We are seeing a beautiful, tight feedback loop between Simon's open-source tooling and his local model experimentation. The over-engineered, highly artistic animated SVGs generated during Qwen's reasoning cycles served as the perfect real-world edge cases to motivate and test today's browser-based `ffmpeg.wasm` WebAssembly upgrades to his `markdown-svg-renderer`.

***

📊 I can compile a structured summary comparing Qwen 3.8's performance benchmarks and generation times with and without reasoning enabled to help you decide how to configure it on your own local hardware.