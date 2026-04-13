import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import i18n, { supportedLanguages, type SupportedLanguage } from './index';
import Layout from '../components/layout/Layout';

function isSupportedLanguage(lang: string | undefined): lang is SupportedLanguage {
  return !!lang && supportedLanguages.includes(lang as SupportedLanguage);
}

export function LanguageRouteGuard() {
  const { lang } = useParams<{ lang: string }>();

  useEffect(() => {
    if (isSupportedLanguage(lang)) {
      if (i18n.language !== lang) {
        void i18n.changeLanguage(lang);
      }

      document.documentElement.lang = lang;
    }
  }, [lang]);

  if (!isSupportedLanguage(lang)) {
    return <Navigate to="/en" replace />;
  }

  return <Layout />;
}