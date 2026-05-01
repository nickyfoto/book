---
title: 2026-04-28
weight: 2
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "developer tools", "machine learning", "software engineering", "ai regulation"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-04-28

## Watch First
If you are building agentic workflows, make time for Eric Zakariasson's talk on [Building your own software factory](https://www.youtube.com/watch?v=rnDm57Py54A). He outlines Cursor's pragmatic path from copilot autocomplete to isolated autonomous "cloud agents," highlighting the architectural guardrails, test verification loops, and async management required to handle probabilistic AI outputs at scale.

## Highlights by Theme

### Developer Tools & Platforms
Garrett Galow from WorkOS tackles the endless OAuth consent screens plaguing the Model Context Protocol (MCP) in [One Login to Rule Them All](https://www.youtube.com/watch?v=EmhRyw6xeT0), explaining how Cross-App Access (XAA) and ID JAG tokens federate trust through identity providers like Okta to solve a massive IT governance roadblock. To combat AI-generated codebase bloat, Syntax showcases a tool called `fow` in [This Coding Tool Kills AI Code Slop](https://www.youtube.com/watch?v=XLtuSy1opW4)—a fast, Rust-based CLI that aggressively hunts dead code and boundary violations introduced by LLM "vibe coding". For platform engineering teams, Braintrust's Phil Hetzel outlines the harsh data realities of AI observability in [Why building eval platforms is hard](https://www.youtube.com/watch?v=_fQ7Z_Wfouk), noting that storing and querying massive, unstructured trace payloads requires specialized databases rather than standard data warehouses to maintain acceptable latency.

### AI & Machine Learning
The most substantive theory discussion today is OpenAI's [What happens now that AI is good at math?](https://www.youtube.com/watch?v=9-TVwv6wtGQ). Researchers Sebastian Bubeck and Ernest Ryu detail how training models to solve rigorous mathematical proofs is a proxy for scaling "AGI time," pushing reasoning horizons from seconds of generation to days of autonomous, error-free verification. On the applied side, [Introducing NVIDIA Nemotron 3 Nano Omni](https://www.youtube.com/watch?v=AZ2zr0zOi5M) demonstrates a compact, natively multimodal model that processes interleaved raw video frames and audio without a separate transcription pipeline, a notable win for edge agent efficiency. For ML practitioners, Google Developer's [Introducing Keras Recommenders](https://www.youtube.com/watch?v=ZYeE4sYoRkw) shows how to merge Keras's high-level API with JAX and NNX, bringing explicit state management and JIT compilation to custom training loops.

### Hardware & Infrastructure
A credible enterprise case study for AI-assisted legacy migration is detailed in [AWS re:Invent 2025 - BMW Group accelerates mainframe modernization](https://www.youtube.com/watch?v=f46Kpy-qsaQ). BMW used AWS Transform's AI to map monolithic dependencies and auto-generate test cases from legacy code, reducing test creation time by 75% and enabling the migration of seven mainframe apps in just six months without freezing parallel development.

### Everything Else
Offering a counter-narrative to full automation, John Kim explains in [The 10x Revenue AI Startup That Refused to Replace Humans](https://www.youtube.com/watch?v=OlbVneKLyD0) that as AI spam has driven the outreach required to hire a single engineer to 5,000 emails, human trust and scarcity have become premium assets for recruiters. On the policy front, Dwarkesh Patel's [AI Regulation’s Authoritarian Problem](https://www.youtube.com/watch?v=5Wvpc_2-7-U) argues that overly vague AI safety frameworks and subjective terms like "national security" risk handing excessive interpretive power to future power-hungry governments.