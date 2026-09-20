import React from 'react';
import { ArrowRight, BookOpen, Feather, Sparkles, Compass, Layers, ShieldCheck, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onNavigate?: (pageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onContactClick, onNavigate }) => {
  const chapters = [
    {
      id: 'du-an',
      num: '02',
      title: 'Các dự án tiêu biểu',
      desc: 'Tuyển chọn ấn phẩm văn học dịch, phi hư cấu, triết học và mỹ thuật sách.',
      highlight: '65+ tác phẩm',
      icon: BookOpen,
    },
    {
      id: 'gioi-thieu',
      num: '03',
      title: 'Giới thiệu & Triết lý',
      desc: 'Hành trình 12 năm người làm bản thảo và ba nguyên tắc đạo đức ẩn mình.',
      highlight: 'Tiểu sử & Giá trị',
      icon: Feather,
    },
    {
      id: 'kinh-nghiem',
      num: '04',
      title: 'Kinh nghiệm & Dịch vụ',
      desc: 'Tiến trình công tác tại các nhà xuất bản và các gói thẩm định chuyên sâu.',
      highlight: 'Timeline & Dịch vụ',
      icon: Compass,
    },
    {
      id: 'suy-ngam',
      num: '05',
      title: 'Suy ngẫm bên bàn chữ',
      desc: 'Tiểu luận về nhịp thở dịch thuật, tính vật chất của sách in và văn hóa đọc.',
      highlight: '3 bài viết chọn lọc',
      icon: Sparkles,
    },
    {
      id: 'lien-he',
      num: '06',
      title: 'Liên hệ & Bản thảo',
      desc: 'Kênh tiếp nhận bản thảo, trao đổi dự án xuất bản và cam kết bảo mật NDA.',
      highlight: 'linhdang.id.vn',
      icon: Mail,
    },
  ];

  return (
    <section
      id="trang-chu"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E6E1D8] overflow-hidden"
    >
      {/* Editorial Watermark / Background Texture Element */}
      <div className="absolute top-12 right-0 -mr-16 pointer-events-none select-none opacity-[0.03] text-[#1C1A17] font-black text-[220px] leading-none hidden lg:block">
        CHỮ
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Colophon Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E6E1D8] text-xs font-mono text-[#6B665E]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#995B24]" />
            <span className="font-semibold text-[#1C1A17]">TRANG 01 / 06 · TRANG CHỦ & TỔNG QUAN</span>
            <span className="text-[#C8C1B4]">/</span>
            <span>2013 – 2026</span>
          </div>

          <div className="flex items-center gap-6">
            <span>ĐỊA BÀN: {PERSONAL_INFO.location}</span>
            <span className="hidden sm:inline text-[#C8C1B4]">|</span>
            <span className="hidden sm:inline font-semibold text-[#1C1A17]">LINHDANG.ID.VN</span>
          </div>
        </div>

        {/* Hero Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Headline & Identity (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm tracking-widest uppercase text-[#995B24] font-bold">
                Biên tập viên · Dịch giả · Cố vấn Bản thảo
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-[#1C1A17] tracking-tight leading-[1.12]">
                Gìn giữ phẩm tính <br className="hidden sm:inline" />
                của <span className="italic font-normal text-[#995B24]">câu chữ</span> trong dòng chảy xuất bản đương đại.
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#5E584F] leading-relaxed max-w-3xl font-light">
              Đồng hành cùng các nhà văn, dịch giả và nhà xuất bản hàng đầu tại Việt Nam để chuyển hóa ý niệm thô ráp thành những ấn bản mẫu mực — từ văn học dịch đoạt giải, triết học thường nhật đến các khảo cứu nghệ thuật in ấn tinh tế.
            </p>

            {/* Editorial Action Controls */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                id="hero-explore-projects-btn"
                onClick={onExploreProjects}
                className="px-6 py-3.5 bg-[#1C1A17] text-[#FBF9F5] text-sm font-semibold tracking-wide hover:bg-[#33302B] transition-colors rounded-none flex items-center gap-2.5 shadow-sm cursor-pointer"
              >
                <span>Mở trang Dự án tiêu biểu</span>
                <ArrowRight size={16} />
              </button>

              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="px-6 py-3.5 bg-transparent border border-[#201E1B]/30 text-[#1C1A17] text-sm font-semibold tracking-wide hover:border-[#1C1A17] hover:bg-[#F4EFEA] transition-colors rounded-none cursor-pointer"
              >
                Trao đổi về bản thảo & hợp tác
              </button>
            </div>
          </div>

          {/* Editorial Notes / Colophon Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-[#F4EFEA] border border-[#E6E1D8] p-6 sm:p-8 space-y-6">
            <div className="border-b border-[#E6E1D8] pb-4">
              <h3 className="text-xs uppercase font-mono tracking-widest text-[#8E877D] mb-1 font-semibold">
                TÔN CHỈ NGHỀ NGHIỆP
              </h3>
              <p className="text-sm italic text-[#201E1B] leading-relaxed font-normal">
                “{PERSONAL_INFO.manifesto}”
              </p>
            </div>

            {/* Quick Metrics in Editorial Format */}
            <div className="space-y-4 pt-1">
              <div className="flex items-baseline justify-between border-b border-[#E6E1D8]/60 pb-3">
                <span className="text-xs text-[#6B665E]">Kinh nghiệm làm nghề</span>
                <span className="text-xl font-bold text-[#1C1A17]">12 năm</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-[#E6E1D8]/60 pb-3">
                <span className="text-xs text-[#6B665E]">Ấn phẩm đã xuất bản</span>
                <span className="text-xl font-bold text-[#1C1A17]">65+ đầu sách</span>
              </div>

              <div className="flex items-baseline justify-between border-b border-[#E6E1D8]/60 pb-3">
                <span className="text-xs text-[#6B665E]">Tác phẩm dịch thuật</span>
                <span className="text-xl font-bold text-[#1C1A17]">18 tác phẩm</span>
              </div>

              <div className="flex items-baseline justify-between">
                <span className="text-xs text-[#6B665E]">Đối tác tiêu biểu</span>
                <span className="text-xs font-mono text-[#201E1B] text-right font-medium">Nhã Nam, NXB Trẻ, Omega+, Kim Đồng</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono text-[#8E877D] leading-tight">
              *Ấn phẩm bao gồm sách văn học dịch, sách triết học nhân văn, khảo cứu mỹ thuật và tạp chí văn nghệ độc lập.
            </div>
          </div>
        </div>

        {/* Table of Contents / Separate Pages Directory */}
        <div className="pt-10 border-t border-[#E6E1D8] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#995B24] font-bold block">
                MỤC LỤC HỒ SƠ XUẤT BẢN
              </span>
              <h2 className="text-xl sm:text-2xl font-light text-[#1C1A17]">
                Các trang chuyên đề trong ấn phẩm
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8E877D]">
              Nhấp vào bất kỳ trang nào để mở trực tiếp
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chapters.map((chap) => {
              const IconComp = chap.icon;
              return (
                <button
                  key={chap.id}
                  id={`chapter-card-${chap.id}`}
                  onClick={() => onNavigate ? onNavigate(chap.id) : onExploreProjects()}
                  className="group text-left p-6 bg-[#FFFFFF] border border-[#E6E1D8] hover:border-[#1C1A17] hover:shadow-xs transition-all flex flex-col justify-between space-y-4 cursor-pointer"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#995B24] px-2 py-0.5 bg-[#F4EFEA] border border-[#E6E1D8]">
                        TRANG {chap.num}
                      </span>
                      <IconComp size={16} className="text-[#8E877D] group-hover:text-[#1C1A17] transition-colors" />
                    </div>
                    <h3 className="text-base font-bold text-[#1C1A17] group-hover:text-[#995B24] transition-colors">
                      {chap.title}
                    </h3>
                    <p className="text-xs text-[#5E584F] leading-relaxed line-clamp-2">
                      {chap.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#F4EFEA] flex items-center justify-between text-xs font-mono text-[#8E877D]">
                    <span className="text-[#1C1A17] font-medium">{chap.highlight}</span>
                    <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#995B24] font-semibold">
                      Mở trang →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
