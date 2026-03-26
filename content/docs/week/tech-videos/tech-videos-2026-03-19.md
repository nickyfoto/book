---
title: 2026-03-19
weight: 6
url: /docs/tech-videos-2026-03-19/
---

# Tech Videos — 2026-03-19

## Watch First

**[Google just changed the future of UI/UX design...](https://www.youtube.com/watch?v=qaB5HF4ax9M)**
Google's new "Stitch" tool introduces a "design markdown file" export that bridges the gap between generated UI components and LLM coding agents, which could actually shift frontend workflows if it works as demoed.

## Video Rundown

**[Google just changed the future of UI/UX design...](https://www.youtube.com/watch?v=qaB5HF4ax9M)** · Fireship
Fireship covers Google "Stitch", an infinite canvas UI/UX generator that creates interactive prototypes, responsive components, and full user flows from text prompts or reference URLs. The most technically notable feature is its ability to export a "design markdown file" containing the design system, which can be fed directly into models like Claude or OpenAI Codex for consistent UI generation across projects. **Verdict: Worth watching in full** to see if this design markdown paradigm is a viable replacement for traditional CSS/Tailwind workflows.

**[Rubber Duck Thursday!](https://www.youtube.com/watch?v=jFaHrHnGmtI)** · GitHub
A 50+ minute live stream demonstrating how to define custom agents locally using simple markdown files containing tool access and system prompts. The presenter demos enabling Claude 4.6 Opus and OpenAI Codex models directly inside GitHub Issues for Copilot Pro/Enterprise users, notably without requiring external API keys. A live demo shows a local security agent using a GitHub MCP server to find missing API rate limits and automatically open tracking issues in the repository. **Verdict: Skim** for the custom markdown agent structure and MCP server implementation, but skip the heavy Q&A filler.

**[Temporal Networks, Where Page Rank meets Lord of the Rings - Computerphile](https://www.youtube.com/watch?v=ZP6Bh3iWklQ)** · Computerphile
Explains the concept of temporal networks by analyzing character interactions sequentially through the text of Lord of the Rings. The video demonstrates `raphtory`, an open-source Python tool for time-series graph analysis, highlighting how standard PageRank fails to capture the directional flow of time necessary for tasks like tracking stolen crypto funds. **Verdict: Worth watching in full** if you work with dynamic graph data, state machines, or fraud detection.

**[Kickstart Conversational Analytics agents with the Looker ChromeUX Block](https://www.youtube.com/watch?v=FLNw4h_-F5s)** · Google Cloud Tech
A tutorial on building conversational BI agents in Looker using a prebuilt LookML block for Chrome UX report data. It shows how to define natural language guardrails, restrict data queries by date, and force the agent to consistently map ambiguous terms to specific fields, like using the P75 LCP metric for "site speed". **Verdict: Skim** if you are a data engineer tasked with bolting LLM chat interfaces onto internal BI tools; otherwise skip.

**[Google AI Studio Build: upgraded agent, full stack runtime & Firebase support](https://www.youtube.com/watch?v=oladCrY8A4g)** · Google for Developers
A brief promotional video announcing an upgraded agent harness (based on "Google Antigravity"), multi-file build support, and a full-stack runtime natively supporting npm packages and secrets management. It also advertises one-prompt Firebase integrations and direct deployments to Cloud Run. **Verdict: Skip.** This is pure high-level marketing with no live demo, benchmarks, or architectural details.

**[Worst video game quest ever created: World of Warcraft’s Green Hills of Stranglethorn](https://www.youtube.com/watch?v=ZB4AuwF66XY)** · Lex Clips
Former Blizzard director Jeff Kaplan explains the design failure behind a notoriously frustrating World of Warcraft collection quest. He notes the core mistake was designing a complex system without respecting strict user interface constraints—specifically, flooding players with non-stacking items when they had severely limited inventory space. **Verdict: Skim** for a great historical anecdote on how ignoring hard UX and system constraints will ruin a product.

**[Single-player vs Multi-player video games - Overwatch creator explains](https://www.youtube.com/watch?v=eEFq23Nakc8)** · Lex Clips
Kaplan breaks down the taxonomy of multiplayer game types (PvE, PvP, Co-op, MMO) and the specific mechanics that make them engaging. He compares designing multiplayer environments to directing a movie where you build the set but are fundamentally not allowed to talk to or direct the actors. **Verdict: Skip** unless you are interested in high-level distributed systems analogies or game design philosophy.

**[Eliminate tech debt with the GitHub Copilot coding agent](https://www.youtube.com/watch?v=fiq-pNjOb3U)** · GitHub
A 30-second ad claiming the Copilot coding agent can take over boring tasks like bug fixes and test coverage so engineers can focus on strategic planning. **Verdict: Skip.** Zero technical substance or proof of capability.

**Missing Video Context**
The following videos appeared in the index, but no technical content, transcripts, or details were provided to evaluate them:

- **[Your Guide to the AWS Agentic AI Microcredential](https://www.youtube.com/watch?v=7rWcoyMNmO8)** · AWS Events
- **[NVIDIA Alpamayo In-Car Reasoning...](https://www.youtube.com/watch?v=CBwKg7dyKfE)** · NVIDIA
- **[Introducing Comet for Enterprise: AI answers for every team](https://www.youtube.com/watch?v=RlSuTwx-17Q)** · Perplexity
  **Verdict: Skip.**

## Themes

**The Standardization of Agent Context:** We are seeing a push to make agent context portable and declarative. Fireship highlights exporting UI designs as "markdown files" for coding models, while GitHub's stream demonstrates defining complex local coding agents (like security reviewers) purely through markdown files. Tools are moving away from proprietary prompt wrappers toward plain text, version-controllable agent definitions.
