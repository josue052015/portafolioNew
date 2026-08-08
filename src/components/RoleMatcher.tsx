import React, { useState } from 'react';
import { recruiterRoles } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Target, CheckCircle2, Award, ArrowUpRight, Sparkles, UserCheck, Briefcase } from 'lucide-react';

interface RoleMatcherProps {
  onSelectRoleForContact: (roleTitle: string) => void;
}

export const RoleMatcher: React.FC<RoleMatcherProps> = ({ onSelectRoleForContact }) => {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("fullstack");
  const { lang, t } = useLanguage();

  const currentRole = recruiterRoles.find(r => r.id === selectedRoleId) || recruiterRoles[0];

  return (
    <section id="role-matcher" className="py-20 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Target className="w-4 h-4 text-cyan-400" />
            <span>{t.roleMatcher.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.roleMatcher.title}<span className="text-gradient-cyan">{t.roleMatcher.titleGradient}</span>{t.roleMatcher.titleEnd}
          </h2>
          <p className="text-slate-300 text-base">
            {t.roleMatcher.description}
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {recruiterRoles.map((role) => {
            const isActive = role.id === selectedRoleId;
            const title = lang === 'en' ? role.titleEn : role.title;
            return (
              <button
                key={role.id}
                onClick={() => setSelectedRoleId(role.id)}
                className={`p-4 rounded-xl text-left transition-all relative overflow-hidden border ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500 shadow-xl shadow-cyan-500/20 ring-1 ring-cyan-500/30'
                    : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 text-slate-400'
                }`}
              >
                {isActive && (
                  <div className="absolute -top-10 -right-10 w-28 h-28 bg-cyan-500/20 blur-xl rounded-full pointer-events-none"></div>
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    isActive ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {role.matchScore}% {t.roleMatcher.compLabel}
                  </span>
                  {isActive && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                </div>
                <div className={`font-heading font-bold text-sm leading-snug ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Role Deep Dive Details */}
        <div className="glass-panel rounded-2xl p-6 sm:p-10 border border-cyan-500/30 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Role Summary */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading">
                    {lang === 'en' ? currentRole.titleEn : currentRole.title}
                  </h3>
                  <div className="text-xs text-cyan-400 font-mono">
                    {t.roleMatcher.compLabel}: {currentRole.matchScore}%
                  </div>
                </div>
              </div>

              {/* Pitch */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm leading-relaxed">
                <p className="font-semibold text-cyan-300 mb-1">{t.roleMatcher.pitchTitle}</p>
                {lang === 'en' ? currentRole.pitchEn : currentRole.pitch}
              </div>

              {/* Relevant Metrics */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.roleMatcher.metricsTitle}</h4>
                <div className="space-y-2">
                  {(lang === 'en' ? currentRole.relevantMetricsEn : currentRole.relevantMetrics).map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200 bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                      <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectRoleForContact(lang === 'en' ? currentRole.titleEn : currentRole.title)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>{t.roleMatcher.btnPropose} {lang === 'en' ? currentRole.titleEn : currentRole.title}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Matched Skill Stack */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>{t.roleMatcher.matchedSkills}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentRole.highlightedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="text-xs text-slate-400 font-bold uppercase">{t.roleMatcher.caseStudies}</div>
                  <div className="flex flex-wrap gap-2">
                    {currentRole.topProjects.map((p) => (
                      <span key={p} className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-medium">
                        🚀 {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
