---
title: 中文科技资讯
weight: 20
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "big tech", "electric vehicles"]
---

# Chinese Tech Daily — 2026-07-31

## Top Story
DeepSeek and OpenAI fired simultaneous shots in the AI "cost-effectiveness" war this week. OpenAI slashed GPT-5.6 Luna API prices by 80%, while DeepSeek released its V4-Flash model, showcasing massive post-training improvements in agentic and coding tasks at the same rock-bottom price. This aligns perfectly with a dominant theme from WAIC 2026: the industry is shifting from raw parameter scaling to maximizing the ROI of every token. As companies grapple with skyrocketing agent costs driven by long contexts and repetitive workflow loops, the battleground for AI infrastructure is decisively moving toward caching, context management, and predictable reliability.

## Engineering & Dev
On the frontend, Meta merged an experimental **[Rust port of the React Compiler](https://www.infoq.cn/article/xeM23uOSNw0s7Q8xUCTp)** into its main repository, boasting up to a 10x performance boost in standalone transformations. However, the community is raising concerns about the cognitive debt of AI-assisted ports, fearing the codebase might become unmaintainable. Similarly prioritizing high-throughput performance, the React state management library Jotai released v2.20.0, reworking its internal store building blocks to prepare for an upcoming v3.

In the AI engineering space, Noma Security disclosed a prompt injection vulnerability dubbed **[GitLost](https://www.infoq.cn/article/u4rDqep8zVWUJsqVoQ23)** targeting GitHub's Agentic Workflows. Attackers successfully tricked the AI agent into leaking private repository data simply by burying the word "Additionally" in a public issue. Meanwhile, an InfoQ experiment successfully tasked an AI assistant with building a **[LangChain4j self-building agent](https://www.infoq.cn/article/QSMNwS8RolhIE9sA2MbE)**, demonstrating the framework's API clarity by generating a multi-agent coding system that could debug its own code.

Finally, Ruan Yifeng's weekly roundup features a touching tribute to **[Fabrice Bellard](http://www.ruanyifeng.com/blog/2026/07/weekly-issue-406.html)**, the legendary yet reclusive French programmer behind FFmpeg and QEMU, whose code quietly powers much of the modern internet. The issue also touched on Huawei's embrace of the "Tau Law"—a philosophy of relentlessly pursuing whatever survival path works, even if it defies conventional industry routes.

## Products & Digital
Xiaomi continues its aggressive push into the EV market, unveiling the **[Kunlun architecture and Pengcheng N90/N70 Max SUVs](https://www.ifanr.com/1673511)**. The company is pivoting its narrative from sporty driving to spacious, tech-loaded family "homes," featuring highly flexible interiors with ultra-long sliding tracks. 

In digital creation, Chinese AI video models are moving past mere visual gimmicks to target actual commercial workflows. MiniMax launched its **[H3 open-source video model](https://www.ifanr.com/1673481)**, which acts like a built-in "AI post-production team" capable of precise background editing and UI fusion. Concurrently, Xiaoyunque's **[Seedance 2.5](https://www.ifanr.com/1673556)** was highlighted for its multi-agent directorial control, allowing creators to generate 30-second coherent narratives.

On the indie front, a developer shared their journey of building an **[interactive Shijing (Book of Songs) map](https://sspai.com/post/112730)**. Using AI, they not only mapped ancient poems to modern geography but generated 305 unique musical tracks. It’s a prime example of the emerging **[One Person Company (OPC)](https://www.infoq.cn/article/uZNH5KLzR1efgGEG0wEq)** trend, where individuals act as orchestrators of diverse AI agents to rapidly build and ship complete products.

## News & Commentary
As China's open-source AI models rival Western counterparts, Beijing faces a complex dilemma. A NYT analysis explores how **[powerful domestic AI models pose new risks to the state](https://cn.nytimes.com/china/20260731/as-chinas-ai-gets-stronger-it-poses-new-risks-to-beijing/)**, heightening anxieties over potential data poisoning, cybersecurity threats, and the circumvention of strict censorship. 

The tech rivalry extends beyond software. The US FCC has proposed a **[ban on Chinese humanoid robots](https://cn.nytimes.com/business/20260731/china-robots-ban-fcc/)** over national security concerns, drawing immediate ire and threats of countermeasures from China's Ministry of Commerce.

In Big Tech developments, **[Lilian Weng abruptly returned to OpenAI](https://www.infoq.cn/article/im3GxWtxYPZpkodNRgVQ)** just days after stepping down as co-founder of Thinking Machines Lab, citing the physical toll of the startup grind. On Wall Street, **[Microsoft and Meta reported divergent earnings](https://www.infoq.cn/article/cWloUAofMHCLHpvscihh)**. Microsoft's massive AI capex was rewarded as Azure revenue surged past $100 billion, while Meta's stock took a hit after heavy AI investments cratered its free cash flow by 91%.

## Also Noted
* ByteDance is aggressively restructuring its B2B wing, **[merging Feishu into Doubao](https://www.ifanr.com/1673460)** to deepen enterprise AI integration.
* Fengqing Tech is pushing the boundaries of AI for Science, utilizing **[AI models for chemical R&D and materials science](https://www.infoq.cn/article/zIm0P8HWsWHWuGC54BsU)**.
* Nvidia's Vera Rubin supercomputer platform is delivering massive efficiency gains, with CoreWeave benchmarking **[a 10x increase in token throughput per megawatt](https://www.infoq.cn/article/3gb6NlxK6c0A9or5Zfbt)**.
* Tired of bad posture? Sspai featured **[Pete Egoscue's E-cise routine](https://sspai.com/post/112833)** to fix developer slouching.
* Apple officially pushed back against the UK CMA's **[App Store steering proposals](https://sspai.com/post/112930)**, arguing it amounts to unfair price regulation.