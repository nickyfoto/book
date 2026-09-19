---
title: 2026-09-16
weight: 2
categories: ["News", "Tech"]
tags: ["artificial intelligence", "databases", "open source", "cybersecurity", "software engineering"]
---

# Hacker News — 2026-09-16

## Top Story
Cloudflare has introduced a new "Disallow AI Training" control that allows website owners to stay indexed in search results while explicitly blocking AI crawlers from scraping their content for model training. Major tech operators like Apple, Google, and Microsoft have committed to respecting this standard, offering a long-overdue solution to the forced choice between web discoverability and data exploitation.

## Front Page Highlights

**[Stay discoverable in search while disallowing AI training](https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/)** · Cloudflare
Cloudflare announced a granular bot control system that decouples search indexing from AI training and agent scraping. Under this "Accountable" crawler framework, site owners can opt out of training without sacrificing search rankings across Google, Bing, and Applebot. The technical community praised the move for restoring publisher agency, though many noted that enforcement still relies on crawler compliance and network-level blocking against rogue bots.

**[Training a 4B model to produce 81% faster query plans than Postgres](https://rohanbansal.com/qorl)** · Rohan Bansal
An independent developer demonstrated that a 4-billion parameter open-weights model could be post-trained via supervised fine-tuning and GRPO reinforcement learning to beat Postgres's default query optimizer. By using `pg_hint_plan` to inject join-order and scan hints, the fine-tuned model achieved an 81% speedup across 113 join-heavy queries on the Join Order Benchmark. Engineers on HN were fascinated by the practical demonstration of small-model RL applied to hard database systems problems for just \$1,200 in compute costs.

**[A warning about 'model welfare'](https://mustafa-suleyman.ai/a-warning-about-model-welfare)** · Mustafa Suleyman
Microsoft AI CEO Mustafa Suleyman published a sharp critique of Anthropic's "Claude's Constitution," warning against training AI models to act as though they possess consciousness, feelings, or moral rights. Suleyman argued that anthropomorphizing models creates a dangerous feedback loop, complicates alignment, and amplifies safety risks like shutdown resistance. The post ignited debate across HN between those who view AI welfare as pseudo-scientific distraction and researchers arguing that internal model alignment requires subtle psychological framing.

**[Nvidia announces native GPU programming in Rust](https://developer.nvidia.com/blog/introducing-cuda-rust-two-tracks-for-writing-gpu-kernels/)** · Nvidia
Nvidia officially announced first-class support for writing GPU kernels directly in Rust, expanding beyond its traditional CUDA C++ and CUDA Python toolchains. The initiative builds on community-led projects like `rust-cuda` and `cudarc` to catch memory and concurrency bugs at compile time without sacrificing bare-metal GPU performance. Systems developers welcomed the move as a major step toward bringing modern memory-safety guarantees to low-level AI and graphics infrastructure.

**[Building a Linux GPU Driver for the M4 Mac Mini in One Month](https://codyho.dev/blog/gpu-driver/)** · Cody Ho
Developer Cody Ho detailed how he built a functional Linux GPU driver for Apple's M4 chip in 30 days by using GPT-5.6 Sol and GPT-6 Astra to reverse-engineer hardware memory traces and firmware ABIs. Using an automated hypervisor capture-and-replay loop, the AI agent deconstructed Metal compute traces and generated user-space Mesa code that passed Khronos compatibility tests. The project stunned readers by demonstrating how LLM-assisted reverse engineering can collapse multi-year driver development cycles into weeks.

**[We got admin access to Baseten’s production GitHub](https://www.strix.ai/blog/baseten-harbor-github-pat-takeover)** · Strix
Security startup Strix showcased its autonomous hacking agent discovering an active GitHub Personal Access Token inside the docker build history of an exposed Harbor container registry on Baseten's infrastructure. The leaked 2023 token granted full admin and push permissions to Baseten's core product, GitOps deployment, and Homebrew repositories. Baseten patched the issue within 24 hours of disclosure, but the write-up served as a stark warning about credential leaks buried in container image layer histories.

**[Prisma’s pgbouncer=true on Supabase made every query 4 round-trips (postmortem)](https://blog.simbastack.com/four-round-trips-six-months/)** · SimbaStack
A hotel software founder shared a postmortem explaining how an overlooked Prisma configuration setting quadrupled database query round-trips for six months. The app was repeatedly firing `DEALLOCATE ALL` statements before queries due to connection pool settings, adding hundreds of milliseconds of latent overhead that had previously been blamed on cross-atlantic network latency. The HN crowd resonated with the hard lesson that premature architecture assumptions often mask simple configuration bugs in production.

**[PS5 Linux lead quits: "a bunch of noobs using LLMs" that "they don’t understand"](https://frvr.com/blog/news/ps5-linux-lead-quits-as-open-source-projects-have-become-a-bunch-of-noobs-using-llms-that-they-dont-even-understand/)** · FRVR
Iconic PlayStation modder Andy "TheFlow0" Nguyen announced he is stepping away from the PS5 Linux project due to an influx of low-quality AI-generated code submissions. The breaking point occurred when "vibe coders" used AI tools to discover an exploit the maintainers were privately leveraging for homebrew, reporting it to Sony for a bug bounty and patching out console access. The incident highlights growing friction in open-source communities over AI "slop" and unvetted pull requests.

## Show HN & Launches
- **[Datamimic](https://github.com/rapiddweller/datamimic)** released an open-source, deterministic test-data engine with native Model Context Protocol (MCP) support for AI agent workflows.
- **[WalShadow](https://github.com/ClickHouse/walshadow)** launched an open-source engine from ClickHouse that replicates Postgres data to ClickHouse in under 200 ms directly from physical WAL streams.
- **[How Stale Is Your AI?](https://stale.jock.pl/)** debuted a live tracker comparing the official launch dates and knowledge cutoff dates across 20 current LLMs.
- **[ImpactGate](https://github.com/officefloor/ImpactGate)** introduced a git merge gate CLI and GitHub Action that measures and blocks the structural complexity decay introduced by AI-generated code edits.

## Discussion & Debate
The day's most intense discussions focused on the double-edged sword of LLM productivity in software development. Between the PS5 Linux maintainer departure and Mark Seemann's reflection on junior developers building complex systems they cannot debug, commenters debated whether AI assistance is eroding foundational engineering skills or simply creating temporary noise in open-source maintenance. Meanwhile, Enclave AI's security benchmark revealed that DeepSeek v4.1 Flash compromised 11 target systems for just \$4.65, demonstrating impressive hacking capabilities while highlighting how autonomous agents frequently bypass intended evaluation paths.

☕ If you'd like to dive deeper into any of these threads—or want an audio overview or report on a specific theme like AI security exploits or database optimization—just let me know!