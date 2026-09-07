import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation('common');
  const service = t(`servicePages.${slug}`, { returnObjects: true });

  return (
    <div className="py-20">
      <div className="container-custom max-w-5xl">
        <Link to="/services" className="text-sm font-bold text-secondary">← {t('header.services')}</Link>
        <div className="max-w-3xl mt-8">
          <p className="eyebrow text-secondary mb-4">{t('header.services')}</p>
          <h1 className="section-title">{service.title}</h1>
          <p className="section-subtitle">{service.intro}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-14">
          {service.points.map((point, index) => (
            <div key={point} className="bg-surface dark:bg-surface-dark border border-border dark:border-dark-border p-6 rounded-2xl">
              <span className="text-secondary font-bold">0{index + 1}</span>
              <h2 className="font-bold text-lg mt-8">{point}</h2>
            </div>
          ))}
        </div>
        <div className="mt-14 p-8 md:p-12 bg-primary-dark text-white rounded-2xl">
          <h2 className="text-3xl font-bold">{t('servicePages.ctaTitle')}</h2>
          <p className="mt-4 text-white/70 max-w-2xl">{t('servicePages.ctaText')}</p>
          <Link to="/site-teklif-formu" className="inline-flex mt-7 btn-primary">{t('header.getQuote')} ↗</Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
