import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  // Close on Escape
  useEffect(() => {
    if (!project) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 pt-12 pb-12"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal content — scrollable within the overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 my-auto w-full max-w-3xl rounded-2xl border shadow-2xl"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            {/* Accent bar */}
            <div
              className="h-1.5 w-full rounded-t-2xl"
              style={{ backgroundColor: 'var(--color-accent)' }}
            />

            <div className="p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-6 flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: 'var(--color-bg-alt)',
                  color: 'var(--color-text-secondary)',
                }}
                aria-label="Fermer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Category badge */}
              <span
                className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: 'var(--color-accent-light)',
                  color: 'var(--color-accent)',
                }}
              >
                {project.category}
              </span>

              {/* Title */}
              <h2
                className="mb-2 text-2xl font-extrabold sm:text-3xl"
                style={{ color: 'var(--color-text)' }}
              >
                {project.title}
              </h2>

              {/* Context */}
              <p
                className="mb-6 text-sm font-medium"
                style={{ color: 'var(--color-accent)' }}
              >
                {project.context}
              </p>

              {/* Description */}
              <div className="mb-6">
                <h3
                  className="mb-2 text-sm font-bold uppercase tracking-wider"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Description
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--color-text)' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Missions */}
              <div className="mb-6">
                <h3
                  className="mb-3 text-sm font-bold uppercase tracking-wider"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Missions réalisées
                </h3>
                <ul className="space-y-2">
                  {project.missions.map((mission, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: 'var(--color-accent)' }}
                      />
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: 'var(--color-text)' }}
                      >
                        {mission}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: 'var(--color-accent-light)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* PDF Viewer */}
              {project.pdfUrl && (
                <div className="mt-6">
                  <h3
                    className="mb-3 text-sm font-bold uppercase tracking-wider"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Documentation technique
                  </h3>
                  <div
                    className="overflow-hidden rounded-xl border"
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    <iframe
                      src={project.pdfUrl}
                      title={`Documentation - ${project.title}`}
                      className="h-[600px] w-full"
                      style={{ backgroundColor: '#fff' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
