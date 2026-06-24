---
title: 2026-06-18
weight: 5
categories: ["News", "Tech"]
tags: ["artificial intelligence", "ai agents", "developer tools", "extended reality"]
---

# Chinese Tech Daily — 2026-06-18

## Top Story
**[Cursor 1.5T新模型放弃Kimi基座！600亿美元股票换Cursor，马斯克第一刀砍向微软GitHub](https://www.infoq.cn/article/pl4x24FzEJDfhBRgiWAc)**
SpaceX has acquired AI coding assistant Cursor in an all-stock deal valuing the startup at $60 billion. Following the acquisition, Cursor announced a new 1.5T parameter model trained from scratch using SpaceX's massive GPU clusters, moving away from their previous reliance on Kimi. Cursor also unveiled "Origin," an agent-native Git platform designed to handle code orchestration, review, and automatic conflict resolution for a future where hundreds of AI agents commit code simultaneously, directly challenging Microsoft's GitHub.

## Engineering & Dev
**[Google 想为 AI Agent 打造下一个 Kubernetes](https://www.infoq.cn/article/jNsfjJuAJjDzGYS51jHC)**
Google has open-sourced Agent Substrate and Agent eXecutor (AX) to bring Kubernetes-like orchestration to AI agents. This framework enables a "zero-idle" architecture that decouples agent lifecycles from underlying compute resources, allowing active agents to share physical execution capacity and resume state in milliseconds. This approach aims to massively improve hardware efficiency for bursty agent workloads that spend significant time waiting for human or tool inputs. 

**[Chrome 推出 WebMCP 标准提案（Origin Trial）：为智能体提供原生 Web 操作能力](https://www.infoq.cn/article/wCUdx4sZt94siodQI7u0)**
The Chrome team introduced the WebMCP standard proposal into Origin Trials for Chrome 149. This allows websites to expose native tools directly to browser-based AI agents, bypassing brittle, high-latency DOM-scraping methods and significantly reducing token consumption.

**[砍掉90%冗余词元，省下70万美元：Netflix开源工具狙击AI账单黑洞](https://www.infoq.cn/article/SdkcGqZQ2coEqM04xsQG)**
A Netflix engineer has open-sourced Headroom, a tool that intercepts and compresses redundant tokens—like repetitive JSON structures and boilerplate server logs—before they reach LLMs. The reversible compression tool has already saved users an estimated $700,000 by drastically reducing context window bloat.

**[上下文窗口限制被打破：Subquadratic推出了一个1200万Token的窗口](https://www.infoq.cn/article/0zbyxse0IZs690HL9Jev)**
Miami-based startup Subquadratic unveiled an AI model with a massive 12-million token context window. The model utilizes a Subquadratic Selective Attention (SSA) architecture to bypass the quadratic computing costs of traditional Transformers, achieving linear scaling while maintaining a 92.1% accuracy in needle-in-a-haystack retrieval tasks.

**[JetBrains 开源 Mellum2，尝试 Claude Code 无法涉足的领域](https://www.infoq.cn/article/QQVa7HhtdoDzLFB7ewVQ)**
JetBrains has open-sourced Mellum2, a 12-billion parameter MoE coding model designed specifically for local deployment and agentic routing tasks. By activating only 2.5 billion parameters per token, it offers high-speed inference for enterprise teams needing a self-hosted alternative to API-dependent tools like Claude Code.

**[Slack 淘汰 SSH：700+ EMR 作业迁移至基于 REST 的调度架构](https://www.infoq.cn/article/2tlRd4jkgZwYWmzLA5Kt)**
Slack overhauled its data platform by eliminating direct SSH access for Amazon EMR pipelines, migrating over 700 Airflow jobs to a REST-based scheduling architecture. This move significantly reduces security attack surfaces and operational burdens associated with SSH key management.

**[GitHub accesskey_tools 工具投毒事件结束](https://mrxn.net/news/github-accesskey_tools-poisoning-end.html)**
A supply chain poisoning incident involving a backdoor in the GitHub `accesskey_tools` repository was successfully mitigated. The malicious repository and the offending account, which dated back to 2022, were removed following rapid community reporting.

## Products & Digital
**[玩了一天AI支付宝，张嘴就能点麦当劳、收能量，超级App开始卷Agent OS了](https://www.ifanr.com/1669294)**
Alipay has initiated beta testing for its "AI Alipay" version, effectively transforming the super-app into an Agent OS. The onboard AI assistant, "Abao," can natively control mini-programs—such as autonomously navigating McDonald's menus to order food or collecting energy in Ant Forest—signaling a shift from traditional UI navigation to intent-driven execution.

**[派早报：Android 17 正式推送、微软发布 Surface 新品等](https://sspai.com/post/111191)**
Google officially rolled out Android 17 and Wear OS 7, bringing new AI features to Pixel devices including the Gemini Omni multimodal model and Lyria 3 music generation. 

**[具透 | visionOS 27 首个开发者测试版中值得关注的新内容](https://sspai.com/post/111198)**
Apple released the first developer beta for visionOS 27, introducing the Thórsmörk immersive environment and Apple Intelligence integration. The update also adds curved window support for apps like Safari and a redesigned Control Center.

**[2026 最强智能眼镜发布，但「iPhone 时刻」还没到来](https://www.ifanr.com/1669287)**
The XR hardware space is accelerating with Qualcomm's release of the Snapdragon Reality Elite chip, powering the newly announced XREAL AURA glasses. Developed with Google, the XREAL AURA runs on Android XR and integrates deeply with Gemini AI. Meanwhile, Snap entered the premium AR hardware fray with its $2195 standalone SPECS, featuring a custom Snap OS, though its bulky design limits mainstream appeal.

**[Nothing Phone 杂谈：活下去再谈未来，然后呢？](https://sspai.com/post/110442)**
A retrospective on Nothing's smartphone strategy highlights the runaway success of the budget-friendly Nothing Phone (2a) in India, contrasted with the poorly positioned (3a) Pro. The brand continues to foster a strong developer community through Nothing OS 4.0, embracing open-source kernels and customizable Glyph interfaces.

## News & Commentary
**[Gemini 联合负责人出走 OpenAI：Google 为什么总让 AI 天才感到挫败？](https://www.infoq.cn/article/3hkmF10X9ec1ujwwIjFW)**
Noam Shazeer, the co-lead of Google's Gemini and a pioneer of the Transformer architecture, has left Google to join OpenAI as the head of architecture research. His departure highlights ongoing frustrations within Google's bureaucracy, where complex organizational structures and productization trade-offs have historically slowed down the deployment of major AI innovations. 

**[Anthropic 发布 Claude Fable 5 三天遭临时下架](https://www.infoq.cn/article/UXghld6fuzYxJNuU6L47)**
Anthropic's newly released Claude Fable 5, its most capable model designed for long-term agentic tasks, was temporarily taken offline just three days after launch due to a US government export directive. The directive reportedly stemmed from an Amazon security team discovering a jailbreak vulnerability, halting access to a model praised for its rigorous logic and autonomous verification capabilities.

**[个体10倍提效，组织却不足20%？AI产业正迎来Agent落地大考](https://www.infoq.cn/article/Xbol4ryW7wkczQsumUY9)**
A sobering consensus emerged at the AIEC 2026 conference regarding AI agent adoption in enterprises: while individual developer productivity has seen up to 10x improvements using coding agents, overall organizational efficiency has barely increased by 20%. Industry experts note that the current bottlenecks are a lack of strict engineering constraints, organizational restructuring, and clear accountability frameworks when integrating "digital employees" into existing human workflows.

**[德黑兰如何赢得了世界](https://cn.nytimes.com/opinion/20260618/trump-iran-war-aggression/)**
Opinion commentary notes that the recent US-Israel conflict with Iran has inadvertently bolstered Tehran's standing in the Global South, framing Iran as a symbol of resistance against Western imperialism and prompting middle powers to rethink their reliance on the US-led world order.

## Also Noted
*   **[早报｜曝第二代iPhone Air明年春季推出/特斯拉「车顶维权」名誉权案再审被驳回/微信支付推出AI专属卡](https://www.ifanr.com/1669281)**: WeChat Pay launched an AI Exclusive Card that acts as an isolated wallet for AI Agents to make autonomous purchases on a user's behalf.
*   **[早报｜曝第二代iPhone Air明年春季推出/特斯拉「车顶维权」名誉权案再审被驳回/微信支付推出AI专属卡](https://www.ifanr.com/1669281)**: Zhipu open-sourced GLM-5.2, a model focusing on coding and long-range tasks with a 1-million lossless context window.
*   **[营收涨了 30 倍，ARR 3 亿美金，这家 AI 公司已经在赚钱了](https://www.ifanr.com/1669210)**: AI application company Evoken (演语科技) completed a $300 million B+ funding round, achieving an ARR of nearly $300 million by targeting AI video creation.
*   **[创业一年，把机器人送进头部车企“打工”｜对话光象科技CEO张涛](https://www.infoq.cn/article/GYBZkeGxGry11oCu0c1A)**: Guangxiang Tech (光象科技) deployed its Phi-Bot X1, an embodied AI robot relying purely on native physics models and reinforcement learning, directly into real-world auto manufacturing lines.
*   **[大蚂蚁 (BigAnt) 即时通讯系统 admin/Upload/upload 文件上传漏洞](https://mrxn.net/jswz/bigant-admin-Upload-upload-rce.html)**: A critical directory traversal and arbitrary file upload vulnerability was identified in the enterprise IM system BigAnt.