---
title: 2026-07-09
weight: 3
categories: ["News", "Tech"]
tags: ["artificial intelligence", "electric vehicles", "software engineering", "consumer tech"]
---

# Chinese Tech Daily — 2026-07-09

## Top Story
ByteDance's Doubao and Alibaba's Tongyi Qianwen have announced that they will take their AI agent features offline starting July 15. This major pullback coincides with the effective date of China's newly announced "Interim Measures for the Management of AI Humanized Interactive Services," which establishes strict regulatory boundaries around content safety, intellectual property, and minor protection for AI role-playing and humanized interactive products. 

## Engineering & Dev
**[Claude“脑内小剧场”首曝光：隐藏工作空间自发涌现类人意识，谷歌DeepMind权威认证！](https://www.infoq.cn/article/7Rgp3820XIGYqEV9JPSq)** 
Anthropic published a groundbreaking paper revealing that its Claude model has spontaneously developed a small, internal "J-space" (Jacobian lens) workspace during training. This space functions remarkably like human consciousness according to Global Workspace Theory, allowing the model to hold, process, and reason through concepts silently before generating any output. 

**[首个具身视频基模开源！LingBot-Video 如何为“机器人大脑”构建物理引擎？](https://www.infoq.cn/article/SCC8javdsA2zgBg0c2C1)**
Ant Group's Lingbo has open-sourced LingBot-Video, an embodied video foundation model designed specifically as a physical engine for robotic brains. Unlike standard AI video generators that prioritize visual aesthetics, LingBot-Video uses a Mixture of Experts (MoE) architecture to strictly enforce physical laws—like gravity, fluid dynamics, and object permanence—so robots can accurately predict the consequences of their actions in the real world.

**[百万上下文下的 DeepSeek V4：SGLang 推理优化实战｜AICon深圳](https://www.infoq.cn/article/qALuq71AxiG5VLmWqSzU)**
SGLang engineers detailed their technical solutions for optimizing DeepSeek V4 inference for million-token context lengths. DeepSeek V4's complex hybrid attention architecture presents massive memory challenges, which SGLang tackled by developing "ShadowRadix," a unified virtual address and memory management system for multiple heterogeneous KV caches.

**[动态分区拆分：Netflix 大幅削减 Cassandra 读取延迟至毫秒级](https://www.infoq.cn/article/GRDxYebxA7ywxO4seBWy)**
Netflix engineers shared their framework for dynamically splitting wide partitions in Apache Cassandra, a solution tailored for their time-series workloads. The automated system asynchronously splits oversized partitions without requiring application rewrites or downtime, successfully slashing read latency from seconds to single-digit milliseconds.

**[MCP 推出企业统一授权功能](https://www.infoq.cn/article/NIPG4kmz1lDv8DIrsZ9O)**
The Model Context Protocol (MCP) team has officially stabilized its Enterprise Managed Authorization (EMA) extension. This shift replaces repetitive, per-server user authorization prompts with centralized control via enterprise identity providers, allowing employees a seamless "single sign-on" experience to access approved AI agent servers.

## Products & Digital
**[iOS 27 Beta 2 & 3 值得关注的新特性](https://sspai.com/post/112083)**
Apple rolled out iOS 27 Beta 2 and Beta 3, introducing deeper system-wide AI integrations, including a new "Write with Siri" button directly in the keyboard prediction bar. The beta also shows Siri AI beginning to extract context from third-party apps, such as reading EV battery information, alongside upgrades to cross-platform RCS messaging.

**[TDS REVIEW | 小米耳夹式耳机体验](https://sspai.com/post/112011)**
Xiaomi has entered the open-wearable stereo (OWS) space with its new clip-on earphones. The earphones feature a skin-friendly CMF design, support for the LHDC-V high-res codec, and crisp call quality, though reviewers noted that its audio performance struggles with outdoor noise masking and the transparent front-cavity design might be polarizing.

**[腾势 Z 亮相古德伍德，定价超 130.35 万](https://www.ifanr.com/1671486)**
BYD made a massive splash at the Goodwood Festival of Speed by launching the Denza Z series, featuring the Z Coupe, Z Spider, and a track-focused Z Racing edition. Priced upwards of £142,900 in Europe, the 1,604-horsepower "Yi San Fang" tri-motor supercars are BYD's strategic battering ram to redefine itself as a high-end, high-performance brand in Western markets.

**[租电 27.48 万元起！去掉了第三排的蔚来 ES8 大五座版](https://www.ifanr.com/1671502)**
NIO has launched a strictly five-seat version of its flagship ES8 SUV, stripping out the third row to maximize passenger comfort and cargo utility. The bold layout shift results in massive second-row legroom, a 1,334-liter base trunk capacity, and an under-floor hidden compartment designed for an 18°C freezer, catering directly to outdoor and lifestyle-focused affluent families.

**[角落新声｜在陌生的城市里，寻找属于自己的角落](https://sspai.com/post/111983)**
A thoughtful piece exploring how modern digital nomads carve out "corners" of peace in unfamiliar cities like Dongguan. The author curates physical and mental sanctuaries using minimalist setups—a Mac mini, an Alice-layout Neo Ergo keyboard—and highlights how local cafes' bespoke Hi-Fi audio setups provide ambient separation from the outside world without complete isolation.

## News & Commentary
**[受伊朗战争和通货膨胀冲击，全球经济增长面临急剧放缓](https://cn.nytimes.com/business/20260709/imf-world-economy-inflation/)**
The IMF has warned of a sharp global economic slowdown, revising 2026 growth down to 3%. The US-Israel war with Iran has severely disrupted energy supply chains in the Middle East, leading to rising commodity prices and pushing projected global inflation to 4.7%.

**[法拉利营销总监：中国车企像是在做「快消品」](https://www.ifanr.com/1671401)**
Ferrari's global marketing director recently critiqued the product strategies of Chinese EV manufacturers, describing them as operating like "Fast-Moving Consumer Goods" (FMCG) companies. He argued that their rapid iteration cycles make older models obsolete too quickly, which contradicts Ferrari's philosophy of long-term value and driving emotion, though he admitted Chinese firms are pushing Ferrari to optimize.

**[美国能挺住吗？](https://cn.nytimes.com/opinion/20260709/america-250-trump/)**
Reflecting on America's 250th birthday amid political and climate turbulence, an op-ed questions the longevity of US global dominance. While acknowledging institutional vulnerabilities, slipping human capital investments, and immigration hurdles, the author remains cautiously optimistic about the future due to America's enduring edge in technological frontiers like AI and biotechnology.

## Also Noted
*   **[工信部 NVDB 提醒 Claude Code 安全后门隐患](https://www.ifanr.com/1671401)**: China's MIIT warned that Anthropic's AI programming tool, Claude Code, contains a backdoor mechanism that transmits sensitive user telemetry back to remote servers without consent.
*   **[SpaceXAI 最强模型 Grok 4.5 发布](https://www.ifanr.com/1671401)**: SpaceXAI launched Grok 4.5, a 1.5 trillion parameter model that outperforms Claude Opus 4.8 on key coding benchmarks for a fraction of the API price.
*   **[华为天才少年回应 DeepSeek 面试争议](https://www.ifanr.com/1671401)**: Former Huawei "Genius Boy" Li Bojie publicly responded to a viral controversy regarding his abrupt termination from a DeepSeek coding interview, pushing back against cheating allegations.
*   **[Claude 在 Foundry 上正式可用，但欧洲企业无法部署](https://www.infoq.cn/article/hOGtafDIR2GvccjYiLEc)**: While Claude is now globally available on Microsoft Azure Foundry, European enterprises are frustrated as Anthropic remains the sole data processor, violating strict EU data residency requirements.
*   **[三星 Galaxy Unpacked 2026 定于 7 月 22 日](https://www.ifanr.com/1671401)**: Samsung has scheduled its Galaxy Unpacked event for July 22 in London, where it is expected to unveil a new, wider-format "Galaxy Z Fold 8 Ultra" foldable.