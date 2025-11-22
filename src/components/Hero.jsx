import React from 'react'
import { ArrowRight, Shield, Wrench, Ruler } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-yellow-400/20 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid gap-10 lg:grid-cols-2">
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Quality construction built to last.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            We’re a full-service construction company specializing in residential and commercial builds, renovations, and project management.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-5 py-3 font-semibold text-slate-900 hover:bg-yellow-300 transition-colors">
              Get a Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/services" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              Our Services
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-white/60 text-xs">Years Experience</dt>
              <dd className="text-2xl font-bold text-yellow-400">15+</dd>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-white/60 text-xs">Projects Delivered</dt>
              <dd className="text-2xl font-bold text-yellow-400">500+</dd>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-white/60 text-xs">Client Satisfaction</dt>
              <dd className="text-2xl font-bold text-yellow-400">99%</dd>
            </div>
          </dl>
        </div>

        <div className="relative z-10 grid gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">
              <Shield className="h-5 w-5 text-yellow-400" />
              <h3 className="font-semibold">Licensed & Insured</h3>
            </div>
            <p className="mt-2 text-white/70 text-sm">We operate with full licensing and insurance for your peace of mind.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">
              <Wrench className="h-5 w-5 text-yellow-400" />
              <h3 className="font-semibold">Full-Service Team</h3>
            </div>
            <p className="mt-2 text-white/70 text-sm">From design to build, our experts handle every detail.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-white">
              <Ruler className="h-5 w-5 text-yellow-400" />
              <h3 className="font-semibold">Precision Craftsmanship</h3>
            </div>
            <p className="mt-2 text-white/70 text-sm">We use top materials and meticulous methods for long-lasting results.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
