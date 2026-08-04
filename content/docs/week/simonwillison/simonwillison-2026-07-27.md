---
title: 2026-07-27
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "generative-ai", "general-agents", "janky-licenses"]
---

# Simon Willison — 2026-07-27

## Highlight
Today's most notable takeaway is Simon's commentary on the messy industry transition from standard chat-based LLMs to agentic systems that can directly operate our computers. His breakdown of the spectacularly confusing naming conventions across ChatGPT and Claude's desktop agent modes is a highly practical read for developers trying to navigate these new local execution environments.

## Posts

**[An opinionated guide to which AI to use to do stuff](https://simonwillison.net/2026/Jul/27/an-opinionated-guide-to-which-ai-to-use-to-do-stuff/#atom-everything)**
Simon reviews Ethan Mollick's updated AI guide, noting a massive shift over the past year from standard chat interfaces to agentic systems capable of executing hours of real work. He highlights how Google's Gemini has fallen off the recommended list because tools like Gemini Spark remain unproven, while ChatGPT and Claude are pushing forward with powerful—yet confusingly named—desktop control modes like "Codex" and "Cowork". For those using these tools daily, Simon shares a brilliant tip: switching the ChatGPT mobile app to "Work" mode removes the internet restrictions from its Code Interpreter container.

**[moonshotai/Kimi-K3](https://simonwillison.net/2026/Jul/27/kimi-k3/#atom-everything)**
Moonshot has officially released the weights for Kimi K3, a hefty 2.8 trillion parameter model that takes up 1.56TB on Hugging Face. Simon dives into the nuanced licensing changes, pointing out that while K2 used a "janky modified MIT" license targeting attribution, the new K3 license specifically requires Model-as-a-Service businesses generating over $20 million to negotiate a separate agreement. He credits Moonshot for accurately branding this as an "open weight" release rather than co-opting the "open source" label, noting that the model is already accessible via OpenRouter from multiple providers.

## Project Pulse
Both posts today reflect Simon's close tracking of how frontier AI is actually being deployed in the wild—whether that means parsing the restrictive licensing of massive 2.8T parameter open-weight models or documenting the unintuitive UX hurdles developers face when giving agentic models access to their local environments.