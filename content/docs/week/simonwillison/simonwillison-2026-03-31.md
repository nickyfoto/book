---
title: 2026-03-31
weight: 7
---

# Simon Willison — 2026-03-31

## Highlight
Today’s most critical read is Simon’s commentary on the Axios npm supply chain attack, where he highlights a practical heuristic for spotting malicious packages: look for npm publishes that lack a corresponding GitHub release. It's a sharp, actionable takeaway for anyone managing JavaScript dependencies.

## Posts

**[Supply Chain Attack on Axios Pulls Malicious Dependency from npm](https://simonwillison.net/2026/Mar/31/supply-chain-attack-on-axios/#atom-everything)**
Axios, an HTTP client with 101 million weekly downloads, was compromised via a leaked npm token, pulling in a credential-stealing malware package called `plain-crypto-js`. Simon points out a valuable heuristic for spotting these attacks: the malicious versions were published to npm without an accompanying GitHub release. He notes this exact same pattern was present in last week's LiteLLM compromise.

**[llm-all-models-async 0.1](https://simonwillison.net/2026/Mar/31/llm-all-models-async/#atom-everything)**
Simon used Claude to quickly spin up this clever utility plugin that converts synchronous LLM models into async models using a thread pool. He needed this specifically to use his sync-only `llm-mrchatterbox` plugin with Datasette's async-only LLM enrichments, showcasing how AI assistance can rapidly bridge architectural friction in side projects. 

**[datasette-llm 0.1a4](https://simonwillison.net/2026/Mar/31/datasette-llm/#atom-everything)**
This release introduces the ability to configure different API keys for models based on their specific purpose. For instance, you can now set up Datasette so that data enrichments always utilize a dedicated API key alongside a specific model like `gpt-5.4-mini`. 

**[llm 0.30](https://simonwillison.net/2026/Mar/31/llm/#atom-everything)**
A core framework update driven directly by the needs of the new `llm-all-models-async` plugin. It updates the `register_models()` plugin hook to accept a `model_aliases` parameter, allowing plugins that execute last to be fully aware of previously registered models. It also adds docstrings to public classes and methods directly into the documentation.

**[llm-echo 0.3](https://simonwillison.net/2026/Mar/31/llm-echo-2/#atom-everything)**
A minor release for his testing utility plugin that adds mechanisms for testing tool calls and raw responses. Simon explicitly built and released the new `echo-needs-key` testing model in this version to support the test suite for the new API key features in `datasette-llm`.

**[llm-echo 0.4](https://simonwillison.net/2026/Mar/31/llm-echo/#atom-everything)**
A tiny follow-up release to the testing plugin. Prompts now successfully have their `input_tokens` and `output_tokens` fields populated on the response.

## Project Pulse
Today is a masterclass in open-source yak shaving: Simon wanted to use a sync model in Datasette, which required building a new async-wrapper plugin (`llm-all-models-async`), which necessitated a core hook update in his CLI tool (`llm 0.30`), which dovetailed into new API key features (`datasette-llm 0.1a4`), which finally required two quick updates to his testing tools (`llm-echo 0.3` and `0.4`) just to write the tests. It's a perfect snapshot of how interconnected his ecosystem of small, sharp tools has become.