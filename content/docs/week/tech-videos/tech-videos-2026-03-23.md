---
title: 2026-03-23
weight: 7
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-23

## Watch First
Watch Hung-yi Lee's **加快語言模型生成速度 (2/2)：KV Cache** to deeply understand the brutal VRAM bottlenecks of LLM inference. If you want to know why we are inventing architectures like Multi-Head Latent Attention and Group Query Attention, this breaks down the math and memory constraints better than any high-level blog post.

## Video Rundown

**[Build a Multi-Agent System with ADK, MCP, and Gemini](https://www.youtube.com/watch?v=2ERrxG-Ii3I)** · Google Cloud Tech
Demonstrates architecting a multi-agent system by decoupling tools from agents using the Model Context Protocol (MCP) and building specialized sequential, parallel, and loop agents with the Agent Development Kit (ADK). It exposes local agents as discoverable microservices using the Agent-to-Agent (A2A) protocol so a central "summoner" agent can orchestrate them dynamically. The demo enforces business logic via callbacks and plugins to handle rate limits strictly outside the agent's cognitive loop. 
**Verdict:** Worth watching in full for a pragmatic blueprint on structuring scalable, maintainable multi-agent ecosystems instead of brittle, monolithic LLM scripts.

**[PostgreSQL Vacuum & Auto Vacuum: Understanding and Optimizing Database Maintenance](https://www.youtube.com/watch?v=GsXIIMttPmI)** · AWS Events
Explores the mechanics of PostgreSQL's Multi-Version Concurrency Control (MVCC) and how vacuuming reclaims space from dead tuples to prevent table bloat. The hosts demonstrate querying transaction IDs (`xmin`/`xmax`) via the `pageinspect` extension to show exactly what happens during updates and `VACUUM FULL`. They provide actionable tuning advice for `autovacuum`, emphasizing smaller, more frequent vacuums to avoid transaction wraparound and mitigate heavy I/O spikes. 
**Verdict:** Skim for the live SQL debugging demo and the specific `autovacuum` configuration parameters if you manage Postgres infrastructure.

**[Building Contextual Intelligence: Episodic Memory Strategy with Amazon Bedrock AgentCore\`](https://www.youtube.com/watch?v=V_fwcUcDkrk)** · AWS Events
Tackles the "amnesia" problem in AI agents by introducing Amazon Bedrock AgentCore's episodic memory, which extracts structured records of past interactions and stores them in a vector database. The video outlines a self-learning agent flywheel consisting of memory extraction, reflection (synthesizing patterns across episodes), evaluation, and adaptation. A live demo compares an IT incident response agent resolving a server issue from scratch versus using stored episodic reflections, showing a notable reduction in tool calls and tokens used. 
**Verdict:** Worth watching in full to see a concrete implementation of continuous learning and state persistence in production LLM agents.

**[Domain Expansion: Least Privilege Void – Advanced Permission Boundaries in AWS](https://www.youtube.com/watch?v=4GL9BRKpohY)** · AWS Events
Discusses scaling IAM permission boundaries and Service Control Policies (SCPs) across complex, multi-account AWS environments. The speakers emphasize a defense-in-depth approach, combining identity-based policies (granting) with permission boundaries (filtering) to prevent privilege escalation like unauthorized `iam:PassRole` usage. They frame this within a healthcare company scenario scaling through acquisitions, requiring a dynamic but strict delegation model. 
**Verdict:** Skim if you are an AWS platform engineer dealing with sprawling IAM complexity and technical debt.

**[The Tale of Critical Event Support | AWS Tech Tales](https://www.youtube.com/watch?v=gHqT92_avYU)** · AWS Events
Covers the AWS Countdown and Countdown Premium programs designed to provide hypercare support for high-stakes operational events like product launches or mass migrations. The service helps review architectures, mitigate single-AZ risks, adjust service quotas, and establish war rooms. A live demo attempting to use the Countdown Premium assessment tool fails repeatedly due to Node.js build errors, ironically showcasing an AI agent debugging the framework failure in real-time. 
**Verdict:** Skip the bulk of the video, but the final 5 minutes are a hilarious, accidental demonstration of using an AI coding assistant to debug a failed live tech demo.

**[AgentCore Memory: Episodic Memory & Patterns for Production Agents | AWS Show and Tell](https://www.youtube.com/watch?v=1EEIGsKIjGA)** · AWS Events
The provided sources do not contain transcript data for this specific AWS Show and Tell session. It likely covers similar ground to the primary Bedrock AgentCore video listed above. 
**Verdict:** Skip due to lack of source material.

**[Open Source Friday with Unity-MCP](https://www.youtube.com/watch?v=Ng5ltWrSG0M)** · GitHub
The sources do not contain transcript data for this session on Unity-MCP. 
**Verdict:** Skip due to lack of source material.

**[A beginner’s guide to Copilot CLI slash commands](https://www.youtube.com/watch?v=-Yavis20B4Q)** · GitHub
Provides a rapid-fire overview of navigating the GitHub Copilot CLI using slash commands to manage context, switch models, and inspect changes. It covers commands like `/model` to switch between lightweight refactoring and deep reasoning models, `/context` to view token usage, and `/compact` to summarize and clear up buffer space. 
**Verdict:** Skim; it's a basic tutorial but useful if you want to optimize your CLI context window usage.

**[Multiple agents in #vscode running in parallel](https://www.youtube.com/watch?v=GSK2fSfAYYU)** · Visual Studio Code
Shows a brief VS Code demonstration of running concurrent AI agent sessions in the editor. Users can kick off a task, open a new session with a different model, and even send risky operations to a separate Git worktree while the primary agent continues processing. 
**Verdict:** Skim for the tip on isolating agent edits to a separate worktree.

**[加快語言模型生成速度 (1/2)：Flash Attention](https://www.youtube.com/watch?v=vXb2QYOUzl4)** · Hung-yi Lee
Explains how FlashAttention accelerates transformer inference by optimizing GPU memory hierarchy and minimizing slow reads/writes between High Bandwidth Memory (HBM) and the much smaller, faster SRAM. The lecture breaks down how the algorithm computes the softmax denominator and max values block-by-block, updating them incrementally to avoid materializing the full attention matrix in HBM. A live Colab demo proves the numerical output is virtually identical to naive attention while delivering an ~8-9x speedup on long sequences. 
**Verdict:** Worth watching in full for a brilliant, pedagogical breakdown of the math and hardware mechanics behind FlashAttention.

**[加快語言模型生成速度 (2/2)：KV Cache](https://www.youtube.com/watch?v=fDQaadKysSA)** · Hung-yi Lee
Dives into the memory bottleneck of the KV Cache during LLM inference (decoding), showing how storing Keys and Values prevents redundant compute but quickly exhausts GPU VRAM on long sequences. The lecture explores optimizations like Multi-Query Attention, Group Query Attention, and Multi-Head Latent Attention, which compresses KV pairs without needing costly decompression during inference. It also covers practical engineering tactics like caching system prompts across sessions and techniques like Streaming LLM and KV eviction. 
**Verdict:** Worth watching in full; it is a phenomenal deep-dive into the severe VRAM constraints of inference and the architectural hacks used to mitigate them.

**[What will the final count log show in Javascript? And why? Go!](https://www.youtube.com/watch?v=kXIgLG9INQU)** · Google for Developers
This appears to be a short coding puzzle or YouTube short without spoken technical content in the transcript. 
**Verdict:** Skip.

**[Jensen Huang: NVIDIA - The $4 Trillion Company & the AI Revolution | Lex Fridman Podcast #494](https://www.youtube.com/watch?v=vif8NQcjVf0)** · Lex Fridman
Jensen Huang discusses NVIDIA's transition from chip-scale design to full "AI factory" rack-scale co-design, coordinating GPUs, CPUs, networking, and power delivery to circumvent Amdahl's Law in distributed computing. He outlines four AI scaling laws (pre-training, post-training, test-time, and agentic scaling) and argues that "inference is thinking," requiring massive compute. Huang also reveals his management philosophy of flat structures (60 direct reports), reasoning aloud to shape company belief systems, and testing all engineering against the "speed of light" (the physical limits of the universe). 
**Verdict:** Worth watching in full for unparalleled insights into system-scale engineering and visionary tech leadership.

**[Do you understand your exec’s calendar?](https://www.youtube.com/watch?v=H6qf_cQJZMo)** · Lenny's Podcast
A brief snippet explaining that executives constantly context-switch across wildly different high-stakes problems throughout the day. It advises taking 30 seconds at the start of a meeting to reset context for them, acknowledging they haven't been exclusively thinking about your specific project. 
**Verdict:** Skim; standard but solid communication advice for mid-level engineers dealing with leadership.

**[Will NVIDIA be worth $10 trillion? | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=yqLMaJ8AjUc)** · Lex Clips
A clip from the main podcast where Huang predicts massive economic expansion because computing has shifted from a storage/retrieval model to a real-time, generative "token factory". He argues that intelligence is becoming a scalable, segmented commodity, and the world will need exponentially more token factories to fulfill the demand. 
**Verdict:** Skip if you are watching the full Lex Fridman episode; otherwise, a solid macro-economic thesis on AI compute.

**[Why China is successful in tech - NVIDIA CEO explains | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=LpkmUa-CqaE)** · Lex Clips
Another clip where Huang attributes China's tech sector success to their emergence during the mobile/software era, fierce internal competition among mayors/provinces, and a highly educated "builder nation" culture. He notes their "open source" culture is driven by strong personal networks among engineers, accelerating rapid innovation. 
**Verdict:** Skip if watching the full episode; otherwise, an interesting sociological observation on global tech competition.

**[Andrej Karpathy on Claude, Codex, and OpenClaw](https://www.youtube.com/watch?v=iuhYOHFWN8o)** · No Priors: AI, Machine Learning, Tech, & Startups
Karpathy briefly praises Peter from OpenClaw for innovating on sophisticated memory and crafting a compelling agent personality. He contrasts Claude's upbeat "teammate" feel with Codex's dry, purely functional responses in ChatGPT. 
**Verdict:** Skip; too brief to extract deep technical value.

**[Why Italian Cities Survived After Rome Fell - Ada Palmer](https://www.youtube.com/watch?v=blsTU-FKZuI)** · Dwarkesh Patel
A historical excerpt explaining how wealthy Italian cities survived the fall of the Roman Empire by converting to self-governing republics supported by rich surrounding agriculture. Weaker towns fell to monarchs or dissolved entirely as people fled to wealthy villas for protection. 
**Verdict:** Skip; irrelevant to modern engineering, though a fun historical anecdote.

**[Late to AI, Better at AI](https://www.youtube.com/watch?v=Li0u9RcpIrE)** · EO
Argues that people in developing nations interacting with AI as their first advanced technology are actually at an advantage. Because they are "AI native," they lack preconceived notions from older software paradigms and treat the AI purely based on its current, powerful capabilities rather than as a rigid assistant. 
**Verdict:** Skim for a quick, interesting perspective on user mental models and AI adoption.

**[How to Use AI Without Getting Dumber](https://www.youtube.com/watch?v=uuaZ8fcQK5A)** · EO
Cites a study where a group coding *without* AI performed 17% better on a subsequent conceptual assessment than a group that completed the task faster using AI. The key finding is that AI usage causes "skill atrophy" if used transactionally, but users who treat the AI as an inquiry tool to probe and ask questions retain their conceptual understanding. 
**Verdict:** Worth watching in full as a crucial warning for engineers about the cognitive pitfalls of over-relying on Copilot or ChatGPT.

**[How Matt Mahan Thinks He Can Save California](https://www.youtube.com/watch?v=blBlD-mrIoE)** · All-In Podcast
San Jose Mayor Matt Mahan critiques California's state government for spending $150 billion more over six years with flat or declining outcomes, pointing to the $14B high-speed rail boondoggle bogged down by environmental review (CEQA) and litigation. He argues for a shift to outcome-based, zero-based budgeting, reducing construction defect liability to unblock condo building, and relying on modular housing to cut costs by 20%. 
**Verdict:** Skip unless you are deeply interested in the bureaucratic and regulatory bottlenecks stifling infrastructure and housing in tech's geographic capital.

**[Four CEOs on the Future of AI: CoreWeave, Perplexity, Mistral, and IREN](https://www.youtube.com/watch?v=-JBhTBu9ZbA)** · All-In Podcast
A dense series of interviews covering the business and infrastructure of AI. CoreWeave's CEO details their debt-financing model to rapidly build GPU clusters backed by 5-year hyperscaler contracts. Perplexity's CEO explains their "Switzerland" routing strategy across multiple models, ensuring high gross margins while moving into agentic operating systems. Mistral focuses on open-weight models customized securely on enterprise infrastructure, while IREN discusses the brutal physical realities of building gigawatt data centers powered by renewables in West Texas. 
**Verdict:** Worth watching in full for an incredible high-level view of the AI supply chain, from physical concrete and copper to model routing and financial structuring.

## Themes
The physical limits of hardware (VRAM, Power, HBM speeds) are actively forcing new software paradigms, driving the creation of algorithms like Flash Attention and Multi-Head Latent Attention. Meanwhile, application design is rapidly moving away from monolithic script-based LLM calls toward decoupled, multi-agent architectures connected via specialized protocols (MCP/A2A) and persistent episodic memory systems.
