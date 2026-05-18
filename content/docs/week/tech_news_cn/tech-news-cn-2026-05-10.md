---
title: 2026-05-10
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "large language models", "software engineering", "consumer tech"]
---

# Chinese Tech Daily — 2026-05-10

## Top Story
[爱范儿 - MiniMax 回应大模型不认识马嘉祺](https://www.ifanr.com/1665336) MiniMax recently published a technical blog detailing why their M2 large model series suddenly "forgot" the Chinese celebrity Ma Jiaqi, revealing fascinating insights into LLM post-training token degradation. The tokenizer merged the name "Jiaqi" into a single token, but because it appeared fewer than five times in post-training dialogue data, the token's weight vector was severely squeezed out by high-frequency tokens. After a full-vocabulary scan, MiniMax discovered nearly 4.9% of tokens suffered from similar parameter drift—especially Japanese tokens (29.7%)—and fixed the issue by constructing synthetic data to ensure every token was practiced in simple repetition tasks. 

## Engineering & Dev
[InfoQ - GitHub 利用 eBPF 消除部署风险](https://www.infoq.cn/article/duka4AFM1UaEmx23F2ZB) GitHub has implemented a new deployment security scheme utilizing eBPF to detect and block hidden circular dependencies at the kernel level. This architecture restricts outbound network access for deployment scripts in controlled cGroups, ensuring that tooling does not accidentally rely on the very services it is trying to repair during an outage, which significantly improves mean time to recovery (MTTR).

[InfoQ - Legare Kerrison 与 Cedric Clyburn 谈 LLM 性能与评估](https://www.infoq.cn/article/yOpJquR36lZKRU5TpjAP) At the Arc of AI 2026 conference, Red Hat engineers discussed the LLM "trade-off triangle," balancing model accuracy, latency, and deployment cost. They emphasized moving away from generic leaderboards and formalizing Service Level Objectives (SLOs) using workload-specific metrics like Requests Per Second (RPS), Time to First Token (TTFT), and Inter-Token Latency (ITL) tailored to applications like RAG or Agentic AI.

[InfoQ - 微服务架构进化：从业务加一堆横切代码到 Sidecar 解耦](https://www.infoq.cn/article/FDQX4EkaqcvBQHFm2mKU) A deep dive into modern microservices architecture highlights how the Sidecar pattern is being used to decouple cross-cutting concerns like logging, monitoring, and security from core business logic. By deploying auxiliary containers alongside primary applications—such as pairing an ASP.NET Core API with an Elasticsearch sidecar—teams can radically reduce code redundancy and complexity without sacrificing independent scalability.

[InfoQ - 迈向高保真与工业化：混元 3D 生成大模型](https://www.infoq.cn/article/SH3Kw4yMJQA3ODHYfPM7) Tencent's Hunyuan 3D generation model aims to industrialize 3D asset creation, aiming to shrink traditional modeling times from an average of 7 days down to near-instant generative pipelines. At the upcoming AICon Shanghai, senior technical expert Yang Xianghui will detail their state-of-the-art breakthroughs, including high-resolution 3D sparse VAE decoders and native 3D segmentation architectures (P3-SAM).

## Products & Digital
[少数派 - 寻找你身边的电波——如何上中继](https://sspai.com/post/87897) A comprehensive lifestyle guide for digital enthusiasts looking to explore the world of amateur (Ham) radio. The tutorial breaks down how to find local repeater stations via WeChat mini-programs, the functional differences between analog and digital repeaters, and the etiquette of using UHF/VHF frequencies with CTCSS/DCS sub-tones.

[爱范儿 - 曝苹果正在研发全息屏幕 iPhone](https://www.ifanr.com/1665336) Supply chain leaks suggest Apple is currently developing a "Spatial iPhone" equipped with a holographic display, targeting commercialization around 2030. The rumored technology integrates a nano-structure holographic layer directly into the AMOLED stack, combining eye-tracking and diffraction beam steering to project 360-degree spatial depth without requiring special glasses, while maintaining native 4K resolution for standard 2D tasks.

[爱范儿 - 电脑微信三大更新来袭](https://www.ifanr.com/1665336) The desktop version of WeChat (version 4.1.9) rolled out three highly requested practical updates for productivity. Users can now utilize native scrolling screenshots, trigger direct voice input via the Alt key hotkey, and rapidly send consecutive stickers using keyboard arrow shortcuts.

## News & Commentary
[爱范儿 - 李想回应理想 L9 四年换代](https://www.ifanr.com/1665336) Li Auto CEO Li Xiang publicly defended the four-year iteration cycle of the L9 SUV, pushing back against comparisons to the rapid upgrade cycles of consumer electronics like smartphones. He argued that vehicles require extensive, unaccelerated safety validation, noting that even with the current AI boom, efficiency gains in physical automotive testing remain severely limited.

[爱范儿 - 骂虚拟偶像被判赔钱](https://www.ifanr.com/1665336) The Guangzhou Internet Court ruled in favor of the human actor behind a virtual idol who was targeted with severe online abuse. The court established a legal precedent that a stable, recognizable correspondence exists between a virtual avatar and its "middle person" (actor), ordering the attacker to post a public apology and pay 10,000 RMB in emotional distress damages.

[爱范儿 - Anthropic 联创：AI 对就业的冲击被高估了](https://www.ifanr.com/1665336) Speaking at Stanford University, Anthropic co-founder Daniela Amodei argued that the threat of AI replacing jobs is vastly overstated. She posited that AI acts more as a "skill complement," shifting the comparative advantage of human work away from writing code or rote tasks and toward empathy, social judgment, and interpersonal communication.

## Also Noted
*   [爱范儿 - 百度文心 5.1 正式发布](https://www.ifanr.com/1665336) Baidu launched the Ernie 5.1 large model, significantly compressing parameter size while outperforming DeepSeek-V4-Pro in agent-based benchmarks.
*   [爱范儿 - 曝甲骨文裁员 2-3 万人](https://www.ifanr.com/1665336) Oracle reportedly laid off 20,000 to 30,000 employees globally, sparking internal petitions after the company refused to accelerate unvested RSU stock options.
*   [少数派 - 派早报：苹果与英特尔就芯片代工达成初步协议](https://sspai.com/post/109610) Apple and Intel have reportedly reached a preliminary agreement regarding chip foundry services.
*   [mrxn.net - 天地伟业Easy7 SQL注入漏洞](https://mrxn.net/jswz/easy7-rest-user-IsPermissible-sqli.html) A critical SQL injection vulnerability was disclosed in Tiandy's Easy7 video surveillance system via its `/Easy7/rest/user/IsPermissible` API endpoint.
*   [爱范儿 - 蚂蚁百灵大模型发布 Ring-2.6-1T](https://www.ifanr.com/1665336) Ant Group released its Ring-2.6-1T trillion-parameter flagship reasoning model, optimized for complex real-world task scenarios.