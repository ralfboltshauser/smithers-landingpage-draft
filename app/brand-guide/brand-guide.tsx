"use client";

import { useState } from "react";
import {
  brand,
  brandCssExport,
  colorTokens,
  getSwatchBgClass,
  iconSizes,
} from "./brand-data";
import { SmithersMark } from "@/components/brand/smithers-mark";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </p>
  );
}

function ColorSwatch({
  label,
  hex,
  bgClass,
  labelClass,
}: {
  label: string;
  hex: string;
  bgClass: string;
  labelClass: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className={`flex h-16 items-end p-3 ${bgClass}`}>
        <span
          className={`font-mono text-[10px] font-medium uppercase tracking-wider ${labelClass}`}
        >
          {label}
        </span>
      </div>
      <div className="bg-card px-3 py-2 font-mono text-xs text-muted-foreground">{hex}</div>
    </div>
  );
}

function LogoLockup({
  layout = "horizontal",
  wordmarkClassName = "text-foreground",
  scale = 1,
}: {
  layout?: "horizontal" | "stacked";
  wordmarkClassName?: string;
  scale?: number;
}) {
  const markSize = Math.round(48 * scale);
  const fontSize = 2.1 * scale;

  const wordmark = (
    <span
      className={`font-display font-medium leading-none tracking-tight ${wordmarkClassName}`}
      style={{ fontSize: `${fontSize}rem` }}
    >
      {brand.wordmark}
    </span>
  );

  if (layout === "stacked") {
    return (
      <div className="flex flex-col items-center gap-4">
        <SmithersMark size={markSize} />
        {wordmark}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <SmithersMark size={markSize} />
      {wordmark}
    </div>
  );
}

export function BrandGuide() {
  const [copied, setCopied] = useState(false);

  async function copyCss() {
    await navigator.clipboard.writeText(brandCssExport);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="brand-guide-grain" />

      <div className="relative mx-auto flex min-h-screen max-w-[1440px]">
        <aside className="brand-guide-scroll sticky top-0 flex h-screen w-[320px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
          <div className="border-b border-sidebar-border p-6">
            <div className="flex items-center gap-3">
              <SmithersMark size={28} />
              <div>
                <p className="font-display text-sm font-medium">Smithers</p>
                <p className="font-mono text-xs text-muted-foreground">brand guide</p>
              </div>
            </div>
          </div>

          <div className="brand-guide-scroll flex-1 space-y-8 overflow-y-auto p-6">
            <section>
              <SectionLabel>Palette</SectionLabel>
              <div className="mt-3 rounded-xl border border-border bg-background p-4">
                <p className="text-sm font-medium">{brand.palette.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {brand.palette.description}
                </p>
                <div className="mt-3 flex gap-1">
                  <span className="size-3 rounded-full border border-border bg-canvas" />
                  <span className="size-3 rounded-full border border-border bg-ink" />
                  <span className="size-3 rounded-full border border-border bg-primary" />
                </div>
              </div>
            </section>

            <section>
              <SectionLabel>Typography</SectionLabel>
              <div className="mt-3 rounded-xl border border-border bg-background p-4">
                <p className="text-sm font-medium">{brand.typography.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {brand.typography.description}
                </p>
              </div>
            </section>

            <section>
              <SectionLabel>Wordmark</SectionLabel>
              <p className="mt-3 font-display text-2xl font-medium">{brand.wordmark}</p>
            </section>

            <section>
              <SectionLabel>Icon mark</SectionLabel>
              <div className="mt-3 rounded-xl border border-border bg-background p-4">
                <p className="text-sm font-medium">{brand.icon.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {brand.icon.description}
                </p>
              </div>
            </section>

            <section>
              <SectionLabel>Radius</SectionLabel>
              <div className="mt-3 rounded-xl border border-border bg-background p-4">
                <p className="font-mono text-sm">--radius: 0</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-xs">
                    sm
                  </span>
                  <span className="rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs">
                    md
                  </span>
                  <span className="rounded-lg border border-border bg-card px-3 py-1.5 font-mono text-xs">
                    lg
                  </span>
                  <span className="rounded-xl border border-border bg-card px-3 py-1.5 font-mono text-xs">
                    xl
                  </span>
                </div>
              </div>
            </section>
          </div>

          <div className="border-t border-sidebar-border p-6">
            <button
              type="button"
              onClick={copyCss}
              className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-transform active:scale-[0.98]"
            >
              {copied ? "Copied theme config" : "Copy theme config"}
            </button>
          </div>
        </aside>

        <main className="brand-guide-scroll flex-1 overflow-y-auto">
          <div className="space-y-12 p-8 lg:p-12">
            <section className="brand-guide-animate-in">
              <SectionLabel>Logo lockup</SectionLabel>
              <div className="mt-4 flex min-h-[280px] items-center justify-center rounded-xl border border-border bg-card p-10 lg:p-16">
                <LogoLockup layout="horizontal" scale={1.35} />
              </div>
            </section>

            <section className="brand-guide-animate-in brand-guide-animate-in-delay-1 grid gap-4 lg:grid-cols-2">
              <div className="flex min-h-[200px] flex-col justify-between rounded-xl border border-border bg-background p-8">
                <SectionLabel>On canvas</SectionLabel>
                <LogoLockup scale={0.85} />
              </div>
              <div className="flex min-h-[200px] flex-col justify-between rounded-xl bg-ink p-8">
                <SectionLabel>On ink</SectionLabel>
                <LogoLockup wordmarkClassName="text-canvas" scale={0.85} />
              </div>
            </section>

            <section className="brand-guide-animate-in brand-guide-animate-in-delay-2">
              <SectionLabel>Icon scale</SectionLabel>
              <div className="mt-4 rounded-xl border border-border bg-card p-8">
                <div className="flex flex-wrap items-end gap-8">
                  {iconSizes.map((size) => (
                    <div key={size} className="flex flex-col items-center gap-3">
                      <SmithersMark size={size} />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                        {size}px
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {brand.icon.description}
                </p>
              </div>
            </section>

            <section className="brand-guide-animate-in brand-guide-animate-in-delay-2">
              <SectionLabel>Color tokens</SectionLabel>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {colorTokens.map((token) => (
                  <ColorSwatch
                    key={token.token}
                    label={token.label}
                    hex={token.hex}
                    bgClass={getSwatchBgClass(token.token)}
                    labelClass={token.labelClass}
                  />
                ))}
              </div>
            </section>

            <section className="brand-guide-animate-in brand-guide-animate-in-delay-3">
              <SectionLabel>Typography specimen</SectionLabel>
              <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
                <div className="border-b border-border p-8">
                  <p className="font-display text-4xl leading-[1.1] tracking-tight lg:text-5xl">
                    Durable runtime for agentic workflows.
                  </p>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    Your workflows survive. Your laptop doesn&apos;t have to.
                  </p>
                </div>
                <div className="grid lg:grid-cols-2">
                  <div className="border-b border-border p-8 lg:border-b-0 lg:border-r">
                    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Display
                    </p>
                    <p className="font-display text-3xl">Checkpoint committed</p>
                    <p className="mt-2 font-display text-2xl">Frame N → Frame N+1</p>
                  </div>
                  <div className="p-8">
                    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Body + Mono
                    </p>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Smithers is the durable runtime underneath agentic workflows —
                      persisted tiers, crash-resume checkpoints, human-in-the-loop approvals.
                    </p>
                    <p className="mt-4 font-mono text-sm text-primary">
                      $ smithers run --checkpoint resume
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="brand-guide-animate-in brand-guide-animate-in-delay-3">
              <SectionLabel>UI components</SectionLabel>
              <div className="mt-4 rounded-xl border border-border bg-card p-8">
                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
                  >
                    Start runtime
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground"
                  >
                    View docs
                  </button>
                  <span className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
                    checkpoint saved
                  </span>
                  <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 font-mono text-xs font-medium text-primary">
                    frame pending
                  </span>
                </div>
              </div>
            </section>

            <section className="brand-guide-animate-in brand-guide-animate-in-delay-3">
              <SectionLabel>Theme config</SectionLabel>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-border bg-background p-6 font-mono text-xs leading-relaxed text-muted-foreground">
                {brandCssExport}
              </pre>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
