---
title: 2026-05-30
weight: 3
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "cybersecurity", "compilers"]
---

# Hacker News — 2026-05-30

## Top Story
**[Finding Miscompiles for Fun, Not Profit](https://newsletter.semianalysis.com/p/finding-miscompiles-for-fun-not-profit)** 
A former Google and OpenAI compiler engineer threw $10,000 in API credits at Claude and ChatGPT to fuzz LLVM and NVIDIA's `ptxas`, discovering hundreds of deeply concerning miscompiles at an alarming rate. The real signal here isn't just that AI can find bugs, but that "with enough subagents, all bugs are shallow"—a shift that makes elite-level code inspection simply a matter of having a massive compute budget. 

## Front Page Highlights

**[Microsoft 0-day feud escalates as researcher threatens another exploit dump](https://www.theregister.com/security/2026/05/28/microsoft-0-day-feud-escalates-as-researcher-threatens-another-windows-exploit-dump/5248085)** 
A classic failure of the Coordinated Vulnerability Disclosure process has exploded publicly, with a disgruntled researcher named "Nightmare Eclipse" threatening a "bone shattering" release of zero-days in July. The researcher claims Microsoft deleted their MSRC account and refused to communicate, while Microsoft accuses them of criminal behavior—proving once again the fraught David-and-Goliath dynamic between independent bug hunters and mega-vendors.

**[Anthropic surpasses OpenAI to become most valuable AI startup](https://qazinform.com/news/anthropic-surpasses-openai-to-become-worlds-most-valuable-ai-startup)** 
Following a $65 billion Series H funding round, Anthropic has officially dethroned OpenAI in private market valuation. Fueled by Claude's massive popularity among software developers, Anthropic's annual revenue has skyrocketed from $10 billion to $47 billion, setting the stage for an escalating IPO race in the Valley.

**[The California state assembly has passed the 'Protect Our Games Act'](https://www.invenglobal.com/articles/22330/stop-killing-games-movement-gains-momentum-california-assembly-passes-game-protection-bill)** 
A major win for the 'Stop Killing Games' movement: California's Assembly passed AB 1921, which forces publishers to provide an offline patch, an alternative version, or a refund when they inevitably shut down game servers. The gaming industry lobby (ESA) is furiously opposing it, but if signed into law, this fundamentally shifts the "you're just buying a license" argument that publishers have hidden behind for a decade.

**[Proposed new US funding rules: We can cancel any grant at any time](https://arstechnica.com/science/2026/05/the-office-of-management-and-budget-tries-again-to-cripple-us-science/)** 
The US Office of Management and Budget is attempting to formalize rules that would strip scientists of peer-review protections, giving political appointees the final say on federal research grants. The HN community is widely recognizing this as a targeted attack on independent science, dressed up in anti-"woke" rhetoric, which will likely cripple US research institutions and international collaboration.

**[What Is a Dickover?](https://daringfireball.net/2026/05/what_is_a_dickover)** 
John Gruber has formalized a term for the most infuriating UI pattern on the modern web: the "dickover". He perfectly captures the collective exhaustion with full-screen, modal curtains that interrupt active reading to beg for newsletter signups or cookie consents. 

**[Zig: Build System Reworked](https://ziglang.org/devlog/2026/#2026-05-26)** 
The Zig team just decoupled their build system's "maker" and "configurer" processes, drastically improving build speeds. Between this and their new ELF linker achieving ~30ms incremental rebuilds on x86_64 Linux, Zig continues to prove why it's the darling of developers who care about raw compiler performance and strict resource control.

**[Macsurf, "modern" web browser for macOS 9](https://github.com/mplsllc/macsurf)** 
Absolute peak hacker nonsense in the best way possible. Someone ported a NetSurf frontend to Classic Mac OS 9, complete with CSS Grid, ES5 JavaScript, and a fully native TLS 1.3 stack running on a 233 MHz G3 iMac. It doesn't rely on remote rendering proxies—it actually parses modern HTTPS on 25-year-old hardware.

## Show HN & Launches

**[Show HN: VT Code – open-source terminal coding agent in Rust](https://github.com/vinhnx/VTCode)** 
A slick new coding agent that boasts strong shell safety boundaries and supports multiple LLM providers. It includes a neat subagent architecture for background tasks and utilizes a defense-in-depth model with OS-native sandboxing to prevent prompt injection.

**[Tsplat – Run Gaussian splatting in your terminal](https://github.com/darshanmakwana412/tsplat)** 
This project renders 3D Gaussian splatting scenes entirely on the CPU, right in your terminal using Unicode half-blocks. It's a brilliant technical flex that even works over an SSH connection.

**[Liquid AI reveals 8B-A1B MoE trained on 38T](https://www.liquid.ai/blog/lfm2-5-8b-a1b)** 
Liquid AI released an impressive edge model built specifically for consumer hardware. With a 128k context window and a heavily optimized tokenizer, it functions natively in `llama.cpp` and `MLX`, pushing 253 tokens/second on an M5 Max laptop chip. 

**[Show HN: 500 years of Joseon court omens as an observability dashboard](https://ajin.im/is/building/omen.ops/)** 
One of the most creative data visualizations this week: piping 500 years of real historical records from the Korean Joseon dynasty (floods, eclipses, tiger incursions) into what looks exactly like a modern DevOps console.

## Discussion & Debate

**[AI Job Grief: The Unnamed Psychological Crisis Hitting Tech Workers](https://jackmaguire.org/blog/ai-job-grief/)** 
A deeply resonant piece exploring the unacknowledged "anticipatory mourning" happening among software and data engineers right now. Unlike previous automation that targeted manual labor, LLMs threaten the core professional identity of knowledge workers, leading to a proposed clinical construct called "Artificial Intelligence Replacement Dysfunction" (AIRD). The comments are a mix of existential dread and frustration that tech leaders are downplaying the human cost.

**[Domain expertise has always been the real moat](https://www.brethorsting.com/blog/2026/05/domain-expertise-has-always-been-the-real-moat/)** 
A pragmatic counter-narrative to the AI doomerism: agentic AI has commoditized the ability to *produce* code, but not the ability to *verify* if the business logic is actually correct. The consensus in the thread is that if you're an engineer today, your safest bet is to deeply learn a gnarly, real-world domain—like logistics, actuarial science, or healthcare compliance—because knowing "what right looks like" is the one thing you can't prompt an LLM to figure out.