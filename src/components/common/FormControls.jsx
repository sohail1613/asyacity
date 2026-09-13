import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const labelClass = 'text-sm font-medium text-text-light dark:text-text-dark-light';
const controlClass = 'w-full rounded-lg border border-border dark:border-dark-border bg-background/50 dark:bg-background-dark/50 px-4 py-3 text-sm text-text dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary focus:bg-surface dark:focus:bg-surface-dark transition-all duration-200';

const FieldLabel = ({ label, required }) => (
  <label className={labelClass}>
    {label} {required && <span className="text-rose-500">*</span>}
  </label>
);

const ControlWrapper = ({ label, required, children }) => (
  <div className="flex flex-col space-y-1.5">
    <FieldLabel label={label} required={required} />
    {children}
  </div>
);

export const FormInput = ({ label, name, type = 'text', required = false, icon, className = '', ...props }) => (
  <ControlWrapper label={label} required={required}>
    <div className={icon ? 'relative' : ''}>
      <input
        name={name}
        type={type}
        required={required}
        className={`${controlClass} ${icon ? 'pl-11' : ''} ${className}`}
        {...props}
      />
      {icon && <span className="absolute left-3.5 top-3 text-text-light/60 dark:text-text-dark-light/60">{icon}</span>}
    </div>
  </ControlWrapper>
);

export const FormTextarea = ({ label, name, required = false, className = '', ...props }) => (
  <ControlWrapper label={label} required={required}>
    <textarea
      name={name}
      required={required}
      className={`${controlClass} ${className}`}
      {...props}
    />
  </ControlWrapper>
);

export const FormSelect = ({ label, name, required = false, children, className = '', ...props }) => (
  <ControlWrapper label={label} required={required}>
    <select
      name={name}
      required={required}
      className={`${controlClass} ${className}`}
      {...props}
    >
      {children}
    </select>
  </ControlWrapper>
);

export const FormSubmit = ({ children, className = '', loading = false, ...props }) => (
  <button
    type="submit"
    disabled={loading}
    aria-busy={loading}
    className={`inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
    {...props}
  >
    {loading ? <LoadingSpinner size="h-5 w-5" className="text-white" /> : children}
  </button>
);
