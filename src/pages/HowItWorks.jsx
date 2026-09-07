import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const HowItWorks = () => {
  const { isEnglish } = useTranslation('common');

  return (
    <div className="py-20">
      <div className="container-custom">
        <h1 className="section-title text-center">
          {isEnglish ? 'How It Works' : 'Nasıl Çalışır?'}
        </h1>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {isEnglish 
            ? 'Simple steps to professional site management' 
            : 'Profesyonel site yönetimine geçişin basit adımları'}
        </p>

        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-start gap-6 bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-border dark:border-dark-border">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary-dark font-bold text-xl flex-shrink-0">
                {step}
              </div>
              <div>
                <h3 className="text-lg font-bold text-text dark:text-text-dark">
                  {isEnglish ? `Step ${step}` : `Adım ${step}`}
                </h3>
                <p className="text-text-light dark:text-text-dark-light text-sm">
                  {isEnglish 
                    ? `Description of step ${step} in the process...` 
                    : `${step}. adımın açıklaması...`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
