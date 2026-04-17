---
title: Youtube Tech Channels
weight: 3
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "cybersecurity", "cloud computing", "career"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-04-16

## Watch First
[Building pi in a World of Slop — Mario Zechner](https://www.youtube.com/watch?v=RjfbvDXpFls) is a must-watch for anyone tired of coding agents writing unmaintainable garbage. Zechner brilliantly breaks down how popular agent harnesses secretly manipulate context and lobotomize models, offering his own barebones, highly extensible TypeScript framework to put engineers back in control. 

## Highlights by Theme

### Developer Tools & Platforms
On the [Fireship](https://www.youtube.com/watch?v=piah4fV_o2Q) channel, a terrifying supply chain attack is detailed where 31 WordPress plugins were legally purchased on Flippa and loaded with dormant backdoors that eventually compromised core files like `wp-config.php`. To counter this architectural flaw, Cloudflare has introduced `mdash`, a project that replaces vulnerable PHP execution by sandboxing plugins into isolated Cloudflare Workers using Astro. For those using coding assistants, [Visual Studio Code](https://www.youtube.com/watch?v=0Eq8m63Z5J0) demoed new agent capabilities that detect when a background terminal is paused for input and can pipe responses directly to the CLI. Meanwhile, [GitHub](https://www.youtube.com/watch?v=-yKALFS5ewY) offered a practical tutorial on standardizing Copilot behavior across teams using simple markdown files to define custom skills, instructions, and target specific file paths.

### AI & Machine Learning
The most technically substantive talk today comes from Diego Carpentero on the [AI Engineer](https://www.youtube.com/watch?v=YZHPEkfy2kc) channel, proving you don't need expensive "LLM as a judge" architectures for safety. He walks through deploying a sub-dollar, self-hosted defensive layer using fine-tuned ModernBERTs, achieving ~35ms latency. It's a great deep dive into how encoder models leverage alternating local/global attention and rotary positional encoding to catch prompt injections and Model Context Protocol (MCP) exploits before they execute. On the [OpenAI](https://www.youtube.com/watch?v=UZyH0nx5zgI) podcast, researchers discussed applying test-time compute scaling to biotech, noting that models are moving past basic literature synthesis into autonomous experiment design and integration with robotic wet labs. 

### Hardware & Infrastructure
[Google Cloud Tech](https://www.youtube.com/watch?v=mpgoqDUAN6k) interviewed a developer who scaled a Go-based feature flag service to 60 million monthly requests on Cloud Run for under $200 a month. The neat architectural takeaway is how he mitigated per-write database costs by using Go routines to batch Firestore and BigQuery writes in-memory every minute. For data architecture, [ByteByteGo](https://www.youtube.com/watch?v=taSmwcqdkQk) provides a crisp explainer on Data Lakehouses, illustrating how open table formats like Apache Iceberg sit atop cheap object storage to provide the ACID guarantees of a data warehouse without the vendor lock-in or data duplication.

### Everything Else
[The Pragmatic Engineer](https://www.youtube.com/watch?v=7FmYJR6kiJw) featured DHH arguing that we have hit "peak programmer," positing that as AI drops the cost of code generation, the primary constraint shifts to product management and correctly defining the problem scope. Backing up the concern for junior developers, a Stanford economist on [EO](https://www.youtube.com/watch?v=FX0De_ccROU) shared data showing a 16% decline in employment growth for young workers in AI-exposed roles, raising real questions about how the next generation will acquire tacit engineering knowledge. Finally, [Lenny's Podcast](https://www.youtube.com/watch?v=pZqVAvFg0UQ) offered a quick, pragmatic hiring heuristic: focus on finding "barrels" (people who can drag an idea from inception to finish) rather than just hiring "ammunition" (headcount that merely inflates the collaboration tax).