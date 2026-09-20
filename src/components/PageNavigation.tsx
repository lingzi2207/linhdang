import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

export interface PageInfo {
  id: string;
  label: string;
  shortLabel: string;
  pageNum: string;
}

export const PAGES: PageInfo[] = [
  { id: 'trang-chu', label: 'Trang chủ', shortLabel: 'Trang chủ', pageNum: '01' },
  { id: 'du-an', label: 'Dự án tiêu biểu', shortLabel: 'Dự án tiêu biểu', pageNum: '02' },
  { id: 'gioi-thieu', label: 'Giới thiệu & Triết lý', shortLabel: 'Giới thiệu', pageNum: '03' },
  { id: 'kinh-nghiem', label: 'Kinh nghiệm & Dịch vụ', shortLabel: 'Kinh nghiệm', pageNum: '04' },
  { id: 'lien-he', label: 'Liên hệ & Hợp tác', shortLabel: 'Liên hệ', pageNum: '05' },
];

interface PageNavigationProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

export const PageNavigation: React.FC<PageNavigationProps> = ({ currentPage, onNavigate }) => {
  const currentIndex = PAGES.findIndex((p) => p.id === currentPage);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  // Keyboard navigation support: Left Arrow -> Previous page, Right Arrow -> Next page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowLeft' && prevPage) {
        onNavigate(prevPage.id);
      } else if (e.key === 'ArrowRight' && nextPage) {
        onNavigate(nextPage.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevPage, nextPage, onNavigate]);

  return (
    <div className="border-t border-[#E6E1D8] bg-[#FBF9F5] py-8 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Previous Page Button */}
          <div className="w-full sm:w-auto">
            {prevPage ? (
              <button
                id="btn-prev-page"
                onClick={() => onNavigate(prevPage.id)}
                className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#F4EFEA] hover:bg-[#EAE4DC] border border-[#E6E1D8] text-[#1C1A17] transition-all text-sm font-medium w-full sm:w-auto cursor-pointer"
              >
                <ArrowLeft size={16} className="text-[#995B24] group-hover:-translate-x-1 transition-transform" />
                <span>Trang trước: <strong className="font-semibold">{prevPage.shortLabel}</strong></span>
              </button>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>

          {/* Center: Clean page tabs */}
          <div className="flex items-center gap-1.5">
            {PAGES.map((page) => {
              const isActive = page.id === currentPage;
              return (
                <button
                  key={page.id}
                  id={`page-tab-btn-${page.id}`}
                  onClick={() => onNavigate(page.id)}
                  className={`px-3 py-1.5 text-xs transition-all border cursor-pointer ${
                    isActive
                      ? 'bg-[#1C1A17] text-[#FBF9F5] border-[#1C1A17] font-semibold'
                      : 'bg-[#FBF9F5] text-[#5E584F] border-[#E6E1D8] hover:bg-[#F4EFEA] hover:text-[#1C1A17]'
                  }`}
                >
                  {page.shortLabel}
                </button>
              );
            })}
          </div>

          {/* Next Page Button */}
          <div className="w-full sm:w-auto flex justify-end">
            {nextPage ? (
              <button
                id="btn-next-page"
                onClick={() => onNavigate(nextPage.id)}
                className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#1C1A17] hover:bg-[#33302B] text-[#FBF9F5] transition-all text-sm font-medium w-full sm:w-auto justify-center sm:justify-end cursor-pointer"
              >
                <span>Trang kế tiếp: <strong className="font-semibold">{nextPage.shortLabel}</strong></span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                id="btn-return-home"
                onClick={() => onNavigate('trang-chu')}
                className="group flex items-center gap-2 px-4 py-2.5 bg-[#F4EFEA] hover:bg-[#EAE4DC] border border-[#E6E1D8] text-[#1C1A17] transition-all text-sm font-medium cursor-pointer"
              >
                <span>Về Trang chủ</span>
                <BookOpen size={15} className="text-[#995B24]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
