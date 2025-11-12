import type { Metadata } from "next";
import icons from "./icons";
import { jsonLd } from "./jsonLd";
import openGraph from "./openGraph";
import twitter from "./twitter";

const metadata: Metadata = {
  title: {
    default: "Collège Albert Camus - Bois-Colombes",
    template: "%s | Collège Albert Camus",
  },
  description:
    "Site officiel du Collège Albert Camus à Bois-Colombes — infos, vie scolaire et ressources.",
  authors: [{ name: "Collège Albert Camus" }],
  creator: "Webmaster Collège Albert Camus",
  publisher: "Collège Albert Camus",
  metadataBase: new URL("https://clg-camus-bois-colombes.ac-versailles.fr"),
  alternates: {
    canonical: "https://clg-camus-bois-colombes.ac-versailles.fr",
    languages: { "fr-FR": "https://clg-camus-bois-colombes.ac-versailles.fr" },
  },
  openGraph,
  twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
    },
  },
  icons,
};

export default metadata;
export { jsonLd };
