---
title: 2026-07-02
weight: 2
categories: ["Blogs", "AI", "Tech"]
tags: ["coding-agents", "generative-ai", "llms", "datasette", "dspy"]
---

# Simon Willison — 2026-07-02

## Highlight
The standout update today is Simon's release of a brand-new coding agent framework, `llm-coding-agent 0.1a0`, which he bootstrapped entirely using Claude Fable 5. It represents a significant step in evolving his popular `llm` library into a capable, tool-wielding agentic framework. 

## Posts

**[llm-coding-agent 0.1a0](https://simonwillison.net/2026/Jul/2/llm-coding-agent/#atom-everything)**
Simon released a new alpha tool that turns his `llm` library into a full-fledged coding agent. By prompting Claude Fable 5 in Claude Code to write the spec and build it via test-driven development, he shipped a CLI that includes file manipulation and command execution tools like `edit_file` and `execute_command`. He also highlights a neat Python API (the `CodingAgent` class) the AI implemented unprompted, and shared a successful test run where the agent built a SwiftUI ASCII time app using `llm code --yolo`.

**[Using DSPy to evaluate and improve Datasette Agent’s SQL system prompts](https://simonwillison.net/2026/Jul/2/dspy-datasette-agent-prompts/#atom-everything)**
Inspired by a keynote at the AI Engineer World's Fair (AIE), Simon fired off an asynchronous Claude Fable 5 task to research using `dspy` for evaluating Datasette Agent's read-only SQL system prompts. The AI tested with GPT 4.1 mini and nano, discovering a valuable prompt optimization: explicitly including column names in the schema listing prevents the agent from guessing fields and falling into error-retry loops.

**[Understand to participate](https://simonwillison.net/2026/Jul/2/understand-to-participate/#atom-everything)**
Reflecting on Geoffrey Litt's AIE talk, Simon explores the concept of "cognitive debt" when collaborating with sophisticated coding agents. The core takeaway is that developers must maintain a deep conceptual understanding of the code the AI writes; lacking this fluency limits your ability to think creatively and participate fully in the project's direction. 

## Project Pulse
Today's posts show Simon heavily leaning into practical agentic workflows, using cutting-edge models like Claude Fable 5 not just to write code, but to independently orchestrate research tasks and build the very agent frameworks he uses. There's a cohesive theme across all three posts of managing the complexity of AI-generated code, whether by mitigating cognitive debt, evaluating system prompts with DSPy, or building small, sharp tools to interact with codebases directly.