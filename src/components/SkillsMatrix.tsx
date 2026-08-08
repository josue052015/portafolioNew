import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, Bot, Code2, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>{t.skills.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.skills.title}<span className="text-gradient">{t.skills.titleGradient}</span>
          </h2>
          <p className="text-slate-300 text-base">
            {t.skills.description}
          </p>
        </div>

        {/* Special Spotlight: AI Engineering */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-violet-500/40 shadow-2xl mb-12 relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-violet-950/40">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs font-mono font-bold border border-violet-500/40">
                <Bot className="w-4 h-4 text-violet-400 animate-pulse" />
                <span>{t.skills.aiSpotlightTag}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                {t.skills.aiSpotlightTitle}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {t.skills.aiSpotlightDesc}
              </p>
            </div>
            
            <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-violet-500/40 flex items-center gap-2 text-xs font-mono text-violet-300">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span>Google Antigravity Power User</span>
              </div>
              <div className="px-4 py-2 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Cursor IDE Workflow Master</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Skills Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              
              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {lang === 'en' ? category.nameEn : category.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en' ? category.descriptionEn : category.description}
                </p>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                        {skill.highlight && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-slate-400 text-[11px]">{skill.experienceYears}</span>
                        <span className="font-mono font-bold text-cyan-400">{skill.level}%</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.highlight
                            ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500'
                            : 'bg-slate-700'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
