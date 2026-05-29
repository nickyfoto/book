---
title: 2026-05-23
weight: 4
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "local inference", "tech hiring", "model context protocol"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-23

## Watch First
[Your Agent Is an Infinite Canvas — RL Nabors, Dressed for Space](https://www.youtube.com/watch?v=LMbeDEQO6QM) is the most actionable talk of the day, showing developers how to move past purely text-based agent chat interfaces by serving fully interactive HTML/JS UI components directly into LLM environments via the Model Context Protocol (MCP). 

## Highlights by Theme

### Developer Tools & Platforms
In [Your Agent Is an Infinite Canvas — RL Nabors, Dressed for Space](https://www.youtube.com/watch?v=LMbeDEQO6QM) from the AI Engineer channel, Nabors explains how to build interactive "MCP apps" using HTTP transports instead of relying on clunky STDIO configurations that force users to fiddle with command line inputs. She correctly notes that current chat interfaces are the "lowest common denominator" for user experience, and demonstrates how to return sandboxed HTML/JS/CSS to agent clients while warning engineers about footguns like missing local storage capabilities and strict Content Security Policy (CSP) constraints. From the same channel, [The Missing Primitive for Agent Swarms — Lou Bichard, Ona](https://www.youtube.com/watch?v=5Sui_OnSRlY) tackles the backend infrastructure of "software factories," arguing that standard containers fail at secure isolation for untrusted agent code, demanding full virtual machines instead. Bichard posits that the missing industry primitive is agent coordination, proposing a CLI-based gateway instead of repurposing noisy human tools like GitHub pull requests, which quickly become unreadable. Over on the Google for Developers channel, [What's new in Google AI](https://www.youtube.com/watch?v=SSe1VmVrtw0) features a live demo of AI Studio's "Build" mode writing native Kotlin applications and successfully deploying the compiled app over USB directly to a connected Android phone.

### AI & Machine Learning
The most technically substantive release is detailed in [Prompt to Pipeline: Building with Google's Gen Media Stack — Paige & Guillaume, Google DeepMind](https://www.youtube.com/watch?v=ns9f1fjLD7Y) on the AI Engineer channel, which overviews the new Gemma 4 family. The presentation includes an impressive local inference demo using LM Studio running a 26B mixture-of-experts model—which achieves high capability by only requiring 4 billion active parameters at a time—as well as a 31B model that successfully implements an infinite racing game in JavaScript and HTML locally from a written spec. They also outline an "effective 2B" architecture for mobile devices that pages embeddings in and out of flash storage to save precious active RAM on edge devices. Meanwhile, [Test-time verification for AI agents: New from Microsoft Research #ai #agenticai #verification](https://www.youtube.com/watch?v=nqiKS_oCzvs) offers a brief look at how MSR is enforcing agent safety bounds. The method automatically extracts atomic policies from raw text and compiles them into executable Python code that acts as a verifier, validating the agent's context and output dynamically at runtime.

### Everything Else
For an entertaining reality check on modern engineering hiring culture, [How much AI to use in an Interview](https://www.youtube.com/watch?v=PBS7xMZo05Y) from ThePrimeagenHighlights covers the bizarre new interview gauntlet where candidates are paradoxically penalized both for relying too heavily on AI and for failing to use it enough to prove their "AI-driven" mindset. On the science front, [The biological clock that doomed the Neanderthals - David Reich](https://www.youtube.com/watch?v=-zsD-iw-arw) from Dwarkesh Patel offers a quick explanation of how 1.2 million years of evolutionary separation created biological incompatibilities that ultimately doomed Neanderthal lineages during interbreeding with our ancestors.