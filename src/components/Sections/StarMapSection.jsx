import { motion } from 'framer-motion'
import ScrollReveal from '../shared/ScrollReveal'

export default function StarMapSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      {/* Star map circle */}
      <ScrollReveal>
        <div
          style={{
            position: 'relative',
            width: 'min(320px, 70vw)',
            height: 'min(320px, 70vw)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto clamp(24px, 5vw, 40px)',
          }}
        >
          {/* Glow ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: '-12px',
              borderRadius: '50%',
              border: '1px solid var(--warm-gold-dim)',
              opacity: 0.3,
            }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: '-28px',
              borderRadius: '50%',
              border: '1px dashed var(--soft-pink-dim)',
              opacity: 0.2,
            }}
          />

          {/* Star map visual */}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(244,201,122,0.08) 0%, transparent 70%)',
              border: '1px solid var(--warm-gold-dim)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '8px',
              backdropFilter: 'blur(2px)',
            }}
          >
            <span
              style={{
                fontSize: '2.4rem',
                opacity: 0.7,
                letterSpacing: '0.1em',
              }}
            >
              ✦ ✦ ✦
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
                color: 'var(--warm-gold)',
                fontStyle: 'italic',
              }}
            >
              Chúc mừng sinh nhật
            </span>
          </div>
        </div>
      </ScrollReveal>

      {/* Date */}
      <ScrollReveal delay={0.2}>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1rem, 3vw, 1.6rem)',
            color: 'var(--warm-gold)',
            letterSpacing: '0.12em',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          2025.03.11
        </p>
      </ScrollReveal>

      {/* First message */}
      <ScrollReveal delay={0.35}>
        <p
          style={{
            fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
            color: 'var(--text-dim)',
            maxWidth: '500px',
            textAlign: 'center',
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Nhớ lại khoảnh khắc chúng ta quen nhau, việc biết em sắp sang đất nước anh để học thạc sĩ tại Đại học Thanh Hoa thực sự làm anh quá đỗi kinh ngạc!
        </p>
      </ScrollReveal>
    </section>
  )
}
