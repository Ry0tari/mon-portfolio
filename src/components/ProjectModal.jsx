import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])
  return isMobile
}

function ProjectCarousel({ images, isMobileFormat }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images || images.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images])

  if (!images || images.length === 0) return null

  return (
    <div className="w-full">
      <h3
        className="mb-3 text-sm font-bold uppercase tracking-wider"
        style={{ color: 'var(--color-text-secondary)' }}
      >
        Aperçu
      </h3>
      <div 
        className={`relative overflow-hidden rounded-xl border ${isMobileFormat ? 'mx-auto w-full max-w-[350px] lg:max-w-[400px] aspect-[1170/2532]' : 'w-full aspect-video'}`} 
        style={{ backgroundColor: 'var(--color-bg-alt)', borderColor: 'var(--color-border)' }}
      >
        <AnimatePresence>
          <motion.img
            key={index}
            src={images[index]}
            alt="Capture du projet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function ProjectModal({ project, onClose }) {
  const isMobile = useIsMobile()

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

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 my-auto w-full max-w-[95%] lg:max-w-6xl rounded-2xl border shadow-2xl"
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

            <div className="p-5 sm:p-8">
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
                className="mb-2 text-xl font-extrabold sm:text-3xl"
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
                  className="text-sm leading-relaxed sm:text-base"
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

              {/* Conteneur dynamique : côte à côte pour mobile, empilé pour web */}
              <div className={`mt-8 flex flex-col ${project.isMobileFormat ? 'lg:flex-row' : ''} lg:items-start gap-8`}>
                {/* Carousel Section */}
                {project.images && project.images.length > 0 && (
                  <div className={`w-full ${project.isMobileFormat && project.pdfUrl ? 'lg:w-1/2' : ''}`}>
                    <ProjectCarousel images={project.images} isMobileFormat={project.isMobileFormat} />
                  </div>
                )}

                {/* PDF Section */}
                {project.pdfUrl && (
                  <div className={`w-full ${project.isMobileFormat && project.images && project.images.length > 0 ? 'lg:w-1/2' : ''}`}>
                  <h3
                    className="mb-3 text-sm font-bold uppercase tracking-wider"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    Documentation technique
                  </h3>

                  {isMobile ? (
                    /* Mobile: open in new tab */
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-5 text-center transition-colors duration-200"
                      style={{
                        borderColor: 'var(--color-accent)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                      </svg>
                      <span className="text-sm font-semibold">
                        📄 Ouvrir le PDF
                      </span>
                    </a>
                  ) : (
                    /* Desktop: embedded iframe */
                    <div
                      className="overflow-hidden rounded-xl border"
                      style={{ borderColor: 'var(--color-border)' }}
                    >
                      <iframe
                        src={project.pdfUrl}
                        title={`Documentation - ${project.title}`}
                        className="h-[800px] w-full"
                        style={{ backgroundColor: '#fff' }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
    </AnimatePresence>
  )
}
