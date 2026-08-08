import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, ArrowRight, Download, CheckCircle, CheckCircle2, Zap, Code2, Bot, Database, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenContact: () => void;
  onToggleAiChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onToggleAiChat }) => {
  const { t } = useLanguage();

  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
      {/* Dynamic background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/20 to-violet-600/20 blur-[120px] rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Status & Specialization Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span>{t.nav.statusBadge}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider shadow-lg shadow-cyan-500/10">
                <Zap className="w-4 h-4 text-cyan-400 animate-bounce" />
                <span>{t.hero.pill}</span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t.hero.titleStart} <br />
              <span className="text-gradient">{t.hero.titleGradient}</span>
            </h1>

            {/* Paragraph Bio */}
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.bioIntro} <strong className="text-white font-semibold">{t.hero.bioName}</strong>{t.hero.bioText} <strong className="text-cyan-400">{t.hero.bioYoe}</strong> {t.hero.bioText2} <strong className="text-slate-100">{t.hero.bioStack}</strong>{t.hero.bioText3} <span className="text-emerald-400 font-semibold">{t.hero.bioPerf}</span>{t.hero.bioText4}<strong className="text-violet-400">{t.hero.bioAiTools}</strong>{t.hero.bioText5}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Angular 17+", "React 18", "TypeScript", "C# .NET Core", "SQL Server", "Google Antigravity", "Cursor AI", "MS Dynamics CRM"].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#role-matcher"
                onClick={triggerConfetti}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center gap-2 group"
              >
                <span>{t.hero.btnRoleMatcher}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onToggleAiChat}
                className="px-6 py-3.5 rounded-xl bg-violet-950/60 hover:bg-violet-900/60 border border-violet-500/40 text-violet-200 font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-violet-900/20"
              >
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>{t.hero.btnAiChat}</span>
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.btnContact}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Key Stats Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden border border-slate-800 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">{t.hero.statsHeader}</span>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/50">
                  {t.hero.statsVerified}
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                  <div className="text-3xl font-extrabold text-cyan-400 font-heading">{t.hero.statYoe}</div>
                  <div className="text-xs text-slate-400">{t.hero.statYoeDesc}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                  <div className="text-3xl font-extrabold text-violet-400 font-heading">{t.hero.statModules}</div>
                  <div className="text-xs text-slate-400">{t.hero.statModulesDesc}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                  <div className="text-3xl font-extrabold text-emerald-400 font-heading">{t.hero.statSql}</div>
                  <div className="text-xs text-slate-400">{t.hero.statSqlDesc}</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
                  <div className="text-3xl font-extrabold text-amber-400 font-heading">{t.hero.statAutomation}</div>
                  <div className="text-xs text-slate-400">{t.hero.statAutomationDesc}</div>
                </div>
              </div>

              {/* Highlight Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-cyan-500/20 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="text-xs font-bold text-slate-200">{t.hero.guaranteeTitle}</div>
                  <div className="text-xs text-slate-400 leading-normal">
                    {t.hero.guaranteeDesc}
                  </div>
                </div>
              </div>

              {/* Direct Quick Info */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>{t.hero.location}</span>
                <span className="text-cyan-400 font-semibold">{t.hero.languages}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
