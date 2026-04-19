---
title: 2026-04-13
weight: 5
categories: ["Social Media", "Tech"]
tags: ["artificial intelligence", "developer tools", "cloud computing", "open source models"]
---

{{< sources "company-twitter" >}}

# Company@X — 2026-04-13

## Signal of the Day
Hugging Face introduced "Buckets," a new S3-like object storage feature designed to bypass Git's version control overhead for massive AI datasets. This feature launched alongside a 7TB release of raw rephrased data from the FinePhrase project, signaling a necessary infrastructure shift toward fast, mutable object storage for managing large-scale AI artifacts.

## Key Announcements

**Cursor** · [Source](http://twitter.macworks.dev/cursor_ai/status/2043798784367546707#m)
Cursor shipped a wave of quality-of-life and performance improvements for Cursor 3, most notably allowing users to split agents for multi-tasking, similar to a traditional terminal layout. The update also enables developers to explicitly explicitly view and change which branch a cloud agent runs on and adds file include/exclude filters to workspace search. On the performance side, Cursor claims an 87% reduction in dropped frames when streaming large file edits, alongside more reliable voice inputs via a new hold-to-talk shortcut.

**Google Cloud** · [Source](http://twitter.macworks.dev/GoogleCloudTech/status/2043720872758837445#m)
Google Cloud launched a new Developer Knowledge API and an accompanying Model Context Protocol (MCP) server. These tools provide a canonical, machine-readable gateway to Google's official developer documentation, allowing developers to directly pipe this corpus data into their AI environments to improve answer quality. This demonstrates a growing trend of cloud providers formalizing how external AI agents securely ingest and retrieve their technical documentation.

**Hugging Face** · [Source](http://twitter.macworks.dev/ClementDelangue/status/2043779449322160270#m)
Hugging Face successfully OCR'd 27,000 arXiv papers into Markdown format using an open 5B model and 16 parallel Hugging Face Jobs running on L40S GPUs. The entire pipeline processed the massive dataset in approximately 29 hours without any crashed jobs, costing only $850 total. This newly processed dataset now powers the platform's "Chat with your paper" feature, highlighting the increasing cost-efficiency of using smaller, specialized open models for bulk data extraction workloads.

**Google DeepMind** · [Source](http://twitter.macworks.dev/tulseedoshi/status/2043705774308733131#m)
Gemini 3.1 Flash Live (Thinking) has secured the top position on the Sierra platform's tau-Voice Leaderboard. This leaderboard specifically benchmarks the performance of realtime voice agents, indicating that Gemini's latest iteration offers highly competitive latency and reasoning capabilities for voice-first conversational applications.

## Also Noted
- **Hugging Face / Pollen Robotics** ([Source](http://twitter.macworks.dev/thorwebdev/status/2043707152699740383#m)): Gemini Live has been natively integrated into the Reachy Mini conversation application through a partnership involving Hugging Face and Pollen Robotics.
- **Relativity Space** ([Source](http://twitter.macworks.dev/relativityspace/status/2043763368977449093#m)): The company successfully completed a 526.5-second endurance demonstration of its Aeon V engine while heavily advancing stage 1 and stage 2 tank integration at its manufacturing facilities.
- **Sequoia Capital** ([Source](http://twitter.macworks.dev/zefi/status/2043690019441741916#m)): Sequoia is launching "Members of Technical Staff," a new European event series focused on consequential technology shifts, starting with an appearance by Revolut's CTO Vlad Yatsenko.
- **Gemma Open Models** ([Source](http://twitter.macworks.dev/outsource_/status/2043710372176122085#m)): A modified, uncensored "SuperGemma4-26B" model is trending on Hugging Face, optimized to run locally on 16GB GPUs while resolving previous tool-calling and tokenizer friction.