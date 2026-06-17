---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["jailbreaking", "claude-code", "local-llms", "datasette"]
---

# Simon Willison — 2026-06-16

## Highlight
The meatiest topic today is Simon's sharp criticism of the export controls placed on Claude Fable 5. He connects the dots between a press report and security expert Katie Moussouris to point out the absurdity of penalizing an AI model for successfully fixing security vulnerabilities, which is a core feature of cyberdefense.

## Posts

**[The Fable 5 Export Controls Harm US Cyber Defense](https://simonwillison.net/2026/Jun/16/fable-5-export-controls/#atom-everything)**
Simon strongly criticizes the US export controls placed on Claude Fable 5, citing security expert Katie Moussouris. The so-called "jailbreak" that triggered the ban was merely researchers asking the model to "fix this code" after it had refused a prompt to "review the code for security issues". Simon argues that banning models for executing the "find, fix, and test loop" fundamentally misunderstands how AI assists in defensive security, effectively penalizing a model for fixing bugs.

**[Cloudflare CAPTCHA on at least one ampersand](https://simonwillison.net/2026/Jun/16/captcha-on-at-least-one-ampersand/#atom-everything)**
In this TIL, Simon shares a practical tweak to his Cloudflare WAF rules to stop over-aggressive CAPTCHAs from blocking simple queries on his site's search engine. With help from Claude Code, he figured out how to trigger the challenge only when search URLs contain at least one ampersand. He also notes an attempt to use the Cloudflare MCP with Claude Code to edit the rules, but ultimately had to switch to the standard Cloudflare API when the MCP fell short.

**[datasette-tailscale 0.1a0](https://simonwillison.net/2026/Jun/16/datasette-tailscale/#atom-everything)**
Simon released an experimental alpha plugin that exposes a localhost Datasette server directly to a private Tailscale network. The tool relies on Python bindings for the experimental `tailscale-rs` library to set up the proxy mechanism. This allows users to easily and securely share a local database instance across their Tailnet.

**[Quoting Matteo Wong, The Atlantic](https://simonwillison.net/2026/Jun/16/matteo-wong-the-atlantic/#atom-everything)**
This link post highlights an article from The Atlantic discussing the White House's investigation into the Fable jailbreak. It sets up the context for Simon's longer piece on the topic, pointing out that what non-technical officials considered an exploit was described by experts like Katie Moussouris as just the model functioning as intended for cyberdefense.

**[Quoting Georgi Gerganov](https://simonwillison.net/2026/Jun/16/georgi-gerganov/#atom-everything)**
Simon highlights a Hacker News comment from Georgi Gerganov praising Qwen3.6-27B as a highly capable local coding model. Gerganov runs it on an M2 Ultra or an RTX 5090 using a stripped-down `pi` agent with a custom system prompt to assist with daily maintainer tasks.

## Project Pulse
Today's updates show Simon balancing practical AI-assisted web maintenance with his ongoing advocacy for sensible AI security regulations. He is also continuing to push the boundaries of local networking and small sharp tools with an experimental new Tailscale plugin for Datasette.