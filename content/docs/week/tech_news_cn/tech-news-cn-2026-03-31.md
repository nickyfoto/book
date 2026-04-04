---
title: 2026-03-31
weight: 3
---

# Chinese Tech Daily — 2026-03-31

## Top Story
Anthropic had a wildly chaotic 24 hours that sent the developer community into a frenzy. They officially launched a "Computer Use" feature for Claude Code on macOS, granting the AI the ability to directly operate graphical interfaces, test UIs, and execute end-to-end workflows autonomously. However, the real drama unfolded when an intern's error led to a 500,000-line source code leak of Claude Code on npm, exposing Anthropic's unreleased AI blueprints — including an always-on memory and "nightly dreaming" architecture called KAIROS, and a Tamagotchi-style AI cyber pet named BUDDY.

## Engineering & Dev
**Frontend & Libraries**
Former React core team member Cheng Lou released [Pretext](https://www.infoq.cn/article/xFsgDHc7gqYymj8O45OV), a user-space text measurement algorithm built in pure TypeScript that is making waves across the frontend community. By acting as a browser-grade text layout engine, it entirely bypasses the DOM and CSS, completely eliminating expensive layout reflows (like `getBoundingClientRect`). This innovation is particularly vital for the AI era, as it provides AI-generated UIs with a pure mathematical function for precise text and layout calculations.

**The AI Agent Ecosystem**
The open-source AI agent framework OpenClaw is seeing rapid enterprise ecosystem expansion. Alibaba's Tongyi Lab introduced [CoPaw](https://www.infoq.cn/article/Z8OmAd2YjFBlxaA0yfij), an AgentScope-based assistant tailored for Chinese workplace environments that features mixed-retrieval memory and native integration with platforms like Feishu and DingTalk. To solve the monetization problem for agent developers, JD Technology launched [ClawTip](https://www.infoq.cn/article/0LYV5gNFxcNMV4vUeISx), an industry-first Agent-to-Agent (A2A) micro-payment wallet allowing autonomous AIs to negotiate, budget, and settle payments for API skills with zero human intervention. Furthermore, the [ChartGen AI Skill](https://www.infoq.cn/article/fjCbCtuTVq77dYvLb9TM) for OpenClaw was released, finally allowing agents to natively output professional data visualizations instead of dumping raw text or requiring manual Excel imports. 

**AI Tooling & Analytics**
Immediately following Anthropic's "Computer Use" debut, OpenAI launched a [Codex plugin](https://www.infoq.cn/article/5PyUjNXpqHs9Zd3kB67m) specifically for Claude Code, inserting its own adversarial code reviewer right into Anthropic's emerging workflow ecosystem. On the data infrastructure side, InfoQ published a deep dive on [Apache Doris and SelectDB](https://www.infoq.cn/article/upjalB3iBabw6pQaQRTX), detailing how their unified real-time analytics engine and low-latency storage are becoming critical components for RAG pipelines and AI agent observability.

## Products & Digital
**Apple ecosystem updates**
Chinese users were thrown into a frenzy at midnight when [Apple Intelligence](https://www.infoq.cn/article/oBwDcReTgYrw0qNiTeO9) suddenly became available in the iOS 26.4 beta in China, utilizing Baidu's Ernie and ChatGPT models. The feature was hastily pulled just an hour later, with analysts noting it was an accidental rollout deployed without regulatory approval. On the hardware side, sspai published an in-depth [AirPods Max 2 review](https://sspai.com/post/108118); the long-awaited update finally brings the H2 chip, USB-C, and adaptive audio, delivering vastly improved noise cancellation and sound staging, despite keeping its heavy metal chassis.

**Consumer Gadgets & Trends**
In a bizarre twist of digital culture, the vintage [iPhone 4](https://www.ifanr.com/1660035) has become a highly sought-after item among Gen Z, with second-hand prices surging by up to 80 times. Tired of the over-processed, AI-sharpened images of modern smartphones, younger users are chasing the iPhone 4's 5MP sensor for its poor dynamic range, noise, and film-like "emotional" flaws. For the automotive market, Great Wall Motors launched the [Tank 700 Hi4-Z](https://www.ifanr.com/1660468), pivoting the hardcore off-roader into a "full-scenario flagship" aimed at urban drivers who desire rugged aesthetics alongside city-commuting comfort. Meanwhile, Chery Jaguar Land Rover announced it is rebooting the classic [Freelander](https://www.ifanr.com/1660499) nameplate as an independent luxury EV brand built on an 800V platform and featuring Huawei's ADS autonomous driving system.

## News & Commentary
**OpenAI's massive pivot**
[OpenAI completed a staggering $122 billion funding round](https://www.ifanr.com/1660522), bringing its valuation near the $1 trillion mark as the company gears up for a potential IPO. However, the most telling news hidden behind the cash influx is the quiet shutdown of its highly publicized video generator, Sora. Generating video was costing the company $1 million a day while user retention crashed, signaling that OpenAI is aggressively shifting its focus away from flashy, money-burning consumer demos and toward highly profitable, essential enterprise infrastructure.

**Talent migration to Embodied AI**
In a major shift within the autonomous driving sector, Xia Zhongpu, the former head of Li Auto's end-to-end intelligent driving division, has officially joined the embodied AI robotics startup [Wujie Dongli](https://www.infoq.cn/article/JiCrwYbL9x7yJ6p37t44) as co-CTO. His transition highlights a broader industry trend where top-tier talent in world models and reinforcement learning is migrating from self-driving cars to the physical robotics and general-purpose AI brains race.

## Also Noted
- [Users on the sspai community debated the actual utility of AI Agents](https://sspai.com/post/108108), pointing out that steep token costs and poor enterprise app integrations are currently holding back their mainstream usefulness.
- [The Pilot LIGHTIVE fountain pen](https://sspai.com/post/108108) received high praise from sspai reviewers for its ultra-light 12g body and smooth F-nib, presenting a strong alternative to the Lamy Safari.
- [3M industrial soundproof earmuffs](https://sspai.com/post/108108) are becoming an unexpected office productivity hack, offering absolute physical noise isolation from workplace chatter without the ear-fatigue caused by ANC algorithms.