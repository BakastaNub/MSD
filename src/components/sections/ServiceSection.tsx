import { motion } from 'framer-motion'
import type { ServiceSection } from '../../data/company'

interface Props {
  section: ServiceSection
  direction?: 'left' | 'right' | 'up'
  panelGradient: string
  ringColor: string
  shadowColor: string
  icon: React.ReactNode
}

export default function ServiceSection({
  section,
  direction = 'left',
  panelGradient,
  ringColor,
  shadowColor,
  icon,
}: Props) {
  const panelFrom = (() => {
    switch (direction) {
      case 'left':  return { x: -400, opacity: 0 }
      case 'right': return { x: 400, opacity: 0 }
      case 'up':    return { y: 400, opacity: 0 }
    }
  })()

  const containerClass = 'flex flex-col md:flex-row min-h-[480px]'
  const panelClasses = `w-full md:w-[35%] flex items-center justify-center p-12 md:p-16 ${panelGradient}`
  const contentBg = 'bg-slate-100'

  const panelStyle = direction === 'left'
    ? { clipPath: 'polygon(0 0, 85% 0, 100% 50%, 85% 100%, 0 100%)' }
    : direction === 'right'
    ? { clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 15% 100%, 0 50%)' }
    : {}

  const iconFrom = (() => {
    switch (direction) {
      case 'left':  return { x: -200, opacity: 0, scale: 0 }
      case 'right': return { x: 200, opacity: 0, scale: 0 }
      case 'up':    return { y: 200, opacity: 0, scale: 0 }
    }
  })()

  const contentFrom = { opacity: 0, y: 40 }

  return (
    <section id={section.id} className={containerClass}>
      <motion.div
        initial={panelFrom}
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className={panelClasses}
        style={panelStyle}
      >
        <motion.div
          initial={iconFrom}
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        >
          {icon}
        </motion.div>
      </motion.div>

      <div className={`w-full md:w-[65%] ${contentBg} relative overflow-hidden`}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
          <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <circle cx="50" cy="50" r="40" fill="currentColor" className="text-slate-600" />
            <rect x="300" y="100" width="60" height="60" rx="8" fill="currentColor" className="text-slate-600" />
            <circle cx="350" cy="300" r="30" fill="currentColor" className="text-slate-600" />
            <rect x="40" y="280" width="50" height="50" rx="6" fill="currentColor" className="text-slate-600" />
            <circle cx="200" cy="380" r="25" fill="currentColor" className="text-slate-600" />
          </svg>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 py-16 md:py-20">
          <motion.div
            initial={contentFrom}
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {section.title}
            </h2>
            <p className="text-lg md:text-xl font-light text-slate-500 mb-1">
              {section.subtitle}
            </p>
            <p className="text-sm text-slate-400 uppercase tracking-widest">
              {section.tagline}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto w-full">
            {section.images.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={contentFrom}
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              >
                <div
                  className={`aspect-square bg-slate-200 rounded-xl overflow-hidden ${ringColor} ${shadowColor}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-slate-500 text-center mt-2 leading-tight">
                  {img.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
