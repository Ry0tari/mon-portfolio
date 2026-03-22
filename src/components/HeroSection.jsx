import { motion } from 'framer-motion'
import { useTypewriter } from '../hooks/useTypewriter'

const phrases = [
  'la data analyse',
  'le développement web',
  'la musique',
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
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-3 text-sm font-medium uppercase tracking-[0.25em]"
          style={{ color: 'var(--color-accent)' }}
        >
          Bienvenue sur mon portfolio
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"
          style={{ color: 'var(--color-text)' }}
        >
          Bonjour, je suis{' '}
          <span style={{ color: 'var(--color-accent)' }}>
            Labarde Kévin
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
          Actuellement en BTS Services Informatiques aux Organisations (SIO) option SLAM,
          je suis passionné par la programmation et l'intelligence artificielle.
          Je maîtrise HTML, PHP et Java, et je dispose de solides bases en cybersécurité.
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
        </motion.div>
      </div>
    </section>
  )
}
