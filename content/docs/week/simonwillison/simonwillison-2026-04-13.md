---
title: 2026-04-13
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "rust", "webassembly", "ai-assisted-programming"]
---

# Simon Willison — 2026-04-13

## Highlight
Today's standout is Simon's hands-on research into the newly released `servo` crate using Claude Code. It perfectly captures his classic approach to AI-assisted exploration, demonstrating how quickly you can prototype a Rust CLI tool and evaluate WebAssembly compatibility with an LLM sidekick.

## Posts

**[Exploring the new servo crate]** · [Source](https://simonwillison.net/2026/Apr/13/servo-crate-exploration/#atom-everything)
Following the initial release of the embeddable `servo` browser engine on crates.io, Simon tasked Claude Code for web with exploring its capabilities. The AI successfully generated a working Rust CLI tool called `servo-shot` for taking web screenshots. While compiling Servo itself to WebAssembly proved unfeasible due to its heavy use of threads and SpiderMonkey dependencies, Claude instead built a playground page utilizing a WebAssembly build of the `html5ever` and `markup5ever_rcdom` crates to parse HTML fragments.

**[Quoting Bryan Cantrill]** · [Source](https://simonwillison.net/2026/Apr/13/bryan-cantrill/#atom-everything)
Simon highlights a sharp critique from Bryan Cantrill on the peril of LLMs and their inherent lack of laziness. Because generating code costs an LLM nothing, they will happily build massive, clunky "layercakes of garbage" rather than optimizing for future maintenance. Cantrill argues that human laziness is actually a vital necessity, as our finite time forces us to develop crisp, efficient abstractions.

**[Quoting Steve Yegge]** · [Source](https://simonwillison.net/2026/Apr/13/steve-yegge/#atom-everything)
This post pulls a provocative excerpt from Steve Yegge comparing Google's internal AI adoption footprint to that of tractor company John Deere. Yegge claims both companies sit at roughly 20% agentic power users, 60% chat tool users, and 20% outright refusers. He further argues that an extended 18-month hiring freeze has left Google completely insulated from outside engineering talent who might point out how mediocre and far behind the organization has fallen.

## Project Pulse
A clear overarching theme today is the structural and practical impact of AI on software engineering. While Cantrill warns against the bloated code generation of LLMs and Yegge critiques Google's sluggish agentic AI adoption, Simon grounds the commentary by actively demonstrating how to effectively use AI tools like Claude Code to accelerate research and CLI development in the Rust ecosystem.