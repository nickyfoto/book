---
title: 2026-04-07
weight: 4
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "cybersecurity", "consumer tech", "china tech"]
---

# Chinese Tech Daily — 2026-04-07

## Top Story
The paradigm shift in coding environments is accelerating. InfoQ discusses how the [Cursor 3 Release](https://www.infoq.cn/article/t2evtKXuwXOUo9woSQyX) marks the end of the traditional IDE era by replacing the familiar code editor with an agent management console. This comes as the "Vibe Coding" phenomenon explodes; Sensor Tower data cited by ifanr shows a massive 84% year-over-year surge in new App Store submissions in Q1 2026, driven directly by AI agent coding tools. With Cursor pushing cloud handoffs and managing multiple parallel agents, the developer's role is officially shifting from writing code files to orchestrating AI workers.

## Engineering & Dev
Security and infrastructure architecture dominate developer discourse today. On the security front, the npm ecosystem suffered a massive supply chain attack when the massively popular [Axios library was compromised](https://www.infoq.cn/article/j5SQxrf0ULJN2Fjd80T2) with a remote access trojan, affecting versions 1.14.1 and 0.30.4. Meanwhile, a [Teleport report](https://www.infoq.cn/article/iVJbFCtkDxMSgw9KoRV0) highlighted that enterprises granting over-privileged access to AI systems face a 4.5x higher rate of security incidents. 

For infrastructure, an insightful InfoQ piece on [Configuration as a Control Plane](https://www.infoq.cn/article/CYcokuDpJg9Si5uyfu2Z) argues that configuration management has evolved from static files to real-time control planes, necessitating staged rollouts and automated rollbacks to prevent global outages seen in recent cloud provider incidents. On the mobile side, a senior engineer shared hard-learned lessons on [adopting SwiftUI in a 500 million user app](https://www.infoq.cn/article/7p4EA1l5a5g9jfTiWQmk), emphasizing that the real challenges are organizational culture and iOS version fragmentation, not just the framework itself. 

Furthermore, as AI agents become ubiquitous, developers are grappling with complex state management; a QCon Beijing session on [Agent Memory System Engineering](https://www.infoq.cn/article/IQfviaUpKcyUVudfrzip) details how to abstract memory as a file system to build reusable experience assets for agents like OpenClaw. Finally, [ProxySQL 3.0.6](https://www.infoq.cn/article/sq4eVTOlT8w9Ew9qSdW2) was released, introducing a multi-tier release strategy that separates stable production features from experimental AI integrations.

## Products & Digital
AI hardware and space photography lead today's consumer tech updates. In a fascinating milestone, astronauts on NASA's Artemis II mission used the [iPhone 17 Pro Max to capture a selfie with Earth](https://www.ifanr.com/1661107), marking the first time Apple's flagship passed strict deep-space flight certifications to operate in a completely offline, zero-gravity environment. In the AR space, [XREAL's CEO discussed their strategy](https://www.ifanr.com/1661181) as they prepare for an IPO, arguing that smart glasses are the ultimate carrier for AI because their eye-tracking capabilities provide the highest quality context for LLMs without requiring manual input. 

Bringing AI agents to mainstream consumers, Lenovo introduced [Tianxi Claw](https://www.ifanr.com/1661115), a pre-installed, cloud-edge hybrid AI assistant for its PCs and Motorola phones, significantly lowering the barrier to entry for users who find deploying OpenClaw locally too complex. Over on sspai, users are showcasing their impressive [Vibe Coding creations](https://sspai.com/post/108343), ranging from comprehensive Buddhist text databases to cross-border holiday-tracking apps, proving the democratization of software creation is in full swing. In the EV market, Wuling unveiled its high-end brand [Huajing S](https://www.ifanr.com/1661262), a massive 6-seat hybrid SUV leveraging Huawei's Qiankun ADS Pro and HarmonySpace, targeting the mainstream family market with top-tier supply chain integration.

## News & Commentary
The AI industry is experiencing growing pains around API costs and ecosystem moats. Anthropic announced a major policy shift, [blocking third-party harnesses like OpenClaw](https://www.ifanr.com/1661108) from utilizing Claude's standard subscription quotas. A Xiaomi engineering lead noted this was predictable, as third-party frameworks often waste massive amounts of context window tokens on low-value calls, driving actual computing costs to dozens of times the $20 subscription price. Meanwhile, in the hardware race, [DeepSeek V4 is reportedly prioritizing domestic chips](https://www.infoq.cn/article/MJmMrcJzh7vo6egI3Bbz) like Huawei and Cambricon for optimization, with Chinese tech giants placing advanced orders for hundreds of thousands of AI chips. 

Outside of AI, the NYT reports on China's incredibly [strict new drone regulations](https://cn.nytimes.com/china/20260407/china-drone-regulations/), requiring real-name registration and prior flight approvals even for recreational users, effectively grounding much of the consumer drone activity in the country due to national security and public safety concerns. The NYT also covered the massive public mourning of [education influencer Zhang Xuefeng](https://cn.nytimes.com/china/20260407/china-mourned-an-education-influencer-the-grief-was-a-quiet-revolt/), whose blunt advice on college majors resonated deeply with middle- and working-class families navigating a brutal job market.

## Also Noted
* [Meituan explicitly bans the use of Qwen models](https://www.infoq.cn/article/MJmMrcJzh7vo6egI3Bbz) internally, forcing teams to rely on their proprietary LongCat models or ByteDance's Doubao.
* [ModelBest (面壁智能) secures hundreds of millions of RMB](https://www.infoq.cn/article/dOQ5rL2j5Fw1JV2OW8ji) in new funding led by state-backed Shenzhen Capital Group, signaling strong industrial support for edge AI.
* [Xiaomi is making all software R&D staff take an AI exam](https://www.infoq.cn/article/MJmMrcJzh7vo6egI3Bbz) focused on requirements development and bug fixing via AI, with mandatory retakes for failures.
* A severe [SQL injection vulnerability in FumaCRM](https://mrxn.net/jswz/fumacrm-Dingding-DingHandler-sqli.html) allows unauthenticated remote attackers to access databases and potentially write trojans to the server.
* Apple's first [foldable iPhone has reportedly entered trial production](https://www.ifanr.com/1661108) at Foxconn, with iOS 27 introducing iPadOS-like split layouts for the device when unfolded.