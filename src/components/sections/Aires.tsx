import ServiceSection from './ServiceSection'
import { AIRES } from '../../data/company'

export default function Aires() {
  return (
    <ServiceSection
      section={AIRES}
      bgGradient="bg-gradient-to-l from-blue-500 via-cyan-600 to-blue-950"
      arrowDirection="right"
      imageRing="ring-2 ring-blue-400/60"
      imageShadow="shadow-lg shadow-blue-500/20"
      icon={
        <svg className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M12 2v4m0 12v4M2 12h4m12 0h4M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36M12 2l-3 3m3-3l3 3M12 22l-3-3m3 3l3-3M2 12l3 3M2 12l3-3M22 12l-3 3m3-3l-3-3" />
        </svg>
      }
      particles={{
        count: 12,
        colors: ['#bfdbfe', '#93c5fd', '#60a5fa', '#ffffff'],
        driftXRange: [25, 55],
        driftYRange: [20, 60],
      }}
    />
  )
}
