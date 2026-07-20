---
title: 2026-07-15
weight: 4
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "consumer tech", "robotics", "china news"]
---

# Chinese Tech Daily — 2026-07-15

## Top Story
**[Pre-IPO Stepfun Launches the STEPX Neo Agent Phone](https://www.infoq.cn/article/PuGOGJPBElTjpCGSwrAu)** · InfoQ
Chinese AI unicorn Stepfun (阶跃星辰) has officially unveiled its first hardware product, the STEPX Neo Agent phone, alongside its custom Step AOS and personal agent Amoo. Spearheaded by newly appointed Chairman Yin Qi (co-founder of Megvii), the device represents a strategic pivot: instead of just selling APIs and tokens, Stepfun wants to control the full hardware-software loop to build a proprietary data flywheel. The launch serves as a crucial pre-IPO narrative to differentiate Stepfun from competitors like DeepSeek and MiniMax, proving that the company can embed its foundational models directly into a consumer-facing "Super App" ecosystem.

## Engineering & Dev
**[Kubernetes Establishes AI Assistance Framework](https://www.infoq.cn/article/mKDCAL0Tr0AaaXJlPIrE)** · InfoQ
The Kubernetes community has released a comprehensive framework for using AI in open-source project maintenance, strictly emphasizing a "human accountability first" approach. While acknowledging AI's utility in streamlining workflows, the rules mandate that human maintainers hold final approval rights, require developers to disclose generative AI usage in PR descriptions, and completely ban AI-generated commit messages to preserve the authenticity of historical project documentation.

**[Alibaba Cloud Unveils AI-Native Database AIDBS](https://www.infoq.cn/article/sDyPWhAWPHttlQJTUwq3)** · InfoQ
Recognizing that 80% of database instances on some platforms are now provisioned by autonomous agents rather than traditional applications, Alibaba Cloud launched its AI-native database service, AIDBS. By utilizing a "OneMeta" semantic layer, the system translates raw physical metadata into business logic that agents can inherently understand, effectively solving the bottleneck where LLMs fail to autonomously query raw data tables. 

**[Datadog's TDD Migration Powered by Claude and Cursor](https://www.infoq.cn/article/T4BhLjLfHYBC8rNfQVxe)** · InfoQ
A Datadog engineer shared insights into a successful test-driven development (TDD) migration of their core Stream Router API using Claude and Cursor. By feeding the LLM the legacy implementation, new data structures, and failing test cases, the team managed to refactor the KV-based codebase to a PostgreSQL backend. The migration slashed operation times from 45 minutes to 1 second and cut database costs by 90%, proving that comprehensive test suites are the ultimate prerequisite for trusting AI-generated code at scale.

**[Linux Foundation Launches Akrites Against AI Cyber Threats](https://www.infoq.cn/article/WL9yUw7LJbBFTgzwXbVZ)** · InfoQ
Backed by tech giants like AWS, Anthropic, Google, and Microsoft, the Linux Foundation initiated the Akrites project to defend critical open-source software against the rapid evolution of AI-driven cyberattacks. As generative AI drastically shrinks the window between vulnerability discovery and weaponization, Akrites provides a coordinated vulnerability disclosure (CVD) framework and shared incident response capabilities to patch flaws before malicious actors can exploit them.

## Products & Digital
**[Apple Sues OpenAI Over Hardware Poaching](https://www.ifanr.com/1672040)** · ifanr
Apple has escalated its legal actions against former engineers and OpenAI, accusing them of stealing trade secrets and aggressively poaching talent to build an upcoming "iPhone rival". The lawsuit specifically targets former Apple hardware VP Tang Yew Tan and engineer Chang Liu, claiming they downloaded highly confidential schematics—including iPhone motherboard designs—and actively used Apple's internal protocols to recruit other employees. 

**[PixVerse Game Introduces Playable AI Demos](https://www.ifanr.com/1672092)** · ifanr
PixVerse Game has launched globally as a real-time, video-driven game engine that transforms basic text prompts into playable, interactive prototypes. Instead of passively watching an AI-generated video, users can actively interact with the generated environment, alter narratives, and tweak game mechanics on the fly, bridging the gap between raw creative ideation and functional game demos.

**[Astribot Unveils Lumo-2 Embodied AI Model](https://www.ifanr.com/1672067)** · ifanr
Astribot (星尘智能) introduced Lumo-2, a latent world-action model for embodied AI that acts like a "foresight" engine for robots. Instead of relying purely on visual-language-action (VLA) mapping, Lumo-2 predicts impending physical changes in a compressed latent space before executing continuous movements, enabling robots to master complex household tasks like catching rolling objects, pouring liquids, and folding clothes.

**[An Indie Developer's Vibe Coding Journey](https://sspai.com/post/112077)** · sspai
An independent creator documented the process of building "Leitra," a digital contact sheet tool for photographers, crafted entirely using Agentic Coding (or "Vibe Coding"). The developer reflects on the philosophical dissonance of AI-assisted programming: while conversational prompting is great for brainstorming, the actual execution requires cold, highly compressed commands, leading to a fatiguing cycle of trial-and-error when AI output hallucinates layout constraints.

## News & Commentary
**[China's Q2 GDP Growth Hits Three-Year Low](https://cn.nytimes.com/business/20260715/china-economy-gdp-growth/)** · NYT Chinese
China's economic growth slowed to 4.3% in the second quarter of 2026, marking a three-year low that underscores deepening consumer frugality and a protracted real estate crisis. Despite a booming export sector led by AI chips, EVs, and batteries, domestic consumption remains sluggish, creating a stark class divide between those benefiting from the high-tech boom and those displaced by the housing slump.

**[Nadella Warns Against Training AI Competitors](https://www.ifanr.com/1672037)** · ifanr
Microsoft CEO Satya Nadella published a blog post warning enterprises that feeding proprietary data and human-corrected workflows into third-party AI models might inadvertently train their providers to become future business rivals. He urged companies to retain ownership of their prompts and business contexts, suggesting the use of orchestration layers to avoid over-reliance on a single AI vendor.

**[NYT Journalist Details Expulsion From China](https://cn.nytimes.com/china/20260715/china-journalist-expelled-spain-world-cup/)** · NYT Chinese
Journalist Vivian Wang recounted her sudden visa revocation and expulsion from China while attempting to board a return flight from Seoul. The action, orchestrated by the Ministry of Foreign Affairs, was likely retaliation for her coverage of China's surveillance apparatus and COVID-19 lockdowns, illustrating the tightening and opaque boundaries of what the state considers "sensitive".

## Also Noted
*   **[DeepSeek Founder Becomes Wealthiest AI Entrepreneur](https://www.ifanr.com/1672037)**: Following a massive $7.4 billion funding round, DeepSeek founder Liang Wenfeng's net worth has surged to $36 billion, surpassing the founders of Anthropic and OpenAI.
*   **[Xiaomi Humanoid Robots "Intern" at EV Factory](https://www.ifanr.com/1672037)**: Xiaomi revealed that its robots have achieved a 98% success rate in fastening nuts after a four-month deployment on its automotive assembly line.
*   **[WordPress 7.0 Ships with Native AI Integration](https://www.infoq.cn/article/VAUIReF3N4Z4SkcosaYN)**: The latest WordPress release bakes AI capabilities directly into its core via the Abilities API, sparking debate among developers regarding security and the necessity of built-in generative tools.
*   **[Publishers Sue Google Over Gemini Training Data](https://sspai.com/post/112334)**: Hachette, Cengage, and other major publishers filed a class-action lawsuit accusing Google of illegally utilizing copyrighted books to train its Gemini models.
*   **[Apple Drops iPadOS 27 Public Beta](https://sspai.com/post/112338)**: The new beta introduces a refined "Liquid Glass" UI, Sidecar touch capabilities, and improved Siri AI integration, leaning closer toward macOS parity.