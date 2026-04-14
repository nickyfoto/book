---
title: 2026-04-09
weight: 4
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "github", "datasette", "asgi", "cors"]
---

# Simon Willison — 2026-04-09

## Highlight
Today's most substantive update is the release of `asgi-gzip 0.3`, which serves as a great practical reminder of the hidden risks in automated maintenance workflows. A silently failing GitHub Action caused his library to miss a crucial upstream Starlette fix for Server-Sent Events (SSE) compression, which ended up breaking a new Datasette feature in production.

## Posts

**[asgi-gzip 0.3]** · [Source](https://simonwillison.net/2026/Apr/9/asgi-gzip/#atom-everything)
Simon released an update to `asgi-gzip` after a production deployment of a new Server-Sent Events (SSE) feature for Datasette ran into trouble. The root cause was `datasette-gzip` incorrectly compressing `event/text-stream` responses. The library relies on a scheduled GitHub Actions workflow to port updates from Starlette, but the action had stopped running and missed Starlette's upstream fix for this exact issue. By running the workflow and integrating the fix, both `datasette-gzip` and `asgi-gzip` now handle SSE responses correctly.

**[GitHub Repo Size]** · [Source](https://simonwillison.net/2026/Apr/9/github-repo-size/#atom-everything)
Since GitHub doesn't natively expose repository sizes in its standard web UI, Simon highlighted a handy web tool that bridges the gap. The tool leverages GitHub's CORS-friendly API to quickly fetch and display the size of any public repository. For context, he notes that his own `simonw/datasette` repository currently sits at 8.1MB.

## Project Pulse
Today's updates lean heavily into the pragmatic side of open-source maintenance and developer tooling—whether it's building small utilities to surface missing data from the GitHub API or debugging silent CI infrastructure failures within the Datasette plugin ecosystem.