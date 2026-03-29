---
title: Engineer Blogs
weight: 1
bookCollapseSection: true
---

# Engineering Reads — Week of 2026-03-16 to 2026-03-25

## Week in Review

The dominant theme this week revolves around how AI and opaque distributed systems are forcing a complete recalibration of our engineering mental models and heuristics. We are definitively transitioning from explicitly writing deterministic instructions to defining guardrails, evaluating outcomes, and fighting to maintain our internal maps of system architecture. Simultaneously, we are confronting the raw, messy realities of technical ownership—from accepting Kubernetes quorum failures in self-hosted infrastructure to managing ideological hard forks over AI-generated code.

## Must-Read Posts

**[My heuristics are wrong. What now?](http://brooker.co.za)** · Marc Brooker · brooker.co.za
Brooker argues that the current AI landscape is an "extinction-level event" for our hard-won rules of thumb around system maintainability, API design, and integration costs. He urges senior engineers to retain their high standards and technical taste, but strongly advocates a return to hands-on prototyping; those who refuse to abandon outdated heuristics will quickly become the least valuable members on a team.

**[Fragments: March 19](https://martinfowler.com/fragments/2026-03-19.html)** · Martin Fowler · martinfowler.com
Fowler warns against treating AI like a GPS that passively degrades our mental maps of a codebase, advocating instead for deep observability as our new IDE. As line-by-line coding diminishes into "supervisory engineering," applying architectural judgment during code review and observing emergent production behavior become an engineer's primary mechanisms for steering system health.

**[A eulogy for Vim](#)** · Drew DeVault · Source
DeVault announces "Vim Classic," a hard fork of the text editor born from a strict rejection of Generative AI, which he views as a severe ethical and ecological liability. By branching deliberately from Vim 8.2.0148 to avoid LLM-authored code, he highlights a stark industry tradeoff: preserving software provenance and ideological boundaries at the explicit cost of abandoning modern language features and plugin compatibility.

**[Consensus Board Game](https://matklad.github.io/2026/03/19/consensus-board-game.html)** · Aleksey Kladov · matklad.github.io
Kladov strips away network noise to model Paxos-like distributed consensus as a visual 2D board game of concurrent votes. It is a brilliant exercise in abstracting away engineering pragmatics to build a robust mental model of how state agreement is mathematically guaranteed before wrestling with the messy reality of partial visibility and message delays.

**[Music To Build Agents By](#)** · Marc Brooker · Source
Likening modern AI agents to Goethe's _The Sorcerer's Apprentice_, Brooker argues that the persistent adaptiveness of agents is exactly what makes them dangerous if unconstrained. He emphasizes that defining strict policy layers and behavioral guardrails is vastly more critical than simply improving an agent's capability to solve edge cases.

## Connecting Threads

A clear through-line this week is the shifting nature of how engineers control, bound, and comprehend complex systems. Whether it is Brooker advocating for strict agent policies, Fowler pushing for production observability over deterministic testing, or DeVault hard-forking Vim to reject LLM code entirely, the industry is grappling with a loss of direct, line-by-line control. We are moving from explicit instruction to establishing guardrails—be it through Architecture Decision Records (ADRs) to persist context, mathematical models to internalize asynchronous consensus, or deliberate ideological boundaries to maintain software provenance.
