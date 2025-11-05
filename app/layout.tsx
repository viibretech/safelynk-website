import type { Metadata } from "next";
import "./globals.css";
import AnimatedCursor from "react-animated-cursor";
export const metadata: Metadata = {
  title: "Safelynk",
  description:
    "Safelynk is a secure escrow and payment protection platform that ensures trust between buyers and sellers. Funds are held safely until both parties fulfill their obligations — enabling safer trades, service payments, and peer-to-peer transactions across Ghana and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          innerStyle={{
            backgroundColor: "#183222",
          }}
          outerStyle={{
            border: "3px solid #D3FC64",
          }}
        />
        {children}
      </body>
    </html>
  );
}
