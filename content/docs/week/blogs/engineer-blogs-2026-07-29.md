---
title: 2026-07-29
weight: 5
categories: ["Blogs"]
tags: ["tail latency", "statistics", "formal logic", "software engineering"]
---

# Engineering Reads — 2026-07-29

## The Big Idea
Applying rigorous frameworks to our engineering intuition reveals the hidden realities of software systems. Whether using statistical curves to expose how the slowest 1% of requests secretly consume the majority of your server capacity, or applying formal logic to untangle domain modeling, adopting a more mathematical lens pays outsized dividends in system design.

## Deep Reads

**Lorenz and Little: How Much Does Your Tail Cost?** · Marc Brooker · [brooker.co.za](http://brooker.co.za/blog/2026/07/29/lorenz-and-little.html)
Tail latency is often treated purely as a customer experience problem, but it is actually a massive driver of system cost and capacity demand. Brooker demonstrates this by using the empirical Lorenz Curve to calculate how much requests above a certain latency percentile contribute to the overall mean latency. Because Little's Law dictates that a request's contribution to mean latency equals its contribution to system concurrency, a p99 latency that contributes 52% of the mean indicates that the top 1% of your slowest requests are occupying 52% of your busy threads. While the exact mapping from concurrency to cost gets complicated in queued or event-based systems, and estimating true percentiles from raw samples introduces statistical noise, the core mechanics hold true. Systems engineers optimizing for cost should read this to understand why ignoring or casually trimming off heavy tails is a mistake when those outliers are precisely what drives your infrastructure bill.

**Logic for Programmers is Now Available** · Hillel Wayne · [hillelwayne.com](https://www.hillelwayne.com/post/lfp/)
Formal logic is a foundational tool for understanding software behavior—clarifying everything from SQL left outer joins to the classic Liskov substitution problem of why a Square shouldn't inherit from a Rectangle. However, developers are traditionally forced to learn these concepts through dense mathematical textbooks or unreliable "osmosis" that ultimately fails them. Wayne spent five years bridging this gap by writing a book tailored for working developers with no math background, covering practical applications like property-based testing, logic programming, and domain modeling. The material was heavily vetted by domain experts for theoretical accuracy and by junior programmers to ensure it remains approachable. Practitioners who want to build more robust mental models of system state and test design should read this to finally ground their architectural intuition in formal mechanics.

## Connecting Thread
Both pieces share a deep commitment to replacing informal engineering intuition with structured reasoning. Whether Brooker is mapping statistical percentiles to thread concurrency or Wayne is mapping formal logic to property-based testing, both authors argue that reaching for foundational principles yields vastly better, more predictable systems.