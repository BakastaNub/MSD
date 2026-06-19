import ServiceSection from './ServiceSection'
import ScrollWave from './ScrollWave'
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
      icon={
        <svg className="w-32 h-32 text-blue-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M12 2v4m0 12v4M2 12h4m12 0h4M5.64 5.64l12.72 12.72M18.36 5.64L5.64 18.36M12 2l-3 3m3-3l3 3M12 22l-3-3m3 3l3-3M2 12l3 3M2 12l3-3M22 12l-3 3m3-3l-3-3" />
        </svg>
      }
      iconAnimation="rotate"
      particles={{
        count: 15,
        colors: ['#ffffff', '#bfdbfe', '#93c5fd', '#60a5fa'],
        driftXRange: [20, 50],
        driftYRange: [20, 50],
      }}
    >
      <ServiceSection
        section={AIRES}
        direction="right"
        accentColor="text-blue-400"
        iconBg="bg-slate-800"
        bgColor="bg-transparent"
        icon={
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        }
      />
    </ScrollWave>
  )
}
