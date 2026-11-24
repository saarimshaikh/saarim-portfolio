import { ArrowRight, Terminal, Mail, Shield, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/resumeData';
import HeroCluster3D from '../canvas/HeroCluster3D';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex flex-col justify-center overflow-hidden bg-[#070B14]">
      {/* Subtle background glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Profile Headline & Copy */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0 text-center lg:text-left">
            
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-lg shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-semibold">{PERSONAL_INFO.availabilityStatus}</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                <span className="block text-slate-100">Shaikh Saarim</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  Rizwan
                </span>
              </h1>

              {/* Role subtitle */}
              <p className="text-sm sm:text-base font-mono font-medium text-cyan-300/90 tracking-wide border-l-2 border-cyan-400/80 pl-3 py-0.5 max-w-xl">
                {PERSONAL_INFO.subtitle}
              </p>
            </div>

            {/* Summary copy */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal text-justify sm:text-left">
              {PERSONAL_INFO.summary}
            </p>

            {/* Platform Tech Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-xs">
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-slate-300">
                AWS EKS (40+)
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-amber-400/90">
                Apache Spark / Kueue
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-emerald-400/90">
                Apache Airflow
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-purple-400/90">
                Kafka Streaming
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-cyan-300">
                Hadoop / CDP
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold font-mono text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
              >
                <span>Explore Experience</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold font-mono text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 transition-all backdrop-blur-md hover:-translate-y-0.5"
              >
                <Terminal size={16} className="text-cyan-400" />
                <span>Interactive CLI</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium font-mono text-slate-300 hover:text-white hover:bg-slate-800/40 transition-colors"
              >
                <Mail size={16} className="text-emerald-400" />
                <span>Contact</span>
              </a>
            </div>

            {/* Quick telemetry caption */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Shield size={13} className="text-emerald-400" />
                Production SLA: 99.9%+
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5">
                <Cpu size={13} className="text-cyan-400" />
                p95 Latency &lt; 5s
              </span>
            </div>

          </div>

          {/* Right Column: 3D Interactive Topology Mesh Canvas */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900/60 to-slate-950/80 backdrop-blur-xl p-2 shadow-2xl shadow-cyan-950/40 overflow-hidden group">
              
              {/* HUD / Mesh Status Bar Header */}
              <div className="flex items-center justify-between px-3 py-2 bg-slate-950/80 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400 mb-1 z-20 relative">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-slate-200 font-semibold">MESH TOPOLOGY 3D</span>
                  <span className="hidden sm:inline px-1.5 py-0.5 bg-cyan-500/10 text-cyan-300 rounded text-[10px]">
                    LIVE R3F
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[10px] text-slate-400">
                  <span className="hidden sm:inline">Drag to Orbit / Hover Node</span>
                  <span className="text-emerald-400 font-bold">● HEALTHY</span>
                </div>
              </div>

              {/* 3D Canvas */}
              <HeroCluster3D />

              {/* Topology Legend Footer */}
              <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-slate-950/90 rounded-xl border border-slate-800/80 text-[10px] font-mono mt-1 z-20 relative">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded bg-cyan-400"></span>
                    <span className="text-slate-300">K8s Control Plane</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded bg-amber-400"></span>
                    <span className="text-slate-300">Spark (Kueue)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded bg-emerald-400"></span>
                    <span className="text-slate-300">Airflow Pods</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded bg-purple-400"></span>
                    <span className="text-slate-300">Kafka Bus</span>
                  </div>
                </div>
                <div className="text-slate-500 hidden sm:block">
                  Zoom disabled for smooth scroll
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
