import React, { useState } from 'react';
import { BookOpen, X, Clock, Calendar, ArrowRight, Minus, Plus } from 'lucide-react';
import { EDITORIAL_ARTICLES } from '../data/portfolioData';
import { EditorialArticle } from '../types';

export const EditorialNotes: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<EditorialArticle | null>(null);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  return (
    <section id="suy-ngam" className="py-24 sm:py-32 border-b border-[#E6E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E6E1D8]">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#995B24] font-semibold">
              GÓC NHÌN BIÊN TẬP & VĂN HÓA ĐỌC
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#1C1A17] tracking-tight">
              Suy ngẫm bên bàn chữ
            </h2>
            <p className="text-base text-[#5E584F] max-w-2xl font-serif-editorial font-light leading-relaxed">
              Những tiểu luận ngắn và trăn trở nghề nghiệp về nghệ thuật dịch thuật, cấu trúc văn bản và vật tính của cuốn sách in trong thời đại số.
            </p>
          </div>

          <span className="text-xs font-mono text-[#8E877D] self-start md:self-end">
            3 TIỂU LUẬN TUYỂN CHỌN
          </span>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EDITORIAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              id={`article-card-${article.id}`}
              className="bg-white border border-[#E6E1D8] p-7 flex flex-col justify-between space-y-6 hover:border-[#1C1A17]/40 transition-colors group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-[#8E877D]">
                  <span className="text-[#995B24] uppercase">{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#1C1A17] font-normal leading-snug group-hover:text-[#995B24] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs font-serif italic text-[#6B665E]">
                    {article.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#5E584F] leading-relaxed font-sans line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E1D8]/60 flex items-center justify-between text-xs font-mono text-[#1C1A17]">
                <span className="text-[#8E877D]">{article.date}</span>
                <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-medium">
                  Đọc toàn văn →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal for Editorial Essay */}
      {selectedArticle && (
        <div
          id="article-reader-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1C1A17]/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-[#FBF9F5] border border-[#E6E1D8] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative p-6 sm:p-12 space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls */}
            <div className="flex items-center justify-between border-b border-[#E6E1D8] pb-4">
              <div className="flex items-center gap-3 text-xs font-mono text-[#8E877D]">
                <span className="text-[#995B24] uppercase font-medium">{selectedArticle.category}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
              </div>

              <div className="flex items-center gap-3">
                {/* Font Size Toggle */}
                <div className="flex items-center border border-[#E6E1D8] p-0.5 rounded-sm text-xs font-mono">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`px-2 py-1 ${fontSize === 'normal' ? 'bg-[#1C1A17] text-white' : 'text-[#6B665E]'}`}
                    title="Cỡ chữ chuẩn"
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`px-2 py-1 text-sm ${fontSize === 'large' ? 'bg-[#1C1A17] text-white' : 'text-[#6B665E]'}`}
                    title="Cỡ chữ lớn"
                  >
                    A+
                  </button>
                </div>

                <button
                  id="close-article-reader-btn"
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 text-[#6B665E] hover:text-[#1C1A17] hover:bg-[#F4EFEA] transition-colors"
                  aria-label="Đóng bài viết"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Article Heading */}
            <div className="space-y-3 text-center max-w-2xl mx-auto">
              <h2 className="font-serif-editorial text-2xl sm:text-4xl text-[#1C1A17] font-normal leading-tight">
                {selectedArticle.title}
              </h2>
              <p className="font-serif italic text-base text-[#6B665E]">
                {selectedArticle.subtitle}
              </p>
              <div className="text-xs font-mono text-[#8E877D] pt-2">
                Tác giả: Linh Đặng · linhdang.id.vn
              </div>
            </div>

            {/* Article Content in Calm Paper Setting */}
            <div
              className={`max-w-2xl mx-auto space-y-6 font-serif-editorial text-[#1C1A17] leading-relaxed ${
                fontSize === 'large' ? 'text-xl' : 'text-lg'
              }`}
            >
              {selectedArticle.fullContent.map((para, i) => (
                <p
                  key={i}
                  className={i === 0 ? 'first-letter:text-4xl first-letter:font-normal first-letter:mr-2 first-letter:float-left first-letter:text-[#995B24] first-letter:leading-none' : ''}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* End Colophon */}
            <div className="max-w-2xl mx-auto pt-8 border-t border-[#E6E1D8] text-center space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#8E877D]">
                — HẾT BÀI —
              </div>
              <p className="text-xs font-mono text-[#6B665E]">
                Mọi trích dẫn vui lòng ghi rõ nguồn: Linh Đặng (linhdang.id.vn)
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
