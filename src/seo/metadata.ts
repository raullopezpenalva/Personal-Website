import { caseStudyRoutes } from "../data/case-study-routes.ts";
import { supportedLanguages, type SupportedLanguage } from "../i18n/languages.ts";
import enSeo from "../i18n/locales/en/seo.json" with { type: "json" };
import esSeo from "../i18n/locales/es/seo.json" with { type: "json" };
import enProjects from "../i18n/locales/en/projects.json" with { type: "json" };
import esProjects from "../i18n/locales/es/projects.json" with { type: "json" };

export const SITE_ORIGIN = "https://raullopezpenalva.com";
const SITE_NAME = "Raúl López Penalva";
export const SOCIAL_IMAGE_PATH = "/images/og/profile.webp";
const copy = { en: enSeo, es: esSeo };
const projects: Record<SupportedLanguage, {
  items: Record<string, { title?: string; summary?: string }>;
}> = { en: enProjects, es: esProjects };

export type SeoCopy = { title: string; description: string };
export type SeoPage = {
  path: string;
  indexable: boolean;
  translations: Partial<Record<SupportedLanguage, SeoCopy>>;
};

export type PageMetadata = {
  language: SupportedLanguage;
  title: string;
  description: string;
  canonical: string | null;
  indexable: boolean;
  alternates: { language: SupportedLanguage; href: string }[];
  image: string;
  imageAlt: string;
};

const generalPages = ["home", "about", "services", "projects", "contact", "blog"] as const;

export const seoPages: SeoPage[] = [
  ...generalPages.map((page) => ({
    path: page === "home" ? "" : `/${page}`,
    indexable: page !== "blog",
    translations: { en: enSeo.pages[page], es: esSeo.pages[page] },
  })),
  ...Object.entries(caseStudyRoutes).map(([contentKey, route]) => ({
    path: `/projects/${route.slug}`,
    indexable: true,
    translations: Object.fromEntries(supportedLanguages.flatMap((language) => {
      // Read exact locale content. No i18next fallback may invent a translation.
      const item = projects[language].items[contentKey];
      return item?.title && item?.summary
        ? [[language, { title: item.title, description: item.summary }]]
        : [];
    })),
  })),
];

function hasCopy(value: SeoCopy | undefined): value is SeoCopy {
  return !!value?.title.trim() && !!value.description.trim();
}

function isLanguage(value: string): value is SupportedLanguage {
  return supportedLanguages.some((language) => language === value);
}

export function resolveMetadata(pathname: string, pages: readonly SeoPage[] = seoPages): PageMetadata | null {
  const path = pathname.split(/[?#]/)[0].replace(/\/+$/, "");
  const [, language, ...segments] = path.split("/");
  if (!language || !isLanguage(language)) return null;

  const suffix = segments.length ? `/${segments.join("/")}` : "";
  const page = pages.find((entry) => entry.path === suffix);
  const translation = page?.translations[language];
  if (!page || !hasCopy(translation)) return null;

  return {
    language,
    title: `${translation.title} | ${SITE_NAME}`,
    description: translation.description,
    canonical: `${SITE_ORIGIN}/${language}${page.path}`,
    indexable: page.indexable,
    alternates: page.indexable
      ? supportedLanguages.filter((locale) => hasCopy(page.translations[locale]))
        .map((locale) => ({ language: locale, href: `${SITE_ORIGIN}/${locale}${page.path}` }))
      : [],
    image: `${SITE_ORIGIN}${SOCIAL_IMAGE_PATH}`,
    imageAlt: copy[language].imageAlt,
  };
}

export function getNotFoundContent(pathname: string) {
  const language: SupportedLanguage = pathname.split("/")[1] === "es" ? "es" : "en";
  return { language, ...copy[language].notFound };
}

export function getUnavailableMetadata(pathname: string): PageMetadata {
  const { language } = getNotFoundContent(pathname);
  return {
    language,
    title: `${copy[language].notFound.title} | ${SITE_NAME}`,
    description: copy[language].notFound.description,
    canonical: null,
    indexable: false,
    alternates: [],
    image: `${SITE_ORIGIN}${SOCIAL_IMAGE_PATH}`,
    imageAlt: copy[language].imageAlt,
  };
}
