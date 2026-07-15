---
title: 2026-07-08
weight: 6
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "consumer tech", "ai chips", "cybersecurity"]
---

# Chinese Tech Daily — 2026-07-08

## Top Story
DeepSeek has reportedly initiated the development of its own AI inference chips, a project that began roughly a year ago. Unlike training accelerators, this bespoke silicon is designed specifically to handle user requests and generative workloads, aiming to reduce DeepSeek's reliance on hardware from Nvidia and Huawei. By controlling the hardware layer, DeepSeek hopes to co-design its chips with its model architectures—such as its Mixture of Experts (MoE) structure—to drastically lower inference costs as its global token volume continues to scale.

## Engineering & Dev
Tencent has made significant waves with two papers accepted at ACL 2026. First, the E-GRM (Efficient Generative Reward Modeling) framework introduces a dynamic routing mechanism that treats a model's internal uncertainty as a signal to allocate compute, routing simpler prompts to a fast output path while reserving heavy Chain-of-Thought (CoT) processing for complex queries, as detailed in **[大模型推理也能“智能调度”](https://www.infoq.cn/article/qYcpkTcUhClJvytSbLu1)**. Second, Tencent Hunyuan's research into the "Incomplete Learning Phenomenon" (ILP) during Supervised Fine-Tuning (SFT) explores why LLMs fail to learn certain data despite normal loss curves, opening up new avenues for SFT pathology and data curation in **[SFT「不完全学习」之后，研究的下一个前沿在哪？](https://www.infoq.cn/article/R3bVEmOPR090gN4ovm1A)**.

Meanwhile, the creator of the "Ralph Loop" gave a provocative interview asserting that traditional software engineering is dead, arguing that engineers who cannot build a coding agent from scratch in 300 lines of code will soon be replaced by AI, covered in **[“300行代码写个Cursor，这是AI时代软件工程师的新底线。”](https://www.infoq.cn/article/d2tmcGi9Fy6PMkNGpo9y)**. 

On the infrastructure front, Tencent Cloud and Arm jointly released Cube Sandbox v0.5.0, extending the AI agent hardware-isolation execution environment to Arm architectures for native cross-platform deployment, according to **[Cube Sandbox正式支持Arm架构！](https://www.infoq.cn/article/c4GEoZLWvNZQhSSSWAoH)**. 

Finally, frontend developers received a major update with the release of HeroUI v3 (formerly NextUI), completely rewritten with React Aria and Tailwind CSS v4 to support both Web and React Native environments, as outlined in **[HeroUI v3 正式发布](https://www.infoq.cn/article/S1JW65FuETJSyzr703t6)**.

## Products & Digital
AI agents are breaking out of the desktop and moving to mobile, fundamentally changing how users interact with AI task delegation. Applications like Claude Cowork, Cursor, and OpenClaw are pivoting mobile apps into "remote controls" for long-running, asynchronous cloud agents, allowing users to assign complex tasks, close their laptops, and approve critical actions on the go in **[Claude、Cursor、OpenClaw 集体上手机](https://www.infoq.cn/article/77YytRGDYm7T9ovQKaW9)**.

In the realm of "vibe coding," Google's Gemini 3.5 Flash is democratizing app creation for Android; users can now generate, test, and deploy functional Android apps directly from a browser to their phones in mere minutes, as experienced in **[用美国豆包做了个 app，停不下来了！](https://www.ifanr.com/1671236)**.

In hardware rumors, Apple's highly anticipated first foldable iPhone has reportedly accelerated its timeline and entered mass production. 

For digital lifestyle enthusiasts, sspai teamed up with BenQ to upgrade their Shenzhen offline store, creating highly realistic desk and reading setups so customers can test monitors and lighting accessories like the ScreenBar Halo 2 exactly as they would experience them at home, highlighted in **[好的桌面需要设备，更需要灯光](https://sspai.com/post/110993)**.

## News & Commentary
In a stark warning to the cybersecurity industry, 360 Group's founder Zhou Hongyi argued that automated vulnerability discovery powered by AI agents—akin to Anthropic's Mythos—will deeply disrupt the traditional defense landscape. He announced 360's push to build a "Chinese version of Mythos," focusing on agent harnesses to maximize domestic model capabilities for enterprise security, detailed in **[360 周鸿祎：做中国版 Mythos 不能照搬美国路线](https://www.infoq.cn/article/yr7WuLJw9gfHU9NckJpv)**.

On the business of AI, recent metrics suggest a diverging market: while open-weights models like DeepSeek V4 Flash are handling massive token volumes for production deployments, closed models like Anthropic's Opus still capture the lion's share of enterprise revenue, highlighting a lifecycle where initial application discovery happens on frontier models and scaled production moves to open source, as analyzed in **[开源模型赢了 Token 流量，Anthropic 赚走了大部分钱](https://www.infoq.cn/article/7qI7yUXcZIwazjEW2Aho)**.

In geopolitical tech developments, China demonstrated its evolving "nuclear triad" capabilities by launching a long-range ballistic missile from a submarine into the Pacific Ocean, signaling its intent to close the underwater stealth gap with the US, according to **[中国为何向太平洋发射远程弹道导弹？](https://cn.nytimes.com/china/20260708/china-missile-test-submarine-pacific/)**.

## Also Noted
*   **[Target 推出基于 LLM 的语义匹配系统](https://www.infoq.cn/article/cEfBc7qdIDe3ZVFDyjS5)**: Target deployed a RAG-based LLM system to match new marketing campaigns with historical data, achieving 100% coverage at a top-three recommendation depth.
*   **[Instacart 通过配置驱动的多租户平台扩展个性化营销](https://www.infoq.cn/article/j3LVKbadKyeA1FZdpDyH)**: Instacart redesigned its marketing platform into a configuration-driven, multi-tenant architecture to seamlessly support personalized campaigns across hundreds of retail brands.
*   **[那个当面把马斯克怼到破防的刺头，也离开 OpenAI 了](https://www.ifanr.com/1671340)**: Joshua Achiam, the Chief Futurist at OpenAI famously known for clashing with Elon Musk over AI safety, is leaving the company after nearly nine years.
*   **[小米增程子品牌定名 SkyNomad](https://www.ifanr.com/1671289)**: Xiaomi EV officially confirmed its new sub-brand "SkyNomad" (小米澎程), aimed at the extended-range family SUV market.
*   **[我的出行好伙伴，用 iPhone 一站式解决旅途痛点](https://sspai.com/post/112044)**: Sspai detailed comprehensive travel tips using native iPhone apps, from using Freeform for itinerary planning to Apple Sports for live scores.