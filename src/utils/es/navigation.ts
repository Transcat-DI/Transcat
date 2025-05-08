const navBarLinks = [
  { name: "Inicio", url: "/es#hero" },
  { name: "Acerca", url: "/es#about" },
  { name: "Servicios", url: "/es#services" },
  { name: "Cobertura", url: "/es/cobertura" },
  { name: "Clientes", url: "/es#clientes" },
  { name: "Planes", url: "/es#pricing" },
  { name: "FAQ", url: "/es#faq" },
  { name: "Contacto", url: "/es#contacto" },
];

const footerLinks = [
  {
    section: "Navegación Rápida",
    links: [
      { name: "Inicio", url: "/es" },
      { name: "Acerca de Mi", url: "/es/products" },
      { name: "Servicios Profesionales", url: "/es/services" },
      { name: "Cobertura de Servicios", url: "/es/cobertura" },
      { name: "Testimonios / Estadísticas", url: "/es/cobertura" },
      { name: "Tarifas y Planes de Pago", url: "/es/cobertura" },
      { name: "Preguntas Frecuentes", url: "/es/cobertura" },
       { name: "Contacto", url: "/es/contact" },
    ],
  },
  {
    section: "Empresa",
    links: [
      { name: "Trabaja con nosotros", url: "/es#contacto" },
      { name: "Términos del Servicio", url: "#" },
      { name: "Política de privacidad", url: "#" },
      { name: "Descargar Tarifas PDF", url: "#" },
    ],
  },
  {
    section: "Recursos",
    links: [
      { name: "Preguntas frecuentes", url: "#" },
      { name: "Seguimiento de envíos", url: "#" },
      { name: "Calculadora de tarifas", url: "#" },
      { name: "Documentación", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
  whatsapp: "https://wa.me/34600123456",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
