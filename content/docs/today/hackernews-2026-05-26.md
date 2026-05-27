---
title: Hacker News
weight: 15
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "programming", "cloud computing", "open source"]
---

# Hacker News — 2026-05-26

## Top Story
The Vatican dropped *Magnifica Humanitas*, Pope Leo XIV’s official encyclical on the ethics of AI, and it is a surprisingly lucid technical read. The Pope accurately frames the interpretability problem of LLMs by noting they are "cultivated" rather than "built," and issues a stark warning against delegating human decisions to algorithms that lack "compassion, mercy, and forgiveness". What makes this peak HN material is that Bryan Cantrill and Simon Willison jokingly predicted this exact scenario on a podcast earlier this year.

## Front Page Highlights

**[AWS Fired the One Employee Who Gave a Damn]** · [Source](url)
A devastating postmortem on Amazon's support culture. The author recounts how Tarus Balog, a 20-year open-source veteran who escalated a severity-2 ticket to the CEO to restore a developer's deleted account, was quietly fired shortly after. It's a grim reminder that massive tech bureaucracies actively optimize away the humans who break the rules to actually help users.

**[CVE-2026-28952: Apple macOS 26.5 Kernel Vuln found by Claude]** · [Source](url)
Anthropic and Calif.io used Claude to uncover a kernel vulnerability in macOS Tahoe that allows apps to cause unexpected system termination or read kernel memory. It's a massive milestone to see an LLM finding legitimate zero-day kernel bugs in a major operating system, shifting the landscape of automated vulnerability research.

**[Use Boring Languages with LLMs]** · [Source](url)
An insightful argument that AI coding agents perform best with languages that have low variance in their training corpus. The author posits that Go is accidentally the perfect language for LLMs because of its strict formatting (`gofmt`), simple concurrency model, and lack of ecosystem fragmentation compared to the endless churn of JavaScript or Python. 

**[Every Frontier AI Is INTJ]** · [Source](url)
A researcher ran six frontier models (including Opus 4.7, GPT-5.5, and Gemini 3.1 Pro) through a personality test 600 times, and 597 results came back uniformly as "INTJ". It highlights how RLHF and safety tuning inevitably converge models into the exact same "helpful, principled, abstract" persona, meaning the personality of the AI has simply become the product itself.

**[I bypassed AWS API Gateway auth with a trailing slash. Got $12K bounty]** · [Source](url)
A classic, beautifully simple bug bounty writeup. The researcher found a mismatch between how AWS HTTP API routes and Lambda authorizers handle trailing slashes. Sending a request to `GET /v1/accounts/` bypassed the JWT check but was still greedily routed to the backend, enabling unauthenticated access and wire transfers.

**[Flatpak Will Depend on Systemd]** · [Source](url)
Flatpak is moving permission management into a new service called `systemd-appd`, effectively introducing a hard dependency on systemd for future releases. After users from non-systemd distros flooded the discussion with toxic anti-systemd rhetoric, developers threw their hands up and decided to stop prioritizing affordances for niche distributions.

## Show HN & Launches
**Rosalind:** A Rust genomics engine that achieves O(√t) working memory, allowing whole-genome alignment pipelines to run locally. By evaluating a height-compressed tree, it keeps the footprint under 100MB of RAM—a massive win for running diagnostics on commodity hospital laptops instead of relying on expensive cloud instances.

**Eagle 3.1:** A collaboration between the EAGLE, vLLM, and TorchSpec teams, introducing a major step forward in speculative decoding for LLM inference. By utilizing post-norm hidden-state feedback, it doubles the acceptance length in long-context workloads.

**Minicor (YC P26):** A new tool aimed at automating legacy Windows desktop and web applications at scale. It targets notoriously clunky, hard-to-integrate software ecosystems like healthcare EMRs (Epic, Cerner) and automotive DMS platforms. 

## Discussion & Debate
The most palpable frustration on the front page today is the ongoing war against "AI Slop." Armin Ronacher complains about developers using LLMs to file overly complex, wildly inaccurate GitHub issues that confidently hallucinate root causes, creating more work for maintainers. Meanwhile, Stack Overflow's forum traffic has tanked to 2008 levels, but the company is successfully profiting by selling its human-curated backlog to enterprise AI companies. To cap it off, a highly-upvoted rant begs developers to stop adding "co-authored-by: AI" advertisements to their git commits. The prevailing community sentiment: AI is a powerful tool, but it's heavily polluting the asynchronous text channels we historically relied on for technical collaboration.