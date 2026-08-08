import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { ChatMessage } from '../types';
import { Sparkles, X, Send, Bot, User, CheckCircle2, Terminal } from 'lucide-react';

interface AiAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ isOpen, onClose }) => {
  const { lang, t } = useLanguage();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "ai",
      text: t.aiAssistant.welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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
      const lower = text.toLowerCase();

      if (lang === 'en') {
        if (lower.includes("stack") || lower.includes("technology") || lower.includes("skills")) {
          replyText = `Pedro is a Senior Full-Stack Engineer with 5+ years of experience. His core tech stack includes Angular (10-17+), React 18, TypeScript, C# ASP.NET Core, .NET Core 3+, SQL Server, Node.js, and REST APIs. He is also a specialist in integrating AI engineering tools like Google Antigravity & Cursor.`;
        } else if (lower.includes("triplecyber") || lower.includes("achievement") || lower.includes("experience")) {
          replyText = `At TripleCyber Corporation, Pedro developed 12+ business-critical web modules, boosted overall app performance by 25-35%, mentored junior engineers (reducing code review bugs by 30%), and supported 20+ production releases.`;
        } else if (lower.includes("ai") || lower.includes("antigravity") || lower.includes("cursor")) {
          replyText = `Pedro uses Google Antigravity and Cursor IDE as daily drivers to accelerate code refactoring, automated unit test generation, and bug fixing. This allows him to deliver agile tasks 2-3x faster while adhering to enterprise architecture standards.`;
        } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone")) {
          replyText = `You can reach Pedro directly via Email: pe.rod.001@gmail.com, Phone/WhatsApp: +1 (829) 804-9502, or LinkedIn: linkedin.com/in/pedro-rodriguez-1b557b1b9. Would you like to schedule an interview?`;
        } else {
          replyText = `Pedro Rodriguez is a Systems and Computing Engineer from Universidad O&M with 5+ years leading Full-Stack web development. He has automated over 60% of manual operations in hospitality projects and managed over 1,000 security access records. Would you like to explore his case studies?`;
        }
      } else {
        if (lower.includes("stack") || lower.includes("tecnologia") || lower.includes("habilidades")) {
          replyText = `Pedro es Full-Stack Engineer con 5+ años de experiencia. Su stack principal incluye Angular (10-17+), React 18, TypeScript, C# ASP.NET Core, .NET Core 3+, SQL Server, Node.js y REST APIs. Además es especialista en integrar herramientas IA como Google Antigravity y Cursor.`;
        } else if (lower.includes("triplecyber") || lower.includes("logro") || lower.includes("experiencia")) {
          replyText = `En TripleCyber Corporation, Pedro desarrolló 12+ módulos empresariales críticos, mejoró el rendimiento general de aplicaciones entre 25% y 35%, mentoreó a desarrolladores junior (reduciendo errores en revisión de código en un 30%) y apoyó más de 20 despliegues en producción.`;
        } else if (lower.includes("ia") || lower.includes("antigravity") || lower.includes("cursor")) {
          replyText = `Pedro utiliza Google Antigravity y Cursor IDE como herramientas diarias para acelerar la refactorización de código, generación de pruebas unitarias y depuración de software. Esto le permite entregar tareas ágiles 2-3x más rápido manteniendo los estándares de arquitectura.`;
        } else if (lower.includes("contacto") || lower.includes("email") || lower.includes("telefono")) {
          replyText = `Puedes contactar a Pedro directamente vía Email: pe.rod.001@gmail.com, Teléfono: +1 (829) 804-9502, o LinkedIn: linkedin.com/in/pedro-rodriguez-1b557b1b9. ¿Te gustaría que preparemos un mensaje de propuesta?`;
        } else {
          replyText = `Pedro Rodriguez es un Ingeniero de Sistemas graduado de la Universidad O&M, con 5+ años liderando desarrollo web Full-Stack. Ha automatizado más del 60% de cargas operativas manuales en proyectos de hospitalidad y gestionado más de 1,000 registros en sistemas de seguridad. ¿Deseas saber más sobre sus proyectos?`;
        }
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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
              {m.text}
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
