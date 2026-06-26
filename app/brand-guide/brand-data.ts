import { brandPalette, brandWordmark, smithersMarkPath } from "@/lib/brand";

export { smithersMarkPath };

export const brand = {
  palette: {
    name: brandPalette.name,
    description:
      "Obsidian command deck with pilot gold — premium durability for long-running agent work.",
    canvas: brandPalette.canvas,
    surface: brandPalette.surface,
    ink: brandPalette.ink,
    inkMuted: brandPalette.inkMuted,
    accent: brandPalette.accent,
    accentMuted: brandPalette.accentMuted,
    border: brandPalette.border,
    onAccent: brandPalette.onAccent,
  },
  typography: {
    name: "Editorial Runtime",
    description:
      "Newsreader display + DM Sans — warm editorial, infrastructure you trust overnight.",
  },
  wordmark: brandWordmark,
  icon: {
    name: "Inline slabs",
    description:
      "Two diagonal committed frames — compact square mark, favicon-friendly.",
  },
} as const;

export const colorTokens = [
  { label: "Canvas", token: "canvas", hex: brand.palette.canvas, labelClass: "text-muted-foreground" },
  { label: "Surface", token: "surface", hex: brand.palette.surface, labelClass: "text-muted-foreground" },
  { label: "Ink", token: "ink", hex: brand.palette.ink, labelClass: "text-canvas" },
  { label: "Ink muted", token: "ink-muted", hex: brand.palette.inkMuted, labelClass: "text-canvas" },
  {
    label: "Primary",
    token: "primary",
    hex: brand.palette.accent,
    labelClass: "text-primary-foreground",
  },
  {
    label: "Gold muted",
    token: "gold-muted",
    hex: brand.palette.accentMuted,
    labelClass: "text-canvas",
  },
  { label: "Border", token: "border", hex: brand.palette.border, labelClass: "text-muted-foreground" },
  {
    label: "On primary",
    token: "on-accent",
    hex: brand.palette.onAccent,
    labelClass: "text-muted-foreground",
  },
] as const;

export const iconSizes = [16, 24, 32, 48, 64, 96] as const;

export const brandCssExport = `:root {
  /* ${brand.palette.name} */
  --canvas: ${brand.palette.canvas};
  --surface: ${brand.palette.surface};
  --ink: ${brand.palette.ink};
  --ink-muted: ${brand.palette.inkMuted};
  --gold: ${brand.palette.accent};
  --gold-muted: ${brand.palette.accentMuted};
  --line: ${brand.palette.border};
  --on-gold: ${brand.palette.onAccent};

  --radius: 0;

  /* shadcn semantics */
  --background: var(--canvas);
  --foreground: var(--ink);
  --card: var(--surface);
  --card-foreground: var(--ink);
  --popover: var(--surface);
  --popover-foreground: var(--ink);
  --primary: var(--gold);
  --primary-foreground: var(--on-gold);
  --secondary: color-mix(in oklch, var(--surface) 88%, var(--ink));
  --secondary-foreground: var(--ink);
  --muted: var(--surface);
  --muted-foreground: var(--ink-muted);
  --accent: color-mix(in oklch, var(--gold-muted) 24%, var(--surface));
  --accent-foreground: var(--ink);
  --destructive: oklch(0.704 0.191 22.216);
  --border: var(--line);
  --input: color-mix(in oklch, var(--line) 85%, var(--ink));
  --ring: var(--gold-muted);
  --chart-1: var(--gold);
  --chart-2: var(--gold-muted);
  --chart-3: var(--ink-muted);
  --chart-4: var(--line);
  --chart-5: var(--canvas);
  --sidebar: var(--surface);
  --sidebar-foreground: var(--ink);
  --sidebar-primary: var(--gold);
  --sidebar-primary-foreground: var(--on-gold);
  --sidebar-accent: color-mix(in oklch, var(--gold-muted) 24%, var(--surface));
  --sidebar-accent-foreground: var(--ink);
  --sidebar-border: var(--line);
  --sidebar-ring: var(--gold-muted);
}

@theme inline {
  /* ${brand.typography.name} */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-canvas: var(--canvas);
  --color-surface: var(--surface);
  --color-ink: var(--ink);
  --color-gold: var(--gold);
  --color-gold-muted: var(--gold-muted);
  --radius-lg: var(--radius);
  --radius-xl: var(--radius);
  --font-sans: var(--font-dm-sans), system-ui, sans-serif;
  --font-display: var(--font-newsreader), Georgia, serif;
  --font-mono: var(--font-jetbrains-mono), monospace;
}`;

const swatchBgClasses: Record<(typeof colorTokens)[number]["token"], string> = {
  canvas: "bg-canvas",
  surface: "bg-surface",
  ink: "bg-ink",
  "ink-muted": "bg-ink-muted",
  primary: "bg-primary",
  "gold-muted": "bg-gold-muted",
  border: "bg-border",
  "on-accent": "bg-on-accent",
};

export function getSwatchBgClass(token: (typeof colorTokens)[number]["token"]) {
  return swatchBgClasses[token];
}
