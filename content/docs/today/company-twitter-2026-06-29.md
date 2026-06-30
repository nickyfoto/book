---
title: Company@X
weight: 8
categories: ["Social Media", "Tech"]
tags: ["artificial intelligence", "open source", "autonomous vehicles", "developer tools", "robotics"]
---

{{< sources "company-twitter" >}}

# Company@X — 2026-06-29

## Signal of the Day
Meta achieved a major milestone in non-invasive brain-computer interfaces by open-sourcing Brain2Qwerty v2, an end-to-end deep learning pipeline capable of real-time semantic text decoding from raw neural signals. This marks a critical shift in neurotech, demonstrating that models trained on non-invasive MEG device data can reach high accuracy without the need for surgical implants.

## Key Announcements

**Meta** · [Source](http://twitter.macworks.dev/AIatMeta/status/2071566924803395741#m)
Meta’s AI research division released Brain2Qwerty v2, advancing brain-to-text decoding from character-level prediction to full semantics and words. By fine-tuning LLMs on raw MEG signals, the system bridges noisy neural data to output coherent language, hitting an average word accuracy of 61% (and up to 78% for the top participant). By releasing the full training code and datasets, Meta continues its strategy of commoditizing foundational research to accelerate open ecosystems.

**Tesla** · [Source](http://twitter.macworks.dev/i/status/2071487485172134131#m)
Tesla has initiated the rollout of Full Self-Driving (FSD) v14 Lite to early-access customers running older Hardware 3 (AI3) configurations. The release uses model distillation to backport the driving behavior and safety profiles from Tesla's flagship AI4 architecture into the compute and camera constraints of older vehicles. This signals Tesla's ongoing engineering commitment to supporting its massive legacy installed base even as core models grow heavier and require more compute.

**National Design Studio / Hugging Face** · [Source](http://twitter.macworks.dev/ndstudio/status/2071638578145145251#m)
The US government-backed National Design Studio released Rampart, a highly compressed 14.7MB machine learning model that runs directly in the browser. Rampart is designed to redact personally identifiable information (PII) on the client side before any data is sent to a server, ensuring user privacy. Hugging Face leadership pointed to the release as a key validator for open-source AI, highlighting the US government's willingness to train and release models for local privacy rather than relying exclusively on closed frontier APIs.

**Firebase** · [Source](http://twitter.macworks.dev/Firebase/status/2071693345672622535#m)
Firebase launched a new Starter Tier intended to rapidly provision pre-wired backend infrastructure for developers prototyping in Google AI Studio. The free, no-credit-card-required tier automatically spins up a stack including Authentication, Cloud Run, Cloud SQL, and a Firestore NoSQL database equipped with AI-generated security rules. This effectively lowers the friction for developers attempting to graduate from simple prompt engineering to fully deployed, production-ready web apps within the Google ecosystem.

**Google Gemini** · [Source](http://twitter.macworks.dev/GeminiApp/status/2071653811110998226#m)
Gemini is expanding free personalized image generation for US users by deeply integrating with users' Google Workspace data. By connecting external apps, Gemini leverages "Personal Intelligence" to ground generated images in a user's specific interests and preferences, removing the need for overly explicit prompting. This move highlights Google's primary structural moat—its vast ecosystem of cross-app user data—to differentiate its consumer AI offerings from competitors.

**StarSling** · [Source](http://twitter.macworks.dev/starslingdev/status/2071661383532650571#m)
StarSling Runners are now in General Availability, offering an AI-native, drop-in replacement for the standard `ubuntu-latest` environments on GitHub Actions. The infrastructure dynamically adapts to CI jobs, promising up to 6x faster and 13x cheaper pipeline executions. The immediate adoption by teams working with frontier AI labs highlights a growing market demand for smarter, self-optimizing CI/CD tooling in compute-heavy pipelines.

**Replit** · [Source](http://twitter.macworks.dev/Replit/status/2071666037733605646#m)
Replit launched Replit Desktop, packaging its popular cloud-native IDE into a standalone application for Windows and Mac. This brings their AI-assisted coding environment out of the browser, allowing developers better local multitasking and system integration. 

## Also Noted
- **Proception AI** ([Source](http://twitter.macworks.dev/_jaku_xu/status/2071602480564281411#m)): Emerged from stealth with an $11M seed round to launch ProHand and ProGlove, focusing on solving dexterous robotic manipulation through the tight integration of mechanical design, embedded systems, and large-scale human demonstration data.
- **Google Cloud** ([Source](http://twitter.macworks.dev/GoogleCloudTech/status/2071579438785937438#m)): Introduced granular task controls in BigQuery, allowing data engineers to manually select specific steps to execute or use tags to run partial segments of complex data pipelines.
- **Scout** ([Source](http://twitter.macworks.dev/GigaAI/status/2071596833240166620#m)): Launched a new autonomous agent platform where users input a specific KPI (like funded deposits), and the system builds, tests, and self-improves conversational agents to hit that target.
- **SheetWhiz** ([Source](http://twitter.macworks.dev/davidnpang/status/2071639834029117465#m)): Released an AI-powered Chrome extension built to help enterprise users trace precedents, visualize logic steps, and contextually audit AI-generated formulas within Google Sheets.