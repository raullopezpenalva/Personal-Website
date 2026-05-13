import homelabCover from "../assets/images/case-studies/homelab/cover.webp";
import softwareCover from "../assets/images/case-studies/software/cover.webp";

import soundEngineeringCover from "../assets/images/case-studies/sound-engineering/cover.webp";
import soundEngineering01 from "../assets/images/case-studies/sound-engineering/01.webp";
import soundEngineering02 from "../assets/images/case-studies/sound-engineering/02.webp";
import soundEngineering03 from "../assets/images/case-studies/sound-engineering/03.webp";
import soundEngineering04 from "../assets/images/case-studies/sound-engineering/04.webp";
import soundEngineering05 from "../assets/images/case-studies/sound-engineering/05.webp";
import soundEngineering06 from "../assets/images/case-studies/sound-engineering/06.webp";
import soundEngineering07 from "../assets/images/case-studies/sound-engineering/07.webp";
import soundEngineering08 from "../assets/images/case-studies/sound-engineering/08.webp";
import soundEngineering09 from "../assets/images/case-studies/sound-engineering/09.webp";
import soundEngineering10 from "../assets/images/case-studies/sound-engineering/10.webp";
import soundEngineering11 from "../assets/images/case-studies/sound-engineering/11.webp";
import soundEngineering12 from "../assets/images/case-studies/sound-engineering/12.webp";
import soundEngineering13 from "../assets/images/case-studies/sound-engineering/13.webp";
import soundEngineering14 from "../assets/images/case-studies/sound-engineering/14.webp";
import soundEngineering15 from "../assets/images/case-studies/sound-engineering/15.webp";
import soundEngineering16 from "../assets/images/case-studies/sound-engineering/16.webp";
import soundEngineering17 from "../assets/images/case-studies/sound-engineering/17.webp";

import ominiraCover from "../assets/images/case-studies/ominira/cover.webp";
import ominira01 from "../assets/images/case-studies/ominira/01.webp";
import ominira02 from "../assets/images/case-studies/ominira/02.webp";
import ominira03 from "../assets/images/case-studies/ominira/03.webp";
import ominira04 from "../assets/images/case-studies/ominira/04.webp";

import locationSoundCover from "../assets/images/case-studies/location-sound/cover.webp";
import locationSound01 from "../assets/images/case-studies/location-sound/01.webp";
import locationSound02 from "../assets/images/case-studies/location-sound/02.webp";
import locationSound03 from "../assets/images/case-studies/location-sound/03.webp";
import locationSound04 from "../assets/images/case-studies/location-sound/04.webp";
import locationSound05 from "../assets/images/case-studies/location-sound/05.webp";
import locationSound06 from "../assets/images/case-studies/location-sound/06.webp";
import locationSound07 from "../assets/images/case-studies/location-sound/07.webp";
import locationSound08 from "../assets/images/case-studies/location-sound/08.webp";
import locationSound09 from "../assets/images/case-studies/location-sound/09.webp";
import locationSound10 from "../assets/images/case-studies/location-sound/10.webp";
import locationSound11 from "../assets/images/case-studies/location-sound/11.webp";
import locationSound12 from "../assets/images/case-studies/location-sound/12.webp";
import locationSound13 from "../assets/images/case-studies/location-sound/13.webp";
import locationSound14 from "../assets/images/case-studies/location-sound/14.webp";
import locationSound15 from "../assets/images/case-studies/location-sound/15.webp";
import locationSound16 from "../assets/images/case-studies/location-sound/16.webp";
import locationSound17 from "../assets/images/case-studies/location-sound/17.webp";

import corporateAvCover from "../assets/images/case-studies/corporate-av/cover.webp";
import corporateAV01 from "../assets/images/case-studies/corporate-av/01.webp";
import corporateAV02 from "../assets/images/case-studies/corporate-av/02.webp";
import corporateAV03 from "../assets/images/case-studies/corporate-av/03.webp";
import corporateAV04 from "../assets/images/case-studies/corporate-av/04.webp";
import corporateAV05 from "../assets/images/case-studies/corporate-av/05.webp";
import corporateAV06 from "../assets/images/case-studies/corporate-av/06.webp";
import corporateAV07 from "../assets/images/case-studies/corporate-av/07.webp";
import corporateAV08 from "../assets/images/case-studies/corporate-av/08.webp";
import corporateAV09 from "../assets/images/case-studies/corporate-av/09.webp";
import corporateAV10 from "../assets/images/case-studies/corporate-av/10.webp";
import corporateAV11 from "../assets/images/case-studies/corporate-av/11.webp";
import corporateAV12 from "../assets/images/case-studies/corporate-av/12.webp";
import corporateAV13 from "../assets/images/case-studies/corporate-av/13.webp";
import corporateAV14 from "../assets/images/case-studies/corporate-av/14.webp";
import corporateAV15 from "../assets/images/case-studies/corporate-av/15.webp";
import corporateAV16 from "../assets/images/case-studies/corporate-av/16.webp";
import corporateAV17 from "../assets/images/case-studies/corporate-av/17.webp";
import corporateAV18 from "../assets/images/case-studies/corporate-av/18.webp";
import corporateAV19 from "../assets/images/case-studies/corporate-av/19.webp";
import corporateAV20 from "../assets/images/case-studies/corporate-av/20.webp";
import corporateAV21 from "../assets/images/case-studies/corporate-av/21.webp";
import corporateAV22 from "../assets/images/case-studies/corporate-av/22.webp";

export type CaseStudyCategory =
  | "sound"
  | "av-events"
  | "audiovisual"
  | "corporate-av"
  | "infrastructure"
  | "software";

export type CaseStudy = {
  id: string;
  slug: string;
  category: CaseStudyCategory;
  translationKey: string;
  coverImage: string;
  galleryImages?: string[];
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "sound-engineering-live-events",
    slug: "sound-engineering-live-events",
    category: "sound",
    translationKey: "items.soundEngineeringLiveEvents",
    coverImage: soundEngineeringCover,
    galleryImages: [
        soundEngineering01,
        soundEngineering02,
        soundEngineering03,
        soundEngineering04,
        soundEngineering05,
        soundEngineering06,
        soundEngineering07,
        soundEngineering08,
        soundEngineering09,
        soundEngineering10,
        soundEngineering11,
        soundEngineering12,
        soundEngineering13,
        soundEngineering14,
        soundEngineering15,
        soundEngineering16,
        soundEngineering17
    ],
    tags: ["FOH", "Monitors", "Live Events", "Soundcheck"],
  },
  {
    id: "ominira",
    slug: "touring-sound-ominira",
    category: "sound",
    translationKey: "items.touringSoundOminira",
    coverImage: ominiraCover,
    galleryImages: [
        ominira01,
        ominira02,
        ominira03,
        ominira04
    ],
    tags: ["Touring", "Band Technician", "Live Sound"],
  },
  {
    id: "location-sound-audio-postproduction",
    slug: "location-sound-audio-postproduction",
    category: "audiovisual",
    translationKey: "items.locationSoundAudioPostproduction",
    coverImage: locationSoundCover,
    galleryImages: [
        locationSound01,
        locationSound02,
        locationSound03,
        locationSound04,
        locationSound05,
        locationSound06,
        locationSound07,
        locationSound08,
        locationSound09,
        locationSound10,
        locationSound11,
        locationSound12,
        locationSound13,
        locationSound14,
        locationSound15,
        locationSound16,
        locationSound17
    ],
    tags: ["Location Sound", "Dialogue Editing", "Postproduction"],
  },
  {
    id: "corporate-av-hybrid-events",
    slug: "corporate-av-hybrid-events",
    category: "corporate-av",
    translationKey: "items.corporateAvHybridEvents",
    coverImage: corporateAvCover,
    galleryImages: [
        corporateAV01,
        corporateAV02,
        corporateAV03,
        corporateAV04,
        corporateAV05,
        corporateAV06,
        corporateAV07,
        corporateAV08,
        corporateAV09,
        corporateAV10,
        corporateAV11,
        corporateAV12,
        corporateAV13,
        corporateAV14,
        corporateAV15,
        corporateAV16,
        corporateAV17,
        corporateAV18,
        corporateAV19,
        corporateAV20,
        corporateAV21,
        corporateAV22
    ],
    tags: ["Corporate AV", "Conferences", "Hybrid Events", "Streaming"],
  },
  {
    id: "homelab-self-hosted-infrastructure",
    slug: "homelab-self-hosted-infrastructure",
    category: "infrastructure",
    translationKey: "items.homelabSelfHostedInfrastructure",
    coverImage: homelabCover,
    galleryImages: [],
    tags: ["Linux", "Docker", "NGINX", "UniFi"],
  },
  {
    id: "personal-website-software-projects",
    slug: "personal-website-software-projects",
    category: "software",
    translationKey: "items.personalWebsiteSoftwareProjects",
    coverImage: softwareCover,
    galleryImages: [],
    tags: ["React", "Spring Boot", "CI/CD", "PostgreSQL"],
  },
];
