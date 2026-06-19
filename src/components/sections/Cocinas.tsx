import ServiceSection from './ServiceSection'
import { COCINAS } from '../../data/company'

export default function Cocinas() {
  return (
    <ServiceSection
      section={COCINAS}
      bgGradient="bg-gradient-to-r from-orange-500 via-red-600 to-red-950"
      arrowDirection="left"
      imageRing="ring-2 ring-orange-400/60"
      imageShadow="shadow-lg shadow-orange-500/20"
      icon={
        <svg className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      }
      particles={{
        count: 12,
        colors: ['#fbbf24', '#fb923c', '#f87171', '#fcd34d'],
        driftXRange: [-25, 25],
        driftYRange: [-60, -20],
      }}
    />
  )
}
