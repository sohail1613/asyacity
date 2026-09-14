import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import LoadingSpinner from './LoadingSpinner';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { LeftArrowIcon } from '../../assets/commonIcons/icon';

const LegalDocument = ({ title, intro, updated, sections }) => {
  const { isEnglish } = useTranslation('common');
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);

  const goHome = () => {
    setIsNavigating(true);
    window.setTimeout(() => navigate('/'), 250);
  };

  return (
    <div className="bg-background py-6 dark:bg-background-dark md:py-6">
      <article className="container-custom max-w-4xl">
        {/* <button
          type="button"
          onClick={goHome}
          disabled={isNavigating}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-gray-200 hover:text-primary-light disabled:cursor-wait disabled:opacity-70 dark:hover:bg-gray-800 dark:text-primary-light"
        >
          {isNavigating ? <LoadingSpinner /> : <span aria-hidden="true"> <LeftArrowIcon /> </span>}
          <span>{isEnglish ? 'Back to home' : 'Ana sayfaya dön'}</span>
        </button> */}
        <header className="mt-0 border-b border-border pb-8 dark:border-dark-border">
          <h1 className="text-3xl font-semibold text-text dark:text-text-dark md:text-4xl">{title}</h1>
          <p className="mt-4 text-base leading-7 text-text-light dark:text-text-dark-light">{intro}</p>
          <p className="mt-4 text-sm text-text-light dark:text-text-dark-light">
            {isEnglish ? 'Last updated:' : 'Son güncelleme:'} {updated}
          </p>
        </header>
        <div className="space-y-6 py-6">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-text dark:text-text-dark">{index + 1}. {section.title}</h2>
              <div className="mt-2 space-y-3 text-sm leading-7 text-text-light dark:text-text-dark-light">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        {/* <div className="border-t border-border pt-6 text-sm leading-7 text-text-light dark:border-dark-border dark:text-text-dark-light">
          {isEnglish
            ? 'This website document is general information. A Turkish-qualified lawyer should review the final version for your business, contracts, services and current legislation before publication.'
            : 'Bu web sitesi metni genel bilgilendirme içindir. Yayınlanmadan önce işletmenize, sözleşmelerinize, hizmetlerinize ve güncel mevzuata göre son metin bir Türkiye hukukçusu tarafından incelenmelidir.'}
        </div> */}
      </article>
    </div>
  );
};

export default LegalDocument;
