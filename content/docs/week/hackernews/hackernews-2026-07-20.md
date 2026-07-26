---
title: 2026-07-20
weight: 5
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "cybersecurity", "mathematics", "computer graphics"]
---

# Hacker News — 2026-07-20

## Top Story
Human mathematicians are getting "outcounterexampled" by AI models. Recent breakthroughs by LLMs like Claude Fable and ChatGPT Sol have systematically dismantled decades-old math problems, including disproving the 100-year-old Jacobian Conjecture and solving questions posed by Erdős and Grothendieck. This marks a massive paradigm shift in formalization, where AI is auto-generating thousands of lines of verifiable Lean code to definitively solve open problems.

## Front Page Highlights

**[Stop Using OpenCode](https://wren.wtf/shower-thoughts/stop-using-opencode/)** · wren.wtf
This scathing teardown exposes the wildly popular open-source AI coding agent "OpenCode" as a security disaster masquerading as a productivity tool. The author highlights catastrophic flaws ranging from completely broken path validation for shell redirections to default-open HTTP servers that allow arbitrary RCEs. It is a stark reminder that slapping an LLM onto a stateful bash terminal without proper sandboxing is a recipe for having your machine compromised.

**[Who’s Afraid of Chinese Models?](https://stratechery.com/2026/whos-afraid-of-chinese-models/)** · stratechery.com
The release of near-frontier open-weights models from China, specifically Moonshot's Kimi K3 and Alibaba's Qwen 3.8, has sparked intense debate about the economic moat of Western AI labs. Stratechery argues that intelligence is rapidly becoming a commoditized market where inference costs will dictate margins, severely threatening Anthropic and OpenAI's proprietary business models. American labs keeping tight control over their weights may actually be a losing strategy that ultimately benefits China's ecosystem.

**[Agent swarms and the new model economics](https://cursor.com/blog/agent-swarm-model-economics)** · cursor.com
The team at Cursor successfully used a multi-agent swarm to build SQLite from scratch in Rust, passing 100% of a held-out SQL test suite. Instead of relying on a single expensive model, they orchestrated a highly efficient system where frontier models handled the planning while cheaper models executed the code, bringing the cost down drastically. To handle the massive concurrency of 1,000 commits per second, they even had to build a custom version control system to manage merge conflicts and "split-brain" code design.

**[Over 30% of new ArXiv submissions now read as AI-written](https://unslop.run/blog/measuring-ai-writing-on-arxiv)** · unslop.run
An empirical study of 12,750 recent arXiv papers reveals that roughly a third are now flagged as being machine-written. The numbers vary wildly by discipline, with Computer Science leading the pack at a staggering 65%, while Mathematics sits at less than 1%. While some of this may just be heavy AI-assisted editing, the sheer volume indicates a massive shift in academic publishing workflows.

**[My falling-out with the rationalist community](https://lcamtuf.substack.com/p/my-falling-out-with-the-rationalist)** · lcamtuf.substack.com
Lcamtuf reflects on the evolution of the SF Bay Area skeptic and rationalist movements, tracing their journey from debunking 1990s internet cranks to becoming insular ideological communities. He critiques how the movement's focus on "reason" often devolved into post hoc justifications for personal preferences, specifically calling out the mental gymnastics of Effective Altruism and the pervasive culture of "sealioning".

**[Corners Don’t Look Like That: Regarding Screenspace Ambient Occlusion](https://nothings.org/gamedev/ssao/)** · nothings.org
Graphics programmer Sean Barrett takes aim at the game industry's obsession with Screenspace Ambient Occlusion (SSAO), arguing that developers are rendering bizarre, unrealistic halos because they fundamentally misunderstand how light works in room corners. Armed with a DSLR and light-linear graphs, he demonstrates that real-world concave boundaries rarely exhibit the dramatic darkening effects simulated by SSAO unless heavily influenced by soft shadows.

**[Eliminating Go bounds checks with unsafe](https://blog.andr2i.com/posts/2026-07-06-eliminating-go-bound-checks-with-unsafe)** · blog.andr2i.com
A pragmatic look at hot path optimization in Go, demonstrating how unsafe pointer arithmetic can bypass the compiler's bounds checking for significant performance gains. By replacing the standard library's Little Endian loaders with custom unsafe variants, the author achieved a 2x speedup in microbenchmarks and noticeable gains in a production-level compression library.

## Show HN & Launches
**[Ziggity – A terminal UI for Git, written in Zig](https://github.com/simoarpe/ziggity)** provides a keyboard-driven, lazygit-style workflow packaged as a single, dependency-light binary without relying on libgit2. **[LoRA Speedrun](https://github.com/Saivineeth147/lora-speedrun)** introduces a public wall-clock leaderboard to gamify fine-tuning techniques, challenging engineers to fine-tune Qwen2.5-1.5B on a single L40S GPU. **[Moonshine](https://github.com/hgaiser/moonshine)** offers an open-source, Linux-only game streaming host that runs isolated compositor sessions so you can stream PC games to Moonlight clients without needing a dummy HDMI plug.

## Discussion & Debate
Sometimes the community just needs a palate cleanser: the **[Ask HN: What are your favorite blogs not about AI?](https://news.ycombinator.com/item?id=48972858)** thread is packed with high-signal, niche technical reading material for those experiencing AI fatigue. Meanwhile, serious privacy concerns are brewing over news that **[The EU is about to sell our most sensitive data to the US](https://edri.org/our-work/the-eu-is-about-to-sell-our-most-sensitive-data-to-the-us-for-visa-free-travel/)**, potentially forcing EU member states to hand over biometric databases and automated profiling data to maintain visa-free travel privileges.