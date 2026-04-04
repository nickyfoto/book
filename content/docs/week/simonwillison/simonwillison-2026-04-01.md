---
title: 2026-04-01
weight: 2
---

# Simon Willison — 2026-04-01

## Highlight
Today's updates show Simon rapidly standardizing his Datasette LLM ecosystem, making `datasette-llm` the centralized hub for model configuration across various plugins. Alongside this intensive tooling sprint, he highlights an optimistic take on AI-assisted programming, sharing a perspective on why economic forces will eventually drive AI to generate clean, maintainable code rather than technical "slop".

## Posts

**[Quoting Soohoon Choi]** · [Source](https://simonwillison.net/2026/Apr/1/soohoon-choi/#atom-everything)
Simon highlights an excellent argument by Soohoon Choi titled "Slop Is Not Necessarily The Future" regarding the long-term quality of AI-generated code. Choi argues that economic incentives and intense competition among AI providers will ultimately favor models that produce reliable, simple, and maintainable code, because markets won't reward technical debt in the long term.

**[datasette-llm-usage 0.2a0]** · [Source](https://simonwillison.net/2026/Apr/1/datasette-llm-usage/#atom-everything)
A significant refactoring release that delegates model configuration entirely to `datasette-llm` and moves pricing and allowances to a new `datasette-llm-accountant` plugin. It also introduces a powerful new logging feature to record full prompts, responses, and tool calls into an internal database table (`llm_usage_prompt_log`), while redesigning the simple prompt page with new permission requirements.

**[datasette-llm 0.1a5]** · [Source](https://simonwillison.net/2026/Apr/1/datasette-llm/#atom-everything)
This release enhances the `llm_prompt_context()` plugin hook wrapper to track prompts executed within a chain. This is a crucial update for agentic workflows, as it allows developers to track complex tool call loops rather than just one-off prompts.

**[datasette-extract 0.3a0]** · [Source](https://simonwillison.net/2026/Apr/1/datasette-extract/#atom-everything)
This data extraction plugin now standardizes on `datasette-llm` to configure and manage models. This update introduces the ability to specify exactly which models should be available for data extraction using the new `enrichments` purpose flag.

**[datasette-enrichments-llm 0.2a0]** · [Source](https://simonwillison.net/2026/Apr/1/datasette-enrichments-llm/#atom-everything)
Following the same architectural pattern as `datasette-extract`, this release shifts model configuration and management over to `datasette-llm`. It leverages the new `enrichments` purpose to explicitly declare which models are available for enrichment tasks.

**[datasette-enrichments-llm 0.2a1]** · [Source](https://simonwillison.net/2026/Apr/1/datasette-enrichments-llm-2/#atom-everything)
A quick follow-up patch to the 0.2a0 release. It ensures that the specific actor who triggers an enrichment is properly passed down to the underlying `llm.mode()` method for better tracking and granular permissions.

**[datasette-llm 0.1a6]** · [Source](https://simonwillison.net/2026/Apr/1/datasette-llm-2/#atom-everything)
A quality-of-life update that automatically adds a model to the allowed models list if it is set as the default, eliminating repetitive configuration steps. It also includes improved documentation for Python API usage.

**[datasette-llm 0.1a2]** · [Source](https://simonwillison.net/2026/Mar/26/datasette-llm/#atom-everything)
An earlier alpha release for `datasette-llm` that exposes the `actor` object to the `llm_prompt_context` plugin hook, laying the early groundwork for user-specific prompt context tracking.

## Project Pulse
Today features a massive burst of Datasette plugin releases centered entirely around standardizing LLM configuration and logging. Simon is clearly executing a major architectural refactoring pass to make `datasette-llm` the centralized nervous system for all generative AI and agentic tasks within his ecosystem, pulling configuration out of individual plugins like `extract`, `usage`, and `enrichments-llm` into a single, cohesive foundation.