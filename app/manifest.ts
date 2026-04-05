import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";

const ICON = "/images/safelynk-green.png";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Safelynk — secure escrow & payments",
    short_name: "Safelynk",
    description:
      "Escrow and payment protection for buyers and sellers. Funds stay protected until the deal is done.",
    start_url: "/",
    scope: "/",
    id: getSiteUrl(),
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#183222",
    categories: ["finance", "business", "productivity"],
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: ICON,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: ICON,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
