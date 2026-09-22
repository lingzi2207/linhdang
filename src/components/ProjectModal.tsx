import React, { useEffect, useState, useMemo } from 'react';
import { Project } from '../types';
import { X, Bookmark, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT, getLocalizedProject, getRoleLabel, getCategoryLabel } from '../data/translations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire?: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project: rawProject, onClose, onInquire }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'excerpt'>('details');
  const { language } = useLanguage();
  const t = UI_TEXT[language].modal;

  const project = useMemo(() => {
    if (!rawProject) return null;
    return getLocalizedProject(rawProject, language);
  }, [rawProject, language]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="bg-white border border-[#E5E7EB] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white border-b border-[#E5E7EB] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: project.coverAccent }}
            />
            <span className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold">
              {getRoleLabel(project.role, language)} · {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.excerpt && (
              <div className="hidden sm:flex border border-[#E5E7EB] p-0.5 text-xs">
                <button
                  id="tab-btn-details"
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 transition-colors font-medium cursor-pointer ${
                    activeTab === 'details'
                      ? 'bg-[#1C1A17] text-white'
                      : 'text-[#6B7280] hover:text-[#1C1A17]'
                  }`}
                >
                  {t.tabDossier}
                </button>
                <button
                  id="tab-btn-excerpt"
                  onClick={() => setActiveTab('excerpt')}
                  className={`px-3 py-1 transition-colors font-medium cursor-pointer ${
                    activeTab === 'excerpt'
                      ? 'bg-[#1C1A17] text-white'
                      : 'text-[#6B7280] hover:text-[#1C1A17]'
                  }`}
                >
                  {t.tabExcerpt}
                </button>
              </div>
            )}

            <button
              id="close-modal-btn"
              onClick={onClose}
              className="p-1.5 text-[#6B7280] hover:text-[#1C1A17] hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label={t.closeModal}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Header Title Section */}
          <div className="space-y-2 border-b border-[#E5E7EB] pb-6">
            <span className="text-xs uppercase tracking-widest text-[#995B24] font-bold">
              {getCategoryLabel(project.category, language)}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1A17] leading-tight">
              {project.title}
            </h2>
            {project.originalTitle && (
              <p className="text-sm italic text-[#6B7280]">
                {t.originalTitleLabel}: {project.originalTitle}
              </p>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#4B5563]">
              <div>
                <span className="text-[#9CA3AF] text-xs uppercase mr-1.5 font-medium">{t.authorLabel}:</span>
                <span className="font-semibold text-[#1C1A17]">{project.author}</span>
              </div>
              <div>
                <span className="text-[#9CA3AF] text-xs uppercase mr-1.5 font-medium">{t.publisherLabel}:</span>
                <span className="font-semibold text-[#1C1A17]">{project.publisher}</span>
              </div>
              {project.awardsOrRecognition && (
                <div className="flex items-center gap-1.5 text-[#995B24] font-semibold text-xs">
                  <Award size={14} />
                  <span>{project.awardsOrRecognition}</span>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Tab Switcher */}
          {project.excerpt && (
            <div className="sm:hidden flex border border-[#E5E7EB] text-xs">
              <button
                onClick={() => setActiveTab('details')}
                className={`flex-1 py-2 text-center transition-colors font-medium ${
                  activeTab === 'details' ? 'bg-[#1C1A17] text-white' : 'text-[#6B7280]'
                }`}
              >
                {t.tabDossier}
              </button>
              <button
                onClick={() => setActiveTab('excerpt')}
                className={`flex-1 py-2 text-center transition-colors font-medium ${
                  activeTab === 'excerpt' ? 'bg-[#1C1A17] text-white' : 'text-[#6B7280]'
                }`}
              >
                {t.tabExcerpt}
              </button>
            </div>
          )}

          {activeTab === 'details' ? (
            <div className="space-y-8">
              {/* Summary */}
              <div className="space-y-3">
                <h3 className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">
                  {t.summaryHeading}
                </h3>
                <p className="text-base text-[#201E1B] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Editorial Note - The Core Craft */}
              <div className="bg-gray-50 border-l-2 border-[#995B24] p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#995B24] font-bold">
                  <Bookmark size={14} />
                  <span>{t.editorialNoteHeading}</span>
                </div>
                <p className="text-base sm:text-lg italic text-[#201E1B] leading-relaxed">
                  “{project.editorialNote}”
                </p>
              </div>

              {/* Colophon & Publishing Specifications */}
              <div className="border border-[#E5E7EB] p-6 space-y-4 bg-white">
                <h3 className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">
                  {t.colophonHeading}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="space-y-1">
                    <span className="text-[#9CA3AF] block font-medium">{t.pagesLabel}</span>
                    <span className="text-[#1C1A17] font-semibold">
                      {project.pages ? `${project.pages} ${t.pagesUnit}` : t.undefinedSpec}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#9CA3AF] block font-medium">{t.isbnLabel}</span>
                    <span className="text-[#1C1A17] font-semibold">{project.isbn || t.internalEdition}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#9CA3AF] block font-medium">{t.formatLabel}</span>
                    <span className="text-[#1C1A17] font-semibold">{project.format || t.defaultFormat}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#9CA3AF] block font-medium">{t.yearLabel}</span>
                    <span className="text-[#1C1A17] font-semibold">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 bg-gray-50 text-[#4B5563] border border-[#E5E7EB]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            /* Excerpt Reading Mode */
            <div className="space-y-6">
              <div className="border-b border-[#E5E7EB] pb-3">
                <span className="text-xs uppercase tracking-wider text-[#995B24] block font-bold">
                  {project.excerpt?.chapter}
                </span>
                <span className="text-xs text-[#6B7280]">
                  {project.excerpt?.originalLanguage
                    ? `${t.bilingualComparison} (${project.excerpt.originalLanguage} → Tiếng Việt)`
                    : t.vietnameseExcerpt}
                </span>
              </div>

              {/* Vietnamese Text */}
              <div className="space-y-3">
                <span className="text-xs uppercase text-[#4B5563] block font-semibold">{t.vietnameseVersion}</span>
                <blockquote className="text-lg sm:text-xl text-[#1C1A17] leading-relaxed italic bg-gray-50 p-6 border-l-2 border-[#1C1A17]">
                  "{project.excerpt?.viText}"
                </blockquote>
              </div>

              {/* Original Text if exists */}
              {project.excerpt?.originalText && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs uppercase text-[#9CA3AF] block font-semibold">
                    {t.originalText} ({project.excerpt.originalLanguage})
                  </span>
                  <blockquote className="text-base text-[#4B5563] leading-relaxed italic bg-white p-6 border border-[#E5E7EB]">
                    "{project.excerpt.originalText}"
                  </blockquote>
                </div>
              )}

              <p className="text-xs text-[#9CA3AF] italic pt-2">
                {t.excerptDisclaimer}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-[#E5E7EB] px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-[#6B7280]">
            {t.copyrightNotice}
          </span>

          <div className="flex items-center gap-3">
            {onInquire && (
              <button
                id="modal-inquire-project-btn"
                onClick={() => {
                  onInquire(project.title);
                  onClose();
                }}
                className="px-5 py-2.5 bg-[#995B24] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#7D491C] transition-colors cursor-pointer"
              >
                {t.inquireCollab}
              </button>
            )}
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-100 text-[#1C1A17] text-xs uppercase tracking-wider font-semibold hover:bg-gray-200 transition-colors cursor-pointer"
            >
              {t.closeModal}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

