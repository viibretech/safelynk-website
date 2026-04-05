import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";

const title = "Request account deletion";
const description =
  "Submit a request to delete your Safelynk account. Provide your details and optional feedback; our team will process your request according to our policies.";

export const metadata: Metadata = {
  title,
  description,
  robots: { index: false, follow: true },
  openGraph: {
    title,
    description,
    url: `${getSiteUrl()}/request-account-deletion`,
  },
  alternates: {
    canonical: `${getSiteUrl()}/request-account-deletion`,
  },
};

export default function RequestDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
