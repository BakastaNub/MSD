import { motion } from 'framer-motion'
import type { ServiceSection } from '../../data/company'

interface Props {
  section: ServiceSection
  direction?: 'left' | 'right' | 'up'
  panelColor: string
  icon: React.ReactNode
}

export default function ServiceSection({
  section,
  direction = 'left',
  panelColor,
  icon,
}: Props) {
  const diamondFrom = (() => {
    switch (direction) {
      case 'left':  return { x: -300, opacity: 0, rotate: -45 }
      case 'right': return { x: 300, opacity: 0, rotate: 45 }
      case 'up':    return { y: 300, opacity: 0, rotate: 45 }
    }
  })()

  const diamondTo = { x: 0, y: 0, opacity: 1, rotate: 0 }

  const contentFrom = (() => {
    switch (direction) {
      case 'left':  return { opacity: 0, x: 80 }
      case 'right': return { opacity: 0, x: -80 }
      case 'up':    return { opacity: 0, y: 80 }
    }
  })()

  return (
    <section id={section.id} className="px-4 py-20 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
        <motion.div
          initial={diamondFrom}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          animate={diamondTo}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="shrink-0"
        >
          <div
            className="w-[240px] h-[240px] md:w-[300px] md:h-[300px]"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          >
            <div className={`w-full h-full flex items-center justify-center ${panelColor}`}>
              {icon}
            </div>
          </div>
        </motion.div>

        <div className="flex-1 max-w-2xl w-full">
          <motion.div
            initial={contentFrom}
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {section.title}
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl">
              {section.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {section.images.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={contentFrom}
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              >
                <div className="aspect-[4/3] bg-slate-800 rounded-lg overflow-hidden ring-1 ring-slate-700 mb-2">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-slate-300 leading-tight">
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
