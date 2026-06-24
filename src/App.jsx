import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import StarField from './components/Opening/StarField'
import Title from './components/Opening/Title'
import Envelope from './components/Opening/Envelope'
import StarMapSection from './components/Sections/StarMapSection'
import LetterSection from './components/Sections/LetterSection'

export default function App() {
  const [scene, setScene] = useState('opening') // 'opening' | 'transition' | 'main'

  const handleEnvelopeClick = useCallback(() => {
    setScene('transition')
    setTimeout(() => setScene('main'), 1200)
  }, [])

  return (
    <>
      {/* Starfield always renders behind everything */}
      <StarField />

      <AnimatePresence mode="wait">
        {scene === 'opening' && (
          <motion.div
            key="opening"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ position: 'fixed', inset: 0, zIndex: 5 }}
          >
            <Title />
            <Envelope visible onClick={handleEnvelopeClick} />
          </motion.div>
        )}

        {scene === 'transition' && (
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 20,
              background: 'var(--night-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{
                textAlign: 'center',
                color: 'var(--warm-gold)',
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontStyle: 'italic',
              }}
            >
              ✦
            </motion.div>
          </motion.div>
        )}

        {scene === 'main' && (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <StarMapSection />
            <LetterSection />

            {/* Footer */}
            <footer
              style={{
                textAlign: 'center',
                padding: 'clamp(32px, 8vw, 60px) 24px clamp(24px, 5vw, 40px)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{
                  color: 'var(--warm-gold-dim)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  fontWeight: 300,
                }}
              >
                ✦ Bức thư gửi xuyên khoảng cách ✦
              </motion.p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
