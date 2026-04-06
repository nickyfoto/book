---
title: 2026-04-01
weight: 4
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-04-01

## Watch First
[Scaling Uber with Thuan Pham (Uber’s first CTO)](https://www.youtube.com/watch?v=3jjRNVfm3V4) is an incredibly substantive, hype-free breakdown of surviving engineering hypergrowth. It provides a rare inside look at how Uber was forced into a microservices architecture not out of design purity, but purely to survive scale before their NodeJS dispatch monolith hit a hard computational brick wall.

## Highlights by Theme

### Developer Tools & Platforms
[Create and install an F1 inspired MCP Server in VS Code](https://www.youtube.com/watch?v=ZPaF_6mSp8I) by the Visual Studio Code channel offers a practical, code-heavy tutorial on building a Model Context Protocol (MCP) server from scratch. It uses `fastmcp` in Python to expose a local SQLite database to GitHub Copilot chat, effectively demonstrating how to give AI agents secure access to your internal tooling. [Migrating Legacy Code Just Got Easier](https://www.youtube.com/watch?v=AOBbD7YJLIc) by Syntax provides a highly pragmatic guide for using LLMs to migrate a decade-old Express/Pug monolith to Hono and JSX. Instead of letting the AI hallucinate architectural changes, the hosts stress establishing strict manual patterns first—like adopting `AsyncLocalStorage` for standardized web requests—and using the LLM strictly to generate exhaustive test checklists and perform deterministic syntax translation. 

### AI & Machine Learning
[AI Research Breakthroughs from NVIDIA Research](https://www.youtube.com/watch?v=d5wm5hvNybg) from NVIDIA Developer is a dense and highly technical panel covering genuine frontiers in AI. Key highlights include Yejin Choi discussing Reinforcement Learning as Pre-training (RLP) to force models to explicitly reason before token prediction, Marco Pavone on the Alpamayo-1 vision-language-action model using post-training alignment to sync explicit chain-of-thought traces with physical AV actions, and zero-shot sim-to-real transfer for robotics using Neural Robot Dynamics (NeRD). Additionally, a brief customer spotlight [What Codex Unlocks for Ramp](https://www.youtube.com/watch?v=ZXEAuZOSLs0) by OpenAI is mostly marketing, but notable because it explicitly mentions Ramp is already running Codex with "GPT 5.4" in production for automated PR reviews and an on-call assistant agent.

### Everything Else
For engineering leadership, the second half of the [Scaling Uber](https://www.youtube.com/watch?v=3jjRNVfm3V4) video delivers excellent lessons on crisis management and cross-functional structuring, including how they navigated an impossible five-month deadline to rebuild their entire stack locally for the China launch. Finally, be aware of the date: [Tragic mistake... Anthropic leaks Claude’s source code](https://www.youtube.com/watch?v=mBHRPeg8zPU) by Fireship and [The Ultimate Minimal Phone](https://www.youtube.com/watch?v=Hc0aqOEU2w8) by Marques Brownlee are both April Fools' Day videos. The former analyzes a fake 500k-line leak containing "undercover mode" and a "regex frustration detector," while the latter is a serious-sounding review of a $10 VTech Bluey children's toy.