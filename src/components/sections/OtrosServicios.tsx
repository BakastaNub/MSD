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
      particles={{
        count: 10,
        colors: ['#94a3b8', '#cbd5e1', '#64748b', '#e2e8f0'],
        driftXRange: [-30, 30],
        driftYRange: [-50, -15],
      }}
    />
  )
}
