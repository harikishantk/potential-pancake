# Harikishan TK - Portfolio Website

A modern portfolio website with a Claude Code inspired UI, built with Next.js and TailwindCSS.

## Features

- 🎨 **Claude Code UI** - Dark terminal-inspired design
- 📝 **Blog System** - Markdown-based blog with syntax highlighting
- ⚡ **Static Export** - Can be deployed anywhere (GitHub Pages, Netlify, Vercel)
- 📱 **Responsive** - Works on all devices
- 🔍 **SEO Friendly** - Meta tags and structured data

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Adding Blog Posts

Create a new markdown file in `content/blog/` with the following format:

```markdown
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your Post Content

Write your markdown content here...
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | The title of your blog post |
| `date` | Yes | Publication date (YYYY-MM-DD format) |
| `excerpt` | No | Short description for previews |
| `tags` | No | Array of tags for categorization |

### Supported Markdown Features

- Headings (h1-h6)
- Code blocks with syntax highlighting
- Tables
- Lists (ordered and unordered)
- Blockquotes
- Images
- Links
- Bold, italic, strikethrough

## Project Structure

```
├── content/
│   └── blog/           # Markdown blog posts
├── public/             # Static assets
├── src/
│   ├── app/
│   │   ├── blog/       # Blog pages
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   └── lib/
│       └── blog.ts     # Blog utilities
├── tailwind.config.ts  # Tailwind configuration
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  'claude-bg': '#1a1a1a',      // Background
  'claude-surface': '#2a2a2a', // Surface/card background
  'claude-border': '#3a3a3a',  // Borders
  'claude-text': '#e5e5e5',    // Primary text
  'claude-muted': '#888888',   // Muted text
  'claude-accent': '#f97316',  // Accent color (orange)
}
```

### Content

Edit the component files in `src/components/` to update:

- About section (`About.tsx`)
- Experience (`Experience.tsx`)
- Skills (`Skills.tsx`)
- Projects (`Projects.tsx`)

## Deployment

### Static Export

The project is configured for static export. Run:

```bash
npm run build
```

The output will be in the `out/` directory, ready to deploy to any static hosting.

### Vercel

```bash
npx vercel
```

### GitHub Pages

1. Build the project
2. Push the `out/` directory to the `gh-pages` branch

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Inspired by [Claude Code](https://claude.ai) UI design.
