import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { SERVICE_IMAGES } from '../config/images';

const Services = () => {
  const { isEnglish } = useTranslation('home');

  const services = isEnglish ? [
    ['consulting', 'Professional site consulting', 'Management-plan review, assembly support and a practical operational roadmap.'],
    ['accounting', 'Transparent financial management and online operations', 'Digital tracking, secure online payments, budget planning and regular reporting.'],
    ['legal', 'Legal and administrative management', 'Dues tracking, assemblies, contracts and management-plan processes with expert support.'],
    ['technical', 'Technical maintenance, repair and response', 'Electrical, plumbing, elevators, generators and urgent technical coordination.'],
    ['cleaning', 'Professional cleaning and hygiene', 'Planned cleaning, waste organization, pest control and disinfection coordination.'],
    ['security', 'Security and reception services', 'Staff planning, visitor and vehicle entry tracking, CCTV and access systems.'],
    ['staff', 'Professional site staff services', 'Recruitment, shift planning and performance coordination for site personnel.'],
    ['landscape', 'Garden care and landscape management', 'Seasonal planting, mowing, pruning, irrigation and shared-space care.'],
    ['pool', 'Pool maintenance and management', 'Water analysis, equipment checks and safe seasonal pool preparation.'],
  ] : [
    ['consulting', 'Profesyonel Site Danışmanlık Hizmetleri', 'Yönetim planı incelemesi, genel kurul desteği ve operasyonel yol haritası.'],
    ['accounting', 'Şeffaf Mali Yönetim ve Online İşlemler', 'Borç-alacak takibi, güvenli online ödeme, bütçe hazırlığı ve düzenli mali raporlama.'],
    ['legal', 'Hukuki ve İdari Yönetim', 'Aidat takibi, genel kurul, sözleşme ve yönetim planı süreçlerinde uzman hukuki destek.'],
    ['technical', 'Teknik Bakım, Arıza ve Onarım Yönetimi', 'Elektrik, tesisat, asansör, jeneratör ve acil teknik müdahale süreçlerinin takibi.'],
    ['cleaning', 'Profesyonel Temizlik ve Hijyen Yönetimi', 'Ortak alan temizliği, atık düzeni, ilaçlama ve dezenfeksiyon organizasyonu.'],
    ['security', 'Güvenlik ve Danışma Hizmetleri', 'Personel planlaması, ziyaretçi ve araç giriş-çıkışı, CCTV ve geçiş sistemlerinin takibi.'],
    ['staff', 'Profesyonel Site Personel Hizmetleri', 'Site personelinin seçimi, vardiya planlaması ve performans takibinin yönetimi.'],
    ['landscape', 'Bahçe Bakımı ve Peyzaj Yönetimi', 'Çim, bitki, budama, sulama ve mevsimsel ortak alan düzenlemelerinin planlanması.'],
    ['pool', 'Site Havuz Bakım Hizmetleri', 'Su analizleri, ekipman kontrolleri ve sezon hazırlığının düzenli takibi.'],
  ];

  return (
    <div className="py-10">
      <div className="container-custom">
        <h1 className="brand-display section-title text-center">
          {isEnglish ? 'Our Services' : 'Hizmetlerimiz'}
        </h1>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {isEnglish ? 'Every operational need of your building, managed from one center.' : 'Bina ve sitenizin tüm yönetim ihtiyaçları tek merkezden, şeffaf ve profesyonel bir anlayışla yürütülür.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map(([key, title, description], index) => (
            <Link
              to={`/services/${key}`}
              key={key}
              id={key}
              className="group scroll-mt-24 rounded-md bg-surface dark:bg-surface-dark p-8 shadow-soft border-t-4 border-secondary hover:-translate-y-1 transition-transform"
            >
              <div className="relative h-72 md:h-80 overflow-hidden mb-6">
                <img src={SERVICE_IMAGES[key]} alt={title} className="h-full rounded-md w-full object-contain bg-surface dark:bg-surface-dark transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute rounded-md bottom-3 left-3 bg-primary-dark text-secondary px-3 py-1 text-sm font-bold">0{index + 1}</span>
              </div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-2xl font-bold text-text dark:text-text-dark flex-1">{title}</h2>
              </div>
              <p className="text-text-light dark:text-text-dark-light">
                {description}
              </p>
              <p className="mt-4 text-sm text-text-light dark:text-text-dark-light">
                {isEnglish ? 'Talk to our team about your site.' : 'Sitenizin ihtiyacını birlikte değerlendirelim.'}
              </p>
              <span className="mt-5 inline-flex items-center text-secondary font-semibold text-sm">{isEnglish ? 'View service details' : 'Hizmet detaylarını incele'} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          ))}
        </div>
        <div className="mt-14 bg-primary-dark text-white p-8 md:p-12 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div><p className="eyebrow text-secondary mb-3">{isEnglish ? 'FREE INITIAL ASSESSMENT' : 'ÜCRETSİZ ÖN KEŞİF'}</p><h2 className="brand-display text-3xl font-bold">{isEnglish ? 'Let’s build the right plan for your site.' : 'Siteniz için doğru yönetim planını oluşturalım.'}</h2></div>
          <a href="/site-teklif-formu" className="btn-primary whitespace-nowrap">{isEnglish ? 'Get a quote' : 'Teklif alın'}</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
