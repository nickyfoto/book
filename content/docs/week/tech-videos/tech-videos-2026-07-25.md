---
title: 2026-07-25
weight: 4
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "physical ai", "ai regulation", "startups"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-07-25

## Watch First
**[Loop Engineering from First Principles — Kyle Mistele, HumanLayer](https://www.youtube.com/watch?v=xIt_mTQp6mY)** is the standout talk today for its highly pragmatic takedown of "blind loop" AI coding agents that simply dump unreviewable 40,000-line PRs into codebases. Mistele outlines a rigorous, control-theory approach using deterministic sensors to create iterative, safely reviewable AI refactoring workflows.

## Highlights by Theme

### Developer Tools & Platforms
The AI Engineer channel featured strong talks on moving beyond basic and chaotic agent prompting. In **[Loop Engineering from First Principles — Kyle Mistele, HumanLayer](https://www.youtube.com/watch?v=xIt_mTQp6mY)**, Mistele shows how to safely migrate a codebase to Effect TS by using `ast-grep` to isolate unmigrated procedures and dispatching agents incrementally via GitHub Actions. Snorkel AI's presentation, **[From Agent Traces to Agent Simulations — Rustem Feyzkhanov, Snorkel AI](https://www.youtube.com/watch?v=Ib5t2RLtxvM)**, argues that relying on production agent traces is insufficient; engineering teams need to build full offline simulations using the Harbor format and Docker to mock databases for robust integration testing. Finally, for a dose of nostalgia, **[Microsoft Comic Chat is now open source](https://www.youtube.com/watch?v=AptdL9wYxRU)** on the GitHub channel highlights the release of the 1996 IRC client's source code and modernization experiments.

### AI & Machine Learning
Character.ai offered a deep-dive into the messy reality of evaluating generated video in **[Evaling Video Slop — Maor Bril, Character.ai](https://www.youtube.com/watch?v=b_PmGocP4rc)**, revealing that small VLMs (like Qwen) perform far better when tasked with relative A/B comparisons rather than absolute 1-10 scoring. For on-device execution, Google's talk **[Why Large? Tiny LMs & Agents on Edge/Robotics — Cormac Brick, Google](https://www.youtube.com/watch?v=hacEQHHhu2Q)** demonstrates Gemma models quantized down to ~2.9 bits per weight, achieving ~45 tokens per second decode on edge NPUs for localized voice-to-function calling tasks. SonderMind tackled the danger of LLM over-calibration in **[Evals-Driven Development for a Mental Health AI Coach — Akele Reed & Dave Revere, SonderMind](https://www.youtube.com/watch?v=O72p-rBb2bA)**, arguing that false-positive guardrails feel like a "door slam" to users in crisis, and open-sourced a clinically reviewed dataset to fix this. Lastly, Amilabs' founder makes a compelling case for "world models" over standard LLMs in **[What Big Tech Missed And How Startups Can Still Win](https://www.youtube.com/watch?v=FVsgX0AdDTo)**, arguing that LLMs lack fundamental common sense because they train on text proxies rather than raw sensory inputs. *(Note: You can safely skip the NVIDIA Developer video, **["There’s probably a model for that."](https://www.youtube.com/watch?v=sVvS--u24GM)**, which is just marketing noise for their Neatron 3 endpoints.)*

### Hardware & Infrastructure
Y Combinator released a flurry of physical-world AI content, leading with **[Why Physical AI Is the Next Platform Shift](https://www.youtube.com/watch?v=F3INH9wZXoQ)** where Encord explains the brutal reality of scaling data layers for robotics and autonomous vehicles at the multi-petabyte scale. They followed up with an RFS (Request for Startups) video, **[Data for the Real World](https://www.youtube.com/watch?v=uW7RxkLRsd0)**, highlighting the need for hardware startups to deploy autonomous weather balloons and robots to fix the sparse data problem in physical industries like agriculture and energy. 

### Everything Else
The All-In Podcast crew dedicated their episodes to AI regulatory paranoia, with David Sacks arguing in **[David Sacks: Anthropic Is Trying to Crush Open Source AI and the American Developers Who Use It](https://www.youtube.com/watch?v=rXox_xc-ddM)** that Anthropic's safety lobbying is a disguised attempt to prevent developers from using open weights. Chamath Palihapitiya echoed this in **[Chamath: Banning Open Source AI Will Crash the Stock Market](https://www.youtube.com/watch?v=Ka2y-0Of0Dc)**, predicting massive capital market chaos if US companies are forced into expensive proprietary ecosystems. For founders, Y Combinator partners bluntly state in **[What Actually Makes A Startup Durable](https://www.youtube.com/watch?v=99sPd15j3Zc)** that writing pure software is no longer a durable moat, advising teams to tackle brutal B2B sales or hard physical engineering problems instead. Finally, for a quick science break, Dwarkesh Patel's short **[How Close Can You Orbit a Black Hole? - Adam Brown](https://www.youtube.com/watch?v=Gpf4WvQ9uxQ)** explains why orbital angular momentum stops helping you escape a black hole once you cross the 3GM limit.