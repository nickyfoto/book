---
title: 2026-04-27
weight: 3
categories: ["Blogs", "AI", "Tech"]
tags: ["speech-to-text", "microsoft", "openai", "translation", "mlx"]
---

# Simon Willison — 2026-04-27

## Highlight
The most substantive post for developers today is Simon's hands-on experiment running Microsoft's VibeVoice model locally via MLX. It's a great example of his signature workflow: taking a newly accessible open-source AI model and immediately figuring out the most frictionless CLI one-liner to get it running on Apple Silicon.

## Posts

**[microsoft/VibeVoice]** · [Source](https://simonwillison.net/2026/Apr/27/vibevoice/#atom-everything)
Simon explores Microsoft's MIT-licensed VibeVoice, a Whisper-style speech-to-text model that notably includes built-in speaker diarization. He shares a practical one-liner using `uv` and `mlx-audio` to run a 4-bit quantized version locally on a Mac. Testing it against a one-hour podcast interview, it transcribed the audio in under 9 minutes and impressively distinguished between the host's conversational voice and his "sponsor read" voice. You'll need to manually split audio files longer than an hour to avoid token limits, but the resulting JSON drops nicely into Datasette Lite for browsing.

**[Tracking the history of the now-deceased OpenAI Microsoft AGI clause]** · [Source](https://simonwillison.net/2026/Apr/27/now-deceased-agi-clause/#atom-everything)
A fascinating piece of corporate AI archaeology tracing the infamous clause that would nullify Microsoft's commercial IP rights if OpenAI achieved Artificial General Intelligence. Simon tracks the definition's evolution from a 2019 profit-based metric ($100 billion) to a 2025 "expert panel" verification process. Based on the latest April 2026 partnership update—which states revenue sharing will continue "independent of OpenAI’s technology progress"—Simon concludes this sci-fi clause is officially dead.

**[Speech translation in Google Meet is now rolling out to mobile devices]** · [Source](https://simonwillison.net/2026/Apr/27/speech-translation-in-google-meet-is-now-rolling-out-to-mobile-d/#atom-everything)
A brief hands-on report of Google Meet's new real-time translation feature, which acts as a sci-fi universal translator by repeating speech with a rough imitation of the original speaker's voice. It currently supports six languages (English, Spanish, French, German, Portuguese, and Italian) but feels very alpha—Simon successfully got it working between web browsers but hit snags trying to bridge an iPhone and iPad.

## Project Pulse
Audio and speech processing models are a clear theme in today's writing, spanning from consumer-facing real-time translation in Google Meet to practical developer workflows for local speech-to-text and diarization with VibeVoice.