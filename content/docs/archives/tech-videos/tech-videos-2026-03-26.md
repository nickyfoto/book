---
title: 2026-03-26
weight: 8
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-26

## Watch First
**[Building LiveKit Agents with Gemini Live API](https://www.youtube.com/watch?v=tj8ggd8UvB0)** offers a highly practical, code-level tutorial on building a local voice agent using Google's new native audio model (Gemini 3.1 Flash), providing actual solutions for real engineering headaches like speaker drift and tool-calling latency.

## Video Rundown

**[An MCP feature you didn't know you needed](https://www.youtube.com/watch?v=Tr1uVFYepME)** · Visual Studio Code · [URL](https://www.youtube.com/watch?v=Tr1uVFYepME)
This video showcases an "elicitation" feature for the Model Context Protocol (MCP) server that lets users scratch out a UI layout or use a form to send inputs back as a tool call resource. The brief demo shows the MCP server using these inputs alongside a template feature to make its own requests to an underlying model to generate website content. Verdict: Skim for a quick visual of how MCP is evolving to support richer, UI-driven contexts beyond simple text prompts.

**[Answer ALS speeds progress toward treatments and cures through Microsoft Azure](https://www.youtube.com/watch?v=cKV4KSIhhbI)** · Microsoft · [URL](https://www.youtube.com/watch?v=cKV4KSIhhbI)
A high-level marketing video highlighting how the Answer ALS initiative uses Microsoft Azure to store and search genetic and clinical data via the open Neuromine resource. The video claims that research is accelerated by 60% due to this open data platform eliminating the need for independent patient recruitment. Verdict: Skip, as it is a purely promotional case study with zero technical depth regarding the actual data infrastructure.

**[Anthropic just released the real Claude Bot...](https://www.youtube.com/watch?v=wfeiCZK0mNs)** · Fireship · [URL](https://www.youtube.com/watch?v=wfeiCZK0mNs)
A satirical but conceptually useful overview of Claude's "Computer Use" feature, demonstrating how it autonomously controls a macOS desktop to read calendars, join Zoom meetings, and write code via a single prompt. It briefly contrasts Anthropic's closed, permission-first ecosystem with the open-source OpenClaw project, noting the inherent security risks of giving an LLM unrestricted system access. Verdict: Skim for an entertaining, high-level look at the state of autonomous desktop agents and the security trade-offs involved.

**[Bryan Johnson: I Just Took the Most Powerful Dose of DMT in the World... Here's What It Was Like](https://www.youtube.com/watch?v=Axpnkqd-Agk)** · All-In Podcast · [URL](https://www.youtube.com/watch?v=Axpnkqd-Agk)
Biohacker Bryan Johnson describes his subjective experience testing 5-MeO-DMT as a longevity experiment, claiming it entirely shut off his default mode network and restored a childlike psychological state. The discussion touches heavily on biological tracking, noting the use of structural MRIs, EEGs, and the Kernel optical interface to attempt to measure neuroplasticity objectively. Verdict: Skip, unless you are deeply interested in biohacking or psychedelic therapies, as there is no software or systems engineering value here.

**[Building LiveKit Agents with Gemini Live API](https://www.youtube.com/watch?v=tj8ggd8UvB0)** · Google for Developers · [URL](https://www.youtube.com/watch?v=tj8ggd8UvB0)
A pragmatic, hands-on tutorial demonstrating how to build a voice agent locally using Python, the Gemini 3.1 Flash native audio model, and LiveKit. The implementation details are solid, showing how to handle system prompts strictly tailored for speech rather than text, and how to execute both server-side function calling and client-side RPC calls. Verdict: Worth watching in full for engineers who need to deploy low-latency, multimodal voice applications that don't rely on brittle speech-to-text-to-speech pipelines.

**[Building Voice Agents with Gemini 3](https://www.youtube.com/watch?v=XV5bhkDpL7U)** · Google for Developers · [URL](https://www.youtube.com/watch?v=XV5bhkDpL7U)
An architectural breakdown of the Gemini Live API, explaining how native 16kHz PCM audio processing maintains emotional context and enables mid-conversation language switching across 70 languages. The video outlines critical system constraints, such as the requirement to handle session resumption for WebSockets and hard context limits like the 15-minute cap on audio sessions. Verdict: Skim to understand the infrastructure patterns (server-to-server WebSockets vs. client WebRTC) and API constraints before designing a production voice architecture.

**[ChatGPT Shopping | Research and compare products without all the tabs.](https://www.youtube.com/watch?v=fFboNpWweyE)** · OpenAI · [URL](https://www.youtube.com/watch?v=fFboNpWweyE)
There is no transcript or substantive content provided in the sources for this video. Verdict: Skip due to a lack of technical information.

**[Does money and power corrupt? | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=sAKKQuNXyOk)** · Lex Clips · [URL](https://www.youtube.com/watch?v=sAKKQuNXyOk)
Jensen Huang argues that his transparent, public reasoning style prevents ego and power from corrupting his technical judgment. He explains that by constantly reasoning through problems out loud with his team, his errors are highly visible, allowing employees to challenge the specific logical steps he takes rather than just debating the final outcome. Verdict: Skim if you are interested in the engineering management philosophy of one of the industry's most successful CEOs.

**[Hands-on AI workshop: Graph RAG, Memory & Multimodal Agents](https://www.youtube.com/watch?v=FzvIuoIJCcU)** · Google Cloud Tech · [URL](https://www.youtube.com/watch?v=FzvIuoIJCcU)
There is no transcript or substantive content provided in the sources for this video. Verdict: Skip due to a lack of technical information.

**[Haptic Rendering - Computerphile](https://www.youtube.com/watch?v=0jmJdvI6f-A)** · Computerphile · [URL](https://www.youtube.com/watch?v=0jmJdvI6f-A)
An excellent, mathematically grounded explanation of computer haptics, detailing the requirement for a 1,000 Hz computation loop to maintain stable physical force feedback. The presenter dives into the mechanics of collision detection and inverse kinematics, specifically outlining how proxy algorithms (or "god objects") act as an intermediary to prevent user cursors from popping through virtual 3D models when interacting with thin or complex surfaces. Verdict: Worth watching in full for a fascinating look at the physics simulations and edge-case handling required to trick human kinesthetic perception.

**[History Was Never Slow - Ada Palmer](https://www.youtube.com/watch?v=O--rUvPZWCo)** · Dwarkesh Patel · [URL](https://www.youtube.com/watch?v=O--rUvPZWCo)
Historian Ada Palmer argues that the concept of slow historical stagnation is a myth propagated by 19th-century historians to make the modern era feel unique. She notes that continuous technological iterations—like the invention of scissors or better metallurgy—ensured that even the 1300s felt rapidly changing to the people living through them. Verdict: Skip, as it is an abstract historical observation with no practical application to modern technology.

**[How to add short-term memory to your AI Agent (Sessions & State Explained)](https://www.youtube.com/watch?v=vfVcDUCucSs)** · Google Cloud Tech · [URL](https://www.youtube.com/watch?v=vfVcDUCucSs)
A brief overview explaining the difference between an agent's session (the continuous transcript of events) and its state (a structured key-value scratchpad for quick data retrieval). It highlights a pattern where one agent extracts a variable like a destination and passes it directly into the state for a second agent, avoiding the latency of re-parsing a 15-message log. Verdict: Skim for a quick, fundamental refresher on managing context and state in multi-agent collaboration.

**[No 1-on-1 meetings: How Jensen Huang runs NVIDIA | Lex Fridman Podcast Clips](https://www.youtube.com/watch?v=2bpc5iGl0po)** · Lex Clips · [URL](https://www.youtube.com/watch?v=2bpc5iGl0po)
Huang breaks down his extreme flat-management structure, consisting of 60 direct reports and absolutely no 1-on-1 meetings. He insists on an "extreme co-design" environment where cross-disciplinary experts—from memory and optical to power delivery and networking—tackle architectural problems simultaneously in group settings to ensure the entire stack is optimized. Verdict: Worth watching for senior leaders interested in how Nvidia successfully forces systemic alignment at a massive hardware scale.

**[NVIDIA CEO responds to DLSS 5 drama about AI slop | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=MH_beCDBtJc)** · Lex Clips · [URL](https://www.youtube.com/watch?v=MH_beCDBtJc)
Huang defends DLSS 5 against gamers complaining about "AI slop," explicitly stating that the upscaling is strictly conditioned on the ground truth geometry and textures authored by developers. He points out that the open nature of the system actually allows studios to train custom models or use prompts to enforce a specific visual style, acting as a tool rather than an override. Verdict: Skim to understand Nvidia's technical defense of generative rendering pipelines.

**[NVIDIA’s supply chain risks - CEO explains | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=dO3Qis4UkBw)** · Lex Clips · [URL](https://www.youtube.com/watch?v=dO3Qis4UkBw)
A look into how Nvidia manages unprecedented scale by fundamentally altering the hardware supply chain, such as moving supercomputer assembly out of the data center and into the manufacturing phase via massive NVLink 72 racks. Huang explains his strategy of directly convincing downstream and upstream partners (like ASML and TSMC) to commit billions of dollars in capital investments by reasoning from first principles about future compute needs. Verdict: Worth watching to grasp the immense physical and logistical realities capping the current AI hardware boom.

**[Rubber Duck Thursdays! | Come hack, cowork, and chat!](https://www.youtube.com/watch?v=UWSRShwE4Eo)** · GitHub · [URL](https://www.youtube.com/watch?v=UWSRShwE4Eo)
There is no transcript or substantive content provided in the sources for this video. Verdict: Skip due to a lack of technical information.

**[Slack School | Getting started with a new Workspace](https://www.youtube.com/watch?v=-DDVvFlBcpY)** · Slack · [URL](https://www.youtube.com/watch?v=-DDVvFlBcpY)
A highly basic setup guide for new Slack administrators, suggesting channel naming conventions and showing how to create a simple intake form using Slack's Workflow builder. It also recommends integrating standard daily tools like Google Drive and Office 365 to limit context switching. Verdict: Skip, as this is introductory material meant for general IT administrators, not senior engineers.

**[The secret to NVIDIA’s success: Inside the mind of Jensen Huang | Lex Fridman Podcast Clips](https://www.youtube.com/watch?v=peaL1uF5MO0)** · Lex Clips · [URL](https://www.youtube.com/watch?v=peaL1uF5MO0)
Huang discusses his strategy for executing major corporate pivots by gradually shaping the belief systems of his employees, board, and partners years in advance of a formal announcement. He emphasizes that Nvidia is not merely a chip manufacturer but an open computing platform, making ecosystem buy-in the actual prerequisite for releasing hardware. Verdict: Skim for a high-level discussion on aligning massive organizations behind risky, long-term technical bets.

**[Vibe designing with Stitch: create designs from natural language](https://www.youtube.com/watch?v=P8usv4eQM_w)** · Google for Developers · [URL](https://www.youtube.com/watch?v=P8usv4eQM_w)
The provided transcript contains only "[MUSIC PLAYING]" and lacks any dialogue or technical explanation. Verdict: Skip due to an absence of useful information.

**[What Codex Unlocks for Ryan Hendler, dev at me&u](https://www.youtube.com/watch?v=4_P7R8Fjrg8)** · OpenAI · [URL](https://www.youtube.com/watch?v=4_P7R8Fjrg8)
A short, purely promotional testimonial where a developer claims his team delegates 30 to 40 tickets overnight to OpenAI's Codex, turning 3-month builds into 3-day tasks. The developer asserts he now spends his mornings reviewing AI-generated code rather than writing it. Verdict: Skip; it is entirely marketing fluff with no view of the actual codebase, prompt structures, or error rates.

**[What Codex Unlocks for Ryan Hendler, dev at me&u](https://www.youtube.com/watch?v=yUjfp2DlfCA)** · OpenAI · [URL](https://www.youtube.com/watch?v=yUjfp2DlfCA)
This is a direct duplicate of the previous OpenAI testimonial. Verdict: Skip, duplicate marketing material.

## Themes
The clear technical trend today is the push to solve latency and context-switching in AI by moving closer to the metal, seen both in Google's native audio model bypassing text translation to handle speech, and in Nvidia's extreme hardware co-design prioritizing entire-stack optimization.