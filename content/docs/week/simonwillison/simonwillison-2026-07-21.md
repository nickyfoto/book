---
title: 2026-07-21
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["prompt engineering", "coding agents", "local llms", "anthropic", "macos"]
---

# Simon Willison — 2026-07-21

## Highlight
Today’s must-read is Simon's annotated transcript of his fireside chat with Anthropic's Claude Code team. It is packed with counterintuitive insights for AI practitioners, revealing how frontier models like Fable 5 have fundamentally shifted prompting best practices and how Anthropic internally relies on coding agents to merge 65% of their product engineering PRs.

## Posts

**[A Fireside Chat with Cat and Thariq from the Claude Code team](https://simonwillison.net/2026/Jul/21/cat-and-thariq/#atom-everything)**
Simon shares the video and an edited, highlighted transcript of his recent AI Engineer World's Fair session with Anthropic's Cat Wu and Thariq Shihipar. The conversation is a goldmine for prompt engineering, notably revealing that adding examples to system prompts actually degrades performance on newer models like Fable 5, prompting Anthropic to shrink Claude Code's system prompt by 80% and remove hard "do not do this" constraints. It also explores how their collaborative Slack integration, Claude Tag, lands over half of their product PRs, and how their rigorous "ant fooding" culture ensures features only ship if they hit strict internal user retention metrics. Finally, they emphasize relying on Claude Code's "auto mode," which utilizes a Sonnet classifier to dynamically handle permissions, securely sandbox network requests, and effectively mitigate prompt injection risks. 

**[Nativ: Run AI models locally on your Mac](https://simonwillison.net/2026/Jul/21/nativ/#atom-everything)**
Simon highlights a new macOS desktop application by Prince Canuma, the developer behind the MLX-VLM Python library. Nativ wraps MLX to offer both a user-friendly chat interface and a localhost API server for accessing local models, drawing comparisons to tools like LM Studio. Simon particularly appreciated that the app seamlessly detected and loaded MLX models he already had stored in his local Hugging Face cache directory.

## Project Pulse
Today's updates perfectly encapsulate Simon's dual focus in the AI space: extracting advanced team integration and prompting strategies from the creators of frontier coding agents, while simultaneously championing local, open-source macOS tools for running models securely on personal hardware.