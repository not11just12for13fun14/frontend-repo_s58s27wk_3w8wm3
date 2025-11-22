import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-white/70 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold mb-2">BlueRock Construction</h3>
          <p className="text-white/60">Building with integrity, precision, and pride. We deliver high-quality residential and commercial construction across the region.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>Phone: <a className="text-yellow-400 hover:underline" href="tel:+10000000000">(000) 000-0000</a></p>
          <p>Email: <a className="text-yellow-400 hover:underline" href="mailto:info@bluerock.build">info@bluerock.build</a></p>
          <p>Hours: Mon–Fri 8am–6pm</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Location</h4>
          <p>123 Builder Ave<br/>Craft City, ST 00000</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-white/50">© {new Date().getFullYear()} BlueRock Construction. All rights reserved.</div>
    </footer>
  )
}
