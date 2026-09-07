import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';

const Hero = () => {
  const { t } = useTranslation('home');

  return (
    <section className="relative min-h-[720px] flex items-center overflow-hidden bg-[#19382e]">
      <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#19382e] via-[#19382e]/90 to-[#19382e]/40" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Content */}
      <div className="relative container-custom py-36 md:py-44">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 text-[#d8f05c] eyebrow mb-7">
            <span className="w-2 h-2 bg-[#d8f05c] rounded-full animate-pulse" />
            <span>{t('hero.eyebrow')}</span>
          </div>

          {/* Heading */}
          <h1 className="display-copy text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[0.98] mb-7">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="inline-flex items-center justify-center bg-[#d8f05c] text-[#19382e] font-bold px-7 py-4 rounded-full hover:bg-white transition-colors w-full sm:w-auto text-center">
              {t('hero.primaryCta')}
            </Link>
            <Link to="/why-professional" className="inline-flex items-center justify-center border border-white/40 text-white font-bold px-7 py-4 rounded-full hover:bg-white/10 transition-colors w-full sm:w-auto text-center">
              {t('hero.secondaryCta')}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-sm text-white/70">{t('hero.stats.sites')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-sm text-white/70">{t('hero.stats.experience')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white/70">{t('hero.stats.satisfaction')}</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/70">{t('hero.stats.support')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
