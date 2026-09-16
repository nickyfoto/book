---
title: 2026-09-13
weight: 2
categories: ["Blogs", "AI", "Tech"]
tags: ["developer tools", "cli tools", "python", "web capture", "webp"]
---

# Simon Willison — 2026-09-13

## Highlight
Simon released **shot-scraper 1.12**, adding WebP screenshot support to his automated browser screenshot CLI tool. This update enables quality-controlled or lossless WebP capture, delivering significantly smaller output file sizes for automated web documentation and tooling workflows.

## Posts

**shot-scraper 1.12** · [Source](https://simonwillison.net/2026/Sep/13/shot-scraper/)
Simon updated his Playwright-backed screenshot CLI tool, **shot-scraper**, to version 1.12 with native support for WebP image output. Users can now capture WebP screenshots using `-o screenshot.webp`, with optional quality tuning via `--quality <int>` or default lossless compression when omitted. WebP captures consistently yield significantly smaller file sizes compared to traditional PNG or JPEG files. Simon shipped this feature specifically to automate generating screenshots for his new commit-rewriter tool.

## Project Pulse
This release highlights Simon's habit of building sharp, single-purpose CLI tools and rapidly extending them to fulfill immediate needs in his broader developer workflow.

💡 Would you like me to compile a handy cheat sheet of **shot-scraper** CLI options and usage examples?