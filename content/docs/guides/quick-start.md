---
title: Quick Start
weight: 1
---

# Quick Start Guide

This guide walks you through building and deploying a minimal project end-to-end.

## 1. Create a Project

```bash
my-tool init hello-world
cd hello-world
```

## 2. Add a Route

Open `src/routes/index.js` and add:

```js
export default function handler(req, res) {
  res.json({ message: 'Hello, world!' });
}
```

## 3. Run Locally

```bash
my-tool dev
```

Test your route:

```bash
curl https://localhost:3000
# {"message":"Hello, world!"}
```

## 4. Build for Production

```bash
my-tool build
```

Output goes to the `dist/` directory.

## 5. Deploy

```bash
my-tool deploy
```

Your project is now live. The CLI prints the URL when deployment finishes.

> [!WARNING]
> The first deploy may take up to 60 seconds while infrastructure is provisioned.
