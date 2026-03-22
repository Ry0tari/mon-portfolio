import { useState, useEffect, useCallback } from 'react'

export function useTypewriter(phrases, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1800) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentPhrase = phrases[phraseIndex]

    if (!isDeleting) {
      // Typing
      if (charIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      } else {
        // Done typing, pause then delete
        setTimeout(() => setIsDeleting(true), pauseTime)
        return
      }
    } else {
      // Deleting
      if (charIndex > 0) {
        setDisplayText(currentPhrase.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        // Done deleting, move to next phrase
        setIsDeleting(false)
        setPhraseIndex(prev => (prev + 1) % phrases.length)
      }
    }
  }, [phrases, phraseIndex, charIndex, isDeleting, pauseTime])

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, typingSpeed, deletingSpeed])

  return { displayText, isDeleting }
}
