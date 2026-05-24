---
title: 2026-05-16
weight: 5
categories: ["Blogs"]
tags: ["kubernetes", "ci/cd", "tekton", "large language models"]
---

# Engineering Reads — 2026-05-16

## The Big Idea
The defining challenge of modern engineering is resource management at the extremes—whether that means reclaiming CI/CD compute cycles from vendor lock-in via lower-level orchestration, or driving down the inference costs of long-context LLMs through architectural optimization.

## Deep Reads

**Slowly going mad with power using Tekton** · xeiaso.net · [Source](https://xeiaso.net/blog/2026/tekton/)
The author outlines a strategic migration away from GitHub Actions to mitigate platform lock-in, replacing it with Tekton, a Kubernetes-native CI/CD operator. Instead of relying on a managed platform's implicit state and runner lifecycles, Tekton forces you to model CI as a series of lower-level Kubernetes primitives: Tasks, TaskRuns, Pipelines, and PipelineRuns. This requires explicitly managing the grimy details of distributed builds, such as configuring Persistent Volume Claims (PVCs) for repository clones and shared Go module caches. The explicit tradeoff here is operational overhead—like debugging vague VCS errors or manually configuring Kaniko forks for Docker builds—in exchange for leveraging idle homelab compute and achieving absolute vendor neutrality. Engineers looking to future-proof their deployment pipelines against platform decay should read this to understand the true operational cost of infrastructure independence.

**Recent Developments in LLM Architectures: KV Sharing, mHC, and Compressed Attention** · Sebastian Raschka · [Source](https://magazine.sebastianraschka.com/p/recent-developments-in-llm-architectures)
This piece examines how the latest generation of open-weight large language models, spanning from Gemma 4 to DeepSeek V4, are structurally adapting to the computational expense of long-context inference. The core technical mechanisms focus on memory and attention optimizations, specifically deploying Key-Value (KV) sharing, mHC, and Compressed Attention. By modifying the fundamental architecture of the transformer, these models aim to reduce the memory bandwidth bottlenecks that traditionally cripple context scaling. While the brief source material does not detail the exact precision tradeoffs of these compression techniques, structural optimizations like these are essential for making extended context windows economically viable. Machine learning engineers and systems builders optimizing LLM deployments should review this to understand how the frontier of inference efficiency is currently moving.

## Connecting Thread
At first glance, Kubernetes CI/CD pipelines and LLM attention mechanisms have little in common. However, both pieces fundamentally grapple with the same engineering reality: as our operational scales increase, we inevitably have to bypass high-level abstractions—whether that is a managed GitHub Action or a vanilla Transformer block—and engineer deeper, lower-level optimizations to reclaim control over our infrastructure and compute costs.