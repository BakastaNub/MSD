import { motion } from 'framer-motion'
import type { ServiceSection } from '../../data/company'

interface Props {
  section: ServiceSection
  direction?: 'left' | 'right' | 'up'
  accentColor?: string
  iconBg?: string
  icon?: React.ReactNode
  bgColor?: string
}

const variants = {
  left: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  up: {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  },
}

export default function ServiceSection({
  section,
  direction = 'left',
  accentColor = 'text-msd-orange',
  iconBg = 'bg-slate-800',
  icon,
  bgColor = 'bg-slate-950',
}: Props) {
  const v = variants[direction]

  return (
    <section
      id={section.id}
      className={`py-20 md:py-32 px-4 ${bgColor}`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          variants={v}
          className="text-center mb-12"
        >
          {icon && (
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${iconBg} mb-4`}>
              {icon}
            </div>
          )}
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 ${accentColor}`}>
            {section.title}
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            {section.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.images.map((img, idx) => (
            <motion.div
              key={img.src}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: 'easeOut' }}
              variants={v}
              className="aspect-[4/3] bg-slate-800 rounded-xl overflow-hidden ring-1 ring-slate-700"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
