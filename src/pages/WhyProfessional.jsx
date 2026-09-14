import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import building2 from '../assets/building_2.jpeg';

const WhyProfessional = () => {
  const { isEnglish } = useTranslation('common');

  const principles = isEnglish ? [
    ['Transparency and accountability', 'Income and expenses are reported clearly, regularly and accessibly.'],
    ['Trust', 'A reliable and consistent approach to decisions, finances and service delivery.'],
    ['Professionalism', 'Planned, systematic management supported by specialist teams.'],
    ['Solution focus', 'Fast, practical and lasting solutions instead of postponing problems.'],
    ['Sustainability', 'Meeting today’s needs while protecting the future of the building and community.'],
    ['Legal compliance', 'Condominium, employment, financial and other legal processes handled in line with regulations.'],
    ['Regular oversight', 'Technical, financial and operational processes followed continuously, not only when problems occur.'],
    ['Quality of life', 'Creating calmer and more liveable spaces through cleaning, security, landscaping and maintenance.'],
  ] : [
    ['Şeffaflık ve Hesap Verebilirlik', 'Gelir-gider hareketlerinin anlaşılır, düzenli ve erişilebilir şekilde raporlanması.'],
    ['Güven', 'Yönetim kararlarında, mali süreçlerde ve hizmetlerin yürütülmesinde güvenilir ve tutarlı bir yaklaşım.'],
    ['Profesyonellik', 'Alanında uzman ekiplerle, planlı ve sistemli yönetim.'],
    ['Çözüm Odaklılık', 'Sorunları ertelemek yerine hızlı, uygulanabilir ve kalıcı çözümler üretmek.'],
    ['Sürdürülebilirlik', 'Bugünün ihtiyaçlarını karşılarken yapının ve yaşam alanının geleceğini de gözetmek.'],
    ['Mevzuata Uygunluk', 'Kat mülkiyeti, iş hukuku, mali yükümlülükler ve diğer hukuki süreçleri mevzuata uygun yürütmek.'],
    ['Düzenli Denetim', 'Teknik, mali ve operasyonel süreçleri yalnızca sorun çıktığında değil, sürekli takip etmek.'],
    ['Yaşam Kalitesi', 'Temizlikten güvenliğe, peyzajdan teknik bakıma kadar daha huzurlu ve yaşanabilir alanlar oluşturmak.'],
  ];

  return (
    <div className="py-20 bg-[#f8f5ee] dark:bg-background-dark">
      <div className="container-custom max-w-6xl">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h1 className="brand-display section-title">{isEnglish ? 'Why Asya City?' : 'Neden Asya City?'}</h1>
          <p className="brand-display text-2xl md:text-3xl text-primary dark:text-secondary mt-5">
            {isEnglish ? 'We do not only manage living spaces; we protect their value and prepare them for the future.' : 'Yaşam alanlarını yalnızca yönetmiyor, değerini koruyor ve geleceğe hazırlıyoruz.'}
          </p>
        </div>

        <div className="max-w-6xl rounded-lg mx-auto bg-white dark:bg-surface-dark p-8 md:p-12 shadow-soft border-t-4 border-secondary space-y-5 text-text-light dark:text-text-dark-light leading-relaxed">
          {isEnglish ? (
            <>
              <p>At Asya City, we do not see apartment and site management as only collecting dues, handling maintenance and completing daily tasks. Our aim is to build a professional management approach that creates peace, trust, order and sustainability in living spaces.</p>
              <p>Every site and building has its own needs. We plan management processes around those needs rather than fixed templates, managing financial processes, technical maintenance, legal work, personnel and security with transparency, accountability and regular oversight.</p>
              <p>People are at the centre of our management approach. We protect the rights of owners, the peace of residents and the culture of shared living while treating the technical and economic value of the building as a core responsibility.</p>
            </>
          ) : (
            <>
              <p>Asya City olarak site ve bina yönetimini yalnızca aidat toplama, bakım ve günlük işlerin yürütülmesinden ibaret görmüyoruz. Amacımız; yaşam alanlarında huzur, güven, düzen ve sürdürülebilirlik sağlayan profesyonel bir yönetim anlayışı oluşturmaktır.</p>
              <p>Her sitenin ve her yapının kendine özgü ihtiyaçları olduğuna inanıyor; yönetim süreçlerini hazır kalıplarla değil, ihtiyaçlara uygun çözümlerle planlıyoruz. Mali süreçlerden teknik bakıma, hukuki işlemlerden personel ve güvenlik hizmetlerine kadar tüm çalışmalarımızı şeffaflık, hesap verebilirlik ve düzenli denetim esasına göre yürütüyoruz.</p>
              <p>Yönetim anlayışımızın merkezinde insan vardır. Kat maliklerinin haklarını, sakinlerin huzurunu ve ortak yaşam kültürünü gözetirken; yapının teknik ve ekonomik değerinin korunmasını da temel sorumluluklarımız arasında görüyoruz.</p>
            </>
          )}
        </div>

        <div className="mt-12 grid md:grid-cols-[0.9fr_1.1fr] rounded-md overflow-hidden gap-8 items-center">
          <img src={building2} alt={isEnglish ? 'Professionally managed residential community' : 'Profesyonel olarak yönetilen konut yaşam alanı'} className="w-full h-72 rounded-lg md:h-96 object-cover" />
          <div>
            <p className="eyebrow text-secondary mb-4">{isEnglish ? 'A BETTER STANDARD' : 'DAHA İYİ BİR STANDART'}</p>
            <h2 className="brand-display text-3xl md:text-4xl font-bold text-primary dark:text-white">
              {isEnglish ? 'Professional management is visible in everyday life.' : 'Profesyonel yönetim günlük yaşamda görünür hale gelir.'}
            </h2>
            <p className="mt-5 text-text-light dark:text-text-dark-light leading-relaxed">
              {isEnglish
                ? 'A well-managed building is easier to maintain, easier to understand and more pleasant to live in. We turn that standard into consistent routines, clear records and accountable follow-up.'
                : 'İyi yönetilen bir bina daha kolay korunur, daha anlaşılır ve daha huzurlu bir yaşam alanı olur. Bu standardı düzenli rutinlere, açık kayıtlara ve hesap verebilir takibe dönüştürüyoruz.'}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="brand-display text-3xl md:text-4xl font-bold text-center text-primary dark:text-white mb-8">{isEnglish ? 'Our principles' : 'İlkelerimiz'}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {principles.map(([title, description], index) => (
              <article key={title} className="bg-white rounded-md dark:bg-surface-dark p-6 shadow-soft border-l-4 border-secondary">
                <div className="flex gap-4">
                  <span className="text-secondary font-bold">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-bold text-lg text-primary dark:text-white mb-2">{title}</h3>
                    <p className="text-sm text-text-light dark:text-text-dark-light leading-relaxed">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 bg-primary-dark rounded-lg text-white p-8 md:p-12 text-center">
          <p className="brand-display text-2xl md:text-3xl">{isEnglish ? 'At Asya City, management means building trust, creating order and adding value to living spaces.' : 'Asya City’de yönetim; yalnızca işleri yürütmek değil, güven oluşturmak, düzen sağlamak ve yaşam alanlarına değer katmaktır.'}</p>
          <p className="mt-5 text-secondary font-bold">{isEnglish ? 'More transparent management, safer buildings, more liveable spaces.' : 'Daha şeffaf yönetim, daha güvenli yapılar, daha yaşanabilir alanlar.'}</p>
          <Link to="/site-teklif-formu" className="inline-flex mt-7 btn-primary">{isEnglish ? 'Request a proposal' : 'Teklif alın'}</Link>
        </div>
      </div>
    </div>
  );
};

export default WhyProfessional;
