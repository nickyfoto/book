---
title: 2026-04-09
weight: 5
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "electric vehicles", "cybersecurity"]
---

# Chinese Tech Daily — 2026-04-09

## Top Story
[The "Hollywood-Style" Heist That Poisoned Axios](http://www.ruanyifeng.com/blog/2026/04/weekly-issue-392.html)
An elaborate, highly targeted social engineering attack compromised `axios`, one of the world's most popular JavaScript libraries, downloaded nearly 100 million times a week. Attackers posed as a startup founder, set up a fake Slack workspace complete with marketing materials, and even hosted a live Microsoft Teams meeting with the lead maintainer to deploy a remote access trojan (RAT) disguised as a software update. This sophisticated heist underscores the escalating threat landscape for open-source maintainers, proving that even the most heavily scrutinized repositories are vulnerable to dedicated human exploits.

## Engineering & Dev
[Anthropic's "Cattle, Not Pets" Agents](https://www.ifanr.com/1661513) 
Anthropic launched Claude Managed Agents, charging $0.08 per session-hour to provide complete cloud infrastructure for AI agents, including memory, sandboxing, and permission control. This new architecture decouples the AI "brain" from the execution container, treating runtime environments as disposable "cattle" rather than fragile "pets," which significantly reduces response times by over 90% and improves isolation security.

[Coupang's Zero-Coordination DB Migration](https://www.infoq.cn/article/y7AbcVajoOEaglvkaDKU)
Coupang engineering detailed how they replaced legacy database sequences across more than 100 services with a custom architecture backed by DynamoDB. By utilizing a dual-layer caching system and sliding-window asynchronous refills, they reduced database writes by 99.9%, proving that relaxing strict global ordering constraints can yield massive scalability and latency gains without rewriting application logic.

[Dynamic Languages Reign Supreme in AI Coding Benchmarks](https://www.infoq.cn/article/uFqo6LfcBAKhzwxZkoJO)
A new benchmark evaluating Claude Code (Opus 4.6) across 13 programming languages reveals that dynamic languages like Ruby, Python, and JavaScript yield faster, cheaper, and more reliable AI code generation than static languages. Rust and C were significantly more expensive and slower, taking 1.4 to 2.6 times longer to generate functional code, suggesting that complex type systems consume vastly more model inference tokens.

[Mounting Databases as Agent File Systems](https://www.infoq.cn/article/r5EHCug4069tix7kDGLf)
TigerFS, a newly open-sourced experimental project, allows developers to mount a PostgreSQL database as a standard file system directory. This enables AI agents and standard Unix tools like `grep` and `cat` to interact with structured data natively without requiring complex APIs, bringing ACID database guarantees directly to file-based terminal workflows. 

## Products & Digital
[The Anonymous AI Video King](https://www.ifanr.com/1661480)
An anonymous AI video generation model named "HappyHorse-1.0" has suddenly topped the Artificial Analysis Video Arena charts, crushing competitors with an Elo rating of 1332 in text-to-video and a record-breaking 1391 in image-to-video capabilities. Observers noted the model's output and architecture are nearly identical to daVinci-MagiHuman, an open-source model released in March by GAIR and Sand.ai.

[Apple's SKU Explosion Strategy](https://www.ifanr.com/1661580)
Apple is reportedly pivoting toward a "sea of devices" strategy, planning to release up to six new iPhone models across various price points by 2027, including a budget "iPhone 18e", a redesigned dual-camera "iPhone Air 2", and a foldable "iPhone Ultra". This aggressive expansion aims to maximize the utilization of expensive A-series chip inventory and aggressively cover every price segment from $400 to $2,800 to squeeze out Android competitors.

[Lynk & Co Breaks Fast-Charging Records](https://www.ifanr.com/1661433)
Lynk & Co shattered the global fast-charging record with the new Lynk 10, utilizing a 900V architecture and a 95kWh solid-state battery. The vehicle can charge from 10% to 70% in just 4 minutes and 22 seconds, beating out the rapid-charging benchmark set by BYD just last month. 

[Nio's Executive ES9 SUV](https://www.ifanr.com/1661599)
Nio unveiled the ES9, a massive 5.3-meter flagship SUV targeting business executives and starting at 420,000 RMB with their BaaS battery rental program. The vehicle hyper-focuses on second-row passenger privacy and luxury, featuring millisecond-response LCD privacy glass, dedicated physical "mute/privacy" buttons, and a fully active suspension system that can balance a champagne tower on ice.

## News & Commentary
[China's Natural Gas Buffer Amidst Middle East Conflict](https://cn.nytimes.com/business/20260409/china-natural-gas-reserves-iran-war/)
While the US-Iran ceasefire brokered with China's push has reopened the Strait of Hormuz, the preceding conflict exposed the fragility of global energy and agricultural supply chains. However, China's massive decade-long buildout of surface LNG storage tanks—including the world's largest ultra-low temperature facilities in Yancheng—successfully shielded its domestic market from the shock that caused widespread fertilizer and fuel shortages across neighboring Asian countries.

[AI is Stripping Students of Cognitive Autonomy](https://sspai.com/post/108300)
A joint study from Oxford and MIT provides causal evidence that using AI for problem-solving causes students' independent analytical skills to decline within just 10 minutes, stripping them of the motivation to think. A deep-dive commentary argues that modern education must urgently pivot to focus on statistical model thinking, abstraction, and academic writing to ensure students learn how to properly define and evaluate problems, rather than merely executing tasks with AI tools.

[Police Bust EV "Water Armies"](https://www.ifanr.com/1661480)
Chinese police cracked down on organized internet "water armies" that fabricated mass negative news about EV brands like Xiaomi, Li Auto, and Huawei's HIMA. These illicit syndicates used AI software to mass-produce clickbait articles at zero cost for platform traffic revenue, previously wiping out billions of RMB in market value for targeted companies through orchestrated smear campaigns.

## Also Noted
* [Zhipu AI GLM-5.1](https://www.ifanr.com/1661480): Zhipu AI released GLM-5.1, an open-source flagship coding model capable of 8-hour autonomous agent tasks, scoring just 2.6 points shy of Claude Opus 4.6 on programming benchmarks.
* [Spotify 2025 Wrapped](https://www.infoq.cn/article/qfW0WobGro3ofIrVIRfO): Spotify is using fine-tuned LLMs to generate narrative-driven "Wrapped" experiences for 350 million users, sparking renewed debates around the normalization of long-term data tracking and privacy.
* [Kuaishou FlameEye](https://www.infoq.cn/article/xJZRwpf2uuMA3UaS2SWm): Kuaishou engineers presented FlameEye at QCon Beijing, an AI-driven platform that converts expert diagnostic intuition into automated flame graph analysis for billion-user apps.
* [Swift 6.3](https://www.infoq.cn/article/LgQEaumUJuPpdlAdYwHN): Swift 6.3 officially launched with supported Android SDKs and new `@c` attributes that significantly streamline C and C++ interoperability.
* [GoPro Layoffs](https://www.ifanr.com/1661480): GoPro announced a new round of restructuring, cutting 145 employees, which accounts for nearly a quarter of its remaining workforce.