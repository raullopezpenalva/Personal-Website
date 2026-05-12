import soundEngineeringImage from "../assets/images/services/sound-engineer.webp";
import soundSystemEngineeringImage from "../assets/images/services/sound-system-engineering.webp";
import avNetworkingImage from "../assets/images/services/av-networking.webp";
import technicalPlanningImage from "../assets/images/services/technical-planning.webp";

export type HomeServicePreview = {
  id:
    | "sound-engineering"
    | "sound-system-engineering"
    | "av-networking"
    | "technical-planning";
  image: string;
  translationKey: string;
};

export const homeServicesPreview: HomeServicePreview[] = [
  {
    id: "sound-engineering",
    image: soundEngineeringImage,
    translationKey: "services.items.soundEngineering",
  },
  {
    id: "sound-system-engineering",
    image: soundSystemEngineeringImage,
    translationKey: "services.items.soundSystemEngineering",
  },
  {
    id: "av-networking",
    image: avNetworkingImage,
    translationKey: "services.items.avNetworking",
  },
  {
    id: "technical-planning",
    image: technicalPlanningImage,
    translationKey: "services.items.technicalPlanning",
  },
];
