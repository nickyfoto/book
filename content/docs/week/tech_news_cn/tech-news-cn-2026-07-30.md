---
title: 2026-07-30
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "developer tools", "consumer tech", "tech policy"]
---

# Chinese Tech Daily — 2026-07-30

## Top Story
The developer community is fiercely debating the reality of "lights-out" software factories and the necessity of human oversight in AI-generated code. While HashiCorp founder Mitchell Hashimoto insists on reading every line of AI code, clean code pioneer Uncle Bob argues for a radical shift: entirely skipping manual code review in favor of relying strictly on AI-generated test constraints and rigorous QA verification. However, practical attempts at fully autonomous coding are reportedly failing; critics argue that without human architectural planning, LLMs eventually degrade codebase maintainability into a state of "shotgun surgery" because they are optimized merely to pass tests rather than execute coherent, long-term system design.

## Engineering & Dev
Alibaba Cloud's database team anticipates a "second power shift" in database architecture, wherein AI agents, rather than human developers, are taking over the authority to execute and manage data. In **[The Second Power Shift in Databases](https://www.infoq.cn/article/B2GjIEBr0c1L0amoKmNf)**, experts note that over 80% of new Postgres instances on some platforms are already being provisioned by agents, pushing database design to evolve from providing heavy graphical consoles to enabling highly scalable, branchable "Agentic Services". 

Meanwhile, as AI agents proliferate, traditional orchestration is cracking under the pressure. **[Agent Substrate Aims for the Next Decade](https://www.infoq.cn/article/h0WG6p7z3tyTk3hxQIhT)** details how Google is bypassing standard Kubernetes control planes; because AI agents act more like dormant OS processes than continuous web services, Kubernetes' traditional pod architecture wastes resources on idle agent sessions. 

In operational security, **[Multi-Agent AI for Security Ops](https://www.infoq.cn/article/v9Vmgcy4RZvUIcxPEP77)** outlines a production-grade 5G core network implementation that utilizes Agent-to-Agent (A2A) and Model Context Protocol (MCP) architectures, reducing mean time to detect (MTTD) by 40% through a strict multi-agent hierarchy featuring a privileged "reviewer" agent. Conversely, **[Expedia's Deterministic AI Platform](https://www.infoq.cn/article/msL3K1DAsj3XIwLmd4tN)** reveals that the travel giant explicitly avoided autonomous agents for its STAR observability platform, opting instead for rigid, deterministic prompt-chaining workflows to maintain strict human oversight in root-cause analysis. 

For a deep dive into model scaling, **[From GPT-2 to Kimi K3](https://www.infoq.cn/article/NMXxssS9qB8LtRlWMr5V)** dissects the 7-year architectural evolution of LLMs. Scaling a model by 22,580x required moving from "remembering everything" to "selective memory," utilizing technologies like DeltaNet, Multi-Head Latent Attention (MLA), and Kimi Linear to dynamically manage, decay, and replace knowledge states in massive context windows.

## Products & Digital
The hardware industry is betting heavily on smart glasses as the definitive post-smartphone form factor. According to **[Smart Glasses as the Next Major AI Device](https://www.ifanr.com/1673429)**, IDC and Qualcomm project global smart glasses shipments to near 50 million units by 2030, driven by a shift from "responsive" AI software to proactive, always-on personal agents that leverage a first-person perspective to understand real-world contexts.

In the EV sector, Aion is making a direct play for younger demographics with its newly unveiled Ray 7 electric sedan. **[Aion's New Ray 7](https://www.ifanr.com/1673361)** highlights the brand's pivot from practical ride-hailing vehicles to a sporty, low-slung 5-meter sedan equipped with L4-homologous autonomous driving algorithms, squaring up directly against the Xiaomi SU7.

For digital life and productivity, a comprehensive guide on **[Building a Music Exploration System](https://sspai.com/post/112656)** encourages audiophiles to break out of the algorithmic echo chambers of Spotify and Apple Music. The author advocates using structural databases like Rate Your Music (RYM) and Discogs, alongside human curation, to track producer lineages and counter the "cultural acceleration" of the streaming era. Finally, for remote IT workers, a review of **[NetEase UU Remote](https://sspai.com/post/112405)** showcases it as a formidable free alternative to TeamViewer, featuring low-latency connections, multi-screen tracking, and a unique capability to turn idle tablets into virtual secondary displays.

## News & Commentary
The rapid rise of AI is severely draining talent from academia, warns **[AI Accelerates Science but Hollows Out Universities](https://www.ifanr.com/1673384)**. As prominent researchers migrate to tech giants that offer massive compute and data resources, universities are losing their ability to train the next generation of scientists and pursue foundational, non-commercial research. 

A New York Times opinion piece, **[The Hidden Costs of China's Free AI](https://cn.nytimes.com/opinion/20260730/ai-china-us-free-models/)**, argues that highly capable, open-weight models from Chinese firms like DeepSeek and Alibaba are rapidly gaining global market share in developing nations. However, the author cautions that these models come embedded with state-aligned narratives and censorship protocols that actively prioritize Beijing's interests during the AI's "chain of thought" reasoning.

On the manufacturing front, **[Trump's Tariffs Are Sending Some Companies Back to China](https://cn.nytimes.com/business/20260730/trumps-tariffs-are-sending-some-companies-back-to-china/)** reports an unexpected consequence of US trade policy. As the gap between US tariffs on Chinese goods and Southeast Asian goods has narrowed, the higher operational and raw material costs in places like Thailand and Vietnam are prompting some factory owners to quietly return their supply chains to mainland China.

## Also Noted
*   **[Kimi Finishes $3.5B F Round](https://www.ifanr.com/1673418)**: Moonshot AI's Kimi has hit a massive $35 billion valuation after securing over $3.5 billion in an oversubscribed F round of financing.
*   **[Shizai Agent Tops OSWorld](https://www.infoq.cn/article/4hUcQzeCeKm0wqkc4Zdc)**: The Chinese-developed Shizai (实在) Agent broke global records by achieving a 90.2% success rate on the OSWorld computer-use benchmark for complex desktop tasks.
*   **[US Bans New Chinese Robots](https://www.ifanr.com/1673418)**: The US FCC has updated its restricted list to ban the import of new humanoid and quadruped robots from leading Chinese robotics firms like Zhiyuan and Unitree over national security concerns.
*   **[GitLab 19.2 Adds Agentic Security](https://www.infoq.cn/article/BSPHIPBaSTkEZT9eqgzL)**: GitLab has integrated AI agents into its DevSecOps platform to automatically resolve dependency vulnerabilities and tackle code review backlogs.
*   **[Bijou64 Replaces LEB128](https://www.infoq.cn/article/bJwPR37hbb5stH238hyS)**: Research lab Ink & Switch released Bijou64, a new variable-length integer encoding format that structurally eliminates the canonical redundancy vulnerabilities that plague LEB128.