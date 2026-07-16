import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") || host.startsWith("127.") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Iresha Pharmacy | Puttalam Road, Wennappuwa";
  const description = "Iresha Pharmacy in Wennappuwa for prescription medicines and everyday pharmacy essentials. Call 077 118 4083 to check availability and opening hours.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      siteName: "Iresha Pharmacy",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Iresha Pharmacy — trusted care in Wennappuwa." }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
