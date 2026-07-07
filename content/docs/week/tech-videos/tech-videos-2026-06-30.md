---
title: 2026-06-30
weight: 6
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "ai agents", "developer tools", "cloud computing"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-30

## Watch First
**[Session on Reasoning](https://www.youtube.com/watch?v=aVxq3XQbxBk)** from Microsoft Research is the standout for working engineers. It cuts through the hype of "test-time compute" to expose how verification steps actually bottleneck LLM execution, and presents a pragmatic framework for bounding agentic workflows using formal logic constraints.

## Highlights by Theme

### Developer Tools & Platforms
GitHub officially brought Copilot Agent support natively into JetBrains IDEs, extending their agent client protocol to allow complex workspace orchestrations directly within IntelliJ, as covered in **[GitHub Copilot Agent is now available in JetBrains AI Assistant](https://www.youtube.com/watch?v=JsRhoZJAIF4)**. Google for Developers previewed OS-level agent integrations in **[Sameer Samat on Android 17 and the Future of Intelligent Computing](https://www.youtube.com/watch?v=YvVsdZL2ogY)**, most notably demonstrating "App Automation," where Gemini executes GUI interactions inside isolated, containerized virtual windows without hijacking the user's primary screen. In parallel, Google Cloud Tech posted a guide showing how barriers to entry are dropping, generating native applications directly from a prompt in **[Build your first Android app in AI Studio in 5 minutes](https://www.youtube.com/watch?v=Vl9HYB9tmdw)**. 

### AI & Machine Learning
Microsoft Research's **[Session on Reasoning](https://www.youtube.com/watch?v=aVxq3XQbxBk)** breaks down test-time scaling methods like Best-of-N and Bin Search, revealing that per-step verification overhead often dominates total inference latency unless dynamically scheduled based on task difficulty. Tackling the hardware limits of long contexts, Microsoft Research's **[Session: Compute & Trust (Systems)](https://www.youtube.com/watch?v=t0PI_kV9llc)** pushes back on dense attention, proposing "V-Attention" to approximate attention distributions via top-K routing and random sampling, recovering baseline accuracy even at 50x sparsity. For post-training alignment, **[Reinforce Adjoint Matching: Scaling Diffusion RL](https://www.youtube.com/watch?v=543CYbUZ1g0)** from Microsoft Research details a scalable, on-policy objective for diffusion models that bypasses computationally unstable stochastic rollouts.

### Hardware & Infrastructure
NVIDIA highlights extreme low-level optimization in **[How Together AI Uses NVIDIA's Full Stack to Deliver AI Responses in Under 100ms](https://www.youtube.com/watch?v=10Kb3IB0d70)**, explaining a "megakernel" approach that compiles an entire model into a single GPU kernel for ultra-low latency voice agent inference. For securing enterprise deployments, NVIDIA Developer's **[Long-Running AI Agents: The Next Breakthrough in Enterprise Work](https://www.youtube.com/watch?v=NHVtXHUcVXE)** introduces the OpenShell runtime, which places autonomous agents in secure sandboxes with strict file, network, and endpoint API limitations. On the cloud side, the massive **[AWS Summit Washington DC 2026 - Keynote](https://www.youtube.com/watch?v=QGaPF8NsOE4)** on the AWS Events channel introduced Bedrock AgentCore for managing stateful agent memory and runtime authentication, alongside a new $1B modernization framework for US Intelligence Community workloads.

### Everything Else
The Pragmatic Engineer channel tackles hiring woes in **[Companies have no idea how to evaluate engineers](https://www.youtube.com/watch?v=VEljB3kwzSY)**, arguing that data structure and algorithm interviews persist stubbornly simply because the industry still lacks a better evaluation mechanism for hard skills. For a deep historical dive on governance, Lex Fridman's **[Anthony Kaldellis: Roman Empire, Byzantine Empire, Rise & Fall of Empires | Lex Fridman Podcast #498](https://www.youtube.com/watch?v=pv1TUJSEM2k)** unpacks how the Eastern Roman Empire survived 1,000 years past the West by operating as a "monarchic republic" bound by responsive taxation rather than pure military dictatorship.