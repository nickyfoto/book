---
title: 2026-05-07
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["large language models", "artificial intelligence", "cybersecurity", "developer tools"]
---

# Simon Willison — 2026-05-07

## Highlight
The most significant takeaway today is Mozilla's dramatic success using the Claude Mythos preview to hunt down Firefox vulnerabilities, signaling a turning point where AI-generated bug reports have shifted from "unwanted slop" to highly actionable signals.

## Posts

**[Behind the Scenes Hardening Firefox with Claude Mythos Preview]** · [Source](https://simonwillison.net/2026/May/7/firefox-claude-mythos/#atom-everything)
Mozilla shared in-depth details on utilizing the Claude Mythos preview to identify and patch hundreds of vulnerabilities in Firefox. By improving how they harness, steer, and scale these models, Mozilla saw their monthly security bug fixes skyrocket from an average of 20-30 to 423 in April, even catching bugs that had existed for up to 20 years. Simon highlights this as a major shift from the recent past, where AI bug reports imposed an asymmetric burden on maintainers by generating plausible but incorrect noise.

**[Notes on the xAI/Anthropic data center deal]** · [Source](https://simonwillison.net/2026/May/7/xai-anthropic/#atom-everything)
Simon dissects Anthropic's new deal to lease all capacity of xAI's Colossus 1 data center, noting the severe environmental concerns surrounding its gas turbines and impact on local air quality. He also points out the abrupt deprecation of xAI's Grok 4.1 Fast model which left developers stranded, clarifying that xAI is keeping their Colossus 2 data center for their own training. Finally, Simon highlights a unique supply chain risk for Anthropic: Elon Musk's condition that xAI reserves the right to reclaim the compute if Anthropic's AI engages in actions that "harm humanity".

**[GitHub Repo Stats]** · [Source](https://simonwillison.net/2026/May/7/github-repo-stats/#atom-everything)
Frustrated that GitHub's mobile site hides repository commit counts, Simon built a quick tool to expose this metric. Using a custom prompt, he generated a utility that absorbs repo data via REST or GraphQL CORS fetch calls to display commits alongside other useful stats.

**[Big Words]** · [Source](https://simonwillison.net/2026/May/7/big-words/#atom-everything)
Simon built a quick utility to generate simple text slides driven entirely by query string arguments, bridging a gap in his "vibe coded" macOS presentation tool which only accepts URLs. The resulting page features a hidden form, accessible via double-click or double-tap, to tweak visual options like text size and gradients.

**[llm-gemini 0.31]** · [Source](https://simonwillison.net/2026/May/7/llm-gemini/#atom-everything)
A quick release note for the `llm-gemini` plugin, updating the `gemini-3.1-flash-lite` model which has officially moved out of preview. Simon notes that the underlying non-preview model appears unchanged from the preview version he originally wrote about in March.

## Project Pulse
A clear theme today is Simon using prompt-driven "vibe coding" to rapidly build small, sharp, single-purpose web tools (like *GitHub Repo Stats* and *Big Words*) to patch over immediate UX gaps in his personal hardware and software workflows.