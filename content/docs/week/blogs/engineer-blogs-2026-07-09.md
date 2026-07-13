---
title: 2026-07-09
weight: 2
categories: ["Blogs"]
tags: ["artificial intelligence", "observability", "markdown", "gaming", "business strategy"]
---

# Engineering Reads — 2026-07-09

## The Big Idea
Predicting complex system outcomes—whether estimating the long-term equilibrium of AI compute markets or debugging the interplay of LLM agents in a terminal—rarely succeeds from a purely bottom-up, theoretical approach. Instead, engineers and strategists must rely on robust instrumentation, structured runtime observation, and top-down heuristics to understand evolving behaviors before they settle into a definitive state.

## Deep Reads

**[Ways to think about token pricing](https://www.ben-evans.com/benedictevans/2026/7/9/ways-to-think-about-token-pricing)** · Benedict Evans
Evans argues that the current AI supply crunch obscures the long-term economic fate of foundation models, questioning whether they will achieve sustainable pricing power or devolve into low-margin commodity infrastructure. He dismisses bottom-up modeling—like estimating chip counts and datacenter capex—as a fool's errand, akin to forecasting the 1998 broadband market. Instead, he proposes focusing on top-down structural questions regarding the durability of the frontier, market competition, and the necessity of software "wrappers" to capture value. The core insight is that unless a massive disruption occurs—such as state regulation or unforeseen network effects—current dynamics suggest models will become commoditized layers where value is captured further up the stack. This is an essential read for anyone trying to model the unit economics of AI features or allocate infrastructure spend over the next five years.

**[Introducing Marked QL — Markdown preview in Finder](https://brett.trpstra.net/link/535/17375515/introducing-marked-ql-markdown-preview-in-finder)** · Brett Terpstra
Terpstra introduces a Mac Quick Look extension that elevates Markdown file previews from raw text to fully rendered documents natively in macOS. Under the hood, it leverages Apex—a unified Markdown processor that cleanly handles complex syntax like Mermaid diagrams, math blocks, and code highlighting. For developers who live in the terminal, it hooks directly into macOS’s `qlmanage` utility, allowing immediate visual verification from the shell without launching a full IDE or browser. It serves as a highly practical example of integrating robust parsing engines seamlessly into native OS workflows without bloated subscriptions. Engineers who rely heavily on local documentation or terminal-centric environments should grab this to drastically reduce the friction of parsing their own READMEs and design docs.

**[The console wars have been lost](https://xeiaso.net/notes/2026/console-wars-lost/)** · Xe Iaso
Iaso asserts that the traditional console market is collapsing under the weight of its own self-sabotage, effectively ceding the gaming generation to Valve and the PC ecosystem. Microsoft is bleeding out its Xbox division through studio decimation and hardware price hikes, while Sony retreats from PC ports to cover massive first-party failures like Concord. The historical technical tradeoff for consumers—sacrificing PC openness for console convenience—is vanishing as Sony raises prices and signals the death of physical media by 2028. By doing nothing but maintaining a stable, open platform, Valve's Steam Machine and Steam Deck concepts become the default winners. Read this if you track platform strategy; it is a masterclass in how closed ecosystems can suffocate themselves by squeezing margins, while an open, patient competitor wins by default.

**[Don’t infer behavior from code, observe it in logs](https://blog.jonudell.net/2026/07/08/dont-infer-behavior-from-code-observe-it-in-logs/)** · Jon Udell
Udell explores a critical failure mode in AI coding agents: their hardwired instinct to read and write code rather than observe runtime logs to understand actual system behavior. While building a complex Rust/JS application that scrapes terminal UIs, he found that interpreting raw PTY byte streams was too brittle due to the messiness of control characters and bracketed paste markers. To fix this, he built a "ladder of evidence"—layers of instrumentation that reconstruct terminal states into an xterm.js grid, allowing programmatic inspection of visible text rather than relying on fragile regexes. By forcing agents to consume this structured telemetry via standard CLI tools (awk, grep), the system's nondeterministic behavior becomes manageable. This piece is mandatory reading for engineers building agentic workflows who need to bridge the gap between static code generation and dynamic runtime verification.

## Connecting Thread
A prominent theme across these pieces is the danger of relying on theoretical structures when reality demands direct observation and open flexibility. Evans and Udell both highlight the futility of predicting complex systems from the bottom up—whether that is modeling AI chip capex or deciphering raw PTY bytes—arguing instead for top-down heuristics and structured runtime logs. Meanwhile, Iaso’s analysis of closed platform monopolies destroying themselves serves as a cautionary tale for Evans's question of whether AI models will achieve sustainable lock-in or simply commoditize themselves.