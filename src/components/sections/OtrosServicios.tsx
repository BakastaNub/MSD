import ServiceSection from './ServiceSection'
import { OTROS_SERVICIOS } from '../../data/company'

export default function OtrosServicios() {
  return (
    <ServiceSection
      section={OTROS_SERVICIOS}
      bgGradient="bg-gradient-to-t from-slate-500 via-slate-700 to-slate-950"
      arrowDirection="left"
      imageRing="ring-2 ring-slate-400/60"
      imageShadow="shadow-lg shadow-slate-500/20"
      icon={
        <svg className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.7} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      }
      particles={{
        count: 10,
        colors: ['#94a3b8', '#cbd5e1', '#64748b', '#e2e8f0'],
        driftXRange: [-30, 30],
        driftYRange: [-50, -15],
      }}
    />
  )
}
