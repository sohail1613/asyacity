import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const TrustAndFaq = () => {
  const { isEnglish } = useTranslation('common');
  const [openFaq, setOpenFaq] = useState(0);
  const faqs = isEnglish
    ? [
        ['What does a professional site manager handle?', 'We coordinate financial, technical, legal and resident-relations work as one accountable operating system.'],
        ['Can you take over an existing site?', 'Yes. We begin with a practical handover review, identify open issues and prepare a transparent transition plan.'],
        ['How do residents see financial information?', 'Regular reports, planned budgets and clear payment records make the operating picture easy to follow.'],
      ]
    : [
        ['Profesyonel site yönetimi neleri kapsar?', 'Finans, teknik, yasal süreçler ve sakin iletişimini tek bir sorumluluk sistemi içinde koordine ediyoruz.'],
        ['Mevcut bir sitenin yönetimini devralabilir misiniz?', 'Evet. Önce mevcut durumu ve açık işleri inceliyor, ardından şeffaf bir devir planı hazırlıyoruz.'],
        ['Sakinler mali bilgileri nasıl takip eder?', 'Düzenli raporlar, planlı bütçeler ve anlaşılır ödeme kayıtlarıyla yönetimin fotoğrafı herkes için görünür olur.'],
      ];

  return (
    <>
      <section className="py-24 bg-[#19382e] text-white">
        <div className="container-custom grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
          <div>
            <p className="eyebrow text-[#d8f05c] mb-5">{isEnglish ? 'The difference is operational' : 'Fark, işleyişte ortaya çıkar'}</p>
            <h2 className="display-copy text-4xl md:text-5xl font-extrabold leading-tight">
              {isEnglish ? 'Good management makes daily life feel lighter.' : 'İyi yönetim, günlük hayatı hafifletir.'}
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed max-w-lg">
              {isEnglish ? 'When budgets, repairs and decisions have a clear owner, residents spend less energy chasing answers and more time enjoying their home.' : 'Bütçelerin, bakımların ve kararların net bir sorumlusu olduğunda sakinler cevap aramakla daha az, yaşam alanlarının keyfini çıkarmakla daha çok ilgilenir.'}
            </p>
            <Link to="/why-professional" className="inline-flex mt-8 text-[#d8f05c] font-bold underline underline-offset-4">
              {isEnglish ? 'Why professional management?' : 'Neden profesyonel yönetim?'} <span className="ml-2">→</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {(isEnglish ? ['Clear monthly reporting', 'Planned maintenance', 'Calmer communication', 'Legal confidence'] : ['Anlaşılır aylık raporlar', 'Planlı bakım takvimi', 'Daha sakin iletişim', 'Yasal güven'])
              .map((item, index) => (
                <div key={item} className="border border-white/15 p-6 min-h-[150px]">
                  <span className="text-[#d8f05c] text-sm font-bold">0{index + 1}</span>
                  <h3 className="mt-10 text-xl font-bold">{item}</h3>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-custom grid lg:grid-cols-[.8fr_1.2fr] gap-16">
          <div>
            <p className="eyebrow text-[#637068] mb-4">{isEnglish ? 'Questions, answered' : 'Merak edilenler'}</p>
            <h2 className="display-copy text-4xl font-extrabold">{isEnglish ? 'A clearer way to choose your manager.' : 'Yönetim şirketinizi seçmenin daha net yolu.'}</h2>
          </div>
          <div className="border-t border-[#d9ded7] dark:border-[#304038]">
            {faqs.map(([question, answer], index) => (
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
            <p className="eyebrow text-[#19382e] mb-4">{isEnglish ? 'Start with a conversation' : 'Bir görüşmeyle başlayalım'}</p>
            <h2 className="display-copy text-4xl md:text-5xl font-extrabold text-[#19382e]">{isEnglish ? 'Bring clarity to your site.' : 'Sitenize netlik kazandırın.'}</h2>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center bg-[#19382e] text-white px-7 py-4 rounded-full font-bold hover:bg-black transition-colors whitespace-nowrap">
            {isEnglish ? 'Request a conversation' : 'Görüşme talep edin'} <span className="ml-3">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TrustAndFaq;
