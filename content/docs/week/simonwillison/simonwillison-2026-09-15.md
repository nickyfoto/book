---
title: 2026-09-15
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "gemini", "web audio api", "websockets", "ai-assisted programming"]
---

# Simon Willison — 2026-09-15

## Highlight
Google released two new speech-to-speech models—**Gemini 3.8 Live** and **Extended Thinking**—and Simon used **GPT-6 Astra Extra High** to build a zero-dependency HTML browser UI for testing them. This post showcases how AI-assisted programming can immediately turn raw API documentation into functional, single-file developer tools.

## Posts

**[Gemini Live audio](https://simonwillison.net/2026/Sep/15/gemini-live/)** · [Source](https://simonwillison.net/2026/Sep/15/gemini-live/)
Simon explores Google's newly released **Gemini 3.8 Live** and **Gemini 3.8 Live Extended Thinking** speech-to-speech models. By feeding the API documentation to GPT-6 Astra Extra High, he generated a web UI—**[Gemini Live audio](https://tools.simonwillison.net/gemini-live)**—that lets users select voice presets, enter custom system prompts, and hold browser-based voice conversations with live interruption capabilities. The underlying **[implementation](https://github.com/simonw/tools/blob/main/gemini-live.html)** uses zero third-party libraries, connecting directly via WebSockets and leveraging the browser's **Web Audio API AudioContext** for raw capture and playback. It serves as a practical demonstration of rapid prototyping around streaming multimodal LLM APIs.

## Project Pulse
Today highlights Simon's signature pattern of combining AI code generation with browser-native APIs to publish lightweight, library-free HTML tools the same day new LLM features drop.

---
💡 Would you like me to turn this digest into an Audio Overview or a Study Guide on WebSockets and Web Audio API integration patterns?