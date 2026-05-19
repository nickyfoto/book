---
title: 2026-05-13
weight: 5
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "cloud infrastructure", "cybersecurity", "software engineering"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-13

## Watch First
[Snap’s GPU-Accelerated Secret to Processing 10 Petabytes a Day | NVIDIA AI Podcast Ep. 298](https://www.youtube.com/watch?glT-zO8B_qk) is a masterclass in infrastructure optimization. By moving their PySpark experimentation platform to GPUs and scavenging idle inference capacity at night, Snap reduced their job costs by a staggering 76%.

## Highlights by Theme

### Developer Tools & Platforms
Supply chain security remains a massive vulnerability, as highlighted in [Why does this keep happening?](https://www.youtube.com/watch?v=kYqpxJE4DyE) by the Syntax channel; the recent "Shy Hulude" attack compromised packages by poisoning the shared cache of GitHub Actions via PR targets to scrape legitimate NPM OIDC publish tokens. If you are already drowning in LLM-generated pull requests, [CI/CD Is Dead, Agents Need Continuous Compute and Computers](https://www.youtube.com/watch?v=VktrqzQgytY) argues that agentic code generation breaks the batch paradigm of human PR reviews, requiring stateful, continuous internal validation loops instead. To help manage this new workflow, Microsoft introduced the [VS Code Agents Window (Preview)](https://www.youtube.com/watch?v=DC_z7VjJCJM), which allows developers to orchestrate multiple agents simultaneously across isolated worktrees without workspace collisions. For a more chaotic workflow, [Syntax](https://www.youtube.com/watch?v=eusCBPuPDaE) demonstrates using Claude Code alongside a webcam to successfully brute-force reverse engineer a flaky Bluetooth mesh protocol for studio lights, bypassing the app entirely for $91 in API calls.

### AI & Machine Learning
OpenAI demonstrated their low-latency voice models in [Build Hour: GPT-Realtime-2](https://www.youtube.com/watch?v=qGS9Ghnq1RU), showing off a slick e-commerce agent calling parallel tools, while engineers from Sierra provided grounded production advice on using custom VAD (Voice Activity Detection) models to handle messy, interrupted real-world audio. Your agents can now autonomously fine-tune other models, as shown in Hugging Face's [Your Agent Can Now Train Models](https://www.youtube.com/watch?v=OV56RddyFuU); their new CLI skills let an agent calculate necessary VRAM, spin up remote instances, and execute training runs purely from a prompt. Applying some much-needed pragmatism to the hype, Marques Brownlee critiques Google's Gemini agent demos in [“The Biggest Android Update Ever”](https://www.youtube.com/watch?v=eFeDpUVEy48), pointing out that highly idealized one-click "buy concert tickets" features hide a massive amount of error-prone routing that users fundamentally will not trust AI to do blindly.

### Hardware & Infrastructure
Snap's migration to [Spark RAPIDS](https://www.youtube.com/watch?v=glT-zO8B_qk) on Google Kubernetes Engine dropped their disk spill by 120TB and slashed CPU core requirements by 62% without requiring them to change any underlying job code. AWS is aggressively targeting traditional engineering hardware in [Hannover Messe 2026 - Engineering the AI factory](https://www.youtube.com/watch?v=X1rRe2dxT30), sharing benchmarks that prove their Blackwell-based G7E instances now outperform physical $15,000 workstations for heavy single-threaded CAD workloads like Siemens NX. For teams dealing with strict data localization, AWS detailed their [European Sovereign Cloud](https://www.youtube.com/watch?v=lVYyTxrfvgU), which explicitly regionalizes IAM data, usage metering, and metadata, ensuring the infrastructure is operated exclusively by EU residents located inside the EU.

### Everything Else
[How FFmpeg revolutionized the Internet](https://www.youtube.com/watch?v=wZykG3YodzY) on the Lex Fridman Podcast provides an incredible oral history of reverse engineering 20MB proprietary binary blobs for video codecs, and explains the FATE testing system's absurd matrix of compilers and architectures. Finally, Anders Hejlsberg reflects on the evolution of IDEs in [TypeScript, C# and Turbo Pascal](https://www.youtube.com/watch?v=K-Xv8D8NjTk), detailing how modern interactive compilers lazily defer parsing to meet a strict 200ms latency budget.