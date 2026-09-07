import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Pricing = () => {
  const { isEnglish } = useTranslation('common');

  return (
    <div className="py-20">
      <div className="container-custom">
        <h1 className="section-title text-center">
          {isEnglish ? 'Pricing' : 'Fiyatlandırma'}
        </h1>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {isEnglish 
            ? 'Transparent pricing for professional site management' 
            : 'Profesyonel site yönetimi için şeffaf fiyatlandırma'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((plan) => (
            <div key={plan} className="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-soft border border-border dark:border-dark-border text-center">
              <h3 className="text-xl font-bold text-text dark:text-text-dark">
                {isEnglish ? `Plan ${plan}` : `Plan ${plan}`}
              </h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-primary dark:text-primary-light">₺{plan * 50}</span>
                <span className="text-text-light dark:text-text-dark-light">/ay</span>
              </div>
              <ul className="space-y-3 text-left mb-8">
                <li className="flex items-center gap-2 text-sm text-text-light dark:text-text-dark-light">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? `Feature ${plan}.1` : `Özellik ${plan}.1`}
                </li>
                <li className="flex items-center gap-2 text-sm text-text-light dark:text-text-dark-light">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? `Feature ${plan}.2` : `Özellik ${plan}.2`}
                </li>
                <li className="flex items-center gap-2 text-sm text-text-light dark:text-text-dark-light">
                  <span className={plan > 1 ? 'text-secondary' : 'text-gray-400'}>✓</span>
                  {isEnglish ? `Feature ${plan}.3` : `Özellik ${plan}.3`}
                </li>
              </ul>
              <button className="btn-primary w-full">
                {isEnglish ? 'Get Started' : 'Başla'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
