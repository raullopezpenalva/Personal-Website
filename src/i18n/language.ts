import { supportedLanguages, type SupportedLanguage } from "./index";

const LANGUAGE_STORAGE_KEY = "lang";

export function isSupportedLanguage(
  value: string | null | undefined,
): value is SupportedLanguage {
  return !!value && supportedLanguages.includes(value as SupportedLanguage);
}

export function getStoredLanguage(): SupportedLanguage | null {
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isSupportedLanguage(stored) ? stored : null;
}

export function setStoredLanguage(lang: SupportedLanguage): void {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
}

export function getBrowserLanguage(): SupportedLanguage {
  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("es")) {
    return "es";
  }

  return "en";
}

export function getPreferredLanguage(): SupportedLanguage {
  return getStoredLanguage() ?? getBrowserLanguage();
}
