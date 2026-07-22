---
title: 2026-07-14
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "developer tools", "consumer tech"]
---

# Chinese Tech Daily — 2026-07-14

## Top Story
Behind the delayed removal of Claude Fable 5 from Anthropic's subscription plans lies a growing developer controversy over the hidden token costs of its coding tools. An in-depth analysis **[reveals that Claude Code is burning through user quotas](https://www.infoq.cn/article/eRwadJmvQIvuqaDZKBiz)** with massive, invisible system prompts and frequent cache rewrites, making it significantly more expensive to run than open-source alternatives like OpenCode or OpenAI's new GPT-5.6. This exposes the harsh reality of "platform overhead" in the current AI tooling arms race, where users often unknowingly pay for an AI company's heavy scaffolding rather than actual task execution. 

## Engineering & Dev
In the realm of AI-assisted engineering, developers are discovering that rigorous validation loops are vastly more important than raw model intelligence. For instance, **[PostHog rewrote its SQL parser 70x faster](https://www.infoq.cn/article/kyteEZN46mi8l0eMiKuh)** using Claude, relying heavily on property-based testing and code-coverage feedback rather than blind trust in the LLM. Similarly, **[ServiceTitan utilized a "self-healing" AI loop](https://www.infoq.cn/article/hSKvPpuMW3Y1GyyHtt3I)** to safely migrate hundreds of legacy business metrics, offloading 85% of the toil by heavily standardizing the terminal environment and test scripts. Inside Alibaba, **[Taobao's engineering team shared their full-stack AI coding methodology](https://www.infoq.cn/article/XfXRhsGiL3CchrQNV4zj)**, arguing that the future of programming isn't about writing code, but defining rules and architectures—shifting from "code as spec" to "spec as code" to reign in LLM hallucinations.

On the infrastructure front, **[Block successfully migrated around 450 JVM repositories into a single monorepo](https://www.infoq.cn/article/kCkoct1dbzjvDBsmjOFx)** for its Cash App and Square teams, leveraging a custom IntelliJ plugin to resolve severe dependency drift. Meanwhile, **[Kuaishou achieved a massive 145x speedup in A/B testing metric calculations](https://www.infoq.cn/article/SEXa3rsGTsStXM7lV7al)** by migrating from Spark to Apache Doris, optimizing their 2,000-node cluster with Colocate Join to eliminate cross-node shuffle. Finally, **[Google's AlloyDB introduced local AI proxy models](https://www.infoq.cn/article/9RKrYlX2xWPNabO3ErVj)**, allowing the database to distill external LLM logic and execute semantic queries locally at native database speeds—boosting throughput by up to 23,000 times while drastically cutting token costs.

## Products & Digital
Anthropic is rapidly closing the loop on AI deliverables. **[Claude Artifacts received a major multiplayer update](https://www.infoq.cn/article/Pqcx0ktTdljvoQ3OMxze)**, allowing Artifacts created via Claude Code to be shared publicly and edited collaboratively by team members, directly bridging terminal outputs with Slack discussions. However, Anthropic faces stiff competition from a surprising angle: **[Cursor is reportedly building "Sand"](https://www.infoq.cn/article/uwozdp7L5ex4Z2r7iZRC)**, a generalized workplace AI agent developed alongside SpaceXAI that aims to handle tasks like inbox management, positioning the code editor company squarely against Claude Cowork and ChatGPT Work.

In the Apple ecosystem, **[the iOS 27 and macOS 27 Public Betas have officially arrived](https://sspai.com/post/112288)**. The update introduces a customizable opacity slider for the controversial "Liquid Glass" UI and massive performance boosts to the Spotlight search engine, though the highly anticipated Apple Intelligence and Siri AI features remain restricted for mainland China users. Over in the EV market, **[BYD is overhauling its naming conventions](https://www.ifanr.com/1671991)**. The company is phasing out the "L" suffix for its Dynasty series, introducing "MAX" and "Ultra" monikers alongside "Da" (Big) prefixes to clarify its increasingly crowded premium lineup.

## News & Commentary
Driven by increasing regional threats and technology espionage, **[Japan is building its first centralized intelligence agency since WWII](https://cn.nytimes.com/asia-pacific/20260714/japan-intelligence-agency/)**, actively seeking expertise from Western allies to overcome decades of fragmented intelligence gathering and bureaucratic silos.

On the economic front, a group of nearly 200 economists and tech leaders, including Nobel laureates, **[issued a stark warning about AI's threat to jobs](https://cn.nytimes.com/business/20260714/economists-ai-threat-jobs/)**, arguing that the technology will disrupt the labor market much faster than previous industrial revolutions, leaving current social safety nets entirely unprepared.

Meanwhile, an opinion piece observes a sweeping geopolitical shift: **[the world is quietly distancing itself from the US](https://cn.nytimes.com/opinion/20260714/america-trump-nato-europe-world/)**. Frustrated by erratic trade policies and geopolitical brinkmanship, European and Asian allies are systematically "de-risking" their reliance on American tech and defense, a shift that is already inflating costs for American consumers.

## Also Noted
* **[Node.js 26 has been released](https://www.infoq.cn/article/3ZmFy6tOFQgP7OI3BHwm)**, bringing the modern Temporal API to the runtime by default alongside an upgrade to the V8 14.6 engine.
* **[AWS expanded its DevOps Agent with AI release management](https://www.infoq.cn/article/Af9AUfyturjojjQvv6QI)**, allowing the agent to autonomously test code and assess production readiness before code merges.
* **[Tencent's Hunyuan Hy3 model topped OpenRouter's weekly usage charts](https://www.ifanr.com/1671983)**, processing over 6.13 trillion tokens in a single week during its free tier promotion.
* **[The RG Rotate retro gaming handheld is catching attention](https://sspai.com/post/112320)** for its unique 1:1 rotating square screen design, offering a nostalgic nod to the Motorola ME511 for retro gaming enthusiasts.