---
title: 2026-06-28
weight: 4
categories: ["Youtube", "Tech"]
tags: ["ai agents", "developer tools", "rag", "llm optimization"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-06-28

## Watch First
**[We Cut 94% of AI Coding Tokens With a Local Code Index - Rajkumar Sakthivel, Tesco](https://www.youtube.com/watch?v=dRmWYHuIJxM)**
A highly practical breakdown of how blindly sending full files to coding agents is a massive waste of expensive input tokens, solved by implementing a local dual-search index that feeds only the strictly necessary functions to the model. 

## Highlights by Theme

### Developer Tools & Platforms
AWS's Erik Hanchett advocates moving past unstructured "vibe coding" in favor of spec-driven workflows using markdown documents to strictly guide AI models in **[Using Spec-Driven Development for Production Workflows - Erik Hanchett, AWS](https://www.youtube.com/watch?v=IddXPepIAS4)**, showcasing a demo of the new AWS Curo AI IDE. Block's Angie Jones explains how to scale autonomous PR generation across 3,500 engineers by introducing "AI-ready" repos with standard context files and dedicated cloud workspaces to prevent local hardware from choking in **[Building an Autonomous Engineering Org - Angie Jones, Agentic AI Foundation](https://www.youtube.com/watch?v=whue9_YquGA)**. Nori's Amol Kapoor makes a compelling argument that forcing AI to interact with pixel-based spatial canvases (like Figma) is doomed; developers should instead use HTML as the agent's native, structure-aware medium for visual generation in **[HTML is All You Need (for Agents to Make Graphics) - Amol Kapoor, Nori](https://www.youtube.com/watch?v=JRTAtZ5iBkU)**. Additionally, a brief demo by Google Cloud Tech shows sub-agents successfully building a full-stack React and SQLite app via voice prompts in **[Build a full stack app with Antigravity voice prompts & sub-agents](https://www.youtube.com/watch?v=HA1ORLiuuTc)**.

### AI & Machine Learning
Sohail Shaikh and Ankush Rastogi highlight a critical "lost in the middle" problem for function calling in **[The 100-Tool Agent Is a Trap - Sohail Shaikh & Ankush Rastogi, Prosodica](https://www.youtube.com/watch?v=vh2VGuQ3zhY)**, demonstrating that dumping giant schemas into prompts causes accuracy to plummet from 78% to 13%, which can be fixed with semantic tool routing. Shashi Jagtap implements Google's new compression paper to slash KV cache memory by 5x using 3-4 bit vector compression in **[Turbocharge Your Agent's Retrieval with TurboQuant - Shashi Jagtap, Superagentic AI](https://www.youtube.com/watch?v=tB9RKTrU-Ig)**, proving search only requires nearest-neighbor proximity, not 32-bit precision. StarlightSearch's Sonam Pankaj critiques standard RAG memory architectures, proposing a "utility score" that ranks retrieval by historical usefulness to task execution rather than raw semantic similarity in **[User Signal Dies at the Retrieval Boundary - Sonam Pankaj, StarlightSearch](https://www.youtube.com/watch?v=Jx4ZFEAq6bY)**. For browser automation, Kushan Raj demonstrates how feeding a model a compressed Markdown DOM representation gracefully avoids the 20,000-token overhead of raw HTML DOMs in **[Browser Agents Don't Need Better Models. They Need Better Eyes. - Kushan Raj, ARK](https://www.youtube.com/watch?v=JnubYCYunk8)**.

### Hardware & Infrastructure
Lech Kalinowski details the impressive engineering behind a physical, battery-powered AI terminal running an ESP32 microcontroller in **[OpenClaw in Your Hand: Building a Physical AI Terminal - Lech Kalinowski, Callstack](https://www.youtube.com/watch?v=akk6KRlcwW4)**, where he bypassed UI compute limits by relying on one-bit pre-allocated memory buffers for an e-paper display. Allen Pike breaks down the brutal math of the 200ms latency ceiling for voice-to-voice AI interaction, advising teams to target "voice in, visuals out" using prefix caching and fast models (like Haiku) to expand to a more forgiving 1,000ms response window in **[Voice In, Visuals Out: The Agony and the Ecstasy - Allen Pike, Forestwalk Labs](https://www.youtube.com/watch?v=65X0pQ6Lmbg)**. Higharc's Vaidas Razgaitis discusses best practices for bridging the gap between ML researchers and backend engineers using clean Python monorepos and decoupled FastAPI microservices in **[Research to Reality: Bringing Frontier ML Research to Production - Vaidas Razgaitis, Higharc](https://www.youtube.com/watch?v=OXMMN-XbxwA)**.

### Everything Else
On Lenny's Podcast, OpenAI Codex lead Andrew Ambrosino argues that because AI has completely inverted the cost of implementation, human "taste" and curation are now the most critical product management skills in **[OpenAI Codex lead on the new shape of product work | Andrew Ambrosino](https://www.youtube.com/watch?v=P3KDebPTUrw)**. Stepping away from technical builds, the All-In Podcast crew covers socio-political matters, predicting the UK's social media ban is a precursor to broad deanonymization and censorship in **[What the UK's Social Media Ban is REALLY About](https://www.youtube.com/watch?v=iGG6bjAz2QM)**, and critiquing NGO-driven politics in **[2 Reasons Socialism is Rising in America](https://www.youtube.com/watch?v=I4aXr3-aAco)**.