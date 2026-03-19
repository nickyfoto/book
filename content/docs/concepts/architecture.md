---
title: Architecture
weight: 1
---

# Architecture

The system is made up of three main layers:

```
┌─────────────────────────┐
│         Client          │
├─────────────────────────┤
│          API            │
├─────────────────────────┤
│        Storage          │
└─────────────────────────┘
```

## Client

The client layer handles all user-facing interactions. It communicates with the API layer exclusively over HTTPS and never touches storage directly.

## API

The API layer is stateless. Each request is authenticated independently, which makes horizontal scaling straightforward. Business logic lives here.

## Storage

Storage is split into two parts:

| Store       | Purpose                        |
|-------------|-------------------------------|
| Primary DB  | Persistent structured data     |
| Cache       | Short-lived computed results   |

## Request Lifecycle

1. Client sends a request with an auth token
2. API validates the token
3. API checks the cache — returns early if hit
4. API queries the primary DB
5. Result is written to cache and returned to the client
