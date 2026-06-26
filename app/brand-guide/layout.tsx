import type { Metadata } from "next";
import "./brand-guide.css";

export const metadata: Metadata = {
  title: "Brand Guide — Smithers",
  description: "Smithers identity — Brass Lieutenant palette, Editorial Runtime typography.",
};

export default function BrandGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="brand-guide-root">{children}</div>;
}
