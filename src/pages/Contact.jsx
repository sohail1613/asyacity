import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { FormInput, FormSubmit, FormTextarea } from '../components/common/FormControls';
import { SITE_CONFIG } from '../config/site';
import { submitForm } from '../utils/submitForm';
import asyaCityLogo from '../assets/amblem sosyal medya için (1).jpg';

const Contact = () => {
  const { t, isEnglish } = useTranslation('common');
  const copy = t('contact', { returnObjects: true });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      await submitForm(event.currentTarget, SITE_CONFIG.forms.subjects.contact);
      setSubmitted(true);
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-8 md:py-8 bg-gradient-to-b from-background via-background to-primary/5 dark:from-background-dark dark:via-background-dark dark:to-primary/10">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-text dark:text-text-dark tracking-tight mb-4">
            {copy.title}
          </h1>
          <p className="text-base md:text-lg text-text-light dark:text-text-dark-light">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Form Card (7 cols) */}
          <div className="relative overflow-hidden lg:col-span-7 bg-surface dark:bg-surface-dark p-8 md:p-6 rounded-3xl border border-border/80 dark:border-dark-border shadow-hard">
            <img src={asyaCityLogo} alt="" aria-hidden="true" className="pointer-events-none absolute right-0 bottom-12 w-72 max-w-[55%] opacity-[0.045]" />
            <div className="relative z-10">
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <FormInput label={copy.name} name="name" required placeholder={copy.name} />
                <FormInput label={copy.email} name="email" type="email" required placeholder={isEnglish ? 'your@email.com' : 'ornek@email.com'} />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <FormInput label={copy.phone} name="phone" type="tel" required placeholder="05XX XXX XX XX" />
                <FormInput label={copy.site} name="site" placeholder={isEnglish ? 'e.g. Asya Residence' : 'ör. Asya Sitesi'} />
              </div>

              <FormTextarea
                label={copy.message}
                name="message"
                required
                rows="4"
                placeholder={isEnglish ? 'How can we help you?' : 'Size nasıl yardımcı olabiliriz?'}
              />

              <FormSubmit className="w-full" loading={isSubmitting}>
                {copy.submit}
              </FormSubmit>

              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 animate-fade-in">
                  <p className="text-sm font-medium">{copy.success}</p>
                </div>
              )}
              {submitError && (
                <p className="text-sm text-rose-600 dark:text-rose-400">{isEnglish ? 'We could not send your request. Please try again.' : 'Talebiniz gönderilemedi. Lütfen tekrar deneyin.'}</p>
              )}
            </form>
            </div>
          </div>

          {/* Contact Info Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Info Box */}
            <div className="bg-surface dark:bg-surface-dark p-6 rounded-3xl border border-border/80 dark:border-dark-border shadow-soft space-y-1">
              <h3 className="text-xl font-bold text-text dark:text-text-dark border-b border-border/60 dark:border-dark-border/60 pb-4">
                {isEnglish ? 'Contact Details' : 'İletişim Bilgileri'}
              </h3>

              <div className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-text-light dark:text-text-dark-light">{isEnglish ? 'Address' : 'Adres'}</div>
                  <div className="font-semibold text-text dark:text-text-dark text-sm mt-0.5">{SITE_CONFIG.company.address}</div>
                  <div className="text-xs text-text-light dark:text-text-dark-light mt-0.5">{SITE_CONFIG.office.locations}</div>
                </div>
              </div>

              <div className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-text-light dark:text-text-dark-light">{isEnglish ? 'Phone' : 'Telefon'}</div>
                  <div className="font-semibold text-text dark:text-text-dark text-sm mt-0.5">{SITE_CONFIG.company.phone}</div>
                </div>
              </div>

              {/* Email Item */}
              <div className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-light">
                    {isEnglish ? 'Email' : 'E-posta'}
                  </div>
                  <div className="font-semibold text-text dark:text-text-dark text-sm mt-0.5">
                    {SITE_CONFIG.company.email}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 group p-3 rounded-xl hover:bg-primary/5 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-secondary dark:text-secondary-light">
                    {isEnglish ? 'Working Hours' : 'Çalışma Saatleri'}
                  </div>
                  <div className="text-xs text-text dark:text-text-dark space-y-0.5 mt-1">
                    <div>{SITE_CONFIG.office.weekdays}</div>
                    <div>{SITE_CONFIG.office.saturday}</div>
                    <div className="text-text-light dark:text-text-dark-light">{SITE_CONFIG.office.sunday}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${SITE_CONFIG.company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-medium hover:shadow-hard hover:-translate-y-0.5 transition-all duration-300"
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
