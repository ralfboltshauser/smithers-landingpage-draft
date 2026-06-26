import { brandWordmark, ogBrand, smithersMarkPath } from "@/lib/brand";
import { loadOgFonts } from "@/lib/og/load-fonts";
import { siteConfig } from "@/lib/site";

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
          alignItems: "center",
          justifyContent: "center",
          background: ogBrand.canvas,
          color: ogBrand.ink,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
            }}
          >
            <SmithersMark size={96} />
            <div
              style={{
                fontFamily: "Newsreader",
                fontSize: 88,
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {brandWordmark}
            </div>
          </div>

          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: 36,
              lineHeight: 1.35,
              color: ogBrand.inkMuted,
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
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
