import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const WhyProfessional = () => {
  const { isEnglish } = useTranslation('common');

  return (
    <div className="py-20">
      <div className="container-custom">
        <h1 className="section-title text-center">
          {isEnglish 
            ? 'Why Should Site Management Be Handled by Professional Companies?' 
            : 'Site Yönetimi Neden Profesyonel Şirketler Tarafından Yapılmalıdır?'}
        </h1>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          {isEnglish 
            ? 'Understanding the benefits of professional site management in Ankara' 
            : 'Ankara\'da profesyonel site yönetiminin avantajlarını anlamak'}
        </p>

        <div className="max-w-4xl mx-auto mt-12 space-y-8">
          <div className="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-soft border border-border dark:border-dark-border">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">
              {isEnglish ? 'Introduction' : 'Giriş'}
            </h2>
            <p className="text-text-light dark:text-text-dark-light leading-relaxed">
              {isEnglish 
                ? 'In modern urban life, apartment and site management goes far beyond collecting dues - it is a process of protecting residents\' comfort, property value, and legal rights...' 
                : 'Modern kent hayatında apartman ve site yönetimi; sadece aidat toplamaktan çok daha öte, sakinlerin konforunu, mülk değerini ve yasal haklarını koruma sürecidir...'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-border dark:border-dark-border">
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-3">
                {isEnglish ? 'Financial Transparency' : 'Finansal Şeffaflık'}
              </h3>
              <ul className="space-y-2 text-text-light dark:text-text-dark-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Annual budget preparation' : 'Yıllık bütçe hazırlığı'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Online payment systems' : 'Online ödeme sistemleri'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Regular financial reporting' : 'Düzenli finansal raporlama'}
                </li>
              </ul>
            </div>

            <div className="bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-border dark:border-dark-border">
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-3">
                {isEnglish ? 'Legal Compliance' : 'Yasal Uyum'}
              </h3>
              <ul className="space-y-2 text-text-light dark:text-text-dark-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'KMK compliance' : 'KMK uyumu'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'General assembly management' : 'Genel kurul yönetimi'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Legal debt collection' : 'Yasal icra takibi'}
                </li>
              </ul>
            </div>

            <div className="bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-border dark:border-dark-border">
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-3">
                {isEnglish ? 'Technical Maintenance' : 'Teknik Bakım'}
              </h3>
              <ul className="space-y-2 text-text-light dark:text-text-dark-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Periodic maintenance' : 'Periyodik bakımlar'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? '24/7 emergency response' : '7/24 acil müdahale'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Licensed service providers' : 'Lisanslı servis sağlayıcılar'}
                </li>
              </ul>
            </div>

            <div className="bg-surface dark:bg-surface-dark p-6 rounded-2xl shadow-soft border border-border dark:border-dark-border">
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-3">
                {isEnglish ? 'Resident Relations' : 'Sakin İlişkileri'}
              </h3>
              <ul className="space-y-2 text-text-light dark:text-text-dark-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Neighbor conflict resolution' : 'Komşu uyuşmazlık çözümü'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Communication channels' : 'İletişim kanalları'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">✓</span>
                  {isEnglish ? 'Transparent management' : 'Şeffaf yönetim'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyProfessional;
