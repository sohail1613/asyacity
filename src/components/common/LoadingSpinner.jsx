import React from 'react';

const LoadingSpinner = ({ size = 'h-4 w-4', className = '' }) => (
  <span
    className={`${size} inline-block animate-spin rounded-full border-2 border-current/30 border-t-current ${className}`}
    aria-hidden="true"
  />
);

export default LoadingSpinner;
