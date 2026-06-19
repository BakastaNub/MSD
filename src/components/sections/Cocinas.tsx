import ScrollWave from './ScrollWave'
import ServiceSection from './ServiceSection'
import { COCINAS } from '../../data/company'

export default function Cocinas() {
  return (
    <ScrollWave
      bgColor="bg-slate-950"
      direction="left"
      gradients={[
        'rgba(234, 88, 12, 0.25)',
        'rgba(251, 146, 60, 0.15)',
        'rgba(251, 191, 36, 0.1)',
      ]}
      particles={{
        count: 12,
        colors: ['#ea580c', '#f97316', '#fbbf24', '#dc2626'],
        driftXRange: [-20, 20],
        driftYRange: [-60, -30],
      }}
    >
      <ServiceSection
        section={COCINAS}
        direction="left"
        panelColor="bg-gradient-to-br from-orange-600 to-orange-500"
        icon={
          <svg className="w-40 h-40 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
        }
      />
    </ScrollWave>
  )
}
