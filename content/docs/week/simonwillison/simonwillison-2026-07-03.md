---
title: 2026-07-03
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "prompt-engineering", "open-source", "datasette-lite", "generative-ai"]
---

# Simon Willison — 2026-07-03

## Highlight
Simon's practical prompt engineering tip for Claude Code is a brilliant way to preserve expensive API tokens while maintaining high-quality output. By directing the top-tier Claude Fable model to act as a manager that delegates implementation to smaller models, he showcases a very pragmatic approach to operating AI coding agents locally.

## Posts

**[Fable’s judgement](https://simonwillison.net/2026/Jul/3/judgement/#atom-everything)**
Following a tip from the Claude Code team at the AI Engineer World's Fair, Simon explores telling Claude Fable to use its own judgement rather than micro-managing its behavior. He applies this by prompting Claude Code to spawn subagents running lower-power models (like Sonnet or Haiku) for mundane coding tasks, reserving Fable for high-level design and review. The result is a highly effective workflow that saves on valuable tokens ahead of looming price increases.

**[Open Source AI Gap Map](https://simonwillison.net/2026/Jul/3/open-source-ai-gap-map/#atom-everything)**
Current AI recently launched a comprehensive map indexing the state of open source AI, detailing hundreds of tools, models, and datasets. Simon highlights that the underlying data for this massive undertaking is available on GitHub under an MIT license. In classic form, he demonstrates how to use Datasette Lite to load and explore their tracking CSV of over 16,000 GitHub repositories directly in the browser without writing any code.

**[Quoting Josh W. Comeau](https://simonwillison.net/2026/Jul/3/josh-w-comeau/#atom-everything)**
Simon links to developer educator Josh W. Comeau, who reports a stark 50%+ drop in coding course sales. The suspected culprit is a "double whammy" of developers fearing for their jobs and LLMs providing free, personalized tutoring. Simon notes the broader trend among creators feeling the pinch as AI models slurp up their work without consent or compensation.

**[June 2026 newsletter](https://simonwillison.net/2026/Jul/3/june-newsletter/#atom-everything)**
Simon’s monthly sponsors-only newsletter is out, covering major developments like Claude Fable 5, GLM-5.2 as the new top open-weights model, and new Datasette Apps. Non-sponsors can preview the format by checking out the now-public May edition.

## Project Pulse
The intersection of AI workflows and practical data exploration remains Simon's strongest theme right now, as he actively optimizes his LLM developer setups (Claude Code) while continuing to champion Datasette Lite as the absolute quickest way to interrogate newly released datasets.