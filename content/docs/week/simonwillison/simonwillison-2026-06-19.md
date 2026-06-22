---
title: 2026-06-19
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "model-context-protocol", "llms", "ai"]
---

# Simon Willison — 2026-06-19

## Highlight
The standout insight today comes from a quote on the Model Context Protocol (MCP), highlighting how its real value lies in isolating authentication flows outside of an AI agent's context window. It's a sharp observation on how we should be architecting tool use and permissions for LLMs to make them safer and more robust.

## Posts

**[Quoting Sean Lynch]** · [Source](https://simonwillison.net/2026/Jun/19/sean-lynch/#atom-everything)
Simon highlights a sharp Hacker News comment from Sean Lynch regarding the Model Context Protocol (MCP). Lynch notes that the true advantage of MCP over traditional skills or CLIs is its ability to isolate authentication flows entirely outside of an agent's context window. This framing suggests the idealized form of MCP might simply be an auth gateway for APIs, simplifying how LLMs interact with secured external resources.

**[datasette-acl 0.6a0]** · [Source](https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything)
This release marks a significant step forward for multi-user Datasette instances, driven largely by work from Alex Garcia. The `datasette-acl` plugin is expanding its scope from table-specific permissions into a general resource-sharing system. This paves the way for much more fine-grained access control over various resources within the Datasette ecosystem.

**[datasette-apps 0.1a2]** · [Source](https://simonwillison.net/2026/Jun/15/datasette-apps/#atom-everything)
A quick alpha release for `datasette-apps` that introduces custom network and CSP origins for apps, guarded by a new `apps-set-csp` permission with an optional allow-list plugin. It also adds keyboard navigation to the stored query picker and fixes a few UI bugs involving external-link modals and fullscreen mode.

**[datasette-apps 0.1a3]** · [Source](https://simonwillison.net/2026/Jun/15/datasette-apps-2/#atom-everything)
A fast follow-up patch to fix a couple of permission-related bugs in the new apps plugin. It ensures that only users with the `create-app` permission can actually create apps, and refines edit rules so that modifying an app correctly respects ownership and Datasette's standard permission system.

## Project Pulse
Simon has been intensely focused on Datasette's multi-user and application-hosting capabilities, pushing out multiple alpha releases for `datasette-apps` and `datasette-acl`. The clear trend is a push toward building a more secure, robust platform for sharing datasets and fine-tuning granular access controls.