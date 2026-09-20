import React, { useState } from 'react';
import { X, BookOpen, ExternalLink, Bookmark, Award, Languages, FileText } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'excerpt'>('details');

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="bg-[#FBF9F5] border border-[#E6E1D8] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-[#FBF9F5] border-b border-[#E6E1D8] px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: project.coverAccent }}
            />
            <span className="text-xs font-mono uppercase tracking-wider text-[#6B665E]">
              {project.role} · {project.year}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.excerpt && (
              <div className="hidden sm:flex border border-[#E6E1D8] p-0.5 rounded-sm text-xs font-mono">
                <button
                  id="tab-btn-details"
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 transition-colors ${
                    activeTab === 'details'
                      ? 'bg-[#1C1A17] text-[#FBF9F5]'
                      : 'text-[#6B665E] hover:text-[#1C1A17]'
                  }`}
                >
                  Hồ sơ xuất bản
                </button>
                <button
                  id="tab-btn-excerpt"
                  onClick={() => setActiveTab('excerpt')}
                  className={`px-3 py-1 transition-colors ${
                    activeTab === 'excerpt'
                      ? 'bg-[#1C1A17] text-[#FBF9F5]'
                      : 'text-[#6B665E] hover:text-[#1C1A17]'
                  }`}
                >
                  Đọc trích đoạn
                </button>
              </div>
            )}

            <button
              id="close-modal-btn"
              onClick={onClose}
              className="p-1.5 text-[#6B665E] hover:text-[#1C1A17] hover:bg-[#F4EFEA] transition-colors rounded-none"
              aria-label="Đóng chi tiết tác phẩm"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Header Title Section */}
          <div className="space-y-2 border-b border-[#E6E1D8] pb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#995B24]">
              {project.category}
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-4xl text-[#1C1A17] font-normal leading-tight">
              {project.title}
            </h2>
            {project.originalTitle && (
              <p className="text-sm font-serif italic text-[#6B665E]">
                Nguyên tác: {project.originalTitle}
              </p>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#5E584F]">
              <div>
                <span className="text-[#8E877D] text-xs uppercase font-mono mr-1.5">Tác giả:</span>
                <span className="font-medium text-[#1C1A17]">{project.author}</span>
              </div>
              <div>
                <span className="text-[#8E877D] text-xs uppercase font-mono mr-1.5">Đơn vị:</span>
                <span className="font-medium text-[#1C1A17]">{project.publisher}</span>
              </div>
              {project.awardsOrRecognition && (
                <div className="flex items-center gap-1.5 text-[#995B24] font-medium text-xs">
                  <Award size={14} />
                  <span>{project.awardsOrRecognition}</span>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Tab Switcher */}
          {project.excerpt && (
            <div className="sm:hidden flex border border-[#E6E1D8] rounded-sm text-xs font-mono">
              <button
                onClick={() => setActiveTab('details')}
                className={`flex-1 py-2 text-center transition-colors ${
                  activeTab === 'details' ? 'bg-[#1C1A17] text-[#FBF9F5]' : 'text-[#6B665E]'
                }`}
              >
                Hồ sơ xuất bản
              </button>
              <button
                onClick={() => setActiveTab('excerpt')}
                className={`flex-1 py-2 text-center transition-colors ${
                  activeTab === 'excerpt' ? 'bg-[#1C1A17] text-[#FBF9F5]' : 'text-[#6B665E]'
                }`}
              >
                Đọc trích đoạn
              </button>
            </div>
          )}

          {activeTab === 'details' ? (
            <div className="space-y-8">
              {/* Summary */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#8E877D]">
                  TÓM LƯỢC TÁC PHẨM
                </h3>
                <p className="text-base text-[#201E1B] leading-relaxed font-sans">
                  {project.summary}
                </p>
              </div>

              {/* Editorial Note - The Core Craft */}
              <div className="bg-[#F4EFEA] border-l-2 border-[#995B24] p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#995B24] font-semibold">
                  <Bookmark size={14} />
                  <span>GHI CHÚ BIÊN TẬP & DỊCH THUẬT</span>
                </div>
                <p className="font-serif-editorial text-base sm:text-lg italic text-[#201E1B] leading-relaxed">
                  “{project.editorialNote}”
                </p>
              </div>

              {/* Colophon & Publishing Specifications */}
              <div className="border border-[#E6E1D8] p-6 space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#8E877D]">
                  THÔNG SỐ ẤN PHẨM & KỸ THUẬT IN
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-1">
                    <span className="text-[#8E877D] block">Số trang</span>
                    <span className="text-[#1C1A17] font-medium">{project.pages ? `${project.pages} trang` : 'Không xác định'}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#8E877D] block">Mã số chuẩn ISBN</span>
                    <span className="text-[#1C1A17] font-medium">{project.isbn || 'Ấn bản lưu hành nội bộ'}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#8E877D] block">Quy cách gia công</span>
                    <span className="text-[#1C1A17] font-medium">{project.format || 'Bìa mềm tay gập'}</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#8E877D] block">Năm xuất bản</span>
                    <span className="text-[#1C1A17] font-medium">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] font-mono px-2.5 py-1 bg-[#F4EFEA] text-[#6B665E] border border-[#E6E1D8]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            /* Excerpt Reading Mode */
            <div className="space-y-6">
              <div className="border-b border-[#E6E1D8] pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#995B24] block">
                  {project.excerpt?.chapter}
                </span>
                <span className="text-xs text-[#8E877D] font-mono">
                  {project.excerpt?.originalLanguage ? `Đối chiếu song ngữ (${project.excerpt.originalLanguage} → Tiếng Việt)` : 'Trích đoạn tiếng Việt'}
                </span>
              </div>

              {/* Vietnamese Text */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-[#6B665E] block">Bản tiếng Việt</span>
                <blockquote className="font-serif-editorial text-lg sm:text-xl text-[#1C1A17] leading-relaxed italic bg-[#F4EFEA] p-6 border-l-2 border-[#1C1A17]">
                  "{project.excerpt?.viText}"
                </blockquote>
              </div>

              {/* Original Text if exists */}
              {project.excerpt?.originalText && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase text-[#8E877D] block">
                    Nguyên tác ({project.excerpt.originalLanguage})
                  </span>
                  <blockquote className="font-serif text-base text-[#5E584F] leading-relaxed italic bg-white p-6 border border-[#E6E1D8]">
                    "{project.excerpt.originalText}"
                  </blockquote>
                </div>
              )}

              <p className="text-xs text-[#8E877D] font-mono italic pt-2">
                *Trích đoạn được chia sẻ với mục đích nghiên cứu học thuật và minh họa phong cách biên tập/dịch thuật của Linh Đặng.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="sticky bottom-0 bg-[#F4EFEA] border-t border-[#E6E1D8] px-6 sm:px-10 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#8E877D]">
            Ấn phẩm được bảo hộ bản quyền xuất bản
          </span>

          <button
            id="modal-inquire-project-btn"
            onClick={() => {
              onInquire(project.title);
              onClose();
            }}
            className="px-5 py-2.5 bg-[#1C1A17] text-[#FBF9F5] text-xs font-mono uppercase tracking-wider hover:bg-[#33302B] transition-colors"
          >
            Thảo luận dự án tương tự →
          </button>
        </div>
      </div>
    </div>
  );
};
