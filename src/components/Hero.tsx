import React from 'react';
import { ArrowRight, BookOpen, Feather, Compass, Mail } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onNavigate?: (pageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onNavigate }) => {
  const chapters = [
    {
      id: 'du-an',
      title: 'Các dự án tiêu biểu',
      desc: 'Tuyển chọn ấn phẩm văn học dịch, phi hư cấu, triết học và mỹ thuật sách.',
      highlight: '65+ tác phẩm',
      icon: BookOpen,
    },
    {
      id: 'gioi-thieu',
      title: 'Giới thiệu & Triết lý',
      desc: 'Hành trình 12 năm người làm bản thảo và các nguyên tắc đạo đức làm nghề.',
      highlight: 'Tiểu sử & Giá trị',
      icon: Feather,
    },
    {
      id: 'kinh-nghiem',
      title: 'Kinh nghiệm & Dịch vụ',
      desc: 'Tiến trình công tác tại các nhà xuất bản và các gói thẩm định chuyên sâu.',
      highlight: 'Timeline & Dịch vụ',
      icon: Compass,
    },
    {
      id: 'lien-he',
      title: 'Liên hệ & Bản thảo',
      desc: 'Kênh tiếp nhận bản thảo, trao đổi dự án xuất bản và cam kết bảo mật NDA.',
      highlight: 'linhdang.id.vn',
      icon: Mail,
    },
  ];

  return (
    <section id="trang-chu" className="pt-28 pb-20 bg-white min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#E5E7EB] pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#995B24] font-bold block mb-1">
              HỒ SƠ NGHỀ NGHIỆP
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1C1A17]">
              Các chuyên đề chính
            </h1>
          </div>
          <span className="text-xs text-[#6B7280]">
            Nhấp vào bất kỳ mục nào để mở trang tương ứng
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chapters.map((chap) => {
            const IconComp = chap.icon;
            return (
              <button
                key={chap.id}
                id={`chapter-card-${chap.id}`}
                onClick={() => (onNavigate ? onNavigate(chap.id) : onExploreProjects())}
                className="group text-left p-6 sm:p-7 bg-white border border-[#E5E7EB] hover:border-[#1C1A17] hover:shadow-md transition-all flex flex-col justify-between space-y-6 cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-md bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-[#1C1A17] group-hover:text-white transition-colors">
                      <IconComp size={18} className="text-[#995B24] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-xs text-[#6B7280] font-medium">{chap.highlight}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#1C1A17] group-hover:text-[#995B24] transition-colors">
                    {chap.title}
                  </h2>
                  <p className="text-sm text-[#4B5563] leading-relaxed">
                    {chap.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#995B24]">
                  <span>Xem nội dung</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
