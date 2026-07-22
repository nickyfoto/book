---
title: 2026-07-12
weight: 8
categories: ["Blogs"]
tags: ["markdown", "large language models", "presentations", "automation"]
---

# Engineering Reads — 2026-07-12

## The Big Idea
Simple, text-driven abstractions—whether small language models or plain-text presentation frameworks—are quietly replacing complex, manual workflows to drastically reduce cognitive burden. Engineers are increasingly using low-overhead tools to solve high-friction problems, favoring lightweight automation over brittle procedural code or tedious manual curation.

## Deep Reads

**[My Macstock X Markdown Presentation](https://brett.trpstra.net/link/535/17376990/my-macstock-x-markdown-presentation)** · Brett Terpstra
The core claim here is that technical presentations can be effectively built and delivered using pure text workflows, treating slide decks as code rather than design documents. By combining Markdown with Reveal.js and Multiplex, the author created a system where the audience can follow along on their own devices. This technical mechanism removes the friction of traditional WYSIWYG presentation software while enabling viewers to interactively bookmark slides, click links, and copy code blocks in real time. While the author notes that some specific formatting for Reveal.js is required, the underlying presentation source remains entirely readable as plain text. Engineers who prefer text-based toolchains or want to make their technical talks highly accessible and interactive for attendees should study this setup.

**[Small models can solve big problems](https://blog.jonudell.net/2026/07/12/small-models-can-solve-big-problems/)** · Jon Udell
The central insight is that small, low-powered language models are now cheaper and more effective than traditional procedural code for fuzzy classification tasks. The author details replacing brittle regexes and hardcoded word lists with Anthropic's Haiku model to categorize community calendar events, solving what was previously an unsustainable cognitive burden for manual curators. Operating at less than a penny a day, this system fundamentally shifts the technical approach from writing procedural logic to implementing an "agent in the loop" workflow where humans only review edge cases. Notably, the author observes that the built-in manual override mechanism is rarely used because the model's baseline mappings are highly accurate out of the box. Any engineer currently maintaining complex, regex-heavy pipelines for simple data sorting should read this as a blueprint for deploying lightweight, cost-effective AI automation.

**[200,000 Subscribers](https://sebastianraschka.com/blog/2026/ahead-of-ai-reached-200000-subscribers.html)** · Sebastian Raschka
This piece is a brief milestone announcement celebrating the "Ahead of AI" newsletter reaching 200,000 subscribers. While this short note does not detail new technical architectures or mechanisms, it highlights the immense and growing scale of the machine learning engineering community. The post serves purely as an acknowledgment of the milestone without diving into tradeoffs or disagreements with conventional wisdom. Engineers tracking industry trends and the reach of prominent AI researchers will find this an interesting data point regarding the current appetite for curated technical content. 

## Connecting Thread
The overarching theme across the technical reads is the elimination of tedious manual labor through better, lower-level tooling. Whether it is escaping the trap of rigid slide-deck software by treating presentations as executable text, or discarding brittle procedural regex for inexpensive LLM classification, these practitioners are leveraging scalable, text-based solutions to streamline everyday workflows.