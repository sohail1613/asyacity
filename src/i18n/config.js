import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import trCommon from './translations/tr/common.json';
import trHome from './translations/tr/home.json';
import enCommon from './translations/en/common.json';
import enHome from './translations/en/home.json';

const resources = {
  tr: {
    common: trCommon,
    home: trHome,
  },
  en: {
    common: enCommon,
    home: enHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
