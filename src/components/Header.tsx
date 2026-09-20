import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'trang-chu', label: 'Trang chủ' },
    { id: 'du-an', label: 'Dự án tiêu biểu' },
    { id: 'gioi-thieu', label: 'Giới thiệu' },
    { id: 'kinh-nghiem', label: 'Kinh nghiệm' },
    { id: 'suy-ngam', label: 'Suy ngẫm' },
    { id: 'lien-he', label: 'Liên hệ' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="editorial-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E6E1D8] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#FBF9F5]/70 backdrop-blur-sm border-b border-[#E6E1D8]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        {/* Editorial Brand / Title */}
        <button
          id="brand-home-link"
          onClick={() => handleNavClick('trang-chu')}
          className="text-left group focus:outline-none"
        >
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full border border-[#201E1B]/20 flex items-center justify-center bg-[#F4EFEA] text-[#201E1B] text-xs font-serif font-semibold group-hover:border-[#201E1B] transition-colors">
              LĐ
            </span>
            <div>
              <span className="font-serif-editorial text-xl sm:text-2xl font-semibold tracking-tight text-[#1C1A17] block leading-none">
                Linh Đặng
              </span>
              <span className="text-[11px] tracking-wider uppercase text-[#6B665E] font-medium mt-1 block">
                Biên tập viên & Dịch giả
              </span>
            </div>
          </div>
        </button>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-[14px]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 transition-colors relative font-medium ${
                  isActive
                    ? 'text-[#1C1A17] font-semibold'
                    : 'text-[#6B665E] hover:text-[#1C1A17]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1.5px] bg-[#1C1A17]" />
                )}
              </button>
            );
          })}

          <div className="h-4 w-[1px] bg-[#E6E1D8] mx-2" />

          {/* Domain Stamp */}
          <span className="inline-flex items-center text-[12px] font-mono text-[#8E877D] tracking-wide px-2.5 py-1 bg-[#F4EFEA] border border-[#E6E1D8] rounded-sm">
            {PERSONAL_INFO.domain}
          </span>
        </nav>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#201E1B] hover:text-[#000] focus:outline-none"
          aria-label="Chuyển đổi menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-b border-[#E6E1D8] bg-[#FBF9F5] px-6 py-6 shadow-lg animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className="text-left py-2.5 text-base font-serif-editorial text-[#1C1A17] border-b border-[#F4EFEA] hover:text-[#995B24] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans text-[#8E877D]">→</span>
              </button>
            ))}
            <div className="pt-3 flex items-center justify-between text-xs text-[#8E877D] font-mono">
              <span>{PERSONAL_INFO.domain}</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
