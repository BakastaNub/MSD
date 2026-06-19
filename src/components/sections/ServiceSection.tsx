import { useMemo } from 'react'
import { motion } from 'framer-motion'
import type { ServiceSection as SectionData } from '../../data/company'

interface ParticleConfig {
  count: number
  colors: string[]
  driftXRange: [number, number]
  driftYRange: [number, number]
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
  duration: number
  driftX: number
  driftY: number
}

interface Props {
  section: SectionData
  bgGradient: string
  arrowDirection: 'left' | 'right'
  particles?: ParticleConfig
  imageRing?: string
  imageShadow?: string
}

function generateParticles(config: ParticleConfig): Particle[] {
  const items: Particle[] = []
  for (let i = 0; i < config.count; i++) {
    items.push({
      id: i,
      x: 5 + ((i * 137.5) % 90),
      y: 5 + ((i * 89.3) % 90),
      size: 2 + ((i * 3) % 5),
      color: config.colors[i % config.colors.length],
      delay: (i % 6) * 0.2,
      duration: 1.5 + ((i * 0.7) % 2),
      driftX: config.driftXRange[0] + ((i * 1.3) % (config.driftXRange[1] - config.driftXRange[0])),
      driftY: config.driftYRange[0] + ((i * 1.7) % (config.driftYRange[1] - config.driftYRange[0])),
    })
  }
  return items
}

export default function ServiceSection({
  section,
  bgGradient,
  arrowDirection,
  particles: particleConfig,
  imageRing = 'ring-2 ring-white/20',
  imageShadow = 'shadow-lg',
}: Props) {
  const particlesList = useMemo(
    () => (particleConfig ? generateParticles(particleConfig) : []),
    [particleConfig],
  )

  const arrowClipPath =
    arrowDirection === 'left'
      ? 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)'
      : 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)'

  return (
    <section
      id={section.id}
      className={`relative min-h-screen overflow-hidden ${bgGradient}`}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-[45%] md:w-[38%] pointer-events-none z-10"
        style={{
          clipPath: arrowClipPath,
          background: 'rgba(255,255,255,0.06)',
        }}
        aria-hidden="true"
      />

      {particlesList.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none z-10"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          whileInView={{ opacity: [0, 1, 0], x: p.driftX, y: p.driftY }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl py-20">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full bg-white/[0.04] backdrop-blur-md rounded-3xl p-6 md:p-10 lg:p-14 border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
              className="text-center mb-8 md:mb-10"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {section.title}
              </h2>
              <p className="text-lg md:text-xl font-light text-white/70 mb-1">
                {section.subtitle}
              </p>
              <p className="text-sm text-white/50 uppercase tracking-[0.15em]">
                {section.tagline}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">
              {section.images.map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.45 + idx * 0.15,
                    ease: 'easeOut',
                  }}
                >
                  <div
                    className={`aspect-square rounded-xl overflow-hidden ${imageRing} ${imageShadow}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-white/50 text-center mt-2 leading-tight">
                    {img.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
