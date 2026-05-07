---
title: 2026-05-01
weight: 5
categories: ["Blogs", "AI", "Tech"]
tags: ["inaturalist", "claude-code", "generative-ai", "tools"]
---

# Simon Willison — 2026-05-01

## Highlight
Simon demonstrates the power of mobile AI-assisted development by building a complete, multi-component tracking application entirely on his phone while camping using Claude Code for web. It's a perfect example of chaining small, sharp tools—Python CLIs, Git scraping, and AI-generated static frontends—into a highly practical personal utility.

## Posts

**[iNaturalist Sightings]** · [Source](https://simonwillison.net/2026/May/1/inat-sightings/#atom-everything)
Simon wanted to consolidate and view his iNaturalist observations across multiple accounts, grouped by when and where they occurred. To solve this, he used Claude Code for web to write `inaturalist-clumper`, a Python CLI that groups sightings within a 2-hour and 5km radius. He then set up a Git scraping repository to regularly run the tool and generate a `clumps.json` file hosted via GitHub. Finally, he prompted an AI against his tools repository to build a static HTML frontend that fetches the CORS-friendly JSON and displays the sightings in a gallery with lazy-loaded thumbnails and full-size modal images.

## Project Pulse
This post is a classic showcase of Simon's preferred rapid-prototyping architecture: leveraging Git scraping to act as a zero-maintenance, CORS-friendly JSON API, and using generative AI tools like Claude Code to rapidly build out the accompanying Python backend tools and static HTML frontends.