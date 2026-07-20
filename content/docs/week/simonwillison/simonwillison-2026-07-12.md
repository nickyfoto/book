---
title: 2026-07-12
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["generative-ai", "shot-scraper", "management", "ai-ethics"]
---

# Simon Willison — 2026-07-12

## Highlight
Simon's thoughts on "Directly Responsible Individuals" (DRIs) provides a crucial human-centric framework for evaluating the integration of LLM-powered agents into organizations. By emphasizing that accountability is an exclusively human trait, he grounds the rapid advancement of AI tooling in practical management ethics.

## Posts

**[Directly Responsible Individuals (DRI)](https://simonwillison.net/2026/Jul/12/directly-responsible-individuals/#atom-everything)** · Source
Simon traces the concept of a "Directly Responsible Individual"—the person ultimately accountable for a project's outcome—to its Apple origins via the GitLab handbook. He applies this to modern LLM-powered agents, arguing that AI should never hold DRI status within an organization because machines cannot take accountability. Highlighting a classic 1979 IBM slide, he reiterates that a computer must never make a management decision.

**[Fable gets another bump](https://simonwillison.net/2026/Jul/12/bump/#atom-everything)** · Source
Anthropic has extended access to its Claude Fable 5 model on paid plans through July 19, likely in response to the fierce competition from OpenAI's newly unrestricted GPT-5.6 Sol. While Anthropic initially limited access to gauge compute constraints, OpenAI recently removed the five-hour usage limits for all premium plans. Simon argues that Anthropic should change track and make Fable permanently available, noting that OpenAI is winning users simply due to the uncertainty surrounding Claude's pricing and access limits.

**[shot-scraper 1.11](https://simonwillison.net/2026/Jul/12/shot-scraper/#atom-everything)** · Source
This update to Simon's CLI tool for taking website screenshots introduces several helpful consistency improvements for developers. The server polling mechanism now intelligently waits up to 30 seconds for port availability, replacing a rigid one-second delay. Additionally, commands now support a `--js-file` option to load JavaScript from local files, standard input, or GitHub, and include a unified `--timeout` option.

## Project Pulse
Today's posts reflect a strong focus on the pragmatics of the modern AI ecosystem, blending high-level organizational ethics concerning AI coding agents with grounded commentary on the evolving features and pricing wars between major LLM providers.