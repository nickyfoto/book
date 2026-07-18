---
title: 2026-07-14
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["generative ai", "sqlite", "github actions", "prompt engineering"]
---

# Simon Willison — 2026-07-14

## Highlight
Simon's deep-dive into creating a custom animated desktop "pet" using Codex and GPT-5.6 Sol is a fantastic look at AI-driven asset generation. He documents the exact multi-stage prompts used to create perfect sprite sheets with magenta chroma-key backgrounds, showing how generative models can reliably output structured, game-ready images.

## Posts

**[simonw/pedalican](https://simonwillison.net/2026/Jul/14/pedalican/#atom-everything)**
Simon accidentally activated a Codex Desktop pet and immediately set out to build his own: a pelican riding a bicycle. He details the pipeline of using GPT-5.6 Sol and gpt-image-2 to generate the required sprite sheets, including the precise prompts used to keep the character consistent on a flat magenta background. It's a great practical example of using text-to-image models to generate functional, game-ready assets.

**[lobste.rs is now running on SQLite](https://simonwillison.net/2026/Jul/14/lobsters-sqlite/#atom-everything)**
Community site Lobsters has successfully migrated their primary database from MariaDB to a 3.8GB SQLite file on a single VPS. Simon highlights this as a stellar 2026 case study for single-server architectures, noting that the migration reduced CPU usage, memory consumption, and hosting costs by half.

**[Using uvx in GitHub Actions in a cache-friendly way](https://simonwillison.net/2026/Jul/14/uvx-github-actions-cache/#atom-everything)**
To avoid hitting PyPI on every GitHub Actions workflow run, Simon shares a clever caching recipe for Python tools. By setting a `UV_EXCLUDE_NEWER` environment variable with a specific date and including it in the cache key, you can securely run the latest tools and only bust the cache when you explicitly bump the date.

**[Quoting GitHub Changelog](https://simonwillison.net/2026/Jul/14/github-changeling/#atom-everything)**
Dependabot now requires new package releases to exist for three days before opening a version update pull request. Simon is thrilled to see GitHub embracing this "dependency cooldown" by default, as it significantly bolsters supply chain security without needing any manual configuration.

**[datasette 1.0a37](https://simonwillison.net/2026/Jul/14/datasette/#atom-everything)**
A minor release for Datasette that brings performance and documentation improvements to the permissions system. Crucially, Simon reverted a cosmetic API change that had accidentally broken almost all existing plugin test suites.

**[Quoting Armin Ronacher](https://simonwillison.net/2026/Jul/14/armin-ronacher/#atom-everything)**
Simon highlights a thought-provoking quote from Armin Ronacher about how software engineering's "shared language" is traditionally built through human friction and synchronization. It serves as a fascinating counterpoint to the rise of coding agents, questioning what institutional knowledge might be lost when that friction is smoothed away.

## Project Pulse
Today’s updates highlight a great mix of practical developer operations—like CI caching and single-server SQLite scaling—alongside forward-looking explorations into AI-assisted programming and agentic workflows. Simon continues to demonstrate how modern tools are reducing friction in infrastructure while simultaneously opening up entirely new creative avenues for developers.