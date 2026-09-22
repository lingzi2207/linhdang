import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { NAV_PAGES, UI_TEXT } from '../data/translations';

interface HeaderProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const t = UI_TEXT[language].header;

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="editorial-header"
      className="fixed top-0 left-0 right-0 z-40 bg-white/70 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Editorial Brand / Title */}
        <button
          id="brand-home-link"
          onClick={() => handleNavClick('trang-chu')}
          className="text-left group focus:outline-none cursor-pointer"
        >
          <span className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#1C1A17] block leading-none">
            {t.name}
          </span>
          <span className="text-[11px] tracking-wider uppercase text-[#6B7280] font-medium mt-1 block">
            {t.title}
          </span>
        </button>

        {/* Desktop Navigation & En/Vi Switcher */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <nav className="flex items-center space-x-1 lg:space-x-2 text-[14px]">
            {NAV_PAGES.map((page) => {
              const isActive = activePage === page.id;
              const isContact = page.id === 'lien-he';
              const label = page.shortLabel[language];
              return (
                <button
                  key={page.id}
                  id={`nav-${page.id}`}
                  onClick={() => handleNavClick(page.id)}
                  className={`px-3.5 py-2 transition-all relative font-medium cursor-pointer ${
                    isContact
                      ? isActive
                        ? 'bg-gray-200 text-[#1C1A17] font-bold border border-gray-300 rounded-xs'
                        : 'bg-gray-100 text-[#1C1A17] hover:bg-gray-200 border border-gray-300/80 rounded-xs'
                      : isActive
                      ? 'text-[#1C1A17] font-semibold bg-gray-100'
                      : 'text-[#6B7280] hover:text-[#1C1A17] hover:bg-gray-50'
                  }`}
                >
                  <span>{label}</span>
                  {isActive && !isContact && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#995B24]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Bilingual En / Vi Switcher Button */}
          <div className="pl-2 border-l border-gray-200 flex items-center">
            <div
              id="header-lang-switcher"
              className="inline-flex items-center p-0.5 rounded-sm bg-[#F3F4F6] border border-[#E5E7EB]"
              role="group"
              aria-label={t.langToggleAria}
            >
              <button
                id="btn-lang-vi"
                type="button"
                onClick={() => setLanguage('vi')}
                className={`px-2.5 py-1 text-xs font-bold transition-all rounded-xs cursor-pointer ${
                  language === 'vi'
                    ? 'bg-[#1C1A17] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#1C1A17]'
                }`}
                title="Tiếng Việt"
              >
                VI
              </button>
              <button
                id="btn-lang-en"
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-bold transition-all rounded-xs cursor-pointer ${
                  language === 'en'
                    ? 'bg-[#1C1A17] text-white shadow-xs'
                    : 'text-[#6B7280] hover:text-[#1C1A17]'
                }`}
                title="English"
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Mobile controls: Compact En/Vi toggle + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile En/Vi Switcher Button */}
          <button
            id="mobile-lang-quick-toggle"
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-[#E5E7EB] bg-white text-xs font-bold text-[#1C1A17] hover:bg-gray-50 cursor-pointer"
            aria-label={t.langToggleAria}
          >
            <Globe size={13} className="text-[#995B24]" />
            <span className={language === 'en' ? 'text-[#995B24] font-extrabold' : 'text-gray-400 font-medium'}>
              EN
            </span>
            <span className="text-gray-300">/</span>
            <span className={language === 'vi' ? 'text-[#995B24] font-extrabold' : 'text-gray-400 font-medium'}>
              VI
            </span>
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#201E1B] hover:text-[#000] focus:outline-none cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-b border-[#E5E7EB] bg-white px-6 py-6 shadow-lg animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-2">
            {NAV_PAGES.map((page) => {
              const isActive = activePage === page.id;
              const label = page.label[language];
              return (
                <button
                  key={page.id}
                  id={`mobile-nav-${page.id}`}
                  onClick={() => handleNavClick(page.id)}
                  className={`text-left py-2.5 px-3 text-base font-medium transition-colors flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-gray-100 text-[#995B24] font-bold border-l-2 border-[#995B24]'
                      : 'text-[#1C1A17] hover:bg-gray-50'
                  }`}
                >
                  <span>{label}</span>
                  <span className="text-xs text-[#6B7280]">
                    {isActive ? t.currentViewing : '→'}
                  </span>
                </button>
              );
            })}

            {/* Language Switcher inside Drawer */}
            <div className="pt-4 mt-2 border-t border-[#E5E7EB] flex items-center justify-between">
              <span className="text-xs text-[#6B7280] font-medium flex items-center gap-1.5">
                <Globe size={14} className="text-[#995B24]" />
                {language === 'vi' ? 'Ngôn ngữ hiển thị' : 'Display Language'}:
              </span>
              <div className="inline-flex items-center p-0.5 rounded-sm bg-[#F3F4F6] border border-[#E5E7EB]">
                <button
                  type="button"
                  onClick={() => setLanguage('vi')}
                  className={`px-3 py-1 text-xs font-bold rounded-xs cursor-pointer ${
                    language === 'vi'
                      ? 'bg-[#1C1A17] text-white shadow-xs'
                      : 'text-[#6B7280] hover:text-[#1C1A17]'
                  }`}
                >
                  Tiếng Việt
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-xs font-bold rounded-xs cursor-pointer ${
                    language === 'en'
                      ? 'bg-[#1C1A17] text-white shadow-xs'
                      : 'text-[#6B7280] hover:text-[#1C1A17]'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280] font-mono">
              <span>{PERSONAL_INFO.domain}</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


