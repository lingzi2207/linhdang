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
    <section id="du-an" className="pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-[#E5E7EB] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E7EB]">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#995B24] font-bold">
              MỤC LỤC TÁC PHẨM · 2013 – 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1C1A17] tracking-tight">
              Các dự án tiêu biểu
            </h2>
            <p className="text-base text-[#4B5563] max-w-2xl leading-relaxed">
              Tuyển tập các ấn phẩm tiêu biểu trong sự nghiệp biên tập bản thảo, dịch thuật văn học và phát triển xuất bản cùng các nhà xuất bản hàng đầu tại Việt Nam.
            </p>
          </div>

          <div className="text-xs text-[#6B7280] self-start md:self-end">
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
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-[#1C1A17] text-white border-[#1C1A17]'
                      : 'bg-white text-[#4B5563] border-[#E5E7EB] hover:border-gray-400 hover:text-[#1C1A17]'
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
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />
              <input
                id="search-projects-input"
                type="text"
                placeholder="Tìm tựa sách, tác giả, NXB..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#E5E7EB] pl-9 pr-3 py-1.5 text-xs text-[#1C1A17] placeholder-[#9CA3AF] focus:outline-none focus:border-[#1C1A17] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#9CA3AF] hover:text-[#1C1A17]"
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
              className="bg-white border border-[#E5E7EB] px-3 py-1.5 text-xs text-[#1C1A17] focus:outline-none focus:border-[#1C1A17] cursor-pointer"
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
          <div className="py-20 text-center border border-[#E5E7EB] bg-gray-50 p-8 space-y-3">
            <p className="text-base text-[#4B5563]">
              Không tìm thấy ấn phẩm nào phù hợp với bộ lọc hiện tại.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Tất cả');
                setSelectedRoleFilter('all');
                setSearchQuery('');
              }}
              className="text-xs font-semibold uppercase tracking-wider text-[#995B24] underline hover:text-[#1C1A17] cursor-pointer"
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
                className="group bg-white border border-[#E5E7EB] hover:border-[#1C1A17] transition-all duration-300 flex flex-col justify-between relative shadow-xs"
              >
                {/* Book Spine Color Top Line */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: project.coverAccent }}
                />

                <div className="p-6 sm:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between text-xs text-[#6B7280]">
                      <span className="uppercase text-[#995B24] font-semibold">
                        {project.role}
                      </span>
                      <span>{project.year}</span>
                    </div>

                    {/* Book Title */}
                    <div>
                      <h3 className="text-xl sm:text-2xl text-[#1C1A17] font-bold leading-snug group-hover:text-[#995B24] transition-colors">
                        {project.title}
                      </h3>
                      {project.originalTitle && (
                        <p className="text-xs italic text-[#6B7280] mt-1 line-clamp-1">
                          {project.originalTitle}
                        </p>
                      )}
                    </div>

                    {/* Author & Publisher */}
                    <div className="pt-1 text-xs text-[#4B5563] space-y-1">
                      <div>
                        <span className="text-[#9CA3AF]">Tác giả:</span>{' '}
                        <span className="font-semibold text-[#1C1A17]">{project.author}</span>
                      </div>
                      <div>
                        <span className="text-[#9CA3AF]">Đơn vị:</span>{' '}
                        <span className="text-[#1C1A17]">{project.publisher}</span>
                      </div>
                    </div>

                    {/* Summary Snippet */}
                    <p className="text-xs text-[#4B5563] line-clamp-3 leading-relaxed pt-1">
                      {project.summary}
                    </p>

                    {/* Award / Recognition Badge if applicable */}
                    {project.awardsOrRecognition && (
                      <div className="pt-1 flex items-center gap-1.5 text-xs text-[#995B24] bg-amber-50 px-2.5 py-1 border border-amber-200">
                        <Award size={13} className="shrink-0 text-[#995B24]" />
                        <span className="truncate font-medium">{project.awardsOrRecognition}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom: Action */}
                  <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                    <span className="text-[#6B7280] uppercase font-medium">
                      {project.category}
                    </span>

                    <button
                      id={`view-project-btn-${project.id}`}
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 font-semibold text-[#1C1A17] hover:text-[#995B24] transition-colors group/btn cursor-pointer"
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
