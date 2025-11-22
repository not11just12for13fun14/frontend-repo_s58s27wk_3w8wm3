import React, { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Dummy async to simulate submission
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! We will get back to you shortly.')
  }

  return (
    <section id="contact" className="bg-slate-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Tell us about your project and we’ll provide a free, no-obligation quote.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80 mb-1">Name</label>
            <input required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="John Doe" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/80 mb-1">Phone</label>
            <input required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="(000) 000-0000" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/80 mb-1">Email</label>
            <input type="email" required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@example.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/80 mb-1">Project Details</label>
            <textarea rows="4" required className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Tell us about your goals, timelines, and budget..."></textarea>
          </div>
          <div className="sm:col-span-2 flex items-center gap-4">
            <button type="submit" className="inline-flex rounded-md bg-yellow-400 px-5 py-2.5 font-semibold text-slate-900 hover:bg-yellow-300">Request Quote</button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
