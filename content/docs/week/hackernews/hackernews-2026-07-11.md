---
title: 2026-07-11
weight: 7
categories: ["News", "Tech"]
tags: ["artificial intelligence", "apple", "haskell", "webassembly", "compilers"]
---

# Hacker News — 2026-07-11

## Top Story
Apple is suing OpenAI, alleging former employees stole trade secrets—including CAD files and prototype components—to bootstrap OpenAI's nascent hardware division. The complaint claims a former VP of product design directed Apple engineers to bring actual hardware to OpenAI interviews for "show and tell" sessions, surfacing serious supply-chain and IP drama as Jony Ive builds out OpenAI's devices.

## Front Page Highlights

**[After 7 years, Scarf has reluctantly moved away from Haskell](https://avi.press/posts/2026-07-10-after-7-years-in-production-scarf-has-reluctantly-moved-away-from-haskell.html)**
Avi Press argues that LLM coding agents have fundamentally shifted the economics of software development, turning slow compile times from a papercut into a dealbreaker. Because AI workflows require cheap, disposable execution contexts to explore multiple branches in parallel, the heavy tax of Haskell's cold-starts forced the team to migrate new API development to Python.

**[FreeCAD in the Browser](https://magik.net/freecad/)**
A massive technical achievement: porting 1.5 million lines of C++ to WebAssembly using Qt and JSPI. What is most notable is that the engineering—toolchains, cross-compiling, and debugging memory leaks—was done almost entirely by an AI agent in about four days, with the human acting only as an observer and unblocker.

**[The mask that compiles to nothing: how HotSpots JIT reasons about bits](https://questdb.com/blog/jvm-jit-known-bits/)**
A beautiful deep dive into JVM internals, explaining how the C2 compiler optimizes out redundant bitwise operations. It relies on a "reduced product" abstraction that tracks both the signed/unsigned range of an integer and a bitmask of known zeros and ones, letting the two constraints iteratively refine each other until operations like `(x << 2) & -4` are simplified to just the shift.

**[An update on residential proxies and the scraper situation](https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/)**
LWN highlights the escalating arms race of AI data scraping, which is increasingly powered by shadowy "residential proxy" networks hijacking ordinary users' devices. The sheer volume of traffic is forcing the open web behind paywalls and proof-of-work checks like Anubis, though scrapers are already finding ways to bypass these defenses.

**[AI Can’t Recreate the Thrust Game](https://www.jamesdrandall.com/posts/thrust_ai_powered_software_archaeology/)**
An attempt to have Claude write a browser clone of the 1986 BBC Micro game *Thrust* produced pure slop, completely missing the nuanced timing and physics of the original. However, Claude proved to be an extraordinary "software archaeology" tool for interrogating the original 6502 assembly, helping the author perfectly recreate the hardware-specific quirks.

## Show HN & Launches
**[Reame](https://github.com/swellweb/reame)** is a lean LLM inference server built on llama.cpp, explicitly optimized for cheap CPU hardware rather than treating it as a fallback. It uses a persistent disk cache and "palimpsest" drafting to remember what it generated, making repetitive workloads faster and cheaper the longer it runs. Also notable is **[Earth Game](https://github.com/skorotkiewicz/earth-game)**, an offline CLI tool for turning life goals into quests that completely rejects modern SaaS bloat—no accounts, no outbound requests, and no AI-generated advice.

## Discussion & Debate
George Hotz published a blistering critique of the AI safety "cult," arguing that "hard takeoff" scenarios ignore real-world supply chain friction and physical limits. He advocates for fiercely local, uncensored AI models that answer only to the user, rejecting the dystopian vision of centralized tech conglomerates dictating what we can compute. Meanwhile, users are growing increasingly frustrated with frontier models like Claude becoming overly preachy and stubbornly refusing benign creative prompts under the guise of safety protocols.