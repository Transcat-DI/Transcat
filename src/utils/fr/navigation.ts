
const navBarLinks = [
  { name: "Accueil", url: "/fr" },
  { name: "À propos", url: "/fr#about" },
  { name: "Services", url: "/fr#services" },
  { name: "Couverture", url: "/fr/couverture" },
  { name: "Clients", url: "/fr#testimonials" },
  // Section Tarifs temporairement supprimée
  // { name: "Tarifs", url: "/fr#pricing" },
  { name: "FAQ", url: "/fr#faq" },
  { name: "Contact", url: "/fr#contact" },

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