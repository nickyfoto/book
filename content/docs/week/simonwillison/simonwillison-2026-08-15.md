---
title: 2026-08-15
weight: 1
categories: ["Blogs", "AI", "Tech"]
tags: ["generative ai", "llms", "wildlife", "web development"]
---

# Simon Willison — 2026-08-15

## Highlight
The standout post of the day is the release of **[CORS Chat](https://tools.simonwillison.net/cors-chat)**, a custom web utility developed in a single day using GPT-5.6-Sol xhigh to evaluate local and API-based OpenAI-compatible endpoints. It addresses developer friction around cross-origin requests when testing models locally while showcasing a highly polished UX feature that progressively renders streaming SVGs in real-time.

## Posts

**[CORS Chat](https://simonwillison.net/2026/Aug/15/cors-chat/)** · [Source](https://simonwillison.net/2026/Aug/15/cors-chat/)
Simon built and launched **[CORS Chat](https://tools.simonwillison.net/cors-chat)**, a lightweight web application created in a single day using GPT-5.6-Sol xhigh to provide a clean UI for testing OpenAI-Responses-compatible API endpoints. His main motivation was to evaluate the Qwen 3.8 27B model running locally via LM Studio on his M5 MacBook Pro and an NVIDIA DGX Spark, which requires launching LM Studio with the `--cors` option to allow cross-origin requests. Fully documented via a shared **[GitHub Gist](https://gist.github.com/simonw/92a1d97773744b45bf259e003013cf36)**, the tool persists conversations in the browser, supports copy-paste JSON exporting, and works seamlessly with services like OpenRouter. A standout front-end feature is its ability to recognize streaming SVG tags in the model's text tokens and progressively render the vector graphics in the chat window in real-time.

**[Northern Gannet](https://simonwillison.net/2026/Aug/15/sighting-391300422/)** · [Source](https://simonwillison.net/2026/Aug/15/sighting-391300422/)
Simon shares a wildlife photo and observation of "Morris," a local celebrity Northern Gannet (*Morus bassanus*) residing at Pillar Point Harbor in California. Morris is highly notable as the only known Northern Gannet in the entire Pacific Ocean, having arrived at the Farallon Islands 14 years ago, likely aided by a migration route opened by **[melting Arctic ice](https://baynature.org/magazine/spring2017/atlantic-bird-makes-home-california-maybe-melting-arctic-ice/)**. Simon notes that Morris is easy to spot near the commercial pier's harbor sign, where his distinct white plumage and yellow head stand out as he socializes with smaller, black Brandt's cormorants.

💻 LM Studio's CORS configuration can sometimes be finicky to set up. If you're planning to test local models yourself, I can draft a quick technical guide detailing how to enable those headers and interface with them programmatically.