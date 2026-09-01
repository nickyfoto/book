---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "ai-assisted programming", "opentelemetry", "testing", "conservation"]
---

# Simon Willison — 2026-08-31

## Highlight
The standout post explores Graham Dumpleton's new library **wrapture**, which extends the monkeypatching concepts from `wrapt` to bridge testing and tracing simultaneously. Beyond its technical utility, it serves as a compelling real-world case study in disciplined agent-driven engineering, where an AI assistant generated all code and documentation under deep human architectural direction rather than unguided "vibe coding".

## Posts

**[Introducing wrapture](https://simonwillison.net/2026/Aug/31/introducing-wrapture/)** · [Source](https://grahamdumpleton.me/posts/2026/08/introducing-wrapture/)
Graham Dumpleton (author of `wrapt` and `mod_wsgi`) released **wrapture**, a tool designed to wrap Python functions and methods so that execution can be cleanly observed or overridden, functioning both as an alternative to `unittest.mock` and as an unobtrusive tracing layer. The library features native OpenTelemetry support and offers configuration-driven tracing for existing codebases without modifying source files. Simon highlights Graham’s frank reflection on building the library as a fully agent-driven project, contrasting rigorous AI-assisted development—where domain expertise steers every architectural requirement—with unvetted "vibe coding".

**[Quoting Andrew Digby](https://simonwillison.net/2026/Aug/31/andrew-digby/)** · [Source](https://bsky.app/profile/digs.bsky.social/post/3mufrrsfhq22r)
Simon highlighted a brief dispatch from Andrew Digby celebrating that the critically endangered kākāpō population has reached 325 birds after chicks from a record breeding season graduated to juveniles. Noting that only 51 kākāpō remained in 1995, Simon echoed the update as "the best news of the year" and an encouraging reminder of what sustained conservation work can accomplish.

## Project Pulse
Today's entries center on curated external links and the evolving landscape of agentic software development, illustrating how experienced practitioners are applying AI assistants to complex systems programming without relinquishing design control. Neither Datasette nor the LLM CLI received dedicated release notes today.

💡 Would you like to explore Graham Dumpleton's testing and OpenTelemetry tracing patterns in wrapture in more detail?