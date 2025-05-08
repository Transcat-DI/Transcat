const navBarLinks = [
  { name: "Inici", url: "/ca" },
  { name: "Sobre", url: "/ca/products" },
  { name: "Serveis", url: "/ca/services" },
  { name: "Cobertura", url: "/ca/blog" },
  { name: "Contacte", url: "/ca/contact" },
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
