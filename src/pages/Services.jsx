import React from 'react'
import Navbar from '../components/Navbar'
import ServicesGrid from '../components/Services'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <div className="pt-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h1 className="text-4xl font-bold text-white">Services</h1>
          <p className="mt-2 text-white/70 max-w-2xl">From groundbreaking to grand opening, we manage projects with precision and care.</p>
        </div>
      </div>
      <ServicesGrid />
      <Footer />
    </div>
  )
}
