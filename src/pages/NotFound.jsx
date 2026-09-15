import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const NotFound = () => {
  const { isEnglish } = useTranslation('common');

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-20 text-center">
      <div className="max-w-xl">
        <p className="mb-4 text-7xl font-bold text-secondary">404</p>
        <h1 className="mb-4 text-3xl font-bold text-text dark:text-text-dark">
          {isEnglish ? 'Page not found' : 'Sayfa bulunamadı'}
        </h1>
        <p className="mb-8 text-text-light dark:text-text-dark-light">
          {isEnglish
            ? 'The page you are looking for does not exist or may have moved.'
            : 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.'}
        </p>
        <Link to="/" className="btn-primary">
          {isEnglish ? 'Back to home' : 'Ana sayfaya dön'}
        </Link>
      </div>
    </section>
  );
};

export default NotFound;