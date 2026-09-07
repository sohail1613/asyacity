import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const { isEnglish } = useTranslation('common');

  return (
    <div className="py-20">
      <div className="container-custom">
        <h1 className="section-title text-center">
          {isEnglish ? 'About Us' : 'Hakkımızda'}
        </h1>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {isEnglish 
            ? 'Learn about Asya City Professional Site Management' 
            : 'Asya City Profesyonel Site Yönetimi hakkında'}
        </p>

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <div className="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-soft border border-border dark:border-dark-border">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">
              {isEnglish ? 'Our Story' : 'Hikayemiz'}
            </h2>
            <p className="text-text-light dark:text-text-dark-light leading-relaxed">
              {isEnglish 
                ? 'Asya City Professional Site Management was established to bring corporate vision to the sector...' 
                : 'Asya City Profesyonel Site Yönetimi, sektöre kurumsal vizyon kazandırmak amacıyla kurulmuştur...'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-soft border border-border dark:border-dark-border">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">
                {isEnglish ? 'Our Mission' : 'Misyonumuz'}
              </h3>
              <p className="text-text-light dark:text-text-dark-light text-sm leading-relaxed">
                {isEnglish 
                  ? 'To create a peaceful, transparent, and technologically integrated site ecosystem...' 
                  : 'Huzurlu, şeffaf ve teknolojiyle entegre bir site ekosistemi yaratmak...'}
              </p>
            </div>
            <div className="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-soft border border-border dark:border-dark-border">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">
                {isEnglish ? 'Our Vision' : 'Vizyonumuz'}
              </h3>
              <p className="text-text-light dark:text-text-dark-light text-sm leading-relaxed">
                {isEnglish 
                  ? 'To be the most trusted pioneer brand in facility and site management...' 
                  : 'Tesis yönetimi ve site işletmeciliğinde en güvenilir öncü marka olmak...'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
