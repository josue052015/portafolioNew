import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Linkedin, Copy, Check, X, Send, Calendar, Download, Sparkles, MapPin, Loader2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledRoleTitle?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, prefilledRoleTitle }) => {
  const { lang, t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [senderName, setSenderName] = useState("");
  const [senderCompany, setSenderCompany] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState(
    prefilledRoleTitle
      ? (lang === 'en'
          ? `Hello Pedro, we are interested in your profile for the ${prefilledRoleTitle} position. We would like to schedule an interview.`
          : `Hola Pedro, nos interesó tu perfil para la posición de ${prefilledRoleTitle}. Nos gustaría coordinar una llamada de entrevista.`)
      : (lang === 'en'
          ? "Hello Pedro, I reviewed your portfolio and would like to discuss a professional opportunity."
          : "Hola Pedro, revisé tu portafolio y me gustaría conversar sobre una oportunidad profesional.")
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("https://formsubmit.co/ajax/pe.rod.001@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `📩 Oportunidad / Mensaje de ${senderName} (${senderCompany || 'Contacto General'})`,
          _template: "table",
          Nombre: senderName,
          Empresa: senderCompany || "No especificada",
          Email: senderEmail,
          Mensaje: message
        })
      });
    } catch (err) {
      // Fallback open mailto if network blocked
      window.location.href = `mailto:pe.rod.001@gmail.com?subject=${encodeURIComponent(`Oportunidad de ${senderName}`)}&body=${encodeURIComponent(`Nombre: ${senderName}\nEmpresa: ${senderCompany}\nEmail: ${senderEmail}\n\nMensaje:\n${message}`)}`;
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="glass-panel w-full max-w-2xl rounded-2xl border border-cyan-500/40 shadow-2xl overflow-hidden my-auto bg-slate-900">
        
        {/* Header */}
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading">{t.contact.title}</h3>
              <p className="text-xs text-slate-400 font-mono">{t.contact.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Email */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-2">
              <div className="flex items-center justify-between">
                <Mail className="w-4 h-4 text-cyan-400" />
                <button
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="text-slate-400 hover:text-cyan-400 text-xs flex items-center gap-1"
                >
                  {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-mono">{t.contact.directEmail}</div>
                <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-white hover:text-cyan-300 truncate block">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-2">
              <div className="flex items-center justify-between">
                <Phone className="w-4 h-4 text-emerald-400" />
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="text-slate-400 hover:text-emerald-400 text-xs flex items-center gap-1"
                >
                  {copiedField === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-mono">{t.contact.phone}</div>
                <a href={`https://wa.me/18298049502`} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-emerald-300 block">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between space-y-2">
              <div className="flex items-center justify-between">
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span className="text-[10px] text-blue-400 font-mono font-bold">{t.contact.verified}</span>
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-mono">{t.contact.linkedin}</div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-white hover:text-blue-300 truncate block">
                  in/pedro-rodriguez
                </a>
              </div>
            </div>

          </div>

          {/* Direct Message Form */}
          {submitted ? (
            <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white">{t.contact.successTitle}</h4>
              <p className="text-xs text-slate-300">{t.contact.successDesc}</p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                <Mail className="w-3.5 h-3.5" />
                <span>pe.rod.001@gmail.com</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-slate-950/70 p-5 rounded-xl border border-slate-800">
              <div className="text-xs font-bold uppercase text-slate-300 tracking-wider">
                {t.contact.formTitle}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder={t.contact.namePlaceholder}
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder={t.contact.companyPlaceholder}
                  value={senderCompany}
                  onChange={(e) => setSenderCompany(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <input
                type="email"
                required
                placeholder={t.contact.emailPlaceholder}
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              />

              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:border-cyan-400 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{lang === 'en' ? 'Sending to pe.rod.001@gmail.com...' : 'Enviando a pe.rod.001@gmail.com...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.contact.submitBtn}</span>
                  </>
                )}
              </button>
            </form>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            Dominican Republic (GMT-4)
          </span>
          <a
            href="/pedro-rodriguez-cv.pdf"
            download="pedro-rodriguez-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.contact.printCv}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
