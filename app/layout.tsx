import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Safelynk",
  description:
    "Safelynk is a secure escrow and payment protection platform that ensures trust between buyers and sellers. Funds are held safely until both parties fulfill their obligations — enabling safer trades, service payments, and peer-to-peer transactions across Ghana and beyond.",
  openGraph: {
    images: [
      {
        url: "https://safelynk.io/public/images/safelynk-green.png",
        width: 1200,
        height: 630,
        alt: "Safelynk secure payment and escrow platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
