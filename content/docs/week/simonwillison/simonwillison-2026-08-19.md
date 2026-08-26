---
title: 2026-08-19
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "sandboxing", "software architecture", "developer tooling"]
---

# Simon Willison — 2026-08-19

## Highlight
**Simon’s podcast reflection on how AI velocity challenges software's conceptual integrity** is the standout piece today, framing cognitive capacity and structural cohesion—not raw code production—as the true modern bottlenecks in software development.

## Posts

**[Conceptual integrity and counting lines of code](https://simonwillison.net/2026/Aug/19/conceptual-integrity-and-counting-lines-of-code/)** · [Source](https://simonwillison.net/2026/Aug/19/conceptual-integrity-and-counting-lines-of-code/)
In this post, Simon shares key takeaways from his recent *Talking Postgres* podcast appearance, tackling the controversial subject of lines of code as a modern productivity metric. He argues that while AI coding agents can dramatically scale output to thousands of production-ready lines per day, the true limiting factor shifts to **cognitive capacity**—the ability of senior engineers to oversee and maintain that massive volume. Furthermore, he warns against losing **conceptual integrity** (a classical *Mythical Man-Month* concept) as cheap feature additions risk turning projects into architectural monstrosities resembling the disjointed "Winchester Mystery House". The overarching lesson for developers is that discipline, once naturally enforced by time constraints, must now be manually and intentionally practiced.

**[smolmachines / smolvm as a sandbox for untrusted Python & JavaScript](https://simonwillison.net/2026/Aug/19/smolmachines-untrusted-sandbox/)** · [Source](https://simonwillison.net/2026/Aug/19/smolmachines-untrusted-sandbox/)
Simon documents a fascinating, real-world agent run where he tasked Claude Fable 5 (via Claude Code) with stress-testing `smolmachines` as a lightweight, secure sandbox for untrusted Python and JS execution. When the agent’s own container environment blocked nested virtualization (failing to start `smolvm` due to a lack of `/dev/kvm`), the model engineered a creative "Plan B" by dynamically configuring temporary GitHub Actions ubuntu runners that *do* expose KVM to run the test suite and collect the logs. For practitioners, this post serves as a prime demonstration of the **relentless proactivity of state-of-the-art developer agents** when hitting severe environmental constraints.

**[Quoting Jeremy Morrell](https://simonwillison.net/2026/Aug/19/jeremy-morrell/)** · [Source](https://simonwillison.net/2026/Aug/19/jeremy-morrell/)
Simon spotlights a compelling thesis from Jeremy Morrell on why **extensible web software is entering a golden age** powered by LLMs and secure runtime environments. Morrell argues that because LLMs make authoring software extensions virtually free, and modern sandbox primitives drastically lower deployment risk, core applications can safely outsource edge-case features to AI-generated user extensions. Simon's endorsement of this quote underscores the broader industry shift toward letting end-users utilize AI inside highly-restricted execution environments to gain tailored software superpowers.

## Project Pulse
Today's posts reveal a cohesive theme focused on **sandboxing and the architectural realities of AI-assisted software**. Simon is actively exploring how secure sandboxes like `smolvm` and LLM extensibility can unlock user customization, while simultaneously grappling with the developer discipline needed to manage AI's rapid, unchecked output.

***

🔍 I can research the web to see if Simon has released any new open-source sandboxing experiments or CLI tools since these posts were published.