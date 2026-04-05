import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

const title = "Contact us";
const description =
  "Get in touch with Safelynk for questions, partnerships, or a demo. We respond promptly to messages about escrow, payment protection, and the Safelynk app.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: `${getSiteUrl()}/contact-us`,
  },
  alternates: {
    canonical: `${getSiteUrl()}/contact-us`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
