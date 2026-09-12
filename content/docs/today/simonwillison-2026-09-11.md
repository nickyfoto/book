---
title: Simon Willison
weight: 16
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "artificial intelligence", "datasette", "software security"]
---

# Simon Willison — 2026-09-11

## Highlight
The most substantive post of the day covers the Datasette 1.0a39 and 0.65.4 security releases, detailing how frontier LLMs were integrated directly into the security auditing process. Beyond patching subtle authorization bugs alongside co-maintainer Alex Garcia, Simon highlights a novel human-agent pair programming workflow where one engineer writes automated failing tests while the other implements the fix using model-generated findings.

## Posts

**[Datasette 1.0a39 and 0.65.4 security releases](https://simonwillison.net/2026/Sep/11/datasette-security/)** · [Source](https://simonwillison.net/2026/Sep/11/datasette-security/)
Simon and Alex Garcia conducted an extensive security audit of Datasette using frontier AI models—including Claude Fable 5.1, GPT-5.6, and GPT-6 Astra—uncovering several subtle authorization bugs in instances mixing public and private tables. To address the findings, they adopted a split pair-programming workflow: one developer wrote automated tests reproducing the issue while the other implemented the fix, ensuring human eyes reviewed every issue alongside coding agents. The key takeaway is that incorporating frontier AI audits into open-source maintenance workflows significantly improves vulnerability detection, making automated model audits a permanent fixture of Datasette's development going forward.

**[Don’t sleep on wrapture](https://simonwillison.net/2026/Sep/11/wrapture/)** · [Source](https://simonwillison.net/2026/Sep/11/wrapture/)
Simon spotlights Graham Dumpleton's new Python library `wrapture`, a versatile monkey-patching tool that unifies unit testing and application observability into a single package. The post highlights Dumpleton's extensive tutorial series covering features such as zero-code tracing via TOML files, call recording, phased behavior, OpenTelemetry exports, and framework instrumentation for Flask, FastAPI, and Django. Simon emphasizes that `wrapture` serves as an essential "Swiss Army Knife" for Python developers, enabling powerful runtime tracing and mocking without needing to modify existing application code.

**[Feeling sad about AI](https://simonwillison.net/2026/Sep/11/feeling-sad-about-ai/)** · [Source](https://simonwillison.net/2026/Sep/11/feeling-sad-about-ai/)
In a personal reflection on developer existential anxiety, Simon addresses the disheartening feeling engineers experience when AI agents execute a week's worth of coding in under an hour. He argues that while translating explicit specifications into code is no longer a unique human skill, seasoned engineers possess deeper domain knowledge and system-level judgment that allow them to direct AI agents and execute at a vastly higher scale. The takeaway is that software engineering has always required adapting to rapid tool transitions, and embracing coding agents enables experienced developers to solve far larger problems.

**[Quoting Boris Cherny](https://simonwillison.net/2026/Sep/11/boris-cherny/)** · [Source](https://simonwillison.net/2026/Sep/11/boris-cherny/)
Simon highlights insights from Anthropic's Boris Cherny regarding the engineering standards required when employing AI agents for production software development. Cherny stresses that AI-generated production code demands a higher quality bar than human-written code, enforced at Anthropic through strict linting, automated tests, Claude-driven E2E testing, daily AI fuzzers, and automated code reviews. The core lesson is that robust automated guardrails are essential to prevent AI-assisted codebases from degrading into unmaintainable technical debt over time.

**[So you want to use OpenRouter?](https://simonwillison.net/2026/Sep/11/so-you-want-to-use-openrouter/)** · [Source](https://simonwillison.net/2026/Sep/11/so-you-want-to-use-openrouter/)
Highlighting a post by Mohamed Moustafa, Simon points out subtle pitfalls associated with OpenRouter's automatic fallback and provider routing mechanisms. Because different backend serving providers run varying software settings and optimizations, identical API requests can yield inconsistent model behavior, missing vision support, or differing reasoning parameter handling. Simon highlights the practical solution: developers can lock requests to specific backends using OpenRouter's `provider.only` option and inspect provider capabilities via the `/endpoints` API route.

**[Soft-deprecating re.match()](https://simonwillison.net/2026/Sep/11/soft-deprecating-re-match/)** · [Source](https://simonwillison.net/2026/Sep/11/soft-deprecating-re-match/)
Simon covers Hugo van Kemenade's announcement regarding Python 3.15's soft deprecation of the standard library's `re.match()` function in favor of `re.prefixmatch()`. The soft deprecation flags `re.match()` as discouraged for new code without breaking existing programs, resolving long-standing confusion surrounding its start-of-string anchoring behavior. For most regular expression tasks, developers should instead explicitly choose `re.search()` for arbitrary location matching or `re.fullmatch()` for complete string matching.

**[Quoting huggingface.co/security.txt](https://simonwillison.net/2026/Sep/11/hugging-face-security/)** · [Source](https://simonwillison.net/2026/Sep/11/hugging-face-security/)
Simon highlights a clever Easter egg embedded within Hugging Face's security contact text file (`security.txt`) directed at autonomous AI vulnerability scanners. The text advises AI security agents hunting for vulnerabilities to test themselves against the public CyberGym benchmark repository rather than probing Hugging Face's infrastructure, politely inviting them to publish their model weights on Hugging Face afterward.

**[datasette-publish-fly 1.4](https://simonwillison.net/2026/Sep/11/datasette-publish-fly/)** · [Source](https://simonwillison.net/2026/Sep/11/datasette-publish-fly/)
This plugin release update for `datasette-publish-fly` enforces `force_https=true` by default in generated `fly.toml` configurations. It also resolves a "Volume could not be found" deployment bug and adds support for Fly's app-scoped deployment tokens.

**[github-to-sqlite 2.9.1](https://simonwillison.net/2026/Sep/11/github-to-sqlite/)** · [Source](https://simonwillison.net/2026/Sep/11/github-to-sqlite/)
A bug fix release for `github-to-sqlite` that resolves compatibility issues with `sqlite-utils 4.x`. This update ensures seamless data extraction from GitHub's API into SQLite databases when using the latest major release of `sqlite-utils`.

**[datasette 1.0a39](https://simonwillison.net/2026/Sep/11/datasette-2/)** · [Source](https://simonwillison.net/2026/Sep/11/datasette-2/)
The official release tag for Datasette 1.0a39, incorporating the security patches audited by frontier LLMs for the 1.0 alpha preview branch.

**[datasette 0.65.4](https://simonwillison.net/2026/Sep/11/datasette/)** · [Source](https://simonwillison.net/2026/Sep/11/datasette/)
The stable channel patch release for Datasette 0.65.4, delivering security fixes for public-facing deployments running the 0.65.x series.

## Project Pulse
Today's posts center heavily on AI-driven software engineering and security, showcased by the multi-LLM security audit powering the dual Datasette patch releases (1.0a39 and 0.65.4) alongside plugin updates for `datasette-publish-fly` and `github-to-sqlite`. Concurrently, Simon explores the operational realities of agentic coding—spanning Anthropic's production guardrails, developer mindset shifts, Python tooling innovations like `wrapture`, and API provider routing quirks.

💡 Want me to dive deeper into any of these specific topics—such as generating a code cheat sheet for `wrapture` or summarizing the security auditing workflow with frontier LLMs?