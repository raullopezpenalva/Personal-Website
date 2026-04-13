import type { FC } from "react";
import EndtoEndIcon from "../components/ui-primitives/icons/EndtoEndIcon";
import DesignIcon from "../components/ui-primitives/icons/DesignIcon";
import LayerIcon from "../components/ui-primitives/icons/LayerIcon";

export interface CardArray {
  id: string;
  title?: string;
  icon: FC<{ className?: string }>;
  description?: string;
}

export const cards: CardArray[] = [
  {
    id: "end-to-end-development",
    icon: EndtoEndIcon,
  },
  {
    id: "design-before-code",
    icon: DesignIcon,
  },
  {
    id: "conscious-simplicity",
    icon: LayerIcon,
  },
];