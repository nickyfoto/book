---
title: 2026-03-30
weight: 5
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-30

## Watch First
[NVIDIA Nemotron Unpacked: Build, Fine-Tune, and Deploy Open Models From NVIDIA](https://www.youtube.com/watch?v=k1KFOckQMro) is an outstanding, hype-free technical deep dive into NVIDIA's new hybrid Mamba-2 Transformer architecture and their bleeding-edge 4-bit pretraining methods.

## Highlights by Theme

### Developer Tools & Platforms
Google for Developers shared a highly credible and practical guide in [Prototype to Production with ADK](https://www.youtube.com/watch?v=jDCkirAz4-E), demonstrating how to build a robust multi-agent system that relies on deterministic Python AST parsing tools rather than brittle LLM reasoning alone. They also dropped a live demo of the new Antigravity agent in [Google AI Studio's new full-stack vibe coding experience](https://www.youtube.com/watch?v=gJYZE9UXiHk), highlighting how to leverage automatic Firebase and Firestore integration for stateful Next.js applications. On the infrastructure operations side, AWS Events showcased an MCP-powered database health-check tool in [Building Your First AI Database Ops Agent | Let's Talk About Data](https://www.youtube.com/watch?v=-dGeLmOSTTU), proving that treating the Model Context Protocol as a standardized "USB-C" interface is an effective way to safely equip agents with read-only SQL execution tools.

### AI & Machine Learning
[NVIDIA Nemotron Unpacked: Build, Fine-Tune, and Deploy Open Models From NVIDIA](https://www.youtube.com/watch?v=k1KFOckQMro) from NVIDIA Developer reveals that the 12-billion parameter Nemotron Super model achieves its inference speed by utilizing NVFP4 (4.75-bit) math for pretraining, and a clever "latent MoE" technique that up-projects and down-projects inside the neural net to yield 4x the experts for the same compute cost. In the academic sphere, Hung-yi Lee offers a rigorous lecture on the evolution of positional embeddings in [如何讓 Transformer 知道輸入 Token 的順序？Absolute、Relative、RoPE、到沒有 Positional Embedding](https://www.youtube.com/watch?v=Ll-wk8x3G_g), breaking down the math of why rotary positional embedding (RoPE) won out over ALiBi and basic sinusoidal approaches. Meanwhile, in a brief clip from No Priors, [Karpathy's #1 Rule for AI Research](https://www.youtube.com/watch?v=PT2xu9_HrVI) notes that maximizing token throughput now requires removing humans from the prompting loop entirely, citing his recursive open-source Auto Researcher project.

### Hardware & Infrastructure
In [The biggest barriers to AI scaling laws - NVIDIA CEO explains | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=Mf2u2b1bogE) on Lex Clips, Jensen Huang proposes a fascinating workaround for the data center grid power bottleneck: designing AI factories to dynamically degrade compute performance so they can run safely on the 99% idle excess capacity of existing municipal power grids without requiring new massive power plants. To simulate the complex thermal physics of these scaled deployments, Vertiv discussed their Omniverse Rubin DSX integration in [NVIDIA GTC Studio with Insights from Vertiv](https://www.youtube.com/watch?v=MyNEr7tf-WQ), allowing data center architects to use digital twins to test cooling chains before concrete is poured. On the mobile edge computing side, Dylan Patel points out in [How AI Is Killing Cheap Smartphones - Dylan Patel](https://www.youtube.com/watch?v=fRpynA_dYtc) that the 12GB memory floor required for on-device AI is drastically inflating BOM costs and effectively crushing the low-end smartphone market.

### Everything Else
In [So This is Peak Foldable](https://www.youtube.com/watch?v=eFUB_jL_XcM), Marques Brownlee reviews the Oppo Find N6, arguing that foldables have finally overcome early engineering compromises by combining a silicon carbon battery with a laser-scanned titanium hinge packed with UV-hardened polymer to eliminate the screen crease.