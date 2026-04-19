---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["prompt-engineering [1, 2]", "system-prompts [2, 3]", "claude [2, 3]", "coding-agents [1]", "generative-ai [1-3]"]
---

# Simon Willison — 2026-04-18

## Highlight
The deep dive into Anthropic's Claude Opus 4.7 system prompt diff is today's most insightful read, offering a rare glimpse into how AI labs tweak model behavior between point releases. It highlights the practical value of tracking system prompts to understand hidden tool capabilities, safety guardrails, and shifting knowledge cutoffs.

## Posts

**[Changes in the system prompt between Claude Opus 4.6 and 4.7](https://simonwillison.net/2026/Apr/18/opus-system-prompt/#atom-everything)** 
Anthropic recently released Opus 4.7, and Simon analyzed the hidden diffs in its system prompt compared to the February 4.6 release. The update reveals new integrations like "Claude in Powerpoint", expanded child safety wrappers, and new instructions to make the model less pushy and less verbose. Interestingly, Anthropic removed a manual injection clarifying the 2025 US President, as the model's native knowledge cutoff has been officially updated to January 2026. Simon also extracted the list of 23 hidden tools available to the Claude chat UI by directly prompting the model to list its own capabilities.

**[Adding a new content type to my blog-to-newsletter tool](https://simonwillison.net/guides/agentic-engineering-patterns/adding-a-new-content-type/#atom-everything)** 
Simon details a highly effective prompt pattern for using Claude Code to update a client-side HTML app that fetches his blog data. By instructing the agent to clone his Django blog repository to `/tmp` as a reference, the AI was able to figure out the database schema for his new "beats" content type without accidentally committing that code to the workspace. Crucially, he also directed the agent to validate its own work using `python -m http.server` and the `uvx rodney` browser automation tool, resulting in a perfect pull request on the first try.

**[Claude system prompts as a git timeline](https://simonwillison.net/2026/Apr/18/extract-system-prompts/#atom-everything)** 
A quick companion note explaining the methodology behind tracking Anthropic's prompt changes. Simon used Claude Code to parse Anthropic's published Markdown archive into distinct files with fake git commit dates, allowing him to browse the prompt's evolution natively within GitHub's commit view.

## Project Pulse
Today's posts highlight a strong reliance on Claude Code for automating tedious data processing and engineering chores. Whether it is building a Git timeline from a Markdown document or zero-shotting a PR with automated browser testing, Simon is heavily exploring practical, agentic developer workflows.