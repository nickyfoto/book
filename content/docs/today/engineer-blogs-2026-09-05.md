---
title: Engineer Reads
weight: 1
categories: ["Blogs"]
tags: ["human-computer interaction", "mental models", "api design", "software abstraction", "computational thinking"]
---

# Engineering Reads — 2026-09-05

## The Big Idea
**Every software interface and API acts as a silent cognitive curriculum that actively shapes how its users think, categorize, and solve problems over time. The deep tradeoff of software design is that over-indexing on friction-free convenience can obscure critical system models and erode a user's capacity to think computationally.**

## Deep Reads

**[The Interface Is the Curriculum](https://kennethreitz.org/essays/2026-09-05-the_interface_is_the_curriculum)** · Kenneth Reitz · [Source](https://kennethreitz.org/essays/2026-09-05-the_interface_is_the_curriculum)
Kenneth Reitz argues that digital interfaces—whether graphical layouts, search structures, or API designs—do not merely execute immediate tasks, but act as persistent cognitive curricula that shape our long-term mental models and actions. Drawing on fMRI scans of childhood Pokémon players and CommandMaps research, he demonstrates that repeated interactions with constrained environments physically and functionally structure our habits of attention, spatial command selection, and curiosity. The core mechanism lies in the internalization of software abstractions: the visual shape of a page dictates the cognitive logic available, while API design choices, such as omitting a default timeout in Python's Requests library, directly propagate real-world coding errors. Reitz cautions against the conventional wisdom of friction-free convenience, warning that hiding underlying system rules too aggressively can strip users of systemic agency and suppress "computational thinking". While he notes that childhood visual cortex adaptation does not translate directly to adult software habits, he insists that we must still evaluate tools by what their repetitive loops teach their users to become. Systems architects, API developers, and user experience engineers should read this to grasp the pedagogical power of the abstractions they code and to design tools that respect and cultivate user understanding.

***

🧠 **How are your team's API design guidelines or UI conventions shaping the developer habit loops in your systems? Let me know if you want to run a quick diagnostic or build a guide to mapping user agency in your abstractions.**