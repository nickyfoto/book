---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "3d modeling", "coding agents", "gpt-6 astra"]
---

Here is your daily Simon Willison blog digest for September 5, 2026, summarizing his latest hands-on experiments and insights on new developer tooling:

# Simon Willison — 2026-09-05

## Highlight
Simon's practical guide on driving **Blender** with **coding agents** on macOS is today's highlight, showcasing how easily developers can programmatically control local desktop applications using conversational prompts. This hands-on exploration beautifully mirrors OpenAI's official release of **GPT-6 Astra**, which features Simon's signature "pelican riding a bicycle" benchmark in its developer demo.

## Posts

**[Using Blender with coding agents on macOS](https://simonwillison.net/2026/Sep/5/blender-coding-agents-macos/)** · [Source](https://simonwillison.net/2026/Sep/5/blender-coding-agents-macos/)
In this TIL post, Simon shares how remarkably simple it is to use local **coding agents** in ChatGPT Codex to control the **Blender** application on macOS. By directing the agent to use the installed application path, he iteratively prompted it to render a scene of a pelican riding a bicycle, adding background details and flair through natural conversational guidance. The process resulted in a [Python script](https://github.com/simonw/gpt-6-astra-blender-pelican-bicycle/blob/main/work/pelican_final.py) that leverages Blender's native **Python API** to programmatically construct the 3D scene. This serves as a powerful demonstration of how AI coding assistants can seamlessly bridge the gap between natural language and complex local desktop software APIs.

**[Introducing GPT-6 Astra for developers](https://simonwillison.net/2026/Sep/5/introducing-gpt-6-astra-for-developers/)** · [Source](https://simonwillison.net/2026/Sep/5/introducing-gpt-6-astra-for-developers/)
Simon points out OpenAI's [release video](https://www.youtube.com/watch?v=bOC3DisEOfg) for **GPT-6 Astra**, highlighting that his classic test prompt—a pelican riding a bicycle—makes a blink-and-you'll-miss-it appearance at the 1m59s mark. He notes that Astra represents a major upgrade in **prompt comprehension**, **attention to detail**, and generating **sophisticated outputs**, particularly in the realm of 3D modeling where it excels at rendering complex environments like gardens, shipyards, animals, and Dyson spheres. Simon links to Hacker News discussions and a previous post highlighting how Astra [really does believe](https://simonwillison.net/2026/Sep/4/astra-pelicans/) in putting a red neckerchief on its rendered pelicans, as discussed in a previous post and [Hacker News comment](https://news.ycombinator.com/item?id=49554643#49575117).

## Project Pulse
This daily update highlights a focused interest in **AI-assisted 3D generation**, showing how local coding agents using Blender's Python API can achieve impressive rendering results in parallel with the launch of OpenAI's GPT-6 Astra, which sets a high bar for native 3D model creation.

***

💡 **What should we explore next?** I can help you break down the Python code Simon used to control Blender, or we can look further into GPT-6 Astra's new capabilities!