---
title: 2026-09-15
weight: 1
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "voice agents", "developer tools", "ai infrastructure"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-09-15

## Watch First
**[5 Voice Agent Failure Modes You'll Hit in Week One — Venky B, Plivo](https://www.youtube.com/watch?v=vblnYHzBgS4)** on AI Engineer is the mandatory watch for engineers taking voice AI from demo to production. It bypasses marketing hype to deliver hard production metrics—showing why self-hosted 4B–8B open-source models (like Gemma 4) under 300ms latency beat spiky frontier APIs, and how treating voice data extraction like typed unit tests raises field accuracy from 30% to 95%.

## Highlights by Theme

### Developer Tools & Platforms
GitHub's **[How to continue GitHub Copilot app sessions in VS Code](https://www.youtube.com/watch?v=dNCGfpDho0U)** demonstrates a seamless handoff mechanism that transfers an active AI session, conversation context, live diffs, and its isolated Git worktree straight into VS Code for hands-on debugging. Meanwhile, Google Cloud Tech launched CLI-based integrations in **[Google Cloud Plugins for Claude Code](https://www.youtube.com/watch?v=S8sBEFc7T04)**, enabling two-command installations for Google Cloud developer tools. In **[What's new in the Gemini Live API](https://www.youtube.com/watch?v=3CyW24Pkz4o)**, Google for Developers demoed new Gemini Live API features including async function execution, proactive audio filtering, and background high-reasoning models that generate SVG graphics without blocking real-time conversation. Finally, GitHub's **[3 ways to streamline AI code reviews across your team](https://www.youtube.com/watch?v=NiMpZ4gW2dQ)** addresses growing PR review backlogs by recommending smaller agentic PR scopes and stacked PR workflows.

### AI & Machine Learning
Leading the technical frontier, Neil Zeghidour of Gradium introduces a hybrid "Moshag" architecture in **[Your Voice Agent is Just a Walkie Talkie — Neil Zeghidour, Gradium](https://www.youtube.com/watch?v=a8EcVumh71E)** on AI Engineer, pairing a lightweight, full-duplex on-device audio model with a decoupled background text LLM to avoid trading model intelligence for audio latency. On the native model side, Google DeepMind in **[Speech-to-Speech Model Research at Google DeepMind — Valeria Wu Fon & Tom Ouyang, Google DeepMind](https://www.youtube.com/watch?v=18Um2VjMM_g)** explains unified token embedding spaces for streaming multi-speaker translation, while OpenAI's **[Voice Agents Can Just Do Things — Charlie Guo, OpenAI](https://www.youtube.com/watch?v=OpY6MmZFeHo)** presents GPT Realtime 2, featuring reasoning in audio tokens and parallel tool calling with conversational preambles. Meanwhile, Roku's **[Act, Confirm, or Stop? Smarter behavior for AI assistants, wearables & robots — Amit Desai, Roku](https://www.youtube.com/watch?v=Zd5b40Jbp_k)** provides a mathematical framework that minimizes user friction under model uncertainty by calculating optimal "ouch" cost thresholds across act, confirm, and stop decisions.

### Hardware & Infrastructure
On the All-In Podcast, Elon Musk and Gwynne Shotwell detail Tesla and SpaceX's joint "Terafab" pilot in Austin in **[Elon Musk & Gwynne Shotwell on AI Risks and Peer Review, Starship, Terafab, SpaceX/Tesla Merger](https://www.youtube.com/watch?v=iwBOQeFPAwg)**, aiming to vertically integrate chip fabrication, memory, and packaging to hedge against Taiwan supply risks and scale edge AI compute. For data center efficiency, NVIDIA's **[Building More Energy Efficient AI Factories With NVIDIA DSX](https://www.youtube.com/watch?v=4O1Gl4_xk3w)** introduces the DSX architecture, using dynamic MaxLPS power management to extract 40% more compute from fixed power budgets alongside 45°C liquid cooling. On the edge robotics front, Agility Robotics' **[Agility Unveils Humanoid Built to Work With People](https://www.youtube.com/watch?v=BTHNhLoH64I)** on Bloomberg Tech highlights Digit 5, a humanoid with 360-degree vision and a 10:1 run-to-charge battery ratio designed to safely step outside protective safety barriers into active workflows.

### Everything Else
In **[Satya Nadella on the AI Doomer Slowdown, Microsoft’s Master Plan & Who Wins AI](https://www.youtube.com/watch?v=hdcsTeCFE0I)** on the All-In Podcast, Microsoft CEO Satya Nadella framed AI safety as classic software engineering—emphasizing strict agent auditability, open KV-cache interoperability, and enterprise model sovereignty over existential doom narratives. Meanwhile, policy debates intensified as Elon Musk proposed cross-lab adversarial peer testing in **[Elon Proposes Adversarial Peer Reviews for AI Safety](https://www.youtube.com/watch?v=_K8hBIBEeK8)**, while VP JD Vance argued in **[JD Vance to AI Labs: Don’t Build “Frankenstein” and Then Ask for Government Regulation](https://www.youtube.com/watch?v=QGKlOf_kThY)** that AI companies should build technical defensive capabilities rather than lobbying for government regulation.

---

🎙️ Want me to draft a deeper architectural comparison between Gradium's hybrid Moshag decoupled stack and OpenAI's GPT Realtime 2 native audio model for your voice AI production roadmap?