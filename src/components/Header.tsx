import React, { useState } from 'react';
import { Menu, X, BookOpen, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PAGES } from './PageNavigation';

interface HeaderProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPageObj = PAGES.find((p) => p.id === activePage) || PAGES[0];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="editorial-header"
      className="fixed top-0 left-0 right-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E6E1D8] shadow-[0_1px_8px_rgba(0,0,0,0.02)] transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Editorial Brand / Title */}
        <button
          id="brand-home-link"
          onClick={() => handleNavClick('trang-chu')}
          className="text-left group focus:outline-none flex items-center gap-3 cursor-pointer"
        >
          <span className="w-9 h-9 rounded-full border border-[#201E1B]/20 flex items-center justify-center bg-[#F4EFEA] text-[#201E1B] text-xs font-serif font-bold group-hover:border-[#201E1B] group-hover:bg-[#EAE4DC] transition-colors">
            LĐ
          </span>
          <div>
            <span className="font-serif-editorial text-xl sm:text-2xl font-bold tracking-tight text-[#1C1A17] block leading-none">
              Linh Đặng
            </span>
            <span className="text-[11px] tracking-wider uppercase text-[#6B665E] font-medium mt-1 block">
              Biên tập viên & Dịch giả
            </span>
          </div>
        </button>

        {/* Desktop Editorial Navigation (Separated Pages) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 text-[14px]">
          {PAGES.map((page) => {
            const isActive = activePage === page.id;
            return (
              <button
                key={page.id}
                id={`nav-${page.id}`}
                onClick={() => handleNavClick(page.id)}
                className={`px-3 py-2 transition-all relative font-medium flex items-center gap-1.5 cursor-pointer rounded-xs ${
                  isActive
                    ? 'text-[#1C1A17] font-bold bg-[#F4EFEA]'
                    : 'text-[#6B665E] hover:text-[#1C1A17] hover:bg-[#F4EFEA]/50'
                }`}
              >
                <span className="text-[10px] font-mono opacity-70">
                  {page.pageNum}
                </span>
                <span>{page.shortLabel}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#995B24]" />
                )}
              </button>
            );
          })}

          <div className="h-4 w-[1px] bg-[#E6E1D8] mx-2" />

          {/* Current Page Tracker & Domain Stamp */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#995B24] tracking-wide px-2 py-1 bg-[#F4EFEA] border border-[#E6E1D8]">
              <Layers size={11} />
              <span>{currentPageObj.pageNum}/06</span>
            </span>
            <span className="hidden lg:inline-flex items-center text-[11px] font-mono text-[#8E877D] tracking-wide px-2 py-1 bg-[#FBF9F5] border border-[#E6E1D8]">
              {PERSONAL_INFO.domain}
            </span>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <span className="text-[11px] font-mono text-[#995B24] px-2 py-1 bg-[#F4EFEA] border border-[#E6E1D8]">
            {currentPageObj.pageNum}/06
          </span>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#201E1B] hover:text-[#000] focus:outline-none"
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
          className="md:hidden border-b border-[#E6E1D8] bg-[#FBF9F5] px-6 py-6 shadow-lg animate-in slide-in-from-top-2"
        >
          <div className="text-xs font-mono uppercase text-[#8E877D] mb-3 pb-2 border-b border-[#E6E1D8]">
            DANH MỤC CÁC TRANG HỒ SƠ
          </div>
          <div className="flex flex-col space-y-2">
            {PAGES.map((page) => {
              const isActive = activePage === page.id;
              return (
                <button
                  key={page.id}
                  id={`mobile-nav-${page.id}`}
                  onClick={() => handleNavClick(page.id)}
                  className={`text-left py-2.5 px-3 text-base font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#F4EFEA] text-[#995B24] font-bold border-l-2 border-[#995B24]'
                      : 'text-[#1C1A17] hover:bg-[#F4EFEA]/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#8E877D]">{page.pageNum}</span>
                    <span>{page.label}</span>
                  </div>
                  <span className="text-xs font-mono text-[#8E877D]">
                    {isActive ? 'Đang xem' : '→'}
                  </span>
                </button>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#E6E1D8] flex items-center justify-between text-xs text-[#8E877D] font-mono">
              <span>{PERSONAL_INFO.domain}</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
