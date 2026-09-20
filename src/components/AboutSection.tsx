import React from 'react';
import { Quote, Feather, BookMarked, ShieldCheck, HeartHandshake } from 'lucide-react';
import { PERSONAL_INFO, TESTIMONIALS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      num: 'I',
      title: 'Tôn trọng giọng điệu nguyên bản',
      desc: 'Mỗi tác giả mang một nhịp thở và cấu trúc tâm lý riêng. Nhiệm vụ của người biên tập không phải là gò tác phẩm vào thói quen ngôn ngữ của mình, mà là giúp giọng nói nguyên thủy của tác giả vang lên trong trẻo nhất.'
    },
    {
      num: 'II',
      title: 'Sự nhạy cảm với ngữ cảnh tiếng Việt',
      desc: 'Ngôn ngữ luôn vận động. Khi dịch hay hiệu đính, ta phải cân bằng giữa tính chính xác học thuật của từ gốc với nhạc tính, sức gợi cảm xúc và độ mềm mại tự nhiên của tiếng Việt đương đại.'
    },
    {
      num: 'III',
      title: 'Đạo đức của sự ẩn mình',
      desc: 'Người làm bản thảo giỏi nhất là người hoàn toàn vô hình trong mắt độc giả. Khi cuốn sách mở ra, chỉ có cuộc đối thoại thầm kín và trọn vẹn giữa người viết và người đọc.'
    }
  ];

  return (
    <section id="gioi-thieu" className="py-24 sm:py-32 border-b border-[#E6E1D8] bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#995B24] font-semibold">
            CHÂN DUNG & TRIẾT LÝ NGHỀ NGHIỆP
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl font-light text-[#1C1A17] tracking-tight leading-tight">
            Người đứng sau bóng con chữ và hành trình làm người gác cổng bản thảo.
          </h2>
        </div>

        {/* Two-Column Editorial Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-[#201E1B] font-serif-editorial text-lg leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-normal first-letter:mr-3 first-letter:float-left first-letter:text-[#995B24] first-letter:leading-none">
              Tôi bắt đầu bước chân vào ngành xuất bản từ năm 2013, giữa giai đoạn thị trường sách Việt Nam đang chuyển mình mạnh mẽ về cả số lượng lẫn tiêu chuẩn mỹ thuật ấn phẩm. Trải qua hơn 12 năm làm việc với các bản thảo văn học, triết học, tản văn và sách nghệ thuật, tôi luôn giữ nguyên niềm say mê thuở ban đầu: sự hồi hộp khi mở một trang văn bản mới tinh chưa ai chạm bút.
            </p>

            <p>
              Đối với tôi, một cuốn sách không phải là một sản phẩm thương mại thông thường được sản xuất hàng loạt. Nó là một tác phẩm chứa đựng thời gian, trí tuệ và cả những trăn trở sâu xa của một kiếp người. Dù ở vai trò biên tập viên cấu trúc (developmental editor), người hiệu đính (copy editor) hay dịch giả trực tiếp, tôi đều xem bản thân là người cộng sự trung thành nhất của tác giả.
            </p>

            <p>
              Những năm tháng làm việc tại các nhà xuất bản hàng đầu như Nhã Nam, Kim Đồng, Omega Plus và NXB Trẻ đã cho tôi cơ hội trực tiếp tham gia hội chợ sách quốc tế Frankfurt, trao đổi bản quyền với các đại diện văn học khắp thế giới, và đặc biệt là rèn luyện sự khiêm nhường sâu sắc trước kho tàng tri thức nhân loại.
            </p>

            <div className="pt-4 border-t border-[#E6E1D8] flex flex-wrap gap-8 text-xs font-mono text-[#6B665E]">
              <div>
                <span className="block text-[#8E877D]">NGÔN NGỮ LÀM VIỆC</span>
                <span className="text-[#1C1A17] font-medium">Tiếng Việt (Bản ngữ) · Tiếng Anh · Tiếng Pháp</span>
              </div>
              <div>
                <span className="block text-[#8E877D]">CHUYÊN MÔN NỔI BẬT</span>
                <span className="text-[#1C1A17] font-medium">Văn học dịch, Khảo cứu Triết học, Nghệ thuật in</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Principles Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#F4EFEA] border border-[#E6E1D8] p-8 sm:p-10 space-y-8">
            <div className="border-b border-[#E6E1D8] pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E877D] block mb-1">
                NGUYÊN TẮC CỐT LÕI
              </span>
              <h3 className="font-serif-editorial text-2xl text-[#1C1A17]">
                Ba nguyên tắc của người làm bản thảo
              </h3>
            </div>

            <div className="space-y-6">
              {principles.map((item) => (
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

            <div className="pt-2 border-t border-[#E6E1D8] text-[11px] font-mono text-[#8E877D]">
              *Tuân thủ nghiêm ngặt chuẩn mực bảo mật bản thảo & quyền tác giả.
            </div>
          </div>
        </div>

        {/* Editorial Testimonials / Words from Colleagues & Authors */}
        <div className="pt-12 border-t border-[#E6E1D8] space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-[#995B24] font-semibold">
              CHIA SẺ TỪ ĐỒNG NGHIỆP & TÁC GIẢ
            </span>
            <span className="text-xs font-mono text-[#8E877D]">
              ĐÁNH GIÁ CHUYÊN MÔN
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                id={`testimonial-${t.id}`}
                className="bg-white border border-[#E6E1D8] p-6 sm:p-7 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote size={20} className="text-[#C8C1B4]" />
                  <p className="font-serif-editorial text-sm sm:text-base italic text-[#201E1B] leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>

                <div className="border-t border-[#E6E1D8]/60 pt-4 space-y-1">
                  <div className="font-medium text-xs font-sans text-[#1C1A17]">
                    {t.author}
                  </div>
                  <div className="text-[11px] font-mono text-[#6B665E]">
                    {t.title}
                  </div>
                  <div className="text-[10px] font-mono text-[#8E877D]">
                    {t.affiliation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
