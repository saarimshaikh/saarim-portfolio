import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Linkedin, Github, ExternalLink, ArrowUp, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/resumeData';

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#070B14] border-t border-slate-800/80 pt-20 pb-12 overflow-hidden">
      {/* Background glow highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Left Column: Get In Touch */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                Direct Connection & Availability
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Robust Data Platforms
              </h2>
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Open to Big Data Platform Engineering, DataOps leadership, and distributed systems architecture opportunities across cloud and hybrid environments.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-2">
              
              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between group transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.contact.email}`}
                      className="text-sm font-mono font-bold text-white group-hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.email, 'email')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between group transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Phone / WhatsApp</div>
                    <a
                      href={`tel:${PERSONAL_INFO.contact.phone}`}
                      className="text-sm font-mono font-bold text-white group-hover:text-cyan-300 transition-colors"
                    >
                      {PERSONAL_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-800 text-slate-400 border border-slate-700">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-sm font-mono font-bold text-slate-200">
                    {PERSONAL_INFO.contact.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono group"
              >
                <Linkedin size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ExternalLink size={12} className="text-slate-500" />
              </a>

              <a
                href={PERSONAL_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all text-xs font-mono group"
              >
                <Github size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
                <ExternalLink size={12} className="text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Quick Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white">Send Direct Dispatch</h3>
                  <p className="text-xs text-slate-400 font-mono">Immediate telemetry inquiry routing</p>
                </div>
                <div className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Channel Online</span>
                </div>
              </div>

              {isSent ? (
                <div className="py-12 text-center space-y-3 font-mono">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <Check size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Thank you for reaching out. Saarim will respond to your communication promptly at your provided email.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject / Discussion Topic</label>
                    <input
                      type="text"
                      placeholder="Big Data Platform Architecture / DataOps Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message Content</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Hello Saarim, we are scaling our Spark & Airflow clusters on EKS and would love to connect..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-white text-xs font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    <Send size={15} />
                    <span>Send Inquiry Dispatch</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Footer Credits & Telemetry */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-300 font-semibold">{PERSONAL_INFO.name}</span>. Built with React 18, Three.js, & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              99.9%+ API Availability
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp size={14} />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
