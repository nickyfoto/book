---
title: 2026-05-29
weight: 2
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "autonomous agents", "hardware"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-29

## Watch First
**[Reverse engineering a Viking VOIP phone protocol with Claude Code — Boris Starkov, Eleven Labs](https://www.youtube.com/watch?v=V-L0INGTEOg)**
An impressive, high-signal demonstration of utilizing an autonomous agent (Claude Code) for hardware reverse-engineering, showing how the developer set up a proxy between a Windows VM and a legacy VOIP phone so the agent could sniff traffic, brute-force the encryption checksums, and rewrite the device's persistent memory.

## Highlights by Theme

### Developer Tools & Platforms
**[The Download: Microsoft Build 2026, Copilot remote control, Deno 2.8, Bun & more](https://www.youtube.com/watch?v=FiGYvsxtNAg)** on the GitHub channel covers Bun rewriting its core from Zig to Rust to systematically eliminate memory bugs. The rewrite relies entirely on synchronous Rust to avoid architectural complexities and actually shrinks binary sizes by up to 8MB. Over on the Visual Studio Code channel, developers are getting native integration for third-party AI models (Claude and Codex) directly in the editor, as well as a new "Chronicle" feature that logs chat metadata to a local SQLite database, finally making previous agent sessions queryable across repos. Finally, **[How are coding agents changing software engineering?](https://www.youtube.com/watch?v=blgUmyMiROI)** from Cursor offers empirical data on AI coding habits, showing that input context caching is now dominating token usage, while also warning that "mega PRs" over 1,000 lines are sharply rising—a trend that engineering teams will need to treat as a serious technical liability over time.

### AI & Machine Learning
**[Why your agents need decision traces, not just documents — Zach Blumenfeld, Neo4j](https://www.youtube.com/watch?v=B9h9ovW5H9U)** is an excellent technical talk on moving beyond simple vector RAG by using "context graphs" that embed past decision traces—allowing agents to base responses on structured historical outcomes rather than just raw semantic document matches. In the desktop automation space, **[Windows Computer Use and mobile access for Codex](https://www.youtube.com/watch?v=MPIAB-8VmCo)** from OpenAI shows the Codex app gaining the ability to hijack the Windows cursor to execute multi-step GUI tasks in the background, allowing developers to monitor the progress from a mobile device. In **[How to Build a Video Search AI Agent with NVIDIA VSS Skills and NemoClaw](https://www.youtube.com/watch?v=SzvKhAs0XJ8)**, NVIDIA demonstrates using NemoClaw to orchestrate "fusion search" across video streams, utilizing Vision-Language Models to accurately match physical actions with objects without requiring fragile manual glue code. Lastly, in **[Gemini co-leads on project origins and what's next](https://www.youtube.com/watch?v=8hfpLa5wPGo)**, the Google DeepMind team discusses the difficulty of effectively evaluating multi-modal "world models" and the ongoing optimization of knowledge distillation to pack more intelligence into smaller parameter footprints.

### Hardware & Infrastructure
**[Private, Local AI CUDA Coding Assistance on DGX Spark](https://www.youtube.com/watch?v=Q9mA9O_bkew)** addresses the need for local AI inference in highly secure or proprietary codebases by running the Nsight Copilot model locally on DGX Spark instances equipped with 128GB of memory. Google Cloud's **[[Demo] High Resolution Network Telemetry: Data Center Network](https://www.youtube.com/watch?v=jah2yf2rARg)** cuts through standard monitoring noise by demonstrating that typical one-second telemetry averages mathematically erase the actual network microbursts that cause 100% saturation, which are the real culprits behind GPU stalls and straggler issues in ML training clusters.

### Everything Else
In **[Reachy Mini: the $300 open source robot you can actually hack — Andres Marafioti, Hugging Face](https://www.youtube.com/watch?v=0jeZfjJMfmo)**, Hugging Face demonstrates an affordable, fully hackable robot utilizing a heavily optimized Qwen 3 TTS model; by swapping to a static KV cache and utilizing CUDA graph captures, they managed to drop first-token generation latency under 200ms for realtime voice interaction. **[The forgotten developer who saved JavaScript...](https://www.youtube.com/watch?v=JfPWbttemYE)** provides an entertaining history lesson on Jeremy Ashkenas, whose foundational work on Underscore, CoffeeScript, and Backbone defined the modern front-end ecosystem before being subsumed by standards and newer UI frameworks. Finally, for those wanting to launch startups simply because they enjoy writing code, **[Work for Someone Else](https://www.youtube.com/watch?v=AxwJf1xi3j4)** offers blunt, pragmatic advice: stick to being an individual contributor, because running a business will rapidly replace your programming time with HR, compliance, and endless meetings.