---
title: 2026-09-14
weight: 2
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "developer tooling", "software engineering", "git"]
---

# Simon Willison — 2026-09-14

## Highlight
Simon engages with Bryan Cantrill's pushback against unsubstantiated AI doom claims, highlighting how domain expertise and responsible public communication are essential when evaluating existential risk assertions like bioweapon threats. This post stands out for its sharp critique of fear-driven narratives surrounding AI capabilities and its call for grounding high-stakes debates in rigorous, domain-specific evidence.

## Posts

**[The contagion of fear](https://simonwillison.net/2026/Sep/14/the-contagion-of-fear/)** · simonwillison.net
Simon highlights Bryan Cantrill's essay responding to claims from former Anthropic employees regarding existential AI risks and bioweapon threats. The post emphasizes Cantrill's argument that domain experts hold public trust and must not spread fear through speculative, hand-wavy claims about catastrophic scenarios without domain-specific proof. Simon links to his discussion with Cantrill on the *Oxide and Friends* podcast, underscoring the risk of letting ungrounded fears fill gaps in public understanding. The key takeaway is a call for intellectual responsibility and rigorous domain expertise when communicating high-stakes AI risks to the public.

**[What blog posts influenced your thinking the most?](https://simonwillison.net/2026/Sep/14/influences/)** · simonwillison.net
Simon reflects on three foundational blog posts that shaped his career in response to a Lobste.rs discussion thread. He highlights Joel Spolsky's "The Law of Leaky Abstractions" for instilling a habit of understanding underlying system layers, Will Larson's "Migrations" for framing infrastructure migrations as a core engineering discipline, and Charity Majors's "The Engineer/Manager Pendulum" for giving permission to alternate between management and individual contributor roles. The key takeaway is how foundational technical writing can provide durable mental models for career navigation, system architecture, and day-to-day engineering practices.

**[commit-rewriter 0.1](https://simonwillison.net/2026/Sep/14/commit-rewriter/)** · simonwillison.net
Simon released `commit-rewriter 0.1`, a Python tool runnable via `uvx commit-rewriter` that provides a local web interface to edit Git commit messages. He built the utility to clean up commit histories for Datasette security releases, removing AI coding agent cruft and internal issue references before public publication. The tool automatically creates a timestamped recovery branch before rewriting history from the first modified commit, offering a practical workflow for sanitizing repository commits.

**[Quoting Laurie Voss](https://simonwillison.net/2026/Sep/14/laurie-voss/)** · simonwillison.net
Simon highlights a quote from Laurie Voss's piece "We are all Product Engineers now" on the shifting landscape of software development. The quote points out that as AI tools collapse the cost of writing, reviewing, and operating code, the primary bottleneck in software engineering shifts entirely to product engineering—discovering human needs, defining specifications precisely, and delivering great user experiences. Simon finds notable how this shift redefines the software developer's core value proposition in an era of infinite software supply.

## Project Pulse
Today's posts reflect a strong focus on the evolving role of the software developer in the AI era, spanning pragmatic tooling to sanitize AI agent output, reflections on career and engineering abstractions, and critical commentary on AI risk discourse. Across these items, Simon continues his practice of shipping small, sharp utilities (`commit-rewriter`) while engaging thoughtfully with broader meta-trends in AI ethics and product engineering.

💡 Interested in exploring `commit-rewriter` further or turning this daily digest into a structured slide deck summary for your team?