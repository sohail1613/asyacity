import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';
import asyaCityLogo from '../../assets/amblem sosyal medya için (1).jpg';
import Logo from "../../assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, isEnglish } = useTranslation('common');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/', label: t('header.home') },
    { path: '/about', label: t('header.corporate'), children: [{ path: '/about', label: t('header.about') }, { path: '/why-professional', label: t('header.whyProfessional') }] },
    { path: '/services', label: t('header.services'), children: [
      ['consulting', t('servicePages.consulting.title')], ['security', t('servicePages.security.title')], ['legal', t('servicePages.legal.title')], ['staff', t('servicePages.staff.title')], ['accounting', t('servicePages.accounting.title')], ['technical', t('servicePages.technical.title')], ['cleaning', t('servicePages.cleaning.title')], ['pool', t('servicePages.pool.title')], ['landscape', t('servicePages.landscape.title')]
    ].map(([slug, label]) => ({ path: `/services/${slug}`, label })) },
    // Site Management navigation temporarily hidden.
    { path: '/applications', label: t('header.application'), children: [{ path: '/site-teklif-formu', label: t('applications.site.title') }, { path: '/insan-kaynaklari-basvuru-formu', label: t('applications.career.title') }] },
    { path: '/referanslar', label: t('header.references') },
    { path: '/contact', label: t('header.contact') },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'bg-white/95 dark:bg-background-dark/95 shadow-soft backdrop-blur-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={Logo} alt="Asya City" className="w-16 sm:w-26 h-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link to={item.path} className={`px-3 py-2 font-medium rounded-lg text-base transition-all inline-flex items-center ${isActive(item.path) ? 'text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10' : 'text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                  {item.label}{item.children && <span className="ml-2 text-xs">⌄</span>}
                </Link>
                {item.children && <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute left-0 top-full mt-2 w-72 bg-white dark:bg-dark-surface rounded-xl shadow-hard border border-border dark:border-dark-border p-2 z-50">{item.children.map((child) => <Link key={child.path} to={child.path} className="block rounded-lg px-4 py-3 text-sm hover:bg-primary/5 dark:hover:bg-primary/10">{child.label}</Link>)}</div>}
              </div>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
            
            <Link to="/site-teklif-formu" className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5">
              {t('header.getQuote')}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isEnglish ? 'Toggle menu' : 'Menüyü aç/kapat'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="absolute left-0 right-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-border bg-white px-4 py-5 shadow-hard dark:border-dark-border dark:bg-background-dark lg:hidden">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10'
                      : 'text-text dark:text-text-dark hover:text-primary dark:hover:text-primary-light hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {navItems.filter((item) => item.children).map((item) => (
                <div key={`${item.path}-mobile`} className="border-t border-border dark:border-dark-border pt-3 mt-2">
                  <div className="px-4 py-2 text-sm font-semibold text-text-light dark:text-text-dark-light">{item.label}</div>
                  {item.children.map((child) => <Link key={child.path} to={child.path} className="block px-4 py-2 rounded-lg" onClick={() => setIsMenuOpen(false)}>{child.label}</Link>)}
                </div>
              ))}
              <div className="pt-4 mt-4 border-t border-border dark:border-dark-border">
                <Link
                  to="/site-teklif-formu"
                  className="block btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.getQuote')}
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
