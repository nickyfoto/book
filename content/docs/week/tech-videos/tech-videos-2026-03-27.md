---
title: 2026-03-27
weight: 7
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-27

## Watch First
**The limits of AI scaling laws - NVIDIA CEO explains** is the single most valuable watch today because it lays out the architectural roadmap for hardware moving forward, explaining exactly why inference (test-time scaling) is fundamentally harder and more compute-intensive than pre-training.

## Video Rundown

**[Looker Continuous Integration: Pro tips for efficiency](https://www.youtube.com/watch?v=SdzqVyWDUpI)** · Google Cloud Tech
This tutorial explains how to speed up continuous integration runs in large Looker projects. It demonstrates how to use incremental validation to isolate and report only the errors unique to a specific development branch, rather than checking the entire legacy model. It also shows how to configure a fail-fast parameter that terminates SQL validation immediately upon encountering the first error. Verdict: Skim if your team actively manages large-scale Looker deployments and suffers from slow CI loops.

**[Make Looker Continous Integration work better for you](https://www.youtube.com/watch?v=RX3Vy9eapMg)** · Google Cloud Tech
This is a short, non-technical skit reiterating the difference between Looker's incremental validation and targeting specific explores. It covers the exact same material as the "Pro tips" video but with less technical depth. Verdict: Skip in favor of the previous video.

**[Every iPhone Ever. SAME photo!](https://www.youtube.com/watch?v=jru9Gsz3kJY)** · Marques Brownlee
A purely consumer-focused entertainment video where the host takes a photo of the same subject using every generation of the iPhone. There is no technical deep dive into the camera hardware or image signal processing. Verdict: Skip.

**[Automate your repo with GitHub agentic workflows](https://www.youtube.com/watch?v=XH8oKA-ZYbU)** · GitHub
GitHub announces a technical preview of "agentic workflows," which are intent-driven repository automations authored in plain Markdown and executed via coding agents in GitHub Actions. The demo shows generating a daily repository status report for maintainers, tracking project status and actionable next steps. It represents a shift from imperative CI/CD scripts to declarative, agent-driven repo management. Verdict: Worth watching in full to see the direction GitHub is taking repository automation.

**[Automate Product Listings with Gemini + Vision Agents](https://www.youtube.com/watch?v=8lA6bF2EnvA)** · Google for Developers
A pragmatic technical demo showing how to build real-time vision agents using the Gemini 3.1 Flash Live model and Stream's Vision Agents SDK. The engineer demonstrates how to natively register Python functions (like image generation and web search) as tools using the `@llm.register_function` decorator. Notably, it shows bypassing traditional state machines by using a Markdown file to instruct the agent on the exact orchestration steps it must follow. Verdict: Worth watching in full for a concrete implementation pattern of real-time multi-modal agents.

**[Build real-time agents with Gemini 3.1 Flash Live!](https://www.youtube.com/watch?v=XKZYUhwdsR4)** · Google for Developers
This is merely a teaser clip featuring a squeaking rubber duck and a sigh. It contains no actual code or architectural information. Verdict: Skip.

**[Shopping in ChatGPT just got a whole lot more helpful](https://www.youtube.com/watch?v=7IB1KBVm7HE)** · OpenAI
A product marketing demo showing a new visual interface for ChatGPT that allows users to upload photos of clothing and filter generated shopping results by attributes like sleeve length or color. It aggregates reviews and suggests similar products within the chat UI. Verdict: Skip, as it is a consumer feature showcase with zero technical details.

**[Design your dream room by shopping with ChatGPT](https://www.youtube.com/watch?v=jM1oSEXssOE)** · OpenAI
Another consumer marketing video showcasing ChatGPT's shopping capabilities for interior design. No engineering or technical implementations are discussed. Verdict: Skip.

**[Find the perfect gift by shopping with ChatGPT](https://www.youtube.com/watch?v=th8u0bqYsQk)** · OpenAI
The third entry in OpenAI's consumer marketing push for their new visual shopping interface. Like the others, it lacks signal for developers. Verdict: Skip.

**[The limits of AI scaling laws - NVIDIA CEO explains | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=WoNSsBWFyEk)** · Lex Clips
Jensen Huang outlines the four eras of AI scaling: pre-training, post-training, test-time (inference), and agentic scaling. He pushes back against the idea that inference is computationally "easy," arguing that agentic reasoning, planning, and search at test-time require drastically more compute than the memorization of pre-training. He also discusses how rack-scale computing (like NVLink 72) fundamentally alters the hardware supply chain by moving supercomputer integration upstream into the manufacturing phase. Verdict: Worth watching in full for a high-level architectural view of where AI hardware limits actually lie.

**[Jensen Huang on his mortality and future of NVIDIA | Lex Fridman Podcast Clips](https://www.youtube.com/watch?v=M4f0MxhvyUo)** · Lex Clips
A philosophical discussion where Huang states he does not believe in traditional succession planning, preferring instead to continuously pass on knowledge and reasoning to his team daily. Verdict: Skip; standard CEO leadership philosophy with no technical takeaways.

**[Is US running out of power? - NVIDIA CEO explains | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=TbuLzxXp8Jw)** · Lex Clips
Huang addresses the power grid bottleneck, noting that grids run at roughly 60% of peak capacity most of the time because data centers demand rigorous 99.9999% uptime contracts. He proposes an engineering solution: building data centers that gracefully degrade, shifting non-critical workloads or reducing computing rates when the grid requires peak power for civil infrastructure, allowing tech companies to utilize the grid's latent excess power. Verdict: Skim for a very pragmatic engineering approach to data center power allocation.

**[NVIDIA CEO’s leadership lessons from failure, embarrassment, suffering | Jensen Huang](https://www.youtube.com/watch?v=ziL09IyS0cw)** · Lex Clips
Huang discusses his approach to managing immense pressure by explicitly decomposing problems into manageable parts and reasoning through them publicly with his team. Verdict: Skip, as it focuses entirely on personal psychology and management tactics rather than technology.

**[How America Changed Its AI Strategy](https://www.youtube.com/watch?v=VVR9TQ_20QM)** · No Priors: AI, Machine Learning, Tech, & Startups
A very brief anecdote regarding the Trump administration reversing a Biden executive order on AI during its first week, and tasking industry leaders to formulate a 6-month plan for American AI dominance. Verdict: Skip, pure political anecdote.

**[Are Superhuman Agents Here?](https://www.youtube.com/watch?v=nF3A97R1kR4)** · No Priors: AI, Machine Learning, Tech, & Startups
A grounded reality check on the state of coding agents, arguing that they are still far from replacing median programmers because they struggle to take rough ideas and break them down without constant developer supervision. The speaker notes that the immediate pragmatic use-case will be isolated tasks like navigating codebases to fix specific bugs. Verdict: Skim for a sober, realistic assessment of current AI capabilities against the hype.

**[Why Heliocentrism Was Actually Wrong At First - Terence Tao](https://www.youtube.com/watch?v=rViklYOjwq8)** · Dwarkesh Patel
Mathematician Terence Tao explains how Copernicus's original heliocentric model using perfect circles was actually less accurate than Ptolemy's geocentric model. He details how it took Kepler's rigorous data analysis of Tycho Brahe's observations to prove that planetary orbits are elliptical. Verdict: Skim for a fascinating historical case study on data analysis and the friction of adopting new scientific models.

**[DMT: The Best Longevity Protocol?](https://www.youtube.com/watch?v=-4zzC7ZXNx8)** · All-In Podcast
A podcast segment where a guest claims that taking 5-MeO-DMT acted as a better "reset" for him than optimized diet, exercise, or hyperbaric oxygen therapy. Verdict: Skip, irrelevant biohacking content.

**[Anthropic’s Generational Run, OpenAI Panics, AI Moats, Meta Loses Major Lawsuits](https://www.youtube.com/watch?v=4Gmd5UTF4rk)** · All-In Podcast
A lengthy investor-focused discussion covering Anthropic's recent enterprise traction with Claude Co-work and Computer Use features, contrasting it with OpenAI's consumer focus. The most technically relevant segment involves a discussion on how "agentic AI" could disrupt traditional SaaS business models by commoditizing software interfaces, replacing complex UI dashboards with flat terminal chats that silently trigger backend APIs. Verdict: Skim the AI segments to understand how venture capital is viewing the threat of agents to traditional SaaS valuations.

## Themes
The defining technical shift across today's signal is the transition to "agentic" workflows operating at test-time. Whether it is GitHub abandoning imperative scripts for Markdown-driven agents, Google orchestrating Vision APIs via prompt instructions rather than code loops, or Nvidia redesigning hardware racks to support the massive inference compute required by reasoning models, the industry is aggressively moving away from pre-programmed logic toward dynamic, intent-based execution.