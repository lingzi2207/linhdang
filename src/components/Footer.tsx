import React from 'react';
import { ArrowUp, BookOpen, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
              Biên tập viên sách, dịch giả văn học & phi hư cấu, chuyên gia tư vấn xuất bản độc lập tại Việt Nam.
            </p>
          </div>

          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1C1A17] hover:text-[#995B24] transition-colors py-2 px-3 border border-[#E6E1D8] bg-[#FBF9F5]"
          >
            <span>Về đầu trang</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Middle Colophon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs font-mono">
          <div className="space-y-2">
            <span className="text-[#1C1A17] uppercase font-semibold block">ĐỊNH VỊ CÁ NHÂN</span>
            <p className="text-[#6B665E] leading-relaxed">
              Hà Nội & TP. Hồ Chí Minh<br />
              Chuyên trách: Sách dịch, Triết học, Mỹ thuật sách
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#1C1A17] uppercase font-semibold block">ĐIỀU HƯỚNG NHANH</span>
            <ul className="space-y-1 text-[#6B665E]">
              <li>
                <button onClick={() => onNavigate('trang-chu')} className="hover:text-[#1C1A17]">
                  Trang chủ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('du-an')} className="hover:text-[#1C1A17]">
                  Các dự án tiêu biểu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gioi-thieu')} className="hover:text-[#1C1A17]">
                  Giới thiệu & Triết lý
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kinh-nghiem')} className="hover:text-[#1C1A17]">
                  Kinh nghiệm & Dịch vụ
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('suy-ngam')} className="hover:text-[#1C1A17]">
                  Suy ngẫm bên bàn chữ
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-[#1C1A17] uppercase font-semibold block">GHI CHÚ MỸ THUẬT (COLOPHON)</span>
            <p className="text-[#6B665E] leading-relaxed">
              Trang web được thiết kế theo phong cách xuất bản tĩnh lặng: kiểu chữ Newsreader kết hợp Plus Jakarta Sans, màu giấy ngà tự nhiên (#FBF9F5) và mực đen ấm (#1C1A17).
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#1C1A17] uppercase font-semibold block">LIÊN HỆ TRỰC TIẾP</span>
            <p className="text-[#6B665E] leading-relaxed">
              Email: {PERSONAL_INFO.email}<br />
              Dự phòng: {PERSONAL_INFO.secondaryEmail}
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#8E877D]">
          <div>
            © 2013 – 2026 Linh Đặng (linhdang.id.vn). Bảo lưu mọi quyền xuất bản và trích dẫn.
          </div>
          <div>
            Biên tập viên · Dịch giả · Chuyên gia Xuất bản Việt Nam
          </div>
        </div>
      </div>
    </footer>
  );
};
