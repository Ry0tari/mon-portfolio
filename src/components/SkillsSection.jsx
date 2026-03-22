import { motion } from 'framer-motion'

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
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2
            className="text-4xl font-extrabold sm:text-5xl"
            style={{ color: 'var(--color-text)' }}
          >
            Skills &{' '}
            <span style={{ color: 'var(--color-accent)' }}>Compétences</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Les domaines dans lesquels je développe mes compétences au quotidien.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((skill, i) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative overflow-hidden rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {/* Glow on hover */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />

                {/* Title row — icon + title side by side */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {skill.title}
                  </h3>
                </div>

                {/* Tech icons */}
                {skill.techs.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-5">
                    {skill.techs.map((tech) => (
                      <div key={tech.name} className="group/icon flex flex-col items-center">
                        <img
                          src={tech.src}
                          alt={tech.name}
                          title={tech.name}
                          className="h-11 w-11 transition-transform duration-200 group-hover/icon:scale-110"
                          loading="lazy"
                        />
                        <span
                          className="mt-1.5 text-[11px] font-semibold opacity-0 transition-opacity duration-200 group-hover/icon:opacity-100"
                          style={{ color: 'var(--color-text-secondary)' }}
                        >
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p
                    className="text-sm italic"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {skill.placeholder}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Inline SVG Icons ─── */

function FrontEndIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function BackEndIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}

function MobileIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  )
}

function DataIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}
