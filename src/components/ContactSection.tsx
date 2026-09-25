import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, Copy, Check, ArrowUpRight, ShieldCheck, Clock, MapPin, Send, Link2, Globe, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { UI_TEXT } from '../data/translations';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedEnLink, setCopiedEnLink] = useState(false);
  const { language, getEnglishShareUrl, copyEnglishShareUrl } = useLanguage();
  const t = UI_TEXT[language].contact;

  const primaryEmail = 'lingzi2207@gmail.com';
  const workEmail = PERSONAL_INFO.email || 'contact@linhdang.id.vn';
  const linkedinUrl = 'https://www.linkedin.com';
  const facebookUrl = 'https://www.facebook.com';
  const englishShareUrl = getEnglishShareUrl();

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2500);
  };

  const handleCopyEnglishLink = async () => {
    const success = await copyEnglishShareUrl();
    if (success) {
      setCopiedEnLink(true);
      setTimeout(() => setCopiedEnLink(false), 2500);
    }
  };

  return (
    <section id="lien-he" className="pt-28 pb-20 bg-[#F9FAFB] min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 border-b border-[#E5E7EB] pb-6">
          <span className="text-xs uppercase tracking-widest text-[#995B24] font-bold block">
            {t.sectionBadge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1C1A17] tracking-tight">
            {t.title}
          </h1>
          <p className="text-base text-[#4B5563] max-w-2xl leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Priority Email Highlight Box */}
        <div className="bg-white border-2 border-[#1C1A17] p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F3F4F6] text-[#1C1A17] text-xs font-bold uppercase tracking-wider">
              <Mail size={15} className="text-[#995B24]" />
              <span>{t.priorityBadge}</span>
            </div>
            <span className="text-xs text-[#6B7280] font-mono">
              {t.responseTime}
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1C1A17]">
              {t.emailPriorityTitle}
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed max-w-2xl">
              {t.emailPriorityDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Primary Email */}
            <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between gap-3">
              <div className="space-y-0.5 min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] block">
                  {t.primaryEmailLabel}
                </span>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="text-base sm:text-lg font-mono font-bold text-[#1C1A17] hover:text-[#995B24] transition-colors truncate block"
                  title={`Gửi mail tới ${primaryEmail}`}
                >
                  {primaryEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopyEmail(primaryEmail)}
                  className="p-2 text-[#4B5563] hover:text-[#1C1A17] hover:bg-white rounded-sm border border-transparent hover:border-[#E5E7EB] transition-all cursor-pointer"
                  title={copiedEmail === primaryEmail ? t.copied : t.copyEmail}
                >
                  {copiedEmail === primaryEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
                <a
                  href={`mailto:${primaryEmail}`}
                  className="p-2 text-[#1C1A17] hover:bg-white rounded-sm border border-transparent hover:border-[#E5E7EB] transition-all"
                  title={t.openMailClient}
                >
                  <Send size={16} />
                </a>
              </div>
            </div>

            {/* Work / Domain Email */}
            <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] flex items-center justify-between gap-3">
              <div className="space-y-0.5 min-w-0">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] block">
                  {t.workEmailLabel}
                </span>
                <a
                  href={`mailto:${workEmail}`}
                  className="text-base sm:text-lg font-mono font-bold text-[#1C1A17] hover:text-[#995B24] transition-colors truncate block"
                  title={`Gửi mail tới ${workEmail}`}
                >
                  {workEmail}
                </a>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopyEmail(workEmail)}
                  className="p-2 text-[#4B5563] hover:text-[#1C1A17] hover:bg-white rounded-sm border border-transparent hover:border-[#E5E7EB] transition-all cursor-pointer"
                  title={copiedEmail === workEmail ? t.copied : t.copyEmail}
                >
                  {copiedEmail === workEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                </button>
                <a
                  href={`mailto:${workEmail}`}
                  className="p-2 text-[#1C1A17] hover:bg-white rounded-sm border border-transparent hover:border-[#E5E7EB] transition-all"
                  title={t.openMailClient}
                >
                  <Send size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated English Link Box for International Partners */}
        <div id="international-partner-link-card" className="bg-white border border-[#E5E7EB] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5E7EB] pb-4">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-[#995B24]/10 text-[#995B24] rounded-xs">
                <Globe size={16} />
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#1C1A17]">
                {t.partnerLinkTitle}
              </h2>
            </div>
            <span className="text-xs font-mono px-2.5 py-1 bg-amber-50 text-[#995B24] font-bold border border-amber-200/80 rounded-xs">
              ?lang=en
            </span>
          </div>

          <p className="text-sm text-[#4B5563] leading-relaxed max-w-3xl">
            {t.partnerLinkDesc}
          </p>

          <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1 min-w-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280] block">
                {t.partnerLinkDirectUrl}
              </span>
              <code className="text-sm sm:text-base font-mono font-bold text-[#1C1A17] break-all select-all block">
                {englishShareUrl}
              </code>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                id="btn-copy-partner-link"
                onClick={handleCopyEnglishLink}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold transition-all rounded-xs border cursor-pointer ${
                  copiedEnLink
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                    : 'bg-[#1C1A17] hover:bg-[#322F2A] text-white border-[#1C1A17]'
                }`}
              >
                {copiedEnLink ? (
                  <>
                    <Check size={14} />
                    <span>{t.copiedPartnerLink}</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>{t.copyPartnerLink}</span>
                  </>
                )}
              </button>

              <a
                href="/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-[#4B5563] hover:text-[#1C1A17] bg-white border border-[#D1D5DB] rounded-xs hover:bg-gray-50 transition-all cursor-pointer"
                title="Mở trong tab mới để kiểm tra (Preview English link)"
              >
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Social Networks & Professional Profiles */}
        <div className="space-y-4">
          <div className="border-b border-[#E5E7EB] pb-3">
            <h3 className="text-lg font-bold text-[#1C1A17]">
              {t.socialsTitle}
            </h3>
            <p className="text-xs text-[#6B7280]">
              {t.socialsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* LinkedIn */}
            <a
              id="contact-link-linkedin"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white border border-[#E5E7EB] hover:border-[#0A66C2] hover:shadow-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xs bg-[#F0F6FC] text-[#0A66C2] flex items-center justify-center group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                  <Linkedin size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider block">
                    {t.linkedinSub}
                  </span>
                  <span className="text-base font-bold text-[#1C1A17] group-hover:text-[#0A66C2] transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-xs text-[#6B7280] block">
                    {t.linkedinDesc}
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-[#9CA3AF] group-hover:text-[#0A66C2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Facebook */}
            <a
              id="contact-link-facebook"
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white border border-[#E5E7EB] hover:border-[#1877F2] hover:shadow-sm transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xs bg-[#E7F3FF] text-[#1877F2] flex items-center justify-center group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                  <Facebook size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-[#6B7280] tracking-wider block">
                    {t.facebookSub}
                  </span>
                  <span className="text-base font-bold text-[#1C1A17] group-hover:text-[#1877F2] transition-colors">
                    Facebook
                  </span>
                  <span className="text-xs text-[#6B7280] block">
                    {t.facebookDesc}
                  </span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-[#9CA3AF] group-hover:text-[#1877F2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>

        {/* Working Guidelines / Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 bg-white border border-[#E5E7EB] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#F3F4F6] text-[#1C1A17] flex items-center justify-center">
              <ShieldCheck size={18} />
            </div>
            <h4 className="text-sm font-bold text-[#1C1A17]">{t.ndaTitle}</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              {t.ndaDesc}
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E5E7EB] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#F3F4F6] text-[#1C1A17] flex items-center justify-center">
              <Clock size={18} />
            </div>
            <h4 className="text-sm font-bold text-[#1C1A17]">{t.responseCommitmentTitle}</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              {t.responseCommitmentDesc}
            </p>
          </div>

          <div className="p-5 bg-white border border-[#E5E7EB] space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#F3F4F6] text-[#1C1A17] flex items-center justify-center">
              <MapPin size={18} />
            </div>
            <h4 className="text-sm font-bold text-[#1C1A17]">{t.workLocationTitle}</h4>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              {t.workLocationDesc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

