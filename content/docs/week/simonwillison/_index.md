---
title: Simon Willison
weight: 16
bookCollapseSection: true
weekly_summary_date: '2026-09-13'
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "3d modeling", "coding agents", "gpt-6 astra", "cybersecurity", "software engineering", "recursive self-improvement", "webassembly", "geospatial", "web crawling", "open source", "developer tools", "python", "ai agents", "generative ai", "open science", "blender", "mobile development", "datasette", "software security"]
---

# Simon Willison — Week of 2026-09-05 to 2026-09-11

## Highlight of the Week
Shopify's decision to shift away from React Native back to native iOS and Android codebases highlights how AI coding agents are fundamentally reshaping software architecture decisions. By leveraging AI agents for cross-platform implementation, code translation, and testing, Shopify demonstrated that dual-platform maintenance overhead can now be neutralized by automated tooling. This shift signals a major trend where developers can choose native platforms without paying the traditional double-maintenance penalty.

## Key Posts
**[Native is now the future of mobile at Shopify](https://simonwillison.net/2026/Sep/10/shopify-react-native/)** · [Source](https://shopify.engineering/back-to-native)
Simon highlights Shopify’s engineering transition from React Native back to separate Swift and Kotlin codebases after four years of cross-platform development. The move is driven by AI agents taking over cross-platform translation, testing, and code review, eliminating the friction of maintaining two separate native implementations. Simon notes this reflection demonstrates how agentic workflows are actively redefining long-standing software architectural trade-offs.

**[Datasette 1.0a39 and 0.65.4 security releases](https://simonwillison.net/2026/Sep/11/datasette-security/)** · [Source](https://simonwillison.net/2026/Sep/11/datasette-security/)
Simon and co-maintainer Alex Garcia conducted a comprehensive security audit of Datasette using frontier models like Claude Fable 5.1, GPT-5.6, and GPT-6 Astra to find subtle authorization bugs. They established a split pair-programming workflow where one developer wrote automated failing tests while the other implemented fixes based on model findings. Simon emphasizes that incorporating automated LLM security audits has now become a permanent feature of Datasette's ongoing development.

**[On the Navier–Stokes Millennium Prize Problem](https://simonwillison.net/2026/Sep/8/on-navier-stokes/)** · [Source](https://openai.com/index/navier-stokes-solution/)
Simon details OpenAI’s massive agentic run that resolved the Navier–Stokes problem using 4.9 million messages verified via Lean, alongside the surrounding priority controversy. He raises critical ethical questions around "rumour as an exploit," where whispers of academic progress can trigger millions in compute deployment to scoop human researchers. The post also addresses privacy concerns regarding how AI labs leverage user session data to train models that later replicate user discoveries.

**[Using Blender with coding agents on macOS](https://simonwillison.net/2026/Sep/5/blender-coding-agents-macos/)** · [Source](https://simonwillison.net/2026/Sep/5/blender-coding-agents-macos/)
Simon demonstrates how local coding agents in ChatGPT Codex can programmatically control desktop applications like Blender via its native Python API on macOS. Through natural language prompting, the agent built a 3D scene of a pelican riding a bicycle, mirroring OpenAI's GPT-6 Astra launch video benchmark. This exploration illustrates how conversational agents can bridge natural language with complex desktop application APIs.

**[There’s No Limit to How Bad Code Can Get](https://simonwillison.net/2026/Sep/6/theres-no-limit-to-how-bad-code-can-get/)** · [Source](https://lobste.rs/s/rfn2mn/there_s_no_limit_how_bad_code_can_get#c_8kdtaw)
Simon warns against greenfield rewrites when technical debt accumulates, arguing that starting from scratch is almost always a trap that leaves teams managing two production systems. Referencing Zach Kehs's insights on unbounded code complexity, he contrasts software with physical buildings, noting that code can get infinitely worse without hitting a physical ceiling. Simon advocates instead for shoring up legacy systems through automated testing and targeted refactoring.

## Project Updates
Simon maintained a fast release pace across his open-source ecosystem, issuing `llm 0.34` and `llm 0.35` to add response duration tracking and support for OpenAI's GPT-6 Astra, alongside plugin updates for Anthropic (`llm-anthropic 0.28`) and OpenRouter (`llm-openrouter 0.7.1`). On the Datasette side, he shipped dual security releases (`Datasette 1.0a39` and `0.65.4`) following an AI-assisted audit, along with updates to `datasette-publish-fly 1.4` and `github-to-sqlite 2.9.1`. He also built single-page browser utilities including a WebAssembly video compressor and a `.blend` 3D viewer.

## Themes
A central thread this week is how AI coding agents are shifting developer work toward high-level system judgment—whether driving native mobile architecture decisions at Shopify, auditing Datasette security vulnerabilities, or vibe-coding single-page WebAssembly tools. At the same time, Simon closely tracked the disruptive ethical and systemic side effects of AI, including academic scoop risks in open science, accelerated exploit development, and massive DNS scam networks. Throughout, he emphasized that while AI agents collapse implementation timelines, human expertise in architecture, testing, and boundary defense remains vital.