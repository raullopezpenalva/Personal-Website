import type { FC } from "react";
import EndtoEndIcon from "../components/ui-primitives/icons/EndtoEndIcon";
import DesignIcon from "../components/ui-primitives/icons/DesignIcon";
import LayerIcon from "../components/ui-primitives/icons/LayerIcon";

export interface CardArray {
  id: string;
  title: string;
  description: string;
  icon: FC<{className?: string}>;
}

export const cards: CardArray[] = [
  {
    id: "end-to-end-development",
    title: "Visión end-to-end",
    icon: EndtoEndIcon,
    description:
      "Entender el flujo completo antes de tocar una línea de código",
  },
  {
    id: "design-before-code",
    title: "Diseño antes de código",
    icon: DesignIcon, // Cambia esto por el icono correcto
    description:
      "La mayoria de problemas vienen de decisiones tempranas mal pensadas",
  },
  {
    id: "conscious-simplicity",
    title: "Simplicidad consciente",
    icon: LayerIcon, // Cambia esto por el icono correcto
    description:
      "Menos capas, mejor comprensión",
  },
];