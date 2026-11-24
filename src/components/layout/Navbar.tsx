import { useState, useEffect } from 'react';
import { Terminal, Cpu, Layers, Award, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Metrics', href: '#metrics', icon: Cpu },
    { name: 'Experience', href: '#experience', icon: Layers },
    { name: 'Skills', href: '#skills', icon: Layers },
    { name: 'Education', href: '#education', icon: Award },
    { name: 'CLI Terminal', href: '#terminal', icon: Terminal },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
              <span className="font-mono font-bold text-lg">SR</span>
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                Shaikh Saarim Rizwan
              </div>
              <div className="text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>DataOps Platform</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Availability Badge & Action */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>40+ EKS Clusters Active</span>
            </div>
            <a
              href="#contact"
              className="px-4 py-1.5 text-xs font-mono font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-all shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070B14]/95 border-b border-cyan-500/20 px-4 pt-3 pb-5 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm font-mono text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-md"
              >
                <Icon size={16} className="text-cyan-400" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center w-full py-2 text-xs font-mono font-bold text-slate-900 bg-cyan-400 rounded-md"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
