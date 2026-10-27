import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

// Clé partagée avec le script inline de index.html
const STORAGE_KEY = 'theme'
const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

export function ThemeProvider({ children }) {
  // Choix explicite du visiteur, sinon thème du système
  const [theme, setTheme] = useState(
    () => localStorage.getItem(STORAGE_KEY) || (darkQuery().matches ? 'dark' : 'light')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Suit les changements du thème système tant que le visiteur n'a rien choisi
  useEffect(() => {
    const media = darkQuery()
    const handleChange = (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) setTheme(e.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', handleChange)
    return () => media.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    localStorage.setItem(STORAGE_KEY, next)
    setTheme(next)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
