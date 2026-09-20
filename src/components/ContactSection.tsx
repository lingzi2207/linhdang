import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Globe, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectTitle: '',
    serviceType: initialSubject || 'Thẩm định bản thảo',
    manuscriptLink: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate deliberate editorial submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      organization: '',
      projectTitle: '',
      serviceType: 'Thẩm định bản thảo',
      manuscriptLink: '',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="lien-he" className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Colophon Page Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E6E1D8] text-xs font-mono text-[#6B665E]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#995B24]" />
            <span className="font-semibold text-[#1C1A17]">TRANG 06 / 06 · LIÊN HỆ & TIẾP NHẬN BẢN THẢO</span>
          </div>
          <div className="flex items-center gap-4">
            <span>EMAIL CHÍNH: LINH.DANG@LINHDANG.ID.VN</span>
            <span className="text-[#C8C1B4]">|</span>
            <span>BẢO MẬT NDA</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#995B24] font-semibold">
            TRAO ĐỔI CÔNG VIỆC & BẢN THẢO
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#1C1A17] tracking-tight leading-tight">
            Khởi đầu một cuộc trò chuyện về cuốn sách sắp tới.
          </h2>
          <p className="text-base text-[#5E584F] font-serif-editorial font-light leading-relaxed">
            Cho dù bạn là một tác giả đang tìm kiếm người đọc phản biện đầu tiên, một nhà xuất bản cần thẩm định bản thảo quốc tế, hay một đối tác muốn dịch thuật tác phẩm đoạt giải — tôi luôn trân trọng từng cơ hội hợp tác nghiêm cẩn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F4EFEA] border border-[#E6E1D8] p-8 space-y-6">
              <div className="space-y-1 border-b border-[#E6E1D8] pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8E877D]">
                  KÊNH THÔNG TIN CHÍNH THỨC
                </span>
                <h3 className="font-serif-editorial text-2xl text-[#1C1A17]">
                  Thông tin liên hệ
                </h3>
              </div>

              <div className="space-y-4 text-sm font-sans">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#8E877D] block">Thư điện tử công việc:</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-medium text-[#1C1A17] hover:text-[#995B24] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{PERSONAL_INFO.email}</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#8E877D] block">Hòm thư dự phòng:</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.secondaryEmail}`}
                    className="text-[#5E584F] hover:text-[#1C1A17] transition-colors"
                  >
                    {PERSONAL_INFO.secondaryEmail}
                  </a>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#8E877D] block">Tên miền chính danh:</span>
                  <span className="font-mono text-xs text-[#1C1A17]">{PERSONAL_INFO.domain}</span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#8E877D] block">Địa bàn làm việc:</span>
                  <span className="text-[#201E1B]">{PERSONAL_INFO.location}</span>
                </div>

                <div className="space-y-1 pt-2 border-t border-[#E6E1D8]/60">
                  <span className="text-xs font-mono text-[#8E877D] block">Thời gian phản hồi:</span>
                  <span className="text-xs text-[#5E584F]">
                    Phản hồi trong vòng 24 – 48 giờ làm việc cho các đề xuất thẩm định hoặc hợp tác xuất bản.
                  </span>
                </div>
              </div>
            </div>

            {/* Confidentiality Commitment */}
            <div className="border border-[#E6E1D8] p-6 space-y-3 bg-white">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#995B24] font-semibold">
                <ShieldCheck size={16} />
                <span>CAM KẾT BẢO MẬT BẢN THẢO</span>
              </div>
              <p className="text-xs text-[#5E584F] leading-relaxed font-sans">
                Mọi ý tưởng, đề cương và trích đoạn bản thảo được gửi tới đều được bảo mật tuyệt đối theo nguyên tắc đạo đức nghề nghiệp xuất bản. Sẵn sàng ký kết thỏa thuận bảo mật thông tin (NDA) khi có yêu cầu từ tác giả hoặc đối tác.
              </p>
            </div>

            {/* Social & Professional Networks */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E877D] block">
                MẠNG LƯỚI & ẤN PHẨM KHÁC
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {['Goodreads', 'LinkedIn', 'Substack Văn chương', 'Hội đồng Sách Việt Nam'].map((network) => (
                  <span
                    key={network}
                    className="px-3 py-1 bg-[#F4EFEA] border border-[#E6E1D8] text-[#5E584F]"
                  >
                    {network}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E6E1D8] p-8 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
            {isSubmitted ? (
              <div
                id="contact-form-success-state"
                className="py-12 text-center space-y-6 animate-in fade-in duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#F4EFEA] border border-[#995B24] text-[#995B24] flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1A17]">
                    Đã tiếp nhận lời nhắn của bạn
                  </h3>
                  <p className="text-sm font-sans text-[#5E584F] max-w-md mx-auto leading-relaxed">
                    Cảm ơn bạn đã gửi thông tin về tác phẩm. Linh Đặng sẽ xem xét cẩn trọng và phản hồi tới email <span className="font-medium text-[#1C1A17]">{formData.email}</span> trong thời gian sớm nhất.
                  </p>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    id="submit-another-inquiry-btn"
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#1C1A17] text-[#FBF9F5] text-xs font-mono uppercase tracking-wider hover:bg-[#33302B] transition-colors"
                  >
                    Gửi đề xuất khác
                  </button>
                </div>
              </div>
            ) : (
              <form id="manuscript-inquiry-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-[#E6E1D8] pb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#995B24]">
                    PHIẾU ĐỀ XUẤT HỢP TÁC
                  </span>
                  <h3 className="font-serif-editorial text-2xl text-[#1C1A17]">
                    Gửi thông tin dự án hoặc bản thảo
                  </h3>
                </div>

                {/* Form fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="input-name"
                      className="text-xs font-mono uppercase tracking-wider text-[#6B665E] block"
                    >
                      Họ và tên tác giả / Người liên hệ *
                    </label>
                    <input
                      id="input-name"
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FBF9F5] border border-[#E6E1D8] px-3.5 py-2 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="input-email"
                      className="text-xs font-mono uppercase tracking-wider text-[#6B665E] block"
                    >
                      Địa chỉ Email phản hồi *
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      placeholder="ban@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FBF9F5] border border-[#E6E1D8] px-3.5 py-2 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="input-org"
                      className="text-xs font-mono uppercase tracking-wider text-[#6B665E] block"
                    >
                      Đơn vị / Vai trò
                    </label>
                    <input
                      id="input-org"
                      type="text"
                      placeholder="Tác giả độc lập / NXB / Tổ chức"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-[#FBF9F5] border border-[#E6E1D8] px-3.5 py-2 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="input-service"
                      className="text-xs font-mono uppercase tracking-wider text-[#6B665E] block"
                    >
                      Hạng mục quan tâm *
                    </label>
                    <select
                      id="input-service"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#FBF9F5] border border-[#E6E1D8] px-3.5 py-2 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors cursor-pointer"
                    >
                      <option value="Thẩm định bản thảo">Thẩm định bản thảo (Appraisal)</option>
                      <option value="Biên tập bản thảo chuyên sâu">Biên tập bản thảo chuyên sâu (Developmental Editing)</option>
                      <option value="Dịch thuật tác phẩm văn học & học thuật">Dịch thuật văn học & học thuật</option>
                      <option value="Cố vấn phát triển xuất bản">Cố vấn phát triển xuất bản</option>
                      <option value="Tham gia tọa đàm & viết bài">Tham gia tọa đàm & viết bài</option>
                      <option value="Khác">Trao đổi nội dung khác</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="input-project-title"
                    className="text-xs font-mono uppercase tracking-wider text-[#6B665E] block"
                  >
                    Tên dự án / Nhan đề bản thảo dự kiến
                  </label>
                  <input
                    id="input-project-title"
                    type="text"
                    placeholder="Ví dụ: Tiểu thuyết, Tuyển tập tản văn hoặc Tác phẩm khảo cứu..."
                    value={formData.projectTitle}
                    onChange={(e) => setFormData({ ...formData, projectTitle: e.target.value })}
                    className="w-full bg-[#FBF9F5] border border-[#E6E1D8] px-3.5 py-2 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="input-link"
                    className="text-xs font-mono uppercase tracking-wider text-[#6B665E] block"
                  >
                    Liên kết tóm tắt đề cương / Mẫu bản thảo (Nếu có)
                  </label>
                  <input
                    id="input-link"
                    type="url"
                    placeholder="https://drive.google.com/... hoặc link Dropbox, Notion"
                    value={formData.manuscriptLink}
                    onChange={(e) => setFormData({ ...formData, manuscriptLink: e.target.value })}
                    className="w-full bg-[#FBF9F5] border border-[#E6E1D8] px-3.5 py-2 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors font-mono text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="input-message"
                    className="text-xs font-mono uppercase tracking-wider text-[#6B665E] block"
                  >
                    Lời nhắn & Mục tiêu của cuốn sách *
                  </label>
                  <textarea
                    id="input-message"
                    required
                    rows={4}
                    placeholder="Chia sẻ ngắn gọn về tiến độ bản thảo, đối tượng độc giả mong muốn tiếp cận, hoặc những băn khoăn cụ thể bạn muốn người biên tập hỗ trợ..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FBF9F5] border border-[#E6E1D8] p-3.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] transition-colors font-sans"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-[#8E877D]">
                    * Thông tin được bảo mật tuyệt đối theo chuẩn mực xuất bản.
                  </span>

                  <button
                    id="submit-inquiry-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-[#1C1A17] text-[#FBF9F5] text-xs font-mono uppercase tracking-wider hover:bg-[#33302B] disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Đang gửi thư...</span>
                    ) : (
                      <>
                        <span>Gửi thư trao đổi</span>
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
