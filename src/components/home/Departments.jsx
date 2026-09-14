import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import financeImage from '../../assets/idari_mali_yonetim.jpeg';
import technicalImage from '../../assets/teknik_hizmelteri.jpeg';
import communicationImage from '../../assets/tamizlik_hizmetleri.jpeg';
import legalImage from '../../assets/hukuk.jpeg';

const Departments = () => {
  const { t, isEnglish } = useTranslation('home');

  const departments = [
    {
      key: 'finance',
      image: financeImage,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/services#finance'
    },
    {
      key: 'technical',
      image: technicalImage,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: '/services#technical'
    },
    {
      key: 'communication',
      image: communicationImage,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      link: '/services#communication'
    },
    {
      key: 'legal',
      image: legalImage,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
        </svg>
      ),
      link: '/services#legal'
    }
  ];

  return (
    <section className="py-6 bg-white dark:bg-background-dark">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="section-title">{t('departments.title')}</h2>
          <p className="section-subtitle">{t('departments.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <div 
              key={dept.key}
              className="group bg-surface overflow-hidden rounded-md dark:bg-surface-dark p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border dark:border-dark-border cursor-pointer"
            >
              <div className="h-44 -mx-8 -mt-8 mb-6 overflow-hidden">
                <img
                  src={dept.image}
                  alt={t(`departments.${dept.key}.title`)}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="w-16 h-16 bg-primary-dark rounded-full flex items-center justify-center text-secondary mb-5 group-hover:scale-110 transition-transform">
                {dept.icon}
              </div>
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-2">
                {t(`departments.${dept.key}.title`)}
              </h3>
              <p className="text-text-light dark:text-text-dark-light text-sm mb-4">
                {t(`departments.${dept.key}.description`)}
              </p>
              <Link 
                to={dept.link}
                className="inline-flex items-center text-secondary font-medium hover:text-secondary-dark transition-colors text-sm"
              >
                {isEnglish ? 'Learn More' : 'Detaylı Bilgi'}
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
