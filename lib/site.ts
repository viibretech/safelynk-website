/**
 * Canonical site origin for metadata, sitemap, and structured data.
 * Override in preview/staging with NEXT_PUBLIC_SITE_URL (no trailing slash).
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return "https://safelynk.io";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteUrl()}/`);
}
