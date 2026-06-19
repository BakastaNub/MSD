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
      particles={{
        count: 12,
        colors: ['#fbbf24', '#fb923c', '#f87171', '#fcd34d'],
        driftXRange: [-25, 25],
        driftYRange: [-60, -20],
      }}
    />
  )
}
