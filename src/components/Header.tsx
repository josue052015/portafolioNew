import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Code, Sparkles, MessageSquare, Terminal, Menu, X, CheckCircle2, Globe } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
  onToggleAiChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact, onToggleAiChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.roleMatcher, href: "#role-matcher" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.education, href: "#education" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/60 py-3' : 'bg-transparent py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 p-[2px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-heading font-black text-cyan-400 text-lg">
              PR
            </div>
          </div>
          <div>
            <div className="font-heading font-bold text-slate-100 text-lg group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              Pedro Rodriguez
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            </div>
            <div className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Terminal className="w-3 h-3 text-cyan-400" />
              <span>Full-Stack Engineer</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2 xl:gap-3">


          {/* Language Switcher Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs shrink-0">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-1 rounded-lg transition-all font-bold flex items-center gap-1 ${lang === 'en' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
            >
              <span>🇺🇸</span>
              <span>EN</span>
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-2 py-1 rounded-lg transition-all font-bold flex items-center gap-1 ${lang === 'es' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                }`}
            >
              <span>🇪🇸</span>
              <span>ES</span>
            </button>
          </div>

          {/* AI Assistant button */}
          <button
            onClick={onToggleAiChat}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-violet-600/15 hover:bg-violet-600/25 border border-violet-500/40 text-violet-300 text-xs font-semibold transition-all hover:scale-105 whitespace-nowrap shrink-0"
            title="Chat with Pedro's AI Twin"
          >
            <Sparkles className="w-4 h-4 text-violet-400 animate-pulse shrink-0" />
            <span>{t.nav.aiAssistant}</span>
          </button>

          {/* Contact Button */}
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>{t.nav.contact}</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Language Switcher Toggle for Mobile */}
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 text-cyan-400 border border-slate-800 text-xs font-mono font-bold flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={onToggleAiChat}
            className="p-2 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30"
          >
            <Sparkles className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/80 text-slate-200 border border-slate-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4">
          <div className="flex items-center justify-end">
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded ${lang === 'en' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-2 py-0.5 rounded ${lang === 'es' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'}`}
              >
                ES
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-cyan-400 py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm text-center"
            >
              {t.nav.contact}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
