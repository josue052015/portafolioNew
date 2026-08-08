import React from 'react';
import { experienceData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Briefcase, Calendar, MapPin, TrendingUp, CheckCircle, Code } from 'lucide-react';

export const Experience: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>{t.experience.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.experience.title}<span className="text-gradient-cyan">{t.experience.titleGradient}</span>
          </h2>
          <p className="text-slate-300 text-base">
            {t.experience.description}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-8 h-8 rounded-full bg-slate-950 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Card Content */}
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
                
                {/* Header Details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">
                      {lang === 'en' ? exp.roleEn : exp.role}
                    </h3>
                    <div className="text-lg font-semibold text-cyan-400 flex items-center gap-2">
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Metrics Banner */}
                <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-cyan-400 shrink-0" />
                  <div className="text-xs font-mono text-cyan-200 font-semibold">
                    <span className="text-cyan-400 uppercase font-bold mr-2">{t.experience.quantifiedImpact}</span>
                    {lang === 'en' ? exp.metricsEn : exp.metrics}
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {(lang === 'en' ? exp.bulletsEn : exp.bullets).map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-200 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
