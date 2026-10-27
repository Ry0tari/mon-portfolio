import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'

const phrases = [
  'la donnée',
  'le développement web',
  'les modèles IA',
]

export default function HeroSection() {
  const { displayText } = useTypewriter(phrases, 80, 40, 2000)

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl text-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
          style={{ color: 'var(--color-text)' }}
        >
          {' '}
          <span style={{ color: 'var(--color-accent)' }}>
            Kévin Labarde
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="mt-6 text-xl font-light sm:text-2xl"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Je suis passionné par{' '}
          <span className="font-semibold" style={{ color: 'var(--color-accent)' }}>
            {displayText}
          </span>
          <span
            className="ml-0.5 inline-block h-6 w-[2px] translate-y-0.5 animate-blink"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed sm:text-lg"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          Actuellement en B3 Développeur en Intelligence Artificielle à l'ECE Bordeaux,
          en alternance au service informatique du Conseil départemental de la Corrèze.

        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projets"
            className="rounded-full px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: 'var(--color-accent)' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--color-accent-hover)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--color-accent)'}
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="rounded-full border-2 px-8 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'var(--color-accent)',
              color: 'var(--color-accent)',
            }}
          >
            Me contacter
          </a>
          <a
            href="/CV_Kevin_Labarde.pdf"
            download="CV_Kevin_Labarde.pdf"
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:underline"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Télécharger mon CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
