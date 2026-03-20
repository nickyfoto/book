# My Book

A documentation site built with [Hugo](https://gohugo.io/) and the [hugo-book](https://github.com/alex-shpak/hugo-book) theme.

## Local Preview

**Prerequisites:** [Hugo extended](https://gohugo.io/installation/) v0.112.0+

```bash
# Clone with submodules (includes the theme)
git clone --recurse-submodules https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Start the dev server
hugo server
```

Open [http://localhost:1313](http://localhost:1313) in your browser. The site reloads automatically on file changes.

### If you already cloned without `--recurse-submodules`

```bash
git submodule update --init --recursive
```

## Adding Content

Pages live in `content/docs/`. The sidebar reflects the directory structure.

```
content/docs/
├── _index.md          # home/landing page
├── getting-started.md # top-level page
└── advanced/
    ├── _index.md      # section index
    └── configuration.md
```

Use front matter to control ordering:

```markdown
---
title: My Page
weight: 10
---
```

## Creating a New Post

Posts live in `content/posts/` and appear in the **Blog** link in the site footer nav.

Create a new file:

```bash
hugo new content posts/my-post-title.md
```

Or create the file manually. Every post needs this front matter:

```markdown
---
title: "My Post Title"
date: 2026-03-19
description: "A short summary shown in listings."
tags: ["tag1", "tag2"]
categories: ["General"]
---

Your content here.
```

- `date` controls sort order — newest first
- `tags` and `categories` are optional but help with discovery
- Omit `draft: true` (or set it to `false`) for the post to be published

## Deployment

Pushing to `main` triggers the GitHub Actions workflow which builds and deploys to GitHub Pages automatically.
