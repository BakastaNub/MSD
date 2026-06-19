import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SECTION_IDS = ['cocinas', 'aires', 'otros']

const ICONS = [
  {
    key: 'fire',
    component: (
      <svg className="w-7 h-7 md:w-10 md:h-10 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    enter: { y: 80, opacity: 0 },
    exit: { y: -80, opacity: 0 },
  },
  {
    key: 'snowflake',
    component: (
      <svg className="w-7 h-7 md:w-10 md:h-10 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M12 2v4m0 12v4M2 12h4m12 0h4M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36M12 2l-3 3m3-3l3 3M12 22l-3-3m3 3l3-3M2 12l3 3M2 12l3-3M22 12l-3 3m3-3l-3-3" />
      </svg>
    ),
    enter: { y: -80, opacity: 0 },
    exit: { y: 80, opacity: 0 },
  },
  {
    key: 'gear',
    component: (
      <svg className="w-7 h-7 md:w-10 md:h-10 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    enter: { y: -140, opacity: 0 },
    exit: { y: 120, opacity: 0 },
  },
]

export default function FloatingServiceIcon() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const ratios: Record<string, number> = {}

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios[entry.target.id] = entry.intersectionRatio
        }

        let bestIdx = 0
        let bestRatio = 0
        for (let i = 0; i < SECTION_IDS.length; i++) {
          const r = ratios[SECTION_IDS[i]] ?? 0
          if (r > bestRatio) {
            bestRatio = r
            bestIdx = i
          }
        }

        setActiveIndex(bestIdx)
      },
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9] },
    )

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  const current = ICONS[activeIndex]

  return (
    <div className="fixed top-6 right-4 md:top-10 md:right-10 z-50">
      <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.12] shadow-[0_0_40px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.key}
            initial={current.enter}
            animate={{ y: 0, opacity: 1 }}
            exit={current.exit}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {current.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
