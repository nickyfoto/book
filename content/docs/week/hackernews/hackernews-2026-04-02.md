---
title: 2026-04-02
weight: 6
---

# Hacker News — 2026-04-02

## Top Story
The internet is losing its mind over Anthropic's Claude Code NPM CLI "leak," but the real story is that it wasn't a breach at all—just an accidentally published sourcemap on top of publicly accessible NPM packages. The incident has exposed a harsh new reality for frontend engineering: minification is no longer a defense, as LLMs can trivially reverse-engineer bundled JavaScript into readable source in seconds.

## Front Page Highlights

**[LinkedIn Is Illegally Searching Your Computer](https://browsergate.eu/)**
LinkedIn is running a massive, covert surveillance operation that scans users' browsers for competitor sales tools like Apollo and ZoomInfo. By extracting customer lists through hidden scripts to issue enforcement threats, the company is arguably violating privacy laws and actively deceiving EU regulators regarding their Digital Markets Act compliance.

**[Significant Raise of Reports](https://lwn.net/Articles/1065620/)**
An update from the Linux kernel security list reveals that AI-generated bug reports have skyrocketed to 5-10 a day—and unlike past waves of AI slop, these reports are actually accurate. Maintainers predict this incoming flood of valid, machine-found vulnerabilities will permanently kill the practice of security embargoes.

**[Quantum computing bombshells that are not April Fools](https://scottaaronson.blog/?p=9665)**
Scott Aaronson highlights two massive, paradigm-shifting quantum developments: Caltech's new lower-overhead fault tolerance, and Google demonstrating a low-overhead Shor’s algorithm implementation capable of breaking 256-bit elliptic curve cryptography. In an unprecedented move for the field, Google published their result strictly as a cryptographic zero-knowledge proof to avoid handing out the exact exploit circuit.

**[They Planned Their Escape: A Systems Architect’s Guide to the Iran Trade Scandal](https://60tb.tech/posts/iran-trade-scandal)**
A brilliant systems-level analysis treats the US government's recent deregulation like a disabled observability stack. By mapping the systemic gutting of the DOJ, CFTC, and SEC directly to $580 million in suspicious pre-war oil futures and prediction market bets, the author frames geopolitical corruption purely as deliberate software architecture.

**[We sped up bun by 100x](https://vers.sh/blog/git-zig-bun-100x)**
A fascinating post documenting how a swarm of AI agents was used to rewrite Git from scratch in Zig. The resulting implementation compiles to WASM, drops directly into the Bun codebase to replace libgit2, and yields a massive performance boost.

## Show HN & Launches

**[Show HN: I built a DNS resolver from scratch in Rust – no DNS libraries](https://github.com/razvandimescu/numa)**
A masterclass in systems programming packaged in a single ~8MB binary. It parses the RFC 1035 wire protocol by hand, supports local service domains, and offers ad blocking alongside full DNSSEC chain-of-trust validation.

**[Cursor 3](https://cursor.com/blog/cursor-3)**
The heavily-anticipated major update drops the traditional VS Code fork UI for a ground-up, agent-first unified workspace. Engineers can now run multiple local and cloud agents in parallel, featuring seamless handoffs between environments for offline testing and deep-dive editing.

**[Lemonade by AMD](https://lemonade-server.ai)**
AMD officially enters the local AI tooling race with a lightweight, 2MB C++ backend server that utilizes local GPUs and NPUs. It offers out-of-the-box OpenAI API compatibility, targeting seamless local execution for chat, vision, and image generation.

## Discussion & Debate
The Claude Code leak triggered a brutal but necessary reckoning on HN about the value of pristine architecture versus raw product-market fit. Commenters noted that while developers aggressively mocked the "garbage vibe-coded" internal structure revealed by the leak, the product still achieved massive ARR in record time. The community consensus is shifting: in an era of self-healing systems and AI coding assistants, tight integration and fast iteration matter infinitely more than character-by-character code quality.