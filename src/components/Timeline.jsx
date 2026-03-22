import { motion } from 'framer-motion'

const timelineData = [
  {
    year: '2024 — Présent',
    title: 'BTS SIO option SLAM',
    place: 'Lycée Suzanne Valadon, Limoges',
    type: 'scolaire',
    description:
      'Services Informatiques aux Organisations, spécialité Solutions Logicielles et Applications Métiers.',
  },
  {
    year: 'Janv. — Fév. 2026',
    title: 'Stage — Conseil départemental de la Corrèze',
    place: 'Tulle',
    type: 'pro',
    description:
      'Second stage au service informatique du Conseil départemental.',
  },
  {
    year: 'Mai — Juin 2025',
    title: 'Stage — Conseil départemental de la Corrèze',
    place: 'Tulle',
    type: 'pro',
    description:
      'Stage au service informatique du Conseil départemental.',
  },
  {
    year: '2021 — 2023',
    title: 'BUT GEMA',
    place: 'IUT du Limousin, Limoges',
    type: 'scolaire',
    description:
      'Bachelor Universitaire de Technologie en Gestion, Entrepreneuriat et Management.',
  },
  {
    year: 'Janv. — Fév. 2022',
    title: 'Stage — SNCF',
    place: 'Poitiers',
    type: 'pro',
    description: 'Stage de découverte au sein de la SNCF.',
  },
  {
    year: '2020 — 2021',
    title: 'Baccalauréat',
    place: 'Lycée Georges Cabanis, Brive',
    type: 'scolaire',
    description: 'Baccalauréat général — Maths et Physique-Chimie, Mention AB.',
  },
]

const itemVariants = {
  hidden: (side) => ({
    opacity: 0,
    x: side === 'left' ? -40 : 40,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Timeline() {
  return (
    <div className="mx-auto mt-20 max-w-4xl px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2
          className="text-4xl font-extrabold sm:text-5xl"
          style={{ color: 'var(--color-text)' }}
        >
          Mon{' '}
          <span style={{ color: 'var(--color-accent)' }}>Parcours</span>
        </h2>
        <div className="mx-auto mt-4 flex items-center justify-center gap-6">
          <span className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
            Scolaire
          </span>
          <span className="flex items-center gap-2 text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="inline-block h-3 w-3 rounded-full border-2" style={{ borderColor: 'var(--color-accent)', backgroundColor: 'transparent' }} />
            Professionnel
          </span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Central line */}
        <div
          className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 md:block"
          style={{ backgroundColor: 'var(--color-border)' }}
        />
        {/* Mobile line */}
        <div
          className="absolute left-6 top-0 h-full w-0.5 md:hidden"
          style={{ backgroundColor: 'var(--color-border)' }}
        />

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
                  {/* Left column */}
                  <div className={`flex ${isLeft ? 'justify-end' : ''}`}>
                    {isLeft && <TimelineCard item={item} />}
                  </div>

                  {/* Center dot */}
                  <div className="relative flex items-center justify-center">
                    <div
                      className="z-10 h-4 w-4 rounded-full border-2 shadow-sm"
                      style={{
                        borderColor: 'var(--color-accent)',
                        backgroundColor:
                          item.type === 'scolaire'
                            ? 'var(--color-accent)'
                            : 'var(--color-bg)',
                      }}
                    />
                  </div>

                  {/* Right column */}
                  <div className={`flex ${!isLeft ? 'justify-start' : ''}`}>
                    {!isLeft && <TimelineCard item={item} />}
                  </div>
                </div>

                {/* Mobile layout */}
                <div className="flex w-full items-start gap-4 md:hidden">
                  {/* Dot */}
                  <div className="relative z-10 mt-2 flex-shrink-0">
                    <div
                      className="h-3.5 w-3.5 rounded-full border-2 shadow-sm"
                      style={{
                        borderColor: 'var(--color-accent)',
                        backgroundColor:
                          item.type === 'scolaire'
                            ? 'var(--color-accent)'
                            : 'var(--color-bg)',
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
    </div>
  )
}

function TimelineCard({ item }) {
  return (
    <div
      className="max-w-sm rounded-xl border p-5 transition-shadow duration-300 hover:shadow-lg"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <span
        className="mb-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
        style={{
          backgroundColor: 'var(--color-accent-light)',
          color: 'var(--color-accent)',
        }}
      >
        {item.year}
      </span>
      <h3
        className="mt-2 text-base font-bold leading-snug"
        style={{ color: 'var(--color-text)' }}
      >
        {item.title}
      </h3>
      {item.place && (
        <p className="mt-0.5 text-xs" style={{ color: 'var(--color-text-secondary)' }}>
          📍 {item.place}
        </p>
      )}
      <p
        className="mt-2 text-sm leading-relaxed"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        {item.description}
      </p>
    </div>
  )
}
