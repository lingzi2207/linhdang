import React, { useState } from 'react';
import { Briefcase, CheckCircle2, ArrowRight, Layers, FileCheck, BookOpen, Compass } from 'lucide-react';
import { EXPERIENCES, PUBLISHING_SERVICES } from '../data/portfolioData';

interface ExperienceSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'services'>('timeline');

  return (
    <section id="kinh-nghiem" className="py-24 sm:py-32 border-b border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E1D8]">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#995B24] font-semibold">
              QUÁ TRÌNH CÔNG TÁC & NĂNG LỰC
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#1C1A17] tracking-tight">
              Kinh nghiệm & Dịch vụ chuyên môn
            </h2>
            <p className="text-base text-[#5E584F] max-w-2xl font-serif-editorial font-light leading-relaxed">
              Hơn một thập kỷ gắn bó với các nhà xuất bản hàng đầu và mạng lưới tác giả trong và ngoài nước, cung cấp các giải pháp hoàn thiện bản thảo chuẩn mực.
            </p>
          </div>

          {/* Toggle Tab Button */}
          <div className="flex border border-[#E6E1D8] p-1 bg-[#F4EFEA] self-start md:self-end">
            <button
              id="exp-tab-timeline-btn"
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 text-xs font-mono tracking-wider transition-all ${
                activeTab === 'timeline'
                  ? 'bg-[#1C1A17] text-[#FBF9F5] shadow-xs'
                  : 'text-[#6B665E] hover:text-[#1C1A17]'
              }`}
            >
              Dấu mốc sự nghiệp
            </button>
            <button
              id="exp-tab-services-btn"
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 text-xs font-mono tracking-wider transition-all ${
                activeTab === 'services'
                  ? 'bg-[#1C1A17] text-[#FBF9F5] shadow-xs'
                  : 'text-[#6B665E] hover:text-[#1C1A17]'
              }`}
            >
              Dịch vụ xuất bản
            </button>
          </div>
        </div>

        {/* Tab 1: Timeline of Experience */}
        {activeTab === 'timeline' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="relative border-l border-[#C8C1B4] ml-3 sm:ml-6 pl-8 sm:pl-12 space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} id={`exp-item-${exp.id}`} className="relative group">
                  {/* Timeline Node */}
                  <span className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-[#FBF9F5] border-2 border-[#1C1A17] group-hover:scale-125 transition-transform" />

                  <div className="space-y-4">
                    {/* Period & Org */}
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="text-xs font-mono font-semibold text-[#995B24]">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-[#8E877D]">
                        • {exp.location}
                      </span>
                      <span className="text-xs font-mono text-[#8E877D]">
                        ({exp.organizationType})
                      </span>
                    </div>

                    {/* Role Title */}
                    <div>
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1A17] font-normal">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-sans font-medium text-[#5E584F] mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    {/* Narrative */}
                    <p className="text-sm sm:text-base text-[#201E1B] leading-relaxed font-sans max-w-3xl">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="bg-[#F4EFEA] border border-[#E6E1D8] p-5 max-w-3xl space-y-2.5">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#8E877D] block mb-1">
                        KẾT QUẢ & DỰ ÁN TRỌNG ĐIỂM:
                      </span>
                      <ul className="space-y-2 text-xs font-sans text-[#5E584F]">
                        {exp.keyProjects.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-[#995B24] font-bold">―</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Publishing Services */}
        {activeTab === 'services' && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {PUBLISHING_SERVICES.map((srv) => (
                <div
                  key={srv.id}
                  id={`service-card-${srv.id}`}
                  className="bg-white border border-[#E6E1D8] p-8 flex flex-col justify-between space-y-6 hover:border-[#1C1A17]/40 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#995B24]">
                        {srv.tagline}
                      </span>
                      <h3 className="font-serif-editorial text-2xl text-[#1C1A17] font-normal">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#5E584F] leading-relaxed font-sans">
                      {srv.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#E6E1D8]">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E877D] block">
                        PHẠM VI CÔNG VIỆC:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#201E1B] font-sans">
                        {srv.scope.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-[#995B24] shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#FBF9F5] border border-[#E6E1D8] p-3 text-xs font-mono text-[#6B665E]">
                      <span className="text-[#8E877D] block text-[10px] uppercase">Sản phẩm bàn giao:</span>
                      <span className="text-[#1C1A17] font-medium">{srv.deliverable}</span>
                    </div>
                  </div>

                  <button
                    id={`request-service-btn-${srv.id}`}
                    onClick={() => onSelectServiceForInquiry(srv.title)}
                    className="w-full py-2.5 bg-[#F4EFEA] border border-[#E6E1D8] hover:bg-[#1C1A17] hover:text-[#FBF9F5] hover:border-[#1C1A17] text-xs font-mono uppercase tracking-wider text-[#1C1A17] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Yêu cầu tư vấn dịch vụ này</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#F4EFEA] border border-[#E6E1D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#6B665E]">
              <div>
                <span className="font-semibold text-[#1C1A17]">Cần một giải pháp xuất bản tùy chỉnh?</span>
                <span className="block sm:inline sm:ml-2">Hỗ trợ trọn gói từ khâu bản thảo đến ấn bản hoàn thiện trên kệ sách.</span>
              </div>
              <button
                onClick={() => onSelectServiceForInquiry('Tư vấn xuất bản trọn gói')}
                className="text-[#995B24] font-semibold underline hover:text-[#1C1A17] shrink-0"
              >
                Gửi câu hỏi trực tiếp →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
