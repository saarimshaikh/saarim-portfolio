import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO, IMPACT_METRICS, WORK_EXPERIENCES, SKILL_CATEGORIES, EDUCATION_DATA } from '../../data/resumeData';

interface CommandOutput {
  command: string;
  response: React.ReactNode;
  timestamp: string;
}

export default function InteractiveCLI() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  // Pre-populate with welcome message on mount
  useEffect(() => {
    setHistory([
      {
        command: 'help',
        response: (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <div className="text-cyan-400 font-bold">
              DataOps Mesh CLI [v2.4.0-arm64-k8s]
            </div>
            <div>Type any command or click one of the suggested buttons below:</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-2 text-slate-400">
              <div><span className="text-cyan-300 font-semibold">whoami</span> — Profile summary</div>
              <div><span className="text-cyan-300 font-semibold">experience</span> — Production roles</div>
              <div><span className="text-cyan-300 font-semibold">metrics</span> — Verified benchmarks</div>
              <div><span className="text-cyan-300 font-semibold">skills</span> — Tech stack breakdown</div>
              <div><span className="text-cyan-300 font-semibold">education</span> — Academic degrees</div>
              <div><span className="text-cyan-300 font-semibold">contact</span> — Reach out directly</div>
              <div><span className="text-cyan-300 font-semibold">clear</span> — Reset terminal</div>
            </div>
          </div>
        ),
        timestamp: getCurrentTime()
      }
    ]);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let resp: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        resp = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <div className="text-cyan-400 font-bold">Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1 text-slate-400">
              <div><span className="text-cyan-300 font-semibold">whoami</span> - Identity, role & bio</div>
              <div><span className="text-cyan-300 font-semibold">experience</span> - Apple & Richclouding roles</div>
              <div><span className="text-cyan-300 font-semibold">metrics</span> - 40+ EKS clusters, 275TB reclaimed</div>
              <div><span className="text-cyan-300 font-semibold">skills</span> - Spark, Airflow, Hadoop, AWS</div>
              <div><span className="text-cyan-300 font-semibold">education</span> - MBA (NMIMS) & B.Tech (LPU)</div>
              <div><span className="text-cyan-300 font-semibold">contact</span> - Email, Phone, LinkedIn</div>
              <div><span className="text-cyan-300 font-semibold">clear</span> - Clear output</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        resp = (
          <div className="text-xs font-mono space-y-1.5 text-slate-300">
            <div className="text-white font-bold text-sm">{PERSONAL_INFO.name}</div>
            <div className="text-cyan-400 font-semibold">{PERSONAL_INFO.subtitle}</div>
            <div className="text-slate-400 leading-relaxed pt-1">{PERSONAL_INFO.summary}</div>
            <div className="text-emerald-400 pt-1">● Status: {PERSONAL_INFO.availabilityStatus}</div>
          </div>
        );
        break;

      case 'metrics':
        resp = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold">Key Platform Telemetry:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {IMPACT_METRICS.map((m) => (
                <div key={m.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                  <div className="text-cyan-300 font-bold text-sm">{m.value}</div>
                  <div className="text-white">{m.label}</div>
                  <div className="text-[10px] text-slate-400">{m.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'experience':
        resp = (
          <div className="text-xs font-mono space-y-3 text-slate-300">
            {WORK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="border-l-2 border-cyan-500 pl-3 space-y-1">
                <div className="font-bold text-white text-sm">{exp.role} — {exp.company}</div>
                <div className="text-cyan-400">{exp.period} | {exp.location}</div>
                <div className="text-slate-400 text-[11px] leading-relaxed">
                  Key highlight: {exp.highlights[0]}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resp = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold">Core Stack by Category:</div>
            {SKILL_CATEGORIES.slice(0, 4).map((cat) => (
              <div key={cat.id} className="pt-1">
                <span className="text-slate-200 font-semibold">{cat.name}: </span>
                <span className="text-cyan-300">{cat.items.slice(0, 6).map((i) => i.name).join(', ')}...</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        resp = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="p-2 bg-slate-900 rounded border border-slate-800">
                <div className="font-bold text-white">{edu.degree}</div>
                <div className="text-cyan-400">{edu.institution} ({edu.period})</div>
                {edu.note && <div className="text-slate-400 text-[10px] mt-1">{edu.note}</div>}
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        resp = (
          <div className="text-xs font-mono space-y-1.5 text-slate-300">
            <div className="text-cyan-400 font-bold">Direct Channels:</div>
            <div>Email: <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="text-cyan-300 underline">{PERSONAL_INFO.contact.email}</a></div>
            <div>Phone: <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="text-cyan-300">{PERSONAL_INFO.contact.phone}</a></div>
            <div>LinkedIn: <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.contact.linkedin}</a></div>
            <div>GitHub: <a href={PERSONAL_INFO.contact.github} target="_blank" rel="noreferrer" className="text-cyan-300 underline">{PERSONAL_INFO.contact.github}</a></div>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        resp = (
          <div className="text-xs font-mono text-red-400">
            command not found: "{trimmed}". Type <span className="text-cyan-300 font-bold">help</span> to view available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        response: resp,
        timestamp: getCurrentTime()
      }
    ]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-20 relative bg-[#070B14] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            <TerminalIcon size={14} className="text-cyan-400" />
            <span>Interactive DataOps Shell</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Cluster Terminal Simulator
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Explore experience records, architecture specs, and cluster telemetry through an interactive CLI.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl border border-cyan-500/25 bg-slate-950/90 backdrop-blur-2xl shadow-2xl shadow-cyan-950/40 overflow-hidden font-mono">
          
          {/* macOS / Linux Style Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              <span className="text-xs text-slate-400 ml-2 font-mono">
                saarim@control-plane:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => executeCommand('clear')}
                className="text-[11px] text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors px-2 py-0.5 rounded hover:bg-slate-800"
              >
                <RefreshCw size={11} />
                <span>clear</span>
              </button>
            </div>
          </div>

          {/* Quick Command Pills */}
          <div className="px-4 py-2 bg-slate-900/50 border-b border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="text-slate-500 text-[10px] uppercase font-bold mr-1">Quick:</span>
            {['whoami', 'experience', 'metrics', 'skills', 'education', 'contact', 'help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 transition-colors"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-4 sm:p-6 min-h-[320px] max-h-[460px] overflow-y-auto space-y-4 text-xs cursor-text"
          >
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400 font-bold">saarim@k8s-mesh</span>
                  <span className="text-slate-600">:</span>
                  <span className="text-blue-400">~</span>
                  <span className="text-slate-500">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                  <span className="text-[10px] text-slate-600 ml-auto">{item.timestamp}</span>
                </div>
                <div className="pl-4 pt-1">{item.response}</div>
              </div>
            ))}

            {/* Active Command Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 text-cyan-400 pt-2">
              <span className="text-emerald-400 font-bold">saarim@k8s-mesh</span>
              <span className="text-slate-600">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-slate-500">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. 'experience', 'skills')..."
                className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="text-slate-400 hover:text-cyan-300 p-1 rounded hover:bg-slate-800"
              >
                <CornerDownLeft size={14} />
              </button>
            </form>

            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
}
