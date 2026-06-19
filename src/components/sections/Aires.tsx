import ScrollWave from './ScrollWave'
import ServiceSection from './ServiceSection'
import { AIRES } from '../../data/company'

export default function Aires() {
  return (
    <ScrollWave
      bgColor="bg-slate-900"
      direction="right"
      gradients={[
        'rgba(37, 99, 235, 0.25)',
        'rgba(96, 165, 250, 0.15)',
        'rgba(147, 197, 253, 0.1)',
      ]}
      particles={{
        count: 12,
        colors: ['#ffffff', '#bfdbfe', '#93c5fd', '#60a5fa'],
        driftXRange: [20, 50],
        driftYRange: [20, 50],
      }}
    >
      <ServiceSection
        section={AIRES}
        direction="right"
        panelColor="bg-gradient-to-br from-blue-600 to-blue-500"
        icon={
          <svg className="w-40 h-40 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M12 2v4m0 12v4M2 12h4m12 0h4M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36M12 2l-3 3m3-3l3 3M12 22l-3-3m3 3l3-3M2 12l3 3M2 12l3-3M22 12l-3 3m3-3l-3-3" />
          </svg>
        }
      />
    </ScrollWave>
  )
}
