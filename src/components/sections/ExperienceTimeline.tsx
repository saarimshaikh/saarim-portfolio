import { Calendar, MapPin, ChevronRight, Layers } from 'lucide-react';
import { WORK_EXPERIENCES } from '../../data/resumeData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-[#070B14] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Platform Engineering Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Hands-on administration and engineering of large-scale Kubernetes clusters, distributed Spark & Airflow fleets, Cloudera Hadoop ecosystems, and automated DataOps pipelines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-16">
          {WORK_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="relative group transition-all duration-300"
            >
              {/* Timeline node icon on the vertical line */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  exp.isCurrent
                    ? 'bg-cyan-500 border-cyan-300 shadow-lg shadow-cyan-500/50 scale-110'
                    : 'bg-slate-900 border-slate-600 group-hover:border-cyan-400 group-hover:bg-slate-800'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    exp.isCurrent ? 'bg-slate-950 animate-ping' : 'bg-slate-400 group-hover:bg-cyan-300'
                  }`}
                />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/75 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300 hover:shadow-cyan-950/20">
                
                {/* Top Bar: Role, Company, Period, Badges */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          Current Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm sm:text-base font-medium">
                      <span className="text-cyan-400 font-semibold">{exp.company}</span>
                      {exp.client && (
                        <span className="text-slate-400 font-mono text-xs px-2 py-0.5 rounded bg-slate-800 border border-slate-700">
                          {exp.client}
                        </span>
                      )}
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-300 flex items-center gap-1 text-xs sm:text-sm">
                        <MapPin size={14} className="text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-slate-300 bg-slate-950/70 px-3.5 py-2 rounded-lg border border-slate-800 self-start">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* High Impact Metrics Chips */}
                {exp.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
                    {exp.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-2.5 text-center font-mono"
                      >
                        <div className="text-base sm:text-lg font-bold text-cyan-300">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet Highlights - Exact Verbatim from Resume */}
                <div className="mt-5 space-y-3.5">
                  {exp.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/bullet">
                      <div className="mt-1 p-0.5 rounded bg-cyan-500/10 text-cyan-400 group-hover/bullet:text-cyan-300 group-hover/bullet:bg-cyan-500/20 shrink-0 transition-colors">
                        <ChevronRight size={15} />
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed text-justify sm:text-left group-hover/bullet:text-slate-200 transition-colors">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technology Tags */}
                <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                    <Layers size={13} className="text-cyan-400" />
                    Stack:
                  </span>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-950 text-cyan-300/90 border border-slate-800 hover:border-cyan-500/30 hover:text-cyan-200 transition-colors"
                    >
                      {tag}
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
}
