const navBarLinks = [
  { name: "Inici", url: "/ca" },
  { name: "Sobre", url: "/ca#about" },
  { name: "Serveis", url: "/ca#services" },
  { name: "Cobertura", url: "/ca/cobertura" },
  { name: "Clients", url: "/ca#testimonials" },
  { name: "Tarifes", url: "/ca#pricing" },
  { name: "FAQ", url: "/ca#faq" },
  { name: "Contacte", url: "/ca#contact" },

];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentació", url: "/ca/welcome-to-docs/" },
      { name: "Eines i Equips", url: "/ca/products" },
      { name: "Serveis de Construcció", url: "/ca/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre nosaltres", url: "#" },
      { name: "Blog", url: "/ca/blog" },
      { name: "Carreres", url: "#" },
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
