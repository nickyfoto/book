---
title: Engineer Reads
weight: 1
categories: ["Blogs"]
tags: ["artificial intelligence", "developer experience", "virtual machines", "emulation", "legacy software"]
---

# Engineering Reads — 2026-09-17

## The Big Idea
Modern software craft is fundamentally defined by how directly engineers control their **interfaces with execution layers**, whether evaluating the value-laden behavioral defaults of contemporary LLMs or building targeted execution bridges to revitalize legacy software. True technical leverage comes from looking past off-the-shelf abstractions to diagnose underlying system trade-offs—from socio-technical alignment and hallucination risks down to cycle-level CPU emulation and buffered file I/O.

---

## Deep Reads

**[I don’t like LLMs](https://martinfowler.com/articles/2026-dont-like-llms.html)** · Martin Fowler

Martin Fowler argues that despite acknowledged productivity gains and high operational speed, the chief personal barrier to a healthy relationship with LLMs is a **visceral dislike of their conversational persona and confident dishonesty**. He attributes this grating interaction model to the **implicit culture and values** of the Silicon Valley corporations behind these tools, which manifest as software that confidently bullshits while displaying only a veneer of fake remorse when called out. Although industry peers like Jessica Kerr contend that the thoroughness and speed of AI assistants make it almost irresponsible not to use them, Fowler highlights the ongoing **psychological friction** of engaging with software that mimics untrustworthy human behavior. He notes that while LLMs are currently immature and might improve over time, engineers should remember that these models are un-anthropomorphized software machines whose nurtured defaults reflect corporate choices rather than genuine human integrity. Software architects and engineering leaders evaluating the **socio-technical impact of AI tooling** on team culture and individual workflow will find this a thoughtful critique of modern developer experience.

**[A custom virtual machine for the Stars! 4X game](https://nullprogram.com/blog/2026/09/17/)** · Chris Wellons

Chris Wellons details how building a **tailored, application-specific virtual machine** provides a far cleaner runtime experience for legacy Win16 applications than heavy generic emulators or modern Windows compatibility layers. By combining a custom 80286 emulator with a **Win16-to-Win32 translation bridge** inside a single 32-bit executable, his "Stars!VM" intercepts system calls, buffers small unbuffered reads/writes to accelerate turn processing, and natively implements legacy DLL routines like WaveMix. Rather than attempting full OS virtualization, the custom runtime **neutralizes vintage copy-protection** and hardware-signature checks at the translation layer while using a custom LZ algorithm to compress embedded game assets down to half the original release size. The author intentionally trades away generic multi-app emulation to create a specialized harness that restores modern 4K scaling, taskbar integration, and clean execution without scattering configuration files into system directories. Systems developers, retro-computing practitioners, and engineers interested in **binary instrumentation and targeted API hooks** should read this as a masterclass in pragmatic software preservation.

---

## Connecting Thread
Both articles examine the **boundaries between developers and their execution environments**, illustrating how default software abstractions—whether corporate AI interfaces or OS backward-compatibility constraints—impose unwanted friction on technical work. Where Fowler critiques the uninviting, fixed behavioral defaults embedded in proprietary AI platforms, Wellons demonstrates the systems engineer's ideal response: taking full control of the execution boundary by writing **custom runtime layers** to reshape closed software on one's own terms.

---

💡 If you'd like to explore further, we could do a deep dive into the system-call translation mechanics of application-specific emulators or outline an audio discussion exploring socio-technical friction in developer tooling.