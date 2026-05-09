---
title: 2026-04-30
weight: 8
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "machine learning", "cloud infrastructure"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-04-30

## Watch First
[Replacing 12K LoC with a 200 LoC Skill — David Gomes, Cursor](https://www.youtube.com/watch?v=WE_Gnowy3uw)
Cursor deleted roughly 15,000 lines of complex Git worktree management code and replaced the entire feature with a 200-line Markdown skill that spins up sub-agents in parallel. It is a highly practical case study on how plain text prompts are replacing legacy application logic, paired with honest caveats about how LLMs will still occasionally hallucinate and escape their isolated directories.

## Highlights by Theme

### Developer Tools & Platforms
The agentic coding era is putting immense strain on traditional developer infrastructure, best summarized by [GitHub is having some major issues right now…](https://www.youtube.com/watch?v=d53Zk28esmU) from Fireship, which details GitHub's sub-90% April 2026 uptime driven by AI agents hammering their APIs, prompting massive projects like Ghostty to leave the platform. On the implementation side, PostHog’s Danilo Campos delivered an excellent, pragmatic talk in [LLM codegen fails and how to stop 'em](https://www.youtube.com/watch?v=juoNbJiZUi0), detailing how they successfully automate 15,000 integrations a month by feeding agents "model airplanes"—slimmed-down dummy projects with broken auth—so the LLM understands architectural shape without blowing up the context window. If you are building Copilot CLI extensions, [How to use hooks in the GitHub Copilot CLI | demo](https://www.youtube.com/watch?v=bglVc9HDfwg) gives a quick look at intercepting the agent loop with `pre_tool_use` and `post_tool_use` event hooks. Finally, GitHub's [Rubber Duck Thursday: Agentic Loops and Context Engineering](https://www.youtube.com/watch?v=rJ1RcHlrUjE) stream showed a great practical demo of giving an LLM access to the Excalidraw MCP server, allowing the model to dynamically read API docs and immediately generate architecture diagrams.

### AI & Machine Learning
Google DeepMind introduced major architectural shifts in [Building Conversational Agents](https://www.youtube.com/watch?v=cVzf49yg0D8), notably the new Interactions API which maintains server-side state to drastically preserve cache hit rates across conversational turns. The talk included a live demo of the Gemini 3.1 Flash Live websocket API which bravely failed during a Google Search grounding tool call, serving as a realistic reminder of the fragility of live AI agent demos. For RAG architectures, [Building with Gemini Embedding 2](https://www.youtube.com/watch?v=_en7QoZ_utc) demonstrates a genuinely useful natively multimodal embedding model that maps text, audio, and images into the exact same vector space, using Matryoshka representation learning to let you safely truncate dimensions from 3072 down to 768 to optimize performance. Google also announced new models in [Announcing Gemma 4](https://www.youtube.com/watch?v=bKRe5wu4Fcw), releasing the Gemma 4 family under an Apache 2.0 license, featuring a 26B Mixture-of-Experts and a 31B dense model. If you write custom machine learning algorithms, [Unlocking Low-Level Control: Customizing Keras Training Loops with JAX](https://www.youtube.com/watch?v=1PZKfIyrYOc) is a solid, no-fluff tutorial on overriding `train_step` using JAX's stateless `value_and_grad` transformations to maintain low-level control over gradients while keeping Keras's high-level `model.fit` API.

### Hardware & Infrastructure
Cloud infrastructure marketing remains mostly unchanged, with [Welcome to Bigtable](https://www.youtube.com/watch?v=yArSgUhQHT8) offering a standard high-level pitch on Bigtable's ability to handle millions of operations per second for time-series data and its native connectors for streaming ecosystems like Flink and Kafka. You can safely ignore the purely PR-driven noise from NVIDIA in [The facts on AI and the American economy](https://www.youtube.com/watch?v=JH9EGxdZWNc) and OpenAI in [What Codex Unlocks for Virgin Atlantic](https://www.youtube.com/watch?v=eHe2F10TlV4) unless you enjoy unverified corporate claims about macroeconomics and technical debt reduction. 

### Everything Else
In [Software is not a moat](https://www.youtube.com/watch?v=KrZTWyhkWsk), Snap's Evan Spiegel gives a grounded 60-second reflection on how easily software features are cloned, concluding that hardware and creator ecosystems are the only true defensible business moats. On the UI front, [Slack School | Acing Accessibility](https://www.youtube.com/watch?v=0--r8llEONM) is a quick reminder to check your enterprise tool settings, demonstrating Slack's built-in OpenDyslexic font and Tritonopia high-contrast themes. Finally, Apple's [Get detailed dimensions with the Measure app.](https://www.youtube.com/watch?v=LaoYkdlFhTY) is a brief consumer short demonstrating basic point-and-click AR measurement capabilities in iOS.