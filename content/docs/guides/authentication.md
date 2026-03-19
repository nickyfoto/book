---
title: Authentication
weight: 2
---

# Authentication

All API requests require a valid token. This guide covers how to generate and use tokens.

## Generate a Token

```bash
my-tool token create --name "ci-pipeline"
# ✓ Token created: myt_live_xxxxxxxxxxxxxx
```

Store this value — it is only shown once.

## Use the Token

Pass the token in the `Authorization` header:

```bash
curl https://api.example.com/v1/data \
  -H "Authorization: Bearer myt_live_xxxxxxxxxxxxxx"
```

Or set it as an environment variable for the CLI:

```bash
export MYTOOL_TOKEN=myt_live_xxxxxxxxxxxxxx
my-tool deploy
```

## Token Scopes

Tokens can be scoped to limit what they can do:

| Scope       | Permissions                  |
|-------------|------------------------------|
| `read`      | Read-only access to all data |
| `write`     | Read and write               |
| `deploy`    | Trigger deployments only     |
| `admin`     | Full access                  |

```bash
my-tool token create --name "read-only-bot" --scope read
```

## Revoke a Token

```bash
my-tool token revoke myt_live_xxxxxxxxxxxxxx
# ✓ Token revoked
```

Revoked tokens stop working immediately.
