---
title: 2026-03-27
weight: 8
---

{{< sources "company-twitter" >}}

# Company@X — 2026-03-27

## Signal of the Day
**Meta** launched SAM 3.1, a crucial drop-in update to their Segment Anything Model that introduces object multiplexing. By enabling the model to process up to 16 tracked objects in a single forward pass, SAM 3.1 doubles processing speed to 32 frames per second on an H100 GPU without sacrificing accuracy, significantly lowering the hardware barrier for high-performance video applications.

## Key Announcements

**Meta** · [SAM 3.1 Model Checkpoint and Codebase](http://twitter.macworks.dev/AIatMeta/status/2037582117375553924#m)
Meta released SAM 3.1 to the open-source community, solving the memory bottleneck of previous versions where each object required a dedicated tracking pass. The shift to object multiplexing eliminates redundant computation, paving the way for more efficient real-time computer vision applications on smaller hardware. 

**Google** · [Search Live Goes Global](http://twitter.macworks.dev/rajanpatel/status/2037189251683803562#m)
Google's Search Live is officially rolling out globally, allowing users worldwide to have natural, multilingual conversations with Search using both voice and camera inputs. The rollout is powered by the new Gemini 3.1 Flash Live model, establishing multimodal, real-time query interactions as a core component of the search experience.

**Google Cloud** · [Agentic Full-Stack Deployment via MCP](http://twitter.macworks.dev/GoogleCloudTech/status/2037605576012620068#m)
Google showcased the new Gemini CLI operating alongside their Model Context Protocol (MCP) servers to automate the migration and deployment of full-stack applications. This signals an aggressive push into agentic workflows for infrastructure, allowing developers to sidestep manual deployments entirely. 

**Nous Research & Hugging Face** · [Hermes Agent Integration](http://twitter.macworks.dev/NousResearch/status/2037654827929338324#m)
Nous Research integrated Hugging Face as a first-class inference provider for the open-source Hermes Agent. This gives users immediate access to 28 curated models and over 100 others, advancing an ecosystem where agents have persistent memory and dedicated machine access without being locked into proprietary, closed-cloud model providers.

**Chroma** · [Context-1 Search Agent](http://twitter.macworks.dev/trychroma/status/2037243681988894950#m)
Chroma introduced Context-1, a 20-billion parameter search agent, and released the model weights on Hugging Face under an Apache 2.0 license. The model is designed to push the Pareto frontier of agentic search by offering an order of magnitude improvement in both speed and cost compared to existing solutions.

**Cohere** · [Cohere Transcribe](http://twitter.macworks.dev/cohere/status/2037159129345614174#m)
Cohere launched Cohere Transcribe, establishing a new state-of-the-art benchmark for real-world speech recognition. The open-source speech-to-text model currently ranks #1 for accuracy on the Hugging Face Open ASR Leaderboard.

**Unitree Robotics** · [UnifoLM-WBT-Dataset](http://twitter.macworks.dev/UnitreeRobotics/status/2037440578275946551#m)
Unitree open-sourced a high-quality, real-world humanoid robot whole-body teleoperation (WBT) dataset. Designed for open environments, it aims to be the most comprehensive real-world dataset for humanoid manipulation diversity and will receive rolling updates.

## Also Noted
- **Google** ([Veo 3.1 in Gemini](http://twitter.macworks.dev/Google/status/2037529976258335151#m)): Rolled out Veo 3.1 features in the Gemini App and Flow by Google, allowing users to generate mobile-first videos using prompt instructions and ingredient images.
- **Google** ([Live Translate on iOS](http://twitter.macworks.dev/Google/status/2037586898450006029#m)): Expanded Google Translate's headphone-based "Live translate" feature to iOS and more global markets, offering personal translation in over 70 languages.
- **ARC Prize Foundation** ([ARC-AGI-3 Launch](http://twitter.macworks.dev/GregKamradt/status/2037587919444255185#m)): Launched ARC-AGI V3, a new benchmark spearheaded by François Chollet to measure true "Agentic Intelligence" and system adaptability rather than just brute-force deep learning performance.
- **AWS** ([AI Agent Guardrails](http://twitter.macworks.dev/awscloud/status/2037560289105952775#m)): Broadcasted new framework guidelines for implementing AI Agent Guardrails for production environments and databases.
- **Y Combinator Ecosystem** ([AI Medical Prescriptions](http://twitter.macworks.dev/ArthurMacwaters/status/2037479229294874918#m)): Highlighted an agreement with the state of Utah that officially permits an AI agent to prescribe psychiatric medication renewals, a monumental regulatory signal for automated care.