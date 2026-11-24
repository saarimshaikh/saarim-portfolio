import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import MetricsStrip from './components/sections/MetricsStrip';
import ExperienceTimeline from './components/sections/ExperienceTimeline';
import SkillsMatrix from './components/sections/SkillsMatrix';
import EducationAndLeadership from './components/sections/EducationAndLeadership';
import InteractiveCLI from './components/sections/InteractiveCLI';
import ContactFooter from './components/sections/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        <HeroSection />
        <MetricsStrip />
        <ExperienceTimeline />
        <SkillsMatrix />
        <EducationAndLeadership />
        <InteractiveCLI />
      </main>

      {/* Footer & Contact */}
      <ContactFooter />
    </div>
  );
}
