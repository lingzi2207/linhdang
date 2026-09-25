import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../data/translations';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TEXT[language].about;

  return (
    <section id="gioi-thieu" className="pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#995B24] font-bold">
            {t.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1A17] tracking-tight leading-tight">
            {t.heading}
          </h2>
        </div>

        {/* Two-Column Editorial Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#201E1B] text-base sm:text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#995B24] first-letter:leading-none">
              {t.bioP1}
            </p>

            <p>
              {t.bioP2}
            </p>

            <p>
              {t.bioP3}
            </p>

            <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap gap-8 text-xs text-[#6B7280]">
              <div>
                <span className="block text-[#9CA3AF] font-medium">{t.workingLanguagesLabel}</span>
                <span className="text-[#1C1A17] font-semibold">{t.workingLanguagesVal}</span>
              </div>
              <div>
                <span className="block text-[#9CA3AF] font-medium">{t.expertiseLabel}</span>
                <span className="text-[#1C1A17] font-semibold">{t.expertiseVal}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Principles Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#F9FAFB] border border-[#E5E7EB] p-8 sm:p-10 space-y-8">
            <div className="border-b border-[#E5E7EB] pb-4">
              <span className="text-xs uppercase tracking-widest text-[#9CA3AF] block mb-1 font-semibold">
                {t.principlesBadge}
              </span>
              <h3 className="text-2xl font-bold text-[#1C1A17]">
                {t.principlesTitle}
              </h3>
            </div>

            <div className="space-y-6">
              {t.principles.map((item) => (
                <div key={item.num} className="space-y-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-semibold text-[#995B24] border border-[#995B24]/40 px-1.5 py-0.5">
                      {item.num}
                    </span>
                    <h4 className="font-serif-editorial text-base font-medium text-[#1C1A17]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#5E584F] leading-relaxed font-sans pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-[#E5E7EB] text-xs text-[#9CA3AF]">
              {t.confidentialityNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

