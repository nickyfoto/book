---
title: 2026-05-21
weight: 6
categories: ["Blogs"]
tags: ["artificial intelligence", "software engineering", "cybersecurity", "nixos"]
---

# Engineering Reads — 2026-05-21

## The Big Idea
The software industry is constantly negotiating the tension between convenience and systemic fragility. Whether it's abdicating code comprehension to LLMs, accepting endemic memory safety and supply-chain vulnerabilities as "acts of god," or fighting complex tooling to retain local configuration control, our daily micro-choices compound into the security and maintainability baselines of the systems we operate. 

## Deep Reads

**[Bliki: Vibe Coding]** · Martin Fowler · [Source](https://martinfowler.com/bliki/VibeCoding.html)
"Vibe coding," a term coined by Andrej Karpathy, involves prompting an LLM to build software without the developer ever looking at the generated code. Fowler differentiates this from "Agentic Programming" (where engineers actively review LLM-generated code), arguing that true vibe coding intentionally ignores internal structure to maximize speed. This approach drastically accelerates prototyping and empowers non-programmers, but it heavily trades away correctness, maintainability, and security. LLM hallucinations and non-deterministic edits mean that unreviewed codebases quickly degrade into unmaintainable, vulnerable spaghetti code with a large attack surface. This is a must-read for engineering leaders and practitioners trying to formalize when to use LLMs for throwaway scripts versus robust, reviewed production systems.

**["No way to prevent this" say users of only language where this regularly happens]** · Xe Iaso · [Source](https://xeiaso.net/shitposts/no-way-to-prevent-this/CVE-2026-45250/)
The C programming ecosystem exhibits a collective learned helplessness regarding memory safety vulnerabilities. Written in the style of an *Onion* article following a FreeBSD kernel stack overflow (CVE-2026-45250), the author mocks the prevailing attitude that arbitrary code execution bugs are unavoidable, natural tragedies. The underlying critique is sharp: developers continue to choose a language responsible for the vast majority of the world's memory safety vulnerabilities over the last 50 years, yet act helpless when the inevitable exploits occur. Systems engineers and C/C++ developers should read this for a brutal, satirical reminder of the systemic costs of ignoring memory-safe languages.

**["No way to prevent this" say users of only package manager where this regularly happens]** · Xe Iaso · [Source](https://xeiaso.net/shitposts/no-way-to-prevent-this/supply-chain/2026-art-template/)
Similar to the C ecosystem's memory safety woes, the NPM ecosystem treats catastrophic supply chain attacks as unfortunate, unpreventable accidents. Prompted by the `art-template` compromise, where attackers controlled the repository and loaded unauthorized JavaScript via third-party domains, the piece skewers the JavaScript community's normalization of supply-chain fragility. By blindly relying on NPM without maintainers securing account access in a robust manner, the ecosystem structurally guarantees these attacks week after week. Frontend and backend engineers relying on NPM need to read this as a reality check on dependency management and the inherent risks of deep dependency trees.

**[TIL: Symlinking NixOS Dotfiles]** · matklad · [Source](https://matklad.github.io/2026/05/21/symlinking-nixos-dotfiles.html)
You can manage NixOS dotfiles declaratively without relying on heavy abstractions like `home-manager` by repurposing `systemd-tmpfiles`. The author rejects `home-manager` because its nix-store-based approach breaks the fast feedback loop of "Emacs-style direct tinkering" and introduces unnecessary dependency overhead. Instead of bringing in GNU Stow, they leverage NixOS's native ability to configure `systemd-tmpfiles`—a tool inaptly named for this use-case—to declaratively enforce symlinks from a local dotfiles git repository directly into `~/.config`. Linux desktop enthusiasts and NixOS users looking for a minimalist, dependency-free way to manage configuration state while preserving rapid edit-refresh cycles will find this hack highly pragmatic.

## Connecting Thread
Today's reads underscore the long-term consequences of technical abdication. Fowler warns against losing code comprehension to AI, Xe Iaso ruthlessly highlights the denialism in ecosystems (C, NPM) that refuse to structurally fix recurring vulnerabilities, and matklad demonstrates the lengths engineers will go to retain direct, tinker-friendly control over their system configurations. The throughline is clear: engineering craft requires taking active responsibility for the materials we build with, rather than surrendering to the path of least resistance offered by our tools.