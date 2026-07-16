import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") || host.startsWith("127.") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Harbor Health Pharmacy | Care that feels close to home";
  const description = "Prescriptions, everyday wellness, vaccinations, and trusted pharmacist advice from your neighborhood pharmacy.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      siteName: "Harbor Health Pharmacy",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Harbor Health Pharmacy — Care that feels close to home." }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
