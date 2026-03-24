---
title: 2026-03-22
weight: 1
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-22

## Watch First

Nicole Forsgren’s talk at the Pragmatic Summit is the standout today. She accurately identifies that while AI tools have hyper-accelerated the coding inner-loop, they are absolutely crushing downstream CI/CD, review, and deployment pipelines.

## Video Rundown

**[Nicole Forsgren: Leading high-performing engineering teams in the age of AI - The Pragmatic Summit](https://www.youtube.com/watch?v=DfrAaDgFgjc)** · The Pragmatic Engineer
Forsgren argues that generative AI exposes and worsens existing organizational bottlenecks, as human code reviewers and deployment managers are now overwhelmed by machine-generated output. She highlights a fascinating paradox regarding cognitive load: faster AI feedback loops are actually exhausting developers, who are now forced to rebuild their mental models of a codebase dozens of times within a 30-minute window. To measure true productivity rather than just a spike in raw lines of code, she advocates returning to holistic models like the SPACE framework.
**Verdict:** Watch in full; a highly pragmatic look at how AI coding tools are breaking existing software delivery systems.

**[Build multi-agent AI A2A + Cloud Run | Hands On AI (Part 2)](https://www.youtube.com/watch?v=pEAZ5iyKgWE)** · Google Cloud Tech
This hands-on lab demonstrates how to deploy multiple autonomous AI agents as independent Cloud Run services and orchestrate them using an Agent-to-Agent (A2A) protocol. The core technical concept shown is the "Agent Card"—a discoverable JSON specification hosted at a `/.well-known/agent.json` endpoint that advertises an agent's capabilities and required authentication schemes to other services. The demo also implements agent-lifecycle callbacks to enforce global rate limits and cooldowns across remote endpoints, preventing rogue agents from spamming requests.
**Verdict:** Skim the repository or docs if you are building multi-agent architecture; skip the video unless you want a step-by-step walkthrough of Google's specific SDK.

**[Product-minded engineers in an AI-native world](https://www.youtube.com/watch?v=0Cv5763UX70)** · The Pragmatic Engineer
A panel discussing how AI is blurring the traditional lines between engineering, design, and product management. The most notable operational claim comes from Flint's co-founder, who states their engineers now run up to four autonomous agents (like Claude) concurrently to fix bugs identified on morning sales calls by 11 AM. Furthermore, they note that non-coding designers are now successfully shipping multiple pull requests per week using these AI tools.
**Verdict:** Skim for practical anecdotes on how elite startup teams are actually integrating AI coding agents into their daily development habits.

**[The art of influence: The single most important skill left that AI can’t replace | Jessica Fain](https://www.youtube.com/watch?v=RP4vJeIb7WU)** · Lenny’s Podcast
Fain argues that as AI commoditizes raw software execution, the ability to build consensus and influence executives becomes the highest-leverage engineering skill. She offers concrete organizational tactics, such as abandoning local feature metrics in pitches and instead directly tying technical proposals to the specific pressures an executive is facing from their board. Interestingly, she advocates using AI for corporate simulation by training custom GPTs on transcripts of past executive product reviews to anticipate pushback.
**Verdict:** Skim the transcript for actionable organizational tactics, particularly the advice on "shrinking the change" to get initial buy-in for risky technical bets.

**[Is MCP actually dead?](https://www.youtube.com/watch?v=N-s68IAsvOg)** · GitHub
A brief response to a social media debate over whether the Model Context Protocol (MCP) is necessary compared to standard shell commands. It cites Gergely Orosz's argument that while CLIs work for small projects, enterprise-scale AI requires MCP for secure, consistent internal service connections. It also plugs an April 1st "MCP funeral" stunt hosted by the FastMCP team ahead of the upcoming MCP summit.
**Verdict:** Skip; it's a quick social media update with no technical depth.

**[Gauss’s Strangest Discovery Was a Statistical Accident - Terence Tao](https://www.youtube.com/watch?v=fXFmnIZhE08)** · Dwarkesh Patel
Mathematician Terence Tao explains how Gauss originally conceptualized the prime number theorem by empirically tallying primes up to a million to find a statistical trend. The discovery was entirely heuristic and data-driven rather than rigorously proven at the time, yet it successfully modeled prime distribution as a random process. This probabilistic framework forms the foundation for modern cryptography's security guarantees.
**Verdict:** Skip unless you enjoy brief, interesting mathematical history trivia.

**[Why The Italians Cosplayed The Romans - Ada Palmer](https://www.youtube.com/watch?v=8diO8Mm01FA)** · Dwarkesh Patel
Historian Ada Palmer describes how the Medici family maintained political control in Florence by visually mimicking the old Republic. Florentine officials were mandated to wear a red robe that simulated a Roman toga, providing a veneer of republican continuity that forced the Medici to respect certain institutional rights.
**Verdict:** Skip; purely historical trivia unrelated to technology.

## Themes

Across the technical talks, a clear reality is emerging: AI has made code generation cheap, which is shifting the true engineering bottlenecks toward system delivery pipelines, multi-agent orchestration protocols, and organizational alignment.
