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

## Deployment

Pushing to `main` triggers the GitHub Actions workflow which builds and deploys to GitHub Pages automatically.
