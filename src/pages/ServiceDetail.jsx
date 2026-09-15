import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { SERVICE_IMAGES } from '../config/images';
import { SERVICE_DETAILS, SERVICE_PAGE_CONTENT } from '../config/serviceDetails';
import { ArrowUpRight } from '../assets/commonIcons/icon';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t, isEnglish } = useTranslation('common');
  const service = t(`servicePages.${slug}`, { returnObjects: true });
  const detailDescriptions = SERVICE_DETAILS[isEnglish ? 'en' : 'tr'][slug];
  const pageContent = SERVICE_PAGE_CONTENT[isEnglish ? 'en' : 'tr'][slug];

  return (
    <div className="py-10">
      <div className="container-custom max-w-5xl">
        <div className="max-w-3xl mt-2">
          <h1 className="section-title">{service.title}</h1>
          <p className="section-subtitle">{service.intro}</p>
        </div>
        <img src={SERVICE_IMAGES[slug]} alt={service.title} className="mt-10 rounded-lg w-full h-auto max-h-[75vh] object-contain bg-surface dark:bg-surface-dark" />
        <section className="mt-14 max-w-4xl">
          <h2 className="text-3xl font-bold text-text dark:text-text-dark">
            {isEnglish ? 'A complete service for your site' : 'Siteniz için kapsamlı hizmet'}
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-light dark:text-text-dark-light">
            {pageContent.overview}
          </p>
        </section>
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-text dark:text-text-dark">
            {isEnglish ? 'What this service includes' : 'Bu hizmet neleri kapsar'}
          </h2>
          <p className="mt-3 text-text-light dark:text-text-dark-light max-w-3xl">
            {isEnglish
              ? 'A practical service scope designed around the daily needs of your building or site.'
              : 'Bina ve sitenizin günlük ihtiyaçlarına göre planlanan, uygulanabilir hizmet kapsamı.'}
          </p>
          <div className="grid md:grid-cols-3 gap-5 mt-7">
            {service.points.map((point, index) => (
              <div key={point} className="bg-surface dark:bg-surface-dark border border-border dark:border-dark-border p-6 rounded-2xl">
                <span className="text-secondary font-bold">0{index + 1}</span>
                <h2 className="font-bold text-lg mt-8">{point}</h2>
                <p className="mt-4 text-text-light dark:text-text-dark-light">{detailDescriptions[index]}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-14 grid md:grid-cols-2 gap-8">
          <div className="bg-surface dark:bg-surface-dark border border-border dark:border-dark-border p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark">
              {isEnglish ? 'What we handle' : 'Üstlendiğimiz işler'}
            </h2>
            <ul className="mt-6 space-y-4">
              {pageContent.scope.map((item) => (
                <li key={item} className="flex gap-3 text-text-light dark:text-text-dark-light">
                  <span className="text-secondary font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-primary-dark text-white p-8 rounded-2xl">
            <p className="eyebrow text-secondary mb-4">
              {isEnglish ? 'THE RESULT' : 'SONUÇ'}
            </p>
            <h2 className="text-2xl font-bold">
              {isEnglish ? 'Clearer daily management' : 'Daha düzenli günlük yönetim'}
            </h2>
            <p className="mt-5 leading-7 text-white/75">{pageContent.outcome}</p>
          </div>
        </section>
        <div className="mt-14 p-8 md:p-12 bg-primary-dark text-white rounded-2xl">
          <h2 className="text-3xl font-bold">{t('servicePages.ctaTitle')}</h2>
          <p className="mt-4 text-white/70 max-w-2xl">{t('servicePages.ctaText')}</p>
          <Link to="/site-teklif-formu" className="inline-flex mt-7 btn-primary gap-x-2">{t('header.getQuote')} <ArrowUpRight stroke={2} /> </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
