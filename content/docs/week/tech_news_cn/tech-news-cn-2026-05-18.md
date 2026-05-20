---
title: 2026-05-18
weight: 1
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "consumer tech", "us-china relations"]
---

# Chinese Tech Daily — 2026-05-18

## Top Story
The AI industry is waking up to the reality that owning the coding workflow is the ultimate moat. Reports that Elon Musk's SpaceX has secured a massive $10 billion partnership with Cursor—including a right to acquire the coding agent startup for $60 billion—prove that real-world, on-policy developer data is now the most coveted asset for model builders [马斯克花 100 亿想清楚一件事，不做 coding agent 就是等死](https://www.ifanr.com/1666191). Concurrently, this arms race is creating toxic corporate behavior: companies are instituting "Token Consumption Leaderboards" as a KPI, leading developers to spin up useless sub-agents and burn millions of dollars in compute just to look productive [一个月烧掉 930 万元 Token 的人，也没烧出个答案](https://www.ifanr.com/1666146). 

## Engineering & Dev
A 20-year software veteran has raised a poignant alarm about the collapse of the junior developer pipeline. As AI tools automate away low-level tasks like bug fixing and documentation, the industry is inadvertently destroying the critical "training ground" where junior engineers traditionally build system intuition and problem-solving skills [一个二十多年老兵的忧心：那条从Debug开始走向资深工程师的路，正在崩塌](https://www.infoq.cn/article/YAp5zTKldz9fYuYkAuls). This dynamic is shifting the burden of engineering training onto universities, which are struggling to adapt to the new reality. 

On the data and architecture front, engineers are reconsidering deeply held best practices. A new teardown of time-series storage design reveals that structural choices—like normalizing dimensions in PostgreSQL versus utilizing columnar Parquet files—have a vastly greater impact on query costs and performance than the underlying database engine itself [时序存储：影响成本与性能的设计选择](https://www.infoq.cn/article/CADK5ijCqtBsfj2JLMOK). Similarly, data teams managing object storage are successfully abandoning pure record-level streaming in favor of deterministic, time-based micro-batching via Spark Structured Streaming to drastically reduce scheduling latency and improve operational predictability [从批处理迁移到微批次流式处理的实战经验](https://www.infoq.cn/article/AFqttwhIy3TAdjTNv8GJ). 

For teams looking to maintain control over their AI deployments, Coder Agents has introduced a platform allowing enterprises to run autonomous AI coding workflows on self-hosted infrastructure, cleanly separating agent orchestration from the underlying LLM to avoid vendor lock-in [Coder Agents让企业能够在自托管基础设施上运行AI编码工作流](https://www.infoq.cn/article/QY3s00D8dEh7NdrT7GmH).

## Products & Digital
Intel is aggressively pushing back against Apple's highly successful 4599 RMB MacBook Neo with the launch of its 3rd Gen Core "Wildcat Lake" processors. Built on the cutting-edge 18A process, Intel is uncharacteristically bringing its most advanced node to the entry-level segment to reclaim the budget AI PC market [MacBook Neo 杀疯了，英特尔派出「野猫」接招？](https://www.ifanr.com/1666225). In the smartphone space, Red Magic unveiled its 11S Pro series, boasting a completely flat design, the Snapdragon 8 Elite chip, and a massive 8000mAh battery supporting 80W fast charging [派早报：红魔发布红魔 11S Pro 系列手机等](https://sspai.com/post/109908).

For macOS users frustrated by managing Android devices, the newly highlighted app AndDrive is gaining traction. Instead of relying on the notoriously flaky MTP protocol, the app uses ADB to mount Android files directly into Finder and includes a robust screen-mirroring feature [派评 | 近期值得关注的 App](https://sspai.com/post/109886). On the indie web, a new trend of browser-based Alternate Reality Games (ARGs) is captivating players; titles like "Missing College Student" use ordinary web searches and realistic UI to deliver highly immersive puzzle-solving experiences [打破虚拟与现实的边界，这 6 款网页解谜游戏值得一试](https://sspai.com/post/109743).

## News & Commentary
The recent Beijing summit between Donald Trump and Xi Jinping concluded with vague agreements, exposing the limitations of Trump's personality-driven diplomacy when facing a highly strategic counterpart. While Trump publicly touted their "friendship," Chinese officials maintained a significantly cooler, more calculated tone [特朗普在北京大谈“友谊”，但峰会未达成任何实质成果](https://cn.nytimes.com/world/20260518/trump-xi-china-summit/). Notably, Secretary of State Marco Rubio, long known for his hawkish stance on China, visibly softened his rhetoric during the visit, focusing instead on "areas of cooperation" [曾经的对华鹰派鲁比奥为何软化对中国的态度](https://cn.nytimes.com/usa/20260518/rubio-china-trump-trip/). 

Meanwhile, geopolitical maneuvering continued in the skies as Taiwan's President Lai Ching-te completed a secretive 24,000-kilometer flight to Eswatini. The mission, utilizing a borrowed royal aircraft to deliberately bypass airspace restrictions imposed by nations pressured by Beijing, marks an escalation in China's "lawfare" tactics to isolate Taiwan diplomatically [北京与台湾的“高空猫鼠游戏”：赖清德秘密非洲行](https://cn.nytimes.com/asia-pacific/20260518/taiwan-eswatini-china-flight/).

## Also Noted
*   Apple's upcoming standalone Siri application will reportedly feature auto-deleting conversation histories for privacy and heavily swap out underlying models for Google's Gemini. [早报｜马耳他为全民买单ChatGPT会员/卢伟冰预判年底国产直板旗舰破万元/曝苹果新Siri聊天记录可自动删除](https://www.ifanr.com/1666122)
*   The Gates Foundation has completely liquidated its remaining Microsoft stock portfolio, offloading 7.7 million shares worth roughly $3.2 billion. [曝Kimi 后训练团队研究员离职，曾为K2.5贡献者；MiniMax最新招聘，兼职也拿期权；传蜜雪CEO隔空回复黄仁勋，“大佬同款”卖爆｜AI周报](https://www.infoq.cn/article/dC22NUwr2kfuqEW7bb13)
*   Kuaishou is reportedly planning to spin off its Kling AI video generation model at a staggering $20 billion valuation. [曝Kimi 后训练团队研究员离职，曾为K2.5贡献者；MiniMax最新招聘，兼职也拿期权；传蜜雪CEO隔空回复黄仁勋，“大佬同款”卖爆｜AI周报](https://www.infoq.cn/article/dC22NUwr2kfuqEW7bb13)
*   Security researchers have flagged a high-risk SQL injection vulnerability in Yonyou NC's IMsgCenterWebService interface due to unverified external parameter inputs. [用友 NC 系统 IMsgCenterWebService SQL注入漏洞](https://mrxn.net/jswz/yonyou-nc-IMsgCenterWebService-resetInvacationInfoByUsercode-sqli.html)
*   SpaceX is moving its highly anticipated IPO to June, targeting an unprecedented valuation of $1.75 trillion. [早报｜马耳他为全民买单ChatGPT会员/卢伟冰预判年底国产直板旗舰破万元/曝苹果新Siri聊天记录可自动删除](https://www.ifanr.com/1666122)