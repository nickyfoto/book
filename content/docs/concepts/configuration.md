---
title: Configuration
weight: 2
---

# Configuration

The tool reads configuration from a `my-tool.config.json` file in your project root.

## Minimal Config

```json
{
  "name": "my-project"
}
```

## Full Config Reference

```json
{
  "name": "my-project",
  "port": 3000,
  "logLevel": "info",
  "cache": {
    "enabled": true,
    "ttl": 300
  },
  "db": {
    "host": "localhost",
    "port": 5432,
    "name": "mydb"
  }
}
```

## Environment Variables

Any config key can be overridden with an environment variable using the `MYTOOL_` prefix:

```bash
MYTOOL_PORT=8080 my-tool dev
MYTOOL_LOG_LEVEL=debug my-tool dev
```

Environment variables take precedence over the config file.

> [!NOTE]
> Use environment variables for secrets — never commit credentials to `my-tool.config.json`.
