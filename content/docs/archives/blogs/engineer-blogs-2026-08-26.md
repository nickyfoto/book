---
title: 2026-08-26
weight: 8
categories: ["Blogs"]
tags: ["duckdb", "aws", "vscode", "remote development"]
---

# Engineering Reads — 2026-08-26

## The Big Idea
The ultimate leverage in software engineering lies in maintaining control over your immediate **execution environment**. Whether utilizing in-process engines to query cloud data locally, or actively pinning and configuring your IDE to defend against upstream regressions, developers must continually manage the tradeoffs between **centralized platform changes** and **local autonomy**.

## Deep Reads

**[DuckDB and the changing physics of analytics](https://www.allthingsdistributed.com/2026/08/duckdb-and-the-changing-physics-of-analytics.html)** · Andy Warfield · [All Things Distributed](https://www.allthingsdistributed.com/2026/08/duckdb-and-the-changing-physics-of-analytics.html)
Andy Warfield discusses how databases like DuckDB enable a new way to build with data and details why the DuckLabs team is joining AWS. The integration is positioned as a complement to AWS's current cloud storage features, specifically S3 Files, S3 Tables, and S3 Vectors. However, because the provided text is an introductory excerpt, it does not detail the underlying technical mechanisms or database physics of DuckDB. It also leaves the specific tradeoffs and architectural details of the AWS acquisition unstated. Engineers focused on cloud analytics and AWS storage should read this to follow the strategic direction of **DuckDB's integration with S3**.

**[If your VS Code remotes stopped working, downgrade to v1.124.x](https://xeiaso.net/notes/2026/vscode-remotes-not-working-downgrade/)** · Xe Iaso · [xeiaso.net](https://xeiaso.net/notes/2026/vscode-remotes-not-working-downgrade/)
Xe Iaso reports a breaking change in a recent VS Code update that prevents remote development environments from connecting. The technical failure is caused by an API permission error, specifically where the remote SSH extension is blocked from using the **`terminalRemoteResolver` API**. Attempting to update extensions does not resolve the issue, leaving a local downgrade to VS Code v1.124.2 as the only working fix. While the author notes that staying pinned to an older version is not a viable long-term strategy, this downgrade temporarily restores access and rolls back an unappealing UI redesign. Software engineers using **remote-SSH setups** should read this to quickly resolve connection errors and restore their development workflow.

**[How to make VS Code go back to the old UI](https://xeiaso.net/notes/2026/vscode-ui-revert/)** · Xe Iaso · [xeiaso.net](https://xeiaso.net/notes/2026/vscode-ui-revert/)
Xe Iaso details a method to roll back a recent VS Code interface redesign that introduced rounded corners and altered the layout. The author argues that while interface changes are acceptable for chat apps, professional development tools should remain visually consistent to avoid unnecessary **cognitive load**. The technical revert is simple: developers can add **`"workbench.experimental.modernUI": false`** to their `settings.json` file to restore the classic look. The major caveat is that this experimental flag's lifespan is uncertain, meaning it may be deprecated in future updates. Developers who rely on **visual predictability** to maintain their coding focus should read this to quickly revert their editor's UI.

## Connecting Thread
These articles highlight a shared undercurrent of **maintaining agency over one's technical environment**. Whether adapting cloud data strategies to localized, in-process computation with DuckDB, or manually bypassing upstream IDE updates to protect workspace predictability and muscle memory, engineers continue to defend local autonomy against centralized platform churn. Predictability—both in systems performance and in user interface layouts—remains a core prerequisite for engineering efficiency.

***

🔍 I can research on the web to see if Microsoft has released a permanent official fix for the VS Code remote-SSH resolver bug, and you can choose whether to import those updates into your notebook.