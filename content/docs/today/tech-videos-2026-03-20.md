---
title: Youtube Tech Channels
weight: 2
---

# Tech Videos — 2026-03-20

## Watch First

Andrej Karpathy's interview provides a highly credible look into the cutting-edge reality of "AI psychosis," where human engineers are now the primary bottleneck in software development,. It is an essential, paradigm-shifting watch on how to stop writing code manually and start orchestrating asynchronous, autonomous agent loops using markdown specifications,.

## Video Rundown

**[Google Cloud Live: Supercharge your AI agents: Inside the new ADK integrations ecosystem](https://www.youtube.com/watch?v=nId1rrAIEx4)** · [Google Cloud Tech]
This video introduces Google Cloud's new ADK integrations ecosystem designed to enhance AI agent capabilities. It outlines the technical patterns for integrating agents directly into Google Cloud infrastructure. No detailed transcript was provided for deep technical analysis.
Verdict: Skim for specific API integration patterns if you are currently building agents on GCP.

**[AWS AI and Data Conference 2026 - Building Safe AI Agents](https://www.youtube.com/watch?v=nhOTubv4xqI)** · [AWS Events]
This talk addresses the challenge of moving agent prototypes into production by implementing strict, deterministic security controls outside the non-deterministic LLM,. It highlights the use of neurosymbolic AI and automated reasoning to mathematically verify that an agent's actions comply with organizational policies,. Genesis provides a practical architecture breakdown, showing how they route requests through a single orchestrator to specialized, stateless skill agents,.
Verdict: Worth watching in full for the neurosymbolic AI methodology and the real-world Genesis architectural breakdown.

**[AWS AI and Data Conference 2026 - Building Security at Speed](https://www.youtube.com/watch?v=APzkATgX1pU)** · [AWS Events]
This fireside chat explores how to embed security culture by empowering engineers as "security guardians" rather than treating security teams as a gatekeeper,. It advocates for giving these guardians the same operational tools as the security team to reduce friction. The speaker notably highlights using the Kiro agentic IDE for spec-driven development, allowing teams to instantly generate and validate threat models during the ideation phase,.
Verdict: Skim to understand how agentic IDEs are being used to shift threat modeling entirely to the left.

**[AWS AI and Data Conference 2026 - Fintua’s Path to Global Scale](https://www.youtube.com/watch?v=Ay2OL6yr8pg)** · [AWS Events]
This business case study follows Fintua's pivot from a manual VAT reclaim service to a global tax technology platform due to the 2020 pandemic,. To affordably process billions of transactions across 180+ countries, they migrated to a serverless AWS architecture,. They utilized AWS MAP funding and agile development with partner Slalom to de-risk the modernization process,.
Verdict: Skip unless you are explicitly seeking a business-level case study on FinTech serverless migrations.

**[AWS AI and Data Conference 2026 - Agentic AI with Amazon Connect](https://www.youtube.com/watch?v=J1OGnom7UJg)** · [AWS Events]
This presentation pitches Amazon Connect's AI upgrades to replace legacy, rules-based call centers with intelligent deflection and real-time insights,. It demonstrates how Ryanair redirected 4.4 million calls using AI intent analysis instead of traditional DTMF menus,. The Irish Revenue Commissioners also detail how they use post-call AI summarization to drastically reduce after-call work for 2,000 agents,.
Verdict: Skim if you are tasked with modernizing legacy customer service pipelines, otherwise skip this marketing-heavy presentation.

**[AWS AI and Data Conference 2026 - The Power of ServiceNow on AWS](https://www.youtube.com/watch?v=Fxc_iAYryr0)** · [AWS Events]
ServiceNow argues that deploying disparate AI agents creates a chaotic "patchwork enterprise," and positions its platform as the required "air traffic control" for workflow orchestration,. They detail their Workflow Data Fabric, which uses zero-copy connectors to query platforms like Redshift and Snowflake in situ while applying semantic reasoning,. They also showcase new autonomous IT agents that behave as virtual employees, resolving VPN and patching issues with zero human intervention,.
Verdict: Skim to see how enterprise SaaS platforms are actively trying to monopolize agent orchestration layers.

**[AWS AI and Data Conference 2026 - Navigating AI Monetization](https://www.youtube.com/watch?v=jVnQkzYP2sc)** · [AWS Events]
This talk explores how agentic AI fundamentally breaks traditional SaaS user-based pricing, since agents accomplish tasks autonomously and divorce value from headcount,. It categorizes emerging monetization into three buckets: hybrid user-based (for human-centric copilots), usage/credits-based (for discrete task execution), and outcome-based (for highly attributable, autonomous endpoints),,. The speaker provides a matrix mapping agent autonomy and outcome attribution to help product teams select the right billing model,.
Verdict: Worth watching in full for any technical founder or product owner struggling to align LLM compute costs with SaaS billing.

**[AWS AI and Data Conference 2026 - How Intercom Doubles Down on AI](https://www.youtube.com/watch?v=2pJ7O0bvNYI)** · [AWS Events]
An engineering leader from Intercom gives a BS-free account of pivoting their product and entire engineering culture to AI to survive shifting SaaS economics,. He details setting an aggressive goal to double R&D productivity by enforcing the use of AI tools (like Claude Code) and abandoning "community ownership" for opinionated, mandatory workflows,,. To force behavior change, they required all 450 R&D staff to build AI systems, successfully pushing agent-driven code pull requests above 90%,.
Verdict: Worth watching in full; it is a highly credible and pragmatic look at forcing an entire engineering org to adopt AI workflows.

**[AWS AI and Data Conference 2026 - Project Mantle in Amazon Bedrock](https://www.youtube.com/watch?v=lhsZb8dZbZw)** · [AWS Events]
This infrastructure deep-dive looks under the hood at "Project Mantle," the distributed inference engine that powers Amazon Bedrock. It explains how AWS standardized internal interfaces to solve capacity fragmentation, allowing them to dynamically pool capacity for wildly disparate open-source models,. It also outlines how they handle the asynchronous, stateful nature of modern agentic tool-calling through intelligent scheduling, trend classifiers, and cross-region inference routing,,.
Verdict: Worth watching in full for backend engineers curious about how AWS solves LLM multi-tenant scheduling and capacity pooling at massive scale.

**[AWS AI and Data Conference 2026 - Unlocking Europe’s AI Potential](https://www.youtube.com/watch?v=iHS2qdOOntE)** · [AWS Events]
Based on a survey of 17,000 businesses, this presentation notes that while 54% of EU businesses have adopted AI, 58% remain stuck in "PC purgatory" doing only basic tasks,,. The speaker argues that European scaling is blocked by a severe digital skills gap, lack of dedicated AI funding, and a 42% "fragmentation tax" caused by navigating 27 different regulatory regimes,,. The talk advocates for a unified digital single market and treating AI as a creative partner to unlock a potential 600 billion in GDP,.
Verdict: Skip unless your role heavily intersects with EU tech policy and macro-economic trends.

**[AWS AI and Data Conference 2026 - Agentic AI at Sage with AgentCore](https://www.youtube.com/watch?v=RMa0TOtjCj0)** · [AWS Events]
Accounting software firm Sage discusses using AWS Bedrock Agent Core to corral disorganized, siloed agent deployments into a centralized orchestration platform called "Sage Nexus",. They break down their architecture, which relies on serverless microVM runtimes for isolated agent execution, and an API gateway that exposes their existing backend lambda functions to the agents via semantic search,,. They also demonstrate a CI/CD evaluation suite that runs hundreds of parallel hallucination and jailbreak tests before any agent reaches production,.
Verdict: Skim for the architectural breakdown of Sage Nexus and their approach to automated CI/CD agent evaluation.

**[AWS AI and Data Conference 2026 - dentsu and Amazon Nova Multi-Modal AI](https://www.youtube.com/watch?v=F2y6I085h6s)** · [AWS Events]
AWS introduces Amazon Nova 2 Light (multimodal) and Nova 2 Sonic (speech-to-speech), highlighting their 1-million-token context windows and native tool calling, including a built-in code interpreter and web grounding,,. Dentsu showcases how they leverage Nova's multimodal features to analyze the visual structure of video advertisements to predict performance without relying on large historical datasets,. They also demo integrations with Luma AI to dynamically generate product videos and social posts directly from static brand guidelines,.
Verdict: Skim the Dentsu demonstration segments to see credible, practical applications of multimodal AI in digital marketing generation.

**[AWS AI and Data Conference 2026 - LLM Customization](https://www.youtube.com/watch?v=tS0uI6-CMDk)** · [AWS Events]
This technical overview maps out the spectrum of LLM customization, moving from prompt engineering and RAG to Supervised Fine-Tuning (SFT), Reinforcement Fine-Tuning, and Continued Pre-Training (CPT),. It explicitly warns about "catastrophic forgetting," where heavy CPT can destroy a model's instruction-following abilities, requiring subsequent SFT to fix. The talk positions SageMaker's serverless model customization as the antidote to infrastructure overhead, and introduces Nova Forge for securely mixing proprietary data into frontier model checkpoints,.
Verdict: Skim to grasp the current timeline, data volume requirements, and infrastructure constraints for different fine-tuning methodologies on AWS.

**[AWS AI and Data Conference 2026 - Kiro: Enterprise Developer Productivity](https://www.youtube.com/watch?v=A-v3rdpdSJI)** · [AWS Events]
This presentation introduces Kiro, an OSS-based agentic IDE, built to solve the problem of LLMs rapidly generating code that ignores enterprise security and architectural standards,. It highlights a "steering" feature that injects organizational guidelines into the agent's context, and "powers" which dynamically load specific MCP tools only when required by the prompt,. The core thesis advocates for "spec-driven development," requiring the agent to generate strict requirement and design documents before writing any actual code,.
Verdict: Worth watching in full for engineers interested in structured strategies to stop "vibe coding" and enforce architectural standards on LLM outputs.

**[AWS AI and Data Conference 2026 - Building an AI-Ready Data Foundation](https://www.youtube.com/watch?v=YRc-F6oc74U)** · [AWS Events]
This session argues that AI agents are only as effective as the data foundations they sit on, requiring scalable infrastructure like Trn3 instances and robust context management,. It highlights SageMaker Unified Studio, which brings data engineering, ML workflows, and an AI assistant into a single interface,. The studio features a federated, Iceberg-enabled catalog that allows for zero-ETL, data-in-place querying across multiple platforms including Snowflake and Databricks,.
Verdict: Skim for updates on SageMaker Unified Studio and Iceberg federation, but recognize it is standard data lake marketing.

**[AWS AI and Data Conference 2026 - Agentic AI with Commercial Databases](https://www.youtube.com/watch?v=XbwyP9gVxnw)** · [AWS Events]
This talk explores how agentic AI completely changes standard database interaction patterns, warning that agents attempting complex joins at the application layer will destroy performance and bankrupt token budgets,. It strongly recommends against allowing agents to generate raw SQL; instead, databases should be shielded behind hardened APIs exposed via MCP servers. It also covers AWS's continued support for running commercial databases like Oracle and SQL Server, including new flexible Database Savings Plans,.
Verdict: Skim for the highly pragmatic architectural advice on shielding operational databases from raw LLM text-to-SQL generation.

**[AWS AI and Data Conference 2026 - Next Gen Agentic Search on AWS](https://www.youtube.com/watch?v=AvEmF5x4I5M)** · [AWS Events]
This session traces the evolution of search engines from basic BM25 keyword matching to semantic vectors, and now to agentic search that incorporates multi-turn reasoning and dynamic tool execution,. It details how Amazon OpenSearch Service has embedded a native agent framework, conversational memory, and an MCP server directly within the cluster,. Checkout.com also shares a post-mortem of their migration from a legacy Elasticsearch setup to managed OpenSearch to solve P99 latency spikes and utilize tiered storage,.
Verdict: Skim the Checkout.com migration story; the OpenSearch agent capabilities are interesting but clearly in their early stages.

**[AWS AI and Data Conference 2026 - DataOps for AI-Ready Platforms](https://www.youtube.com/watch?v=n_1rpnIwFCc)** · [AWS Events]
Using FanDuel's gaming platform as a reference, this talk demonstrates how agentic AI can dynamically route complex SQL queries across Athena and Redshift against massive Iceberg tables,. It argues that without mature DataOps—including query performance monitoring, automated testing, and incident management—agents will hallucinate or suffer from severe latency,,. The demo shows agents not just retrieving data rows, but actively parsing the results to provide synthesized business insights directly to analysts.
Verdict: Skim the live demos to see how AI is actively shifting the data analyst role from SQL-jockey to insight-interrogator.

**[AWS AI and Data Conference 2026 - Agentic AI with AWS Streaming](https://www.youtube.com/watch?v=h8-aysGF0u8)** · [AWS Events]
This highly technical session tackles the integration of AI agents with high-velocity data streams (like Kinesis and Flink). It explicitly warns against invoking an LLM for every streaming event due to crushing latency and cost; instead, standard ML or Flink rules should detect anomalies and only forward those specific events to the agent for root-cause analysis,. It also details a multi-agent architectural pattern where monolithic agents are decoupled into specialized micro-agents connected via SQS queues to ensure fault tolerance and safe retries,.
Verdict: Worth watching in full for concrete, production-ready architectural patterns on connecting LLMs to firehose data streams without going bankrupt.

**[AWS AI and Data Conference 2026 - Agents and Memory Architecture](https://www.youtube.com/watch?v=4n7DBIUdKVk)** · [AWS Events]
This presentation explains how to cure the "Amnesia loop" caused by finite context windows using Amazon Bedrock Agent Core Memory,. It maps out a pipeline where raw conversation events enter synchronous short-term memory, while an asynchronous extraction module parses, deduplicates, and vectorizes the data into distinct long-term memory stores (semantic, summary, episodic),. Interestingly, Fintua shares a counter-example where they explicitly used _stateless_ AI swarms to rapidly onboard distinct global tax regimes, intentionally avoiding memory to prevent hallucinated data bleed between jurisdictions,.
Verdict: Worth watching in full for the technical breakdown of synchronous vs. asynchronous memory pipelines in agent architectures.

**[AWS AI and Data Conference 2026 - Event Highlights](https://www.youtube.com/watch?v=-8DMrsrkTG8)** · [AWS Events]
This is a brief promotional recap reel of the AWS conference, featuring soundbites about AI changing business and the importance of adapting to agentic technology. It lacks any specific technical detail or architectural guidance.
Verdict: Skip; pure marketing montage.

**[AWS Squatch Talks - Securing AI Workloads in the Cloud](https://www.youtube.com/watch?v=r4ePVdkJNpU)** · [AWS Events]
In this podcast-style session, AWS engineers discuss how to map security controls to generative AI using the "AI Scoping Matrix",. They emphasize that because LLMs are fundamentally non-deterministic and prone to prompt injection, core security controls (like IAM identity passing and VPC boundaries) must be enforced entirely _outside_ the model's reasoning loop,. The conversation covers how to progressively layer on these controls as workloads evolve from basic chatbots ("AI that answers") to autonomous agents operating on behalf of users ("AI that acts"),.
Verdict: Skim for a useful, high-level conceptual framework on AI threat modeling and scoping.

**[AI Agent Guardrails for Production on AWS | Databases for AI](https://www.youtube.com/watch?v=_YiZBpjrx84)** · [AWS Events]
This video is listed in the index but no transcript was provided for detailed analysis. The title suggests a technical guide on configuring Bedrock Guardrails specifically to protect database access from unsafe or hallucinated agent queries.
Verdict: Skim if you are currently trying to implement database-level safety for your AI endpoints.

**[This new Linux distro is breaking the law, by design…](https://www.youtube.com/watch?v=nkY_s9HpL9M)** · [Fireship]
This satirical news segment covers California's Digital Age Assurance Act (AB1043), which attempts to mandate OS-level age verification. It highlights "Ageless Linux," a protest script for Debian-based distros that modifies OS metadata, installs a non-functional verification API, and deploys anti-compliance documentation to intentionally break the law. The creator argues the law is a Trojan horse to turn local devices into tools for mass surveillance.
Verdict: Skim for entertainment and staying aware of the ridiculous regulatory battles around OS-level privacy.

**[Jueves de Quack con Gis Torres](https://www.youtube.com/watch?v=VMPap6uuErU)** · [GitHub]
This video is listed in the index without a transcript. The title indicates it is a Spanish-language community stream hosted by GitHub.
Verdict: Skip unless you are a Spanish speaker actively following GitHub community content.

**[The Download: MCP funeral, Perplexity computer, and Doom on a badge](https://www.youtube.com/watch?v=da8cSPcO7Lw)** · [GitHub]
A rapid-fire developer news roundup discussing the online debate between using raw shell commands versus the Model Context Protocol (MCP) for agent tooling, arguing MCP is strictly necessary for secure, enterprise-scale connections,. It touches on Perplexity's new "Personal Computer," which is a Mac Mini that keeps local files constantly connected to remote AI agents. It also highlights a community port of Doom running on the GitHub Universe badge, and the rollout of custom issue fields in GitHub,.
Verdict: Skim for a lighthearted catch-up on the week's general developer ecosystem news.

**[Ship, or be left behind](https://www.youtube.com/watch?v=fYEF6m6rQdY)** · [Visual Studio Code]
This short soundbite from the VS Code team argues that the AI era has compressed software planning cycles from weeks to daily cadences. It warns that teams who spend months debating approaches will simply be left behind by competitors shipping and iterating rapidly,.
Verdict: Skip; it is just a brief motivational clip.

**[Why Design feels different](https://www.youtube.com/watch?v=CMvnRYgB5Ac)** · [Visual Studio Code]
This conversation highlights how AI coding tools are blurring the boundary between UX design and front-end engineering,. Designers report moving away from polishing static Figma prototypes, instead using tools like Copilot to spin up parallel local branches and tweak actual UI code dynamically to find real-world edge cases,. It also touches on the concept of "GenUI," where interfaces are generated on the fly to fit a specific user prompt rather than forcing the user to navigate a static application,.
Verdict: Skim for interesting insights into how AI agents are effectively collapsing the traditional design-to-engineering handoff.

**[NVIDIA Alpamayo In-Car Reasoning: AI That Drives, Explains Decisions, and Responds to Passengers](https://www.youtube.com/watch?v=5EEYgxoT8kc)** · [NVIDIA]
A brief demonstration of NVIDIA's "Alpamayo" in-car reasoning model operating in real-time. It shows the car narrating its driving decisions (like yielding to a pedestrian or navigating around a double-parked vehicle) while seamlessly answering the driver's general knowledge questions and executing routing changes,.
Verdict: Skim for a quick visual on NVIDIA's multimodal automotive inference capabilities.

**[Quantum Computing Reaches an Inflection Point With NVIDIA NVQLink | GTC 2026](https://www.youtube.com/watch?v=CYLn56Vc2XA)** · [NVIDIA]
This video introduces NVQLink, a high-performance interconnect acting as the "Rosetta Stone" between quantum hardware and classical GPU supercomputers. It argues that because future quantum applications (like drug design and materials discovery) are fundamentally hybrid, they strictly require GPUs to keep the qubits running and process the surrounding data,. NVIDIA has released CUDA-Q Realtime to standardize this hybrid communication.
Verdict: Skim if you follow HPC/Quantum architecture; it clearly signals NVIDIA's strategy to make GPUs mandatory for quantum scaling.

**[NVIDIA GTC 2026 Event Moments: Innovation, Energy and Community](https://www.youtube.com/watch?v=zMvr3mZHiW8)** · [NVIDIA]
A promotional highlight reel for NVIDIA GTC 2026, featuring brief quotes from Jensen Huang. He states that AI has moved from experimental to essential, driven by a million-times increase in computing demand,.
Verdict: Skip; it is a pure hype reel.

**[NVIDIA GTC 2026 Keynote with Jensen Huang Highlights](https://www.youtube.com/watch?v=kDd24YOeqQQ)** · [NVIDIA]
These snippets from Jensen Huang's GTC keynote declare that the "inflection of inference" has arrived, turning data centers into token-generating factories. Huang claims the new Grace Blackwell NVLink 72 system delivers a 50x performance-per-watt increase over Hopper, and introduces the vertically integrated "Vera Rubin" architecture,. He emphasizes the NemoClaw reference design and NVIDIA's heavy push into physical AI and robotics simulation (Omniverse),.
Verdict: Skim to catch up on NVIDIA's hardware claims and macro positioning regarding agentic inference costs.

**[Boost your graphics performance with the M5 and A19 GPUs | Apple Developer](https://www.youtube.com/watch?v=_5yEcJfB6nk)** · [Apple Developer]
This highly technical video details the architectural upgrades in Apple's Family 10 GPUs, noting a doubling of FP16 math and geometry throughput, plus a 30% increase in memory bandwidth. It introduces Universal Texture Compression that now works automatically for compute shaders, and third-generation ray tracing hardware that drops alignment requirements to just 1KB,,. It provides a detailed workflow using Xcode's Metal Debugger to identify and fix low GPU occupancy caused by register spilling to the stack,.
Verdict: Worth watching in full for graphics engineers optimizing Metal pipelines for the latest Apple Silicon.

**[Accelerate your machine learning workloads with the M5 and A19 GPUs | Apple Developer](https://www.youtube.com/watch?v=wgJX1HndGl0)** · [Apple Developer]
This session explores the new Neural Accelerators built into every shader core of the M5/A19 GPUs, purpose-built solely to accelerate matrix multiplications,. Apple claims this dedicated hardware delivers a 4x improvement in LLM time-to-first-token (compute-bound) and 25% faster token generation (memory-bound). It provides code examples using the Metal 4 TensorOps API to run quantized operations using "cooperative tensors," which apply activation functions in fast thread memory to avoid expensive VRAM round-trips,,.
Verdict: Worth watching in full for ML engineers writing custom Metal kernels or optimizing local LLM inference on macOS/iOS.

**[How to build a full-stack app with Supabase and Stripe on Google AI Studio](https://www.youtube.com/watch?v=Z87vZFYC7hc)** · [Google for Developers]
A brief demonstration of Google AI Studio's "Antigravity" coding agent scaffolding a Next.js application directly in the browser using a secure sandbox,. The agent successfully writes API routes to connect a Stripe customer ID to a Supabase auth user, though the database SQL still requires manual execution,,.
Verdict: Skim if you want to see the UX of Google's in-browser coding agent, but the actual app built is a basic CRUD demo.

**[Building a small business with ChatGPT](https://www.youtube.com/watch?v=p2GKhlPMVO0)** · [OpenAI]
A 15-second Hindi promotional video showing a user asking ChatGPT how to begin exporting gaskets. The AI provides a brief outline of the process, starting with an IEC registration.
Verdict: Skip. It is a B2C advertisement.

**[From your kitchen to customers | with ChatGPT](https://www.youtube.com/watch?v=ApOVfOGWTJU)** · [OpenAI]
Another 15-second Hindi promotional video showing a user prompting ChatGPT to create an annual business plan for selling sweets during festivals.
Verdict: Skip. It is a B2C advertisement.

**[Comet for iOS: Search, Browse, and Ask with AI](https://www.youtube.com/watch?v=s_oq4RupCgg)** · [Perplexity]
This video is listed in the index without a transcript. The title indicates it is an overview of a new AI-powered iOS search application from Perplexity.
Verdict: Skip, as no technical details or benchmarks are provided.

**[Andrej Karpathy on Code Agents, AutoResearch, and the Loopy Era of AI](https://www.youtube.com/watch?v=kwSVtQ7dziU)** · [No Priors: AI, Machine Learning, Tech, & Startups]
Karpathy describes his transition to "AI psychosis," coding 16 hours a day strictly by orchestrating agents and viewing human typing speed as the ultimate system bottleneck,. He argues that the industry goal is to define high-level Markdown specifications ("program.md") to drive asynchronous, looping swarms of agents,. He shares details of his "AutoResearch" project, which autonomously tuned a model's hyperparameters overnight better than he could with 20 years of manual expertise, and advocates for model speciation over monolithic backends,.
Verdict: Worth watching in full; an essential, paradigm-shifting perspective on the future of software engineering.

## Themes

The industry has moved past treating LLMs as synchronous autocomplete tools; the clear focus across infrastructure (AWS Mantle), development (Kiro, Copilot), and operations (Karpathy) is deploying asynchronous, highly parallel _swarms_ of autonomous agents constrained by strict, declarative markdown specifications. Additionally, protecting these agentic systems requires moving deterministic security controls entirely outside of the probabilistic model loop.
