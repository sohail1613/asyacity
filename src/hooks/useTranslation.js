import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = (namespace = 'common') => {
  // Locale content is intentionally kept in one object per language.
  const { t, i18n } = useI18nTranslation();
  
  return {
    t,
    i18n,
    locale: i18n.language,
    isEnglish: i18n.language === 'en',
  };
};
