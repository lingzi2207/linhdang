/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { PAGES } from './components/PageNavigation';
import { Project } from './types';

// Map of English route aliases to internal page IDs
const PAGE_ALIAS_MAP: Record<string, string> = {
  home: 'trang-chu',
  projects: 'du-an',
  works: 'du-an',
  publications: 'du-an',
  about: 'gioi-thieu',
  philosophy: 'gioi-thieu',
  bio: 'gioi-thieu',
  experience: 'kinh-nghiem',
  services: 'kinh-nghiem',
  contact: 'lien-he',
  inquiries: 'lien-he',
};

const resolvePageFromHash = (rawHash: string): string | null => {
  let clean = rawHash.replace('#', '').trim();
  if (clean.startsWith('/')) clean = clean.slice(1);
  if (clean.startsWith('en/')) clean = clean.replace('en/', '');
  if (clean.startsWith('vi/')) clean = clean.replace('vi/', '');
  if (clean.includes('?')) clean = clean.split('?')[0];

  if (!clean || clean === 'en' || clean === 'vi') return 'trang-chu';
  if (PAGES.some((p) => p.id === clean)) return clean;
  if (PAGE_ALIAS_MAP[clean]) return PAGE_ALIAS_MAP[clean];
  return null;
};

export default function App() {
  // Initialize active page from URL hash if valid, otherwise 'trang-chu'
  const getInitialPage = () => {
    const resolved = resolvePageFromHash(window.location.hash);
    return resolved || 'trang-chu';
  };

  const [activePage, setActivePage] = useState<string>(getInitialPage);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Synchronize with browser Back / Forward buttons via hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const resolved = resolvePageFromHash(window.location.hash);
      if (resolved && resolved !== activePage) {
        setActivePage(resolved);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activePage]);

  const handleNavigate = (pageId: string) => {
    if (!PAGES.some((p) => p.id === pageId)) return;
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Render the single active page
  const renderCurrentPage = () => {
    switch (activePage) {
      case 'du-an':
        return <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />;
      case 'gioi-thieu':
        return <AboutSection />;
      case 'kinh-nghiem':
        return <ExperienceSection onSelectServiceForInquiry={() => handleNavigate('lien-he')} />;
      case 'lien-he':
        return <ContactSection />;
      case 'trang-chu':
      default:
        return (
          <Hero
            onExploreProjects={() => handleNavigate('du-an')}
            onNavigate={handleNavigate}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1C1A17] flex flex-col font-sans selection:bg-gray-200 selection:text-[#1C1A17]">
      {/* Header with Navigation Tabs */}
      <Header activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Editorial Dedicated Page Content */}
      <main className="flex-grow pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Detail & Excerpt Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => handleNavigate('lien-he')}
      />
    </div>
  );
}
