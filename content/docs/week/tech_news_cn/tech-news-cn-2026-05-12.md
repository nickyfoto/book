---
title: 2026-05-12
weight: 2
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "electric vehicles", "us-china relations", "cybersecurity"]
---

# Chinese Tech Daily — 2026-05-12

## Top Story
The biggest buzz in China's tech sector revolves around DeepSeek's rocketing valuation and a harsh new reality for tech workers: AI token usage has become a hidden KPI. DeepSeek's valuation surged to an estimated $45 billion to $50 billion amid funding talks involving China's National Integrated Circuit Industry Investment Fund, while rumors of Alibaba's participation were swiftly denied. Meanwhile, domestic tech giants are not just handing out free tokens to employees; they are weaponizing them. Companies are increasingly evaluating employee promotions and layoffs based on their AI token consumption, pushing a ruthless "Skill-ification" of workflows where departing employees are occasionally replaced by AI digital twins.

## Engineering & Dev
On the developer tooling front, engineers are complaining that Anthropic's [Claude Code](https://www.infoq.cn/article/YxxhwlcTWclI5ErKROKv) is completely ignoring the instructions in CLAUDE.md files, causing developers to burn through credits. Researchers attribute this to "context rot," where models processing over 200,000 tokens begin to experience anxiety, take shortcuts, or silently skip instructions, rendering long-context agents unreliable for complex engineering tasks. 

To address the unique infrastructure challenges of autonomous agents, Google announced the [GKE Agent Sandbox and Hypercluster](https://www.infoq.cn/article/BNvwzwb29PU4AORhPqbZ) at Cloud Next 2026, providing kernel-level isolation via gVisor for untrusted AI workflows. Engineers are also debating [Kubernetes security models for AI agents](https://www.infoq.cn/article/JV9WVVULSvzrjEGuKBpm), noting that traditional RBAC and static resource limits fail when agents have dynamic execution paths and unpredictable dependencies, necessitating progressive trust models and short-lived credentials via HashiCorp Vault.

In the open-source community, the transition from Redis to Valkey continues to gain massive momentum with the launch of the [Valkey China](https://www.infoq.cn/article/FDgGHIxIBa1Hytx0akyf) community. Former Redis committers are driving the BSD-licensed project, which recently released version 9.1 featuring atomic slot migration for massive clusters. 

Supply chain security remains a critical vulnerability, highlighted by a recent attack where a malicious buyer [purchased 30 WordPress plugins on Flippa](https://www.infoq.cn/article/UVGOeS0SrX3cCRK6Nac0) and planted a PHP deserialization backdoor that compromised 400,000 installations. Echoing these persistent industry risks, [curl's creator Daniel Stenberg](https://www.infoq.cn/article/GrHwv4MghR6WkPQdU1FR) urged the developer ecosystem to move away from blind trust and toward strict verification using Software Bill of Materials (SBOMs) and signed artifacts.

## Products & Digital
A massive leak out of Google has revealed "Gemini Omni," a new video generation model that reportedly rivals Seedance 2.0 by solving tricky rendering issues like text consistency on chalkboards and physics in eating scenes. Google also teased the [Googlebook laptop platform](https://sspai.com/post/109698) at its Android Show, integrating Android and ChromeOS around the Gemini Intelligence core with features like Magic Pointer.

In the highly competitive EV space, BYD shocked the budget market by offering an optional LiDAR package on its [2026 Seagull](https://www.ifanr.com/1665496) compact EV. Adding the DiPilot 300 system pushes the price slightly above 90,000 RMB, signaling BYD's aggressive control over its supply chain. Meanwhile, Li Auto is bringing flagship 800V active suspension tech to the family SUV market with its [L9 Livis](https://www.ifanr.com/1665604), aiming to compete with the driving dynamics of luxury vehicles like the Porsche Cayenne.

On the eccentric side of robotics, Unitree's G1 humanoid robot was [officially ordained as a Buddhist monk](https://www.infoq.cn/article/xqLfi9FVBo6qINKSuyeb) in South Korea, receiving the Dharma name "Jiabei" and abiding by modified robotic precepts like "do not overcharge". Unitree also made waves by releasing a wildly ambitious, 500kg rideable [mech suit](https://www.ifanr.com/1665515) starting at 3.9 million RMB.

Finally, a fascinating debate is brewing in the UI/UX community over whether [HTML should replace Markdown](https://www.ifanr.com/1665516) as the standard output format for AI. While AI models inherently favor Markdown due to token efficiency and localized structural signals, developers argue that HTML offers vastly superior readability and interactivity for human users viewing complex outputs.

## News & Commentary
As US President Donald Trump heads to Beijing for a critical summit with Xi Jinping, he will be accompanied by 16 powerful business leaders including Elon Musk and Tim Cook, though Nvidia's Jensen Huang was notably excluded. Xi is expected to pressure Trump regarding US arms sales to Taiwan, leveraging potential economic deals as an incentive to delay or reduce future weapons packages. 

Beijing is quietly bracing for extended [economic warfare](https://cn.nytimes.com/business/20260512/trump-xi-economic-warfare/), deploying new legal frameworks to punish foreign firms that cooperate with US sanctions or supply chain decoupling efforts. This geopolitical tension is already spilling into the scientific realm, successfully stalling a massive [China-Argentina radio telescope project](https://cn.nytimes.com/world/20260512/us-china-telescope-argentina-chile/) in the Andes due to diplomatic pressure from Washington.

Despite these global frictions, [a New York Times opinion piece](https://cn.nytimes.com/opinion/20260512/ai-china-america-race/) notes that Chinese citizens embrace AI much more readily than Americans. By treating AI as a state-subsidized "infrastructure" utility, China integrates the technology seamlessly into daily public services, aiming to elevate its massive rural population rather than purely chasing an unchecked superintelligence.

## Also Noted
* NetEase Youdao released [ThinkFlow](https://www.infoq.cn/article/FzzzoO8hcq9QUEqxEuw6), an enterprise-level LLM aggregation platform designed to manage fragmented API keys and visualize token billing for massive AI applications.
* Xiaomi set May 21 for the launch of its [YU7 GT](https://www.ifanr.com/1665470), a high-performance EV featuring a 738kW dual-motor setup capable of reaching 300km/h.
* Autonomous trucking company [Inceptio Technology reached 700 million kilometers](https://www.infoq.cn/article/VR3wFlNWgGXD4zDEHTYv) of commercial driving using a sophisticated cloud-native infrastructure on Alibaba Cloud.
* A new [SQL injection vulnerability in FumaCRM](https://mrxn.net/jswz/fumacrm-Dingding-Product-BusinessPriceOk-sqli.html) allows unauthenticated remote attackers to extract databases and potentially gain server system privileges.