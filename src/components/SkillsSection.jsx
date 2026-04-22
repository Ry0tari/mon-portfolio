import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const skills = [
  {
    title: 'Front-End',
    icon: FrontEndIcon,
    techs: [
      { name: 'HTML', src: 'https://cdn.simpleicons.org/html5' },
      { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg' },
      { name: 'Tailwind', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    ],
  },
  {
    title: 'Back-End',
    icon: BackEndIcon,
    techs: [
      { name: 'PHP', src: 'https://cdn.simpleicons.org/php' },
      { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg' },
      { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Spring Boot', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg' },
      { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    ],
  },
  {
    title: 'Mobile',
    icon: MobileIcon,
    techs: [
      { name: 'Flutter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
    ],
  },
  {
    title: 'Data',
    icon: DataIcon,
    techs: [
      { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'FME', src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%23009bda'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-family='Arial,sans-serif' font-weight='bold' font-size='20' fill='white'%3EFME%3C/text%3E%3C/svg%3E" },
      { name: 'ArcGIS', src: 'https://cdn.simpleicons.org/arcgis' },
      { name: 'DBeaver', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg' },
    ],
  },

  
  {
    title: 'DevOps & Infra',
    icon: DevOpsIcon,
    techs: [
      { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invertDark: true },
      { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
    ],
  },
]

export default function SkillsSection() {
  const { theme } = useTheme()
  const [selectedSkill, setSelectedSkill] = useState(null)
  const [radius, setRadius] = useState(300)

  // Gestion responsive du rayon de l'explosion
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setRadius(120) // Mobile
      else if (window.innerWidth < 1024) setRadius(220) // Tablette
      else setRadius(300) // PC
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Empêcher le scroll quand la carte est ouverte
  useEffect(() => {
    if (selectedSkill !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedSkill])

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden flex flex-col items-center">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center z-10 relative"
      >
        <h2
          className="text-4xl font-extrabold sm:text-5xl bg-clip-text"
          style={{ color: 'var(--color-text)' }}
        >
          Skills &{' '}
          <span style={{ color: 'var(--color-accent)' }}>Compétences</span>
        </h2>
        <p
          className="mx-auto mt-4 max-w-lg text-lg"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Cliquez sur une catégorie pour découvrir les technologies que j'utilise.
        </p>
      </motion.div>

      {/* Zone de l'Arborescence Radiale */}
      <div
        className="relative w-full flex-1 flex items-center justify-center transition-all duration-300"
        style={{ minHeight: `${radius * 2 + 100}px` }}
      >
        {/* Lignes SVG (Arrière-plan) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-border)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
          </defs>

          {/* Sous-SVG pour centrer les coordonnées (0,0) exactement au milieu du conteneur */}
          <svg x="50%" y="50%" style={{ overflow: 'visible' }}>
            {/* Ligne descendant depuis le haut (lien avec le parcours) */}
            <motion.line
              x1="0" y1="-800" x2="0" y2="0"
              strokeWidth="3"
              stroke="url(#lineGrad)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: '200px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* Les 6 branches qui explosent du centre */}
            {skills.map((_, i) => {
              // Rotation à 90° (0, 60, 120, 180, 240, 300)
              // Cela libère parfaitement l'axe vertical pour laisser descendre la ligne !
              const angle = (i * 60) * (Math.PI / 180)
              return (
                <motion.line
                  key={`line-${i}`}
                  x1="0" y1="0"
                  x2={Math.cos(angle) * radius}
                  y2={Math.sin(angle) * radius}
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: '200px' }}
                  transition={{ duration: 0.8, delay: 1.5 + i * 0.1, ease: 'easeOut' }}
                />
              )
            })}

            {/* Point central (Cœur de l'explosion) */}
            <motion.circle
              cx="0" cy="0" r="6"
              fill="var(--color-accent)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: '200px' }}
              transition={{ delay: 1.4, duration: 0.3, type: 'spring' }}
            />
          </svg>
        </svg>

        {/* Les Cartes aux extrémités des branches */}
        {skills.map((skill, i) => {
          const angle = (i * 60) * (Math.PI / 180)
          const Icon = skill.icon
          const isSelected = selectedSkill === i

          return (
            <motion.div
              key={`branch-card-${i}`}
              className="absolute"
              style={{
                left: `calc(50% + ${Math.cos(angle) * radius}px)`,
                top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '200px' }}
              transition={{ delay: 2 + i * 0.1, duration: 0.5, type: 'spring' }}
            >
              {/* Le conteneur -translate permet de centrer parfaitement la carte sur l'extrémité de la ligne */}
              <div className="absolute -translate-x-1/2 -translate-y-1/2">
                {!isSelected && (
                  <motion.div
                    layoutId={`card-${i}`}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl cursor-pointer shadow-lg"
                    style={{ perspective: 1000, zIndex: 10 }}
                    onClick={() => setSelectedSkill(i)}
                  >
                    <div className="w-full h-full relative [transform-style:preserve-3d]">
                      <div
                        className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border-2 flex flex-col items-center justify-center gap-2 md:gap-3 transition-all duration-300 group hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_var(--color-accent)]"
                        style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
                      >
                        <Icon size={32} className="text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)]" />
                        <span className="font-bold text-[10px] sm:text-[11px] md:text-sm text-center px-1 leading-tight" style={{ color: 'var(--color-text)' }}>
                          {skill.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Overlay & Carte Centrale Retournée (Focus) */}
      <AnimatePresence>
        {selectedSkill !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

            {/* Arrière-plan flou */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            />

            {/* Le Conteneur de la Carte Focus */}
            <motion.div
              layoutId={`card-${selectedSkill}`}
              className="w-full max-w-lg h-[450px] sm:h-[400px] rounded-2xl relative z-10 shadow-2xl"
              style={{ perspective: 1000 }}
            >
              {/* Le système de retournement 3D */}
              <motion.div
                className="w-full h-full relative [transform-style:preserve-3d]"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                exit={{ rotateY: 0 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
              >

                {/* FACE AVANT (Invisible pendant la lecture, mais sert pour la transition LayoutId) */}
                <div
                  className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border-2 flex flex-col items-center justify-center gap-4"
                  style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-accent)' }}
                >
                  {(() => {
                    const SelectedIcon = skills[selectedSkill].icon;
                    return <SelectedIcon size={64} style={{ color: 'var(--color-accent)' }} />
                  })()}
                  <h3 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                    {skills[selectedSkill].title}
                  </h3>
                </div>

                {/* FACE ARRIÈRE (Les Badges) */}
                <div
                  className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border-2 p-5 sm:p-6 flex flex-col"
                  style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-accent)', boxShadow: '0 0 30px rgba(var(--color-accent-rgb), 0.3)' }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                      {skills[selectedSkill].title}
                    </h3>
                    <button
                      onClick={() => setSelectedSkill(null)}
                      className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                      title="Fermer"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                  </div>

                  {/* Zone de défilement pour les badges */}
                  <div className="flex flex-wrap gap-3 overflow-y-auto content-start flex-1 p-4 -m-4 scrollbar-thin">
                    {skills[selectedSkill].techs.map(tech => (
                      <div
                        key={tech.name}
                        className="group flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: 'var(--color-bg)',
                          borderColor: 'var(--color-border)',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--color-accent)';
                          e.currentTarget.style.boxShadow = '0 0 15px var(--color-accent)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--color-border)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <img
                          src={tech.src}
                          alt={tech.name}
                          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110"
                          style={{ filter: theme === 'dark' && tech.invertDark ? 'invert(1) brightness(1.5)' : 'none' }}
                        />
                        <span className="font-semibold text-xs sm:text-sm" style={{ color: 'var(--color-text)' }}>
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ─── Inline SVG Icons ─── */

function FrontEndIcon({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function BackEndIcon({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function MobileIcon({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function DataIcon({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}

function IAIcon({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  )
}

function DevOpsIcon({ size = 24, className = '', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  )
}
