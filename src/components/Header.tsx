import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PAGES } from './PageNavigation';

interface HeaderProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="editorial-header"
      className="fixed top-0 left-0 right-0 z-40 bg-white/50 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_1px_8px_rgba(0,0,0,0.03)] transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Editorial Brand / Title */}
        <button
          id="brand-home-link"
          onClick={() => handleNavClick('trang-chu')}
          className="text-left group focus:outline-none cursor-pointer"
        >
          <span className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#1C1A17] block leading-none">
            Linh Đặng
          </span>
          <span className="text-[11px] tracking-wider uppercase text-[#6B7280] font-medium mt-1 block">
            Biên tập viên & Dịch giả
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-[14px]">
          {PAGES.map((page) => {
            const isActive = activePage === page.id;
            const isContact = page.id === 'lien-he';
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
                <span>{page.shortLabel}</span>
                {isActive && !isContact && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#995B24]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#201E1B] hover:text-[#000] focus:outline-none cursor-pointer"
            aria-label="Chuyển đổi menu"
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
            {PAGES.map((page) => {
              const isActive = activePage === page.id;
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
                  <span>{page.label}</span>
                  <span className="text-xs text-[#6B7280]">
                    {isActive ? 'Đang xem' : '→'}
                  </span>
                </button>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#6B7280] font-mono">
              <span>{PERSONAL_INFO.domain}</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
