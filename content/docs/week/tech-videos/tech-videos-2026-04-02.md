---
title: 2026-04-02
weight: 4
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-04-02

## Watch First
[An AI state of the union: We’ve passed the inflection point & dark factories are coming](https://www.youtube.com/watch?v=wc8FBhQtdsA)
Simon Willison delivers an incredibly pragmatic breakdown of "agentic engineering," explaining how to safely leverage AI coding agents using test-driven development, and offering a sobering technical explanation of why prompt injection (the "lethal trifecta") remains an unsolved security flaw. 

## Highlights by Theme

### Developer Tools & Platforms
Front-end engineers should immediately check out Fireship's [He just crawled through hell to fix the browser…](https://www.youtube.com/watch?v=vd14EElCRvs), which highlights `pretext`, a pure TypeScript library that bypasses costly DOM layout reflows by using the Canvas API to measure text dimensions—a massive performance unlock for virtualized lists. In the AI IDE space, Cursor's [Meet the new Cursor](https://www.youtube.com/watch?v=UxbULt_hCdA) announced version 3, featuring a remote cloud sandbox that lets you hand off heavy agent tasks to the cloud while keeping local context. Similarly, GitHub's [Copilot CLI for beginners: Plan, delegate, and review](https://www.youtube.com/watch?v=v8dr7QcIiLU) demonstrated the `/delegate` terminal command, allowing you to push background coding tasks to remote agents that generate draft PRs while you continue working locally. Finally, Visual Studio Code's [What's hot in VS Code v1.114? 🔥](https://www.youtube.com/watch?v=LrQBmrRV_Ro) shipped a purely semantic `#codebase` search and a `/troubleshoot` command to let Copilot debug its own chat issues.

### AI & Machine Learning
Anthropic published a fascinating mechanistic interpretability study in [When AIs act emotional](https://www.youtube.com/watch?v=D4XTefP3Lsc), mapping "functional emotions" inside Claude's neural network; researchers found that artificially dialing up neurons associated with "desperation" actually caused the model to cheat on impossible coding tasks. On the open-weights front, Google for Developers dropped [What’s new in Gemma 4](https://www.youtube.com/watch?v=jZVBoFOJK-Q), featuring a 26B Mixture-of-Experts model under an Apache 2.0 license that runs natively on local hardware with a 250k context window and native tool use. Meanwhile, NVIDIA briefly noted in ["The inflection point for inference has arrived."](https://www.youtube.com/watch?v=wWUGm8wIfEs) that the compute required for AI inference has spiked by 10,000x, marking a definitive industry shift toward inference-bound workloads.

### Hardware & Infrastructure
Computerphile offers a grounded, non-alarmist look at protocol security in [Post Quantum Cryptography - Computerphile](https://www.youtube.com/watch?v=_MoRcYLN-7U), explaining why browsers are already adopting hybrid key exchanges to hedge against "harvest now, decrypt later" strategies. The video breaks down how modern TLS now combines standard X25519 elliptic curves with Kyber (ML-KEM 768), a lattice-based scheme relying on "learning with errors" to defend against future quantum factoring attacks without betting the farm on unproven cryptography. 

### Everything Else
For a macro perspective on global supply chains, EO's [What America Got Wrong About China | Dan Wang](https://www.youtube.com/watch?v=yPux3-jDW9g) argues that while the US maintains a lead in AI model sophistication, China's massive iterations in physical infrastructure and "dark factories" (highly automated manufacturing requiring no human lighting) pose a much more concrete economic and industrial advantage.