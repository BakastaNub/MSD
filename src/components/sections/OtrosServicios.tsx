import ScrollWave from './ScrollWave'
import ServiceSection from './ServiceSection'
import { OTROS_SERVICIOS } from '../../data/company'

export default function OtrosServicios() {
  return (
    <ScrollWave
      bgColor="bg-slate-950"
      direction="up"
      gradients={[
        'rgba(100, 116, 139, 0.25)',
        'rgba(148, 163, 184, 0.15)',
        'rgba(203, 213, 225, 0.1)',
      ]}
      particles={{
        count: 10,
        colors: ['#64748b', '#94a3b8', '#cbd5e1', '#475569'],
        driftXRange: [-30, 30],
        driftYRange: [-50, -20],
      }}
    >
      <ServiceSection
        section={OTROS_SERVICIOS}
        direction="up"
        panelColor="bg-gradient-to-br from-slate-500 to-slate-600"
        icon={
          <svg className="w-40 h-40 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      />
    </ScrollWave>
  )
}
