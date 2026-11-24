import { useState, useEffect } from 'react';
import { Server, Activity, Cpu, TrendingDown } from 'lucide-react';
import { IMPACT_METRICS } from '../../data/resumeData';

const ICONS_MAP: Record<string, React.ElementType> = {
  Server,
  Activity,
  Cpu,
  TrendingDown,
};

function MetricCard({
  metric
}: {
  metric: typeof IMPACT_METRICS[0];
}) {
  const Icon = ICONS_MAP[metric.iconName] || Cpu;
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (!metric.numValue) return;
    const duration = 1600;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(
        Math.round((step / steps) * (metric.numValue || 0)),
        metric.numValue || 0
      );
      setDisplayCount(current);
      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [metric.numValue]);

  return (
    <div className="relative group rounded-xl p-6 bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 overflow-hidden">
      {/* Corner accent line */}
      <div className="absolute top-0 right-0 w-16 h-[2px] bg-gradient-to-l from-cyan-400 to-transparent group-hover:w-full transition-all duration-500" />
      <div className="absolute top-0 right-0 h-16 w-[2px] bg-gradient-to-b from-cyan-400 to-transparent group-hover:h-full transition-all duration-500" />

      {/* Background glow on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 space-y-3">
        {/* Top Header: Icon & Badge */}
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all">
            <Icon size={20} />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {metric.badge}
          </span>
        </div>

        {/* Primary Metric Number Display */}
        <div className="pt-2">
          <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight flex items-baseline">
            {metric.prefix && (
              <span className="text-cyan-400 mr-1 text-2xl font-sans">{metric.prefix}</span>
            )}
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {metric.numValue ? displayCount.toLocaleString() : metric.value}
            </span>
            {metric.suffix && (
              <span className="text-cyan-400 text-2xl ml-0.5 font-bold">{metric.suffix}</span>
            )}
          </div>

          <h3 className="text-sm font-semibold text-slate-200 mt-1 tracking-wide font-sans group-hover:text-cyan-200 transition-colors">
            {metric.label}
          </h3>
        </div>

        {/* Sublabel / Context */}
        <p className="text-xs text-slate-400 font-mono leading-relaxed pt-1 border-t border-slate-800/80">
          {metric.sublabel}
        </p>
      </div>
    </div>
  );
}

export default function MetricsStrip() {
  return (
    <section id="metrics" className="py-12 relative z-20 border-y border-slate-800/80 bg-[#070B14]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & telemetries */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Verified Platform Metrics
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Production Scale & Telemetry
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-lg border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Live Production Benchmark Impact</span>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {IMPACT_METRICS.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>

      </div>
    </section>
  );
}
