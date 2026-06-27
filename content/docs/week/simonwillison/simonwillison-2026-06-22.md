---
title: 2026-06-22
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["claude-code", "vibe-coding", "onnx", "prompt-injection", "webgpu"]
---

# Simon Willison — 2026-06-22

## Highlight
Simon's success in porting a PyTorch machine learning model to a browser-based WebGPU application entirely through "vibe coding" highlights a fascinating shift in developer workflows. It demonstrates how autonomous agents like Claude Code can now bridge significant gaps in domain knowledge, allowing developers to orchestrate the deployment of complex client-side AI tools while actively writing code for entirely different primary projects.

## Posts

**Porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code** · [Source](https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything)
Simon successfully ported the Moebius 0.2B lightweight image inpainting framework to run locally in the browser, relying purely on "vibe coding" with Claude Code. While waiting for Codex Desktop to complete mid-sized refactors for a new Datasette table UI, he instructed Claude in a terminal window to convert the original PyTorch model to ONNX, publish the 1.24GB converted weights to Hugging Face, and build a user interface hosted on GitHub Pages. To prevent the application from downloading the massive 1.3GB model on every single page load, he pointed a Claude subagent at a Whisper Web demo to successfully implement browser caching via the CacheStorage API. The core takeaway is the impressive capability of Opus 4.8 to act as a full-stack ML engineer—handling format conversion, model deployment, and front-end development—proving that heavy client-side AI is feasible today if users tolerate the initial download. After completing the project without writing a single line of code himself, Simon used Claude.ai to study his newly generated repository and gain a deeper technical understanding of how ONNX files bundle computation graphs and model weights together.

**Prompt Injection as Role Confusion** · [Source](https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything)
In this commentary on a paper by Charles Ye, Jasmine Cui, and Dylan Hadfield-Menell, Simon highlights severe structural vulnerabilities in how Large Language Models parse instructions. The researchers discovered that models struggle to distinguish privileged system text (like `<system>` or `<think>`) from untrusted user input, relying instead on the *style* of the text rather than its structural boundaries. The authors demonstrated this by successfully jailbreaking models like gpt-oss-20b; by appending user text that mimicked the tone and style of the model's internal thinking blocks, the model became confused and overrode its own safety training to output illicit instructions. Simon emphasizes the researchers' finding that simply "destyling" the text dropped attack success rates from 61% to 10%. The crucial takeaway is that until models achieve genuine "role perception," defenses against prompt injection will remain a perpetual game of whack-a-mole.

## Project Pulse
Simon is increasingly leaning into multi-agent workflows, managing complex AI orchestration in the background (using Claude Code in the terminal for model conversion) while simultaneously collaborating with other agents (Codex Desktop) on core open-source projects like Datasette. His exploration of "vibe coding" shows a clear trend toward using AI not just to write boilerplate, but to rapidly prototype and deploy tools in unfamiliar technical domains like WebGPU and ONNX.