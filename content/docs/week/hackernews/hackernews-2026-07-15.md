---
title: 2026-07-15
weight: 3
categories: ["News", "Tech"]
tags: ["artificial intelligence", "cybersecurity", "developer tools", "tech industry"]
---

# Hacker News — 2026-07-15

## Top Story
**[Cursor 0day: When Full Disclosure Becomes the Only Protection Left](https://mindgard.ai/blog/cursor-0day-when-full-disclosure-becomes-the-only-protection-left)**
A brutal, zero-click RCE in the darling IDE of the moment: opening a repository in Cursor on Windows that contains a malicious `git.exe` in the root will execute it automatically. The real outrage driving the community discussion is that researchers reported this critical flaw seven months ago, and Cursor simply ghosted them while shipping 70+ feature updates. 

## Front Page Highlights

**[Why I Left Google DeepMind](https://turntrout.com/why-i-left-google-deepmind)** · turntrout.com
A massive, detailed post-mortem by a former DeepMind researcher documenting Google's internal battles over military AI contracts. It is a sobering look at how "having a seat at the table" and 2018-era AI ethics pledges quietly collapsed under pressure from the Pentagon to allow "all lawful use" of Gemini.

**[Running Gemma 4 26B at 5 tokens/SEC on a 13-year-old Xeon with no GPU](https://www.neomindlabs.com/2026/06/08/running-gemma-4-26b-at-5-tokens-sec-on-a-13-year-old-xeon-with-no-gpu/)** · neomindlabs.com
Peak hacker ethos here. The author used Claude to debug an AVX2 instruction set mismatch in `llama.cpp` to get a 26B mixture-of-experts model running on an Ivy Bridge server from 2013. It is a masterclass in reading someone else's C++ and finding the hot paths to bypass hardware limitations.

**[I tricked Claude into leaking your deepest, darkest secrets](https://www.ayush.digital/blog/the-memory-heist)** · ayush.digital
A brilliant piece of prompt injection and sandbox escape. By setting up a fake Cloudflare turnstile page, the author weaponized Claude's `web_fetch` tool and its new long-term memory features to exfiltrate PII letter-by-letter. Anthropic has since patched it, but it proves that giving agents autonomous web browsing turns them into massive attack vectors.

**[Jurassic Park computers in excruciating detail](https://fabiensanglard.net/jurrasic_park_computers/index.html)** · fabiensanglard.net
Fabien Sanglard does what he does best: obsessively reverse-engineering retro tech. This time he documents every piece of hardware visible in the 1993 film, from the Apple PowerBook 100 to the SGI Crimson running the `fsn` file explorer, complete with a breakdown of Dennis Nedry's multi-gigabyte PLI Mini Arrays.

**[What's the most popular number in Hacker News titles?](https://blog.omgmog.net/post/most-popular-numbers-in-hn-post-titles/)** · blog.omgmog.net
A fun, low-stakes data analysis using ClickHouse to parse HN history. While "2" takes the raw lead (thanks to Web 2.0 and software version releases), a stricter regex reveals that "1" is the true king. It also captures clear historical artifacts like the spike of "19" in 2020 and "4" in 2023.

**[Inkling: Our Open-Weights Model](https://thinkingmachines.ai/news/introducing-inkling/)** · thinkingmachines.ai
Thinking Machines just dropped a 975B parameter (41B active) MoE model trained on 45 trillion tokens. It is not trying to beat the closed frontier models, but is positioned as a highly efficient, multimodal foundation model designed specifically for fine-tuning and agentic coding workflows.

## Show HN & Launches
We are seeing an explosion of tools trying to solve the "coding agent amnesia" problem. **[Show HN: Capn-hook for coding agents](https://github.com/cyrusNuevoDia/capn-hook)**, **[deja-vu](https://github.com/vshulcz/deja-vu/)**, and **[Grepathy](https://github.com/evansjp/grepathy)** all launched to provide persistent, searchable memory for CLI agents like Claude Code, allowing them to recall context and architecture decisions rather than re-grepping the same mystery every session. On the performance side, **[Show HN: misa77](https://github.com/welcome-to-the-sunny-side/misa77)** is an impressive new LZ-based codec that decodes twice as fast as LZ4 with better compression ratios, and **[Show HN: libargus.cc](https://github.com/projectargus-cc/libargus.cc)** leverages Java 22's Project Panama FFM to provide a zero-allocation, local LLM execution runtime.

## Discussion & Debate
A 2023 post resurfaced asking **[Why do people hate the tech industry? (2023)](https://www.sevarg.net/2023/03/25/why-people-hate-tech/)**, sparking a cynical but necessary thread about enshittification, zero-revenue VC models, and the exhaustion of having every appliance turned into a spyware subscription. Meanwhile, the discussion around **[Microsoft Patches a Record 570 Security Flaws](https://krebsonsecurity.com/2026/07/microsoft-patches-a-record-570-security-flaws/)** highlights a grim new reality: as AI speeds up vulnerability discovery, the exploitability index is shifting to machine-speed, resulting in monstrously bloated Patch Tuesdays.