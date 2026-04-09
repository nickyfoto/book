---
title: 2026-04-03
weight: 5
categories: ["News", "Tech"]
tags: ["artificial intelligence", "ai agents", "vibe coding", "electric vehicles", "developer tools"]
---

# Chinese Tech Daily — 2026-04-03

## Top Story
[Google's release of the Gemma 4 open-source model series](https://www.infoq.cn/article/X1c6ZllztrQhGEIoYrBR) marks a pivotal shift toward true "local AI" by moving to the commercially permissive Apache 2.0 license. The lineup ranges from edge-optimized E2B and E4B models—capable of running completely offline on smartphones and Raspberry Pi devices—to highly efficient 26B MoE and 31B Dense models that rival much larger parameter counts in complex reasoning benchmarks. By engineering these models with native function calling, multimodal inputs, and 128K+ context windows specifically tailored for autonomous agent workflows, Google is drastically lowering the barrier for edge device AI integration while preserving data sovereignty.

## Engineering & Dev
In the foundation model space, [Microsoft AI unveiled three low-cost MAI models](https://www.infoq.cn/article/zUMeCNaChlTHDoa7pFVX) (Transcribe-1, Voice-1, and Image-2) developed by a remarkably lean team of under 10 engineers using half the GPU compute of their top competitors. This move signals Microsoft's ambition to achieve "AI self-sufficiency" and directly compete on cost and efficiency, despite its ongoing partnership with OpenAI. Concurrently, the proliferation of AI tools is sparking discussions on [AI wealth inequality](http://www.ruanyifeng.com/blog/2026/04/weekly-issue-391.html), as Ruan Yifeng notes that top-tier models without economies of scale will increasingly be gated behind high subscription fees, leaving free, less capable models for the general public.

In the developer tooling ecosystem, [Feishu open-sourced its CLI](https://www.ifanr.com/1660800) (lark-cli), providing a standardized execution gateway for AI agents to directly manipulate core enterprise workflows like messaging, cloud documents, and calendar scheduling. Similarly aiming to empower agents, [remio launched rOS](https://www.infoq.cn/article/jURmq5J0lm5Py5bkJbZ4), an "AgenticOS" that introduces "aApps" (agentic Apps) designed to run continuously in the background with full access to a user's persistent digital memory and historical context. Meanwhile, local Chinese developers are rigorously evaluating desktop automation agents, with tools like Yuanqi Bot, ArkClaw, and DuClaw topping [real user reviews for OpenClaw-based "lobster" agents](https://www.infoq.cn/article/BmCMklF4x5ADXqK8PZxZ) based on their ability to execute complex PC commands flawlessly.

## Products & Digital
Apple is aggressively policing the App Store by [removing Vibe Coding apps like Anything](https://www.ifanr.com/1660839), citing App Store Guideline 2.5.2 which prohibits dynamically generated, unreviewed code execution on devices. This platform control clash highlights the deep tension between Apple's walled garden and the rapidly emerging paradigm of real-time, AI-generated "Agentic Coding". In smartphone photography, the newly reviewed [vivo X300 Ultra](https://sspai.com/post/108187) eschews harsh computational sharpening for a new "film density curve" color science, offering users a highly customizable, analog-feeling aesthetic that embraces natural flaws and deep shadows. 

In the EV sector, [BYD launched the Seal 06GT and 06DM-i wagon](https://www.ifanr.com/1660973), packing its second-generation blade battery and DiPilot 300 ADAS system to aggressively capture the fiercely competitive 100,000 RMB market segment. Concurrently, Jaguar Land Rover and Chery's joint venture [FREELANDER unveiled the Concept 97](https://www.ifanr.com/1660882), a luxury SUV integrating Huawei's Qiankun intelligent driving and CATL batteries to target urban elites seeking premium off-road capability without the traditional rugged aesthetic.

## News & Commentary
An insightful technical commentary on [the pitfalls of AI writing](https://www.infoq.cn/article/017dcadf6aa893c09c7028d4c) warns developers that outsourcing PRDs and architectural documents to language models sacrifices the critical thinking process needed to truly understand a project's depth. The author argues that treating AI as a ghostwriter damages professional credibility, suggesting instead that it should be used for brainstorming and refinement rather than primary thought generation. 

In ecosystem strategy, [Google is criticized for shifting Android towards a closed model](https://www.ifanr.com/1660888) with its new "advanced sideload" restrictions and an upcoming seven-day cooling-off period for unverified APKs. Critics argue this "Apple-fication" betrays Android's foundational open-source ethos and forces users into a tightly controlled ecosystem to mask Google Play's own shortcomings. Geopolitically, the [New York Times analyzes the China-US moon race](https://cn.nytimes.com/world/20260403/chinas-aiming-for-the-moon-and-nasa-is-looking-over-its-shoulder/), noting that China's centralized lunar exploration program—unburdened by domestic political chaos—offers significant long-term planning advantages over NASA's delayed Artemis schedule.

## Also Noted
* [Discord open-sourced Osprey](https://www.infoq.cn/article/Wz12mUPtcy79cyTsIOwV), a Rust and Python-based security rule engine evaluating 2.3 million rules per second for real-time event stream decision-making.
* [A supply chain attack on PyPI's LiteLLM](https://www.infoq.cn/article/YqWdW6lF74rlqXkJ5AMJ) infected over 40,000 downloads with a payload designed to steal SSL/SSH keys, cloud credentials, and crypto wallets.
* [Zhipu quietly launched GLM-5.1](https://www.ifanr.com/1660800), achieving a SWE-bench score that narrowly trails Claude Opus 4.6 and supporting an expansive 200K token context window.
* [Alibaba released Qwen3.6-Plus](https://www.ifanr.com/1660800), bringing million-token context support and native multimodal reasoning to strengthen its coding agent capabilities.
* [Cloudflare introduced proactive API vulnerability scanning](https://www.infoq.cn/article/8LBRc9hODxYmCvKU85fy) using its Workers AI platform to dynamically detect complex logical flaws like Broken Object Level Authorization (BOLA).