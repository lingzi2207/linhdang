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

export default function App() {
  // Initialize active page from URL hash if valid, otherwise 'trang-chu'
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').trim();
    return PAGES.some((p) => p.id === hash) ? hash : 'trang-chu';
  };

  const [activePage, setActivePage] = useState<string>(getInitialPage);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('Thẩm định bản thảo');

  // Synchronize with browser Back / Forward buttons via hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (PAGES.some((p) => p.id === hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    if (!PAGES.some((p) => p.id === pageId)) return;
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleInquireProject = (projectTitle: string) => {
    setContactSubject(`Dự án tương tự: ${projectTitle}`);
    handleNavigate('lien-he');
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setContactSubject(serviceTitle);
    handleNavigate('lien-he');
  };

  // Render the single active page
  const renderCurrentPage = () => {
    switch (activePage) {
      case 'du-an':
        return <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />;
      case 'gioi-thieu':
        return <AboutSection />;
      case 'kinh-nghiem':
        return <ExperienceSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />;
      case 'lien-he':
        return <ContactSection initialSubject={contactSubject} />;
      case 'trang-chu':
      default:
        return (
          <Hero
            onExploreProjects={() => handleNavigate('du-an')}
            onContactClick={() => handleNavigate('lien-he')}
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
        onInquire={handleInquireProject}
      />
    </div>
  );
}
