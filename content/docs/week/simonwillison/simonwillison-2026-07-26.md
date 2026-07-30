---
title: 2026-07-26
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "llm-pricing", "generative-ai", "api abuse"]
---

# Simon Willison — 2026-07-26

## Highlight
Simon shares a wake-up call for AI developers regarding the shadow economy of LLM token reselling, highlighting the critical need for strict API spending caps to prevent abuse.

## Posts

**[An Inside Look at the Relay Market Powering Token Resellers and Fraud](https://simonwillison.net/2026/Jul/26/relay-market/#atom-everything)** · Source
Simon points to Matt Lenhard's fascinating investigation into a token relay market—mostly based in China—where resellers pool API keys to offer significantly discounted LLM access. These resellers achieve their cheap rates by abusing free trials, exploiting unprotected support bots, or using stolen credit cards, and then they route the buyer traffic using open-source proxy load-balancers like `one-api` and `new-api`. For Simon, the existence of this organized, profit-driven ecosystem validates his ongoing fears about exposing public LLM applications to endpoint abuse. His core takeaway is an urgent plea to LLM vendors: platforms desperately need to offer strict API spending caps that completely shut off application access the moment a specific dollar threshold is reached.