// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/en" },
  { name: "About", url: "/en#about" },
  { name: "Services", url: "/en#services" },
  { name: "Coverage", url: "/en/coverage" },
  { name: "Clients", url: "/en#testimonials" },
  // Plans section temporarily removed
  // { name: "Plans", url: "/en#pricing" },
  { name: "FAQ", url: "/en#faq" },
  { name: "Contact", url: "/en#contact" },

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