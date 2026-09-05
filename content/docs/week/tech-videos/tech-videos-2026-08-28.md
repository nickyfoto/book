---
title: 2026-08-28
weight: 6
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "model context protocol", "formal verification", "inference infrastructure"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-08-28

## Watch First
If you only watch one video today, make it **[From AI-Assisted to AI-Native: Building a Frontier Development Team — Clare Liguori, AWS](https://www.youtube.com/watch?v=pqlWNihgdjI)** by AI Engineer. Liguori strips away the marketing fluff to deliver hard-won empirical data across 50 production teams at Amazon, proving that merely sprinkling AI tools onto existing workflows yields sub-3x gains, while systemic workflow shifts—like deterministic local mocking, spec-driven design, and letting agents run asynchronously for hours—are what actually unlock 4.5x to 10x throughput.

## Highlights by Theme

### Developer Tools & Platforms
On AI Engineer, **[Building the Engine While Flying the Plane: Launching the Figma MCP Server — Jesse Lumarie, Figma](https://www.youtube.com/watch?v=ZIYYsAzaLlA)** provides a pragmatic architectural breakdown of serializing Figma's C++ scene graph into token-efficient React/Tailwind representations rather than context-destroying base64 image blobs, relying on Code Connect pointers to force agents into using battle-tested design components. Over at Google Cloud Tech, **[Automate Google Cloud with Cloud CLI Remote MCP Server](https://www.youtube.com/watch?v=-fb0ycu4kiU)** demonstrates real-world agent operations with a live demo that triages an overnight data pipeline failure and remediates misplaced Cloud Storage files in under two minutes via native `gcloud` and BigQuery CLI tools governed by existing IAM credentials. Meanwhile, **[Building uReview, Uber’s Multi-Agent Code Review Engine — Will Bond & Ameya Ketkar, Uber](https://www.youtube.com/watch?v=EL123UNokkI)** from AI Engineer highlights hard metrics from scaling automated reviews to 25,000 comments weekly across six monorepos, achieving a 67% engineer addressal rate while slashing LLM inference costs by 60% through runtime trajectory profiling and aggressive comment deduplication.

### AI & Machine Learning
Leading on technical substance, **[Your Code Has Bugs. Lean4 Has Proofs: Formal Verification for Engineers — Varun Pant, AWS](https://www.youtube.com/watch?v=lRa9sPaMyy4)** on AI Engineer illustrates how AWS guarantees safety in critical engines like Cedar by executing 100 million differential random tests nightly against Lean formal specifications, demonstrating why mathematical proofs must replace probabilistic LLM judges for generated code. On the runtime infrastructure front, **[Productionizing LLM Gateways: Architecture, Tradeoffs and Hard Lessons — Kanish Manuja, Twilio](https://www.youtube.com/watch?v=zrZ1amZBSPw)** from AI Engineer details brutal lessons on why standard microservice retries cause cascading latency outages, making the case for per-request fallback chains, per-model-class P99 tracking, and strict load shedding. Additionally, Anthropic showcases **[Model Hardware Standard: AI operating physical equipment](https://www.youtube.com/watch?v=UxJZrCFzTHY)**, demoing an open interface standard that enables models like Claude to autonomously direct physical laboratory hardware, such as Leica microscopes during Genentech experiments, without requiring bespoke point-to-point software integrations.

### Hardware & Infrastructure
In **[NVIDIA Dynamo in 5 Minutes: What Is It and Why Now?](https://www.youtube.com/watch?v=mXYFcz27eDw)** on NVIDIA Developer, the focus shifts to multi-node, rack-scale architectures like GB200 NVLink72, where Dynamo acts not as another inference engine, but as an outer distributed layer coordinating disaggregated prefill/decode pools, prefix KV cache reuse, and node fault recovery around engines like vLLM, SGLang, and TensorRT-LLM. On Apple Developer, **[Adopt Memory Integrity Enforcement and Pointer Authentication](https://www.youtube.com/watch?v=GzEMKyi1yHI)** and **[Eliminate bounds safety vulnerabilities in C and C++](https://www.youtube.com/watch?v=anz5YBpCD2E)** highlight co-designed hardware-software protections, detailing 16-byte hardware memory tagging extensions (MTE), pointer authentication (PAC), and the `-fbounds-safety` compiler extension that eliminates out-of-bounds buffer exploits with under 2% performance overhead in the kernel network stack. Rounding out the physical layer, Bloomberg Tech's **[Inside India’s AI Ambitions | Bloomberg Tech: Asia 8/28/2026](https://www.youtube.com/watch?v=mtBMtpNVZj0)** details the rapid expansion of multi-gigawatt data center campuses supported by competitive 8–9¢/kWh industrial power grids to house global GPU clusters.

### Everything Else
On Lex Clips, **[Secret to 10x productivity with AI agents: Why most companies fail | DHH and Lex Fridman](https://www.youtube.com/watch?v=GQjVGFYei9M)** argues that enterprise developer acceleration hits a wall not because of model limits, but due to organizational bureaucracy, meetings, and multi-tier approval chains that suffocate developer-agent iteration bandwidth. Tackling the cultural friction of agent rollouts on AI Engineer, **[How to Get Your Org to Adopt Coding Agents (Without Shipping Garbage) — Eyal Blum, Figma](https://www.youtube.com/watch?v=5Bn0xro2ol8)** addresses engineer burnout and loss of agency, advising teams to adopt attention-aware PR labeling to distinguish human code from generated output and mandate structured upfront planning over undisciplined prompting.

***

💡 Would you like a deeper architectural teardown comparing **Uber's uReview** multi-agent evaluation pipeline with **DoorDash's cross-functional eval platform**?