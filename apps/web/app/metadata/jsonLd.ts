export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Collège Albert Camus",
  url: "https://clg-camus-bois-colombes.ac-versailles.fr",
  logo: "/logo.png",
  description: "Collège public à Bois-Colombes.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "27 rue Pasteur",
    addressLocality: "Bois-Colombes",
    postalCode: "92270",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "01 55 66 90 70",
    contactType: "administration",
    areaServed: "FR",
    availableLanguage: "fr",
  },
  sameAs: ["https://clg-camus-bois-colombes.ac-versailles.fr"],
};
