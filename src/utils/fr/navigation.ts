
const navBarLinks = [
  { name: "Accueil", url: "#hero" },
  { name: "À propos", url: "#about" },
  { name: "Services", url: "#services" },
  { name: "Couverture", url: "/fr/couverture" },
  { name: "Clients", url: "#testimonials" },
  { name: "Tarifs", url: "#pricing" },
  { name: "FAQ", url: "#faq" },
  { name: "Contact", url: "#contact" },

];

const footerLinks = [
  {
    section: "Écosystème",
    links: [
      { name: "Documentation", url: "/fr/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/fr/products" },
      { name: "Services de Construction", url: "/fr/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/fr/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};