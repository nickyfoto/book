---
title: 2026-06-14
weight: 8
categories: ["Blogs"]
tags: ["python", "plugins", "software architecture", "pluggy", "api design"]
---

# Engineering Reads — 2026-06-14

## The Big Idea
Designing a plugin architecture is a deceptively simple "shallow API" problem where it is heavily tempting for developers to roll their own custom solutions. However, adopting a battle-tested abstraction like Python's Pluggy library trades a minor dependency addition for robust, standardized solutions to hidden complexities like package discovery, execution ordering, and result aggregation.

## Deep Reads

**[Plugins case study: Pluggy](https://eli.thegreenplace.net/2026/plugins-case-study-pluggy/)** · Eli Bendersky 
The author examines Pluggy, a standalone plugin management library extracted from the rich ecosystem of the `pytest` project, to evaluate whether taking on a third-party dependency is better than engineering a custom framework. Pluggy relies on a straightforward architecture where the host application defines API contracts via `HookspecMarker` decorators, and plugins implement these specific hooks using `HookimplMarker`. While basic plugin registration is relatively trivial to implement from scratch, Pluggy proves its system-level worth by providing seamless `setuptools` entry point discovery out of the box, alongside robust execution control like default LIFO ordering, signature validation, and strict execution priorities via `tryfirst` and `trylast`. The core architectural tradeoff here is the dependency footprint versus the hidden engineering effort of edge cases: because plugin frameworks inherently expose a "shallow API," engineers frequently fall into the trap of writing bespoke implementations that eventually recreate these exact advanced features. Software engineers building extensible Python tools should read this to understand exactly what capabilities they gain by adopting Pluggy rather than reinventing the wheel.