import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

export interface PageInfo {
  id: string;
  label: string;
  shortLabel: string;
  pageNum: string;
}

export const PAGES: PageInfo[] = [
  { id: 'trang-chu', label: 'Trang chủ & Tuyên ngôn', shortLabel: 'Trang chủ', pageNum: '01' },
  { id: 'du-an', label: 'Dự án & Ấn phẩm tiêu biểu', shortLabel: 'Dự án tiêu biểu', pageNum: '02' },
  { id: 'gioi-thieu', label: 'Giới thiệu & Triết lý', shortLabel: 'Giới thiệu', pageNum: '03' },
  { id: 'kinh-nghiem', label: 'Kinh nghiệm & Dịch vụ', shortLabel: 'Kinh nghiệm', pageNum: '04' },
  { id: 'suy-ngam', label: 'Suy ngẫm bên bàn chữ', shortLabel: 'Suy ngẫm', pageNum: '05' },
  { id: 'lien-he', label: 'Liên hệ & Hợp tác', shortLabel: 'Liên hệ', pageNum: '06' },
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
      // Avoid triggering when user is typing in an input or textarea
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
    <div className="border-t border-[#E6E1D8] bg-[#FBF9F5] py-10 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Page Switcher Control Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Previous Page Button */}
          <div className="w-full md:w-auto flex justify-start">
            {prevPage ? (
              <button
                id="btn-prev-page"
                onClick={() => onNavigate(prevPage.id)}
                className="group flex items-center gap-3 px-4 py-3 bg-[#F4EFEA] hover:bg-[#EAE4DC] border border-[#E6E1D8] text-[#1C1A17] transition-all text-sm font-medium w-full sm:w-auto justify-between sm:justify-start"
              >
                <ArrowLeft size={16} className="text-[#995B24] group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <span className="block text-[10px] font-mono uppercase text-[#8E877D] tracking-wider">
                    Trang trước · {prevPage.pageNum}
                  </span>
                  <span className="font-semibold">{prevPage.shortLabel}</span>
                </div>
              </button>
            ) : (
              <div className="hidden md:block w-36" />
            )}
          </div>

          {/* Center: Numerical Book Pagination Bar */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {PAGES.map((page, idx) => {
                const isActive = page.id === currentPage;
                return (
                  <button
                    key={page.id}
                    id={`page-num-btn-${page.id}`}
                    onClick={() => onNavigate(page.id)}
                    title={page.label}
                    className={`h-9 px-3 sm:px-3.5 text-xs font-mono tracking-wider transition-all flex items-center gap-1 border ${
                      isActive
                        ? 'bg-[#1C1A17] text-[#FBF9F5] border-[#1C1A17] font-bold shadow-xs'
                        : 'bg-[#FBF9F5] text-[#5E584F] border-[#E6E1D8] hover:bg-[#F4EFEA] hover:text-[#1C1A17]'
                    }`}
                  >
                    <span>{page.pageNum}</span>
                    <span className="hidden lg:inline text-[11px] font-sans font-normal ml-1">
                      {page.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
            <span className="text-[11px] font-mono text-[#8E877D] tracking-wide">
              Trang {PAGES[currentIndex]?.pageNum || '01'} / 06 · Có thể dùng phím mũi tên ← → để lật trang
            </span>
          </div>

          {/* Next Page Button */}
          <div className="w-full md:w-auto flex justify-end">
            {nextPage ? (
              <button
                id="btn-next-page"
                onClick={() => onNavigate(nextPage.id)}
                className="group flex items-center gap-3 px-4 py-3 bg-[#1C1A17] hover:bg-[#33302B] text-[#FBF9F5] transition-all text-sm font-medium w-full sm:w-auto justify-between sm:justify-end"
              >
                <div className="text-right">
                  <span className="block text-[10px] font-mono uppercase text-[#D4CDC3] tracking-wider">
                    Trang kế tiếp · {nextPage.pageNum}
                  </span>
                  <span className="font-semibold">{nextPage.shortLabel}</span>
                </div>
                <ArrowRight size={16} className="text-[#F4EFEA] group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button
                id="btn-return-home"
                onClick={() => onNavigate('trang-chu')}
                className="group flex items-center gap-3 px-4 py-3 bg-[#F4EFEA] hover:bg-[#EAE4DC] border border-[#E6E1D8] text-[#1C1A17] transition-all text-sm font-medium w-full sm:w-auto justify-between sm:justify-end"
              >
                <div className="text-right">
                  <span className="block text-[10px] font-mono uppercase text-[#8E877D] tracking-wider">
                    Hoàn tất hồ sơ
                  </span>
                  <span className="font-semibold">Quay lại Trang chủ</span>
                </div>
                <BookOpen size={16} className="text-[#995B24]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
