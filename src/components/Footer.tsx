import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../data/translations';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = UI_TEXT[language].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="editorial-footer" className="bg-[#F4EFEA] border-t border-[#E6E1D8] py-16 sm:py-20 text-[#6B665E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Top Colophon Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[#E6E1D8]">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-serif-editorial text-2xl font-semibold text-[#1C1A17]">
                Linh Đặng
              </span>
              <span className="text-xs font-mono text-[#8E877D] tracking-wide px-2 py-0.5 border border-[#E6E1D8] bg-[#FBF9F5]">
                {PERSONAL_INFO.domain}
              </span>
            </div>
            <p className="text-xs font-sans text-[#5E584F] max-w-lg">
              {t.tagline}
            </p>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1C1A17] hover:text-[#995B24] transition-colors py-2 px-3 border border-[#E6E1D8] bg-[#FBF9F5] cursor-pointer"
          >
            <span>{t.backToTop}</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Middle Colophon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-mono">
          <div className="space-y-2">
            <span className="text-[#1C1A17] uppercase font-semibold block">{t.personalPositioningTitle}</span>
            <p className="text-[#6B665E] leading-relaxed whitespace-pre-line">
              {t.personalPositioningDesc}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#1C1A17] uppercase font-semibold block">{t.fastNavTitle}</span>
            <ul className="space-y-1 text-[#6B665E]">
              <li>
                <button onClick={() => onNavigate('trang-chu')} className="hover:text-[#1C1A17] cursor-pointer">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('du-an')} className="hover:text-[#1C1A17] cursor-pointer">
                  {t.navProjects}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gioi-thieu')} className="hover:text-[#1C1A17] cursor-pointer">
                  {t.navAbout}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kinh-nghiem')} className="hover:text-[#1C1A17] cursor-pointer">
                  {t.navExperience}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('suy-ngam')} className="hover:text-[#1C1A17] cursor-pointer">
                  {t.navEssays}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('lien-he')} className="hover:text-[#1C1A17] cursor-pointer">
                  {t.navContact}
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-[#1C1A17] uppercase font-semibold block">{t.colophonTitle}</span>
            <p className="text-[#6B665E] leading-relaxed">
              {t.colophonDesc}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#1C1A17] uppercase font-semibold block">{t.directContactTitle}</span>
            <p className="text-[#6B665E] leading-relaxed">
              Email: {PERSONAL_INFO.email}<br />
              {t.backupEmailLabel}: {PERSONAL_INFO.secondaryEmail}
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8E877D]">
          <div>
            {t.copyright}
          </div>
          <div>
            {t.subtitle}
          </div>
        </div>
      </div>
    </footer>
  );
};

