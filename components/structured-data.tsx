import { SAFELYNK_APP_STORE_URL, SAFELYNK_PLAY_STORE_URL } from "@/lib/app-stores";
import { getSiteUrl } from "@/lib/site";
import { socials } from "@/utils/contents";

const DESCRIPTION =
  "Safelynk is a secure escrow and payment protection platform that ensures trust between buyers and sellers. Funds are held safely until both parties fulfill their obligations.";

const APP_IMAGE = "/images/safelynk-green.png";

const freeOffer = {
  "@type": "Offer",
  price: "0",
  priceCurrency: "GHS",
};

export function SiteJsonLd() {
  const base = getSiteUrl();
  const sameAs = socials.map((s) => s.url);
  const appImageUrl = `${base}${APP_IMAGE}`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: "Safelynk",
      url: base,
      logo: appImageUrl,
      description: DESCRIPTION,
      sameAs,
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@safelynk.io",
        contactType: "customer support",
        areaServed: "GH",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url: base,
      name: "Safelynk",
      description: DESCRIPTION,
      publisher: { "@id": `${base}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "MobileApplication",
      "@id": `${base}/#app-ios`,
      name: "Safelynk",
      operatingSystem: "iOS",
      applicationCategory: "FinanceApplication",
      url: base,
      installUrl: SAFELYNK_APP_STORE_URL,
      image: appImageUrl,
      description: DESCRIPTION,
      publisher: { "@id": `${base}/#organization` },
      offers: freeOffer,
    },
    {
      "@type": "MobileApplication",
      "@id": `${base}/#app-android`,
      name: "Safelynk",
      operatingSystem: "Android",
      applicationCategory: "FinanceApplication",
      url: base,
      installUrl: SAFELYNK_PLAY_STORE_URL,
      image: appImageUrl,
      description: DESCRIPTION,
      publisher: { "@id": `${base}/#organization` },
      offers: freeOffer,
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
