---
title: 2026-05-11
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["coding-agents", "agentic-engineering", "llms", "generative-ai"]
---

# Simon Willison — 2026-05-11

## Highlight
Today's dispatches heavily focus on the macro consequences of the "agentic era" on the software industry, exploring everything from how coding agents are forcing massive corporate restructurings at GitLab to the stark mathematical reality of AI-generated codebase maintenance debt. 

## Posts

**GitLab Act 2** · [Source](https://simonwillison.net/2026/May/11/gitlab-act-2/#atom-everything)
Simon unpacks GitLab's recent workforce reduction and structural flattening, which reorganizes their R&D into roughly 60 independent, empowered teams tailored for the agentic era. He highlights GitLab's Jevons-paradox-inspired outlook: as AI agents collapse the cost and time of producing software, the overall market demand for software—and the builders who make it—will radically multiply. However, Simon pragmatically notes that GitLab has a strong financial incentive to project this optimism, given a recent 50% drop in their stock price and a business model heavily reliant on growing seat-based licenses.

**Using LLM in the shebang line of a script** · [Source](https://simonwillison.net/2026/May/11/llm-shebang/#atom-everything)
In a highly practical TIL post inspired by Hacker News, Simon explores how to use his LLM CLI tool directly in the shebang (`#!/usr/bin/env llm`) of plain English text files. The post demonstrates several patterns, including how to incorporate tool calls using the `-T` option and how to execute YAML templates that define extra tools as Python functions. The full write-up goes even deeper, showcasing a complex setup that uses the Datasette SQL API to query his blog content.

**Learning on the Shop floor** · [Source](https://simonwillison.net/2026/May/11/learning-on-the-shop-floor/#atom-everything)
Reflecting on Tobias Lütke's description of Shopify's internal coding agent, River, Simon highlights the value of *osmosis learning*. Because River refuses direct messages and only operates in public Slack channels, hundreds of developers can watch, add context, and learn from each other's prompting strategies. Simon notes this "teaching workshop" environment is identical to the mechanism that drove Midjourney's early success, where forcing users to prompt in public Discord channels accelerated community learning and compensated for finicky interfaces.

**Quoting James Shore** · [Source](https://simonwillison.net/2026/May/11/james-shore/#atom-everything)
A stark warning about the true economics of AI-assisted programming. James Shore argues that if an LLM coding agent increases your code output, it must decrease your maintenance costs by an exactly inverse rate. Simon highlights Shore's conclusion that simply writing code twice as fast without halving maintenance overhead means you are quadrupling your maintenance costs, trading a temporary speed boost for permanent indenture.

**Your AI Use Is Breaking My Brain** · [Source](https://simonwillison.net/2026/May/11/zombie-internet/#atom-everything)
Simon points to an excellent, angry piece by Jason Koebler about the mentally exhausting reality of filtering out AI slop online. He specifically calls out Koebler's concept of the "Zombie Internet"—an insidious evolution beyond the "Dead Internet" (which is merely bots talking to bots). Instead, the Zombie Internet is characterized by people using AI to talk to other AI-wielding humans, flooding platforms with automated hustlebro marketing, fake books, and endless spam.

## Project Pulse
Today’s output shows a distinct thematic focus on **agentic engineering** and its cascading effects. Simon bridges the gap between his hands-on local AI tooling experiments (executing LLM prompts via shebangs) and the broader sociotechnical impacts of agents on developer learning (Shopify), codebase maintenance (James Shore), and macro industry shifts (GitLab).