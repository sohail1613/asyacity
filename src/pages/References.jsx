import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';

const REFERENCES_DATA = [
  { id: 1, name: 'PERA APT.', location: 'Çankaya / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 2, name: 'ZÜMRÜT YAŞAM KONUTLARI', location: 'Etimesgut / Ankara', category: 'site', type: 'Site' },
  { id: 3, name: 'BOTANİK SİTESİ', location: 'Sincan / Ankara', category: 'site', type: 'Site' },
  { id: 4, name: 'DEMİREL APARTMANI', location: 'Etimesgut / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 5, name: 'ÖZ APARTMANI', location: 'Etimesgut / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 6, name: 'MENEKŞE APARTMANI', location: 'Sincan / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 7, name: 'RABİA APARTMANI', location: 'Sincan / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 8, name: 'DOĞAPARK 2 SİTESİ', location: 'Sincan / Ankara', category: 'site', type: 'Site' },
  { id: 9, name: 'BALCI APARTMANI', location: 'Çankaya / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 10, name: 'PELİT ORMAN EVLERİ SİTESİ', location: 'Çankaya / Ankara', category: 'site', type: 'Site' },
  { id: 11, name: 'KARDEŞLER APARTMANI', location: 'Etimesgut / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 12, name: 'OSMAN DOĞAN APARTMANI', location: 'Sincan / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 13, name: 'BAĞLICA SÖĞÜT APARTMANI', location: 'Etimesgut / Ankara', category: 'apartment', type: 'Apartman' },
  { id: 14, name: 'ASYA EMİRKENT SİTESİ', location: 'Etimesgut / Ankara', category: 'site', type: 'Site' },
  { id: 15, name: 'KARDEŞKENT SİTESİ', location: 'Eryaman / Ankara', category: 'site', type: 'Site' },
  { id: 16, name: 'AKINCI OVASI VİLLALARI', location: 'Kahramankazan / Ankara', category: 'villa', type: 'Villa' },
  { id: 17, name: 'CUMHURİYET SİTESİ', location: 'Ankara', category: 'site', type: 'Site' },
  { id: 18, name: 'ASYA PARK RESIDENCE', location: 'Çankaya / Ankara', category: 'site', type: 'Site' },
  { id: 19, name: 'BAHÇELİEVLER YAŞAM SİTESİ', location: 'Yenimahalle / Ankara', category: 'site', type: 'Site' },
  { id: 20, name: 'Employment & Salary Disputes', location: 'Ankara', category: 'employment', type: 'Legal Case' },
  { id: 21, name: 'Workplace Accident Claims', location: 'Ankara', category: 'employment', type: 'Legal Case' },
  { id: 22, name: 'Compensation and Injury Claims', location: 'Ankara', category: 'employment', type: 'Legal Case' },
];

const References = () => {
  const { t } = useTranslation('common');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredReferences = REFERENCES_DATA.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category) => {
    if (category === 'site') {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" />
        </svg>
      );
    }
    if (category === 'villa') {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    }
    if (category === 'employment') {
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3l8 4v5c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V7l8-4zm0 5v5m0 0h.01M9 15h6" />
        </svg>
      );
    }
    return (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    );
  };

  return (
    <div className="py-8 md:py-8 bg-gradient-to-b from-background via-background to-primary/5 dark:from-background-dark dark:via-background-dark dark:to-primary/10">
      <div className="container-custom">
        {/* Header Top Section */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs font-bold uppercase tracking-wider mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            {t('references.eyebrow')}
          </div> */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-text dark:text-text-dark tracking-tight leading-tight mb-6">
            {t('references.title')}
          </h1>
          <p className="text-lg md:text-xl text-text-light dark:text-text-dark-light leading-relaxed max-w-3xl mx-auto">
            {t('references.subtitle')}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-6xl mx-auto mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-surface dark:bg-surface-dark border border-border dark:border-dark-border rounded-xl shadow-soft w-full md:w-auto">
            {[
              { id: 'all', label: t('references.allCategories') },
              { id: 'site', label: t('references.sites') },
              { id: 'apartment', label: t('references.apartments') },
              { id: 'villa', label: t('references.villas') },
              { id: 'employment', label: t('references.employment') },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-medium'
                    : 'text-text-light dark:text-text-dark-light hover:text-primary dark:hover:text-primary-light hover:bg-primary/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('references.searchPlaceholder')}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-border dark:border-dark-border bg-surface dark:bg-surface-dark text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-soft"
            />
            <svg className="w-5 h-5 absolute left-3.5 top-3.5 text-text-light dark:text-text-dark-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* References Grid */}
        {filteredReferences.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReferences.map((item) => (
              <div
                key={item.id}
                className="group relative bg-surface dark:bg-surface-dark p-6 rounded-3xl border border-border/80 dark:border-dark-border shadow-soft hover:shadow-hard hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex items-center gap-5"
              >
                {/* Decorative background circle */}
                <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-primary/5 dark:bg-primary/10 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                {/* Category Icon */}
                <div className="w-14 h-14 min-w-[3.5rem] rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                  {getCategoryIcon(item.category)}
                </div>

                {/* Details */}
                <div className="relative z-10 flex-grow">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-secondary dark:text-secondary-light">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold text-text dark:text-text-dark mt-0.5 group-hover:text-primary dark:group-hover:text-primary-light transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-text-light dark:text-text-dark-light mt-1.5">
                    <svg className="w-4 h-4 text-primary/70 dark:text-primary-light/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface dark:bg-surface-dark rounded-3xl border border-border dark:border-dark-border max-w-xl mx-auto">
            <svg className="w-12 h-12 mx-auto text-text-light dark:text-text-dark-light mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg font-medium text-text-light dark:text-text-dark-light">
              {t('references.noResults')}
            </p>
          </div>
        )}

        {/* CTA Bottom Box */}
        <div className="mt-6 bg-gradient-to-r from-primary via-primary-light to-primary p-8 md:p-12 rounded-3xl text-white shadow-hard flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Siteniz için Profesyonel Yönetim Teklifi Alın
            </h2>
            <p className="text-white/80 text-base md:text-lg">
              Asya City güvencesiyle sitenizde huzurlu, şeffaf ve düzenli bir yönetim sistemine hemen geçin.
            </p>
          </div>
          <Link
            to="/site-teklif-formu"
            className="px-8 py-4 bg-secondary hover:bg-secondary-dark text-text-dark font-bold text-base rounded-xl shadow-medium hover:scale-105 transition-all duration-300 whitespace-nowrap"
          >
            Teklif Formunu Doldurun
          </Link>
        </div>
      </div>
    </div>
  );
};

export default References;
