import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const Applications = ({ initialType }) => {
  const { t } = useTranslation('common');
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedType = searchParams.get('type');
  const [type, setType] = useState(
    requestedType === 'career' || requestedType === 'site'
      ? requestedType
      : initialType || 'site'
  );
  const [submitted, setSubmitted] = useState(false);
  const copy = t(`applications.${type}`, { returnObjects: true });

  useEffect(() => {
    if (requestedType === 'site' || requestedType === 'career') {
      setType(requestedType);
    }
  }, [requestedType]);

  const selectType = (nextType) => {
    setType(nextType);
    setSubmitted(false);
    setSearchParams({ type: nextType });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24 bg-gradient-to-b from-background via-background to-primary/5 dark:from-background-dark dark:via-background-dark dark:to-primary/10">
      <div className="container-custom max-w-5xl">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light text-xs font-bold uppercase tracking-wider mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {t('header.application')}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-text dark:text-text-dark tracking-tight mb-4">
            {t('applications.title')}
          </h1>
          <p className="text-base md:text-lg text-text-light dark:text-text-dark-light">
            {t('applications.subtitle')}
          </p>
        </div>

        {/* Top Segmented Pill Switcher (Attached Screenshot Design) */}
        <div className="bg-gray-200/70 dark:bg-gray-800/70 p-1.5 rounded-2xl flex items-center shadow-inner max-w-2xl mx-auto mb-12 border border-gray-300/50 dark:border-gray-700/60">
          {['site', 'career'].map((option) => {
            const optionCopy = t(`applications.${option}`, { returnObjects: true });
            const isActive = type === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => selectType(option)}
                className={`flex-1 py-3.5 px-6 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-3 ${
                  isActive
                    ? 'bg-white dark:bg-surface-dark text-primary dark:text-primary-light shadow-md font-bold scale-[1.01]'
                    : 'text-text-light dark:text-text-dark-light hover:text-text dark:hover:text-text-dark hover:bg-white/40 dark:hover:bg-gray-700/40'
                }`}
              >
                {option === 'site' ? (
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-6 0h6" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )}
                <span>{optionCopy.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Form Container */}
        <div className="bg-surface dark:bg-surface-dark p-7 md:p-12 rounded-3xl border border-border/80 dark:border-dark-border shadow-hard">
          <div className="mb-10 pb-6 border-b border-border/60 dark:border-dark-border/60">
            <h2 className="text-2xl md:text-3xl font-bold text-text dark:text-text-dark mb-2">
              {copy.title}
            </h2>
            <p className="text-text-light dark:text-text-dark-light text-sm md:text-base">
              {copy.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {type === 'site' ? <SiteQuoteForm copy={copy} /> : <HrForm copy={copy} />}

            <div className="pt-6 border-t border-border/60 dark:border-dark-border/60">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-primary via-primary-light to-primary text-white font-bold text-base rounded-2xl shadow-medium hover:shadow-hard hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-primary/20"
              >
                <span>{copy.submit}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {submitted && (
                <div className="mt-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center gap-3 animate-fade-in">
                  <svg className="w-6 h-6 flex-shrink-0 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm font-medium">{copy.success}</p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, name, type = 'text', required = false, ...props }) => (
  <div className="flex flex-col space-y-1.5">
    <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
      {label} {required && <span className="text-rose-500">*</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all duration-200"
      {...props}
    />
  </div>
);

const Section = ({ title, children }) => (
  <section className="bg-background/30 dark:bg-background-dark/30 p-6 md:p-8 rounded-2xl border border-border/50 dark:border-dark-border/50 space-y-6">
    <div className="flex items-center gap-3 mb-2">
      <div className="w-2.5 h-6 rounded-full bg-secondary" />
      <h3 className="text-lg md:text-xl font-bold text-primary dark:text-primary-light">
        {title}
      </h3>
    </div>
    {children}
  </section>
);

const SiteQuoteForm = ({ copy }) => (
  <>
    <Section title={copy.sections.personal}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={copy.name} name="name" required />
        <Field label={copy.email} name="email" type="email" required />
        <Field label={copy.phone} name="phone" type="tel" required />
        <div className="flex flex-col space-y-1.5 sm:col-span-2">
          <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
            {copy.message}
          </label>
          <textarea
            name="message"
            rows="3"
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all duration-200"
          />
        </div>
      </div>
    </Section>

    <Section title={copy.sections.site}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={copy.siteName} name="siteName" required />
        <Field label={copy.blocks} name="blocks" type="number" min="1" />
        <Field label={copy.address} name="address" />
        <Field label={copy.units} name="units" type="number" min="1" />
        <Field label={copy.offices} name="offices" type="number" min="0" />
        <Field label={copy.shops} name="shops" type="number" min="0" />
      </div>
    </Section>

    <Section title={copy.sections.services}>
      <div className="grid sm:grid-cols-2 gap-4">
        {copy.services.map((service) => (
          <div
            key={service}
            className="flex items-center justify-between gap-4 rounded-xl border border-border/70 dark:border-dark-border/70 bg-surface dark:bg-surface-dark p-4 text-sm font-medium shadow-soft"
          >
            <span className="text-text dark:text-text-dark">{service}</span>
            <select
              name={service}
              className="rounded-lg border border-border dark:border-dark-border bg-background dark:bg-background-dark px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-primary text-text dark:text-text-dark"
            >
              <option>{copy.yes}</option>
              <option>{copy.no}</option>
            </select>
          </div>
        ))}
      </div>
    </Section>

    <Section title={copy.sections.management}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={copy.heating} name="heating" />
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
            {copy.management}
          </label>
          <select
            name="management"
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all duration-200"
          >
            <option>{copy.managementOptions[0]}</option>
            <option>{copy.managementOptions[1]}</option>
            <option>{copy.managementOptions[2]}</option>
          </select>
        </div>
      </div>
    </Section>
  </>
);

const HrForm = ({ copy }) => (
  <>
    <Section title={copy.sections.personal}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={copy.fields.identity} name="identity" required />
        <Field label={copy.fields.name} name="name" required />
        <Field label={copy.fields.gender} name="gender" required />
        <Field label={copy.fields.marital} name="marital" required />
        <Field label={copy.fields.nationality} name="nationality" required />
        <Field label={copy.fields.birthPlace} name="birthPlace" required />
        <Field label={copy.fields.birthDate} name="birthDate" type="date" required />
        <Field label={copy.fields.blood} name="blood" required />
        <Field label={copy.fields.license} name="license" required />
        <Field label={copy.fields.smoking} name="smoking" required />
        <Field label={copy.fields.military} name="military" required />
        <Field label={copy.fields.photo} name="photo" type="file" accept="image/jpeg,image/png" required />
      </div>
    </Section>

    <Section title={copy.sections.contact}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label={copy.fields.mobile} name="mobile" type="tel" required />
        <Field label={copy.fields.email} name="email" type="email" required />
        <Field label={copy.fields.homePhone} name="homePhone" type="tel" />
        <Field label={copy.fields.address} name="address" />
      </div>
    </Section>

    <Section title={copy.sections.education}>
      {['last', 'previous'].map((school) => (
        <div key={school} className="mb-6 last:mb-0 p-4 rounded-xl bg-surface dark:bg-surface-dark border border-border/60 dark:border-dark-border/60">
          <h4 className="font-bold text-sm text-secondary dark:text-secondary-light uppercase tracking-wider mb-4">
            {copy.fields[school]}
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label={copy.fields.schoolType} name={`${school}SchoolType`} required />
            <Field label={copy.fields.schoolName} name={`${school}SchoolName`} required />
            <Field label={copy.fields.startYear} name={`${school}StartYear`} type="number" />
            <Field label={copy.fields.endYear} name={`${school}EndYear`} type="number" />
            <Field label={copy.fields.department} name={`${school}Department`} />
            <Field label={copy.fields.grade} name={`${school}Grade`} />
          </div>
        </div>
      ))}
    </Section>

    <Section title={copy.sections.computer}>
      <div className="grid sm:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((number) => (
          <div key={number} className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-surface dark:bg-surface-dark border border-border/60 dark:border-dark-border/60">
            <Field label={`${copy.fields.program} ${number}`} name={`program${number}`} />
            <Field label={copy.fields.level} name={`programLevel${number}`} />
          </div>
        ))}
      </div>
    </Section>

    <Section title={copy.sections.languages}>
      <div className="grid sm:grid-cols-2 gap-4">
        {copy.fields.languages.map((language) => (
          <Field key={language} label={language} name={`language-${language}`} />
        ))}
      </div>
    </Section>

    <Section title={copy.sections.experience}>
      {[1, 2, 3].map((number) => (
        <div key={number} className="grid sm:grid-cols-3 gap-4 mb-4 last:mb-0 p-3 rounded-xl bg-surface dark:bg-surface-dark border border-border/60 dark:border-dark-border/60">
          <Field label={`${copy.fields.workplace} ${number}`} name={`workplace${number}`} />
          <Field label={copy.fields.department} name={`workDepartment${number}`} />
          <Field label={copy.fields.role} name={`workRole${number}`} />
        </div>
      ))}
    </Section>

    <Section title={copy.sections.references}>
      {[1, 2].map((number) => (
        <div key={number} className="grid sm:grid-cols-3 gap-4 mb-4 last:mb-0 p-3 rounded-xl bg-surface dark:bg-surface-dark border border-border/60 dark:border-dark-border/60">
          <Field label={`${copy.fields.reference} ${number}`} name={`reference${number}`} />
          <Field label={copy.fields.profession} name={`profession${number}`} />
          <Field label={copy.fields.phone} name={`referencePhone${number}`} type="tel" />
        </div>
      ))}
    </Section>

    <Section title={copy.sections.other}>
      <div className="space-y-4">
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
            {copy.fields.clubs}
          </label>
          <textarea
            name="clubs"
            rows="3"
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all duration-200"
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-text-light dark:text-text-dark-light">
            {copy.fields.hobbies}
          </label>
          <textarea
            name="hobbies"
            rows="3"
            className="w-full px-4 py-3 rounded-xl border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 text-text dark:text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all duration-200"
          />
        </div>
      </div>
    </Section>

    <Section title={copy.sections.declaration}>
      <label className="flex gap-4 items-start text-sm cursor-pointer p-4 rounded-xl bg-surface dark:bg-surface-dark border border-border/70 dark:border-dark-border/70">
        <input type="checkbox" required className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-border" />
        <span className="text-text-light dark:text-text-dark-light leading-relaxed">{copy.fields.declaration}</span>
      </label>
    </Section>
  </>
);

export default Applications;
