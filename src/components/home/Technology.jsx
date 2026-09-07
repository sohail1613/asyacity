import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const Technology = () => {
  const { t } = useTranslation('home');

  const features = t('technology.features', { returnObjects: true }).map((feature, index) => ({
    ...feature,
    icon: [
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
    (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      )
    ][index]
  }));

  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title">
            {t('technology.title')}
          </h2>
          <p className="section-subtitle">
            {t('technology.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl border border-border dark:border-dark-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-primary/5 dark:bg-primary/10 rounded-2xl flex items-center justify-center text-primary dark:text-primary-light mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-text-light dark:text-text-dark-light text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <div className="flex items-center gap-3 bg-primary-dark text-white px-6 py-3 rounded-xl hover:bg-primary transition-colors cursor-pointer">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <div>
              <div className="text-xs opacity-80">Download on the</div>
              <div className="font-bold">App Store</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-primary-dark text-white px-6 py-3 rounded-xl hover:bg-primary transition-colors cursor-pointer">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zM14.5 12.71l-5.15 5.15L14.5 12.71zM14.5 11.29l-5.15-5.15L14.5 11.29zM15.5 10.29l4.14-4.14a.999.999 0 011.36.1l.01.01v.01L15.5 10.29zM15.5 13.71l4.14 4.14a.999.999 0 01-1.37 1.45l-.01-.01-4.14-4.14-1.36 1.36 5.5 5.5a.999.999 0 001.41 0l.01-.01a.999.999 0 000-1.41l-5.5-5.5-1.36 1.36z"/>
            </svg>
            <div>
              <div className="text-xs opacity-80">GET IT ON</div>
              <div className="font-bold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
