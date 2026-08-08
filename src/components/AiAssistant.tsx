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

      const isScheduleQuery = lower.includes("schedule") || lower.includes("interview") || lower.includes("entrevista") || lower.includes("agendar") || lower.includes("meeting") || lower.includes("cita") || lower.includes("reunion") || lower.includes("llamada");

      if (isScheduleQuery) {
        hasAction = true;
        replyText = lang === 'en'
          ? `I would be delighted to help you schedule an interview with Pedro! Pedro has immediate availability for Senior / Tech Lead Full-Stack Engineer roles (Remote or Hybrid). Click below to launch the interview scheduler:`
          : `¡Con gusto te ayudo a agendar una entrevista con Pedro! Pedro cuenta con disponibilidad inmediata para roles Senior / Tech Lead Full-Stack (Remoto o Híbrido). Haz clic abajo para abrir el formulario directo de agendamiento:`;
      } else if (lower.includes("top") || lower.includes("best") || lower.includes("primary") || lower.includes("main") || lower.includes("specialty") || lower.includes("destacad") || lower.includes("principales") || lower.includes("mejores")) {
        replyText = lang === 'en'
          ? `Pedro's top 3 core technologies are:\n1. ⚡ C# / .NET Core (Enterprise Backend & REST APIs)\n2. 🎨 Angular & React with TypeScript (High-Performance Modern UIs)\n3. 🗄️ SQL Server (Database Design, Query Tuning & Performance)\n\nHe also integrates AI engineering tools (Cursor & Google Antigravity) to deliver features 2-3x faster.`
          : `Las 3 tecnologías principales de Pedro son:\n1. ⚡ C# / .NET Core (Backend Empresarial y REST APIs)\n2. 🎨 Angular y React con TypeScript (Interfaces Modernas de Alto Rendimiento)\n3. 🗄️ SQL Server (Diseño de Bases de Datos y Optimización de Consultas)\n\nAdemás, integra herramientas de IA (Cursor y Google Antigravity) para acelerar entregables de 2 a 3 veces.`;
      } else if (lower.includes("stack") || lower.includes("technolog") || lower.includes("skill") || lower.includes("backend") || lower.includes("frontend") || lower.includes("database") || lower.includes("framework") || lower.includes("tecnologia") || lower.includes("habilidades") || lower.includes("lenguaje") || lower.includes("language")) {
        replyText = lang === 'en'
          ? `Pedro's complete tech stack includes Angular (10-17+), React 18, TypeScript, C# ASP.NET Core, .NET Core 3+, SQL Server, Node.js, RESTful APIs, Git, and Docker. He also integrates AI workflows with Google Antigravity & Cursor to accelerate code delivery.`
          : `El stack completo de Pedro incluye Angular (10-17+), React 18, TypeScript, C# ASP.NET Core, .NET Core 3+, SQL Server, Node.js, REST APIs, Git y Docker. También integra flujos IA con Google Antigravity y Cursor para acelerar entregables.`;
      } else if (lower.includes("year") || lower.includes("experience") || lower.includes("senior") || lower.includes("level") || lower.includes("año") || lower.includes("experiencia") || lower.includes("trayectoria") || lower.includes("tiempo")) {
        replyText = lang === 'en'
          ? `Pedro has 5+ years of professional software engineering experience leading enterprise web applications, scaling databases, and automating business workflows across hospitality, security IoT, and domain infrastructure sectors.`
          : `Pedro cuenta con 5+ años de experiencia profesional en ingeniería de software, liderando desarrollo de aplicaciones web empresariales, escalando bases de datos y automatizando procesos en hospitalidad, seguridad IoT e infraestructura de dominios.`;
      } else if (lower.includes("project") || lower.includes("achievement") || lower.includes("impact") || lower.includes("triplecyber") || lower.includes("hospedify") || lower.includes("visit") || lower.includes("case study") || lower.includes("proyecto") || lower.includes("logro") || lower.includes("impacto") || lower.includes("caso")) {
        replyText = lang === 'en'
          ? `Pedro's flagship achievements include:\n1. 🚀 TripleCyber Corporation: Developed 12+ enterprise web modules & boosted app speed by 25-35%.\n2. 🏨 Hospedify: Automated ~60% of manual hospitality operations.\n3. 🛡️ Visit App: Centralized multi-residential visitor access management with 1,000+ records.`
          : `Principales logros de Pedro:\n1. 🚀 TripleCyber Corporation: Desarrolló 12+ módulos web empresariales y mejoró la velocidad de app en 25-35%.\n2. 🏨 Hospedify: Automatizó el ~60% de cargas operativas de hotelería.\n3. 🛡️ Visit App: Centralizó el control de accesos residenciales con 1,000+ registros de seguridad.`;
      } else if (lower.includes("education") || lower.includes("degree") || lower.includes("university") || lower.includes("school") || lower.includes("o&m") || lower.includes("estudio") || lower.includes("universidad") || lower.includes("carrera") || lower.includes("titulo")) {
        replyText = lang === 'en'
          ? `Pedro holds a Bachelor's Degree in Systems and Computing Engineering from Universidad O&M in the Dominican Republic. He also actively serves as a Technical Community Admin at KKCoding Discord.`
          : `Pedro es Ingeniero de Sistemas y Cómputos egresado de la Universidad O&M en República Dominicana. Además, lidera activamente la comunidad técnica como Administrador en KKCoding Discord.`;
      } else if (lower.includes("english") || lower.includes("spanish") || lower.includes("idioma") || lower.includes("ingles") || lower.includes("español") || lower.includes("habla") || lower.includes("speak") || lower.includes("bilingual") || lower.includes("bilingue")) {
        replyText = lang === 'en'
          ? `Pedro is fully bilingual: Native Spanish speaker and Professional Working Proficiency in English, enabling seamless communication in global, remote agile teams.`
          : `Pedro es 100% bilingüe: Español Nativo e Inglés Profesional Avanzado, capacitado para colaborar en equipos ágiles globales y remotos.`;
      } else if (lower.includes("location") || lower.includes("remote") || lower.includes("available") || lower.includes("country") || lower.includes("dr") || lower.includes("dominican") || lower.includes("hire") || lower.includes("remoto") || lower.includes("ubicacion") || lower.includes("donde") || lower.includes("pais") || lower.includes("disponibil")) {
        hasAction = true;
        replyText = lang === 'en'
          ? `Pedro is based in Santo Domingo, Dominican Republic (GMT-4 / EST equivalent). He has immediate availability for Remote or Hybrid Senior Full-Stack Engineer / Tech Lead roles. Click below to schedule a meeting directly:`
          : `Pedro reside en Santo Domingo, República Dominicana (zona horaria GMT-4 / equivalente a EST). Tiene disponibilidad inmediata para posiciones Remotas o Híbridas como Senior Full-Stack Engineer o Tech Lead. Haz clic abajo para agendar una entrevista:`;
      } else if (lower.includes("ai") || lower.includes("antigravity") || lower.includes("cursor") || lower.includes("copilot") || lower.includes("ia") || lower.includes("inteligencia")) {
        replyText = lang === 'en'
          ? `Pedro uses Google Antigravity & Cursor IDE daily as AI force-multipliers to refactor legacy code, write automated unit tests, and resolve complex backend bugs 2-3x faster while adhering to clean architecture standards.`
          : `Pedro utiliza Google Antigravity y Cursor IDE a diario como multiplicadores de fuerza con IA para refactorizar código, escribir pruebas unitarias y resolver fallos de backend de 2 a 3 veces más rápido manteniendo arquitectura limpia.`;
      } else if (lower.includes("why") || lower.includes("hire") || lower.includes("value") || lower.includes("fit") || lower.includes("reason") || lower.includes("por que") || lower.includes("contratar") || lower.includes("valor") || lower.includes("razon")) {
        replyText = lang === 'en'
          ? `Why hire Pedro?\n1. 5+ years of enterprise production experience in .NET & React/Angular\n2. 2-3x faster feature delivery using AI engineering tools\n3. Mentorship & code quality (reduced PR code review bugs by 30%)\n4. Immediate remote availability.`
          : `¿Por qué contratar a Pedro?\n1. 5+ años de experiencia en producción (.NET y React/Angular)\n2. Entrega 2-3x más rápida usando herramientas de ingeniería IA\n3. Liderazgo de equipo y mentoría (redujo errores en revisiones un 30%)\n4. Disponibilidad remota inmediata.`;
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("contacto") || lower.includes("telefono")) {
        hasAction = true;
        replyText = lang === 'en'
          ? `You can reach Pedro directly via Email: pe.rod.001@gmail.com, Phone/WhatsApp: +1 (829) 804-9502, or LinkedIn: linkedin.com/in/pedro-rodriguez-1b557b1b9. Click below to launch the contact & schedule assistant:`
          : `Puedes contactar a Pedro directamente vía Email: pe.rod.001@gmail.com, Teléfono: +1 (829) 804-9502, o LinkedIn: linkedin.com/in/pedro-rodriguez-1b557b1b9. Haz clic abajo para abrir el asistente de agendamiento:`;
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
