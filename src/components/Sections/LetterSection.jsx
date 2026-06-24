import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTypewriter } from '../../hooks/useTypewriter'
import ScrollReveal from '../shared/ScrollReveal'
import bgImage from '../../assets/mmexport1767202936436.jpg'
import img1 from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'

const LETTER_TEXT = `Đã hơn 3 tháng trôi qua kể từ lần cuối chúng ta trò chuyện. Dù khoảng thời gian giao tiếp khá ngắn ngủi, nhưng một cô gái xinh đẹp, thông minh và siêu thích ăn trái cây như em thật sự đã để lại trong anh ấn tượng vô cùng sâu sắc!

Nhờ có em mà anh biết thêm được bao điều thú vị về văn hóa Việt Nam. Đất nước vốn dĩ xa lạ ấy giờ đây đã trở nên thật sinh động và gần gũi trong tâm trí anh. Anh vẫn nhớ những lúc mình bập bẹ học tiếng Việt, nhớ cả ước mơ mở một tiệm bánh/quán cà phê của em (đừng quên chiếc thẻ VVIP dành cho anh đấy nhé!). Mỗi khoảnh khắc trò chuyện cùng em đều mang lại cho anh cảm giác thật thoải mái và dễ chịu, tựa như làn gió mùa xuân vậy. Được quen biết em, anh thực sự cảm thấy rất vui và may mắn.

Mong rằng vào một ngày nào đó trong tương lai, khi em đặt chân đến đất nước Trung Quốc, và anh cũng đã vượt qua khoảng thời gian ôn thi vất vả này, chúng ta có thể cùng nhau ngồi dưới ánh nắng mặt trời và thoải mái trò chuyện về mọi thứ trên đời.

Chúc mừng sinh nhật, Minh Anh ✦

愿君乘风起，万里赴鹏程！

— Khúc Hưng Khang`

export default function LetterSection() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const { displayed, isDone } = useTypewriter(LETTER_TEXT, 50, 400, inView)

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(40px, 10vw, 80px) clamp(16px, 5vw, 24px)',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          filter: 'blur(2px)',
          zIndex: -1,
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, var(--night-blue) 0%, transparent 15%, transparent 85%, var(--night-blue) 100%)',
          zIndex: -1,
        }}
      />

      <ScrollReveal>
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Section title */}
          <h2
            style={{
              fontFamily: "'Playfair Display', 'Noto Serif SC', serif",
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'var(--warm-gold)',
              textAlign: 'center',
              marginBottom: '40px',
              fontWeight: 400,
              letterSpacing: '0.1em',
            }}
          >
            Những điều anh muốn nói với em
          </h2>

          {/* Letter paper */}
          <div
            style={{
              background: 'rgba(13, 27, 42, 0.7)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--warm-gold-dim)',
              borderRadius: '8px',
              padding: 'clamp(24px, 5vw, 48px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {/* Typewriter text */}
            <div
              style={{
                fontSize: 'clamp(0.88rem, 2vw, 1.02rem)',
                lineHeight: 2,
                color: 'var(--text-light)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                minHeight: '200px',
              }}
            >
              {displayed}
              {!isDone && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  style={{
                    display: 'inline-block',
                    width: '2px',
                    height: '1.1em',
                    background: 'var(--warm-gold)',
                    verticalAlign: 'text-bottom',
                    marginLeft: '2px',
                  }}
                />
              )}
            </div>

            {/* Signature fade in after typewriter finishes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isDone ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{
                marginTop: '32px',
                paddingTop: '20px',
                borderTop: '1px solid var(--warm-gold-dim)',
                textAlign: 'right',
              }}
            >
              <p
                style={{
                  fontFamily: "'Noto Serif SC', serif",
                  color: 'var(--warm-gold)',
                  fontSize: '1rem',
                  letterSpacing: '0.08em',
                }}
              >
                愿君乘风起，万里赴鹏程！
              </p>
              <p
                style={{
                  color: 'var(--warm-gold-dim)',
                  fontSize: '0.9rem',
                  marginTop: '8px',
                }}
              >
                — Khúc Hưng Khang
              </p>
            </motion.div>
          </div>
        </div>
      </ScrollReveal>

      {/* Photos appear after typewriter finishes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          display: 'flex',
          gap: 'clamp(12px, 3vw, 20px)',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: 'clamp(32px, 6vw, 48px)',
          maxWidth: '680px',
          width: '100%',
          position: 'relative',
          zIndex: 1,
          padding: '0 clamp(8px, 2vw, 0)',
        }}
      >
        {[img1, img2].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isDone ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 1.8 + i * 0.3 }}
            style={{
              flex: '1 1 clamp(200px, 40vw, 260px)',
              maxWidth: '320px',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--warm-gold-dim)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                width: '100%',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
