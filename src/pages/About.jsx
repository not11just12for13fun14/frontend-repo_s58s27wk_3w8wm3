import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-4xl font-bold text-white">About Us</h1>
            <p className="mt-4 text-white/80">BlueRock Construction was founded on a simple principle: do it right the first time. Our leadership brings over 15 years of combined experience across residential, commercial, and industrial projects.</p>
            <p className="mt-4 text-white/70">We pride ourselves on transparent communication, reliable timelines, and craftsmanship that stands the test of time. From small renovations to large-scale developments, our team delivers with integrity.</p>
            <dl className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-white/60 text-xs">Core Values</dt>
                <dd className="text-white font-semibold">Integrity, Safety, Excellence</dd>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <dt className="text-white/60 text-xs">Service Area</dt>
                <dd className="text-white font-semibold">Statewide & surrounding regions</dd>
              </div>
            </dl>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-white font-semibold">Why Choose Us</h2>
            <ul className="mt-4 list-disc pl-5 text-white/80 space-y-2">
              <li>Licensed, insured, and safety-first</li>
              <li>Dedicated project manager on every job</li>
              <li>Transparent budgets and timelines</li>
              <li>Trusted suppliers and top-grade materials</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
