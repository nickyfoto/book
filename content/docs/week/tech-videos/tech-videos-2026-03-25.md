---
title: 2026-03-25
weight: 2
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-25

## Watch First
Watch the **NVIDIA GTC 2026 Open Models Panel** for a high-signal discussion on the shift from monolithic LLMs to orchestrated "compound agents" and why open-source models are strictly necessary for enterprise data control and air-gapped infrastructure.

## Video Rundown

**[AWS OnAir talks with NVIDIA, Bundesliga, Amazon Redshift, and more!](https://www.youtube.com/watch?v=olMbd6zPF5E)** · AWS Events
No transcript data was provided for this video. Without content to evaluate, there is no signal to extract. 
Verdict: Skip.

**[Practical Applications of Edge Compute in Amazon CloudFront | The Routing Loop](https://www.youtube.com/watch?v=t0vsLf8hROA)** · AWS Events
AWS architects detail the critical differences between Lambda@Edge and CloudFront Functions for edge routing. The breakdown highlights that CloudFront Functions scale to millions of requests per second with sub-millisecond latency, but are locked to JavaScript/TypeScript and cannot make external network calls. The session also covers implementing the new 5MB KeyValueStore for stateful routing without hitting DynamoDB. 
Verdict: Worth watching in full for anyone designing distributed AWS systems or edge caching architectures.

**[The Windows Laptop Problem](https://www.youtube.com/watch?v=eXa2ndhmatI)** · Marques Brownlee
A hardware comparison contrasting the highly integrated Apple MacBook ecosystem against fragmented Windows machines like the Dell XPS14. The review points out that Windows OEMs struggle because they rely on disparate vendors executing perfectly, often resulting in bloatware and forced features like Microsoft's Co-pilot. Meanwhile, the $600 MacBook Neo is analyzed as a highly capable loss-leader designed to acquire new Apple services subscribers. 
Verdict: Skim if you are provisioning developer hardware, otherwise skip.

**[Rubber Duck Thursdays!](https://www.youtube.com/watch?v=zN4vLMQqo1c)** · GitHub
No transcript data was provided for this video. 
Verdict: Skip.

**[What is MCP and how does it work with AI?](https://www.youtube.com/watch?v=lFQz1hugvHo)** · GitHub
A brief technical explainer on the Model Context Protocol (MCP), a standard introduced by Anthropic to normalize how LLMs interact with external tools and fetch data. The speaker notes that GitHub recently rewrote the most popular open-source MCP server in Go to enable AI agents to safely interact directly with local file systems and GitHub repositories. 
Verdict: Skim to understand the standard if you are building LLM tooling.

**[Shared memory in #vscode](https://www.youtube.com/watch?v=bwe2pPJlK58)** · Visual Studio Code
A 15-second promo showing a new Visual Studio Code feature where AI sessions share memory through a globally accessible `plan.md` file. 
Verdict: Skip the video, you just read the entire feature.

**[Building Autonomous Networks with Agentic AI](https://www.youtube.com/watch?v=LS_MDioeAAc)** · NVIDIA
A high-level NVIDIA marketing pitch about deploying AI agents to configure and troubleshoot telecom networks via digital twins. 
Verdict: Skip; it is entirely marketing buzzwords with zero technical implementation details.

**[NVIDIA GTC 2026 Open Models Panel Highlights with Jensen Huang](https://www.youtube.com/watch?v=H26xnpL-ei0)** · NVIDIA
Jensen Huang hosts a panel arguing that future AI architectures will rely on "compound agents" orchestrating multiple specialized models rather than single monolithic LLMs. Panelists argue open models are strictly superior for mission-critical enterprise applications because they allow for complete data control, custom IP injection, and trusted air-gapped deployments. They also predict the bulk of future compute will shift rapidly from pre-training to post-training and inference. 
Verdict: Worth watching in full for a high-signal discussion on the architecture and economics of agentic systems.

**[NVIDIA GTC 2026 Open Models Panel Highlights with Jensen Huang](https://www.youtube.com/watch?v=VWM-Cw-P6cI)** · NVIDIA
A brief snippet from the same GTC panel reiterating that even closed-model companies will use open models as part of an agentic system. The closed models will serve as the "crown jewels" surrounded by a much broader open ecosystem. 
Verdict: Skip, the core technical claims are covered in the main panel video.

**[Automotive Special Address: Advancing Level 4 Autonomy, the Path to Scalable, Safe AVs and Robotaxis](https://www.youtube.com/watch?v=7N38fD4ksnI)** · NVIDIA
NVIDIA outlines its Level 4 autonomy roadmap using "Alpamayo 1.5," a 10B parameter reasoning model built on the Cosmos foundation. The engineering highlight is their hybrid Drive AV stack running on a single Orin chip, which executes an end-to-end AI model in parallel with a classical safety arbitrator to guarantee ISO 26262 compliance. A live demo shows a Mercedes prototype narrating its real-time driving decisions and seamlessly following text prompts. 
Verdict: Skim for the Alpamayo 1.5 specs and the practical architecture of hybrid safety systems.

**[The tone in the “I don’t know” makes a difference.](https://www.youtube.com/watch?v=wTwgaoG6qjc)** · Google for Developers
A five-second skit demonstrating two different vocal tones when saying "I don't know" about a bug fix. 
Verdict: Skip.

**[Coding agent still making plans in markdown files? Beads can help.](https://www.youtube.com/watch?v=2W1yuFLVTPE)** · Google for Developers
A five-second clip consisting entirely of sound effects with no technical context provided. 
Verdict: Skip.

**[Introducing Lyria 3 Pro](https://www.youtube.com/watch?v=hv8ZI7foGZk)** · Google DeepMind
A video containing only background music with no spoken information, interfaces, or technical claims. 
Verdict: Skip.

**[Episode 15 - Inside the Model Spec](https://www.youtube.com/watch?v=H8GMRxG8suw)** · OpenAI
An interview with an OpenAI alignment researcher detailing their "Model Spec" rules for LLM behavior. It defines a strict "chain of command" for resolving prompt conflicts, prioritizing OpenAI platform instructions over Developer API instructions, and User instructions last. It also discusses the tradeoff between blindly executing developer instructions and maintaining foundational system honesty. 
Verdict: Skim for the insights on prompt hierarchy and how alignment rules impact API developers.

**[NVIDIA CEO on why TSMC and Taiwan are incredibly successful | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=PBqXRVPxxgE)** · Lex Clips
Jensen Huang discusses TSMC's competitive moat, attributing it to their ability to balance bleeding-edge technology with dynamic supply chain orchestration and high customer trust. He briefly mentions declining an offer from Morris Chang to become TSMC's CEO in 2013. 
Verdict: Skip unless you are interested in semiconductor industry history.

**[What is NVIDIA's "moat" against competitors? - CEO explains | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=KEL_8WnDUqE)** · Lex Clips
Jensen Huang explains that NVIDIA's true competitive advantage is the massive installed base of CUDA and the trust of developers who rely on its backward compatibility. He argues that the atomic unit of computing is no longer the single GPU chip, but entire gigawatt "AI factories" that require thousands of engineers to deploy. 
Verdict: Skim for a concise explanation of hardware-software lock-in from the CEO himself.

**[GitHub CEO: Our Devs Barely Write Code](https://www.youtube.com/watch?v=3gEhfsenzTk)** · No Priors: AI, Machine Learning, Tech, & Startups
The GitHub CEO claims developers only spend 2-3 hours a day writing code, with the rest lost to code review and security backlogs. He pitches AI agents as the impending solution to automatically fix linter errors and vulnerabilities. 
Verdict: Skip; it is a standard executive pitch for AI dev tools lacking technical depth.

**[How a Lost Book Launched the Scientific Revolution - Ada Palmer](https://www.youtube.com/watch?v=oJBcOsyuHvw)** · Dwarkesh Patel
A historical lecture about how the translation of ancient texts into the vernacular during the 1500s democratized knowledge and sparked the scientific revolution. 
Verdict: Skip; it contains purely historical context with no relevance to modern software engineering.

**[The Essential Skill After Prompting](https://www.youtube.com/watch?v=jrfJVBNwMBI)** · EO
A generic monologue arguing that interacting with AI is becoming a "social skill" rather than a technical prompting exercise. 
Verdict: Skip; entirely fluff.

**[AI is way Underhyped. This Silicon Valley CEO proves it | Relay.app, Jacob Bank](https://www.youtube.com/watch?v=OHJJKrJCSRU)** · EO
Relay.app's CEO explains how he uses 40 narrow, single-task AI agents to automate his marketing workflows. He advocates for the "super IC" model, where engineers spend a third of their time managing granular AI agents to execute tasks rather than writing raw content. He emphasizes that agents are not "set and forget" interns; they require constant maintenance and narrow scoping to remain reliable. 
Verdict: Skim for the pragmatic advice on scoping AI agents to single tasks, but ignore the hyperbolic cost-saving claims.

## Themes
AI architectures are visibly maturing from monolithic foundation models into highly orchestrated, specialized "compound agents" communicating via standards like MCP. However, as the AI tooling layer abstracts away complexity, practical systems engineering—like managing sub-millisecond latencies at the edge or enforcing deterministic, classical guardrails on non-deterministic LLMs—remains the actual hard problem.