// src/i18n.tsx

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslate from './en.json';
import srTranslate from './sr.json';

// the translations
const resources = {
  en: {
    translation: enTranslate,
  },
  sr: {
    translation: srTranslate,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already escapes from xss
    },
  });

export default i18n;
