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
  const contentFrom = (() => {
    switch (direction) {
      case 'left':  return { opacity: 0, x: 60 }
      case 'right': return { opacity: 0, x: -60 }
      case 'up':    return { opacity: 0, y: 60 }
    }
  })()

  return (
    <section id={section.id} className="flex flex-col md:flex-row min-h-[500px]">
      <div
        className={`w-full md:w-2/5 flex items-center justify-center p-12 md:p-16 ${panelColor}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {icon}
        </motion.div>
      </div>

      <div className="w-full md:w-3/5 bg-slate-950 p-8 md:p-16 flex flex-col justify-center">
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
    </section>
  )
}
