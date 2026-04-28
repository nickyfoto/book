---
title: 2026-04-18
weight: 2
categories: ["News", "Tech"]
tags: ["computer science", "linux", "infrastructure", "software engineering", "privacy"]
---

# Hacker News — 2026-04-18

## Top Story
Michael O. Rabin, co-recipient of the 1976 Turing Award and a giant in computer science, has died at 94. His foundational work on nondeterministic finite automata and the Miller-Rabin primality test fundamentally shaped the trajectory of computational complexity theory and modern public-key cryptography. 

## Front Page Highlights

**[Rewriting Every Syscall in a Linux Binary at Load Time](https://amitlimaye1.substack.com/p/rewriting-every-syscall-in-a-linux)**
Instead of relying on `ptrace` or `seccomp`, this author built a hypervisor shim that replaces the `0F 05` syscall instruction with an `INT3` trap right at load time. It's a brilliantly unhinged but practical approach to sandboxing untrusted AI agent code with sub-microsecond overhead, gaining full execution control without a kernel module.

**[Migrating from DigitalOcean to Hetzner: From $1,432 to $233 With Zero Downtime](https://isayeter.com/posts/digitalocean-to-hetzner-migration/)**
Classic infrastructure optimization detailing a move from expensive cloud droplets to Hetzner dedicated servers, saving over $14k annually for a vastly superior CPU and RAM configuration. The author outlines a meticulous six-phase plan using MySQL master-slave replication and `mydumper` to move 248GB of database payload without dropping a single active request.

**[It’s OK to compare floating-points for equality](https://lisyarus.github.io/blog/posts/its-ok-to-compare-floating-points-for-equality.html)**
A highly readable, contrarian take arguing that blindly tossing an arbitrary `epsilon` into float comparisons is a hacky anti-pattern that obscures underlying logic bugs. By breaking down specific algorithms like spherical linear interpolation and ray-box intersections, the author shows why properly relying on IEEE754 deterministic behavior is better than just guessing a threshold.

**[Casus Belli Engineering](https://marcosmagueta.com/blog/casus-belli-engineering/)**
A sharp organizational critique about developers who weaponize isolated system failures to justify massive rewrites into their preferred tech stack. The piece draws parallels to Girard's scapegoat mechanism, arguing that software movements like "Agile" successfully operated as industrial-scale scapegoating of "Waterfall" processes rather than introducing unprecedented engineering ideas.

**[Amazon won’t release Fire Sticks that support sideloading anymore](https://arstechnica.com/gadgets/2026/04/amazon-wont-release-fire-sticks-that-support-sideloading-anymore/)**
Amazon is aggressively tightening its ecosystem, shifting new Fire Sticks to the proprietary Linux-based Vega OS to completely block Android app sideloading. Combined with the deprecation of the Kindle for PC app to stop DRM stripping, it's a clear, coordinated move to kill alternative app usage and appease copyright holders fighting pirate streaming.

**[Loonies for Loongsons](https://www.leadedsolder.com/2026/04/14/loongson-ls3a5000-debian-linux.html)**
A fascinating salvage-hardware dive into booting a fresh Debian port on a Chinese domestic LoongArch 3A5000 CPU. While the benchmark performance barely edges out a 2007 Core Quad processor, the sheer normalcy of installing Linux on a completely bespoke instruction set architecture showcases the incredible portability of the modern open-source ecosystem.

**[It is incorrect to "normalize" // in HTTP URL paths](https://runxiyu.org/comp/doubleslash/)**
Pure protocol pedantry pointing out that RFC 3986 allows empty path segments, making `//` a syntactically valid and meaningful part of a URI. Tools and web servers that automatically collapse double slashes—like Nginx with `merge_slashes` enabled—are actually altering the identifier in direct violation of standard syntax normalization rules.

## Show HN & Launches
Notable launches today include **[MDV](https://github.com/drasimwagan/mdv)**, a strict CommonMark superset that bakes charts, YAML front-matter, and layouts directly into markdown for reporting and slide generation. We also saw **[Sfsym](https://github.com/yapstudios/sfsym)**, a clever CLI tool that hooks into macOS's private `CUINamedVectorGlyph` APIs to export Apple's locked-down SF Symbols as raw SVG vector paths. Finally, **[Interval Calculator](https://victorpoughon.github.io/interval-calculator/)** is an open-source tool built on IntervalUnion Arithmetic that guarantees correct bounds outputs despite floating-point precision limitations.

## Discussion & Debate
The most heated discourse today surrounds **[Flock's reaction to ALPR spying allegations](https://ipvm.com/reports/flock-allegations-critics)**, after its sales employees were caught inappropriately accessing neighborhood and Jewish Community Center security cameras. Commenters highlighted the stark hypocrisy of Flock's CEO decrying "life-altering" online attacks against his employees, while he routinely and publicly labels privacy advocacy groups as "terrorist organizations".