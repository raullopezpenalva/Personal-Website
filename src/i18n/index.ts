import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enVision from './locales/en/vision.json';
import enProjects from './locales/en/projects.json';
import enBlog from './locales/en/blog.json';
import enContact from './locales/en/contact.json';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esAbout from './locales/es/about.json';
import esVision from './locales/es/vision.json';
import esProjects from './locales/es/projects.json';
import esBlog from './locales/es/blog.json';
import esContact from './locales/es/contact.json';

export const defaultNS = 'common';
export const supportedLanguages = ['en', 'es'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        vision: enVision,
        projects: enProjects,
        blog: enBlog,
        contact: enContact,
      },
      es: {
        common: esCommon,
        home: esHome,
        about: esAbout,
        vision: esVision,
        projects: esProjects,
        blog: esBlog,
        contact: esContact,
      },
    },
    lng: 'es',
    fallbackLng: 'es',
    defaultNS,
    ns: ['common', 'home', 'about', 'projects', 'contact'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;