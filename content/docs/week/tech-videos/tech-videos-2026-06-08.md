---
title: 2026-06-08
weight: 5
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "apple", "ai agents"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-08

## Watch First
**[Why More Context Makes Your Agent Dumber and What to Do About It — Nupur Sharma, Qodo](https://www.youtube.com/watch?v=EcqMYoIV57A)** is the most actionable watch of the day. It debunks the "infinite context" trend with hard data on how agents ignore middle-context and get stuck in infinite research loops, offering a pragmatic hybrid architecture to fix it.

## Highlights by Theme

### Developer Tools & Platforms
**[WWDC26: Bring an LLM provider to the Foundation Models framework | Apple](https://www.youtube.com/watch?v=u06ZVpSl0J4)** (Apple Developer). Apple is opening its Foundation Models framework so third-party cloud and local LLMs can integrate seamlessly into iOS and macOS. This standardizes transcript handling and tool calls across the ecosystem via a common `LanguageModelExecutor` protocol.

**[Inside Google Antigravity 2.0: The complete developer guide | The Agent Factory](https://www.youtube.com/watch?v=Dk4MD6TNiWE)** (Google Cloud Tech). Google discusses unbundling the Antigravity agent manager from its IDE, allowing the CLI to run standalone. The most useful takeaway is treating "skills" not as extra context, but as deterministic cheat sheets to keep agents from getting lost in large codebases.

**[What's new in Markdown preview in VS Code](https://www.youtube.com/watch?v=Jl7MlOYqoRA)** (Visual Studio Code). A nice quality-of-life update allows you to view diffs directly rendered in the Markdown preview pane instead of just diffing raw text. This is particularly useful for quickly reviewing PRs or agent-generated documentation changes where you only care about the final visual output.

### AI & Machine Learning
**[Road to 5 Million Tokens: Breaking Barriers in Long Context Training — Max Ryabinin, Together AI](https://www.youtube.com/watch?v=TUnPNY4E2fw)** (AI Engineer). A highly technical teardown of the memory barriers encountered during long-context model training. It details how combining DeepSpeed Ulysses for context parallelism with a new "upipe" chunking method prevents out-of-memory errors on H100 nodes at the 3-to-5 million token scale.

**[WWDC26: Optimize custom machine learning operations with Metal tensors | Apple](https://www.youtube.com/watch?v=toO9j5NKg0c)** (Apple Developer). Shows how to write custom TensorOps kernels to leverage the new M5 Neural Accelerator. The standout demo involves writing a fused FlashAttention kernel using cooperative tensors to skip threadgroup memory roundtrips, heavily relying on the new FP8 (E8M0) block-wise scaling formats.

**[Why More Context Makes Your Agent Dumber and What to Do About It — Nupur Sharma, Qodo](https://www.youtube.com/watch?v=EcqMYoIV57A)** (AI Engineer). Warns about the "orchestration paradox" where agents waste API tokens endlessly researching how to solve a problem rather than executing. Advocates for an 80/20 hybrid approach: use dynamic frontier models for 80% of loose research, but enforce strict deterministic rules for the final 20% of synthesis and validation.

### Hardware & Infrastructure
**[NVIDIA GTC Taipei 2026 Moments: Agents, AI PCs, and Physical AI](https://www.youtube.com/watch?v=kc65YW3FCa4)** (NVIDIA). Jensen Huang announced that the new Vera Rubin architecture is heading into full production, alongside an "RTX Spark" laptop line. The video is mostly a marketing sizzle reel with minimal technical depth.

**[Hannover Messe 2026 - Siemens xDT: Virtual Sensing on Industrial Edge Powered by AWS](https://www.youtube.com/watch?v=uZPy6dQ8Uog)** (AWS Events). A quick demonstration of running an executable digital twin (xDT) for a robotic arm directly on industrial edge hardware. The setup uses a locally fine-tuned Small Language Model (SLM) to interpret physical force sensors without needing a roundtrip to the cloud.

### Everything Else
**[Palo Alto Networks CEO: "AI Found 5 Years of Bugs in 6 Weeks"](https://www.youtube.com/watch?v=hObRMv6qCi0)** (All-In Podcast). Nikesh Arora boasts that an AI model named "Mythos" found five to seven years of codebase vulnerabilities in just six weeks. Skepticism is warranted, however, as he later admits the model has a 30% false-positive rate, which creates an absolute nightmare for defensive triaging and offsets much of the claimed speedup.

**[The Fastest Way to Know if Your Product Market Fit Is Real | Serval CEO, Jake Stauch](https://www.youtube.com/watch?v=xR9pPlLSwJI)** (EO). A pragmatic talk on ignoring the "happy talk" from early adopters to find real product-market fit. The core indicator of traction is when customer conversations abruptly shift from "what else can this do?" to "how much does it cost and how do I deploy it?".