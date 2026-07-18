---
title: 2026-07-14
weight: 3
categories: ["Blogs"]
tags: ["artificial intelligence", "software engineering", "cybersecurity", "distributed systems"]
---

# Engineering Reads — 2026-07-14

## The Big Idea
Modern software engineering increasingly demands building robust architectural boundaries around inherently untrustworthy or chaotic inputs—whether constraining unpredictable LLMs with rigid Domain-Specific Languages, intentionally leveraging replay attacks for stateless authentication, or defending against a massive wave of web scraping originating from compromised residential appliances.

## Deep Reads

**[DSLs Enable Reliable Use of LLMs](https://martinfowler.com/articles/llm-and-dsls.html)** · Unmesh Joshi · MartinFowler.com
While Large Language Models generate code incredibly fast, they require clear, strict boundaries to ensure the output is reliable and matches intended behavior. Abstractions and Domain-Specific Languages (DSLs) provide a strong harness that guides LLMs right from the start. Using the example of Tickloom—a domain model for illustrating distributed system behavior—Joshi demonstrates using an LLM as a partner to iteratively build and interface with a formal DSL. The core tradeoff is that teams must invest upfront in building this DSL to act as the primary source of truth, rather than relying directly on raw, stochastic LLM output. Software engineers integrating AI into complex or critical workflows should read this to see how formal modeling principles remain essential in the age of generative AI. 

**[An update on Marked QL](https://brett.trpstra.net/link/535/17380285/an-update-on-marked-ql)** · Brett Terpstra · BrettTerpstra.com
Raising software prices can be a highly effective, counter-intuitive mechanism to manage technical debt and support burdens for solo developers. Terpstra intentionally doubled the price of his Marked QL app to artificially decrease sales volume, aiming to attract more invested customers and reduce immediate support requests while he irons out initial bugs. A significant driver of these support issues highlights deep platform friction in macOS: competing applications frequently write their own custom Uniform Type Identifiers (UTIs) for Markdown files, which breaks file associations for generic previewers. The strategy sacrifices immediate top-line revenue for sustainable maintenance and sanity. Independent makers and system-level developers should read this for a candid look at pricing experiments and the hidden ecosystem debt caused by non-standardized file typing.

**[Presigned URLs are technically a security vuln](https://www.tigrisdata.com/blog/presigned-urls-security-vuln/)** · Tigris Data · Tigris Data Blog
Presigned URLs intentionally embrace the mechanics of a replay attack to create a stateless, highly scalable capability grant. Traditional anti-replay mechanisms require baking a one-time nonce into a signature, which forces backend systems to maintain millions of live nonces across distributed frontend nodes—a notoriously difficult state coordination problem. AWS SigV4 brilliantly bypasses this requirement by signing the current timestamp directly into the request, relying entirely on globally synchronized NTP clocks to organically and statelessly invalidate old signatures. The tradeoff for this elegant design is a lack of granular revocability; you cannot easily revoke a single presigned URL without destroying the root access key, and the URLs are inherently born to leak. Backend and infrastructure engineers should read this to deeply understand how relaxing strict security paradigms and relying on existing infrastructure guarantees (like the clock) can elegantly solve distributed state problems.

**[You should probably check on your smart appliances](https://xeiaso.net/notes/2026/check-your-smart-tv/)** · Xe Iaso · XeIaso.net
The modern web scraping problem is incredibly vast and appears to be largely powered by compromised consumer electronics acting as proxy networks. By injecting a honeypot of semantically invalid HTML into challenge pages for the Anubis web application firewall, Xe Iaso trapped badly written scrapers to analyze their origins. The resulting data showed that a staggering 89.3% of malicious hits originated from IP addresses completely absent from traditional threat monitoring lists. The global distribution of these IPs across standard telecommunications ASNs strongly suggests bot traffic has shifted away from centralized data centers toward hacked consumer smart appliances. Security engineers and web operators should read this to fundamentally update their threat models; traditional IP-reputation blocking is increasingly useless against distributed residential proxies, necessitating behavioral analysis instead.

## Connecting Thread
A recurring theme across these pieces is the necessity of leaning on well-defined architectural guardrails to manage chaotic environments. Whether it is the strict grammatical bounds of a DSL guiding an unpredictable LLM, the reliance on universal NTP clock synchronization to safely utilize replay attacks without state, or deploying behavioral honeypots because traditional IP reputation lists are defeated by consumer proxy networks—these authors demonstrate that modern systems engineering relies on smart systemic constraints rather than brute-force operational effort.