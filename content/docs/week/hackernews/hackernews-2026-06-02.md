---
title: 2026-06-02
weight: 3
categories: ["News", "Tech"]
tags: ["artificial intelligence", "hardware", "privacy", "apple", "software engineering"]
---

# Hacker News — 2026-06-02

## Top Story
The community is rallying behind beloved hardware maker Adafruit after they received a cease-and-desist letter from Flux.ai's legal counsel invoking the Computer Fraud and Abuse Act. Adafruit had simply reported on information exposed by Flux's own misconfigured server during routine responsible disclosure, making this a textbook case of shooting the messenger and a guaranteed trigger for the Streisand effect. 

## Front Page Highlights

**[Fooling around with encrypted reasoning blobs](https://blog.cryptographyengineering.com/2026/05/29/fooling-around-with-encrypted-reasoning-blobs/)** · Cryptography Engineering
A fascinating weekend project reverse-engineering the encrypted "chain of thought" JSON blobs that OpenAI and Anthropic send to API clients. The author discovered that while the blobs are authenticated, they can be replayed out of order or even across completely different user accounts, exposing potential side-channel leaks that could be exploited to extract model secrets.

**[AI Doesn’t Have ROI](https://www.wheresyoured.at/ai-doesnt-have-roi/)** · wheresyoured.at
A massive, contrarian takedown of the AI hype cycle, arguing that the true cost of token-based billing is finally hitting enterprise customers who are now pulling back on usage. The author makes the compelling case that AI companies have intentionally obfuscated inference costs to drive adoption, and that the underlying business model is fundamentally broken because it doesn't leave behind reusable infrastructure the way the Dot Com boom did.

**[A new way to build chips: Sequentially stacking silicon](https://matse.illinois.edu/news/85775)** · Illinois Grainger Engineering
Researchers have demonstrated a scalable process for monolithic 3D integration of silicon transistors using ultrathin nanomembranes. By utilizing junctionless transistors and a low-temperature process under 200 degrees Celsius, they stacked three layers of high-performing circuitry, offering a viable path to extend Moore's Law without destroying the underlying thermal budget.

**[Cloudflare CDN Pricing 2026: Real Cost per GB](https://blog.blazingcdn.com/en-us/what-is-the-price-per-gb-of-cloudflare-cdn)** · BlazingCDN
A necessary reality check on Cloudflare's "free bandwidth" promise for the modern web. Once you step outside pure caching and enable add-ons like Argo Smart Routing, R2, or Workers, the effective cost per GB can skyrocket, making volume-priced CDNs significantly cheaper for heavy edge-compute workloads.

**[Apple rejected my dictation app for using the accessibility API](https://www.mitmllc.com/blog/apple-rejected-my-dictation-app/)** · mitmllc.com
An indie developer built a local voice transcription tool to cope with a repetitive strain injury, only to have Apple reject it for using the accessibility API to paste text into other apps. It's a classic App Store review nightmare that forced the author to split the product into a compromised Mac App Store version and a fully functional direct-download version.

**[Preparing for KDE Plasma’s Last X11-Supported Release](https://blog.davidedmundson.co.uk/blog/596/)** · David Edmundson
After 15 years of transitioning, KDE Plasma 6.8 will officially drop X11 support, removing the X11 login session entirely and cleaning up legacy code paths. With internal telemetry showing over 95% of Plasma 6.6 users are already on Wayland, the developers are finally freeing themselves from maintaining dual codebases to focus purely on modern display server optimizations.

## Show HN & Launches

**[Chipotlai Max](https://github.com/cyberpapiii/chipotlai-max)**
A hilarious "meme fork" of OpenCode that reverse-engineered Chipotle's customer support bot to extract free LLM inference. While it's a blatant TOS violation that will likely earn a cease-and-desist, it's a clever hack that exposes the vulnerabilities of serving unrestricted AI agents to the public web.

**[Muxcard, a dyi credit card size computer](https://github.com/krauseler/muxcard)**
An incredibly impressive hardware project packing an ESP32-C3, an e-paper display, and an NFC reader into a fully functional computer that is exactly 1mm thick. The creator even manufactured their own custom flex PCBs using a 3D printer as a lithography machine to overcome mechanical stress and thickness constraints.

**[macOS Needs Its Grid Back](https://blog.hopefullyuseful.com/blog/macos-needs-its-grid-back/)**
A developer built a native utility called GridLion to restore the 2D grid layout for virtual desktops that Apple abandoned after macOS Leopard. A great example of using modern LLM assistance to build a highly polished, niche system utility that scratches a specific itch.

## Discussion & Debate

**[Age verification for social media, the beginning of the end for a free internet?](https://mullvad.net/en/blog/age-verification-for-social-media-the-beginning-of-the-end-for-a-free-internet)**
Mullvad VPN published a chilling breakdown of how global age verification laws are laying the groundwork for state-controlled internet surveillance. The comments are debating the technical feasibility of Zero-Knowledge Proofs versus the political reality that these laws functionally ban anonymous speech and actively threaten basic privacy tools like VPNs.

**[What’s gonna happen to software engineers?](https://yakko.dev/blog/whats-gonna-happen-to-software-developers)**
A pragmatic look at how the AI coding boom will split developers into "means to an end" product builders and hardcore algorithm optimizers. The thread is full of engineers debating whether coding is truly "solved" and if the future involves managing swarms of AI agents like a product manager rather than writing syntax manually.