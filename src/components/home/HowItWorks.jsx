import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const HowItWorks = () => {
  const { t } = useTranslation('home');

  const steps = t('process.steps', { returnObjects: true }).map((step, index) => ({
    number: `0${index + 1}`,
    title: step.title,
    description: step.description
  }));

  const icons = [
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14m0 0l-6-6m6 6l-6 6"
        />
      </svg>
    )
  ];

  return (
    <section className="py-20 bg-black/30 gradient-section">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            {t('process.title')}
          </h2>
          <p className="section-subtitle">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Connection line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-secondary/30 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 shadow-md rounded-2xl">
                    <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center text-primary-dark font-bold text-2xl shadow-soft ">
                      {step.number}
                    </div>
                  </div>
                  <div className="w-14 h-14 shadow-md bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center text-primary dark:text-primary-light my-4">
                    {icons[index]}
                  </div>
                  <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-light dark:text-text-dark-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
