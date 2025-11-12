import { Roboto_Condensed, Roboto_Mono, Yrsa } from "next/font/google";
import "./globals.css";
import metadata, { jsonLd } from "./metadata";

export { metadata };

const roboto = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});

const yrsa = Yrsa({
  variable: "--font-yrsa",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${yrsa.variable} ${robotoMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
