---
title: 2026-07-03
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "semiconductors", "consumer tech"]
---

# Chinese Tech Daily — 2026-07-03

## Top Story
The race to build custom AI silicon is heating up as top foundation model labs seek to escape Nvidia's hardware margins and gain tighter control over inference costs. While OpenAI recently unveiled its first custom inference chip, "Jalapeño," reports now suggest Anthropic is actively engaging with Samsung's foundry division to explore its own custom silicon initiatives. For these AI giants, the ultimate goal is no longer just securing raw compute, but defining custom architectures that optimize memory access, tensor cores, and token generation economics for their specific product workloads.

## Engineering & Dev
In backend architecture, a seasoned engineer detailed the hidden trade-offs of using event-driven designs for real-time systems, specifically call centers. As highlighted in **[Java 实时系统扩容：事件驱动设计的隐性权衡](https://www.infoq.cn/article/dbZRhCUeEqX4WdboztyG)**, relying on Kafka introduced unacceptable asynchronous latency and cross-pod cache mismatches, forcing a migration to Redis for shared authoritative state and leveraging JDK 21's virtual threads to mitigate JVM garbage collection pauses during peak loads.

In the embodied AI space, Tao Dacheng of Daxiao Robotics challenges the prevailing metric of "pixel realism" for world models. In his piece **[大晓机器人首席科学家陶大程：世界模型的使命不是完整复制世界，而是精准支撑行动](https://www.infoq.cn/article/tZe66KJ12UsjrqpeSiaA)**, he argues that Physical AI demands "control-sufficient states" designed to minimize real-world action costs, rather than endlessly generating photorealistic video frames. World models must support multi-branch counterfactual simulation so robots can compare the outcomes of different actions before committing to a move.

As token consumption skyrockets, the AI industry is experiencing a "Token Apocalypse" where strict cost governance is becoming critical for survival. The article **[Claude Code 80%的提示词说删就删，Anthropic用Fable 5打了个样](https://www.infoq.cn/article/GEkEm7rkUJfF8bdwTuBt)** notes that Anthropic has slashed 80% of the system prompts in Claude Code to eliminate "prompt debt," while developers are adopting tools like the "Caveman" plugin to aggressively strip verbose conversational filler from LLM outputs to save money.

The transition of AI from simple coding copilots to autonomous enterprise agents requires entirely new team governance structures. As discussed in **[Agent 上岗之后，企业如何治理硅基团队？](https://www.infoq.cn/article/pNFHkLos3FoDNm8cQsyt)**, enterprises are implementing systems like MemoryLake to establish long-term organizational memory for agents, while Huawei's ACE Harness system deploys multiple specialized agents alongside human overseers to automate debugging and issue resolution seamlessly.

## Products & Digital
iOS power users have found a clever way to replicate Smartisan's iconic "Big Bang" text-explosion feature on the iPhone. Detailed in **[快捷指令｜让 iPhone 用上锤子的「大爆炸」](https://sspai.com/post/111405)**, this workaround utilizes the iOS Shortcuts app combined with WebView components to let users easily extract text and route searches to multiple apps without navigating through distracting app interfaces.

On the career and productivity front, an essay titled **[这四个工作习惯，或许也能帮你找到掌控感](https://sspai.com/post/111708)** outlines pragmatic strategies for reclaiming autonomy at work. The author emphasizes maintaining detailed work journals, treating human relationships as long-term assets through simple profile logging, deliberately packaging work into reusable modules to broadcast influence, and building quantified safety nets for finances and health.

In consumer robotics, Chinese startup JoyIn (乐享科技) recently secured nearly 500 million RMB in Pre-A funding and unveiled its "Zeroth" brand of home embodied AI products. In the interview **[对话乐享科技 CEO 郭人杰：具身智能有希望诞生苹果级别的公司](https://www.ifanr.com/1670916)**, the CEO expressed ambitions to become the "DJI of robotics," prioritizing the complex, emotional environment of the home over B2B industrial scenarios to create genuine AI companions.

Google's Android Earthquake Alerts system proved its life-saving potential by giving residents in Venezuela seconds of advanced warning before a 7.5-magnitude quake struck. The feature **[两场地震，和你口袋里的「地震仪」](https://www.ifanr.com/1670541)** explains how the system crowdsources data from the accelerometers of over 2.5 billion Android devices worldwide, calculating the epicenter and magnitude in milliseconds before destructive S-waves reach the surface.

## News & Commentary
For the Uyghur diaspora, the preservation of their culture has become an existential struggle conducted largely in exile. The op-ed **[世界辜负了维吾尔人](https://cn.nytimes.com/opinion/20260703/uyghurs-china/)** highlights grassroots efforts to maintain the Uyghur language through volunteer-run schools and digital magazines, warning that without institutional support, their unique Eurasian heritage risks functional extinction within a few generations.

In Vietnam, the construction of a massive 135,000-seat stadium in Hanoi illustrates a deepening two-track economy. **[全球经济怎么了？这座世界最大体育场也许提供了线索](https://cn.nytimes.com/asia-pacific/20260703/vietnam-stadium-corporate-inequality/)** notes that while state-favored conglomerates like Vingroup and global manufacturing giants flourish amidst geopolitical shifts, local small business owners are being physically displaced and financially starved of credit.

## Also Noted
*   Supply chain rumors suggest Apple is gearing up for a massive 2027 product super-cycle, including the production of 10 million foldable iPhones and the debut of the M7 processor. Link: **[早报｜曝苹果计划生产1000万台折叠iPhone](https://www.ifanr.com/1670862)**.
*   DJI introduced the Mic Mini 2S, an ultra-lightweight 12g wireless microphone that features up to 28 hours of 32-bit float internal recording. Link: **[派早报：大疆发布 DJI Mic Mini 2S 迷你无线麦克风等](https://sspai.com/post/111898)**.
*   Volcengine launched AI MediaKit, a production-grade development suite designed to help audio-video AI agents transition from simple generative tasks to full-workflow delivery. Link: **[从生成到交付，音视频 Agent 要有生产级开发套件](https://www.infoq.cn/article/qA1Ucwbw3KZy5yIgCrVo)**.
*   Alibaba Cloud's Meoo platform rolled out a "Night Plan," offering up to 80% off for users executing complex Qwen 3.7-Max tasks overnight. Link: **[阿里云秒悟 Meoo 上线夜间计划](https://www.ifanr.com/1670862)**.
*   Yijing Auto unveiled its "Sky Dome Smart Shield" safety architecture for the X9 SUV, integrating Huawei's Qiankun ADS 5 for enhanced pre-collision active safety. Link: **[奕境汽车发布了「天穹智盾」安全架构](https://www.ifanr.com/1670884)**.