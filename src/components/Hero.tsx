import React from 'react';
import { ArrowDown, BookOpen, Feather, Sparkles, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick }) => {
  return (
    <section
      id="trang-chu"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-[#E6E1D8] overflow-hidden"
    >
      {/* Editorial Watermark / Background Texture Element */}
      <div className="absolute top-12 right-0 -mr-16 pointer-events-none select-none opacity-[0.03] text-[#1C1A17] font-serif font-black text-[220px] leading-none hidden lg:block">
        CHỮ
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Colophon Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#E6E1D8] text-xs font-mono text-[#6B665E]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#995B24]" />
            <span>HỒ SƠ XUẤT BẢN CÁ NHÂN</span>
            <span className="text-[#C8C1B4]">/</span>
            <span>2013 – 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span>ĐỊA BÀN: {PERSONAL_INFO.location}</span>
            <span className="hidden sm:inline text-[#C8C1B4]">|</span>
            <span className="hidden sm:inline">LINHDANG.ID.VN</span>
          </div>
        </div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Headline & Identity (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-sm font-sans tracking-widest uppercase text-[#995B24] font-semibold">
                Biên tập viên · Dịch giả · Cố vấn Bản thảo
              </span>
              <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-[#1C1A17] tracking-tight leading-[1.12]">
                Gìn giữ phẩm tính <br className="hidden sm:inline" />
                của <span className="italic font-normal text-[#995B24]">câu chữ</span> trong dòng chảy xuất bản đương đại.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#5E584F] leading-relaxed max-w-3xl font-light font-serif-editorial">
              Đồng hành cùng các nhà văn, dịch giả và nhà xuất bản hàng đầu tại Việt Nam để chuyển hóa ý niệm thô ráp thành những ấn bản mẫu mực — từ văn học dịch đoạt giải, triết học thường nhật đến các khảo cứu nghệ thuật in ấn tinh tế.
            </p>

            {/* Editorial Action Controls */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="px-6 py-3.5 bg-[#1C1A17] text-[#FBF9F5] text-sm font-medium tracking-wide hover:bg-[#33302B] transition-colors rounded-none flex items-center gap-2.5 shadow-sm"
              >
                <span>Xem các dự án tiêu biểu</span>
                <ArrowDown size={16} />
              </button>

              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="px-6 py-3.5 bg-transparent border border-[#201E1B]/30 text-[#1C1A17] text-sm font-medium tracking-wide hover:border-[#1C1A17] hover:bg-[#F4EFEA] transition-colors rounded-none"
              >
                Trao đổi về bản thảo & hợp tác
              </button>
            </div>
          </div>

          {/* Editorial Notes / Colophon Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-[#F4EFEA] border border-[#E6E1D8] p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#E6E1D8] pb-4">
              <h3 className="text-xs uppercase font-mono tracking-widest text-[#8E877D] mb-1">
                TÔN CHỈ NGHỀ NGHIỆP
              </h3>
              <p className="font-serif-editorial text-sm italic text-[#201E1B] leading-relaxed">
                “{PERSONAL_INFO.manifesto}”
              </p>
            </div>

            {/* Quick Metrics in Editorial Format (Not flashy SaaS stats) */}
            <div className="space-y-4 pt-1">
              <div className="flex items-baseline justify-between border-b border-[#E6E1D8]/60 pb-3">
                <span className="text-xs font-sans text-[#6B665E]">Kinh nghiệm làm nghề</span>
                <span className="font-serif-editorial text-xl font-medium text-[#1C1A17]">12 năm</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-[#E6E1D8]/60 pb-3">
                <span className="text-xs font-sans text-[#6B665E]">Ấn phẩm đã xuất bản</span>
                <span className="font-serif-editorial text-xl font-medium text-[#1C1A17]">65+ đầu sách</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-[#E6E1D8]/60 pb-3">
                <span className="text-xs font-sans text-[#6B665E]">Tác phẩm dịch thuật</span>
                <span className="font-serif-editorial text-xl font-medium text-[#1C1A17]">18 tác phẩm</span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-xs font-sans text-[#6B665E]">Đối tác tiêu biểu</span>
                <span className="text-xs font-mono text-[#201E1B] text-right">Nhã Nam, NXB Trẻ, Omega+, Kim Đồng</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#8E877D] leading-tight">
              *Ấn phẩm bao gồm sách văn học dịch, sách triết học nhân văn, khảo cứu mỹ thuật và tạp chí văn nghệ độc lập.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
