import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './components/locales/en.json';
import srTranslation from './components/locales/sr.json'; // Assuming the file is named sr.json

// the translations
const resources = {
  en: {
    translation: enTranslation,
  },
  sr: {
    translation: srTranslation,
  },
};

i18n
  .use(LanguageDetector) // Add the language detector
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // Default language if detected language is not available
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator'], // Order of language detection
      caches: ['localStorage', 'cookie'], // Cache user language in localStorage or cookies
    },
  });

export default i18n;
