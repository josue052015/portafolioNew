import React from 'react';
import { educationData, communityData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Users, Award, CheckCircle2, MessageSquareCode } from 'lucide-react';

export const EducationCommunity: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-slate-950/90 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Education & Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>{t.education.eduPill}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">{t.education.eduTitle}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="glass-panel rounded-xl p-5 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                      {lang === 'en' ? edu.badgeEn : edu.badge}
                    </span>
                    <GraduationCap className="w-4 h-4 text-slate-500" />
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    {lang === 'en' ? edu.degreeEn : edu.degree}
                  </h3>
                  <div className="text-xs text-slate-400">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Community Leadership */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>{t.education.commPill}</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">{t.education.commTitle}</h2>
            </div>

            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-violet-500/40 space-y-6 bg-gradient-to-br from-slate-950 to-violet-950/30">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-500/40">
                  <MessageSquareCode className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-heading">{t.education.commRole}</h3>
                  <p className="text-xs text-violet-300 font-mono">KKCoding Discord Community</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'en'
                  ? "Facilitate software engineering discussions, clean code architectural reviews, project idea exchanges, and career mentorship for developers aiming to elevate their technical careers."
                  : communityData.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-slate-200">{t.education.commImpactTitle}</div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{lang === 'en' ? "Facilitator for software architecture and clean coding workshops" : "Facilitador de sesiones de arquitectura de software y código limpio"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{lang === 'en' ? "Mentor for developers transitioning into Senior Software Engineer roles" : "Mentor de desarrolladores en transición a roles Senior"}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
