import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { SITE_CONFIG } from '../../config/site';
import asyaCityLogo from '../../assets/amblem sosyal medya için (1).jpg';
import Logo from "../../assets/logo.png";
import { ArrowUpRight } from '../../assets/commonIcons/icon';

const Footer = () => {
  const { t, isEnglish } = useTranslation('common');

  const quickLinks = [
    { path: '/', label: t('header.home') },
    { path: '/services', label: t('header.services') },
    { path: '/why-professional', label: t('header.whyProfessional') },
    // { path: '/how-it-works', label: t('header.howItWorks') },
    // { path: '/pricing', label: t('header.pricing') },
    { path: '/about', label: t('header.about') },
    // { path: '/blog', label: t('header.blog') },
    { path: '/contact', label: t('header.contact') },
  ];

  const serviceLinks = [
    { path: '/services#accounting', label: isEnglish ? 'Finance & Accounting' : 'Finans & Muhasebe' },
    { path: '/services#technical', label: isEnglish ? 'Technical & Maintenance' : 'Teknik & Bakım' },
    { path: '/services#communication', label: isEnglish ? 'Resident Relations' : 'İletişim & Sakin İlişkileri' },
    { path: '/services#legal', label: isEnglish ? 'Legal & Administrative' : 'Yasal & İdari Süreçler' },
  ];

  return (
    <footer className="bg-primary-600 text-white/90">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-4 p-3 w-fit">
              <img src={Logo} alt="Asya City" className="w-48 h-auto" />
            </div>
            <p className="text-white/70 text-sm mb-4">
              {t('footer.tagline')}
            </p>
            {/* <div className="flex space-x-4">
              <a href={SITE_CONFIG.developer.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-white/70 hover:text-secondary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/70">{SITE_CONFIG.company.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white/70">{SITE_CONFIG.company.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white/70">{SITE_CONFIG.company.email}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <svg className="w-5 h-5 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-white/70">{t('footer.monFri')}</div>
                  <div className="text-white/70">{t('footer.sat')}</div>
                  <div className="text-white/70">{t('footer.sun')}</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">{isEnglish ? 'Developer' : 'Geliştirici'}</h4>
            <p className="text-white/70 text-sm mb-3">{SITE_CONFIG.developer.name}</p>
            <a href={`mailto:${SITE_CONFIG.developer.email}`} className="block text-white/70 hover:text-secondary transition-colors text-sm mb-2">
              {SITE_CONFIG.developer.email}
            </a>
            <a href={SITE_CONFIG.developer.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 hover:text-secondary transition-colors text-sm">
              <span>LinkedIn</span>
              <span aria-hidden="true"><ArrowUpRight/> </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Asya City. {t('footer.allRights')}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-secondary transition-colors">{t('footer.privacy')}</Link>
              <Link to="/terms" className="hover:text-secondary transition-colors">{t('footer.terms')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
