import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const LanguageSwitcher = () => {
  const { i18n, locale, isEnglish } = useTranslation('common');

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className="flex items-center rounded-lg border border-border dark:border-dark-border p-0.5" aria-label={isEnglish ? 'Choose language' : 'Dil seçin'}>
      {['tr', 'en'].map((language) => (
        <button key={language} type="button" onClick={() => switchLanguage(language)} className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors ${locale.startsWith(language) ? 'bg-primary text-white' : 'text-text-light dark:text-text-dark-light hover:text-primary'}`}>
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
