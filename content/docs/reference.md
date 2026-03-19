---
title: Reference
weight: 4
---

# CLI Reference

## Global Flags

| Flag            | Default  | Description                        |
|-----------------|----------|------------------------------------|
| `--config`      | auto     | Path to config file                |
| `--log-level`   | `info`   | Log verbosity: debug, info, warn, error |
| `--no-color`    | false    | Disable colored output             |
| `--help`        |          | Show help for any command          |

## Commands

### `init`

Create a new project.

```
my-tool init <name> [flags]
```

| Flag       | Description                     |
|------------|---------------------------------|
| `--template` | Starter template to use       |

---

### `dev`

Start the development server with live reload.

```
my-tool dev [flags]
```

| Flag       | Default     | Description             |
|------------|-------------|-------------------------|
| `--port`   | `3000`      | Port to listen on       |
| `--host`   | `localhost` | Host to bind            |

---

### `build`

Build for production. Output is written to `dist/`.

```
my-tool build [flags]
```

| Flag         | Description                            |
|--------------|----------------------------------------|
| `--out`      | Override output directory (default: `dist`) |
| `--minify`   | Minify output                          |

---

### `deploy`

Deploy the current build.

```
my-tool deploy [flags]
```

| Flag          | Description                          |
|---------------|--------------------------------------|
| `--env`       | Target environment: staging, production |
| `--token`     | Auth token (or set `MYTOOL_TOKEN`)   |

---

### `token`

Manage API tokens.

```
my-tool token <subcommand>
```

Subcommands: `create`, `list`, `revoke`
