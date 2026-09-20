/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectModal } from './components/ProjectModal';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EditorialNotes } from './components/EditorialNotes';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('trang-chu');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('Thẩm định bản thảo');

  // Scroll spy to update active section in header
  useEffect(() => {
    const sections = ['trang-chu', 'du-an', 'gioi-thieu', 'kinh-nghiem', 'suy-ngam', 'lien-he'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleInquireProject = (projectTitle: string) => {
    setContactSubject(`Dự án tương tự: ${projectTitle}`);
    handleNavigate('lien-he');
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setContactSubject(serviceTitle);
    handleNavigate('lien-he');
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1A17] flex flex-col font-sans selection:bg-[#E6E1D8] selection:text-[#1C1A17]">
      {/* Header with Navigation */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Editorial Content */}
      <main className="flex-grow">
        {/* Section 1: Trang chủ (Hero & Manifest) */}
        <Hero
          onExploreProjects={() => handleNavigate('du-an')}
          onContactClick={() => handleNavigate('lien-he')}
        />

        {/* Section 2: Các dự án tiêu biểu (Projects & Catalog) */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 3: Giới thiệu (About Linh Đặng & Philosophy) */}
        <AboutSection />

        {/* Section 4: Kinh nghiệm & Dịch vụ (Timeline & Publishing Services) */}
        <ExperienceSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Section 5: Suy ngẫm bên bàn chữ (Editorial Notes & Musings) */}
        <EditorialNotes />

        {/* Section 6: Liên hệ (Inquiry Form & Direct Contact) */}
        <ContactSection initialSubject={contactSubject} />
      </main>

      {/* Colophon & Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Detail & Excerpt Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireProject}
      />
    </div>
  );
}

