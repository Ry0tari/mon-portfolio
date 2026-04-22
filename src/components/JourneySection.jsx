import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

// ============================================================================
// DATA : TIMELINE
// ============================================================================
const timelineData = [
  {
    year: '2020 — 2021',
    title: 'Baccalauréat',
    place: 'Lycée Georges Cabanis, Brive',
    type: 'scolaire',
    description: 'Baccalauréat général — Maths et Physique-Chimie, Mention AB.',
  },
  {
    year: '2021 — 2023',
    title: 'BUT GEMA',
    place: 'IUT du Limousin, Limoges',
    type: 'scolaire',
    description: 'Bachelor Universitaire de Technologie en Gestion, Entrepreneuriat et Management.',
  },
  {
    year: 'Janv. — Fév. 2022',
    title: 'Stage — SNCF',
    place: 'Poitiers',
    type: 'pro',
    description: 'Stage de découverte au sein de la SNCF.',
  },
  {
    year: '2024 — 2026',
    title: 'BTS SIO option SLAM',
    place: 'Lycée Suzanne Valadon, Limoges',
    type: 'scolaire',
    description: 'Services Informatiques aux Organisations, spécialité Solutions Logicielles et Applications Métiers.',
  },
  {
    year: 'Mai — Juin 2025',
    title: 'Stage — Conseil départemental de la Corrèze',
    place: 'Tulle',
    type: 'pro',
    description: 'Stage au service informatique du Conseil départemental.',
    projectId: 'observatoire-bdd',
    linkText: 'Voir le projet (BDD)',
  },
  {
    year: 'Janv. — Fév. 2026',
    title: 'Stage — Conseil départemental de la Corrèze',
    place: 'Tulle',
    type: 'pro',
    description: 'Second stage au service informatique du Conseil départemental.',
    projectId: 'observatoire-etl',
    linkText: 'Voir le projet (ETL)',
  },
  {
    year: 'À partir de Sept. 2026',
    title: 'B3 Développeur en Intelligence Artificielle',
    place: 'ECE, Bordeaux',
    type: 'scolaire',
    description: 'Poursuite d\'études (formation en alternance).',
  },
  {
    year: 'À partir de Sept. 2026',
    title: 'Alternance — Conseil départemental de la Corrèze',
    place: 'Tulle',
    type: 'pro',
    description: 'Contrat d\'apprentissage au sein du service informatique.',
  },
]

const itemVariants = {
  hidden: (side) => ({ opacity: 0, x: side === 'left' ? -40 : 40 }),
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function TimelineCard({ item }) {
  return (
    <div
      className="max-w-sm rounded-xl border p-5 transition-shadow duration-300 hover:shadow-lg bg-surface relative z-10"
      style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
    >
      <span
        className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
        style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
      >
        {item.year}
      </span>
      <h3 className="mt-2 text-base font-bold leading-snug" style={{ color: 'var(--color-text)' }}>
        {item.title}
      </h3>
      {item.place && (
        <p className="mt-0.5 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          📍 {item.place}
        </p>
      )}
      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {item.description}
      </p>
      {item.projectId && (
        <button
          onClick={() => {
            const el = document.getElementById('projets')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent('openProject', { detail: item.projectId }))
            }, 300)
          }}
          className="mt-4 inline-block text-sm font-semibold transition-all hover:underline cursor-pointer"
          style={{ color: 'var(--color-accent)', background: 'none', border: 'none', padding: 0 }}
        >
          {item.linkText || 'Voir le projet'} {'->'}
        </button>
      )}
    </div>
  )
}

// ============================================================================
// DATA : SKILLS
// ============================================================================
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
    title: 'Modèles IA',
    icon: IAIcon,
    techs: [
      { name: 'Gemini', src: "data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CclipPath id='c'%3E%3Cpath d='M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z'/%3E%3C/clipPath%3E%3Cfilter id='f'%3E%3CfeGaussianBlur stdDeviation='2.5'/%3E%3C/filter%3E%3C/defs%3E%3Cg clip-path='url(%23c)'%3E%3Cg filter='url(%23f)'%3E%3Cpolygon points='-24,-24 48,-24 12,12' fill='%23EA4335'/%3E%3Cpolygon points='48,-24 48,48 12,12' fill='%234285F4'/%3E%3Cpolygon points='-24,48 48,48 12,12' fill='%2334A853'/%3E%3Cpolygon points='-24,-24 -24,48 12,12' fill='%23FBBC05'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" },
      { name: 'Claude Code', src: 'https://cdn.simpleicons.org/claude' },
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

// ============================================================================
// MAIN COMPONENT : JOURNEY (Timeline + Skills merged)
// ============================================================================
export default function JourneySection() {
  const { theme } = useTheme()
  const [selectedSkill, setSelectedSkill] = useState(null)

  const [radius, setRadius] = useState(300)
  const [isMobile, setIsMobile] = useState(false)

  // Refs pour mesurer les positions réelles dans le DOM
  const wrapperRef = useRef(null)
  const timelineContentRef = useRef(null)
  const radialCenterRef = useRef(null)
  const [linePath, setLinePath] = useState('')

  // Gestion responsive
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      setIsMobile(w < 768)
      if (w < 640) setRadius(120)
      else if (w < 1024) setRadius(220)
      else setRadius(300)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calcul de la ligne de connexion Timeline → Skills
  // Utilise offsetTop/offsetHeight qui sont relatifs au parent positionné (le wrapper)
  const [lineCoords, setLineCoords] = useState({ startY: 0, endY: 0 })
  useEffect(() => {
    const computeLine = () => {
      const wrapper = wrapperRef.current
      const timeline = timelineContentRef.current
      const radial = radialCenterRef.current
      if (!wrapper || !timeline || !radial) return

      // offsetTop est relatif au offsetParent. On calcule la position
      // relative au wrapper en remontant la chaîne des offsetParent.
      const getOffsetRelativeTo = (el, ancestor) => {
        let top = 0, left = 0
        let current = el
        while (current && current !== ancestor) {
          top += current.offsetTop
          left += current.offsetLeft
          current = current.offsetParent
        }
        return { top, left }
      }

      const tlPos = getOffsetRelativeTo(timeline, wrapper)
      const rdPos = getOffsetRelativeTo(radial, wrapper)

      // Point de départ : haut de la timeline, centré horizontalement
      const startX = isMobile
        ? tlPos.left + 24
        : tlPos.left + timeline.offsetWidth / 2
      const startY = tlPos.top

      // Point intermédiaire : bas de la timeline
      const midY = tlPos.top + timeline.offsetHeight

      // Point d'arrivée : centre exact du conteneur radial
      const endX = rdPos.left + radial.offsetWidth / 2
      const endY = rdPos.top + radial.offsetHeight / 2

      // Stocker les Y pour le gradient
      setLineCoords({ startY, endY })

      // Construire le path
      if (isMobile) {
        setLinePath(`M ${startX} ${startY} L ${startX} ${midY} Q ${startX} ${midY + 60} ${endX} ${endY}`)
      } else {
        setLinePath(`M ${startX} ${startY} L ${startX} ${midY} L ${endX} ${endY}`)
      }
    }

    // Recalculer à plusieurs moments pour s'assurer que le DOM est stable
    const t1 = setTimeout(computeLine, 100)
    const t2 = setTimeout(computeLine, 500)
    const t3 = setTimeout(computeLine, 1500)
    window.addEventListener('resize', computeLine)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      window.removeEventListener('resize', computeLine)
    }
  }, [isMobile, radius])

  // Empêcher le scroll quand une carte skill est ouverte
  useEffect(() => {
    if (selectedSkill !== null) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedSkill])

  return (
    <div ref={wrapperRef} className="w-full flex flex-col relative">

      {/* ========================================= */}
      {/*  LIGNE DE CONNEXION GLOBALE (SVG absolu)  */}
      {/*  Vit sur le wrapper, traverse les sections */}
      {/* ========================================= */}
      {linePath && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 0, overflow: 'visible' }}
        >
          <defs>
            {/*
              gradientUnits="userSpaceOnUse" : les coordonnées y1/y2 sont en pixels absolus
              dans le SVG, pas en % de la bounding box du path. Ça règle le bug Firefox.
              style={{ stopColor }} au lieu de stopColor="..." : Firefox ne résout pas
              var() dans les attributs SVG de présentation, mais le fait dans les styles CSS.
            */}
            <linearGradient
              id="connectionGrad"
              gradientUnits="userSpaceOnUse"
              x1="0" y1={lineCoords.startY}
              x2="0" y2={lineCoords.endY}
            >
              <stop offset="0%"   style={{ stopColor: 'var(--color-border)' }} />
              <stop offset="70%"  style={{ stopColor: 'var(--color-border)' }} />
              <stop offset="100%" style={{ stopColor: 'var(--color-accent)' }} />
            </linearGradient>
          </defs>
          <motion.path
            d={linePath}
            fill="none"
            strokeWidth="2"
            stroke="url(#connectionGrad)"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </svg>
      )}

      {/* ========================================= */}
      {/*             PARTIE 1 : TIMELINE           */}
      {/* ========================================= */}
      <section id="parcours" className="mx-auto mt-20 max-w-4xl px-4 pt-10 relative z-10 w-full">
        {/* Header Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold sm:text-5xl" style={{ color: 'var(--color-text)' }}>
            Mon <span style={{ color: 'var(--color-accent)' }}>Parcours</span>
          </h2>
          <div className="mx-auto mt-4 flex items-center justify-center gap-6">
            <span className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} /> Scolaire
            </span>
            <span className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              <span className="inline-block h-3 w-3 rounded-full border-2" style={{ borderColor: 'var(--color-accent)', backgroundColor: 'transparent' }} /> Professionnel
            </span>
          </div>
        </motion.div>

        {/* Timeline Content */}
        <div ref={timelineContentRef} className="relative pb-10">
          {/* La ligne statique est remplacée par le SVG global au-dessus */}

          <div className="flex flex-col gap-8">
            {timelineData.map((item, i) => {
              const isLeft = item.type === 'scolaire'
              const side = isLeft ? 'left' : 'right'

              return (
                <motion.div
                  key={i}
                  custom={side}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="relative flex items-start md:items-center"
                >
                  {/* Desktop layout */}
                  <div className="hidden w-full md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">
                    <div className={`flex ${isLeft ? 'justify-end' : ''}`}>{isLeft && <TimelineCard item={item} />}</div>
                    <div className="relative flex items-center justify-center">
                      <div
                        className="z-10 h-4 w-4 rounded-full border-2 shadow-sm"
                        style={{
                          borderColor: 'var(--color-accent)',
                          backgroundColor: item.type === 'scolaire' ? 'var(--color-accent)' : 'var(--color-bg)',
                        }}
                      />
                    </div>
                    <div className={`flex ${!isLeft ? 'justify-start' : ''}`}>{!isLeft && <TimelineCard item={item} />}</div>
                  </div>

                  {/* Mobile layout */}
                  <div className="flex w-full items-start gap-4 md:hidden">
                    <div className="relative z-10 mt-2 flex-shrink-0">
                      <div
                        className="h-3.5 w-3.5 rounded-full border-2 shadow-sm"
                        style={{
                          borderColor: 'var(--color-accent)',
                          backgroundColor: item.type === 'scolaire' ? 'var(--color-accent)' : 'var(--color-bg)',
                          marginLeft: '10px',
                        }}
                      />
                    </div>
                    <TimelineCard item={item} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/*             PARTIE 2 : SKILLS             */}
      {/* ========================================= */}
      <section id="skills" className="relative py-10 px-6 flex flex-col items-center w-full z-0">

        {/* Header Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center relative z-10"
        >
          <h2 className="text-4xl font-extrabold sm:text-5xl" style={{ color: 'var(--color-text)' }}>
            Skills & <span style={{ color: 'var(--color-accent)' }}>Compétences</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Cliquez sur une catégorie pour découvrir les technologies que j'utilise.
          </p>
        </motion.div>

        {/* Espace Radiale (où vivent les cartes et le SVG) */}
        <div
          ref={radialCenterRef}
          className="relative w-full flex-1 flex items-center justify-center transition-all duration-300 z-10"
          style={{ minHeight: `${radius * 2 + 100}px` }}
        >
          {/* Lignes SVG (Arrière-plan, centrées sur cet espace radial) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--color-border)" />
                <stop offset="100%" stopColor="var(--color-accent)" />
              </linearGradient>
            </defs>



            {/* Sous-SVG pour l'explosion radiale, définit le (0,0) exactement au centre */}
            <svg x="50%" y="50%" style={{ overflow: 'visible' }}>

              {/* Les 6 branches de l'arbre */}
              {skills.map((_, i) => {
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
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                  />
                )
              })}

              {/* Cœur de l'explosion */}
              <motion.circle
                cx="0" cy="0" r="6"
                fill="var(--color-accent)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '200px' }}
                transition={{ delay: 0.2, duration: 0.3, type: 'spring' }}
              />
            </svg>
          </svg>

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
                transition={{ delay: 0.6 + i * 0.08, duration: 0.4, type: 'spring' }}
              >
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
                          className="absolute inset-0 [backface-visibility:hidden] rounded-2xl border-2 flex flex-col items-center justify-center gap-2 md:gap-3 transition-colors duration-300 group hover:border-[var(--color-accent)] hover:shadow-[0_0_20px_var(--color-accent)]"
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
      </section>

      {/* Overlay Flip Card (Commune aux Skills) */}
      <AnimatePresence>
        {selectedSkill !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
            />
            <motion.div
              layoutId={`card-${selectedSkill}`}
              className="w-full max-w-lg h-[450px] sm:h-[400px] rounded-2xl relative z-10 shadow-2xl"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="w-full h-full relative [transform-style:preserve-3d]"
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 180 }}
                exit={{ rotateY: 0 }}
                transition={{ duration: 0.6, type: 'spring', bounce: 0.2 }}
              >
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
                  <div className="flex flex-wrap gap-3 overflow-y-auto content-start flex-1 p-4 -m-4 scrollbar-thin">
                    {skills[selectedSkill].techs.map(tech => (
                      <div
                        key={tech.name}
                        className="group flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-border)' }}
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
    </div>
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
