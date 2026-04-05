import type { Metadata } from "next";
import "./globals.css";
import { SiteJsonLd } from "@/components/structured-data";
import { getMetadataBase, getSiteUrl } from "@/lib/site";

const SITE_NAME = "Safelynk";
const DEFAULT_TITLE =
  "Safelynk | Secure escrow & payment protection for buyers and sellers";
const DESCRIPTION =
  "Safelynk is a secure escrow and payment protection platform that ensures trust between buyers and sellers. Funds are held safely until both parties fulfill their obligations — enabling safer trades, service payments, and peer-to-peer transactions across Ghana and beyond.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Safelynk",
    "escrow",
    "payment protection",
    "secure payments",
    "Ghana",
    "mobile money",
    "buyer protection",
    "seller protection",
    "peer-to-peer payments",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: getSiteUrl() }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: getSiteUrl(),
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/safelynk-green.png",
        width: 1200,
        height: 630,
        alt: "Safelynk — secure escrow and payment protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DESCRIPTION,
    images: ["/images/safelynk-green.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: getSiteUrl(),
  },
  category: "finance",
  icons: {
    icon: [
      { url: "/images/safelynk-green.png", type: "image/png", sizes: "32x32" },
      { url: "/images/safelynk-green.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      {
        url: "/images/safelynk-green.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
