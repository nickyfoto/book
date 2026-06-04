---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "sandboxing", "webassembly", "coding-agents", "llm-pricing"]
---

# Simon Willison — 2026-06-03

## Highlight
Simon's breakdown of Uber's new $1,500 monthly cap on AI coding agents is a fascinating look at the real enterprise economics of token-burning tools. It puts a concrete dollar value on developer augmentation, framing AI spend as a direct percentage of software engineer compensation rather than just another standard SaaS subscription.

## Posts

**[Uber Caps Usage of AI Tools Like Claude Code to Manage Costs](https://simonwillison.net/2026/Jun/3/uber-caps-usage/#atom-everything)** · Source
Simon comments on a Bloomberg report that Uber is capping employee spending on agentic coding tools like Claude Code and Cursor to $1,500 per tool per month. He calculates that for two actively used tools, this translates to an annual cap of $36,000, which represents roughly 11% of the $330,000 median compensation for an Uber software engineer. Simon views this limit as a highly rational policy to manage token-burning costs, especially compared to gamified usage leaderboards, and notes that even his own heavy usage would still leave him with $500 a month to spare under this cap.

**[datasette-agent-micropython 0.1a0](https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/#atom-everything)** · Source
Simon released an alpha version of a new tool aimed at allowing Datasette Agent to safely generate and execute Python code. He notes that these early sandboxing efforts are proving highly effective, as GPT-5.5 has thus far been unable to break out of the execution environment.

**[micropython-wasm 0.1a0](https://simonwillison.net/2026/Jun/2/micropython-wasm-2/#atom-everything)** · Source
This release introduces a new sandboxing experiment that bundles a lightly customized WebAssembly build of MicroPython. It includes a wrapper specifically designed to execute code securely within the sandbox using wasmtime.

**[micropython-wasm 0.1a1](https://simonwillison.net/2026/Jun/2/micropython-wasm/#atom-everything)** · Source
A quick follow-up patch to the initial alpha, resolving specific limitations Simon encountered while trying to use the package to build his `datasette-agent-micropython` project.

## Project Pulse
Simon is heavily focused on safe code execution for LLMs today, releasing a burst of alphas centered around a WebAssembly-based MicroPython sandbox. This infrastructure is being purpose-built to empower his Datasette Agent to safely generate and run Python code locally.