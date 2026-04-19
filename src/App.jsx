import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import Timeline from './components/Timeline'
import VeilleSection from './components/VeilleSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />

      <main>
        <HeroSection />

        {/* Parcours + Skills in same logical block */}
        <div>
          <Timeline />
          <SkillsSection />
        </div>

        <VeilleSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Spacer so the last section isn't hidden behind the dock */}
      <div className="h-24" />
    </div>
  )
}
