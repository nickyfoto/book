---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["artificial intelligence", "mobile development", "webassembly", "cybersecurity"]
---

# Simon Willison — 2026-09-10

## Highlight
**Shopify's decision to transition from React Native back to native iOS and Android codebases marks a major shift in engineering strategy driven directly by AI coding agents.** **By offloading cross-platform implementation, code translation, and testing to AI agents, Shopify demonstrated how AI tooling is actively redefining software architecture trade-offs.**

## Posts

**[Native is now the future of mobile at Shopify](https://simonwillison.net/2026/Sep/10/shopify-react-native/)** · [Shopify Engineering](https://shopify.engineering/back-to-native)
**Shopify announced it is moving away from React Native back to separate native Swift and Kotlin codebases after using cross-platform tooling since 2020.** While React Native originally helped avoid building features twice, Shopify noted that modern AI agents can now handle much of the implementation, translation, testing, and code review across both platforms. Simon highlights this post as a well-written reflection that credits React Native while illustrating how AI agents neutralize dual-platform maintenance costs. Additionally, Shopify is transitioning its open-source libraries by finding new homes for `react-native-skia` and `flash-list`, while archiving `restyle`.

**[Quoting Calif Research](https://simonwillison.net/2026/Sep/10/calif-research/)** · [Calif Research](https://calif.io/research/weworm)
**Calif Research showcased WeWorm, a zero-click remote code execution worm that spreads through WeChat calls on iOS and Android without requiring victim interaction.** By leveraging AI throughout their research workflow, a small team identified the bug and developed an RCE exploit in just two days, completing the entire worm in one week. Simon highlights the research to demonstrate how AI significantly compresses exploit timelines and lowers barriers in offensive security, shifting human effort primarily to strategic judgment and safety testing.

**[Any Nix package, live in your browser](https://simonwillison.net/2026/Sep/10/trynix/)** · [Farid Zakaria](https://fzakaria.com/2026/09/04/any-nix-package-live-in-your-browser)
**Farid Zakaria released trynix.dev, an impressive WebAssembly project that runs a qemu-wasm powered x86_64 Linux virtual machine entirely inside the browser.** The tool enables users to boot an interactive shell for any Nix package published over the past 13 years directly via URL parameters. Simon points out practical developer workflows built on this infrastructure, such as the `trynix-preview` GitHub Action which allows developers to review pull requests by booting the build directly in a browser VM without server setup.

## Project Pulse
**A prominent theme across today's posts is how AI agents and browser-native virtual execution are changing software development workflows.** **Whether removing cross-platform mobile maintenance friction at scale or drastically accelerating security research, AI tooling is shifting developer focus toward high-level judgment and system oversight.**

***

🛠️ Would you like to explore how other teams are using AI coding agents for platform migrations, or should we look into how `trynix` utilizes WebAssembly for in-browser isolation?