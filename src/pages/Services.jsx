import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Services = () => {
  const { t, isEnglish } = useTranslation('home');

  const departments = ['finance', 'technical', 'communication', 'legal'];

  return (
    <div className="py-20">
      <div className="container-custom">
        <h1 className="section-title text-center">
          {isEnglish ? 'Our Services' : 'Hizmetlerimiz'}
        </h1>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {isEnglish 
            ? 'Comprehensive site management services in Ankara' 
            : 'Ankara\'da kapsamlı site yönetim hizmetleri'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {departments.map((department) => (
            <section
              key={department}
              id={department}
              className="scroll-mt-24 bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-soft border border-border dark:border-dark-border"
            >
              <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">
                {t(`departments.${department}.title`)}
              </h2>
              <p className="text-text-light dark:text-text-dark-light">
                {t(`departments.${department}.description`)}
              </p>
              <p className="mt-4 text-sm text-text-light dark:text-text-dark-light">
                {isEnglish
                  ? 'Contact us to discuss how this service can support your site.'
                  : 'Bu hizmetin sitenize nasıl katkı sağlayacağını görüşmek için bizimle iletişime geçin.'}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
