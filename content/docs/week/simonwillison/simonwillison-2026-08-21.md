---
title: 2026-08-21
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["generative ai", "user interfaces", "python", "command line tools"]
---

# Simon Willison — 2026-08-21

## Highlight
The standout post today is **Stop Making TUIs**, where Simon echoes Thomas Ptacek's argument that **AI coding agents** have effectively reduced the cost of building native GUIs to zero. It highlights a significant paradigm shift for developer tools, suggesting that the era of default **Terminal User Interfaces (TUIs)** for throwaway scripts is coming to an end in favor of "vibe-coded" native applications.

## Posts

**[Stop Making TUIs](https://simonwillison.net/2026/Aug/21/stop-making-tuis/)** · simonwillison.net
Simon highlights a provocative piece by Thomas Ptacek arguing that developers should stop building Terminal User Interfaces (TUIs) and start building **real native desktop applications**. Thanks to **coding agents**, the cost of generating standard, functional GUIs has fallen to nearly zero. Simon reflects on his own experience with his **SwiftUI-based** bandwidth and GPU task bar monitors—which he "vibe-coded" in March 2026 and still uses daily—and admits that developers are running out of excuses to avoid building native apps.

**[llm-openrouter 0.7](https://simonwillison.net/2026/Aug/21/llm-openrouter/)** · simonwillison.net
Simon has released version 0.7 of his OpenRouter plugin for his LLM CLI tool, introducing compatibility with **LLM 0.32**. This upgrade enables the plugin to work much better with **reasoning models** on OpenRouter by leveraging OpenRouter's native implementation of the **Responses API**. Excitingly for developer tool power users, the release adds three new server-side tools—**Shell, WebFetch, and WebSearch**—which can be easily enabled via command-line options like `-T WebSearch`.

**[llm 0.32.1](https://simonwillison.net/2026/Aug/21/llm/)** · simonwillison.net
This urgent patch release addresses a sudden issue where fresh installs of Simon's LLM CLI tool broke because the OpenAI Python library dropped its dependency on `httpx`. Since LLM relied on `httpx` but only installed it transitively via the OpenAI package, this dot-release temporarily fixes the problem by pinning **openai<3**. Simon notes that a major migration is on the horizon, with the upcoming 0.33 release planned to transition from `httpx` to Pydantic's **httpx2** library.

**[Quoting Matt Webb](https://simonwillison.net/2026/Aug/21/matt-webb/)** · simonwillison.net
In this quick link post, Simon quotes Matt Webb's reflections on using ChatGPT as an **interactive tutor** while developing Galactic Compass 2. Webb shares that instead of writing the code for him, the AI acted as a patient tutor to teach him how to use **quaternions** just enough to get the app's new augmented reality mode working. The key takeaway is that outsourcing cognitive tasks to LLMs doesn't stop our learning; rather, it often acts as a catalyst that pushes developers to **learn even more deeply**.

## Project Pulse
Simon's open-source updates today focus heavily on maintaining and expanding his **LLM ecosystem**, demonstrating active maintenance to handle breaking upstream dependencies while simultaneously introducing advanced integrations like **server-side tools** for reasoning models.

***

🎧 This digest would make a fantastic quick audio overview if you want a podcast-style brief to listen to on your commute!