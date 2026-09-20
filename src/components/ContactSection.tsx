import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, Copy, Check, ArrowUpRight, ShieldCheck, Clock, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const primaryEmail = 'lingzi2207@gmail.com';
  const workEmail = PERSONAL_INFO.email || 'linh.dang@linhdang.id.vn';
  const linkedinUrl = 'https://www.linkedin.com';
  const facebookUrl = 'https://www.facebook.com';

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  return (
    <section id="lien-he" className="pt-28 pb-20 bg-[#F9FAFB] min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 border-b border-[#E5E7EB] pb-6">
          <span className="text-xs uppercase tracking-widest text-[#995B24] font-bold block">
            THÔNG TIN LIÊN HỆ & HỢP TÁC
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1A17] tracking-tight">
            Liên hệ với Linh Đặng
          </h1>
          <p className="text-base text-[#4B5563] max-w-2xl leading-relaxed">
            Sẵn sàng kết nối cho các dự án biên tập bản thảo, dịch thuật văn học, thẩm định xuất bản và cố vấn nội dung sách.
          </p>
        </div>

        {/* Priority Email Highlight Box */}
        <div className="bg-white border-2 border-[#1C1A17] p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3F4F6] text-[#1C1A17] text-xs font-bold uppercase tracking-wider">
              <Mail size={15} className="text-[#995B24]" />
              <span>Phương thức ưu tiên</span>
            </div>
            <span className="text-xs text-[#6B7280] font-mono">
              Phản hồi thường lệ trong vòng 24 - 48 giờ
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1A17]">
              Ưu tiên trao đổi qua Email
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-2xl">
              Để đảm bảo bản thảo, đề cương dự án và tài liệu được lưu trữ, theo dõi mạch lạc và bảo mật thông tin, tôi luôn ưu tiên nhận và trao đổi công việc trực tiếp qua hòm thư điện tử.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Primary Email */}
            <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between gap-3">
              <div className="space-y-0.5 min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] block">
                  Email chính (Hộp thư nhận việc)
                </span>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-base sm:text-lg font-mono font-bold text-[#1C1A17] hover:text-[#995B24] transition-colors truncate block"
                  title={`Gửi mail tới ${primaryEmail}`}
                >
                  {primaryEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopyEmail(primaryEmail)}
                  className="p-2 text-[#4B5563] hover:text-[#1C1A17] hover:bg-white rounded-sm border border-transparent hover:border-[#E5E7EB] transition-all cursor-pointer"
                  title="Sao chép email"
                >
                  {copiedEmail === primaryEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="p-2 text-[#1C1A17] hover:bg-white rounded-sm border border-transparent hover:border-[#E5E7EB] transition-all"
                  title="Mở ứng dụng thư"
                >
                  <Send size={16} />
                </a>
              </div>
            </div>

            {/* Work / Domain Email */}
            <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between gap-3">
              <div className="space-y-0.5 min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] block">
                  Email tên miền xuất bản
                </span>
                <a
                  href={`mailto:${workEmail}`}
                  className="text-base sm:text-lg font-mono font-bold text-[#1C1A17] hover:text-[#995B24] transition-colors truncate block"
                  title={`Gửi mail tới ${workEmail}`}
                >
                  {workEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopyEmail(workEmail)}
                  className="p-2 text-[#4B5563] hover:text-[#1C1A17] hover:bg-white rounded-sm border border-transparent hover:border-[#E5E7EB] transition-all cursor-pointer"
                  title="Sao chép email"
                >
                  {copiedEmail === workEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
                <a
                  href={`mailto:${workEmail}`}
                  className="p-2 text-[#1C1A17] hover:bg-white rounded-sm border border-transparent hover:border-[#E5E7EB] transition-all"
                  title="Mở ứng dụng thư"
                >
                  <Send size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Networks & Professional Profiles */}
        <div className="space-y-4">
          <div className="border-b border-[#E5E7EB] pb-3">
            <h3 className="text-lg font-bold text-[#1C1A17]">
              Mạng xã hội & Hồ sơ trực tuyến
            </h3>
            <p className="text-xs text-[#6B7280]">
              Kết nối và theo dõi các hoạt động văn hóa, bài viết chuyên môn và cập nhật xuất bản
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              id="contact-link-linkedin"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white border border-[#E5E7EB] hover:border-[#0A66C2] hover:shadow-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xs bg-[#F0F6FC] text-[#0A66C2] flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                  <Linkedin size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider block">
                    Mạng lưới chuyên nghiệp
                  </span>
                  <span className="text-base font-bold text-[#1C1A17] group-hover:text-[#0A66C2] transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-xs text-[#6B7280] block">
                    Hồ sơ kinh nghiệm & chứng nhận xuất bản
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-[#9CA3AF] group-hover:text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Facebook */}
            <a
              id="contact-link-facebook"
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white border border-[#E5E7EB] hover:border-[#1877F2] hover:shadow-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xs bg-[#E7F3FF] text-[#1877F2] flex items-center justify-center group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                  <Facebook size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider block">
                    Trang cá nhân & Tương tác
                  </span>
                  <span className="text-base font-bold text-[#1C1A17] group-hover:text-[#1877F2] transition-colors">
                    Facebook
                  </span>
                  <span className="text-xs text-[#6B7280] block">
                    Cập nhật sách mới, sự kiện & kết nối tác giả
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-[#9CA3AF] group-hover:text-[#1877F2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Working Guidelines / Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 bg-white border border-[#E5E7EB] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#F3F4F6] text-[#1C1A17] flex items-center justify-center">
              <ShieldCheck size={18} />
            </div>
            <h4 className="text-sm font-bold text-[#1C1A17]">Bảo mật bản thảo (NDA)</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Mọi tài liệu, bản thảo chưa công bố và trao đổi nội bộ đều được cam kết bảo mật tuyệt đối.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E5E7EB] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#F3F4F6] text-[#1C1A17] flex items-center justify-center">
              <Clock size={18} />
            </div>
            <h4 className="text-sm font-bold text-[#1C1A17]">Thời gian phản hồi</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Phản hồi email sơ bộ trong 24-48 giờ; thời gian thẩm định bản thảo từ 5-10 ngày làm việc.
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E5E7EB] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#F3F4F6] text-[#1C1A17] flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <h4 className="text-sm font-bold text-[#1C1A17]">Địa bàn làm việc</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Làm việc từ xa linh hoạt toàn cầu; sẵn sàng gặp mặt trực tiếp tại Hà Nội hoặc TP. Hồ Chí Minh.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
