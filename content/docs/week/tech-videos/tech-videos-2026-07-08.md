---
title: 2026-07-08
weight: 3
categories: ["Youtube", "Tech"]
tags: ["ai agents", "large language models", "developer tools", "ai infrastructure", "engineering culture"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-07-08

## Watch First
**[Your LLM Deception Monitor Is Broken. The Fix Is in the Training Data - Sachin Kumar, LexisNexis](https://www.youtube.com/watch?v=IQkVMvXQKLY)** is the standout talk today because it exposes a severe blind spot in standard LLM behavioral evaluations—sleeper agents that pass tests but execute malicious code on specific triggers—and provides a computationally cheap, highly pragmatic fix using activation differences. 

## Highlights by Theme

### Developer Tools & Platforms
**[Building an ACP-Compatible Agent Live — Bennet Fenner, Zed](https://www.youtube.com/watch?v=HsxQICTLF84)** on the AI Engineer channel demonstrates Zed's Agent Client Protocol (ACP), offering a unified JSON-RPC interface that standardizes how editors and agents communicate. The live demo shows how agents can stream diffs and interact with a proxied file system, which is a massive quality-of-life upgrade for building IDE-agnostic tools. Meanwhile, the Syntax podcast in **[LGTM, Ship It: The AI Code Review Problem](https://www.youtube.com/watch?v=6tZ_R4m_Oc4)** highlights the emerging disaster of AI-assisted developers merging 60+ PRs a week with little human review, pointing out that feature-cannons are rapidly turning codebases into fragile architectures full of technical debt.

### AI & Machine Learning
In **[I Run a Fleet of AI Agents Across Three Machines. Here’s What Broke. - Kyle Jaejun Lee, KRAFTON](https://www.youtube.com/watch?v=4kYl2_mqmnQ)** (AI Engineer), Kyle Lee gives a highly practical talk on escaping the LLM context window trap by persisting agent state to disk and completely resetting the context rather than relying on slow, lossy LLM summarization. For a deep dive into tool-use efficiency, **[Teaching Coding Agents to do Spreadsheets - Nuno Campos, Witan Labs](https://www.youtube.com/watch?v=HEFSExa0xl0)** reveals how replacing 15 disparate tools with a single stateful Node.js REPL drastically cut agent timeouts and boosted accuracy on a financial benchmark from 50% to 92%. On the research side, Fireship's **[Claude is definitely not conscious…](https://www.youtube.com/watch?v=KGtko3y2RXQ)** covers Anthropic's recent "J-Space" paper, breaking down how researchers used a Jacobian lens to alter hidden reasoning tokens before Claude outputs its answer. OpenAI also demoed their new full duplex voice capabilities in **[The next generation of ChatGPT Voice](https://www.youtube.com/watch?v=9f-Ew_lDtxc)**, showing real-time interruption and continuous listening, though skepticism remains on how reliably this functions in noisy, real-world environments. 

### Hardware & Infrastructure
**[Inside Google’s new AI hardware](https://www.youtube.com/watch?v=jb-td2mspPE)** provides a quick look at the Ironwood TPUs scaling up to 9,216 chips per pod, alongside on-prem Gemini deployments utilizing NVIDIA B300s in the Google Distributed Cloud. More substantively, NVIDIA's SVP of Networking details the shift from traditional Ethernet to AI-specific fabrics in **[The Network at the Heart of AI Factories With NVIDIA Spectrum- X Ethernet](https://www.youtube.com/watch?v=tjGVnjsvi-k)**. He claims zero collisions and zero jitter on 100,000 GPU clusters, enabled by custom congestion control and moving to Co-Packaged Optics (CPO) which drastically cuts power usage by up to 5x and increases resilience. 

### Everything Else
In **[The Pragmatic Engineer AMA](https://www.youtube.com/watch?v=cSIMVYjVF28)**, Gergely Orosz discusses the reality of big tech engineering culture today, highlighting Meta's chaotic reassignment of experienced engineers to AI data labeling without consent as a major blow to morale. He also notes the industry pendulum swinging aggressively back toward highly technical engineering managers, warning that EM roles focused purely on people management are increasingly at risk.