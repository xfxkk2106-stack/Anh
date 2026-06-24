import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3, delayChildren: 2.2 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
}

export default function Title() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
        pointerEvents: 'none',
        textAlign: 'center',
        padding: '0 24px',
      }}
    >
      <motion.h1
        variants={fadeUp}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.4rem, 4vw, 2.6rem)',
          fontWeight: 400,
          color: 'var(--warm-gold)',
          letterSpacing: '0.08em',
          lineHeight: 1.6,
        }}
      >
        ✦&nbsp; Chúc mừng sinh nhật, Minh Anh &nbsp;✦
      </motion.h1>

      <motion.p
        variants={fadeUp}
        style={{
          fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
          color: 'var(--text-dim)',
          marginTop: '12px',
          fontWeight: 300,
          letterSpacing: '0.15em',
        }}
      >
        Hôm nay là ngày của riêng em
      </motion.p>
    </motion.div>
  )
}
