---
title: 2026-05-08
weight: 3
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "computer vision", "cybersecurity", "hardware"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-08

## Watch First
[How Transformers Finally Ate Vision – Isaac Robinson, Roboflow](https://www.youtube.com/watch?v=VhfAVA3BG2I) is the essential watch today for a clear, technical breakdown of how Vision Transformers (ViTs) defeated CNNs despite having a far worse O(n⁴) compute scaling factor. It perfectly illustrates how massive self-supervised pre-training strategies overrode the need for hand-crafted inductive biases in computer vision architecture.

## Highlights by Theme

### Developer Tools & Platforms
Over on the OpenAI channel, the demo for [Codex can now use Chrome directly on macOS and Windows.](https://www.youtube.com/watch?v=b6Mxcv1pyBU) shows the coding assistant operating within a user's logged-in browser session, controlling multiple tabs in parallel without resorting to brittle screenshot-and-reason loops. For a front-end reality check, the Syntax crew in [Date pickers suck, we fixed them](https://www.youtube.com/watch?v=4JUx-8KkRPw) benchmark custom natural-language date inputs against standard pickers, highlighting the hidden bloat of Lit web components when mistakenly shipping massive global holiday datasets to the client. Additionally, the Lex Clips segment [Should programmers learn how to code in assembly? | Lex Fridman Podcast](https://www.youtube.com/watch?v=_x3JYd1KW60) provides a sobering take on the "Rewrite it in Rust" trend, arguing that memory-safe wrappers fall apart when interacting with the highly optimized, hand-written assembly jumps required for video codecs like FFmpeg.

### AI & Machine Learning
The AI Engineer channel posted [FLUX, Open Research, and the Future of Visual AI — Stephen Batifol, Black Forest Labs](https://www.youtube.com/watch?v=x8Yb4RidLgM), outlining a "Selfflow" self-supervised training approach that drops external encoders (like DINO) to achieve better anatomical consistency and text rendering across unified image, video, and audio modalities. Also from AI Engineer, [Agentic Search for Context Engineering — Leonie Monigatti, Elastic](https://www.youtube.com/watch?v=ynJyIKwjonM) breaks down why "agentic RAG" often fails when relying on a single tool, arguing for a mix of specialized lookups for reliability and general-purpose shell or ESQL execution tools to handle complex, unexpected queries. Finally, Stripe's [A conversation with Manus AI’s cofounder and CPO Tao Zhang](https://www.youtube.com/watch?v=dTyL3T3_G-o) covers the underlying engineering of their autonomous agents, highlighting how giving the AI its own sandboxed cloud computer enables asynchronous execution without requiring constant human-in-the-loop approvals.

### Hardware & Infrastructure
The All-In Podcast episode [Elon’s Anthropic Deal, The Next AI Monopoly?, “FDA for AI” Panic, Trading the AI Boom](https://www.youtube.com/watch?v=10MdOvK-aG4) unpacks the market implications of Anthropic leasing compute from xAI's Colossus data center to bypass their power constraints, effectively crowning "Elon Web Services" as a legitimate new hyperscaler. On the edge compute side, NVIDIA Developer's [DGX Spark Live: NYC Spark Hack Winner feature - 3D time machine for NYC](https://www.youtube.com/watch?v=t1Ic9k6w85Y) demonstrates a Rust Bevy engine rendering a million polygons at 60 FPS while running the 30-billion parameter Neotron 3 Nano MoE model entirely in unified memory without costly device swapping.

### Everything Else
In a fascinating security post-mortem, Lex Clips' [How CIA spied on people using fake VLC video player | Lex Fridman Podcast](https://www.youtube.com/watch?v=R6kWsZYTZpw) details how Vault 7 exploits used targeted fake downloads to slip a malicious `.dll` into VLC, prompting ongoing engineering efforts to securely sandbox the media player's sub-processes. For a broader perspective on human history, Dwarkesh Patel's [David Reich – Bronze Age shock, the Neanderthal puzzle, & farming’s sudden spread](https://www.youtube.com/watch?v=sRKBGVFVYAw) reveals that the human genome underwent its most intense period of natural selection during the high-density urbanization of the Bronze Age, challenging the assumption that our biology has been stagnant since the dawn of agriculture.