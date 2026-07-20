---
title: 2026-07-18
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["llms", "tools", "sqlite", "python", "anthropic"]
---

# Simon Willison — 2026-07-18

## Highlight
Anthropic has reversed course and made Claude Fable 5 permanent in its subscription tiers, a move Simon attributes to competitive pressure from new models. This is great news for practitioners relying on Fable for AI-assisted programming, officially canceling the anxiety over losing access.

## Posts

**[Claude make Fable 5 permanent](https://simonwillison.net/2026/Jul/18/claude-make-fable-5-permanent/#atom-everything)**
Anthropic updated its plans to include Claude Fable 5 in Max and Team Premium plans at 50% limits, while providing Pro and Standard users with usage credits. Simon notes that despite Anthropic's original concerns over compute capacity, fierce market competition from models like GPT-5.6 Sol and Kimi 3 made it untenable to restrict their best model to API-only pricing. This officially ends the "Fablepocalypse" that had many users scrambling to use the model before the cutoff.

**[SQLite Query Explainer](https://simonwillison.net/2026/Jul/18/sqlite-query-explainer/#atom-everything)**
Inspired by a blog post from Julia Evans about learning to read query plans, Simon had Fable build an interactive web tool to decipher SQLite queries. It leverages Pyodide to run SQLite via Python in WebAssembly directly in the browser, adding an explanatory layer to `EXPLAIN` and `EXPLAIN QUERY PLAN` outputs. While Simon cautions that the AI's explanations should be taken with a grain of salt, the architecture perfectly illustrates building small, sharp, serverless tools.

**[LLM cliché highlighter](https://simonwillison.net/2026/Jul/17/llm-cliche-highlighter/#atom-everything)**
Frustrated by the overwhelming presence of generative writing tropes—like "no fluff, no filler, no jargon"—Simon built a web app to highlight ten common LLM text clichés. He utilized Fable 5 to code the utility, demonstrating how quickly developers can now spin up bespoke tools to solve highly specific, everyday annoyances.

**[nascheme/quixote](https://simonwillison.net/2026/Jul/18/quixote/#atom-everything)**
A fun piece of computer history for vintage Python web developers. Simon highlights that the Quixote web framework received a new commit just six hours prior, which is remarkable given the repository's oldest commit (a Subversion import) dates back 21 years.

## Project Pulse
There's a clear trend of Simon using Claude Fable 5 to aggressively prototype and ship browser-based, client-side tools, as seen with both the SQLite Query Explainer and the LLM cliché highlighter.