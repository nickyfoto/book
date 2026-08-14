---
title: 2026-08-11
weight: 2
categories: ["Blogs", "AI", "Tech"]
tags: ["large language models", "prompt injection", "security", "generative ai writing"]
---

Hey! Here is today's Simon Willison digest, highlighting a massive security research paper on LLM reasoning leakage and some sharp, practical advice on writing with AI in engineering teams.

# Simon Willison — 2026-08-11

## Highlight
The highlight of today is Simon's review of the **[stolen-thoughts.com](https://stolen-thoughts.com/)** research paper, which breaks down a critical vulnerability where frontier LLMs leaked their encrypted reasoning traces through cheaper family members. This is practically significant for security researchers because it reveals both a rare, unpolished look at proprietary chain-of-thought layers and a dangerous new vector for prompt injection.

## Posts

**Stealing Reasoning Traces from Proprietary LLM APIs** · [Source](https://simonwillison.net/2026/Aug/11/stealing-reasoning-traces/#atom-everything)
This post details how researchers were able to capture and replay encrypted reasoning tokens from proprietary model APIs into weaker siblings like Claude Haiku 4.5, jailbreaking them into outputting unpolished chains of thought. It reveals fascinating glimpses of internal monologues from frontier models like GPT-5.5 that were clearly never optimized for human eyes. Crucially, the paper also exposes a "devious" prompt injection vector: if an attacker can sneak exfiltration directives into a model's encrypted reasoning track, downstream models are highly likely to treat this "sacrosanct" internal state as trusted instruction.

**There are no lossless transformations of natural-language text** · [Source](https://simonwillison.net/2026/Aug/11/there-are-no-lossless-transformations-of-natural-language-text/#atom-everything)
Simon shares and reflects on Sophie Alpert's concise engineering policy on acceptable generative AI usage in writing. The post argues that automatic rephrasing always alters nuance, because an LLM lacks the exact mental representation of the original human writer. For developer teams, the key takeaway is a rule of total ownership: engineers must stand behind every sentence in their documentation and can never dismiss reviewers' questions with the excuse that "AI wrote that".

## Project Pulse
Today's posts reflect a broader developer trend of inspecting LLMs' internals and workflows—examining both the technical vulnerabilities of their encrypted reasoning layers and the practical, quality-loss risks of using them to rewrite technical copy.

***

🔍 Since the paper on reasoning leakage covers a vulnerability that was recently patched, I can search the web to see how OpenAI, Google, and Anthropic implemented their fixes and what the security community has said about it since.