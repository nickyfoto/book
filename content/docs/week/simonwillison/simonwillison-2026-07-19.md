---
title: 2026-07-19
weight: 7
categories: ["Blogs", "AI", "Tech"]
tags: ["ai", "rust", "bun", "claude-code"]
---

# Simon Willison — 2026-07-19

## Highlight
Simon's quick investigation into Claude Code's internals is a classic example of his "poke at it and see" ethos, successfully verifying that the new Rust port of Bun is quietly powering the popular AI CLI tool in production. 

## Posts

**[Claude Code uses Bun written in Rust now](https://simonwillison.net/2026/Jul/19/claude-code-in-bun-in-rust/#atom-everything)**
Simon puts his sleuthing hat on to verify Jarred Sumner's claim that Claude Code is now running on a Rust port of Bun. By inspecting his own Claude Code installation, he found it running an unreleased Bun v1.4.0 and discovered hundreds of Rust source filenames. It's a neat bit of validation showing that this major architectural rewrite is already running reliably across millions of devices, proving that "boring is good".

**[AI Mania Is Eviscerating Global Decision-Making](https://simonwillison.net/2026/Jul/19/ai-mania/#atom-everything)**
Simon shares and highlights an entertaining, anecdote-packed piece by Nik Suresh about the absurdities of corporate AI hype. The post calls out extreme behavior, from executives writing $2B AI strategies without ever touching ChatGPT, to engineers gaming "token leaderboards" by uselessly rewriting code in Zig just to keep their jobs. Simon particularly notes the systemic issue where vendors cannot correct absurd 100x productivity claims because doing so would undermine customer executives and risk lucrative enterprise contract cancellations.

## Project Pulse
Today's posts showcase Simon's dual role in the current ecosystem: enthusiastically digging into the technical reality of new AI developer tools while keeping a sharply critical eye on the surrounding corporate hype.