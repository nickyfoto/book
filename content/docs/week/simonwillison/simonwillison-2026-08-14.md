---
title: 2026-08-14
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["sqlite", "gemini", "embeddings", "artificial intelligence"]
---

# Simon Willison — 2026-08-14

## Highlight
Today’s standout post is **[Don’t classify. Hallucinate!](https://simonwillison.net/2026/Aug/14/dont-classify-hallucinate/)**, which showcases Doug Turnbull's clever "hypothetical classification" technique. By letting LLMs freely hallucinate tags first and then mapping them to an existing taxonomy using vector embeddings, it offers a brilliant way to bypass context window limitations for massive classification schemas.

## Posts

**[Don’t classify. Hallucinate!](https://simonwillison.net/2026/Aug/14/dont-classify-hallucinate/)** · [Source](https://softwaredoug.com/blog/2026/08/10/hypothetical-classifications)
Simon discusses Doug Turnbull's innovative method for tagging older blog posts when your taxonomy is too large to fit in a single LLM prompt context. Instead of feeding all 1,856 of Simon's existing tags to the model, the model is prompted to invent or **"hallucinate"** appropriate classifications from scratch based on a structural example. These generated tags are then mapped back to the actual taxonomy by finding the closest matches using **vector embeddings** against the existing corpus.

**[llm-gemini 0.33](https://simonwillison.net/2026/Aug/13/llm-gemini/)** · [Source](https://github.com/simonw/llm-gemini/releases/tag/0.33)
This update to Simon's `llm-gemini` CLI plugin introduces support for the newly launched **Gemini 3.7 Flash** model, alongside 3.6 Flash, 3.5 Flash-lite, and newer embedding models. Built for compatibility with LLM 0.32, the plugin now enables **reasoning traces** and server-side tools. Simon tests the model's capabilities by having it generate **complex SVGs of pelicans riding bicycles**, which revealed an interesting cross-browser quirk where Safari successfully rendered the drawing while Chrome and Firefox hid the pelican due to an empty filter element.

**[sqlite-utils 4.2](https://simonwillison.net/2026/Aug/13/sqlite-utils/)** · [Source](https://github.com/simonw/sqlite-utils/releases/tag/4.2)
Simon has shipped a feature-packed update to `sqlite-utils` focusing heavily on refining the **`table.transform()` functionality**. This utility allows complex table schema modifications in SQLite—which doesn't natively support many `ALTER TABLE` operations—by transparently copying data into a newly constructed table. The 4.2 release does a significantly better job preserving edge cases like **check constraints, unique constraints, and column comments**, though a quick follow-up **4.2.1** was released shortly after to patch a crashing bug.

## Project Pulse
It is a big day for Simon's local developer toolkit, with significant releases across his core SQLite database management utility and LLM CLI ecosystem, alongside a practical exploration of embedding-based text classification.

🧩 If you'd like, we can write a quick Python script to prototype Doug Turnbull's hypothetical classification technique using some of your own sample texts and a mock tag set.