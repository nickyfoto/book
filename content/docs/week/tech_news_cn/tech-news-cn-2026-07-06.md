---
title: 2026-07-06
weight: 1
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software development", "consumer tech", "open source"]
---

# Chinese Tech Daily — 2026-07-06

## Top Story
ByteDance and Alibaba have simultaneously announced the shutdown of user-facing AI Agent features on their respective Doubao and Qwen platforms. This drastic move coincides with the implementation of China's new "Artificial Intelligence Human-like Interaction Service Management Provisional Measures," reflecting the growing regulatory pressure on AI products that simulate human emotion and relationships. As platforms struggle with the UGC moderation burden of virtual companions, this signals a major pivot in how consumer AI will be delivered in the Chinese market.

## Engineering & Dev
The economics and operational realities of AI coding are dominating developer discourse. Ruan Yifeng notes that unrestricted AI API usage could cost companies millions, effectively ending the era of open-ended generative programming without budget guardrails. Meanwhile, AI is fundamentally altering engineering workflows, with **[Spotify reporting that 73% of its PRs are now AI-generated](https://www.infoq.cn/article/e6J4FbXQj28CiziktLuS)**, pushing code reviews rather than code writing to be the primary bottleneck. This sentiment is echoed by Astral founder Charlie Marsh in an InfoQ piece, **[“I published without reading a single line of code”](https://www.infoq.cn/article/katE2jJKMX7FaGskhvRL)**, where he admits that while AI PR generation costs practically zero, the burden of verifying "grey area" slop is destroying trust in open-source ecosystems.

In the foundation model space, Tencent officially launched the **[Hunyuan Hy3 model](https://www.infoq.cn/article/2IGjsbCMxxHjLGPJ7tls)**, a 295-billion parameter Mixture-of-Experts architecture offering a massive 256K context window and significantly reduced API pricing. Meituan also open-sourced its **[LongCat-2.0](https://www.infoq.cn/article/vRzlWZxXMaxC6aZM7Ufw)**, an "Nvidia-free" 1.6T parameter model natively adapted for domestic Moore Threads GPUs. 

On the robotics front, a joint team from Shanghai Jiao Tong University and Baidu introduced **[AHA-WAM](https://www.infoq.cn/article/Lb4pQTNTQdq657Gzj7EI)**, an asynchronous World-Action Model that solves the latency mismatch in physical AI, reducing inference delay to as low as 17.56ms for high-frequency robotic control.

## Products & Digital
For developers running static blogs, a new tutorial on sspai demonstrates **[how to automatically add Wikipedia links to terminology](https://sspai.com/post/111702)** in Astro-based Markdown sites, utilizing `remark` and `rehype` plugins to embed links during build time and preserve reading flow. Mac users looking for productivity boosts should check out **[BetterCmdTab](https://sspai.com/post/111999)**, a free and highly customizable window management tool that serves as a powerful alternative to native switchers with real-time previews and deep customization.

In consumer hardware, Ming-Chi Kuo reports that Apple's highly anticipated **[foldable iPhone will likely be delayed](https://www.ifanr.com/1670995)**, with pre-orders and sales pushed to the fourth quarter despite strong expected market demand. Finally, for video creators, Volcano Engine announced the **[AI MediaKit CLI + Skill](https://www.infoq.cn/article/jpGdhU4YBXiXOloMEb2I)**, effectively turning LLM agents into fully automated video editing workspaces capable of handling asynchronous tasks like cropping, resolution enhancement, and captioning via natural language.

## News & Commentary
A fascinating inside look at China's AI ecosystem comes via Ruan Yifeng's summary of a **[US tech analyst tour of Chinese AI labs](http://www.ruanyifeng.com/blog/2026/06/weekly-issue-399.html)**, which revealed that despite hardware constraints, domestic labs are extracting 4-7x more efficiency from their compute and relying heavily on brilliant, young PhD interns who are given full reign over frontier model development.

In the open-source debate, Anthropic CEO Dario Amodei sparked controversy in the Chinese developer community by arguing that **[AI "open source" is a misnomer](http://www.ruanyifeng.com/blog/2026/06/anthropic.html)** and should just be called "open weights," a stance criticized by Ruan Yifeng as dismissive of the global need for accessible, private, and uncensored models amidst tightening export controls and regional IP bans.

On the geopolitical front, the New York Times covered the **[release of underground church pastor Ezra Jin](https://cn.nytimes.com/china/20260706/ezra-jin-mingri-china-christian-xi-trump/)**, noting that the symbolic move followed diplomatic intervention and highlights the fragile but calculated negotiations between the US and China.

## Also Noted
*   **[Alibaba Bans Claude Code](https://www.infoq.cn/article/rs0HJTRdN6Pl88LIFh1a)**: Alibaba has restricted internal use of Anthropic's Claude Code over security and backdoor concerns, pivoting to its internal Qoder tool.
*   **[DeepSeek's Hiring Strategy](https://www.ifanr.com/1670994)**: DeepSeek's recent recruitment drive shows a preference for foundational math/physics skills and coding ability over years of experience, averaging only 1.6 years required.
*   **[GTA 6 and the Death of Physical Media](https://www.ifanr.com/1669985)**: Rockstar's decision to potentially only include a download code in GTA 6's physical box signals the final nail in the coffin for physical game discs.
*   **[Rsync Adopts AI Code](http://www.ruanyifeng.com/blog/2026/06/weekly-issue-400.html)**: The maintainer of the foundational `rsync` tool used Claude to rewrite portions of the 3.4.3 release, sparking a massive debate over AI in critical infrastructure.