---
title: 2026-03-30
weight: 2
---

# Simon Willison — 2026-03-30

## Highlight
Simon explores a purely public-domain LLM trained exclusively on Victorian literature, and demonstrates the power of AI-assisted programming by using Claude Code to build a fully working LLM CLI plugin from scratch to run the model locally.

## Posts

**Mr. Chatterbox is a (weak) Victorian-era ethically trained model you can run on your own computer** · [Source](https://simonwillison.net/2026/Mar/30/mr-chatterbox/#atom-everything)
Simon reviews Trip Venturella's 340m-parameter model trained entirely on 28,000 out-of-copyright Victorian texts from the British Library. While the resulting model acts more like a Markov chain than a useful conversational assistant—Simon notes it is starved for data based on Chinchilla scaling laws, which suggest a need for over 7 billion tokens instead of the 2.93 billion used—it represents an exciting step toward ethically trained public-domain models. Notably, Simon used Claude Code to successfully build the `llm-mrchatterbox` Python plugin entirely from scratch to run the model locally.

**Quoting Georgi Gerganov** · [Source](https://simonwillison.net/2026/Mar/30/georgi-gerganov/#atom-everything)
Simon highlights a quote from Georgi Gerganov explaining why it is currently so difficult to get local models to work well with coding agents. Gerganov points out that the core issue is the fragile, multi-party stack between the user and the model, where subtle bugs are frequently introduced through harnesses, prompt construction, and chat templates. 

**datasette-files 0.1a3** · [Source](https://simonwillison.net/2026/Mar/30/datasette-files/#atom-everything)
This release updates the base plugin to support deeper integration with other tools like `datasette-extract`. It introduces new configuration options for file editing and deletion scoped to a new `FileResource`, a Python API (`get_file`) for cross-plugin access, and a handy `<datasette-file-picker>` Web Component contributed by Alex Garcia.

**datasette-llm 0.1a3** · [Source](https://simonwillison.net/2026/Mar/30/datasette-llm/#atom-everything)
A quick release that adds configuration capabilities to restrict which LLMs are available for specific purposes, allowing finer control over the models used by specific plugins.

**llm-mrchatterbox 0.1** · [Source](https://simonwillison.net/2026/Mar/30/llm-mrchatterbox-2/#atom-everything)
The official release note for the LLM CLI plugin Simon built to run the Victorian-era Mr. Chatterbox model locally. 

## Project Pulse
There is a heavy focus today on the ergonomics and infrastructure of local LLMs and AI-assisted programming, bridging theory (scaling laws, inference stack fragility) with direct implementation (using Claude Code to write a new LLM plugin and shipping fresh Datasette/LLM updates).