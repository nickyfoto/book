---
title: 2026-08-30
weight: 2
categories: ["Blogs", "AI", "Tech"]
tags: ["chatgpt work", "openai", "code execution", "prompt injection", "headless browser"]
---

# Simon Willison — 2026-08-30

## Highlight
Simon cuts through OpenAI's vague marketing around **ChatGPT Work** to uncover what actually differentiates it under the hood from standard Chat. Behind the ambiguous positioning lies a formidable power-user environment equipped with unrestricted internet-connected code execution, a headless Chrome browser, persistent shared storage, sub-agents, and automated full-stack site deployment via Cloudflare Workers.

## Posts

**[Understanding ChatGPT Work](https://simonwillison.net/2026/Aug/30/understanding-chatgpt-work/)** · [Source](https://simonwillison.net/2026/Aug/30/understanding-chatgpt-work/)
Simon investigates the cloud version of OpenAI's new subscription tier, looking past high-level workflow descriptions to systematically catalogue the concrete runtime features missing from regular Chat. Through hands-on experimentation, he highlights major developer capabilities: an internet-enabled code execution container that can clone GitHub repositories and install packages, a headless Chrome browser capable of DOM JavaScript execution (mirroring his own `shot-scraper` tool), persistent cross-session workspace storage, and the ability to build and deploy live web applications on Cloudflare Workers. He also explores Work's access to API-level models like GPT-5.6 Luna and Terra, sub-agents, and scheduled prompts, while sounding alarms under his "lethal trifecta" model regarding prompt injection risks when private data meets untrusted web access. His primary takeaway is that OpenAI could demystify the platform immediately if they published the agent's underlying system prompt and tool definitions rather than masking technical architecture behind vague use-case archetypes.

## Project Pulse
Today's post represents a deep dive into emerging AI runtime architectures, exploring how open network access and browser automation transform sandboxed LLM containers into genuine developer environments. Simon directly connects these capabilities to his existing toolset—notably comparing the headless browser to `shot-scraper`—while maintaining a sharp practitioner's focus on persistent security vulnerabilities like prompt injection.

***

💡 Would you like to explore Simon's "lethal trifecta" security framework in more detail, or compare ChatGPT Work's container capabilities with Claude's code interpreter environment?