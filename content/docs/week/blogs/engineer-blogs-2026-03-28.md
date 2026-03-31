---
title: 2026-03-28
weight: 2
---

# Engineering Reads — 2026-03-28

## The Big Idea
Unix pipelines remain an incredibly powerful abstraction for bypassing complex, specialized tools. Stringing together fundamental utilities like `tar` and `ssh` often provides a more predictable mental model for file transfers than wrestling with the idiosyncratic syntax of dedicated synchronization tools like `rsync`.

## Deep Reads

**[tar: a slop-free alternative to rsync](https://drewdevault.com/2026/03/28/2026-03-28-rsync-without-rsync.html)** · Drew DeVault
The author argues for substituting `rsync` with a simple `tar` pipeline over SSH when migrating directories between hosts. While acknowledging the obvious tradeoff—`tar` transmits the entire payload rather than calculating deltas to skip up-to-date files—he highlights that `tar` provides a far simpler mental model for path resolution. `rsync` is infamous for its finicky trailing-slash rules that dictate exactly where files end up. In contrast, `tar` predictably extracts exactly the paths provided to the creation command, rooted in a working directory that can be cleanly manipulated via the `-C` flag. The post also demonstrates how easily this approach composes with other standard Unix utilities, such as injecting `pv` into the pipeline for a lightweight progress display or utilizing `-z` for gzip compression. Engineers who regularly perform bulk server-to-server copies and are tired of second-guessing `rsync` syntax should read this for a refreshing return to Unix fundamentals, and may also be interested in the author's lightweight `rtar` wrapper program.