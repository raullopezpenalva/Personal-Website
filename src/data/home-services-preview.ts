import soundEngineeringImage from "../assets/images/services/sound-engineer-preview.webp";
import soundSystemEngineeringImage from "../assets/images/services/sound-system-engineering-preview.webp";
import avNetworkingImage from "../assets/images/services/av-networking-preview.webp";
import technicalPlanningImage from "../assets/images/services/technical-planning-preview.webp";

export type HomeServicePreview = {
  id:
    | "sound-engineering"
    | "sound-system-engineering"
    | "av-networking"
    | "technical-planning";
  image: string;
  translationKey: string;
  href: string;
};

export const homeServicesPreview: HomeServicePreview[] = [
  {
    id: "sound-engineering",
    image: soundEngineeringImage,
    translationKey: "services.items.soundEngineering",
    href: "/services#service-sound-engineering",
  },
  {
    id: "sound-system-engineering",
    image: soundSystemEngineeringImage,
    translationKey: "services.items.soundSystemEngineering",
    href: "/services#service-sound-system-engineering",
  },
  {
    id: "av-networking",
    image: avNetworkingImage,
    translationKey: "services.items.avNetworking",
    href: "/services#service-av-networking",
  },
  {
    id: "technical-planning",
    image: technicalPlanningImage,
    translationKey: "services.items.technicalPlanning",
    href: "/services#service-technical-production",
  },
];
