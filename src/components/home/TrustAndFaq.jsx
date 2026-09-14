import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { ArrowUpRight } from '../../assets/commonIcons/icon';

const TrustAndFaq = () => {
  const { t } = useTranslation('common');
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = t('trust.faqs', { returnObjects: true });

  return (
    <>
      <section className="py-24 bg-primary-dark text-white">
        <div className="container-custom grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div>
            <p className="eyebrow text-secondary mb-5">{t('trust.eyebrow')}</p>
            <h2 className="brand-display text-4xl md:text-5xl font-bold leading-tight">
              {t('trust.title')}
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-lg">
              {t('trust.description')}
            </p>
            <Link to="/why-professional" className="inline-flex mt-8 text-[#d8f05c] font-bold underline underline-offset-4">
              {t('trust.link')} <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 ">
            {t('trust.items', { returnObjects: true }).map((item, index) => (
                <div key={item} className="border border-white/15 rounded-md shadow-md p-6 min-h-[150px]">
                  <span className="text-[#d8f05c] text-sm font-bold">0{index + 1}</span>
                  <h3 className="mt-10 text-xl font-bold">{item}</h3>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom grid lg:grid-cols-[.8fr_1.2fr] gap-16">
          <div>
            <p className="eyebrow text-[#637068] mb-4">{t('trust.faqEyebrow')}</p>
            <h2 className="display-copy text-4xl font-extrabold">{t('trust.faqTitle')}</h2>
          </div>
          <div className="border-t border-[#d9ded7] dark:border-[#304038]">
            {faqs.map(({ question, answer }, index) => (
              <div key={question} className="border-b border-[#d9ded7] dark:border-[#304038]">
                <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="w-full py-6 flex items-center justify-between gap-6 text-left font-bold text-lg">
                  <span>{question}</span><span className="text-2xl font-normal text-[#a6c42d]">{openFaq === index ? '−' : '+'}</span>
                </button>
                {openFaq === index && <p className="pb-6 text-[#637068] dark:text-[#aab9af] leading-relaxed max-w-2xl">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom pb-24">
        <div className="bg-[#d8f05c] rounded-[2rem] px-7 py-12 md:px-14 md:py-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <p className="eyebrow text-[#19382e] mb-4">{t('trust.ctaEyebrow')}</p>
            <h2 className="display-copy text-4xl md:text-5xl font-extrabold text-[#19382e]">{t('trust.ctaTitle')}</h2>
          </div>
              <Link to="/site-teklif-formu" className="inline-flex items-center justify-center bg-primary-dark text-white px-7 py-4 rounded-lg font-bold hover:bg-black transition-colors whitespace-nowrap">
            {t('trust.ctaButton')} <span className="ml-3"><ArrowUpRight /> </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TrustAndFaq;
