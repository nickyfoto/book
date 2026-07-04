---
title: 2026-06-26
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["generative-ai", "llms", "prompt-injection", "openai", "security"]
---

# Simon Willison — 2026-06-26

## Highlight
Today's standout piece explores Fernando Irarrázaval's prompt injection challenge, which aligns perfectly with Simon's ongoing AI security research. It highlights a fascinating and practical trend: frontier models like Opus 4.6 are becoming surprisingly resilient to injection attacks, though we still shouldn't trust them with irreversible actions.

## Posts

**[What happened after 2,000 people tried to hack my AI assistant](https://simonwillison.net/2026/Jun/26/hack-my-ai-assistant/#atom-everything)**
Fernando Irarrázaval set up a honeypot challenge to see if anyone could leak secrets from an OpenClaw instance backed by Opus 4.6. Out of 6,000 inbound email attempts, none were successful, which aligns with Simon's observation that frontier labs are making significant strides in prompt injection resistance. However, Simon cautions developers that these failed attempts still provide no guarantee against a more sophisticated approach, warning against using LLMs for anything involving irreversible damage.

**[Quoting OpenAI](https://simonwillison.net/2026/Jun/26/openai/#atom-everything)**
OpenAI announced a limited preview of the GPT-5.6 series (Sol, Terra, and Luna), which is restricted initially to trusted partners at the US government's request. For developers, the most critical updates are the new prompt caching mechanics, which introduce explicit cache breakpoints, a 30-minute minimum cache life, and a new billing model where cache writes cost 1.25x the model's uncached input rate.

**[Incident Report: CVE-2026-LGTM](https://simonwillison.net/2026/Jun/26/incident-report/#atom-everything)**
Simon highlights a hilarious, speculative incident report written by Andrew Nesbitt. It imagines a scenario where two competing AI review agents enter an automated disagreement loop on a pull request, burning over $41,000 in token spend before being shut down by Finance—only for marketing to spin the AI spat into a stock-boosting press release.

**[Quoting Dean W. Ball](https://simonwillison.net/2026/Jun/26/dean-w-ball/#atom-everything)**
A highlighted excerpt from Dean W. Ball discussing the fragile economics of frontier model training. Ball argues that restricting frontier model access to a small whitelist of government-approved companies fundamentally breaks the business case for building $100 billion data centers, as labs rely on broad, global availability in the first few post-release months to recoup their massive training costs.

**[Quoting Timothy B. Lee](https://simonwillison.net/2026/Jun/26/timothy-b-lee/#atom-everything)**
A short but sharp quote from Timothy B. Lee pushing back against the notion that working with LLMs requires no skill or learning curve. He compares this fallacy to assuming management is easy just because employees simply do what they are told.

## Project Pulse
Today’s posts show a strong focus on the shifting economics and security posture of frontier LLMs. Between OpenAI's new caching mechanics and government-restricted previews, and the practical resilience of Opus 4.6 against prompt injection, the landscape of deploying production AI is clearly maturing.