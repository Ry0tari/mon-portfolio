import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { id: 'accueil', label: 'Accueil', icon: HomeIcon },
  { id: 'skills', label: 'Skills', icon: SkillsIcon },
  { id: 'veille', label: 'Veille', icon: VeilleIcon },
  { id: 'projets', label: 'Projets', icon: ProjectsIcon },
  { id: 'contact', label: 'Contact', icon: ContactIcon },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('accueil')
  const [hoveredId, setHoveredId] = useState(null)

  // Scroll-based active detection — more reliable than IntersectionObserver alone
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 2

    for (let i = navItems.length - 1; i >= 0; i--) {
      const el = document.getElementById(navItems[i].id)
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(navItems[i].id)
        return
      }
    }
    setActiveSection('accueil')
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
      className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-2xl border px-3 py-2 shadow-2xl backdrop-blur-xl sm:gap-2 sm:px-4"
      style={{
        backgroundColor: 'var(--color-dock-bg)',
        borderColor: 'var(--color-dock-border)',
      }}
    >
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = activeSection === id
        return (
          <div key={id} className="relative">
            <motion.button
              onClick={() => handleClick(id)}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 sm:h-12 sm:w-12"
              style={{
                backgroundColor: isActive ? 'var(--color-accent-light)' : 'transparent',
                color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
              }}
              whileHover={{ scale: 1.18, y: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
            >
              <Icon size={20} />
              {isActive && (
                <motion.span
                  layoutId="dock-indicator"
                  className="absolute -bottom-1 h-1 w-4 rounded-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>

            {/* Tooltip */}
            <AnimatePresence>
              {hoveredId === id && (
                <motion.span
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium shadow-lg"
                  style={{
                    backgroundColor: 'var(--color-surface)',
                    color: 'var(--color-text)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        )
      })}

      {/* Separator */}
      <div className="mx-1 h-7 w-px sm:mx-2" style={{ backgroundColor: 'var(--color-border)' }} />

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 sm:h-12 sm:w-12"
        style={{ color: 'var(--color-accent)' }}
        whileHover={{ scale: 1.18, y: -4 }}
        whileTap={{ scale: 0.95, rotate: 180 }}
        aria-label="Basculer le thème"
      >
        <AnimatePresence mode="wait">
          {theme === 'light' ? (
            <motion.span
              key="moon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <MoonIcon size={20} />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <SunIcon size={20} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.nav>
  )
}

/* ─── Inline SVG Icon Components ─── */

function HomeIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z" />
    </svg>
  )
}

function SkillsIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.663 17h4.674M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

function VeilleIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  )
}

function ProjectsIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  )
}

function ContactIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function MoonIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  )
}

function SunIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}
