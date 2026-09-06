---
title: Youtube Tech Channels
weight: 3
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "hardware", "software engineering"]
---

{{< sources "tech-videos" >}}

Here is your technical digest of today's videos, focused strictly on separating the engineering signal from the marketing noise:

# Tech Videos — 2026-09-05

## Watch First
The standout video of the day is **[DHH’s new setup for programming with AI - terminal, 16 agents, Herdr, Tailscale | Lex Fridman](https://www.youtube.com/watch?v=4Xg1AE6Uu1k)** from **Lex Clips**. It is a must-watch because it offers a highly pragmatic look at a multi-machine, parallel agentic developer workflow running 16 concurrent threads orchestrated via a custom TUI (Herdr) rather than standard single-threaded web interfaces—though engineers should remain skeptical of his reliance on "lines of code" as a productivity metric.

## Highlights by Theme

### Developer Tools & Platforms
For developer tooling, **[How to Profile and Optimize CUDA Tile Kernels with NVIDIA Nsight Compute](https://www.youtube.com/watch?v=TR8VIjnQXdE)** by **NVIDIA Developer** is highly worth an engineer's time, showing a credible 81% execution speedup by profiling memory transactions and applying compiler occupancy hints to high-level Tile kernel decorators. On the CLI front, **GitHub** demonstrates their CLI's new attach flag in **[How to attach images and videos using the GitHub CLI](https://www.youtube.com/watch?v=YD2vfwIcAao)** to easily append screenshots to issues or PRs directly from the terminal, which is highly useful for automating agent-generated visual bug reports. Additionally, **Lex Clips** features **[The fastest Linux install ever | DHH and Lex Fridman](https://www.youtube.com/watch?v=c4Fst6Uq9nE)**, showcasing DHH's custom Omachi distribution which uses agentic research loops to parallelize package preloading, achieving an impressive 45-second install time—though the extreme goal of a 12-second install is more of a frivolous exercise in maximizing NVMe physics than a practical necessity.

### AI & Machine Learning
In **[GPT-6 Astra with Ben Davis](https://www.youtube.com/watch?v=B-jjnydci50)** by **OpenAI**, we see Astra solve complex multi-image vision puzzles from DEF CON, but the real technical takeaway is its "swarm workflow" architecture which runs up to 10 parallel sub-agent slots orchestrated by a main agent to keep the model from getting lost on bad assumptions. Meanwhile, **Lex Clips** hosts **[Hand-written code is dying: DHH on the new era of programming | Lex Fridman Podcast Clips](https://www.youtube.com/watch?v=z4BzWpgy_7Q)** and **[Is programming dead? | DHH and Lex Fridman](https://www.youtube.com/watch?v=Nrz5cJwBW9A)**, where DHH argues handwritten code is now an uneconomical hobby similar to "cowboy culture," though clean architectures still yield real economic value by reducing agent token usage. To keep control of this output, **Lenny's Podcast** advises in **[Don’t Let Claude Think For You](https://www.youtube.com/watch?v=LYUzCbsfkgU)** to establish a firm personal point of view first, using models as sounding boards to maintain your own technical tone and judgment.

### Hardware & Infrastructure
On infrastructure, **[The CPU Will Never Die](https://www.youtube.com/watch?v=0zYHeBLhCcM)** by **No Priors: AI, Machine Learning, Tech, & Startups** cuts through accelerator hype to argue that CPUs remain the essential "trucks" responsible for token distribution, orchestration, and arbitration in inference-heavy reinforcement learning workloads. In consumer hardware, **Marques Brownlee** reviews Google’s latest device in **[Google Pixel 11/Pro Review: Poker Face](https://www.youtube.com/watch?v=ANmTVYkEtLw)**, highlighting the Tensor G6's 20% CPU speedup (on par with Snapdragon 8 Elite Gen 5 on CPU) but noting its severely lagging GPU and slow 30-35W extreme charging. For on-device graphics processing, **Apple Developer** shows off Core Image's new RAW version 9 in **[Unleash the power of RAW 9 with Core Image](https://www.youtube.com/watch?v=cKIX53Ye7Po)**, utilizing CoreML to simultaneously demosaic and denoise images with just three lines of code.

### Everything Else
For startup dynamics, **[Paul Graham on what motivates founders](https://www.youtube.com/watch?v=Wxq7ZIEodJg)** by **Y Combinator** deconstructs founder psychology, arguing that daily operations are driven by a fear of failure and crashing servers rather than a desire to become a billionaire. Shifting to high-performance culture, **Lex Clips** presents **[Khabib’s first gym in Dagestan | Khabib Nurmagomedov and Lex Fridman](https://www.youtube.com/watch?v=QcTMji_6KQg)**, where Khabib reflects on how his father raised over 20 world champions in a spartan school gym with mats, one rope, and only cold water.

***

💡 Want me to help you map out DHH's "Herdr" and multi-machine architecture to see if we can replicate a similar parallel agent environment for your own development tasks?