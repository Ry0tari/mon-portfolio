import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'

const filters = [
  { key: 'tous', label: 'Tous' },
  { key: 'cours', label: 'Cours' },
  { key: 'stage', label: 'Stage' },
]

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('tous')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleOpenProject = (e) => {
      const pid = e.detail
      const proj = projects.find((p) => p.id === pid)
      if (proj) {
        setSelectedProject(proj)
      }
    }
    window.addEventListener('openProject', handleOpenProject)
    return () => window.removeEventListener('openProject', handleOpenProject)
  }, [])

  const filtered =
    activeFilter === 'tous'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projets" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2
            className="text-4xl font-extrabold sm:text-5xl"
            style={{ color: 'var(--color-text)' }}
          >
            Mes{' '}
            <span style={{ color: 'var(--color-accent)' }}>Projets</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Découvrez les projets que j'ai réalisés en cours et en stage.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-10 flex justify-center gap-3"
        >
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className="rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300"
              style={{
                backgroundColor:
                  activeFilter === key
                    ? 'var(--color-accent)'
                    : 'var(--color-surface)',
                color:
                  activeFilter === key ? '#fff' : 'var(--color-text-secondary)',
                border:
                  activeFilter === key
                    ? '1px solid var(--color-accent)'
                    : '1px solid var(--color-border)',
              }}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Project cards grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer overflow-hidden rounded-2xl border transition-shadow duration-300 hover:shadow-xl"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                {/* Color accent bar */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                />

                <div className="p-6">
                  {/* Category badge */}
                  <span
                    className="mb-3 inline-block rounded-full px-3 py-0.5 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      backgroundColor: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3
                    className="mb-2 text-xl font-bold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {project.title}
                  </h3>

                  {/* Context */}
                  <p
                    className="mb-4 text-sm leading-relaxed"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {project.context}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md px-2.5 py-1 text-xs font-medium"
                        style={{
                          backgroundColor: 'var(--color-bg-alt)',
                          color: 'var(--color-text-secondary)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA hint */}
                  <div
                    className="mt-4 flex items-center gap-1 text-sm font-medium opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Voir le détail
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
