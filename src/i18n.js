// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './components/locales/en.json'
import srTranslation from './components/locales/sr';

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
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
