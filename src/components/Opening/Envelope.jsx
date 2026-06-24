import { motion, AnimatePresence } from 'framer-motion'

export default function Envelope({ visible, onClick }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="envelope"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.5, transition: { duration: 0.6 } }}
          transition={{ duration: 1, delay: 0.3 }}
          onClick={onClick}
          style={{
            position: 'fixed',
            bottom: '18vh',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          <motion.svg
            width="72"
            height="52"
            viewBox="0 0 72 52"
            fill="none"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          >
            {/* Envelope body */}
            <rect
              x="2"
              y="10"
              width="68"
              height="40"
              rx="4"
              fill="none"
              stroke="var(--warm-gold)"
              strokeWidth="1.5"
            />
            {/* Flap */}
            <path
              d="M2 14 L36 34 L70 14"
              fill="none"
              stroke="var(--warm-gold)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Bottom fold lines */}
            <path
              d="M2 50 L28 32"
              fill="none"
              stroke="var(--warm-gold-dim)"
              strokeWidth="1"
            />
            <path
              d="M70 50 L44 32"
              fill="none"
              stroke="var(--warm-gold-dim)"
              strokeWidth="1"
            />
            {/* Small heart */}
            <text
              x="36"
              y="30"
              textAnchor="middle"
              fontSize="10"
              fill="var(--soft-pink)"
              style={{ pointerEvents: 'none' }}
            >
              ♥
            </text>
          </motion.svg>

          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{
              fontSize: '0.85rem',
              color: 'var(--warm-gold-dim)',
              letterSpacing: '0.2em',
              fontWeight: 300,
            }}
          >
            Nhấn vào để mở
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
