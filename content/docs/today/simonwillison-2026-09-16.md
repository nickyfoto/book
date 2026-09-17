---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "datasette", "ai agents", "software security"]
---

# Simon Willison — 2026-09-16

## Highlight
Anthropic's consolidation of Claude Cowork and chat into a single agentic environment marks a significant step toward general AI agents capable of autonomous, asynchronous task execution. Alongside this paradigm shift, Simon delivered critical security updates across both stable and alpha Datasette branches while introducing background task capabilities for Datasette plugins.

## Posts

**[Claude Cowork and chat are now one Claude](https://simonwillison.net/2026/Sep/16/one-claude/)** · [Source](https://simonwillison.net/2026/Sep/16/one-claude/)
Anthropic is merging Claude Cowork and chat into a single unified product experience, rolling out first to Pro and Max subscribers across web, desktop, and mobile interfaces. Simon notes that this integration signals Claude's evolution into a general agent capable of handling long-running background tasks—such as completing scheduled reports—even after a user closes their laptop. While the streamlined product lineup saves him from writing a planned comparison piece between Cowork and chat, he expects that mapping out the practical capabilities and user interfaces of this combined agent will still require significant analysis.

**[datasette 1.0a40](https://simonwillison.net/2026/Sep/16/datasette/)** · [Source](https://simonwillison.net/2026/Sep/16/datasette/)
The latest alpha release for Datasette 1.0 addresses a security vulnerability where a trailing newline character in table names could bypass table permissions and expose private database rows. Beyond the security fix, this update introduces a key plugin feature—`datasette.add_background_task()`, contributed by Alex Garcia—enabling plugins to launch and manage background tasks. Simon also migrated internal HTTP operations to `httpx2` and resolved numerous bug reports as part of an ongoing triage effort toward a 1.0 stable release.

**[Quoting Mustafa Suleyman](https://simonwillison.net/2026/Sep/16/mustafa-suleyman/)** · [Source](https://simonwillison.net/2026/Sep/16/mustafa-suleyman/)
Simon highlights an essay by Mustafa Suleyman warning against treating AI models as entities entitled to rights, welfare, or human-like status. Suleyman argues that consciousness is the foundation of legal, political, and ethical systems, and extending rights to models without evidence makes AI containment and alignment significantly harder.

**[datasette 0.65.5](https://simonwillison.net/2026/Sep/16/datasette-2/)** · [Source](https://simonwillison.net/2026/Sep/16/datasette-2/)
This maintenance release backports a security fix to the Datasette 0.65.x stable branch. The update patches a permission bypass flaw discovered by security researcher dpfkdlemtp, where requested table names containing trailing newlines could expose unauthorized rows.

## Project Pulse
Today's posts capture a dual focus on maturing core developer infrastructure—securing Datasette and expanding its 1.0 plugin architecture—while closely monitoring major shifts in consumer AI toward general agent workflows.

---

💡 Want me to draft a Python code snippet showing how to implement a background task plugin using the new `datasette.add_background_task()` API from Datasette 1.0a40?