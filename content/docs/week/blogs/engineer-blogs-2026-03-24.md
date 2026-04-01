---
title: 2026-03-24
weight: 6
---

# Engineering Reads — 2026-03-24

## The Big Idea
The most durable artifact of a system's architecture isn't just the code, but the recorded context of *why* technical bets were made. Architecture Decision Records (ADRs) serve a dual purpose: they act as an immutable historical log for future maintainers, while acting as an immediate forcing function to clarify engineering consensus and surface dissenting views.

## Deep Reads

**Bliki: Architecture Decision Record** · Martin Fowler · [Martin Fowler's Bliki](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html)
Fowler revisits the Architecture Decision Record (ADR), advocating for short, immutable documents that capture a single architectural choice, its context, and its ramifications. The true utility of an ADR lies not just in its archaeological value for future developers, but in the act of writing itself, which forces technical alignment and explicitly captures the trade-offs and alternatives considered at the time. Mechanically, ADRs are typically treated like code: stored in the source repository under a directory like `doc/adr`, written in a lightweight markup language like markdown, and tracked via version control. However, this creates a structural tradeoff, as tying decisions strictly to a single git repository can alienate non-developers or artificially fracture the history of decisions that span a broader ecosystem. To maintain historical integrity, an accepted ADR is never modified; if the system's architecture shifts, the old record's status is simply marked as "superseded" and linked to a newly numbered file. Any engineer tired of uncovering undocumented "Chesterton's fences" in a legacy codebase should read this to understand how to systematically record the confidence levels, forces, and consequences behind their technical decisions.