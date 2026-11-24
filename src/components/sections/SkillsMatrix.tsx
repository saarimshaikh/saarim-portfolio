import { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/resumeData';
import { Database, Cloud, ShieldCheck, Terminal, Filter, Sparkles, CheckCircle2, Search } from 'lucide-react';

type TabType = 'All' | 'Big Data & Hadoop' | 'Streaming & Cloud' | 'Security, Monitoring & DevOps' | 'Programming & Core';

const TAB_ICONS: Record<TabType, React.ElementType> = {
  'All': Filter,
  'Big Data & Hadoop': Database,
  'Streaming & Cloud': Cloud,
  'Security, Monitoring & DevOps': ShieldCheck,
  'Programming & Core': Terminal,
};

// 3D Tilt Card Component
function TiltCard({
  skill,
  categoryName
}: {
  skill: { name: string; level?: string; description?: string };
  categoryName: string;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate tilt angles (degrees)
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className="group relative rounded-xl p-4 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-md shadow-md hover:shadow-cyan-950/40 flex flex-col justify-between transition-colors duration-300"
    >
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-mono font-bold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
            {skill.name}
          </h4>
          {skill.level && (
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold border ${
                skill.level === 'Expert'
                  ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                  : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              }`}
            >
              {skill.level}
            </span>
          )}
        </div>

        {skill.description && (
          <p className="text-xs text-slate-400 mt-2 font-sans leading-relaxed group-hover:text-slate-300 transition-colors">
            {skill.description}
          </p>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span className="truncate">{categoryName}</span>
        <CheckCircle2 size={12} className="text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
      </div>
    </div>
  );
}

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<TabType>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs: TabType[] = [
    'All',
    'Big Data & Hadoop',
    'Streaming & Cloud',
    'Security, Monitoring & DevOps',
    'Programming & Core',
  ];

  // Filter categories and items
  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab !== 'All' && cat.group !== activeTab) {
      return false;
    }
    return true;
  }).map((cat) => {
    if (!searchQuery.trim()) return cat;
    const query = searchQuery.toLowerCase();
    const matchingItems = cat.items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
    );
    return { ...cat, items: matchingItems };
  }).filter((cat) => cat.items.length > 0);

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="skills" className="py-24 relative bg-[#070B14] overflow-hidden border-t border-slate-800/80">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Technical Infrastructure Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Engineering Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Comprehensive inventory of distributed systems, Big Data orchestrators, cloud services, security primitives, and DevOps automation tools.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Filter tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-3 py-1.5 text-xs font-mono bg-slate-900 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 placeholder:text-slate-600 w-40 sm:w-52"
              />
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800 text-slate-300">
              <Sparkles size={14} className="text-cyan-400" />
              <span>{totalSkillsCount} Tools</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-800/80">
          {tabs.map((tab) => {
            const Icon = TAB_ICONS[tab];
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon size={14} />
                <span>{tab}</span>
              </button>
            );
          })}
        </div>

        {/* Grouped Skills Display */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-sm bg-cyan-400" />
                <h3 className="text-lg font-bold text-white tracking-wide font-sans">
                  {category.name}
                </h3>
                <span className="text-xs font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                  {category.items.length} items
                </span>
                <div className="flex-1 h-[1px] bg-slate-800/80" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.items.map((skill) => (
                  <TiltCard
                    key={skill.name}
                    skill={skill}
                    categoryName={category.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
