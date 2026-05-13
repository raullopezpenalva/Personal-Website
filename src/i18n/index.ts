import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enServices from './locales/en/services.json';
import enProjects from './locales/en/projects.json';
import enBlog from './locales/en/blog.json';
import enContact from './locales/en/contact.json';
import enCard from './locales/en/card.json';
import enContactForm from './locales/en/contactForm.json';

import esCommon from './locales/es/common.json';
import esHome from './locales/es/home.json';
import esAbout from './locales/es/about.json';
import esServices from './locales/es/services.json';
import esProjects from './locales/es/projects.json';
import esBlog from './locales/es/blog.json';
import esContact from './locales/es/contact.json';
import esCard from './locales/es/card.json';
import esContactForm from './locales/es/contactForm.json';

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
        services: enServices,
        projects: enProjects,
        blog: enBlog,
        contact: enContact,
        card: enCard,
        contactForm: enContactForm,
      },
      es: {
        common: esCommon,
        home: esHome,
        about: esAbout,
        services: esServices,
        projects: esProjects,
        blog: esBlog,
        contact: esContact,
        card: esCard,
        contactForm: esContactForm,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    defaultNS,
    ns: ['common', 'home', 'about', 'services', 'projects', 'blog', 'contact', 'card', 'contactForm'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;