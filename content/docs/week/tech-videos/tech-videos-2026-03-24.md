---
title: 2026-03-24
weight: 4
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-03-25

## Watch First
**[Unlock Predictable, High-Performance Serverless with AWS Lambda Managed Instances](https://www.youtube.com/watch?v=rn7eD3UUShg)**: This is the single video most worth your time because it introduces a tangible architectural shift—attaching dedicated EC2 compute to Lambda functions—that demonstrably cuts steady-state serverless workload costs by up to 80% without losing managed infrastructure benefits.

## Video Rundown

**[Unlock Predictable, High-Performance Serverless with AWS Lambda Managed Instances | AWS re:Post Live](https://www.youtube.com/watch?v=rn7eD3UUShg)** · AWS Events 
This deep-dive demonstrates AWS Lambda Managed Instances (LMI), an architecture that bridges serverless and dedicated compute by running Lambda functions on specific EC2 instances, such as Graviton C7g. Engineers can configure exact vCPU-to-memory ratios and enable asynchronous multi-concurrency to bypass traditional 15-minute timeouts and cold start penalties. The live demo proves that pre-warmed LMIs drastically cut execution latency for steady-state workloads, with AWS citing beta customer SmugMug achieving an 80% cost reduction. Verdict: Worth watching in full if you manage serverless infrastructure at scale and want tighter, cost-effective control over your compute environments.

**[Tech bros optimized war… and it’s working](https://www.youtube.com/watch?v=nxwkn9Dt9-I)** · Fireship 
This video offers a satirical but technically grounded breakdown of the Maven Smart System, Palantir's AI operating system currently used by the US military. It outlines a theoretical data pipeline using Apache Kafka for real-time sensor data ingestion, Apache Spark for processing, and Neo4j graph databases to map entities into an actionable "ontology". The system relies on Open Policy Agent to enforce rules before open-source LLMs execute actions via the Model Context Protocol. Verdict: Skim for a pragmatic, high-level breakdown of how defense contractors wire together standard open-source data tools for kinetic operations.

**[NVIDIA GTC Telecom Special Address: The AI Grid—Intelligently Connecting AI Infrastructure](https://www.youtube.com/watch?v=cxiOhp9BJTs)** · NVIDIA 
NVIDIA proposes merging traditional telecommunications stacks with accelerated AI compute to form an "AI Grid" natively built over 6G networks. The presentation includes a compelling side-by-side demo showing a local Small Language Model (SLM) executing a customer service voice AI with near-zero latency compared to a visibly jittery cloud LLM alternative. The architecture relies heavily on token-aware routing and running AI applications natively alongside software-defined Radio Access Networks (AI RAN). Verdict: Skim for the live local-vs-cloud latency demo; skip the 40 minutes of corporate telecom posturing.

**[35M Users. $100M ARR. My 10-Year Bet Was Right. | Otter.ai, Sam Liang](https://www.youtube.com/watch?v=7yMetPnsFT0)** · EO 
Otter.ai’s CEO details the company's path to $100M ARR and explains their strategic bet on building proprietary speech recognition models from scratch rather than outsourcing. By avoiding third-party APIs, they maintained the low unit economics necessary to support a massive free user base while successfully modeling complex, multi-speaker meeting dynamics. Verdict: Skim for a solid case study on when building in-house AI models provides a defensible cost moat over API-wrapping.

**["It’s Nonsense Being Pushed by Short Sellers." - CoreWeave CEO on the GPU Depreciation Debate](https://www.youtube.com/watch?v=U2O_Yg3Mjp8)** · All-In Podcast 
CoreWeave’s CEO aggressively dismisses the narrative that modern GPUs face a rapid 16-month obsolescence cycle, attributing this rumor entirely to short sellers manipulating the market. He states that facts on the ground show enterprise clients signing 5-to-6-year contracts for compute, which directly justifies CoreWeave's 6-year hardware depreciation schedule. Verdict: Skim for the raw financial numbers on enterprise compute contract lengths.

**[Will AI replace programmers? - NVIDIA CEO explains | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=N_wq9OV4T4c)** · Lex Clips 
Jensen Huang argues the number of software engineers will actually increase, framing coding simply as the "artistry of specification". Because natural language now allows anyone to write a functional spec, he claims the barrier to entry has dropped, empowering a billion people to code. He draws parallels to the medical field, noting that computer vision made radiologists more heavily utilized rather than rendering them obsolete. Verdict: Skim for Huang's high-level thesis on the shifting role of the software engineer.

**[Keep your chat tidy with the latest #vscode updates](https://www.youtube.com/watch?v=HQnses4p1N8)** · Visual Studio Code 
Demonstrates minor UX improvements to VS Code's AI agent chat, specifically introducing collapsible tool calls to hide terminal output clutter. It also showcases manual and automatic context compaction buttons to help developers manage LLM token limits efficiently without losing thread context. Verdict: Skim if you use VS Code's Copilot or agent features daily.

**[AI Built Him a Custom CRM in Seconds: This Is the Moment Everything Changed](https://www.youtube.com/watch?v=k5I6W00Tl84)** · All-In Podcast 
A host recounts an anecdotal experience using Anthropic's Claude Opus 4 to auto-generate a bespoke CRM system simply from a LinkedIn network prompt. He argues this marks an inflection point where LLM context windows and orchestration reasoning are finally reliable enough to handle end-to-end tool generation. Verdict: Skip; it is merely a generic anecdote about expanding context windows.

**[NVIDIA CEO says AGI is already here | Jensen Huang and Lex Fridman](https://www.youtube.com/watch?v=awE5DV-M48o)** · Lex Clips 
Huang states AGI is already here if you define it as an AI that can perform standard digital work to generate revenue. He points to instances in China where users deploy AI agents to actively look for jobs, or the likelihood of agents spinning up viral, short-lived web apps to monetize engagement. Verdict: Skip; these are speculative philosophical musings resting on a loose definition of AGI.

**[America’s Energy System Isn’t Ready for AI](https://www.youtube.com/watch?v=wv-WkkX0IzE)** · No Priors: AI, Machine Learning, Tech, & Startups 
Discusses the structural mismatch between the US power grid—which has historically seen only 1-2% growth—and the massive energy demands of scaling modern AI data centers. The speaker highlights a "tangled spaghetti mess" of state utilities and disjointed environmental regulations currently bottlenecking progress. Verdict: Skip; a high-level summary of a widely known infrastructural issue without new technical solutions.

**[Helping children worldwide: How Children International uses Microsoft Copilot to scale impact](https://www.youtube.com/watch?v=qVpTZAMxuf4)** · Microsoft 
An enterprise case study showing how the NGO Children International migrated to Azure and Dynamics CRM. They deployed Copilot Studio agents to perform bulk translations of sponsor letters, effectively reducing an 8-hour task down to a single hour. Verdict: Skip; it is a standard enterprise marketing success story lacking architectural depth.

**[Become a Team USA Analyst in the Team USA x Google Cloud Hackathon](https://www.youtube.com/watch?v=Uef8hGNok0Y)** · Google Cloud Tech 
A promotional call to action for a $75,000 hackathon where developers build fan engagement tools for Team USA using Gemini and Google Cloud. Technical requirements mandate deploying on Cloud Run or AI Studio and submitting a public Apache 2.0 code repository. Verdict: Skip unless you intend to enter the competition.

**[Careers at Google Warsaw](https://www.youtube.com/watch?v=miIUUYKxTeI)** · Life at Google 
A standard tech recruiting video showcasing Google Cloud's Warsaw office environment. It briefly mentions local teams working on GPU cluster qualification and Chrome AI integration. Verdict: Skip; strictly a recruiting advertisement.

**[How Banking for the Pope Made the Medicis Unstoppable - Ada Palmer](https://www.youtube.com/watch?v=dPqo0YbgbNI)** · Dwarkesh Patel 
A historical breakdown of how the Medici family leveraged the friction of decentralized, pre-wire-transfer tax collection to become papal bankers. They skimmed the float on church funds to build a massive financial and patronage network. Verdict: Skip; interesting history but entirely irrelevant to modern tech execution.

**[Treat executives like customers](https://www.youtube.com/watch?v=Q20PyO63HiY)** · Lenny's Podcast 
Suggests that Product Managers should treat executives and stakeholders like end-users. By tapping into their domain expertise rather than just pitching for blind approval, PMs can build better products and secure easier buy-in. Verdict: Skip; generic soft-skills advice for product managers.

**[Jensen Huang on How He reasons Toward What Must Exist, Then Builds Toward It](https://www.youtube.com/watch?v=DhxG8LC6x1E)** · NVIDIA 
A brief clip of Huang discussing his visionary leadership style, where he relies on a strong internal reasoning system to "manifest a future" directly from an engineering perspective. Verdict: Skip; purely motivational with zero technical signal.

**[Waste Time Now, Win Later](https://www.youtube.com/watch?v=FQ5HoNt0UO8)** · EO 
Advises professionals to treat tinkering with AI tools as a form of personal R&D. The speaker claims that "wasting" time pushing the limits of current models ensures you are primed to exploit the next generation of AI advancements. Verdict: Skip; basic productivity platitudes.

**[What Codex Unlocks for Notion](https://www.youtube.com/watch?v=bxJkxBUFeEE)** and **[What Codex Unlocks for Notion](https://www.youtube.com/watch?v=qHEUIXGSxxg)** · OpenAI 
Ryan Nestrom, Notion's head of AI product engineering, shares a brief endorsement of OpenAI's Codex across two duplicate uploads. He claims he used the tool to build and port Notion's voice input feature from mobile to web and desktop completely solo in just three to four hours. Verdict: Skip; an outdated, non-technical marketing short.

**[Adobe’s Bedrock Application Acrobat | How to Build with AWS](https://www.youtube.com/watch?v=igiDR8aZYKc)** · AWS Events 
The provided sources only contain the title and URL for this video, with no transcript available for analysis. Verdict: Skip.

**[AWS MCP server | Serverless Office Hours](https://www.youtube.com/watch?v=foYaB6_hd8w)** · AWS Events 
The provided sources only contain the title and URL for this video, with no transcript available for analysis. Verdict: Skip.

**[Database Guardrails for AI Agents - Stop Prompt Injection with AWS | Database for AI](https://www.youtube.com/watch?v=cw26_XNmnJw)** · AWS Events 
The provided sources only contain the title and URL for this video, with no transcript available for analysis. Verdict: Skip.

**[An updated shopping experience in ChatGPT](https://www.youtube.com/watch?v=qF4QRh2u7FE)** · OpenAI 
The provided sources only contain the title and URL for this video, with no transcript available for analysis. Verdict: Skip.

## Themes
A clear theme across the technical videos is the maturation of AI infrastructure away from simple API wrappers toward custom compute setups and deep integrations. Whether it is AWS granting granular EC2 control to serverless architectures, Palantir utilizing graph databases to build military ontologies, or Otter.ai building proprietary voice models from scratch, the industry is moving aggressively toward owning the compute layer and localizing models to kill latency.