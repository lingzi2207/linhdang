import React from 'react';
import { ArrowRight, BookOpen, Feather, Compass, Mail } from 'lucide-react';
import { ProfileBanner } from './ProfileBanner';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../data/translations';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick?: () => void;
  onNavigate?: (pageId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onNavigate }) => {
  const { language } = useLanguage();
  const t = UI_TEXT[language].hero;

  const iconsMap: Record<string, typeof BookOpen> = {
    'du-an': BookOpen,
    'gioi-thieu': Feather,
    'kinh-nghiem': Compass,
    'lien-he': Mail,
  };

  return (
    <section id="trang-chu" className="pt-28 pb-20 bg-white min-h-[calc(100vh-80px)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Profile Header Banner */}
        <ProfileBanner />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.chapters.map((chap) => {
            const IconComp = iconsMap[chap.id] || BookOpen;
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
                  <span>{t.viewContent}</span>
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

