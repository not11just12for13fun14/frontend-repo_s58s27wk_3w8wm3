import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Hammer, Phone } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'bg-yellow-400 text-slate-900'
        : 'text-white/90 hover:text-white hover:bg-white/10'
    }`

  return (
    <header className="relative z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-yellow-400 text-slate-900 shadow">
              <Hammer className="h-5 w-5" />
            </div>
            <span className="text-white text-lg font-semibold tracking-wide">BlueRock Construction</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClasses} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <a href="tel:+10000000000" className="ml-3 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-yellow-300 transition-colors">
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-md px-3 py-2 text-base font-medium ${
                    isActive ? 'bg-yellow-400 text-slate-900' : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`
                }
                onClick={() => setOpen(false)}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
            <a href="tel:+10000000000" className="block rounded-md bg-yellow-400 px-3 py-2 text-base font-semibold text-slate-900 hover:bg-yellow-300">
              Call Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
