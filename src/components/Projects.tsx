import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { useLanguage } from '../context/LanguageContext';
import { FolderGit2, Play, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("TODOS");
  const { lang, t } = useLanguage();

  const categories = ["TODOS", "Enterprise", "Security & IoT", "Domain & Infrastructure"];

  const filteredProjects = activeCategory === "TODOS"
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-4 h-4 text-violet-400" />
            <span>{t.projects.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.projects.title}<span className="text-gradient">{t.projects.titleGradient}</span>
          </h2>
          <p className="text-slate-300 text-base">
            {t.projects.description}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {t.projects.categories[cat as keyof typeof t.projects.categories] || cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800 relative group overflow-hidden"
            >
              <div className="space-y-4">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {lang === 'en' ? project.roleEn : project.role}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-mono">{project.subtitle}</p>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                  {lang === 'en' ? project.summaryEn : project.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2">
                  {(lang === 'en' ? project.impactMetricsEn : project.impactMetrics).slice(0, 2).map((m, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Action Button - Hidden per user request */}
              {/* <div className="pt-6">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600/30 to-cyan-600/30 hover:from-violet-600/50 hover:to-cyan-600/50 border border-cyan-500/40 text-cyan-200 font-bold text-xs flex items-center justify-center gap-2 group/btn transition-all shadow-md"
                >
                  <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400 group-hover/btn:scale-110 transition-transform" />
                  <span>{t.projects.btnTryDemo}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div> */}

            </div>
          ))}
        </div>

        {/* Modal Render */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
