import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, ArrowRight, Award, Bookmark } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'Tất cả',
  'Văn học dịch',
  'Phi hư cấu & Triết học',
  'Nghệ thuật & Thiết kế',
  'Khảo cứu & Tản văn'
];

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('Tất cả');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchCategory =
        selectedCategory === 'Tất cả' || project.category === selectedCategory;

      const matchRole =
        selectedRoleFilter === 'all' || project.role === selectedRoleFilter;

      const query = searchQuery.toLowerCase().trim();
      const matchQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        (project.originalTitle && project.originalTitle.toLowerCase().includes(query)) ||
        project.author.toLowerCase().includes(query) ||
        project.publisher.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query));

      return matchCategory && matchRole && matchQuery;
    });
  }, [selectedCategory, selectedRoleFilter, searchQuery]);

  return (
    <section id="du-an" className="pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-[#E6E1D8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Colophon Page Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E6E1D8] text-xs font-mono text-[#6B665E]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#995B24]" />
            <span className="font-semibold text-[#1C1A17]">TRANG 02 / 06 · CÁC DỰ ÁN & ẤN PHẨM TIÊU BIỂU</span>
          </div>
          <div className="flex items-center gap-4">
            <span>TỔNG SỐ: {PROJECTS.length} ĐẦU SÁCH</span>
            <span className="text-[#C8C1B4]">|</span>
            <span>HIỂN THỊ: {filteredProjects.length}</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E1D8]">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#995B24] font-semibold">
              MỤC LỤC TÁC PHẨM · 2013 – 2026
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#1C1A17] tracking-tight">
              Các dự án tiêu biểu
            </h2>
            <p className="text-base text-[#5E584F] max-w-2xl font-serif-editorial font-light leading-relaxed">
              Tuyển tập các ấn phẩm tiêu biểu trong sự nghiệp biên tập bản thảo, dịch thuật văn học và phát triển xuất bản cùng các nhà xuất bản hàng đầu tại Việt Nam.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8E877D] self-start md:self-end">
            HIỂN THỊ <span className="font-semibold text-[#1C1A17]">{filteredProjects.length}</span> / {PROJECTS.length} ẤN PHẨM
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  id={`filter-category-${category.replace(/\s+/g, '-').toLowerCase()}`}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-mono tracking-wider transition-all border ${
                    isSelected
                      ? 'bg-[#1C1A17] text-[#FBF9F5] border-[#1C1A17]'
                      : 'bg-[#F4EFEA] text-[#6B665E] border-[#E6E1D8] hover:border-[#1C1A17]/40 hover:text-[#1C1A17]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input and Role Filter */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8E877D]"
              />
              <input
                id="search-projects-input"
                type="text"
                placeholder="Tìm tựa sách, tác giả, NXB..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F4EFEA] border border-[#E6E1D8] pl-9 pr-3 py-1.5 text-xs font-mono text-[#1C1A17] placeholder-[#8E877D] focus:outline-none focus:border-[#1C1A17] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#8E877D] hover:text-[#1C1A17]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Role Filter Selector */}
            <select
              id="role-filter-select"
              value={selectedRoleFilter}
              onChange={(e) => setSelectedRoleFilter(e.target.value)}
              className="bg-[#F4EFEA] border border-[#E6E1D8] px-3 py-1.5 text-xs font-mono text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] cursor-pointer"
            >
              <option value="all">Mọi vai trò</option>
              <option value="Biên tập bản thảo">Biên tập bản thảo</option>
              <option value="Dịch giả">Dịch giả</option>
              <option value="Phát triển xuất bản">Phát triển xuất bản</option>
              <option value="Giám tuyển nội dung">Giám tuyển nội dung</option>
            </select>
          </div>
        </div>

        {/* Projects Editorial Catalog Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-20 text-center border border-[#E6E1D8] bg-[#F4EFEA] p-8 space-y-3">
            <p className="font-serif-editorial text-lg text-[#6B665E]">
              Không tìm thấy ấn phẩm nào phù hợp với bộ lọc hiện tại.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Tất cả');
                setSelectedRoleFilter('all');
                setSearchQuery('');
              }}
              className="text-xs font-mono uppercase tracking-wider text-[#995B24] underline hover:text-[#1C1A17]"
            >
              Đặt lại toàn bộ bộ lọc
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="group bg-[#FFFFFF] border border-[#E6E1D8] hover:border-[#201E1B]/50 transition-all duration-300 flex flex-col justify-between relative shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              >
                {/* Book Spine Color Top Line */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: project.coverAccent }}
                />

                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#8E877D]">
                      <span className="uppercase text-[#995B24] font-medium">
                        {project.role}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    {/* Book Title */}
                    <div>
                      <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#1C1A17] font-normal leading-snug group-hover:text-[#995B24] transition-colors">
                        {project.title}
                      </h3>
                      {project.originalTitle && (
                        <p className="text-xs font-serif italic text-[#6B665E] mt-1 line-clamp-1">
                          {project.originalTitle}
                        </p>
                      )}
                    </div>

                    {/* Author & Publisher */}
                    <div className="pt-1 text-xs font-sans text-[#5E584F] space-y-1">
                      <div>
                        <span className="text-[#8E877D] font-mono">Tác giả:</span>{' '}
                        <span className="font-medium text-[#1C1A17]">{project.author}</span>
                      </div>
                      <div>
                        <span className="text-[#8E877D] font-mono">Đơn vị:</span>{' '}
                        <span className="text-[#201E1B]">{project.publisher}</span>
                      </div>
                    </div>

                    {/* Summary Snippet */}
                    <p className="text-xs text-[#5E584F] line-clamp-3 leading-relaxed font-sans pt-1">
                      {project.summary}
                    </p>

                    {/* Award / Recognition Badge if applicable */}
                    {project.awardsOrRecognition && (
                      <div className="pt-1 flex items-center gap-1.5 text-[11px] font-mono text-[#995B24] bg-[#FBF9F5] px-2.5 py-1 border border-[#E6E1D8]">
                        <Award size={12} className="shrink-0" />
                        <span className="truncate">{project.awardsOrRecognition}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Action */}
                  <div className="pt-4 border-t border-[#E6E1D8]/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#8E877D] uppercase">
                      {project.category}
                    </span>

                    <button
                      id={`view-project-btn-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 font-medium text-[#1C1A17] hover:text-[#995B24] transition-colors group/btn"
                    >
                      <span>Chi tiết & Trích đoạn</span>
                      <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
