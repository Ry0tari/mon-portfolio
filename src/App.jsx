import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import JourneySection from './components/JourneySection'
import VeilleSection from './components/VeilleSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Navbar />

      <main>
        <HeroSection />

        {/* Parcours + Skills unifiés pour une animation fluide */}
        <JourneySection />

        <VeilleSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Spacer so the last section isn't hidden behind the dock */}
      <div className="h-24" />
    </div>
  )
}
