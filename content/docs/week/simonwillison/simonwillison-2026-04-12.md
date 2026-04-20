---
title: 2026-04-12
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["mlx", "gemma", "speech-to-text", "uv"]
---

# Simon Willison — 2026-04-12

## Highlight
Simon shares a highly practical, single-command recipe for running local speech-to-text transcription on macOS using the Gemma 4 model and Apple's MLX framework. It is a prime example of his ongoing exploration into making local, multimodal LLMs frictionless and accessible using modern Python packaging tools like `uv`.

## Posts

**[Gemma 4 audio with MLX]** · [Source](https://simonwillison.net/2026/Apr/12/mlx-audio/#atom-everything)
Thanks to a tip from Rahim Nathwani, Simon demonstrates a quick `uv run` recipe to transcribe audio locally using the 10.28 GB Gemma 4 E2B model via `mlx-vlm`. He tested the pipeline on a 14-second voice memo, and while it slightly misinterpreted a couple of words (hearing "front" instead of "right"), Simon conceded that the errors were understandable given the audio itself. The post highlights how easy it has become to test heavyweight, local AI models on Apple Silicon without complex environment setup.

## Project Pulse
Simon continues to heavily leverage Astral's `uv` tool to create reproducible, one-liner sandbox experiments for local AI, this time extending his MLX explorations into multimodal audio.