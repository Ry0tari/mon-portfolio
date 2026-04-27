import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const tools = [
  {
    name: 'Daily.dev',
    description: 'Agrégateur communautaire pour une veille quotidienne sur le développement et l\'IA.',
    iconUrl: '/daily_dev.svg',
  },
  {
    name: 'Feedly',
    description: 'Outil de flux RSS pour le suivi ciblé de sources expertes (Anthropic, OpenAI, Hugging Face, etc.).',
    iconUrl: 'https://cdn.simpleicons.org/feedly',
  },
]

const axes = [
  {
    id: 'modeles-ia',
    title: 'Modèles IA',
    description: 'Suivi des avancées des LLM/SLM, de l\'Open Source (Mistral, LLaMA) et des capacités de raisonnement des modèles.'
  },
  {
    id: 'slam',
    title: 'Impact de l\'IA sur le développement',
    description: 'Analyse de la transition vers le "Prompt Engineering" et l\'utilisation d\'assistants intelligents (Cursor, Claude Code).'
  },
  {
    id: 'data',
    title: 'Impact des modèles IA sur la Data',
    description: 'Focus sur la préparation des données, les bases de données vectorielles et les architectures RAG.'
  }
]

const articles = [
  {
    id: 'agentic-ai',
    axisId: 'slam',
    title: 'Software Engineering in the Agentic AI Era',
    subtheme: "L'avènement des IA agentiques et l'exemple de Devin AI.",
    source: 'Scott Logic',
    description: "Cet article explore le changement de paradigme apporté par l'IA agentique dans le cycle de développement logiciel. Contrairement aux simples générateurs de code réactifs (Copilots), les agents IA agissent comme des contributeurs proactifs capables de configurer des environnements, de générer des tests et de déboguer de manière autonome.",
    analysis: "Le métier de développeur ne disparaît pas, mais évolue vers un rôle d'orchestrateur. L'automatisation des tâches procédurales permet au developpeur de se concentrer sur l'architecture, la sécurité et la logique métier complexe. De plus, cela met en évidence l'importance vitale du \"Prompt Engineering\"",
    url: 'https://blog.scottlogic.com/2026/03/02/software-engineering-in-the-agentic-ai-era.html?ref=dailydev'
  },
  {
    id: 'context-window',
    axisId: 'modeles-ia',
    title: 'The lifecycle of a context window',
    subtheme: 'La gestion du contexte et de la mémoire dans les architectures LLM.',
    source: 'Anthropic Blog',
    description: "Ce billet technique détaille le fonctionnement de la fenêtre de contexte des modèles de langage (LLM) et les stratégies pour gérer efficacement cette \"mémoire à court terme\". Il aborde les défis techniques liés à la perte d'informations lorsque la limite de tokens est atteinte, ainsi que les méthodes pour structurer les requêtes afin de maintenir l'attention du modèle sur les instructions critiques.",
    analysis: "La maîtrise du \"Context Management\" est devenue une compétence technique majeure pour éviter que mon application ne génère des incohérences ou n'explose les coûts liés aux tokens.",
    url: 'https://claude.com/blog/context-management'
  },
  {
    id: 'vector-rag',
    axisId: 'data',
    title: 'Vector Databases vs. Graph RAG for Agent Memory',
    subtheme: 'Comparaison des architectures de stockage pour la mémoire des agents.',
    source: 'Machine Learning Mastery',
    description: "L'article propose une étude comparative approfondie entre les bases de données vectorielles traditionnelles et la nouvelle approche \"Graph RAG\" pour doter les agents IA d'une mémoire à long terme. Il explique comment la recherche sémantique pure peut manquer de contexte relationnel, un problème que les graphes de connaissances viennent résoudre en cartographiant les liens explicites entre les entités métier.",
    analysis: "Les bases de données vectorielles sont très efficaces, mais elles manquent de contexte relationnel, ce qui peut entraîner des hallucinations. Les graphes de connaissances, quant à eux, permettent de cartographier les liens explicites entre les entités métier, ce qui améliore la fiabilité et réduit les hallucinations.",
    url: 'https://machinelearningmastery.com/vector-databases-vs-graph-rag-for-agent-memory-when-to-use-which/'
  }
]

export default function VeilleSection() {
  const { theme } = useTheme()

  return (
    <section id="veille" className="relative py-24 px-6 mb-16">
      <div className="mx-auto max-w-5xl">

        {/* Header Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-extrabold sm:text-5xl" style={{ color: 'var(--color-text)' }}>
            Veille <span style={{ color: 'var(--color-accent)' }}>Informatique</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg" style={{ color: 'var(--color-text-secondary)' }}>
            Les outils, thématiques et articles que j'analyse pour rester à la pointe des technologies.
          </p>
        </motion.div>

        {/* --- PARTIE 1 : OUTILS --- */}
        <div className="mb-16">
          <h3 className="mb-6 border-b pb-2 text-2xl font-bold" style={{ color: 'var(--color-text)', borderColor: 'var(--color-border)' }}>
            Méthodologie et Outils
          </h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-2xl border p-6 text-center sm:text-left transition-shadow duration-300 hover:shadow-lg"
                style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
              >
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl overflow-hidden p-2.5"
                  style={{ backgroundColor: 'var(--color-bg)' }}
                >
                  <img
                    src={tool.iconUrl}
                    alt={tool.name}
                    className="h-full w-full object-contain"
                    style={{ filter: theme === 'dark' && tool.invertDark ? 'invert(1) brightness(1.5)' : 'none' }}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold" style={{ color: 'var(--color-text)' }}>
                    {tool.name}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {tool.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- PARTIE 2 : AXES & ARTICLES --- */}
        <div>
          <h3 className="mb-8 border-b pb-2 text-2xl font-bold" style={{ color: 'var(--color-text)', borderColor: 'var(--color-border)' }}>
            Axes de Recherche & Articles Récents
          </h3>

          <div className="flex flex-col gap-14">
            {axes.map((axe, index) => {
              const axisArticles = articles.filter(a => a.axisId === axe.id)

              return (
                <motion.div
                  key={axe.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="flex flex-col gap-6"
                >
                  {/* Carte d'Axe de Recherche */}
                  <div className="rounded-2xl border p-6 sm:p-8" style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
                    <h4 className="mb-3 text-xl font-bold" style={{ color: 'var(--color-accent)' }}>
                      {axe.title}
                    </h4>
                    <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {axe.description}
                    </p>
                  </div>

                  {/* Articles liés à cet axe */}
                  {axisArticles.length > 0 && (
                    <div className="flex flex-col gap-4 pl-0 sm:pl-10 border-none sm:border-l-4" style={{ borderColor: 'var(--color-border)' }}>
                      {axisArticles.map((article, i) => (
                        <ArticleCard key={article.id} article={article} index={i} />
                      ))}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

function ArticleCard({ article, index }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="overflow-hidden rounded-2xl border transition-shadow duration-300 hover:shadow-lg"
      style={{ backgroundColor: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
    >
      {/* Clickable Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5"
      >
        <div className="flex-1 pr-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ backgroundColor: 'var(--color-accent-light)', color: 'var(--color-accent)' }}
            >
              {article.source}
            </span>
            <span className="text-xs font-medium" style={{ color: 'var(--color-text-secondary)' }}>
              • {article.subtheme}
            </span>
          </div>
          <h4 className="text-xl font-bold leading-snug" style={{ color: 'var(--color-text)' }}>
            {article.title}
          </h4>
        </div>

        {/* Chevron */}
        <div
          className="flex h-10 w-10 shrink-0 self-start sm:self-auto items-center justify-center rounded-full transition-transform duration-300"
          style={{ backgroundColor: 'var(--color-bg)', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* Accordion Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <div className="border-t p-5 sm:p-6" style={{ borderColor: 'var(--color-border)' }}>

              <p className="mb-6 text-sm leading-relaxed sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                <strong>Résumé :</strong> {article.description}
              </p>

              <div className="mb-6 rounded-xl p-5 border-l-4" style={{ backgroundColor: 'var(--color-bg)', borderColor: 'var(--color-accent)' }}>
                <h5 className="mb-2 font-bold" style={{ color: 'var(--color-text)' }}>Ce que j'en ai tiré</h5>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  {article.analysis}
                </p>
              </div>

              <div className="flex justify-end">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  Lire l'article original
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
