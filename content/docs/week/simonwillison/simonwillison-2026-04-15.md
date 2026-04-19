---
title: 2026-04-15
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["datasette", "gemini", "zig", "apple", "ai-ethics"]
---

# Simon Willison — 2026-04-15

## Highlight
The standout exploration today is Simon's hands-on dive into Google's new Gemini 3.1 Flash TTS API. It perfectly captures his rapid-prototyping ethos: encountering a surprisingly complex new prompting paradigm for an audio model and immediately using Gemini 3.1 Pro to "vibe code" a UI to stress-test regional British accents.

## Posts

**[Gemini 3.1 Flash TTS](https://simonwillison.net/2026/Apr/15/gemini-31-flash-tts/#atom-everything)**
Google released Gemini 3.1 Flash TTS, an audio-only output model controlled via standard Gemini API prompts. Simon points out that the prompting guide is highly unusual, so he put it to the test by prompting for charismatic Newcastle and Exeter accents. To speed up his experimentation, he used Gemini 3.1 Pro to instantly vibe code a custom UI for the API. 

**[datasette 1.0a27](https://simonwillison.net/2026/Apr/15/datasette/#atom-everything)**
A substantial new alpha release for Datasette that fundamentally shifts how it handles security, replacing Django-style CSRF form tokens with modern browser headers. It also introduces a `RenameTableEvent` to help plugins gracefully handle SQLite table renames, and adds an `actor=` parameter to `datasette.client` methods to simplify writing automated tests for internal requests. 

**[Zig 0.16.0 release notes: "Juicy Main"](https://simonwillison.net/2026/Apr/15/juicy-main/#atom-everything)**
Simon praises the Zig programming language for its comprehensive, example-rich release notes. He specifically highlights a new 0.16.0 feature playfully called "Juicy Main", which introduces dependency injection to the `main()` function by allowing developers to accept a `process.Init` parameter.

**[Quoting Kyle Kingsbury](https://simonwillison.net/2026/Apr/15/kyle-kingsbury/#atom-everything)**
A thought-provoking quote highlighting the impending reality of AI accountability. Kingsbury predicts the emergence of "meat shields"—individuals, Data Protection Officers, or third-party subcontractors whose primary function is to shoulder the blame when automated machine learning systems inevitably fail or hallucinate.

**[Quoting John Gruber](https://simonwillison.net/2026/Apr/15/john-gruber/#atom-everything)**
Simon shares a critical take on the Apple ecosystem from John Gruber. The quote argues that Apple's platform edge is waning because third-party software is "regressing to the mean," with fewer developers feeling financially or artistically motivated to build finely crafted, idiomatic native apps exclusively for Apple's walled garden.

**[datasette-ports 0.3](https://simonwillison.net/2026/Apr/15/datasette-ports/#atom-everything)**
A handy quality-of-life update to Simon's local tool for tracking active Datasette instances. The CLI output has been upgraded to expose the working directory derived from each instance's PID, alongside the absolute path to every connected database file.

**[datasette-export-database 0.3a1](https://simonwillison.net/2026/Apr/15/datasette-export-database/#atom-everything)**
A quick plugin compatibility patch driven by today's core Datasette updates. Because `datasette 1.0a27` dropped the legacy `ds_csrftoken` cookie, this plugin required an update to fix its custom signed URL functionality.

**[Tool: Gemini 3.1 Flash TTS](https://simonwillison.net/2026/Apr/15/gemini-flash-tts/#atom-everything)**
A brief directory link pointing readers to his dedicated notes on Google's new Gemini 3.1 Flash TTS text-to-speech model.

## Project Pulse
Today features a classic cascading release cycle across the Datasette ecosystem, anchored by the `1.0a27` alpha. The core architectural decision to drop traditional CSRF tokens immediately rippled outward, requiring Simon to ship a corresponding patch for the `datasette-export-database` plugin to keep the local tooling stack green.