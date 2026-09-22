import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT, EXPERIENCES_BILINGUAL, SERVICES_BILINGUAL } from '../data/translations';

interface ExperienceSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'services'>('timeline');
  const { language } = useLanguage();
  const t = UI_TEXT[language].experience;
  const experiences = EXPERIENCES_BILINGUAL[language];
  const services = SERVICES_BILINGUAL[language];

  return (
    <section id="kinh-nghiem" className="pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Header with Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#995B24] font-bold">
              {t.sectionBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1A17] tracking-tight">
              {t.title}
            </h2>
            <p className="text-base text-[#4B5563] max-w-2xl leading-relaxed">
              {t.desc}
            </p>
          </div>

          {/* Toggle Tab Button */}
          <div className="flex border border-[#E5E7EB] p-1 bg-gray-50 self-start md:self-end">
            <button
              id="exp-tab-timeline-btn"
              onClick={() => setActiveTab('timeline')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeTab === 'timeline'
                  ? 'bg-[#1C1A17] text-white shadow-xs'
                  : 'text-[#6B7280] hover:text-[#1C1A17]'
              }`}
            >
              {t.tabTimeline}
            </button>
            <button
              id="exp-tab-services-btn"
              onClick={() => setActiveTab('services')}
              className={`px-4 py-2 text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-[#1C1A17] text-white shadow-xs'
                  : 'text-[#6B7280] hover:text-[#1C1A17]'
              }`}
            >
              {t.tabServices}
            </button>
          </div>
        </div>

        {/* Tab 1: Timeline of Experience */}
        {activeTab === 'timeline' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="relative border-l border-gray-300 ml-3 sm:ml-6 pl-8 sm:pl-12 space-y-12">
              {experiences.map((exp) => (
                <div key={exp.id} id={`exp-item-${exp.id}`} className="relative group">
                  {/* Timeline Node */}
                  <span className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-[#1C1A17] group-hover:scale-125 transition-transform" />

                  <div className="space-y-4">
                    {/* Period & Org */}
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="text-xs font-semibold text-[#995B24]">
                        {exp.period}
                      </span>
                      <span className="text-xs text-[#9CA3AF]">
                        • {exp.location}
                      </span>
                      <span className="text-xs text-[#9CA3AF]">
                        ({exp.organizationType})
                      </span>
                    </div>

                    {/* Role Title */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl text-[#1C1A17] font-bold">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#4B5563] mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    {/* Narrative */}
                    <p className="text-sm sm:text-base text-[#201E1B] leading-relaxed max-w-3xl">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-5 max-w-3xl space-y-2.5">
                      <span className="text-xs uppercase tracking-widest text-[#9CA3AF] block mb-1 font-semibold">
                        {t.keyProjectsHeader}
                      </span>
                      <ul className="space-y-2 text-xs text-[#4B5563]">
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
              {services.map((srv) => (
                <div
                  key={srv.id}
                  id={`service-card-${srv.id}`}
                  className="bg-white border border-[#E5E7EB] p-8 flex flex-col justify-between space-y-6 hover:border-[#1C1A17] transition-all shadow-xs"
                >
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-widest text-[#995B24] font-semibold">
                        {srv.tagline}
                      </span>
                      <h3 className="text-2xl text-[#1C1A17] font-bold">
                        {srv.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {srv.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                      <span className="text-xs uppercase tracking-wider text-[#9CA3AF] block font-semibold">
                        {t.scopeHeader}
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#201E1B]">
                        {srv.scope.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="text-[#995B24] shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 border border-[#E5E7EB] p-3 text-xs text-[#4B5563]">
                      <span className="text-[#9CA3AF] block text-[10px] uppercase font-semibold">{t.deliverableHeader}</span>
                      <span className="text-[#1C1A17] font-semibold">{srv.deliverable}</span>
                    </div>
                  </div>

                  <button
                    id={`request-service-btn-${srv.id}`}
                    onClick={() => onSelectServiceForInquiry(srv.title)}
                    className="w-full py-2.5 bg-white border border-[#E5E7EB] hover:bg-[#1C1A17] hover:text-white hover:border-[#1C1A17] text-xs uppercase tracking-wider text-[#1C1A17] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{t.requestService}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#F9FAFB] border border-[#E5E7EB] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4B5563]">
              <div>
                <span className="font-semibold text-[#1C1A17]">{t.customSolutionTitle}</span>
                <span className="block sm:inline sm:ml-2">{t.customSolutionDesc}</span>
              </div>
              <button
                onClick={() => onSelectServiceForInquiry(language === 'vi' ? 'Tư vấn xuất bản trọn gói' : 'Comprehensive Publishing Consultation')}
                className="text-[#995B24] font-semibold underline hover:text-[#1C1A17] shrink-0 cursor-pointer"
              >
                {t.customSolutionAction}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

