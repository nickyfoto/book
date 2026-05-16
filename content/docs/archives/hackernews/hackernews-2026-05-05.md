---
title: 2026-05-05
weight: 8
categories: ["News", "Tech"]
tags: ["artificial intelligence", "privacy", "rust", "web browsers", "software engineering"]
---

# Hacker News — 2026-05-05

## Top Story
The single most explosive thread today is a forensic takedown of Google Chrome silently installing a 4 GB Gemini Nano model on users' machines without consent. Beyond the obvious privacy and disk-space outrage, the technical community is digging into the absurdity of the rollout: the highly visible "AI Mode" in the browser's omnibox still routes queries to the cloud, meaning the 4GB local model is a pre-staged, unrequested resource that costs immense global bandwidth for features hidden behind obscure context menus. 

## Front Page Highlights

**[Bun is being ported from Zig to Rust]** · [Source](https://github.com/oven-sh/bun/commit/46d3bc29f270fa881dd5730ef1549e88407701a5)
In a massive shift for the JavaScript runtime ecosystem, a single commit confirms that Bun is being rewritten from Zig to Rust. This is sparking heavy debate about language maturity and ecosystem stability, as Zig loses one of its most high-profile poster children to the Rust juggernaut.

**[Computer Use Is 45x More Expensive Than Structured APIs]** · [Source](https://reflex.dev/blog/computer-use-is-45x-more-expensive-than-structured-apis/)
A pragmatic benchmark finally puts a price tag on the "vision agent" hype. By pitting a browser-use agent against an API-calling agent on the exact same admin panel, the author proves visual UI driving takes 17 minutes and ~550k tokens versus the API's 20 seconds and 12k tokens. The core takeaway is that visual computer use is fundamentally inefficient, and structured APIs remain the correct engineering answer when you control the application.

**[Async Rust never left the MVP state]** · [Source](https://tweedegolf.nl/en/blog/237/async-rust-never-left-the-mvp-state)
A deep, highly technical look into the compiler-level bloat of async Rust. The author breaks down the MIR (Mid-level Intermediate Representation) to show how the generated state machines introduce unnecessary panicking states and fail to inline trivial futures. They've hacked the compiler to test optimizations—saving 2-5% binary size on embedded targets—and are now seeking funding to land a formal fix upstream.

**[When Networking Doesn’t Work]** · [Source](https://www.os2museum.com/wp/when-networking-doesnt-work/)
Classic catnip for low-level debuggers: a saga of tracking down why Windows 11 was silently eating valid UDP packets. After ruling out firewalls and using PktMon to trace the Windows TCP/IP stack, the culprit turned out to be broken IPv4 UDP receive checksum offloading on Intel NICs. It's a great reminder that sometimes, the hardware actually *is* lying to the driver.

**[The Car That Watches You Back]** · [Source](https://nobodyaskedforthis.lol/posts/connected-car/)
A sobering investigation into the advertising infrastructure and telemetry baked into modern vehicles. From 15-second unskippable promotional pop-ups on the Jeep Grand Cherokee's ignition screen to massive data harvesting, the piece details how drive-by-wire and OTA updates have transformed cars from owned property into monetized, data-streaming subscriptions.

## Show HN & Launches
A standout hardware project today is **Biscuit**, a custom firmware fork that turns a cheap $70 Xteink X4 e-ink reader into a Swiss Army knife for wireless recon, complete with WiFi/BLE sniffing and a "Ghost Mode" for MAC rotation. On the AI education front, **Train Your Own LLM from Scratch** is a fantastic workshop repository that walks you through building a ~10M parameter GPT model in PyTorch locally in under an hour. There's also **PII-Shield**, a zero-code distroless Kubernetes sidecar that strips PII from logs before they hit your aggregators, preventing your AI training datasets from getting poisoned. Finally, **Empty Screenings** is a neat little scraper finding AMC movie showings with zero tickets sold—perfect for introverts seeking an empty theater.

## Discussion & Debate
A viral tweet blaming a coding agent for deleting a production database resulted in a heated, highly upvoted pushback from the community. The consensus is clear: "AI didn't delete your database, you did"—if you expose an unauthenticated API endpoint that wipes production, an AI (or a toddler) hitting it is an architecture failure, not a hallucination problem. Elsewhere, a lament about the "MrBeastification of everything" sparked a nostalgic discussion about how the fun and amateur spontaneity has been systematically optimized out of the internet. Finally, the "messy middle" of enterprise AI adoption is generating great insights; engineering leaders are realizing that handing out Copilot licenses without structured "loop intelligence" or rigid agent skills leads to massive unreviewed output but zero actual organizational learning.