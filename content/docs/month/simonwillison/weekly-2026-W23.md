---
title: Week 23 Summary
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["anthropic", "datasette", "artificial intelligence", "sql", "sqlite", "ai", "sandboxing", "open-source", "python", "security", "llms", "prompt-injection", "tools", "ai-assisted-programming", "microsoft", "webassembly", "coding-agents", "llm-pricing", "google", "ai-ethics", "agentic-engineering", "generative-ai", "ladybird"]
---

# Simon Willison — Week of 2026-05-29 to 2026-06-05

## Highlight of the Week
The single most impactful update this week is the release of Datasette 1.0a31, which marks a massive paradigm shift by introducing UI support for executing write queries directly against the database. By allowing developers with the right permissions to set up templated insert, update, and delete operations as "stored queries," Simon is aggressively evolving Datasette from a purely read-only tool into one that embraces secure data mutation.

## Key Posts
**Running Python ASGI apps in the browser via Pyodide + a service worker**
Guided by Claude Opus 4.8, Simon successfully experimented with transitioning Datasette Lite's browser architecture from Web Workers to Service Workers. The older Web Worker approach suffered from JavaScript execution issues that broke inline scripts and numerous Datasette plugins. By shifting to service workers to run ASGI apps entirely in the browser, he has paved the way for a major architectural upgrade that maintains full plugin compatibility. 

**Microsoft’s new MAI models**
Simon dissected the surprise release of Microsoft's new MAI text models: the 35B parameter MAI-Thinking-1 and the 5B parameter MAI-Code-1-Flash. He was particularly impressed that the 35B reasoning model reportedly outperforms Sonnet 4.6 in human evaluations, but the most significant industry takeaway is Microsoft's claim that these models were trained entirely on "clean and commercially licensed data". This signals a potentially massive shift toward highly capable code models built without relying on controversial, unlicensed web scraping.

**Uber Caps Usage of AI Tools Like Claude Code to Manage Costs**
Examining the enterprise economics of token-burning developer tools, Simon analyzed Uber's decision to cap employee spending on agentic tools like Claude Code and Cursor to $1,500 per tool per month. He calculates that maxing out two of these tools would cost roughly $36,000 annually, framing this as an 11% premium on the $330,000 median compensation for an Uber software engineer. Simon praises this limit as a highly rational cost-management policy compared to gamified usage leaderboards.

**Hackers Simply Asked Meta AI to Give Them Access to High-Profile Instagram Accounts. It Worked**
Highlighting a staggering security oversight, Simon commented on attackers who successfully bypassed Instagram's account recovery by merely instructing Meta's AI support bot to link a new email address. He frames this not just as a prompt injection vulnerability, but as a profound architectural failure where an AI was given the power to fast-forward through secure operational workflows. It serves as a blunt warning to developers to never wire LLM-driven support bots to execute one-shot account takeovers.

**Quoting Andreas Kling**
Simon highlighted a major shift in open-source maintainership triggered by Andreas Kling's announcement that the Ladybird browser will no longer accept public pull requests. Generative AI has effectively decoupled the size of a code patch from the human effort required to create it, destroying the traditional open-source proxy where a large patch automatically implies good faith. Consequently, projects must now shift their focus to strict human accountability to ensure contributors take full responsibility for AI-generated code entering a codebase.

## Project Updates
This was a prolific week for tool-building, headlined by the release of Datasette 1.0a31 which finally allows users to run write queries and save templated operations against their databases. Simon also released a burst of alphas focused on sandboxing, including `datasette-agent-micropython 0.1a0` and `micropython-wasm` (0.1a0 and 0.1a1), which bundle a customized WebAssembly build of MicroPython to securely execute GPT-5.5 generated code locally. Additionally, he published `markdown-svg-renderer` for toggling between rendered SVGs and raw code, and built a desktop prototype called "Pasted File Editor" with Codex that automatically converts massive text pastes into file attachments.

## Themes
A dominant theme this week is the critical necessity of secure LLM execution, seen in Simon's exploration of Anthropic's product sandboxing, his investigation into the `pydantic-monty` Rust constraints, and his own active development of `micropython-wasm`. Simultaneously, Simon heavily explored the cultural and ethical friction of the AI transition, balancing the existential threat of system incoherence caused by fast-moving auto-generated code with the severe human toll driving developers like Chad Whitacre offline.