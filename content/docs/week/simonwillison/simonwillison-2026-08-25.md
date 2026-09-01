---
title: 2026-08-25
weight: 6
categories: ["Blogs", "AI", "Tech"]
tags: ["python", "game development", "software migration", "legacy code"]
---

# Simon Willison — 2026-08-25

## Highlight
**EVE Online has officially announced its transition to Python 3, marking the end of a sixteen-year era running Stackless Python 2.7 at a massive scale.** **This high-stakes migration of a twenty-year-old code base represents one of the industry's most fascinating Python-at-scale case studies.**

## Posts

**[EVE Online: The Move to Python 3 Begins!](https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/)** · [Source](https://simonwillison.net/2026/Aug/25/eve-online-move-to-python-3/)
**Simon highlights EVE Online's massive undertaking of migrating 2.4 million lines of code from Stackless Python 2.7 to Python 3 using the `futurize` script as a starting point.** **The development team faces a meticulous manual review of roughly 20,000 locations where Python 2 and 3 runtime behaviors differ, such as integer division.** **While the announcement remains quiet on how Stackless Python itself will be replaced, Simon points to their open-source `carbonengine/scheduler` library—developed to replace Stackless in the Carbon engine for EVE Frontier—as the likely technical path forward.**

***

🔍 I can research on the web to see if there have been any deeper technical dev blogs or updates published by CCP Games regarding their Python 3 migration progress and how they are handling the transition away from Stackless Python, and you can choose which findings to import.