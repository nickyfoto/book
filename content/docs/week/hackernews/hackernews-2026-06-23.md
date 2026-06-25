---
title: 2026-06-23
weight: 1
categories: ["News", "Tech"]
tags: ["artificial intelligence", "software engineering", "open source", "web development"]
---

# Hacker News — 2026-06-23

## Top Story
**[Fable 5 wrote a Windows kernel in 38 minutes](https://tolmo.com/blog/when-the-model-writes-the-kernel/)**
Anthropic’s restricted cybersecurity model, Fable 5 (a limited version of Mythos), successfully wrote a bootable, NT-compatible Windows kernel in Rust from a blank directory in just 38 minutes. The model correctly implemented the scheduler, memory manager, and trap machinery, while autonomously debugging its own hardware emulation issues. It’s a staggering demonstration of frontier capability that shifts the security conversation from whether an AI can write a Trusted Computing Base (TCB) to the urgent bottleneck of how humans can formally verify code produced at this speed.

## Front Page Highlights

**[AI’s Affordability Crisis](https://blog.dshr.org/2026/06/ais-affordability-crisis.html)**
The era of heavily subsidized AI compute is crashing into a wall of financial reality, with OpenAI reportedly hitting $34 billion in expenses against $13 billion in revenue for 2025. Hyperscalers are quietly abandoning flat subscriptions for strict token-based billing, shocking startups whose infrastructure costs have surged overnight. The community is debating whether the industry can ever achieve the massive labor displacement required to service its mounting debt.

**[The new HTTP QUERY method explained](https://kreya.app/blog/new-http-query-method-explained/)**
Protocol nerds are celebrating RFC 10008, which officially introduces the `QUERY` method to the HTTP standard. It solves the decades-old REST anti-pattern of passing complex search payloads in a `GET` body or resorting to non-idempotent `POST` requests just to filter records. The new method provides a safe, cacheable way to handle deeply nested queries without hitting URL character limits.

**[Performance Improvements in Libffi](https://atgreen.github.io/repl-yell/posts/libffi-plan-cache/)**
In a brilliant piece of low-level optimization, `libffi` has achieved a 6x speedup by caching argument placement plans. Instead of redundantly interpreting complex System V AMD64 ABI rules on every function call, the new approach compiles the placement into a tiny, reusable bytecode. It proves that you can squeeze massive performance out of a pure interpreter without needing to map executable pages for a JIT compiler.

**[The Coming Loop](https://lucumr.pocoo.org/2026/6/23/the-coming-loop/)**
Armin Ronacher reflects on the uneasy shift toward "harness-operated loops" where autonomous AI agents continuously patch and review code without human intervention. He warns that LLMs inherently write defensive, overly-complex code to handle impossible states, turning software into an obscure "organism" we merely monitor rather than a deterministic machine we fully understand. It's a resonant critique of how raw development speed is eroding architectural sanity.

**[Wikipedia cofounder Larry Sanger blocked from editing Wikipedia](https://en.wikipedia.org/wiki/User:Larry_Sanger)**
Larry Sanger, who co-founded Wikipedia in 2001, returned to the platform to push a reform project aimed at increasing intellectual diversity and abolishing consensus-based decision making. The community promptly hit him with an indefinite ban. It's a perfect encapsulation of wiki-politics and the rigid bureaucratic immune system of the modern internet.

**[Don’t verify email addresses by sending spam to them](https://milek7.pl/mailverifyspam/)**
A developer discovered a SaaS product using a uniquely terrible anti-pattern: verifying user emails by actively sending them spam from rotated, blacklisted domains. If the spam doesn't bounce, the address is considered valid. The post serves as a hilarious reminder to just use standard verification links instead of engineering elaborate, reputation-destroying workarounds.

## Show HN & Launches

**[Show HN: A pure ARM64 Assembly web server, now on Linux with CGI for no reason](https://github.com/imtomt/ymawky/tree/linux)**
`ymawky` is a fork-per-connection web server written completely by hand in ARM64 assembly, with no libc and using only syscalls. In a display of beautifully unnecessary engineering, it even supports query strings and external CGI scripts, along with built-in path traversal protection.

**[Show HN: Bun-sqlgen – Type-safe raw SQL for Bun, no ORM](https://github.com/ilbertt/bun-sqlgen)**
A pragmatic new tool for the Bun ecosystem that gives you fully-typed, null-safe SQL queries without the overhead of an ORM. It works by live-checking your raw SQL against a real Postgres or SQLite schema during development, failing the build immediately if columns are wrong.

**[Show HN: Shumai – open-source Frame.io alternative](https://github.com/shumaiOne/shumai)**
An open-source platform for creative work that includes frame-by-frame annotations and S3-compatible cloud storage. 

**[Mistral OCR 4](https://mistral.ai/news/ocr-4/)**
Mistral has launched a highly-focused OCR model that goes beyond text extraction to provide bounding boxes, typed-block classification, and inline confidence scores across 170 languages. Designed to be run in a single container for self-hosted deployments, it targets enterprises building internal RAG pipelines without sending sensitive documents to external APIs.

## Discussion & Debate

**[Job application asked for my SAT scores](https://mrmarket.lol/job-application-asked-for-my-sat-scores/)**
An applicant to a YC startup was baffled to find a request for their decades-old SAT scores at the end of the process. The thread generated heavy debate about how the flood of perfect, AI-generated resumes is destroying traditional hiring signals. Companies are increasingly desperate for un-assisted indicators of raw intelligence, even if it means reverting to deeply flawed, historical standardized tests.

**[Why Drawing Tablet Brands Won’t Collaborate on Linux Floss Drivers](https://www.davidrevoy.com/article1154/why-drawing-tablet-brands-wont-collaborate-on-linux-floss-drivers)**
A frustrating look into the politics of open-source infrastructure. Tablet manufacturers like Gaomon and Huion are refusing to contribute their device specifications to Linux input projects because core repositories (like `libwacom` and `xf86-input-wacom`) are still branded with the name of their biggest competitor, Wacom. It highlights the long-term consequences of allowing a single corporate contributor's legacy naming to dominate a generic ecosystem.