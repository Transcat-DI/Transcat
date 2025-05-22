const navBarLinks = [
  { name: "Inici", url: "#hero" },
  { name: "Sobre", url: "#about" },
  { name: "Serveis", url: "#services" },
  { name: "Cobertura", url: "/ca/cobertura" },
  { name: "Clients", url: "#testimonials" },
  { name: "Tarifes", url: "#pricing" },
  { name: "FAQ", url: "#faq" },
  { name: "Contacte", url: "#contact" },

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
