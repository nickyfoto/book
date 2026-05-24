---
title: 2026-05-20
weight: 2
categories: ["Blogs"]
tags: ["software engineering", "artificial intelligence", "memory safety", "static analysis"]
---

# Engineering Reads — 2026-05-20

## The Big Idea
The boundaries of software engineering are being tested by the limits of strict specification: agentic coding tools fail when we cannot mathematically define our intent, while memory-unsafe languages continue to fail because we expect human discipline to substitute for structural guarantees. 

## Deep Reads

**Three more static code analysis sensors** · Birgitta Böckeler · [Source](https://martinfowler.com/articles/sensors-for-coding-agents.html#StaticCodeAnalysisDependencyRules)
Birgitta Böckeler explores the effectiveness of using computational versus inferential sensors to evaluate software modularity. She observes that while traditional computational sensors are adequate for enforcing strict, rule-based dependency checks, they fall short when analyzing complex coupling data. Instead, utilizing an inferential sensor—essentially prompting an LLM to evaluate architectural boundaries—proves much more effective for nuanced reviews of system modularity. This highlights a compelling tradeoff: strict deterministic checks are brittle for high-level architectural constraints, whereas probabilistic inference can better grasp design intent. Engineers building or integrating AI coding agents should read this to understand where deterministic rules end and inferential checks must begin.

**Agentic software development hypothesis** · Marc Brooker · [Source](http://brooker.co.za/blog/2026/05/20/hypothesis.html)
Marc Brooker formalizes the trajectory of AI code generation by categorizing the trivialization of coding tasks based on the availability of specifications and oracles. The *weak form* suggests that tasks with complete specifications will become trivial, while the *strong form* extends this to tasks possessing a deterministic oracle. He further posits a *strongest form* relying on a non-adversarial "pythic" oracle. The core constraint to this hypothesis is that the industry rarely produces complete specifications, and true deterministic oracles are practically nonexistent for complex systems. Systems thinkers and technical leads should read this to recalibrate their expectations of AI code generation away from magic and toward the hard realities of system specification.

**"No way to prevent this" say users of only language where this regularly happens** · Xe Iaso · [Source](https://xeiaso.net/shitposts/no-way-to-prevent-this/CVE-2026-45584/)
Borrowing the format of a famous satirical headline, this piece mercilessly skewers the C++ community's learned helplessness regarding memory safety vulnerabilities. Following an arbitrary code execution flaw in Windows Defender (CVE-2026-45584), the author highlights the absurdity of treating memory safety bugs as unavoidable tragedies when they are overwhelmingly tied to a specific class of languages. The piece notes that 90% of memory safety vulnerabilities over the past half-century stem from these unsafe environments, challenging the persistent myth that developer discipline alone can outwit inherent language design flaws. Any developer still defending new projects written in memory-unsafe languages needs to read this as a sharp reality check on systemic risk.

**New blog design** · Drew DeVault · [Source](https://drewdevault.com/blog/New-design/)
Drew DeVault briefly announces a redesign of his long-standing technical blog. After over a decade of adhering to a strict minimalist aesthetic, he has reintroduced more personal style and character into the site's layout. This serves mostly as a ping to RSS readers, but it subtly underscores a broader shift in indie web culture back toward expressive, individualized design over purely utilitarian presentation. Front-end engineers and personal blog maintainers might take a quick look for design inspiration.

## Connecting Thread
Today's reads highlight the persistent tension between human constraints and systemic verification. Brooker and Böckeler both examine the limits of automated evaluation—whether through strict specifications or computational sensors—revealing that rigid rules often fail to capture real-world complexity. Meanwhile, the satire on C++ memory safety serves as a grim reminder of what happens when we rely on individual human discipline instead of structurally secure systems. As an industry, we are simultaneously trying to automate our intent and failing to structurally prevent our own mistakes.