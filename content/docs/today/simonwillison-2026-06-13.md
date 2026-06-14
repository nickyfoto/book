---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["pyodide", "webassembly", "anthropic", "llms", "python"]
---

# Simon Willison — 2026-06-13

## Highlight
The most substantive update today explores the major Pyodide 314.0 release that finally allows publishing WASM wheels directly to PyPI. This eliminates a massive bottleneck for the Python-in-the-browser ecosystem, and Simon immediately proved its value by using AI tools to package and ship a C++ based WebAssembly experiment.

## Posts

**[Publishing WASM wheels to PyPI for use with Pyodide](https://simonwillison.net/2026/Jun/13/publishing-wasm-wheels/#atom-everything)** 
With Pyodide 314.0, developers can now publish Python packages built for Pyodide directly to PyPI, removing a major hurdle where maintainers previously had to manually review and host over 300 packages themselves. To celebrate, Simon used Codex and GPT-5.5 xhigh to package his experimental C++ Luau WebAssembly project, successfully building and deploying it via GitHub Actions. True to form, he then used ChatGPT to draft a BigQuery SQL query to explore PyPI's dataset, discovering that 28 packages are already utilizing the new `pyemscripten_202*_wasm32` tags. 

**[Statement on the US government directive to suspend access to Fable 5 and Mythos 5](https://simonwillison.net/2026/Jun/13/us-government-directive-to-suspend-access/#atom-everything)** 
Simon highlighted what he called a "nuts" development in AI regulation: a US government export control directive forcing Anthropic to suspend access to Fable 5 and Mythos 5 for all foreign nationals due to national security concerns. The government claims to have discovered a "jailbreak" method—essentially asking the model to read a codebase and fix flaws—but Anthropic countered that this is a minor vulnerability whose capabilities are matched by models like GPT-5.5. Simon noted that, as of his writing, he still had access to Fable through claude.ai and his Claude Code CLI tool.

**[luau-wasm 0.1a0](https://simonwillison.net/2026/Jun/13/luau-wasm/#atom-everything)** 
A brief release note announcing version 0.1a0 of his newly minted `luau-wasm` project. This short post directs readers to his longer write-up about Pyodide and PyPI for the full details behind the release.

## Project Pulse
Simon's workflow is heavily reflecting the power of combining AI-assisted programming with bleeding-edge web tooling. He effectively leveraged Codex and GPT-5.5 xhigh to breeze past the historically complex packaging steps of compiling C++ to WebAssembly, quickly turning an old research spike into a fully distributed Pyodide package.