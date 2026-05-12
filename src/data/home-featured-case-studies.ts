export type FeaturedCaseStudy = {
  id:
    | "technical-planning-events"
    | "network-scout"
    | "personal-website-infrastructure";
  translationKey: string;
  href: string;
};

export const homeFeaturedCaseStudies: FeaturedCaseStudy[] = [
  {
    id: "technical-planning-events",
    translationKey: "featuredCaseStudies.items.technicalPlanningEvents",
    href: "/projects/technical-planning-events",
  },
  {
    id: "network-scout",
    translationKey: "featuredCaseStudies.items.networkScout",
    href: "/projects/network-scout",
  },
  {
    id: "personal-website-infrastructure",
    translationKey: "featuredCaseStudies.items.personalWebsiteInfrastructure",
    href: "/projects/personal-website-infrastructure",
  },
];
