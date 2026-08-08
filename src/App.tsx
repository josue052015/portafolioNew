import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RoleMatcher } from './components/RoleMatcher';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCommunity } from './components/EducationCommunity';
import { AiAssistant } from './components/AiAssistant';
import { ContactModal } from './components/ContactModal';
import { personalInfo } from './data/portfolioData';

export function PortfolioContent() {
  const { lang } = useLanguage();
  const [contactOpen, setContactOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [selectedRoleTitle, setSelectedRoleTitle] = useState<string | undefined>(undefined);

  const handleOpenContactWithRole = (roleTitle: string) => {
    setSelectedRoleTitle(roleTitle);
    setContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative">

      {/* Header Bar */}
      <Header
        onOpenContact={() => { setSelectedRoleTitle(undefined); setContactOpen(true); }}
        onToggleAiChat={() => setAiChatOpen(!aiChatOpen)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenContact={() => { setSelectedRoleTitle(undefined); setContactOpen(true); }}
          onToggleAiChat={() => setAiChatOpen(true)}
        />

        <RoleMatcher
          onSelectRoleForContact={handleOpenContactWithRole}
        />

        <Projects />

        <Experience />

        <SkillsMatrix />

        <EducationCommunity />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-white text-base">Pedro Rodriguez</span>
            <span className="text-slate-600">|</span>
            <span className="font-mono text-cyan-400">Senior Full-Stack Engineer</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">
              {personalInfo.email}
            </a>
            <span>•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
          </div>

          <div className="font-mono text-slate-500 text-[11px] flex items-center gap-1">
            <span>{lang === 'en' ? 'Built with React & TypeScript' : 'Desarrollado con React y TypeScript'}</span>
          </div>
        </div>
      </footer>

      {/* AI Assistant Chat Drawer */}
      <AiAssistant
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
        onOpenContact={(roleTitle) => {
          setSelectedRoleTitle(roleTitle);
          setContactOpen(true);
        }}
      />

      {/* Contact & Schedule Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        prefilledRoleTitle={selectedRoleTitle}
      />

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
