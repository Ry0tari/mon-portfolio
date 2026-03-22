import { motion } from 'framer-motion'

const tools = [
  {
    name: 'Feedly',
    description:
      'Agrégateur de flux RSS permettant de centraliser mes sources d\'information tech.',
    icon: RssIcon,
  },
  {
    name: 'Google Alerts',
    description:
      'Alertes personnalisées pour rester informé des dernières publications.',
    icon: BellIcon,
  },
]

const topics = [
  'Intelligence Artificielle',
  'Large Language Models (LLM)',
  'Machine Learning',
  'Cybersécurité',
  'Développement Web',
  'Cloud Computing',
  'Open Source',
  'IoT',
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

export default function VeilleSection() {
  return (
    <section id="veille" className="relative py-24 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h2
            className="text-4xl font-extrabold sm:text-5xl"
            style={{ color: 'var(--color-text)' }}
          >
            Veille{' '}
            <span style={{ color: 'var(--color-accent)' }}>Informatique</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Les outils et thématiques que je surveille pour rester à la pointe
            de la technologie.
          </p>
        </motion.div>

        {/* Tools */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {tools.map((tool, i) => {
            const Icon = tool.icon
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: 'var(--color-accent-light)',
                    color: 'var(--color-accent)',
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <h3
                    className="text-base font-bold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {tool.name}
                  </h3>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3
            className="mb-6 text-lg font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            Thématiques suivies
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {topics.map((topic) => (
              <motion.span
                key={topic}
                variants={tagVariants}
                whileHover={{ scale: 1.08, y: -2 }}
                className="cursor-default rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200"
                style={{
                  borderColor: 'var(--color-accent)',
                  color: 'var(--color-accent)',
                  backgroundColor: 'var(--color-accent-light)',
                }}
              >
                {topic}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Icons ─── */

function RssIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11a9 9 0 019 9" />
      <path d="M4 4a16 16 0 0116 16" />
      <circle cx="5" cy="19" r="1" />
    </svg>
  )
}

function BellIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  )
}
