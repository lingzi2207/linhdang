import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language, updateUrl?: boolean) => void;
  toggleLanguage: () => void;
  getEnglishShareUrl: (pageId?: string) => string;
  copyEnglishShareUrl: (pageId?: string) => Promise<boolean>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const detectInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'vi';

  try {
    // 1. Check Query parameter: ?lang=en, ?locale=en
    const searchParams = new URLSearchParams(window.location.search);
    const langQuery = (searchParams.get('lang') || searchParams.get('locale'))?.toLowerCase();
    if (langQuery === 'en') return 'en';
    if (langQuery === 'vi') return 'vi';

    // 2. Check Pathname: /en, /en/...
    const pathname = window.location.pathname.toLowerCase();
    if (pathname === '/en' || pathname.startsWith('/en/')) {
      return 'en';
    }
    if (pathname === '/vi' || pathname.startsWith('/vi/')) {
      return 'vi';
    }

    // 3. Check Hash: #en, #/en, #lang=en, #projects?lang=en
    const hash = window.location.hash.toLowerCase();
    if (
      hash === '#en' ||
      hash.startsWith('#/en') ||
      hash.startsWith('#en/') ||
      hash.includes('lang=en')
    ) {
      return 'en';
    }

    // 4. Check localStorage
    const saved = localStorage.getItem('app_language') as Language;
    if (saved === 'vi' || saved === 'en') return saved;
  } catch {
    // Fallback if browser restrictions apply
  }

  return 'vi';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(detectInitialLanguage);

  const setLanguage = useCallback((lang: Language, updateUrl = true) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('app_language', lang);
        document.documentElement.lang = lang;

        if (updateUrl) {
          const url = new URL(window.location.href);
          if (lang === 'en') {
            url.searchParams.set('lang', 'en');
          } else {
            url.searchParams.delete('lang');
          }
          window.history.replaceState({}, '', url.toString());
        }
      } catch {
        // ignore if in restricted iframe or sandbox
      }
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'vi' ? 'en' : 'vi');
  }, [language, setLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;

    // Listen to browser navigation changes
    const handleLocationChange = () => {
      const detected = detectInitialLanguage();
      if (detected !== language) {
        setLanguage(detected, false);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, [language, setLanguage]);

  const getEnglishShareUrl = useCallback((pageId?: string): string => {
    if (typeof window === 'undefined') return 'https://linhdang.id.vn/?lang=en';
    const origin = window.location.origin;
    const targetHash = pageId && pageId !== 'trang-chu' ? `#${pageId}` : (window.location.hash || '');
    return `${origin}/?lang=en${targetHash}`;
  }, []);

  const copyEnglishShareUrl = useCallback(async (pageId?: string): Promise<boolean> => {
    const url = getEnglishShareUrl(pageId);
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
        return true;
      } catch {
        // Fallback for older browsers
        try {
          const textarea = document.createElement('textarea');
          textarea.value = url;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          return true;
        } catch {
          return false;
        }
      }
    }
    return false;
  }, [getEnglishShareUrl]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      toggleLanguage,
      getEnglishShareUrl,
      copyEnglishShareUrl,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

