---
title: 2026-06-18
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "sandboxing", "javascript", "content-security-policy", "ai-assisted-programming"]
---

# Simon Willison — 2026-06-18

## Highlight
Simon has launched `datasette-apps`, a major new concept allowing developers and LLMs to build self-contained, sandboxed HTML+JS applications that run directly against a persistent Datasette backend. It brilliantly merges his ongoing experiments with "vibe-coded" single-file HTML tools, Claude Artifacts, and secure iframe sandboxing into a core feature of the Datasette ecosystem.

## Posts

**[Datasette Apps: Host custom HTML applications inside Datasette](https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything)**
This post dives deep into the "why" and "how" behind the newly released `datasette-apps` plugin. The plugin allows tightly constrained `iframe` sandboxes to run JavaScript that executes read-only SQL queries or allow-listed stored write queries against a Datasette instance. Simon outlines the clever security architecture required to run untrusted code safely on an authenticated domain containing private data, relying on an `<iframe sandbox="allow-scripts">` tag combined with an immutable, injected Content-Security-Policy (CSP) header. He also details porting his API communication from `postMessage()` to `MessageChannel()`, a defense-in-depth upgrade suggested by GPT-5.5. The plugin seamlessly integrates AI workflows by providing a copyable prompt—complete with database schemas—that users can drop into ChatGPT or Claude to instantly generate a working app. Additionally, Simon shares a fascinating security anecdote: before access was restricted, he used Claude Fable 5 to evaluate the product, and the model discovered a severe data exfiltration vulnerability related to CSP allow-listing, which he promptly patched by locking down domain-allow permissions to trusted staff.

## Project Pulse
Datasette is rapidly evolving from a platform strictly for publishing read-only data into a comprehensive ecosystem for interacting with and building interfaces over data. This release underscores a major ongoing theme in Simon's work: blending the rapid iteration of AI-assisted programming (like Claude Artifacts) with robust security paradigms for untrusted code execution.