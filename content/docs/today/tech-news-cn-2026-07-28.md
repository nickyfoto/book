---
title: 中文科技资讯
weight: 20
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "consumer tech", "semiconductors"]
---

# Chinese Tech Daily — 2026-07-28

## Top Story
**[Kimi K3 一开源，Anthropic 终于不装了](https://www.ifanr.com/1673258)** and **[Kimi K3技术细节公开，用户需获商业授权](https://cn.nytimes.com/technology/20260728/moonshot-kimi-k3-china-ai/)** 
Moonshot AI (月之暗面) has sent shockwaves through Silicon Valley by releasing the weights and technical details for its massive 2.8-trillion parameter Kimi K3 model. The open-sourcing move has ignited a fierce ideological debate over AI safety, with Nvidia's Jensen Huang championing open weights to build resilient defense ecosystems, while Anthropic’s CEO warned against the risks of adversaries using open models. Despite the open-weight release, Kimi K3's sheer size necessitates that most enterprises access it via APIs or third-party channels, and Moonshot is now enforcing commercial licenses for large-scale users. This highlights a broader economic paradox facing China's AI sector: while embracing open-source has accelerated innovation and won global developer loyalty, intense price wars and compute scarcity (worsened by US export controls) are forcing startups to explore new paths to profitability.

## Engineering & Dev
**[谷歌 AlphaEvolve 正式上线，提供“进化式代码优化即服务”](https://www.infoq.cn/article/3UKNEJewovoQDcN0jpoy)**
Google has made its AlphaEvolve agent generally available on the Gemini Enterprise Agent Platform, offering "evolutionary code optimization as a service". The tool uses a baseline algorithm and a user-defined evaluation function to generate, mutate, and test candidate programs iteratively until it converges on highly optimized code. Early adopters like Klarna and JetBrains have already leveraged the agent to significantly boost machine learning throughput and reduce IDE code-completion latency, proving its value for problems with highly measurable evaluation metrics.

**[OpenTelemetry晋升为CNCF的最高成熟度项目](https://www.infoq.cn/article/VtCxtKByjAU54iVaSt6T)**
OpenTelemetry has officially graduated from the Cloud Native Computing Foundation (CNCF), cementing its status as the de facto industry standard for observability and telemetry data collection. Born from the merger of OpenTracing and OpenCensus, the project allows developers to instrument their applications once and export telemetry to multiple backends, effectively eliminating vendor lock-in. Its graduation is particularly timely, as the rise of autonomous AI agents and complex retrieval pipelines demands increasingly robust monitoring frameworks.

**[Hardwood：承诺无强制依赖的高速JVM Apache Parquet处理](https://www.infoq.cn/article/3xRJkEU4NiR1QgMIlsh8)**
For data engineers working in the JVM ecosystem, a new open-source library named Hardwood offers a high-speed, lightweight alternative for reading Apache Parquet files. Unlike traditional implementations that suffer from single-threaded bottlenecks and heavy dependency overhead, Hardwood leverages multi-threaded page decoding across all available CPU cores and mandates zero forced dependencies. Initial benchmarks show the library achieving a throughput of 16.5 million rows per second on an 8-vCPU setup.

**[能力厚重，接入极轻：HarmonyOS 7 如何把鸿蒙生态入场门槛降到几行代码](https://sspai.com/post/112822)**
Huawei is radically lowering the barrier to entry for its HarmonyOS 7 ecosystem, empowering small teams to implement complex features with minimal code. Through the updated ArkTS language and OS-level integrations, developers can enable precise "touch-to-share" capabilities or tap into the system's new AI Agent architecture with just a few lines of code. By componentizing massive underlying capabilities like spatial computing and intelligent intention tracking, Huawei is effectively reducing R&D costs for independent developers while accelerating the growth of the HarmonyOS app ecosystem.

## Products & Digital
**[索尼抛弃实体游戏光盘，谁成为了转型代价？](https://sspai.com/post/112774)**
Sony's aggressive push toward an all-digital future for PlayStation is triggering a massive shift in console gaming. The transition is largely driven by the need for supply chain resilience and strict ESG carbon-reduction mandates, which heavily penalize the manufacturing and logistics footprints of physical media. However, this pivot marks the inevitable death of the physical game rental and second-hand market, transferring total pricing power and user data ownership directly back to the platform.

**[从《奥德赛》观影聊聊 IMAX 影院的分类](https://sspai.com/post/112380)**
Christopher Nolan's highly anticipated sci-fi epic "The Odyssey" is the first feature film shot entirely on 65mm IMAX film, thanks to the newly developed, quieter IMAX Keighley cameras. But cinephiles should be cautious when booking tickets: the ultimate viewing experience requires a 1.43:1 aspect ratio in an IMAX 70mm GT or Laser GT theater, which are exceedingly rare globally. Most commercial IMAX theaters (using Xenon or XT laser setups) will crop the film to a 1.90:1 ratio, meaning viewers must specifically hunt down the highest-tier theaters to see Nolan's uncropped vision.

**[香港卖得最好的 MPV，不是丰田埃尔法，而是五菱的星光 730](https://www.ifanr.com/1673226)**
Defying the long-standing dominance of the Toyota Alphard, Wuling's Darion EV (sold domestically as the Xingguang 730) has surprisingly become Hong Kong's best-selling MPV. Priced competitively and perfectly suited for Hong Kong's narrow roads and high fuel costs, the EV boasts features like electric sliding doors and localized Cantonese AI voice interaction. Its success demonstrates the formidable cross-market appeal and rapid maturation of Chinese EV manufacturing.

## News & Commentary
**[长鑫存储上市首日股价飙升470%](https://cn.nytimes.com/business/20260728/cxmt-stock-price-ai/)** and **[市场对AI支出和中国芯片竞争担忧加剧，全球科技股暴跌](https://cn.nytimes.com/business/20260729/stocks-ai-chips/)**
Chinese memory chip giant CXMT (Changxin Memory Technologies) saw its shares skyrocket by nearly 470% on its IPO debut, instantly making it the most valuable company on the Shanghai Stock Exchange. While CXMT's rise marks a triumph for China's push toward semiconductor self-sufficiency amidst the AI boom, its massive valuation has spooked global markets. Fears over escalating AI infrastructure costs and the threat of Chinese competition in the memory chip sector triggered a broad sell-off across Asian, European, and US tech stocks. 

**[刚刚，北大校友翁荔官宣离职，AI 时代最好的「对齐」是照顾好自己](https://www.ifanr.com/1673220)**
Lilian Weng (翁荔), former VP of Research and Safety at OpenAI, has stepped down from her role at the highly valued AI startup Thinking Machines Lab just 20 months after co-founding it. In her departure letter, Weng cited severe health issues exacerbated by the relentless pressure, uncertainty, and breakneck speed of the AI industry. Her exit sheds light on the immense human toll exacted by the current AI arms race, where companies are sprinting to deliver constant model updates at the expense of their top talent's well-being.

**[亚洲安全局势正经历一场历史性的转变](https://cn.nytimes.com/opinion/20260728/asia-military-security-china-allies/)**
The Asian security landscape is undergoing a historic transformation as regional powers forge deeper, independent defense ties. Spurred by China's growing military capabilities and lingering uncertainties regarding US defense commitments under a new Trump administration, nations like Japan, Australia, and the Philippines are increasing their mutual reliance. Analysts argue that this shift toward a more self-reliant Asian defense architecture could ultimately yield a more robust and stable regional order, alleviating the burden on overstretched US forces.

## Also Noted
*   **[甲骨文在未公开通知的情况下悄然将免费层Ampere A1计算配额减半](https://www.infoq.cn/article/0YV6CYGw8sskGUbEDVIa)**: Oracle silently halved its Always Free Ampere A1 Compute limits to 2 OCPUs, causing widespread frustration among self-hosting developers.
*   **[早报｜雷军解释小米澎程为何无纯电版/腾讯QQ宠物官宣回归/曝三星手机拟采用长鑫内存](https://www.ifanr.com/1673221)**: Xiaomi CEO Lei Jun confirmed the new "Pengcheng" SUV lineup will strictly feature extended-range EV (EREV) powertrains, avoiding massive batteries to mitigate the vehicle's heavy, boxy design. 
*   **[早报｜雷军解释小米澎程为何无纯电版/腾讯QQ宠物官宣回归/曝三星手机拟采用长鑫内存](https://www.ifanr.com/1673221)**: Tencent has officially resurrected its classic "QQ Pet" as a 3D avatar integrated with large language models, allowing the virtual companions to proactively chat and generate daily diaries.
*   **[英伟达重构工程软件栈：Agent、PhysicsNeMo 与 CUDA-X 合流](https://www.infoq.cn/article/zqDgQBsALhkhCkBoRg9l)**: Nvidia has expanded its Agent Toolkit with PhysicsNeMo and CUDA-X libraries, enabling autonomous AI engineers to conduct complex physics simulations for hardware design.
*   **[参与镇压维吾尔人的前新疆警察：我也是受害者](https://cn.nytimes.com/china/20260728/china-uyghurs/)**: A former Chinese police officer who participated in the mass detention of Uyghurs in Xinjiang is seeking asylum in Germany, offering rare insider testimony on the oppressive surveillance state.