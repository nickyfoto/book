---
title: 2026-06-09
weight: 6
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "consumer tech", "cybersecurity"]
---

# Chinese Tech Daily — 2026-06-09

## Top Story
**[WeChat Releases "Skill" Docs, Transforming Mini-Programs into AI Execution Layers](https://www.ifanr.com/1668423)**
WeChat has unveiled new developer guidelines allowing AI to access, read, and operate its mini-programs, fundamentally turning its massive ecosystem into an execution layer for AI agents. Leveraging its centralized app-review architecture, WeChat can automatically parse mini-program capabilities, achieving a level of cross-app AI orchestration that highly fragmented platforms like Apple's iOS currently struggle to replicate. This effectively pushes WeChat closer to becoming a natural language-driven "WeChat OS".

## Engineering & Dev
**[BadHost Vulnerability Puts AI Agents at Risk](https://www.infoq.cn/article/ufuicrEKl9GWMWheTEJ5)**. Security researchers discovered a critical authentication bypass flaw in Starlette, a popular Python web framework with 325 million weekly downloads. The vulnerability, which occurs when malformed HTTP Host headers manipulate URL parsing, poses severe risks to AI agent infrastructure, especially Model Context Protocol (MCP) servers relying on unauthenticated OAuth discovery endpoints. 

**[Anthropic Hires 1000 Human Engineers to Train Claude Code](https://www.infoq.cn/article/qamWWo56NVvksQUYQGNF)**. Anthropic is leveraging around 1,000 human software engineers through Snorkel AI (Project "Marlin") to evaluate and refine Claude Code's outputs. By running A/B tests on real-world pull requests and complex security fixes, Anthropic aims to make Claude write cleaner, more maintainable code that aligns with professional engineering standards rather than just generating functional snippets. 

**[Ant Digital Shares "Harness" Engineering for AI Coding](https://www.infoq.cn/article/ufT6HCBO9xf2kyZAs4wr)**. At the upcoming AICon Shanghai, Ant Digital will detail its "Harness" engineering practices for integrating AI coding into production environments. The five-layer framework addresses common AI agent pitfalls—like drifting requirements and shallow testing—by enforcing strict boundaries, evidence-based CI checks, and state recording to ensure AI-generated outputs are reliable and verifiable.

**[Diagnosing Spark on Kubernetes OOM Failures](https://www.infoq.cn/article/sElIC5qTiH6iTiFJvDEk)**. A deep dive explains how two easily overlooked infrastructure configurations caused recurring Out-Of-Memory (OOM) failures for Spark batch pipelines on Azure Kubernetes Service. The lethal combination of a strict pod affinity rule forcing executors onto a single node, alongside the use of RAM-backed temporary directories (`tmpfs=true`), led to rapid node memory exhaustion during intensive shuffle phases.

## Products & Digital
**[iOS 27 Hands-On Highlights Deep Divide for China Market](https://www.ifanr.com/1668500)**. The developer beta of iOS 27 brings massive updates to Siri AI, visual intelligence through the camera app, and advanced photo reframing features using on-device spatial models. However, Chinese users face a starkly impoverished update, receiving little more than UI tweaks, holiday alarms, and a new transparent glass slider, as the core Apple Intelligence features remain geographically restricted in the region.

**[WPS Launches AI-Native Multimodal Note App](https://www.infoq.cn/article/RNG5TY4vD472qtRv8rGo)**. Kingsoft Office debuted "WPS Notes," an AI-native application designed to solve the fragmentation of personal knowledge management. Instead of patching AI onto a legacy tool, WPS Notes integrates AI from the ground up to transcribe audio, extract structured data from images, automatically tag entries, and natively support MCP protocols for third-party AI agents like Cursor and Claude.

**[Linx Keyboard Beta Testing Opens](https://sspai.com/post/110863)**. A new low-profile keyboard with a built-in screen, the Linx Keyboard, has opened for beta testing on SSPAI. Co-created with Akko, the keyboard features a "Linx OS" that syncs via Wi-Fi to display Pomodoro timers, stock tickers, and digital pets, while promising open APIs for community customization and content workflows.

## News & Commentary
**[Google Rents 110k GPUs from SpaceX for Gemini](https://www.infoq.cn/article/rUdJM6SDR5t6BFhA4xi7)**. Ahead of SpaceX's IPO, Google has agreed to pay the company $920 million monthly through June 2029 to access approximately 110,000 NVIDIA GPUs. This massive compute deal, triggered by surging demand for Google's Gemini Enterprise agents, echoes a similar recent arrangement between SpaceX and Anthropic.

**[China Issues Regulations on Network Evaluation Activities](https://www.williamlong.info/archives/7550.html)**. The Cyberspace Administration of China and the State Administration for Market Regulation jointly released new guidelines to standardise online product reviews and tech testing. The rules demand that tests involving product performance use certified testing institutions, prohibit malicious disparagement, and require sponsored reviews to be clearly labelled as advertising.

**[Smartphones Linked to Declining Birthrates](https://cn.nytimes.com/world/20260609/iphone-birthrate-decline-studies/)**. Recent economic studies suggest a correlation between the introduction of smartphones and plummeting global birth rates since 2007. Researchers posit that increased screen time has replaced in-person socializing and sexual activity among young adults, while also providing easier access to contraception information.

## Also Noted
* **[OpenTelemetry Launches Blueprints Program](https://www.infoq.cn/article/8xeEt0c6VN0gri2Xr8ec)**: A new initiative provides prescriptive architectural patterns to help enterprises standardize complex OpenTelemetry deployments across Kubernetes and cloud environments.
* **[Google Workspace CLI Released](https://www.infoq.cn/article/q0ydG50JsK7e0FGVsGHV)**: A unified, Rust-based command-line tool now allows developers and AI agents (via MCP) to interact dynamically with Drive, Gmail, Docs, and other Google APIs.
* **[Tencent Cloud Deploys Enterprise AI Agents](https://www.ifanr.com/1668457)**: Tencent Cloud is pushing its Agentic infrastructure into core business flows, launching specific AI agents for meetings, marketing, mall management, and video production.
* **[FumaCRM SQL Injection Flaw](https://mrxn.net/jswz/fumacrm-Dingding-Provider-ProviderList-sqli.html)**: An unauthenticated remote SQL injection vulnerability was disclosed in FumaCRM's ProviderList interface, potentially allowing database breaches and server compromise.