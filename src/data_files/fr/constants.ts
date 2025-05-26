import ogImageSrc from "@images/hero-image.avif";

export const SITE = {
  title: "TransCar",
  tagline: "Services de Transport Professionnel",
  description: "Services de transport rapides et sûrs en France et en Espagne. Faites confiance à une logistique agile, sans détours et avec une couverture régionale pour tous vos besoins de transport et de distribution.",
  description_short: "Services de transport rapides et sûrs en France et en Espagne avec une couverture régionale et des livraisons ponctuelles.",
  url: "https://transcar.netlify.app",
  author: "Carmen Constantín",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "fr-FR",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "fr_FR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Services de Transport Professionnel en France et en Espagne`,
  description: "Services de transport rapides et sûrs en France et en Espagne. Faites confiance à une logistique agile, sans détours et avec une couverture régionale pour tous vos besoins de transport et de distribution. Livraisons ponctuelles et service personnalisé.",
  image: ogImageSrc,
};
