---
title: 2026-06-17
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "large language models", "semiconductors", "apple", "geopolitics"]
---

# Chinese Tech Daily — 2026-06-17

## Top Story
DeepSeek has reportedly completed a massive 50 billion RMB (approx. $7 billion) funding round, shattering records for the Chinese AI industry. CEO Liang Wenfeng personally injected 20 billion RMB, requiring investors like Tencent and CATL to accept a unique LP structure and a five-year lock-up period to maintain his absolute control,. Meanwhile, the model's global reputation continues to surge, as Redis creator Salvatore Sanfilippo (antirez) fiercely defended DeepSeek against allegations of "API distillation" by US competitors. He argued mathematically and technically that China's AI capabilities are rooted in genuine engineering and world-class optimization, not simply skimming outputs from American models,.

## Engineering & Dev
SemiAnalysis published a trace-level teardown of Huawei's Ascend 950DT chip, revealing how deeply co-designed the hardware is with DeepSeek V4's inference architecture in **[全网首份指令级拆解：看华为昇腾 950DT 芯片如何撬动 DeepSeek](https://www.infoq.cn/article/y9letxDfTZ72Ls1JX27u)**,. The integration of compute and communication via the MC² mechanism allows the chip to efficiently support DeepSeek's massive MoE workloads and long contexts,. This synergy has prompted massive orders from Chinese tech giants like ByteDance and Tencent.

Tencent-backed OpenCloudOS has open-sourced OCManager, an OS-level AI diagnostic system, detailed in **[三年百万级服务器排障实战](https://www.infoq.cn/article/N8OtrKJAucsocHwY650b)**,. After three years of testing on millions of servers, the system uses a ReAct Agent architecture and RAG to automate root-cause analysis for Linux clusters, solving the severe context-pollution and "black box" hallucination issues typical of AI operations,.

SiliconFlow (硅基流动) completed a 2 billion RMB Series B funding round to scale its "Token Factory" model, covered in **[三年跑通Token生产线各环节！硅基流动超20亿元融资落地](https://www.infoq.cn/article/fku4JRdLW5oUQ0K5Ujkf)**,. The platform handles trillions of tokens daily by optimizing inference engines across heterogeneous chips, addressing the critical compute bottlenecks in global AI deployment,,.

Zhipu AI's newly released GLM-5.2 is proving to be a formidable coding model, as tested in **[实测 GLM-5.2 ：Claude 5 关停后，它真能稳稳接住这波用户](https://www.ifanr.com/1669127)**,. Benchmarks and user tests recreating games like Minecraft and *Black Myth: Wukong* in the browser show GLM-5.2 matching Claude Opus 4.8 and exceeding GPT-5.5's performance in complex, million-token context coding tasks,,.

## Products & Digital
Apple's first developer beta for watchOS 27 refines the "Liquid Glass" design language and introduces a Dynamic App Grid, reviewed in **[具透 | 动态应用网格、Liquid Glass 微调](https://sspai.com/post/110958)**,. The update also enhances the Smart Stack with a new single-pinch gesture for deeper interaction and brings early Apple Intelligence (Siri AI) features to the wrist, though these AI features remain unavailable to users in China,,.

For tourists visiting the New Territories, a comprehensive guide highlights the growing viability of shared biking in **[在香港骑共享单车：访客视角的经验分享](https://sspai.com/post/110750)**,. With services like LocoBike and HelloRide deploying models identical to mainland China, users can easily navigate the 60km cycle track network using Alipay or WeChat, despite Google Maps' lack of cycling support in the region,,.

Meitu launched a new version of RoboNeo at its 2026 Image Festival, acting as an "AI short drama team," detailed in **[2026美图影像节开幕，RoboNeo打造“日更级AI短剧团队”](https://www.infoq.cn/article/R7xRO4KMhl8mUxHXyKDC)**,. It uses Agent Teams to coordinate scripts, storyboards, and video generation, integrating ByteDance's Seedance 2.0 to help creators scale short drama production with consistent characters and scenes,.

## News & Commentary
Just three days after releasing its most powerful model, Fable 5, Anthropic was ordered by the Trump administration to take it offline over a "jailbreak" vulnerability, reported in **[Fable 5被禁3天后Anthropic认怂！](https://www.infoq.cn/article/mBHRVxO514Uki3Eyikxl)**,,. Anthropic executives are urgently negotiating in Washington, arguing the vulnerability is minor and also present in OpenAI's GPT-5.5, which remains unrestricted,.

Leaked financial audits reveal OpenAI lost a staggering $38.53 billion in 2025 against $13.07 billion in revenue, analyzed in **[万亿估值前夜，OpenAI 被曝一年亏约 2600 亿](https://www.infoq.cn/article/XHlhul82geYax30TcJbP)**,. The massive cash burn is driven by $19.18 billion in R&D and skyrocketing compute costs paid to Microsoft, raising market concerns about the sustainable profitability of frontier AI models as the company prepares for its IPO,,.

The global AI gold rush is massively enriching chipmakers in Taiwan and South Korea, while US tariffs and export controls have largely locked China out of the advanced server supply chain, according to **[AI热潮重绘全球技术力量版图，中国明显缺席](https://cn.nytimes.com/business/20260617/taiwan-south-korea-ai-chips/)**,,. Concurrently, Beijing is tightening its "financial firewall" to restrict Chinese retail investors from moving wealth into US tech stocks, forcing brokerages in Hong Kong and Singapore to wind down mainland accounts, noted in **[限制民众海外投资，北京筑起金融高墙](https://cn.nytimes.com/business/20260617/chinese-investors-restrictions/)**,.

## Also Noted
SpaceX acquires AI coding startup Cursor in an all-stock deal valued at $60 billion, absorbing it into xAI to supercharge Elon Musk's developer tooling ecosystem in **[SpaceX 600 亿美元收购 Cursor！](https://sspai.com/post/111124)**,.

Alipay rolls out an AI-first version of its app featuring the "Abao" agent, allowing users to access thousands of lifestyle services through a single conversational interface in **[支付宝 AI 版上线](https://www.ifanr.com/1669123)**,.

Tencent and WeChat Pay are testing an "AI Exclusive Card" that lets users set strict authorization limits and spending caps for AI-driven autonomous payments in **[微信支付「AI 专属卡」最快本周上线](https://www.ifanr.com/1669123)**.

ByteDance's Volcengine launched Seedance 2.0 Mini, halving video generation costs to roughly 0.5 RMB per second for 720P output in **[Seedance 2.0 Mini 上线](https://www.ifanr.com/1669123)**.

Oracle's OpenJDK and GraalVM projects adopted contradictory policies on AI-generated code, with OpenJDK banning it entirely due to IP risks, while GraalVM embraces AI coding assistants in **[同属 Oracle，OpenJDK 与 GraalVM 对 AI 代码贡献态度相反](https://www.infoq.cn/article/hfTxUTc6pj2cHm1Hk5DD)**,.