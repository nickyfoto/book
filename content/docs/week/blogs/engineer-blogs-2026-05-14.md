---
title: 2026-05-14
weight: 3
categories: ["Blogs"]
tags: ["artificial intelligence", "software engineering", "continuous integration", "local inference"]
---

# Engineering Reads — 2026-05-14

## The Big Idea
The integration of AI into software engineering requires a deliberate architecture of boundaries—treating LLMs as predictable functions rather than autonomous agents, preserving human review for skill growth, and aggressively isolating non-determinism across our systems.

## Deep Reads

**[Bliki: Interrogatory LLM](https://martinfowler.com/bliki/InterrogatoryLLM.html)** · Martin Fowler
Fowler proposes using LLMs to reverse the standard prompting dynamic: instead of feeding the model context, prompt the LLM to interview a human expert one question at a time to build context. This approach can generate comprehensive design documents or verify existing complex specifications by extracting information from stakeholders who find writing difficult. The resulting text may bear the distinct cadence of AI generation, but capturing the raw domain knowledge outweighs stylistic drawbacks. This is a pragmatic read for technical leads and product managers struggling to pull coherent specifications out of stakeholders' heads.

**[Fragments: May 14](https://martinfowler.com/fragments/2026-05-14.html)** · Martin Fowler
Fowler synthesizes notes from a retreat on agentic programming, surfacing a critical insight from James Pritchard: engineers are over-using unpredictable autonomous agents when they should be using LLMs as predictable functions within defined workflows. The piece challenges conventional wisdom on legacy migration, suggesting that LLMs make raw "lift and shift" viable again (e.g., porting a 70K line GNU Cobol codebase to Rust in 3 days) as a baseline before modernizing. He also emphasizes that automating prompt and specification reviews strips humans of the opportunity to learn from AI choices, undermining long-term skill growth. System architects and senior engineers should read this to calibrate their mental models around where AI accelerates systems versus where it introduces dangerous non-determinism.

**[Amazonbot is finally respecting robots.txt](https://xeiaso.net/notes/2026/amazonbot-respecting-robots-txt/)** · Xe Iaso
In a brief dispatch, the author shares an official communication that Amazonbot will finally honor industry-standard `robots.txt` directives starting mid-2026, abandoning its previous manual request process. The notice amusingly exposes enterprise IT friction, arriving via "Outlook for Mac" complete with Exchange-specific headers and an iPhone signature. This shift resolves a longstanding annoyance for infrastructure engineers maintaining custom scraper-blocking solutions like the author's Anubis project. It is a quick, validation-inducing read for infrastructure and web engineers managing bot traffic and web scraping policies.

**[Catch Flakes On Main](https://matklad.github.io/2026/05/14/catch-flakes-on-main.html)** · matklad
Kladov outlines a mechanical habit for taming the enormous productivity drain of flaky CI tests by leveraging a merge queue. The technical mechanism is elegant: because a merge queue guarantees that every commit landing on the main branch has already passed the test suite, any subsequent redundant failure on the main branch is, by definition, a flake. By collecting these failures in a single, easily accessible list, teams can compress time, prioritize the most impactful sources of instability, and squash them without the noise of correlating genuine PR failures. Build engineers and anyone suffering from CI fatigue should read this for a highly actionable strategy to isolate non-determinism.

**[A few words on DS4](http://antirez.com/news/165)** · antirez
Sanfilippo reflects on the rapid traction of his DwarfStar 4 (DS4) project, an integration focused entirely on running the DeepSeek v4 Flash open-weights model locally. He leverages a highly asymmetric 2/8-bit quantization recipe to fit a quasi-frontier model into 96 or 128GB of RAM, achieving an experience that rivals online frontier models like Claude and GPT for serious tasks. Antirez views this as a turning point where local inference transitions from a toy to a practical tool, envisioning a future of specialized local open-weight models loaded on demand. Engineers interested in local AI infrastructure, privacy-preserving inference, and high-end hardware utilization must read this to understand the shifting boundary between cloud and local capabilities.

## Connecting Thread
The recurring thread across today's reads is the engineering effort to manage non-determinism and maintain control in complex systems. Whether it’s aggressively isolating flaky CI tests on the main branch, pulling unpredictable LLMs into strictly defined function calls rather than autonomous agents, or reclaiming local execution boundaries for frontier-grade AI, the mature engineering response to complexity is establishing rigorous, observable boundaries.