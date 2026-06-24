import { useState, useEffect, useRef } from 'react'

export function useTypewriter(text, speed = 60, startDelay = 0, enabled = true) {
  const [displayed, setDisplayed] = useState('')
  const [isDone, setIsDone] = useState(false)
  const indexRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!enabled) return

    setDisplayed('')
    setIsDone(false)
    indexRef.current = 0

    const startTimeout = setTimeout(() => {
      timerRef.current = setInterval(() => {
        indexRef.current++
        if (indexRef.current >= text.length) {
          setDisplayed(text)
          setIsDone(true)
          clearInterval(timerRef.current)
        } else {
          setDisplayed(text.slice(0, indexRef.current))
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(startTimeout)
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [text, speed, startDelay, enabled])

  return { displayed, isDone }
}
