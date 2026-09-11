import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Contact = () => {
  const { t, isEnglish } = useTranslation('common');
  const copy = t('contact', { returnObjects: true });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-primary/5 dark:from-background-dark dark:via-background-dark dark:to-primary/10">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs font-bold uppercase tracking-wider mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {isEnglish ? 'Contact Us' : 'İletişim'}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-text dark:text-text-dark tracking-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-base md:text-lg text-text-light dark:text-text-dark-light">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-surface dark:bg-surface-dark p-8 md:p-10 rounded-3xl border border-border/80 dark:border-dark-border shadow-hard">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">
                {copy.formTitle}
              </h2>
              <p className="text-sm text-text-light dark:text-text-dark-light">
                {isEnglish
                  ? 'Fill out the form below and our team will reach out to you within 24 hours.'
                  : 'Aşağıdaki formu doldurun, ekibimiz 24 saat içinde sizinle iletişime geçsin.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
                    {copy.name} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all"
                      placeholder={copy.name}
                    />
                    <svg className="w-5 h-5 absolute left-3.5 top-3 text-text-light/60 dark:text-text-dark-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
                    {copy.email} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all"
                      placeholder={isEnglish ? 'your@email.com' : 'ornek@email.com'}
                    />
                    <svg className="w-5 h-5 absolute left-3.5 top-3 text-text-light/60 dark:text-text-dark-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
                    {copy.phone} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all"
                      placeholder={isEnglish ? '05XX XXX XX XX' : '05XX XXX XX XX'}
                    />
                    <svg className="w-5 h-5 absolute left-3.5 top-3 text-text-light/60 dark:text-text-dark-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>

                {/* Site/Building Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
                    {copy.site}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all"
                      placeholder={isEnglish ? 'e.g. Asya Residence' : 'ör. Asya Sitesi'}
                    />
                    <svg className="w-5 h-5 absolute left-3.5 top-3 text-text-light/60 dark:text-text-dark-light/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
                  {copy.message} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    required
                    rows="4"
                    className="w-full p-4 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all"
                    placeholder={isEnglish ? 'How can we help you?' : 'Size nasıl yardımcı olabiliriz?'}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary via-primary-light to-primary text-white font-bold text-base rounded-2xl shadow-medium hover:shadow-hard hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-primary/20"
              >
                <span>{copy.submit}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {submitted && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 animate-fade-in">
                  <svg className="w-6 h-6 flex-shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium">{copy.success}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Info Box */}
            <div className="bg-surface dark:bg-surface-dark p-8 rounded-3xl border border-border/80 dark:border-dark-border shadow-soft space-y-6">
              <h3 className="text-xl font-bold text-text dark:text-text-dark border-b border-border/60 dark:border-dark-border/60 pb-4">
                {isEnglish ? 'Contact Details' : 'İletişim Bilgileri'}
              </h3>

              {/* Address Item */}
              <div className="flex items-start space-x-4 group p-3 rounded-2xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-light">
                    {isEnglish ? 'Address' : 'Adres'}
                  </div>
                  <div className="font-semibold text-text dark:text-text-dark text-sm mt-0.5">
                    Ankara, Türkiye
                  </div>
                  <div className="text-xs text-text-light dark:text-text-dark-light mt-0.5">
                    Eryaman & Çankaya Bölge Ofisleri
                  </div>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start space-x-4 group p-3 rounded-2xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-light">
                    {isEnglish ? 'Phone' : 'Telefon'}
                  </div>
                  <div className="font-semibold text-text dark:text-text-dark text-sm mt-0.5">
                    {process.env.REACT_APP_PHONE || '0 (850) 480 05 25'}
                  </div>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start space-x-4 group p-3 rounded-2xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-light">
                    {isEnglish ? 'Email' : 'E-posta'}
                  </div>
                  <div className="font-semibold text-text dark:text-text-dark text-sm mt-0.5">
                    {process.env.REACT_APP_EMAIL || 'info@asyacity.com'}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 group p-3 rounded-2xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-light">
                    {isEnglish ? 'Working Hours' : 'Çalışma Saatleri'}
                  </div>
                  <div className="text-xs text-text dark:text-text-dark space-y-0.5 mt-1">
                    <div>Pzt-Cum: 09:00 - 18:00</div>
                    <div>Cmt: 10:00 - 14:00</div>
                    <div className="text-text-light dark:text-text-dark-light">Paz: Kapalı</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${process.env.REACT_APP_WHATSAPP || '905XXXXXXXXX'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-3xl shadow-medium hover:shadow-hard hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>{isEnglish ? 'Message on WhatsApp' : 'WhatsApp ile İletişime Geçin'}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
