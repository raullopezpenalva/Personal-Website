export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Desarrollo Web",
    description:
      "Creación de sitios web modernos, responsivos y optimizados para SEO utilizando las últimas tecnologías.",
  },
  {
    id: "ui-ux-design",
    title: "Diseño UI/UX",
    description:
      "Diseño de interfaces atractivas y experiencias de usuario intuitivas para aplicaciones web y móviles.",
  },
  {
    id: "ecommerce-solutions",
    title: "Soluciones de Comercio Electrónico",
    description:
      "Desarrollo e integración de plataformas de comercio electrónico personalizadas para impulsar tus ventas en línea.",
  },
];