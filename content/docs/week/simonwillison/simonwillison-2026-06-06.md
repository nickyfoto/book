---
title: 2026-06-06
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["security", "sandboxing", "webassembly", "python", "llms"]
---

# Simon Willison — 2026-06-06

## Highlight
The single most substantive piece today is Simon's deep dive into building a safe WebAssembly sandbox for Python, tackling the highly risky business of executing untrusted, AI-generated code. It is a perfect example of using AI coding assistants to quickly prototype complex C and WASM integrations to solve a critical developer tooling problem.

## Posts

**[Running Python code in a sandbox with MicroPython and WASM](https://simonwillison.net/2026/Jun/6/micropython-in-a-sandbox/#atom-everything)** · Source
Simon tackles the security risks of running fully privileged plugin code in Python applications by embedding MicroPython within a WebAssembly environment. Using AI assistants like GPT-5.5 Pro, Codex Desktop, and Claude, he rapidly prototyped `micropython-wasm`, an alpha package that maintains persistent interpreter state and strictly controls file, network, and host function access. This vibe-coded sandbox is already powering a new code execution plugin for Datasette Agent, demonstrating a highly practical approach to executing AI-generated code safely without compromising the host system.

**[OpenAI Help: Lockdown Mode](https://simonwillison.net/2026/Jun/6/openai-help-lockdown-mode/#atom-everything)** · Source
OpenAI officially rolled out Lockdown Mode, a deterministic security mechanism that prevents prompt injections from exfiltrating sensitive data via outbound network requests. Simon points out that cutting off this exfiltration vector solves the most restrictive leg of the "Lethal Trifecta" (private data access, untrusted content exposure, and a method to transmit stolen data) without making the LLM less useful. While the feature is highly effective, its existence serves as a reminder that default ChatGPT settings still lack robust protection against determined exfiltration attacks.

**[micropython-wasm 0.1a2](https://simonwillison.net/2026/Jun/6/micropython-wasm/#atom-everything)** · Source
Shortly after announcing his WebAssembly sandbox experiments, Simon shipped version 0.1a2 of the `micropython-wasm` package. This incremental release adds a convenient command-line interface, allowing developers to easily spin up and test the MicroPython sandbox environment directly from the terminal using `uvx`, without needing a traditional installation. 

## Project Pulse
Simon's focus today is heavily centered on the security implications of AI ecosystems, bridging the gap between defensive platform features like OpenAI's Lockdown Mode and proactive, open-source developer tooling to tightly sandbox AI agent execution.