import React from 'react';
import avatarImg from '../assets/images/regenerated_image_1789930224282.png';

interface ProfileBannerProps {
  avatarUrl?: string;
}

export const ProfileBanner: React.FC<ProfileBannerProps> = ({
  avatarUrl = avatarImg,
}) => {
  return (
    <div id="profile-banner-component" className="w-full">
      {/* Live Visual Header Profile Banner */}
      <div className="w-full max-w-5xl mx-auto overflow-hidden bg-white border border-[#E5E7EB] shadow-xs">
        {/* Top Solid Black Bar */}
        <div className="h-6 sm:h-7 bg-[#000000] w-full" />

        {/* Main Content: Square Left Picture, Right Name & Dimension Annotations */}
        <div className="flex flex-col md:flex-row items-stretch min-h-[220px] sm:min-h-[260px]">
          
          {/* LEFT SECTION: Full square picture, no circle, natural full color */}
          <div className="w-full md:w-[260px] lg:w-[280px] aspect-square relative flex-shrink-0 overflow-hidden bg-[#2B2A27] border-b md:border-b-0 md:border-r border-[#E5E7EB]">
            <img
              src={avatarUrl}
              alt="Đặng Thị Tuyết Linh - Chân dung"
              className="w-full h-full object-cover object-[center_28%]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/avatar.jpg';
              }}
            />
          </div>

          {/* RIGHT SECTION: Name & Dimension Annotations with perfectly balanced spacing */}
          <div className="w-full md:flex-1 bg-white flex items-center justify-center px-4 sm:px-10 lg:px-12 py-8 md:py-0 overflow-x-auto">
            <div className="inline-flex items-start gap-3 sm:gap-4 select-none shrink-0 py-4">
              
              {/* Last Name Group: ĐẶNG THỊ */}
              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-sm text-[#4B5563] font-medium tracking-tight mb-0.5">
                  Last name
                </span>
                <div className="flex items-center w-full my-1.5 px-0.5">
                  <span className="w-[1px] h-2 bg-[#4B5563] shrink-0" />
                  <span className="flex-1 h-[1px] bg-[#4B5563]" />
                  <span className="w-[1px] h-2 bg-[#4B5563] shrink-0" />
                </div>
                <div className="flex items-center gap-3 sm:gap-4 pt-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black whitespace-nowrap leading-none">
                    ĐẶNG
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black whitespace-nowrap leading-none">
                    THỊ
                  </span>
                </div>
              </div>

              {/* First Name Group: TUYẾT LINH */}
              <div className="flex flex-col items-center">
                <span className="text-xs sm:text-sm text-[#4B5563] font-medium tracking-tight mb-0.5">
                  First name
                </span>
                <div className="flex items-center w-full my-1.5 px-0.5">
                  <span className="w-[1px] h-2 bg-[#4B5563] shrink-0" />
                  <span className="flex-1 h-[1px] bg-[#4B5563]" />
                  <span className="w-[1px] h-2 bg-[#4B5563] shrink-0" />
                </div>
                
                <div className="flex items-start gap-3 sm:gap-4 pt-1">
                  {/* TUYẾT */}
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-black whitespace-nowrap leading-none">
                    TUYẾT
                  </span>

                  {/* LINH + Preferred name dimension line underneath */}
                  <div className="flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#16325C] whitespace-nowrap leading-none">
                      LINH
                    </span>
                    <div className="flex items-center w-full mt-2 mb-1 px-0.5">
                      <span className="w-[1px] h-2 bg-[#16325C] shrink-0" />
                      <span className="flex-1 h-[1px] bg-[#16325C]" />
                      <span className="w-[1px] h-2 bg-[#16325C] shrink-0" />
                    </div>
                    <span className="text-xs sm:text-[13px] text-[#16325C] font-medium tracking-tight whitespace-nowrap">
                      Preferred name
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
