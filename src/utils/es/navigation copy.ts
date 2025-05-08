const navBarLinks = [
  { name: "Inicio", url: "/es" },
  { name: "Productos", url: "/es/products" },
  { name: "Servicios", url: "/es/services" },
  { name: "Blog", url: "/es/blog" },
  { name: "Contacto", url: "/es/contact" },
];

const footerLinks = [
  {
    section: "Ecosistema",
    links: [
      { name: "Documentación", url: "/es/welcome-to-docs/" },
      { name: "Herramientas y Equipos", url: "/es/products" },
      { name: "Servicios de Construcción", url: "/es/services" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Sobre nosotros", url: "#" },
      { name: "Blog", url: "/es/blog" },
      { name: "Carreras", url: "#" },
      { name: "Clientes", url: "#" },
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
