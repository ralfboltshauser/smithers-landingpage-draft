import { siteConfig } from "@/lib/site";
import { ogBrand, smithersMarkPath } from "@/lib/brand";
import { loadOgFonts } from "@/lib/og/load-fonts";

export function SmithersMark({
  size,
  color = ogBrand.gold,
}: {
  size: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} d={smithersMarkPath} />
    </svg>
  );
}

export async function createSocialImage() {
  const fonts = await loadOgFonts();

  return {
    fonts,
    element: (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: `linear-gradient(145deg, ${ogBrand.surface} 0%, ${ogBrand.canvas} 52%, #070605 100%)`,
          color: ogBrand.ink,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            background: `linear-gradient(180deg, ${ogBrand.gold} 0%, ${ogBrand.goldMuted} 100%)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -80,
            top: -40,
            width: 420,
            height: 420,
            display: "flex",
            opacity: 0.08,
          }}
        >
          <SmithersMark size={420} />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "72px 80px 64px 96px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <SmithersMark size={56} />
            <div
              style={{
                fontFamily: "Newsreader",
                fontSize: 34,
                letterSpacing: "-0.03em",
              }}
            >
              smithers
            </div>
            <div
              style={{
                marginLeft: "auto",
                fontFamily: "DM Sans",
                fontSize: 18,
                color: ogBrand.inkMuted,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Open source
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                fontFamily: "Newsreader",
                fontSize: 72,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                maxWidth: 980,
              }}
            >
              {siteConfig.tagline}
            </div>
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: 30,
                lineHeight: 1.45,
                color: ogBrand.inkMuted,
                maxWidth: 920,
              }}
            >
              {siteConfig.ogDescription}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                height: 1,
                flex: 1,
                background: `linear-gradient(90deg, ${ogBrand.gold} 0%, transparent 100%)`,
              }}
            />
            <div
              style={{
                fontFamily: "DM Sans",
                fontSize: 18,
                color: ogBrand.gold,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              loops · gates · retries · durable steps
            </div>
          </div>
        </div>
      </div>
    ),
  };
}

export function createAppIcon(size: number, padding: number) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: ogBrand.canvas,
        border: `1px solid ${ogBrand.line}`,
      }}
    >
      <SmithersMark size={size - padding * 2} />
    </div>
  );
}
