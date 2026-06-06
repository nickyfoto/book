---
title: 2026-05-30
weight: 5
categories: ["Youtube", "Tech"]
tags: ["artificial intelligence", "ai agents", "developer tools", "physics"]
---

{{< sources "tech-videos" >}}

# Tech Videos — 2026-05-30

## Watch First
**[How I deleted 95% of my agent skills and got better results — Nick Nisi, WorkOS](https://www.youtube.com/watch?v=vy7o1g2iHY8)**
This is the most practical talk in the batch, explaining how to tame LLM non-determinism by abandoning open-ended prompt instructions in favor of a strict TypeScript state machine that forces agents to cryptographically prove their work.

## Highlights by Theme

### Developer Tools & Platforms
**[How I deleted 95% of my agent skills and got better results — Nick Nisi, WorkOS](https://www.youtube.com/watch?v=vy7o1g2iHY8)** · *AI Engineer*
Nisi details how giving AI agents too much context and too many skills leads to context drops and outright lies about task completion. He vastly improved his WorkOS CLI agent's success rate (from 77% to 97%) by deleting 95% of its skills and replacing them with a strict validation pipeline. The key technical takeaway is to enforce constraints with code rather than prompts: his framework uses a state machine to ensure an agent cannot move to the review stage until it generates a cryptographic hash proving the test suite actually ran and passed. 

**[How We Built Zeta2: Training an Edit Prediction Model in Production — Ben Kunkle, Zed](https://www.youtube.com/watch?v=phchDt63qAA)** · *AI Engineer*
The Zed team breaks down their production distillation pipeline for training a specialized edit prediction model that runs on every keystroke. The most technically interesting challenge they highlight is handling "settled data" (waiting 10 seconds after a user finishes editing to snapshot the code) which is inherently noisy due to user changes of mind or external formatting. To filter this noise, they generate multiple teacher predictions from a frontier model and calculate the Levenshtein distance against the settled state, isolating the "predictable but novel" examples that are ideal for training.

### AI & Machine Learning
**[How we built 1,000 AI agents that run a marathon](https://www.youtube.com/watch?v=WSIzaih2vq4)** · *Google Cloud Tech*
Casey West demonstrates a multi-agent simulation architecture and explains why standard Agent-to-Agent (A2A) HTTP protocols bottleneck heavily at scale. To achieve sub-millisecond dispatch times for 1,000 concurrent "runner" agents, they bypassed HTTP entirely, shifting to a "subscriber mode" driven by a Go gateway and a Redis pub/sub memory store. The repo is a goldmine for robust LLM integration patterns, specifically showcasing a custom `resilient_model` wrapper that handles automated API retries with exponential backoff and jitter.

**[Terence Tao on How AI Is Changing Mathematics](https://www.youtube.com/watch?v=cdflu9ZXZGE)** · *OpenAI*
Fields Medalist Terence Tao notes that AI acts as an accelerator by removing the "cognitive friction" of tedious calculations and literature searches. He argues the real value isn't AI winning a Fields Medal independently, but enabling a hundred mathematicians to execute on "crazier things" they previously wouldn't have had the bandwidth to try.

**[Dax Raad: AI often creates “Frankenstein” products](https://www.youtube.com/watch?v=OuuE0Ah89N8)** · *The Pragmatic Engineer*
A crisp warning against prompt-driven product development. Raad points out that the ease of generating one-off features via AI agents creates bloated, unmaintainable software where nothing feels cohesive.

**[Anthropic Thinks It’s Building God, And That’s Terrifying - Bill Gurley](https://www.youtube.com/watch?v=keI-wXX2hf0)** · *All-In Podcast*
Bill Gurley is highly skeptical of Anthropic's corporate messaging, arguing their "Machines of Loving Grace" manifesto reads like a messiah complex. He pushes back on their vision of AI overlords managing a secondary economy, classifying it as a massive delusion of grandeur disguised as software engineering.

**[Boo AI Boo](https://www.youtube.com/watch?v=uN7uKLsGRWw)** · *ThePrimeagenHighlights*
A reaction examining the massive disconnect between tech Twitter's AI optimism and college students heavily booing AI commencement speeches. It highlights the valid economic fear of new grads entering an AI-deflationary job market burdened by massive, non-deflating student debt.

### Everything Else
**[Is dark matter real? - Why can’t we find it?](https://www.youtube.com/watch?v=OE0ZvZYipwI)**, **[Why anything exists at all](https://www.youtube.com/watch?v=Xn2oCeVo_R4)**, and **[The most shocking discovery in physics](https://www.youtube.com/watch?v=E0JB-DirSFs)** · *Lex Clips*
Fermilab physicist Don Lincoln breaks down major cosmological mysteries. He details why quantum field theory's prediction for vacuum energy is famously wrong by 10^120, explains the bullet cluster evidence for dark matter, and discusses Fermilab's ongoing neutrino oscillation experiments testing leptogenesis to explain the universe's matter-antimatter asymmetry.

**[Why Neanderthals Might Be Our Cousins After All - David Reich](https://www.youtube.com/watch?v=iuVDb9hKn3w)** · *Dwarkesh Patel*
A brief anthropological theory suggesting a population of humans expanded into Europe, absorbed archaic DNA to become genetically Neanderthal, but retained modern toolmaking culture—making them our cultural cousins.

*(Note: The daily index also included videos on bootstrapping a SaaS, Claude Code destroying databases, and why senior engineers struggle to build AI agents, but these lacked source transcripts for review.)*