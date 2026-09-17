---
title: 2026-09-15
weight: 1
categories: ["News", "Tech"]
tags: ["artificial intelligence", "apple", "ios 27", "software engineering"]
---

# Chinese Tech Daily — 2026-09-15

## Top Story
Apple has officially released iOS 27 alongside iPadOS 27, macOS 27 Golden Gate, and watchOS 27, marking the public rollout of its upgraded Siri AI and Apple Intelligence features. The update brings granular Liquid Glass visual transparency controls, automatic Chinese holiday alarms, and system-wide screen context awareness to Siri, although complete Siri AI functionality remains unavailable in mainland China and the EU at launch pending regulatory approvals. This release highlights Apple's effort to transition iOS from traditional app navigation toward proactive, AI-driven device orchestration across its ecosystem.

## Engineering & Dev

**AI-Assisted System Refactoring**
OpenAI revealed that two engineers utilized Codex and GPT-5.5 over a single quarter to rewrite its core online storage platform, Habitat, from Python into Rust. Habitat handles over 70 million requests per second for 1 billion users, and the Rust rewrite yielded a 6x boost in CPU efficiency and a 15x improvement in memory efficiency. Read the full engineering breakdown in **[OpenAI Deliberately Incurred Technical Debt for Codex to Repay](https://www.infoq.cn/article/QtIy65SxjN0Q4riY7tCo)** · InfoQ 中文站. In parallel, OpenAI launched **[GPT-6 Astra](https://www.infoq.cn/article/IfxYoy1PPkFQUpjWVBVr)** · InfoQ 中文站, a model tailored for coding, computer use, and cybersecurity that scored 72.6% on OSWorld 2.0 and features persistent long-context note-taking across task windows.

**Web Protocols & Systems Infrastructure**
The IETF published RFC 10008, formally introducing the `QUERY` method as the first new standard HTTP verb since `PATCH` in 2010. Covered in **[HTTP Adds New QUERY Method: Praise and Skepticism](https://www.infoq.cn/article/BmJh0DzGPYBEl1zlyO0C)** · InfoQ 中文站, `QUERY` enables safe, idempotent, and cacheable requests while allowing complex payloads in the request body. On the hardware architecture side, CPython officially promoted RISC-V to a Tier 3 supported platform under PEP 11, detailed in **[Python Embraces RISC-V: CPython Officially Promoted to Tier 3 Platform](https://www.infoq.cn/article/ipaJ5VXPgUiMFmaAgAEG)** · InfoQ 中文站, establishing official upstream support for open instruction set hardware.

**Agentic Engineering Methodologies**
Tencent's QQ Speed development team detailed its "Loop Engineering" framework in **[QQ Speed's Loop Engineering in Agentic R&D Transformation](https://www.infoq.cn/article/ifpS7rhLq24FjWYM6IqW)** · InfoQ 中文站, explaining how consuming 30 billion monthly tokens required shifting from ad-hoc prompting to closed feedback loops. The team implemented custom LLM linters for automated code self-healing, CI-level merge request reviews, and structured pre/mid/post-task workflows to scale developer agent concurrency safely.

## Products & Digital

**Enterprise & Productivity AI**
ByteDance introduced Feishu 8.0 with native "Doubao Work" integration, launching team-level AI agents dubbed "Doubao Work Partners". As featured in **[Feishu and Doubao Work Bring China's First Team Agent into Group Chats](https://www.ifanr.com/1680138)** · 爱范儿, these agents possess independent organizational identities, allowing them to join group chats, maintain shared memory, execute CLI workflows, and edit docs or slide decks collaboratively. Separately, ByteDance released the consumer edition of its Doubao Phone Assistant on the Nubia NaviX Ultra, delivering system-level screen understanding and automated cross-app task execution, reported in **[Doubao Phone Assistant Consumer Edition Officially Released](https://sspai.com/post/114593)** · 少数派.

**Mobile Ecosystem & Hardware**
Beyond the primary OS update analyzed in **[iOS 27 Review: Siri AI Finally Gets Smart](https://www.ifanr.com/1680134)** · 爱范儿 and **[iOS 27 Features & Updates Breakdown](https://sspai.com/post/114565)** · 少数派, Apple added Liquid Glass UI opacity sliders, camera control customization, and native AirPods EQ adjustments to refine day-to-day usability across older iPhone models.

**EVs & Automotive Tech**
BYD's Denza brand launched the all-electric N8L SUV starting at ¥299,800 (~\$42,200), offering a 960km CLTC range, 130kWh Blade battery, and a fully featured "DiDi Shrimp" AI voice assistant capable of handling multi-step lifestyle tasks, covered in **[Denza N8L Pure Electric Edition Launches at ¥299,800](https://www.ifanr.com/1680061)** · 爱范儿. Meanwhile, Geely opened pre-sales for the Galaxy Battleship 700 hybrid off-roader starting at ¥199,800 (~\$28,100) in **[Geely Galaxy Battleship 700 Starts Pre-Sale at ¥199,800](https://www.ifanr.com/1680277)** · 爱范儿, featuring a "GTA" architecture that embeds a unibody frame with ladder-frame strength alongside a tri-motor 4WD setup.

## News & Commentary

**State Security vs. Foreign AI Models**
China's Minister of State Security, Chen Yixin, published an essay warning that foreign AI models (specifically citing Claude Mythos and GPT-5.5-Cyber) pose security and political risks to CCP governance and critical infrastructure, as analyzed in **[China Security Minister Warns AI Poses Direct Threat to Party Governance](https://cn.nytimes.com/china/20260915/china-ai-security-risks-anthropic/)** · 纽约时报中文网. Chen called for stricter state regulation and oversight over data sovereignty ahead of upcoming diplomatic summits.

**The AI Slowdown Debate in Washington**
President Trump rejected calls from Anthropic CEO Dario Amodei and other AI leaders for mandatory development slowdowns, calling AI safety concerns a "hoax" that risks ceding leadership to China, as covered in **[Trump Rejects AI Safety Fears as 'Hoax,' Refuses Regulation](https://cn.nytimes.com/usa/20260915/trump-ai-regulation-anthropic-dario-amodei/)** · 纽约时报中文网. During a live broadcast at the All-In Summit, NVIDIA CEO Jensen Huang affirmed to Trump on speakerphone that industry leaders will not allow AI progress to stall.

**Deconstructing Recursive Self-Improvement (RSI)**
An analysis in **[Is RSI the Gateway to Superintelligence or a Fear-Mongering Business?](https://www.ifanr.com/1679813)** · 爱范儿 examines the discourse around Recursive Self-Improvement (RSI)—where AI autonomous systems build next-generation models. The article explores whether existential risk warnings from AI frontier labs represent genuine safety imperatives or a strategic effort to erect regulatory barriers that protect incumbent market leads against open-source competitors.

## Also Noted

* **[Moscow's Digital Surveillance Wonderland](https://cn.nytimes.com/world/20260915/moscow-russia-putin-digital-surveillance/)** · 纽约时报中文网: Moscow has networked over 300,000 facial-recognition cameras and facial-payment subway turnstiles into a centralized database, blending civic convenience with an inescapable apparatus for monitoring dissidents and enforcing conscription.
* **[R.F. Kuang's Five Favorite Spots in Taipei](https://cn.nytimes.com/travel/20260915/rf-kuang-taipei-things-to-do/)** · 纽约时报中文网: Author R.F. Kuang highlights five Taipei locations, including Qingtian Tea House and Spot-Huashan art-house cinema, that inspired the backdrop for her new novel *Taipei Story*.
* **[Unitree Unveils G1+ Humanoid Robot](https://www.ifanr.com/1680097)** · 爱范儿: Unitree released the G1+ humanoid robot featuring 25 joint degrees of freedom, dual neck movement, 110% higher peak torque at the shoulder and waist, and continuous external power supply for extended research deployments.
* **[DeepSeek Shifts Hiring to Engineering as STAR Market IPO Rumors Emerge](https://www.infoq.cn/article/HEN8icBvRCoKVvo2dSNA)** · InfoQ 中文站: DeepSeek opened 150 new engineering-focused positions with zero AI research roles to handle system scaling challenges, as market sources report preliminary discussions for a domestic STAR Market (科创板) IPO.

---

💡 **Next Step**: Would you like me to generate a tailored slide deck or a high-level executive report based on today's engineering and AI policy highlights?