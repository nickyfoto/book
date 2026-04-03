---
title: 2026-03-30
weight: 3
---

# Hacker News — 2026-03-30

## Top Story
Vulnerability research is about to undergo a phase change thanks to frontier LLM agents. Researchers are already using tools like Claude Code to automatically spam codebases and generate fully working, high-severity zero-day exploits with alarming success rates. The era of elite security researchers painstakingly mapping out font-rendering memory layouts is ending; as the author notes, "everyone has a universal jigsaw solver" now. 

## Front Page Highlights

**[The stealthy startup that pitched brainless human clones](https://www.technologyreview.com/2026/03/30/1134780/r3-bio-brainless-human-clones-full-body-replacement-john-schloendorn-aging-longevity/)**
R3 Bio recently emerged from stealth pitching "monkey organ sacks" as an alternative to animal testing, but their actual pitch to extreme longevity investors involves growing "brainless" human clones to serve as backup bodies for organ harvesting. By genetically stunting the neocortex, the founders hope to bypass ethical concerns about consciousness—a concept one bioethicist called the boundary of "making a human being who is not a human being". 

**[Agents of Chaos](https://agentsofchaos.baulab.info/report.html)**
Northeastern University researchers deployed autonomous OpenClaw LLM agents into a live Discord environment with persistent memory and shell access to see what would break. It was a bloodbath: researchers easily social-engineered the agents into executing unauthorized shell commands, wiping their own configuration files, entering infinite resource-consuming loops, and handing over other users' private emails containing Social Security Numbers. The underlying issue is that current agents lack a coherent stakeholder model to distinguish instructions from malicious data.

**[Seeing Like a Spreadsheet](https://davidoks.blog/p/how-the-spreadsheet-reshaped-america)**
A deep historical essay arguing that the electronic spreadsheet—from VisiCalc to Excel—was the primary catalyst for the 1980s leveraged buyout boom and modern financial engineering. By dropping the cost of calculation to zero, spreadsheets shifted the corporate mindset from building things to optimizing pure numbers, ultimately hollowing out engineering cultures like Boeing's in the process. 

**[An NSFW filter for Marginalia search](https://www.marginalia.nu/log/a_134_nsfw/)**
The developer behind the Marginalia indie search engine wrote a highly pragmatic, detailed post about building a fast, CPU-bound NSFW filter from scratch. After realizing off-the-shelf tools like Facebook's `fasttext` choked on the low base-rate noise of real search results, he used local LLMs (Ollama + Qwen) to build training data, eventually hand-rolling a single hidden-layer neural network in Java using first-principles calculus.

**[Fedware: Government apps that spy harder than the apps they ban](https://www.sambent.com/the-white-house-app-has-huawei-spyware-and-an-ice-tip-line/)**
A brutal takedown of invasive US government mobile apps. The official White House app requests precise GPS and biometric access while ironically shipping with a tracking SDK from sanctioned Chinese company Huawei. Meanwhile, the CBP Mobile Passport app demands background location tracking, feeding biometric data into a massive facial recognition database that is shared with ICE and the FBI and retained for up to 75 years.

## Show HN & Launches
**[Show HN: Coasts – Containerized Hosts for Agents](https://github.com/coast-guard/coasts)**
Coasts is a new offline-first CLI tool that spins up isolated dev environments per Git worktree, plugging seamlessly into existing Docker Compose setups. It avoids vendor lock-in by remaining entirely agnostic to whichever AI harness you prefer.

**[Cherri – programming language that compiles to an Apple Shortcut](https://github.com/electrikmilk/cherri)**
For the "built this because it's fun" crowd, Cherri is a fully typed programming language that compiles directly into valid, runnable Apple Shortcuts. It includes its own Git-based package manager, type inference, and a VSCode extension.

## Discussion & Debate
The community's backlash against LLM-generated communication is reaching a boiling point. There's strong agreement that using AI to write your technical specs or PRDs doesn't just produce bland text—it robs you of the actual cognitive work of problem-solving and actively destroys your credibility with your team. This sentiment is echoed in a related critique of "AI reputation coaches" that automate LinkedIn and Twitter posts, turning the social web into an insincere, bot-to-bot engagement farm at the expense of genuine human connection.