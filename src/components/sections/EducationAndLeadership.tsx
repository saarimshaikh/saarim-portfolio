import { GraduationCap, Award, Calendar, MapPin, Languages, Target, Users, Clock, Brain, ShieldAlert, Zap } from 'lucide-react';
import { EDUCATION_DATA, SOFT_SKILLS, LANGUAGES } from '../../data/resumeData';

const SOFT_SKILL_ICONS: Record<string, React.ElementType> = {
  Target,
  Users,
  Clock,
  Brain,
  ShieldAlert,
  Zap,
};

export default function EducationAndLeadership() {
  return (
    <section id="education" className="py-24 relative bg-[#070B14] border-t border-slate-800/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Academic Foundation & Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education, Leadership & Languages
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Combining rigorous Computer Science Engineering foundations with Executive Data Science business leadership and proven cross-functional execution.
          </p>
        </div>

        {/* 1. Education Section Cards */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="text-cyan-400" size={20} />
            <h3 className="text-xl font-bold text-white tracking-wide">
              Higher Education & Degrees
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl p-6 sm:p-7 bg-slate-900/75 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-950/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                        edu.status === 'In Progress'
                          ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      }`}
                    >
                      {edu.status}
                    </span>

                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded border border-slate-800">
                      <Calendar size={13} className="text-cyan-400" />
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mt-4 group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h4>

                  <div className="text-sm font-semibold text-cyan-400 mt-1">
                    {edu.institution}
                  </div>

                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin size={13} className="text-slate-500" />
                    {edu.location}
                  </div>

                  {edu.details && (
                    <div className="mt-4 p-3 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs font-mono text-slate-300">
                      <span className="text-cyan-400 font-semibold">Specialization: </span>
                      {edu.details}
                    </div>
                  )}

                  {edu.note && (
                    <p className="mt-4 text-xs text-slate-300 font-sans italic bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed">
                      "{edu.note}"
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Field: {edu.field}</span>
                  <Award size={14} className="text-cyan-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Soft Skills & Distributed Leadership */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-amber-400" size={20} />
            <h3 className="text-xl font-bold text-white tracking-wide">
              Engineering Leadership & Soft Skills
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOFT_SKILLS.map((skill, sIdx) => {
              const Icon = SOFT_SKILL_ICONS[skill.icon] || Target;
              return (
                <div
                  key={sIdx}
                  className="rounded-xl p-5 bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon size={18} />
                    </div>
                    <h4 className="font-bold text-white text-sm tracking-wide">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Languages */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Languages className="text-emerald-400" size={20} />
            <h3 className="text-xl font-bold text-white tracking-wide">
              Languages
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {LANGUAGES.map((lang, lIdx) => (
              <div
                key={lIdx}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
                    {lang.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{lang.name}</div>
                    <div className="text-xs font-mono text-cyan-400">{lang.proficiency}</div>
                  </div>
                </div>

                <div className="w-28 space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>Proficiency</span>
                    <span>{lang.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full rounded-full"
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
