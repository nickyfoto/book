---
title: Week 24 Summary
weight: 1
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "multi-agent systems", "developer tools", "hardware", "software architecture", "cloud infrastructure", "venture capital", "apple", "ai agents", "large language models", "data centers", "model context protocol", "machine learning", "infrastructure"]
---

# Tech Videos — Week of 2026-06-06 to 2026-06-12

## Watch First
**Stop Making Models Bigger, Make Them Behave — Kobie Crawdord, Snorkel** is the week's most technically substantive talk, proving that a targeted, sub-$500 RL pipeline using GRPO can make a 4B parameter model outperform a 235B parameter model at tool-use tasks. It is an essential watch for engineers looking to fix tool-invocation discipline rather than brute-forcing expensive reasoning capabilities.

## Week in Review
This week's content showcased a distinct shift from theoretical agent capabilities to production realities, emphasizing deterministic guardrails over pure LLM reliance. The Model Context Protocol (MCP) emerged as the dominant integration standard across major developer ecosystems, while severe physical infrastructure bottlenecks like power and copper took center stage in scaling discussions.

## Highlights by Theme

### Developer Tools & Platforms
The Model Context Protocol (MCP) is rapidly becoming the industry standard, highlighted by **Apple Developer** showcasing its embrace in Xcode 27 and Google introducing WebMCP on the **AI Engineer** channel to expose website UI capabilities directly as JSON tools. The operational reality of AI coding was starkly detailed in **What we learned shipping VS Code weekly (without breaking everything)**, revealing how massive AI-generated code spikes forced the VS Code team to adopt weekly release cadences and build automated agentic triage pipelines. However, these agentic workflows face a looming economic hurdle, as the **Syntax** channel's **The AI bubble is bursting** notes that GitHub Copilot is moving to token-based pricing, making long-running agents massively more expensive.

### AI & Machine Learning
Agent orchestration is actively wrestling with context bloat, leading Qodo to advocate for an 80/20 hybrid approach combining frontier models with strict deterministic rules in **Why More Context Makes Your Agent Dumber and What to Do About It** on the **AI Engineer** channel. Addressing massive context overheads, **Cursor** engineers explained their use of KV cache compaction to efficiently handle concurrent execution in **Running 128 Coding Agents at Once**. On the frontier model side, Anthropic released its "Mythos-class" Claude Fable 5 model, though **Fireship**’s **Fable is the most powerful AI you’re allowed to use...** rightly cautions that it is heavily lobotomized by safety classifiers despite topping coding benchmarks. Meanwhile, **Google DeepMind** announced the Gemma 4 family, featuring a 26B Mixture of Experts model that efficiently runs on edge hardware by only requiring the memory of a 4B model at runtime.

### Hardware & Infrastructure
The physical constraints of the AI boom are hitting hard, with the **All-In Podcast**'s **Dan Dreyfus: The Next AI Bottleneck is Copper** calculating that a projected 15 GW/year US data center buildout will demand 750,000 tons of copper annually, vastly outpacing global supply growth. This energy crunch was further corroborated during the **All-In's Best Ideas Pitch Competition**, where Talon Energy detailed severe 106GW power constraints on the PJM grid that are forcing hyperscalers into massive long-term power purchase agreements. For developers looking to sidestep local compute limits, the **AI Engineer** channel featured RunPod's Flash Python SDK in **Under 5 minutes to a deployed LLM endpoint**, allowing decorators to execute async Python directly on cloud H100s with hot-reloading. 

## Skippable
You can safely ignore the **OpenAI Investor Innovation Day** video, which is purely generic corporate marketing fluff. Similarly, be highly skeptical of the Palo Alto Networks CEO's claim on the **All-In Podcast** that an AI model found five years of bugs in six weeks; the admitted 30% false-positive rate offsets the speedup by creating a defensive triaging nightmare.