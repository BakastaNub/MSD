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
      particles={{
        count: 12,
        colors: ['#bfdbfe', '#93c5fd', '#60a5fa', '#ffffff'],
        driftXRange: [25, 55],
        driftYRange: [20, 60],
      }}
    />
  )
}
