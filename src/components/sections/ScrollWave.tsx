import { useRef, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

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

interface ParticleConfig {
  count: number
  colors: string[]
  driftXRange: [number, number]
  driftYRange: [number, number]
}

interface ScrollWaveProps {
  children: React.ReactNode
  gradient?: string
  gradients?: string[]
  bgColor: string
  direction: 'left' | 'right' | 'up'
  icon: React.ReactNode
  iconAnimation?: 'pulse' | 'rotate' | 'none'
  particles?: ParticleConfig
}

function generateParticles(config: ParticleConfig): Particle[] {
  const items: Particle[] = []
  for (let i = 0; i < config.count; i++) {
    items.push({
      id: i,
      x: 10 + ((i * 137.5) % 80),
      y: 10 + ((i * 89.3) % 80),
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

export default function ScrollWave({
  children,
  gradient,
  gradients,
  bgColor,
  direction,
  icon,
  iconAnimation = 'none',
  particles: particleConfig,
}: ScrollWaveProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const waveLayers = gradients ?? (gradient ? [gradient, gradient, gradient] : [])
  const waveInitial = () => {
    switch (direction) {
      case 'left':  return { x: '-100%' }
      case 'right': return { x: '100%' }
      case 'up':    return { y: '100%' }
    }
  }
  const waveAnimate = () => {
    switch (direction) {
      case 'left':
      case 'right': return { x: '0%' }
      case 'up':    return { y: '0%' }
    }
  }

  const iconFrom = (() => {
    switch (direction) {
      case 'left':  return { x: -200, opacity: 0, scale: 0.2 }
      case 'right': return { x: 200, opacity: 0, scale: 0.2 }
      case 'up':    return { y: 200, opacity: 0, scale: 0.2 }
    }
  })()

  const iconTo = { x: 0, y: 0, opacity: 1, scale: 1 }

  const particlesList = useMemo(
    () => (particleConfig ? generateParticles(particleConfig) : []),
    [particleConfig],
  )

  return (
    <div ref={ref} className={`relative overflow-hidden ${bgColor}`}>
      <div className="relative z-10">
        {children}
      </div>

      {waveLayers.map((g, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${g} 50%, transparent 100%)`,
            width: '200%',
          }}
          initial={waveInitial()}
          animate={isInView ? waveAnimate() : waveInitial()}
          transition={{ duration: 1.8, delay: i * 0.3, ease: 'easeOut' }}
        />
      ))}

      {particlesList.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full pointer-events-none z-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={
            isInView
              ? { opacity: [0, 1, 0], x: p.driftX, y: p.driftY }
              : { opacity: 0, x: 0, y: 0 }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: 'easeOut',
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30"
        initial={iconFrom}
        animate={isInView ? iconTo : iconFrom}
        transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          animate={
            isInView && iconAnimation === 'pulse'
              ? { scale: [1, 1.3, 1] }
              : isInView && iconAnimation === 'rotate'
              ? { rotate: 360 }
              : {}
          }
          transition={
            iconAnimation === 'pulse'
              ? { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              : iconAnimation === 'rotate'
              ? { duration: 6, repeat: Infinity, ease: 'linear' }
              : {}
          }
        >
          {icon}
        </motion.div>
      </motion.div>
    </div>
  )
}
