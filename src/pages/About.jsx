import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const About = () => {
  const { isEnglish } = useTranslation('common');

  return (
    <div className="py-20">
      <div className="container-custom">
        <p className="eyebrow text-secondary text-center mb-4">ASYA CITY</p>
        <h1 className="brand-display section-title text-center">
          {isEnglish ? 'About Us' : 'Hakkımızda'}
        </h1>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {isEnglish 
            ? 'Living spaces managed with trust, transparency and expertise.'
            : 'Güven, şeffaflık ve uzmanlıkla yönetilen yaşam alanları.'}
        </p>

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <div className="bg-primary-dark text-white p-8 md:p-12 shadow-soft">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">
              {isEnglish ? 'Our approach' : 'Yönetim anlayışımız'}
            </h2>
            <p className="text-text-light dark:text-text-dark-light leading-relaxed">
              {isEnglish 
                ? 'Asya City reduces financial uncertainty, management disputes and operational gaps through an accountable management model. Legal, financial, administrative and technical work is coordinated by experienced teams so everyday life can continue with as little interruption as possible.'
                : 'Asya City; bina ve site yönetiminde karşılaşılan mali belirsizlikleri, yönetim kaynaklı uyuşmazlıkları ve operasyonel aksaklıkları azaltmak amacıyla şeffaflık, hesap verebilirlik ve uzmanlık temelli bir yönetim anlayışıyla hizmet verir. Hukuki, mali, idari ve teknik süreçleri profesyonel standartlarda yürütür.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f8f5ee] dark:bg-surface-dark p-8 shadow-soft border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">
                {isEnglish ? 'Our mission' : 'Misyonumuz'}
              </h3>
              <p className="text-text-light dark:text-text-dark-light text-sm leading-relaxed">
                {isEnglish 
                  ? 'To create peaceful, secure and sustainable living spaces through disciplined management.'
                  : 'Yaşam alanlarında huzur, güven ve sürdürülebilir yönetim sağlamak.'}
              </p>
            </div>
            <div className="bg-[#f8f5ee] dark:bg-surface-dark p-8 shadow-soft border-t-4 border-secondary">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">
                {isEnglish ? 'Our vision' : 'Vizyonumuz'}
              </h3>
              <p className="text-text-light dark:text-text-dark-light text-sm leading-relaxed">
                {isEnglish 
                  ? 'To be a trusted, value-creating management partner in the sector.'
                  : 'Sektörde güvenilen, değer katan bir yönetim markası olmak.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
