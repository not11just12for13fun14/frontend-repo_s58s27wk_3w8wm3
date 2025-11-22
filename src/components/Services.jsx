import React from 'react'
import { Hammer, Home, Building2, Paintbrush, Wrench, Ruler } from 'lucide-react'

const services = [
  { icon: Home, title: 'Residential Builds', desc: 'Custom homes, additions, and full-scale renovations.' },
  { icon: Building2, title: 'Commercial Projects', desc: 'Office, retail, and industrial fit-outs and new builds.' },
  { icon: Paintbrush, title: 'Remodeling & Renovations', desc: 'Kitchen, bathroom, and whole-home makeovers.' },
  { icon: Wrench, title: 'General Contracting', desc: 'End-to-end project planning and management.' },
  { icon: Ruler, title: 'Design & Planning', desc: 'Blueprints, permits, and structural planning.' },
  { icon: Hammer, title: 'Repairs & Maintenance', desc: 'Reliable fixes and ongoing maintenance services.' },
]

export default function Services() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <p className="mt-2 text-white/70 max-w-2xl">We deliver a complete range of construction services for residential and commercial clients.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 text-white">
                <Icon className="h-5 w-5 text-yellow-400" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
