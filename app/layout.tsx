import type { Metadata } from "next";
import { Noto_Sans_Sinhala, Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const sinhalaSans = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  variable: "--font-sinhala",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const title = "Iresha Pharmaceuticals | Chilaw Road, Wennappuwa";
const description =
  "Iresha Pharmaceuticals at No. 81/1, Chilaw Road, Wennappuwa, for prescription medicines and everyday pharmacy essentials. Call 071 425 0895 to check availability and opening hours.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Iresha Pharmaceuticals",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${publicSans.variable} ${sinhalaSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
