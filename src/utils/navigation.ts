// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "#hero" },
  { name: "About", url: "#about" },
  { name: "Services", url: "#services" },
  { name: "Coverage", url: "/coverage" },
  { name: "Clients", url: "#testimonials" },
  { name: "Plans", url: "#pricing" },
  { name: "FAQ", url: "#faq" },
  { name: "Contact", url: "#contact" },

];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};