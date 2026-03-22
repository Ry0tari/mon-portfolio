import { useState } from 'react'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:kevin.labarde@example.com',
    icon: EmailIcon,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: LinkedInIcon,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Ry0tari',
    icon: GitHubIcon,
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Pour l'instant on simule l'envoi
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 px-6">
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
            Me{' '}
            <span style={{ color: 'var(--color-accent)' }}>Contacter</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-lg text-lg"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Une question, une proposition ou simplement envie d'échanger ?
            N'hésitez pas !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto]">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 rounded-2xl border p-8"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                  '--tw-ring-color': 'var(--color-accent)',
                }}
                placeholder="Votre nom"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                  '--tw-ring-color': 'var(--color-accent)',
                }}
                placeholder="votre@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2"
                style={{
                  backgroundColor: 'var(--color-bg)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                  '--tw-ring-color': 'var(--color-accent)',
                }}
                placeholder="Votre message..."
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-full py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300"
              style={{ backgroundColor: 'var(--color-accent)' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  'var(--color-accent-hover)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  'var(--color-accent)')
              }
            >
              {submitted ? '✓ Message envoyé !' : 'Envoyer le message'}
            </motion.button>
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center justify-center gap-5 md:items-start"
          >
            <p
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Ou retrouvez-moi sur
            </p>

            {socialLinks.map(({ name, href, icon: Icon }) => (
              <motion.a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4, scale: 1.05 }}
                className="flex items-center gap-3 rounded-xl border px-5 py-3 transition-shadow duration-200 hover:shadow-md"
                style={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
              >
                <span style={{ color: 'var(--color-accent)' }}>
                  <Icon size={20} />
                </span>
                <span className="text-sm font-medium">{name}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Icons ─── */

function EmailIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LinkedInIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GitHubIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}
