---
title: 2026-09-01
weight: 2
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "generative-ai", "developer-tools", "reverse-engineering"]
---

Here is your developer-centric digest of Simon Willison's blog for September 1, 2026, capturing key AI benchmarks, local desktop tooling audits, and continuous integration tips.

# Simon Willison — 2026-09-01

## Highlight
Simon's hands-on evaluation of the newly released **Claude Fable 5.1** puts its five reasoning effort levels to the test using his signature "pelican riding a bicycle" SVG benchmark. This deep dive reveals massive performance, cost, and design differences across settings, culminating in a highly impressive animated SVG.

## Posts

**Claude Fable 5.1 made me a really nice animated pelican** · [Source](https://simonwillison.net/2026/Sep/1/claude-fable-5-1/)
Simon dives deep into Anthropic's new **Claude Fable 5.1**, testing its new five-tiered reasoning effort settings (**low, medium, high, xhigh, and max**) using his signature "pelican riding a bicycle" SVG generator benchmark. While the low and medium settings mysteriously skipped reasoning entirely, ramping up the setting to "xhigh" and "max" yielded an incredibly detailed SVG at a heavy price of **\$1.83 (7m 51s)** and **\$3.30 (13m 54s)** respectively. Using his CLI tool `llm-anthropic` (where he patched a bug to log reasoning traces), Simon studied the reasoning transcripts, which revealed the model actively debating design trade-offs like placing a bicycle helmet over the pelican's crest. He then took the static "max" pelican and piped it back into the model at the default "high" reasoning level to generate a **fully animated SVG version** for just **\$1.37**.

**Codex bundles LibreOffice** · [Source](https://simonwillison.net/2026/Sep/1/codex-libreoffice/)
While auditing his local macOS `~/.cache/` directory with **OmniDiskSweeper**, Simon discovered that OpenAI's ChatGPT desktop application (formerly Codex) stores a massive **1.7GB local runtime**. This runtime (`codex-primary-runtime`) bundles surprisingly heavy open-source software, including **full Python and Node.js environments**, plus native binaries for **git, Poppler, and the LibreOffice suite**. Further inspection revealed local skill files that instruct Codex exactly how to locate and orchestrate these binaries to automate document processing. This highlights a growing trend of "AI" desktop tools shipping heavy-duty, traditional CLI utilities under the hood to perform local tool-use tasks.

**Python 3.15.0 candidate 2 is here!** · [Source](https://simonwillison.net/2026/Sep/1/python-315-rc-2/)
Release manager Hugo van Kemenade has announced the final release candidate for **Python 3.15**, slated for official release in October. Recalling a bug he missed in Python 3.10 because he failed to test during its RC phase, Simon strongly urges developers and library maintainers to run their test suites against RC2 and publish Python 3.15 wheels early. To make this frictionless, he shares how to leverage the `allow-prereleases` and `check-latest` flags within **GitHub Actions** CI matrices to start testing immediately.

**Quoting Tarn Adams** · [Source](https://simonwillison.net/2026/Sep/1/tarn-adams/)
Simon highlights a poignant quote from *Dwarf Fortress* co-creator **Tarn Adams**, who rails against the tech industry's obsession with generative AI and layoff-happy leadership. Adams emphasizes that the complex behaviors of dwarfs in his game are not driven by "AI" as the marketing buzzword defines it, but rather authored **"dwarf behavior" mechanics** that occasionally misbehave. This quote highlights the growing fatigue among developers and game designers regarding the conflation of traditional programmatic systems with modern LLMs.

## Project Pulse
Today's posts reveal a strong focus on the engineering realities and hidden plumbing of modern software, spanning hands-on cost and capability tests of frontier reasoning models, local cache bundle audits, and proactive continuous integration testing for Python 3.15.

***

🐍 **Ready to set up your own test matrix for Python 3.15?** I can generate a pre-configured GitHub Actions workflow file incorporating Simon's recommended CI setup for your Python projects.