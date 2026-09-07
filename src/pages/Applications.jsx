import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const Applications = ({ initialType }) => {
  const { t } = useTranslation('common');
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedType = searchParams.get('type');
  const [type, setType] = useState(requestedType === 'career' || requestedType === 'site' ? requestedType : (initialType || 'site'));
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
    <div className="py-20">
      <div className="container-custom max-w-5xl">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow text-secondary mb-4">{t('header.application')}</p>
          <h1 className="section-title">{t('applications.title')}</h1>
          <p className="section-subtitle">{t('applications.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div className="space-y-3 lg:sticky lg:top-28">
            {['site', 'career'].map((option) => {
              const optionCopy = t(`applications.${option}`, { returnObjects: true });
              return (
                <button key={option} type="button" onClick={() => selectType(option)} className={`w-full text-left p-6 rounded-2xl border transition-all ${type === option ? 'border-primary bg-primary text-white shadow-medium' : 'border-border dark:border-dark-border bg-surface dark:bg-surface-dark hover:border-primary'}`}>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">0{option === 'site' ? '1' : '2'}</span>
                  <h2 className="text-xl font-bold mt-3">{optionCopy.title}</h2>
                  <p className="text-sm mt-2 opacity-80">{optionCopy.description}</p>
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="bg-surface dark:bg-surface-dark p-7 md:p-9 rounded-2xl border border-border dark:border-dark-border shadow-soft space-y-8">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-2">{copy.title}</h2>
            <p className="text-text-light dark:text-text-dark-light mb-7">{copy.description}</p>
            {type === 'site' ? <SiteQuoteForm copy={copy} /> : <HrForm copy={copy} />}
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">{copy.submit}</button>
            {submitted && <p className="mt-4 text-sm text-success" role="status">{copy.success}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

const Field = ({ label, name, type = 'text', required = false, ...props }) => (
  <label className="text-sm font-medium">{label}<input name={name} type={type} required={required} className="form-input" {...props} /></label>
);

const Section = ({ title, children }) => (
  <section className="border-t border-border dark:border-dark-border pt-6">
    <h3 className="text-lg font-bold text-primary dark:text-primary-light mb-4">{title}</h3>
    {children}
  </section>
);

const SiteQuoteForm = ({ copy }) => (
  <>
    <Section title={copy.sections.personal}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={copy.name} name="name" required />
        <Field label={copy.email} name="email" type="email" required />
        <Field label={copy.phone} name="phone" type="tel" required />
        <label className="text-sm font-medium sm:col-span-2">{copy.message}<textarea name="message" rows="3" className="form-input" /></label>
      </div>
    </Section>
    <Section title={copy.sections.site}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={copy.siteName} name="siteName" required />
        <Field label={copy.blocks} name="blocks" type="number" min="1" />
        <Field label={copy.address} name="address" />
        <Field label={copy.units} name="units" type="number" min="1" />
        <Field label={copy.offices} name="offices" type="number" min="0" />
        <Field label={copy.shops} name="shops" type="number" min="0" />
      </div>
    </Section>
    <Section title={copy.sections.services}>
      <div className="grid sm:grid-cols-2 gap-3">{copy.services.map((service) => <label key={service} className="flex items-center justify-between gap-3 rounded-lg border border-border dark:border-dark-border p-3 text-sm">{service}<select name={service} className="rounded border border-border bg-background px-2 py-1 dark:bg-background-dark"><option>{copy.yes}</option><option>{copy.no}</option></select></label>)}</div>
    </Section>
    <Section title={copy.sections.management}>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={copy.heating} name="heating" />
        <label className="text-sm font-medium">{copy.management}<select name="management" className="form-input"><option>{copy.managementOptions[0]}</option><option>{copy.managementOptions[1]}</option><option>{copy.managementOptions[2]}</option></select></label>
      </div>
    </Section>
  </>
);

const HrForm = ({ copy }) => (
  <>
    <Section title={copy.sections.personal}>
      <div className="grid sm:grid-cols-2 gap-4">
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
      <div className="grid sm:grid-cols-2 gap-4"><Field label={copy.fields.mobile} name="mobile" type="tel" required /><Field label={copy.fields.email} name="email" type="email" required /><Field label={copy.fields.homePhone} name="homePhone" type="tel" /><Field label={copy.fields.address} name="address" /></div>
    </Section>
    <Section title={copy.sections.education}>{['last', 'previous'].map((school) => <div key={school} className="mb-5"><h4 className="font-semibold mb-3">{copy.fields[school]}</h4><div className="grid sm:grid-cols-2 gap-4"><Field label={copy.fields.schoolType} name={`${school}SchoolType`} required /><Field label={copy.fields.schoolName} name={`${school}SchoolName`} required /><Field label={copy.fields.startYear} name={`${school}StartYear`} type="number" /><Field label={copy.fields.endYear} name={`${school}EndYear`} type="number" /><Field label={copy.fields.department} name={`${school}Department`} /><Field label={copy.fields.grade} name={`${school}Grade`} /></div></div>)}</Section>
    <Section title={copy.sections.computer}><div className="grid sm:grid-cols-2 gap-4">{[1, 2, 3, 4].map((number) => <div key={number} className="grid grid-cols-2 gap-2"><Field label={`${copy.fields.program} ${number}`} name={`program${number}`} /><Field label={copy.fields.level} name={`programLevel${number}`} /></div>)}</div></Section>
    <Section title={copy.sections.languages}><div className="grid sm:grid-cols-2 gap-4">{copy.fields.languages.map((language) => <Field key={language} label={language} name={`language-${language}`} />)}</div></Section>
    <Section title={copy.sections.experience}>{[1, 2, 3].map((number) => <div key={number} className="grid sm:grid-cols-3 gap-4 mb-4"><Field label={`${copy.fields.workplace} ${number}`} name={`workplace${number}`} /><Field label={copy.fields.department} name={`workDepartment${number}`} /><Field label={copy.fields.role} name={`workRole${number}`} /></div>)}</Section>
    <Section title={copy.sections.references}>{[1, 2].map((number) => <div key={number} className="grid sm:grid-cols-3 gap-4 mb-4"><Field label={`${copy.fields.reference} ${number}`} name={`reference${number}`} /><Field label={copy.fields.profession} name={`profession${number}`} /><Field label={copy.fields.phone} name={`referencePhone${number}`} type="tel" /></div>)}</Section>
    <Section title={copy.sections.other}><label className="text-sm font-medium">{copy.fields.clubs}<textarea name="clubs" rows="3" className="form-input" /></label><label className="text-sm font-medium block mt-4">{copy.fields.hobbies}<textarea name="hobbies" rows="3" className="form-input" /></label></Section>
    <Section title={copy.sections.declaration}><label className="flex gap-3 items-start text-sm"><input type="checkbox" required className="mt-1" />{copy.fields.declaration}</label></Section>
  </>
);

export default Applications;
