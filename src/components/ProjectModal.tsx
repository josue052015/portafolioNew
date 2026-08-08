import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectExt } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { X, Calculator, ShieldCheck, Globe, CheckCircle2, Play, RefreshCw, Server, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { lang } = useLanguage();

  if (!project) return null;

  const projectExt = project as ProjectExt;
  const projectSummary = lang === 'en' ? (projectExt.summaryEn || project.summary) : project.summary;
  const projectRole = lang === 'en' ? (projectExt.roleEn || project.role) : project.role;
  const projectMetrics = lang === 'en' ? (projectExt.impactMetricsEn || project.impactMetrics) : project.impactMetrics;

  // State for AR Calculator Demo
  const [resAmount, setResAmount] = useState<number>(4500);
  const [commRate, setCommRate] = useState<number>(12);
  const [discRate, setDiscRate] = useState<number>(5);

  // State for Visit App Security Gate Demo
  const [visitorName, setVisitorName] = useState<string>(lang === 'en' ? "Sarah Jenkins" : "Carlos Mendoza");
  const [residentUnit, setResidentUnit] = useState<string>(lang === 'en' ? "Apt 4B - Bella Tower" : "Apt 4B - Torre Bella");
  const [accessLogs, setAccessLogs] = useState<Array<{ id: number; visitor: string; unit: string; time: string; status: string }>>([
    { id: 1, visitor: lang === 'en' ? "Maria Contreras" : "María Contreras", unit: "Apt 2A", time: "10:14 AM", status: lang === 'en' ? "APPROVED" : "APROBADO" },
    { id: 2, visitor: lang === 'en' ? "John Perez" : "Juan Pérez", unit: "Apt 5C", time: "10:45 AM", status: lang === 'en' ? "APPROVED" : "APROBADO" }
  ]);

  // State for Domains App DNS Lookup Demo
  const [searchDomain, setSearchDomain] = useState<string>("triplecyber.com");
  const [isSearchingDNS, setIsSearchingDNS] = useState<boolean>(false);
  const [dnsResults, setDnsResults] = useState<{ domain: string; status: string; records: Array<{ type: string; host: string; value: string; ttl: string }> }>({
    domain: "triplecyber.com",
    status: lang === 'en' ? "ACTIVE & PROPAGATED" : "ACTIVO & PROPAGADO",
    records: [
      { type: "A", host: "@", value: "192.241.180.95", ttl: "3600" },
      { type: "CNAME", host: "www", value: "triplecyber.com", ttl: "3600" },
      { type: "MX", host: "@", value: "mail.triplecyber.com", ttl: "14400" },
      { type: "TXT", host: "@", value: "v=spf1 include:_spf.google.com ~all", ttl: "3600" }
    ]
  });

  const handleApproveVisit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim()) return;
    const newLog = {
      id: Date.now(),
      visitor: visitorName,
      unit: residentUnit,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: lang === 'en' ? "APPROVED" : "APROBADO"
    };
    setAccessLogs([newLog, ...accessLogs]);
    setVisitorName("");
  };

  const handleLookupDNS = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchingDNS(true);
    setTimeout(() => {
      setDnsResults({
        domain: searchDomain.toLowerCase().trim() || "pedrorodriguez.dev",
        status: lang === 'en' ? "REGISTERED & PROPAGATED" : "REGISTRADO & PROPAGADO",
        records: [
          { type: "A", host: "@", value: "76.76.21.21", ttl: "300" },
          { type: "CNAME", host: "api", value: "backend.pedrorodriguez.dev", ttl: "300" },
          { type: "MX", host: "@", value: "aspmx.l.google.com", ttl: "3600" },
          { type: "TXT", host: "@", value: "google-site-verification=abc123xyz", ttl: "3600" }
        ]
      });
      setIsSearchingDNS(false);
    }, 600);
  };

  // Calculations for AR Calculator
  const discountVal = (resAmount * discRate) / 100;
  const netAmount = resAmount - discountVal;
  const commissionVal = (netAmount * commRate) / 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-4xl rounded-2xl border border-cyan-500/40 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col bg-slate-900">
        
        {/* Modal Top Bar */}
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold">
              {project.interactiveDemoType === 'AR_CALCULATOR' && <Calculator className="w-5 h-5" />}
              {project.interactiveDemoType === 'VISIT_APP' && <ShieldCheck className="w-5 h-5" />}
              {project.interactiveDemoType === 'DOMAINS_APP' && <Globe className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">{project.title}</h3>
              <p className="text-xs text-slate-400 font-mono">{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Executive Overview & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2">
              <h4 className="text-xs font-bold uppercase text-cyan-400 tracking-wider">
                {lang === 'en' ? "Executive Summary:" : "Descripción Breve:"}
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">{projectSummary}</p>
            </div>
            <div className="space-y-2 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                {lang === 'en' ? "Tech Stack Utilized:" : "Stack Utilizado:"}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Simulation Area */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  {lang === 'en' ? "LIVE INTERACTIVE DEMO SIMULATOR" : "DEMOSTRADOR EN VIVO (MOCK INTERACTIVO)"}
                </span>
              </div>
              <span className="text-xs text-cyan-400 font-mono">
                {lang === 'en' ? "Role:" : "Rol:"} {projectRole}
              </span>
            </div>

            {/* DEMO TYPE 1: AR CALCULATOR */}
            {project.interactiveDemoType === 'AR_CALCULATOR' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  {lang === 'en'
                    ? "Test the automated hotel commission calculation engine developed to eliminate 60% of manual operational effort:"
                    : "Prueba la simulación del módulo de cálculo automatizado de comisiones hoteleras desarrollado para optimizar en un 60% la carga manual:"}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium">
                      {lang === 'en' ? "Reservation Amount ($USD)" : "Monto Reserva ($USD)"}
                    </label>
                    <input
                      type="number"
                      value={resAmount}
                      onChange={(e) => setResAmount(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium">
                      {lang === 'en' ? "Discount Rate (%)" : "Tasa de Descuento (%)"}
                    </label>
                    <input
                      type="number"
                      value={discRate}
                      onChange={(e) => setDiscRate(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-slate-300 font-medium">
                      {lang === 'en' ? "Commission Rate (%)" : "Comisión Operativa (%)"}
                    </label>
                    <input
                      type="number"
                      value={commRate}
                      onChange={(e) => setCommRate(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">
                      {lang === 'en' ? "Calculated Net Amount" : "Monto Neto Calculado"}
                    </div>
                    <div className="text-xl font-bold text-white font-mono">${netAmount.toLocaleString()} USD</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <div className="text-xs text-slate-400">
                      {lang === 'en' ? "Commission to Pay" : "Comisión a Pagar"}
                    </div>
                    <div className="text-xl font-bold text-emerald-400 font-mono">${commissionVal.toLocaleString()} USD</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-cyan-500/30">
                    <div className="text-xs text-cyan-400 font-semibold">
                      {lang === 'en' ? "Estimated Time Saved" : "Ahorro Estimado de Trabajo"}
                    </div>
                    <div className="text-xl font-bold text-cyan-300 font-mono">~60% (~45h/mo)</div>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO TYPE 2: VISIT APP */}
            {project.interactiveDemoType === 'VISIT_APP' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  {lang === 'en'
                    ? "Simulate the instant creation and approval of residential security gate visitor passes:"
                    : "Simula la creación y aprobación instantánea de un pase de entrada para visitas en proyectos residenciales:"}
                </p>

                <form onSubmit={handleApproveVisit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder={lang === 'en' ? "Visitor name..." : "Nombre del visitante..."}
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder={lang === 'en' ? "Apartment / Unit..." : "Apartamento / Torre..."}
                    value={residentUnit}
                    onChange={(e) => setResidentUnit(e.target.value)}
                    className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-sm focus:border-cyan-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{lang === 'en' ? "Approve Access" : "Aprobar Acceso"}</span>
                  </button>
                </form>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-400 flex items-center justify-between">
                    <span>{lang === 'en' ? "REAL-TIME LOGS (1,000+ CENTRALIZED RECORDS)" : "REGISTROS EN TIEMPO REAL (1,000+ REGISTROS CENTRALIZADOS)"}</span>
                    <span className="text-emerald-400 font-mono">{lang === 'en' ? "SYSTEM ONLINE" : "SISTEMA ACTIVO"}</span>
                  </div>
                  <div className="space-y-1.5 max-h-36 overflow-y-auto">
                    {accessLogs.map((log) => (
                      <div key={log.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 text-xs border border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold">
                            {log.status}
                          </span>
                          <span className="text-white font-medium">{log.visitor}</span>
                          <span className="text-slate-400 font-mono">({log.unit})</span>
                        </div>
                        <span className="text-slate-500 font-mono">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* DEMO TYPE 3: DOMAINS APP */}
            {project.interactiveDemoType === 'DOMAINS_APP' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400">
                  {lang === 'en'
                    ? "Inspect DNS record management on the platform built to manage 100+ enterprise domains:"
                    : "Inspecciona la gestión de registros DNS en la plataforma construida para administrar más de 100 dominios:"}
                </p>

                <form onSubmit={handleLookupDNS} className="flex gap-2">
                  <input
                    type="text"
                    value={searchDomain}
                    onChange={(e) => setSearchDomain(e.target.value)}
                    placeholder={lang === 'en' ? "Search domain..." : "Consultar dominio..."}
                    className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={isSearchingDNS}
                    className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-sm flex items-center gap-2"
                  >
                    {isSearchingDNS ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Server className="w-4 h-4" />}
                    <span>{lang === 'en' ? "Lookup DNS" : "Consultar DNS"}</span>
                  </button>
                </form>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-300 border-b border-slate-800 pb-2">
                    <span>{lang === 'en' ? "Domain:" : "Dominio:"} <strong className="text-cyan-300">{dnsResults.domain}</strong></span>
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">{dnsResults.status}</span>
                  </div>

                  <div className="space-y-1">
                    {dnsResults.records.map((r, i) => (
                      <div key={i} className="grid grid-cols-12 gap-2 p-1.5 rounded bg-slate-950 text-slate-300">
                        <span className="col-span-2 text-violet-400 font-bold">{r.type}</span>
                        <span className="col-span-3 text-cyan-300">{r.host}</span>
                        <span className="col-span-5 text-slate-200 truncate">{r.value}</span>
                        <span className="col-span-2 text-slate-500 text-right">TTL {r.ttl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Impact Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
              {lang === 'en' ? "Project Accomplishments & Verified Metrics:" : "Resultados & Métricas del Proyecto:"}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {projectMetrics.map((metric, index) => (
                <div key={index} className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200 leading-snug">{metric}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
          >
            {lang === 'en' ? "Close Simulation" : "Cerrar Simulación"}
          </button>
        </div>

      </div>
    </div>
  );
};
