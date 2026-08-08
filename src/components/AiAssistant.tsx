import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ChatMessage } from '../types';
import { Sparkles, X, Send, Bot, User, CheckCircle2, Terminal, Calendar } from 'lucide-react';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: (roleTitle?: string) => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose, onOpenContact }) => {
  const { lang, t } = useLanguage();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "ai",
      text: t.aiAssistant.welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      hasScheduleAction: true
    }
  ]);

  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery("");
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let replyText = "";
      let hasAction = false;
      const lower = text.toLowerCase();

      const isGreetingQuery = lower.includes("hola") || lower.includes("buenos dias") || lower.includes("buenos días") || lower.includes("buenas tardes") || lower.includes("buenas noches") || lower.includes("saludos") || lower.includes("que tal") || lower.includes("qué tal") || lower.includes("como estas") || lower.includes("cómo estás") || lower.includes("buen dia") || lower.includes("buen día") || /\b(hi|hello|hey|greetings|good morning|good afternoon|good evening|howdy|how are you)\b/i.test(lower);
      const isContactQuery = lower.includes("contact") || lower.includes("contacto") || lower.includes("email") || lower.includes("phone") || lower.includes("telefono") || lower.includes("teléfono") || lower.includes("detail") || lower.includes("datos") || lower.includes("dato") || lower.includes("reach") || lower.includes("whatsapp") || lower.includes("linkedin");
      const isScheduleQuery = lower.includes("schedule") || lower.includes("interview") || lower.includes("entrevista") || lower.includes("agendar") || lower.includes("meeting") || lower.includes("cita") || lower.includes("reunion") || lower.includes("reunión") || lower.includes("llamada");

      const isTripleCyberQuery = lower.includes("triplecyber") || lower.includes("triple cyber");
      const isSolvexQuery = lower.includes("solvex");
      const isFreelanceQuery = lower.includes("freelance") || lower.includes("consultor") || lower.includes("consultant");
      const isArManagementQuery = lower.includes("ar management") || lower.includes("hospedify") || lower.includes("hotel") || lower.includes("payroll") || lower.includes("nómina") || lower.includes("comision");
      const isVisitAppQuery = lower.includes("visit app") || lower.includes("visit") || lower.includes("visitante") || lower.includes("garita");
      const isDomainsAppQuery = lower.includes("domains app") || lower.includes("domain") || lower.includes("dominio") || lower.includes("dns");

      const isAiQuery = lower.includes("antigravity") || lower.includes("cursor") || lower.includes("copilot") || lower.includes("inteligencia") || /\bai\b/i.test(lower) || /\bia\b/i.test(lower);
      const isTopQuery = lower.includes("top") || lower.includes("best") || lower.includes("specialty") || lower.includes("destacad") || lower.includes("principales") || lower.includes("mejores") || /\bmain\b/i.test(lower) || /\bprimary\b/i.test(lower);
      const isStackQuery = lower.includes("stack") || lower.includes("technolog") || lower.includes("tecnologia") || lower.includes("tecnología") || lower.includes("habilidades") || lower.includes("lenguaje") || lower.includes("framework") || /\b(skill|skills|backend|frontend|database|language)\b/i.test(lower);
      const isExpQuery = lower.includes("experience") || lower.includes("experiencia") || lower.includes("trayectoria") || lower.includes("tiempo") || /\b(year|years|senior|level|año|años)\b/i.test(lower);
      const isImpactQuery = lower.includes("impact") || lower.includes("impacto") || lower.includes("logro") || lower.includes("resultado") || lower.includes("empleo") || lower.includes("trabajo") || lower.includes("puesto") || lower.includes("job") || lower.includes("metric");
      const isProjectQuery = lower.includes("project") || lower.includes("achievement") || lower.includes("proyecto") || lower.includes("caso");
      const isEduQuery = lower.includes("education") || lower.includes("university") || lower.includes("school") || lower.includes("estudio") || lower.includes("universidad") || lower.includes("carrera") || lower.includes("titulo") || lower.includes("título") || lower.includes("degree") || lower.includes("o&m");
      const isLangQuery = lower.includes("english") || lower.includes("spanish") || lower.includes("idioma") || lower.includes("ingles") || lower.includes("inglés") || lower.includes("español") || lower.includes("habla") || lower.includes("speak") || lower.includes("bilingual") || lower.includes("bilingue") || lower.includes("bilingüe");
      const isLocationQuery = lower.includes("location") || lower.includes("available") || lower.includes("country") || lower.includes("dominican") || lower.includes("remoto") || lower.includes("ubicacion") || lower.includes("ubicación") || lower.includes("disponibil") || /\b(remote|hire|donde|dónde|pais|país)\b/i.test(lower);
      const isWhyQuery = lower.includes("why") || lower.includes("por que") || lower.includes("por qué") || lower.includes("contratar") || lower.includes("fit") || lower.includes("reason") || lower.includes("valor") || lower.includes("razon") || lower.includes("razón") || /\b(hire|value)\b/i.test(lower);

      if (isGreetingQuery && !isContactQuery && !isScheduleQuery && !isStackQuery && !isProjectQuery && !isImpactQuery && !isTripleCyberQuery && !isSolvexQuery) {
        replyText = lang === 'en'
          ? `Hello! 👋 I'm Pedro Rodriguez's AI Twin. How can I help you today?\n\nYou can ask me about:\n• 💼 Impact in his jobs (TripleCyber, Solvex, Freelance)\n• 🚀 Key projects (AR Management, Visit App, Domains App)\n• ⚡ Tech stack (.NET, Angular, React, SQL Server)\n• 📅 Scheduling an interview`
          : `¡Hola! 👋 Soy el asistente IA de Pedro Rodriguez. ¿En qué te puedo ayudar hoy?\n\nPuedes preguntarme sobre:\n• 💼 Impacto en sus empleos (TripleCyber, Solvex, Freelance)\n• 🚀 Proyectos principales (AR Management, Visit App, Domains App)\n• ⚡ Stack técnico (.NET, Angular, React, SQL Server)\n• 📅 Agendar una entrevista`;
      } else if (isContactQuery) {
        hasAction = true;
        replyText = lang === 'en'
          ? `You can reach Pedro directly via:\n• 📧 Email: pe.rod.001@gmail.com\n• 📱 Phone/WhatsApp: +1 (829) 804-9502\n• 💼 LinkedIn: linkedin.com/in/pedro-rodriguez-1b557b1b9\n\nClick below to schedule an interview or send a direct message:`
          : `Puedes contactar a Pedro directamente vía:\n• 📧 Email: pe.rod.001@gmail.com\n• 📱 Teléfono/WhatsApp: +1 (829) 804-9502\n• 💼 LinkedIn: linkedin.com/in/pedro-rodriguez-1b557b1b9\n\nHaz clic abajo para agendar una entrevista o enviar un mensaje directo:`;
      } else if (isScheduleQuery) {
        hasAction = true;
        replyText = lang === 'en'
          ? `I would be delighted to help you schedule an interview with Pedro! Pedro has immediate availability for Senior / Tech Lead Full-Stack Engineer roles (Remote or Hybrid). Click below to launch the interview scheduler:`
          : `¡Con gusto te ayudo a agendar una entrevista con Pedro! Pedro cuenta con disponibilidad inmediata para roles Senior / Tech Lead Full-Stack (Remoto o Híbrido). Haz clic abajo para abrir el formulario directo de agendamiento:`;
      } else if (isTripleCyberQuery) {
        replyText = lang === 'en'
          ? `🏢 **Impact at TripleCyber Corporation (2022–Present):**\n• Developed & deployed **12+ business-critical web modules** using Angular, React, C# ASP.NET Core & SQL.\n• Boosted application performance by **25–35%** across core workflows.\n• Mentored 2–3 junior developers, reducing PR review code bugs by **30%**.\n• Supported **20+ production releases** & 100+ Agile tasks.`
          : `🏢 **Impacto en TripleCyber Corporation (2022–Presente):**\n• Desarrolló y desplegó **12+ módulos web críticos** usando Angular, React, C# ASP.NET Core y SQL.\n• Mejoró el rendimiento general de las aplicaciones entre un **25% y 35%**.\n• Mentoró a 2–3 desarrolladores junior, reduciendo errores en revisión de código en un **30%**.\n• Apoyó **20+ lanzamientos a producción** y completó 100+ tareas Agile.`;
      } else if (isSolvexQuery) {
        replyText = lang === 'en'
          ? `🏢 **Impact at Solvex Dominicana (2021–2022):**\n• Optimized SQL queries & data access patterns, boosting data retrieval speed by **30–40%**.\n• Delivered **8+ production features** for enterprise web applications.\n• Migrated **4+ legacy modules** to modern React/Angular architecture.\n• Integrated **Microsoft Dynamics CRM** with web apps across 5+ core business workflows.`
          : `🏢 **Impacto en Solvex Dominicana (2021–2022):**\n• Optimizó consultas SQL y patrones de acceso a datos, mejorando la velocidad de respuesta entre **30% y 40%**.\n• Entregó **8+ funcionalidades en producción** para sistemas empresariales.\n• Migró **4+ módulos legados** a arquitectura moderna en React/Angular.\n• Integró **Microsoft Dynamics CRM** con aplicaciones web en 5+ procesos clave.`;
      } else if (isFreelanceQuery) {
        replyText = lang === 'en'
          ? `💼 **Impact in Freelance / Software Consulting (2019–2021):**\n• Shipped **10+ custom web applications** for clients with a **>90% on-time delivery rate**.\n• Developed custom WordPress plugins & themes, boosting page speeds by **20–30%**.\n• Managed end-to-end delivery from requirements gathering to production cloud deployment.`
          : `💼 **Impacto como Consultor Freelance (2019–2021):**\n• Entregó **10+ aplicaciones web personalizadas** manteniendo más del **90% de puntualidad** en plazos.\n• Desarrolló temas y plugins WordPress a medida, incrementando el rendimiento web en **20–30%**.\n• Lideró proyectos desde el diseño inicial hasta el despliegue final en producción.`;
      } else if (isArManagementQuery) {
        replyText = lang === 'en'
          ? `🚀 **Impact on AR Management System (Hospedify):**\n• Enterprise hotel operations, reservations & payroll platform.\n• Automated 6+ core operational hotel workflows.\n• **Cut manual commission & payroll calculation workload by ~60%**.`
          : `🚀 **Impacto en AR Management System (Hospedify):**\n• Plataforma web de operaciones hoteleras, reservas y nóminas.\n• Automatizó 6+ flujos operativos de negocio.\n• **Redujo el trabajo manual de comisiones y nómina en un ~60%**.`;
      } else if (isVisitAppQuery) {
        replyText = lang === 'en'
          ? `🛡️ **Impact on Visit App:**\n• Multi-residential visitor access control platform.\n• Centralized **1,000+ visitor records** with structured data schemas.\n• Accelerated security check-in approvals with multi-tenant architecture.`
          : `🛡️ **Impacto en Visit App:**\n• Plataforma de control de accesos para complejos residenciales.\n• Centralizó **1,000+ registros de visitantes** con esquemas de datos estructurados.\n• Aceleró la aprobación de accesos en garita con arquitectura multi-tenant.`;
      } else if (isDomainsAppQuery) {
        replyText = lang === 'en'
          ? `🌐 **Impact on Domains App:**\n• Cloud domain registration & DNS management platform.\n• Supported **100+ active domains** with instant DNS record propagation.\n• Built zero-lag DNS inspector interface & domain marketplace feature.`
          : `🌐 **Impacto en Domains App:**\n• Plataforma de registro de dominios e inspección DNS en la nube.\n• Soportó **100+ dominios activos** con propagación instantánea.\n• Desarrolló interfaz sin latencia en consultas DNS y mercado de dominios.`;
      } else if (isImpactQuery) {
        replyText = lang === 'en'
          ? `📊 **Pedro's Quantified Impact Across Jobs & Projects:**\n\n💼 **Workplace Impact:**\n• **TripleCyber Corp:** Built 12+ enterprise modules & boosted app speed by 25-35%.\n• **Solvex Dominicana:** Accelerated SQL data retrieval by +30-40% & integrated MS Dynamics CRM.\n• **Freelance:** Delivered 10+ custom web apps with >90% on-time accuracy.\n\n🚀 **Project Impact:**\n• **AR Management System:** Reduced manual payroll/commission work by 60%.\n• **Visit App:** Centralized 1,000+ visitor security records.\n• **Domains App:** Managed 100+ active domains with zero DNS lookup lag.`
          : `📊 **Impacto Cuantificado de Pedro en Empleos y Proyectos:**\n\n💼 **Impacto en Empleos:**\n• **TripleCyber Corp:** Desarrolló 12+ módulos web y mejoró el rendimiento en 25-35%.\n• **Solvex Dominicana:** Aceleró la recuperación de datos SQL en +30-40% e integró MS Dynamics CRM.\n• **Freelance:** Entregó 10+ proyectos con >90% de cumplimiento en fechas.\n\n🚀 **Impacto en Proyectos:**\n• **AR Management System:** Redujo el trabajo manual de comisiones y nómina en un 60%.\n• **Visit App:** Centralizó 1,000+ registros de accesos residenciales.\n• **Domains App:** Administró 100+ dominios activos sin latencia DNS.`;
      } else if (isAiQuery) {
        replyText = lang === 'en'
          ? `Pedro uses Google Antigravity & Cursor IDE daily as AI force-multipliers to refactor legacy code, write automated unit tests, and resolve complex backend bugs 2-3x faster while adhering to clean architecture standards.`
          : `Pedro utiliza Google Antigravity y Cursor IDE a diario como multiplicadores de fuerza con IA para refactorizar código, escribir pruebas unitarias y resolver fallos de backend de 2 a 3 veces más rápido manteniendo arquitectura limpia.`;
      } else if (isTopQuery) {
        replyText = lang === 'en'
          ? `Pedro's top 3 core technologies are:\n1. ⚡ C# / .NET Core (Enterprise Backend & REST APIs)\n2. 🎨 Angular & React with TypeScript (High-Performance Modern UIs)\n3. 🗄️ SQL Server (Database Design, Query Tuning & Performance)\n\nHe also integrates AI engineering tools (Cursor & Google Antigravity) to deliver features 2-3x faster.`
          : `Las 3 tecnologías principales de Pedro son:\n1. ⚡ C# / .NET Core (Backend Empresarial y REST APIs)\n2. 🎨 Angular y React con TypeScript (Interfaces Modernas de Alto Rendimiento)\n3. 🗄️ SQL Server (Diseño de Bases de Datos y Optimización de Consultas)\n\nAdemás, integra herramientas de IA (Cursor y Google Antigravity) para acelerar entregables de 2 a 3 veces.`;
      } else if (isStackQuery) {
        replyText = lang === 'en'
          ? `Pedro's complete tech stack includes Angular (10-17+), React 18, TypeScript, C# ASP.NET Core, .NET Core 3+, SQL Server, Node.js, RESTful APIs, Git, and Docker. He also integrates AI workflows with Google Antigravity & Cursor to accelerate code delivery.`
          : `El stack completo de Pedro incluye Angular (10-17+), React 18, TypeScript, C# ASP.NET Core, .NET Core 3+, SQL Server, Node.js, REST APIs, Git y Docker. También integra flujos IA con Google Antigravity y Cursor para acelerar entregables.`;
      } else if (isExpQuery) {
        replyText = lang === 'en'
          ? `Pedro has 5+ years of professional software engineering experience leading enterprise web applications, scaling databases, and automating business workflows across hospitality, security IoT, and domain infrastructure sectors.`
          : `Pedro cuenta con 5+ años de experiencia profesional en ingeniería de software, liderando desarrollo de aplicaciones web empresariales, escalando bases de datos y automatizando procesos en hospitalidad, seguridad IoT e infraestructura de dominios.`;
      } else if (isProjectQuery) {
        replyText = lang === 'en'
          ? `Pedro's flagship achievements include:\n1. 🚀 TripleCyber Corporation: Developed 12+ enterprise web modules & boosted app speed by 25-35%.\n2. 🏨 Hospedify: Automated ~60% of manual hospitality operations.\n3. 🛡️ Visit App: Centralized multi-residential visitor access management with 1,000+ records.`
          : `Principales logros de Pedro:\n1. 🚀 TripleCyber Corporation: Desarrolló 12+ módulos web empresariales y mejoró la velocidad de app en 25-35%.\n2. 🏨 Hospedify: Automatizó el ~60% de cargas operativas de hotelería.\n3. 🛡️ Visit App: Centralizó el control de accesos residenciales con 1,000+ registros de seguridad.`;
      } else if (isEduQuery) {
        replyText = lang === 'en'
          ? `Pedro holds a Bachelor's Degree in Systems and Computing Engineering from Universidad O&M in the Dominican Republic. He also actively serves as a Technical Community Admin at KKCoding Discord.`
          : `Pedro es Ingeniero de Sistemas y Cómputos egresado de la Universidad O&M en República Dominicana. Además, lidera activamente la comunidad técnica como Administrador en KKCoding Discord.`;
      } else if (isLangQuery) {
        replyText = lang === 'en'
          ? `Pedro is fully bilingual: Native Spanish speaker and Professional Working Proficiency in English, enabling seamless communication in global, remote agile teams.`
          : `Pedro es 100% bilingüe: Español Nativo e Inglés Profesional Avanzado, capacitado para colaborar en equipos ágiles globales y remotos.`;
      } else if (isLocationQuery) {
        hasAction = true;
        replyText = lang === 'en'
          ? `Pedro is based in Santo Domingo, Dominican Republic (GMT-4 / EST equivalent). He has immediate availability for Remote or Hybrid Senior Full-Stack Engineer / Tech Lead roles. Click below to schedule a meeting directly:`
          : `Pedro reside en Santo Domingo, República Dominicana (zona horaria GMT-4 / equivalente a EST). Tiene disponibilidad inmediata para posiciones Remotas o Híbridas como Senior Full-Stack Engineer o Tech Lead. Haz clic abajo para agendar una entrevista:`;
      } else if (isWhyQuery) {
        replyText = lang === 'en'
          ? `Why hire Pedro?\n1. 5+ years of enterprise production experience in .NET & React/Angular\n2. 2-3x faster feature delivery using AI engineering tools\n3. Mentorship & code quality (reduced PR code review bugs by 30%)\n4. Immediate remote availability.`
          : `¿Por qué contratar a Pedro?\n1. 5+ años de experiencia en producción (.NET y React/Angular)\n2. Entrega 2-3x más rápida usando herramientas de ingeniería IA\n3. Liderazgo de equipo y mentoría (redujo errores en revisiones un 30%)\n4. Disponibilidad remota inmediata.`;
      } else {
        replyText = lang === 'en'
          ? `Pedro Rodriguez is a Senior Full-Stack Engineer with 5+ years of experience (.NET, Angular, React, SQL Server). He has automated 60% of operational workloads and delivered 30+ production modules. Would you like to schedule an interview or ask about a specific project?`
          : `Pedro Rodriguez es un Senior Full-Stack Engineer con 5+ años de experiencia (.NET, Angular, React, SQL Server). Ha automatizado el 60% de cargas operativas y entregado 30+ módulos en producción. ¿Te gustaría agendar una entrevista o preguntar sobre un proyecto específico?`;
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        hasScheduleAction: hasAction
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-md bg-slate-900 rounded-2xl border border-violet-500/40 shadow-2xl overflow-hidden flex flex-col h-[520px]">
      
      {/* Top Header */}
      <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-violet-600/30 text-violet-300 border border-violet-500/40 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-violet-400" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
              {t.aiAssistant.title}
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </h3>
            <span className="text-[11px] text-slate-400 font-mono">{t.aiAssistant.subtitle}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-slate-950/70">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
              m.sender === 'user' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-violet-600/30 text-violet-300 border border-violet-500/40'
            }`}>
              {m.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div className={`max-w-[80%] p-3 rounded-xl text-xs leading-relaxed ${
              m.sender === 'user'
                ? 'bg-cyan-500/20 text-cyan-100 border border-cyan-500/30 rounded-tr-none'
                : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-tl-none'
            }`}>
              <div className="whitespace-pre-line">{m.text}</div>
              
              {m.hasScheduleAction && (
                <div className="mt-2.5 pt-2.5 border-t border-slate-800">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact?.("Senior Full-Stack Engineer Candidate");
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-500/20"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>{lang === 'en' ? '📅 Schedule Interview with Pedro' : '📅 Agendar Entrevista con Pedro'}</span>
                  </button>
                </div>
              )}

              <div className="text-[9px] text-slate-500 mt-1 text-right font-mono">{m.timestamp}</div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-violet-400 font-mono">
            <Bot className="w-4 h-4 animate-bounce" />
            <span>{t.aiAssistant.generating}</span>
          </div>
        )}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="px-3 py-2 bg-slate-950/90 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto">
        {t.aiAssistant.prompts.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(prompt)}
            className="px-2.5 py-1 rounded-full bg-slate-900 hover:bg-slate-800 text-[11px] text-slate-300 border border-slate-800 whitespace-nowrap shrink-0 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-slate-950 border-t border-slate-800">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={t.aiAssistant.placeholder}
            className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-violet-500 focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
