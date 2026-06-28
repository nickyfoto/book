---
title: Simon Willison
weight: 16
bookCollapseSection: true
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "sandboxing", "javascript", "content-security-policy", "ai-assisted-programming", "model-context-protocol", "llms", "ai", "sqlite-utils", "sqlite", "cloudflare", "migrations", "ai agents", "claude-code", "vibe-coding", "onnx", "prompt-injection", "webgpu", "pyodide", "opfs", "github-actions", "datasette-lite", "careers", "ai-ethics", "law", "hallucinations"]
---

# Simon Willison — Week of 2026-06-18 to 2026-06-25

## Highlight of the Week
This week's absolute standout is the launch of the `datasette-apps` plugin, which fundamentally transforms how we build micro-applications over local databases. By utilizing tightly constrained iframe sandboxes and Content-Security-Policy headers, developers and LLMs alike can safely run custom HTML/JS interfaces against a persistent Datasette backend. It brilliantly merges Simon's ongoing experiments with AI-assisted "vibe coding" and robust security architectures into a core ecosystem feature, effectively bridging the gap between Claude Artifacts and secure data environments.

## Key Posts

**[Datasette Apps: Host custom HTML applications inside Datasette]** · [Source](#)
Simon details the security and architecture behind `datasette-apps`, leveraging `<iframe sandbox="allow-scripts">` and injected CSP headers to safely execute untrusted JavaScript over authenticated data. Interestingly, he used Claude Fable 5 to evaluate the plugin, which uncovered a severe data exfiltration vulnerability that he promptly patched before locking down domain-allow permissions.

**[Porting the Moebius 0.2B image inpainting model to run in the browser with Claude Code]** · [Source](#)
In a masterclass on AI-driven development, Simon used Claude Code (Opus 4.8) to act as a full-stack ML engineer, converting a PyTorch model to ONNX, handling browser caching via the CacheStorage API, and deploying a WebGPU app without writing a single line of code himself. It is a striking demonstration of how autonomous agents can bridge significant domain gaps while the developer works on entirely different primary projects.

**[datasette 1.0a35]** · [Source](#)
This major pre-release introduces powerful graphical interfaces for creating and altering tables, shifting Datasette further away from its read-only roots. Users can now seamlessly define columns, constraints, and foreign keys directly via the UI, fully supported by backing JSON APIs and formalized template context variables.

**[simonw/browser-compat-db]** · [Source](#)
Showcasing his signature rapid-prototyping workflow, Simon used Claude Code to convert Mozilla's MDN compatibility data into a ~66MB SQLite database. To get around GitHub Releases lacking open CORS headers, he used GPT-5.5 to write a clever GitHub Actions workflow that force-pushes the DB to an orphan branch, making it instantly queryable in the browser via Datasette Lite.

**[Prompt Injection as Role Confusion]** · [Source](#)
Simon highlights research showing that LLMs parse instructions based on stylistic cues rather than structural boundaries, meaning they fundamentally struggle to distinguish privileged system prompts from untrusted user input. The researchers found that simply "destyling" the text dropped attack success rates from 61% to 10%, underscoring that prompt injection will remain a perpetual game of whack-a-mole until models achieve genuine "role perception".

## Project Updates
It was a massive week of consolidation for the broader SQLite and Datasette ecosystems. Simon shipped `sqlite-utils` 4.0rc1, which officially brings nested transactions and database migrations (absorbing the `sqlite-migrate` package) directly into the core library. Across the Datasette front, we saw multiple alpha releases for `datasette-apps` and `datasette-acl` to refine multi-user access controls, culminating in the monumental Datasette 1.0a35 release that introduces core table mutation UIs.

## Themes
A dominant theme this week is the maturation of AI "vibe coding" from a novelty into a serious orchestration strategy for shipping functional code across unfamiliar domains like WebGPU and ONNX. We're seeing Simon actively deploy frontier models to handle heavy architectural tasks, while simultaneously focusing deeply on the stringent security and permission paradigms required to run this untrusted, AI-generated code safely in production.