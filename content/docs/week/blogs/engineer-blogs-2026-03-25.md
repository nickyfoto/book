---
title: 2026-03-25
weight: 1
---

# Engineering Reads — 2026-03-25

## The Big Idea
The infusion of LLM-generated code into foundational open-source projects is triggering ideological forks from developers who view AI as a severe ethical and ecological liability. The tradeoff is clear: preserving strict software provenance and ideological boundaries at the cost of abandoning modern language features, plugin compatibility, and upstream momentum.

## Deep Reads

**[A eulogy for Vim]** · Drew DeVault · [Source](https://drewdevault.com/2026/03/25/2026-03-25-Forking-vim.html)
Drew DeVault announces "Vim Classic," a hard fork of the text editor born out of a stark rejection of Generative AI in the software development process. Arguing that both upstream Vim and NeoVim are now compromised by LLM-authored code—which he characterizes as "slop"—DeVault positions the fork as a moral necessity against the AI industry's severe environmental footprint and social externalities. Technically, Vim Classic is deliberately branched from Vim 8.2.0148, the exact patch immediately preceding the introduction of Vim9 Script. This provides a clean technical line of demarcation that supports legacy plugins but intentionally drops modern language additions to reduce the ongoing maintenance burden. DeVault is currently backporting security CVEs and updating build tooling, fully accepting the deliberate tradeoff of a "slow and quiet" maintenance lifecycle and broken compatibility with some modern plugins like `fzf.vim`. This is a highly recommended read for software engineers and open-source maintainers observing the emerging fragmentation of toolchains based on AI adoption and ethical provenance.