# Smithers Landing

Marketing site for [Smithers](https://smithers.sh) — durable orchestration for agentic workflows.

Built with [Next.js](https://nextjs.org) (App Router), React 19, Tailwind CSS v4, and [shadcn/ui](https://ui.shadcn.com).

## Quick start

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript |

## Environment

Copy `.env.example` to `.env.local` and set your public URL for correct OG tags and sitemap entries:

```bash
NEXT_PUBLIC_SITE_URL=https://smithers.sh
```

On Vercel, `VERCEL_URL` is used automatically when this variable is unset.

## Project structure

```
app/                    Routes, global styles, metadata image routes
components/
  brand/                Shared Smithers mark
  landing/              Landing page sections (hero, qualification, …)
  theme/                Dev theme lab (palette / font / radius)
  ui/                   shadcn primitives
lib/
  brand/                Brand tokens (single source of truth)
  landing/              Copy, constants, hooks, recipe marquee data
  og/                   Open Graph image generation
  site.ts               Site metadata config
  theme/                Theme preferences (localStorage + CSS vars)
assets/og-fonts/        Bundled fonts for OG image generation
public/                 Static assets (smithers-icon.svg)
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main landing page |
| `/brand-guide` | Brand reference (colors, typography, mark) |

Metadata routes (`/opengraph-image`, `/icon`, `/apple-icon`, `/manifest.webmanifest`, `/robots.txt`, `/sitemap.xml`) are generated automatically.

## Theme system

CSS variables in `app/theme.css` drive palette, typography, and radius via `data-palette`, `data-font`, and `data-radius` on `<html>`.

In development, a **Theme** button in the bottom-right opens a playground to preview Brass / Teal / Blue palettes, three font stacks, and brutalist vs rounded corners. Preferences persist in `localStorage`.

## Deploy

```bash
vercel          # preview
vercel --prod   # production
```

Set `NEXT_PUBLIC_SITE_URL` in the Vercel project settings for correct OG tags and sitemap entries.

## Related

- [Smithers](https://smithers.sh) — documentation and product
- [smithersai/smithers](https://github.com/smithersai/smithers) — orchestrator (main repo)

## License

MIT — see [LICENSE](./LICENSE).
