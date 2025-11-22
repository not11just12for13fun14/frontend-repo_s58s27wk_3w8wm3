import React from 'react'
import Navbar from '../components/Navbar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        <p className="mt-2 text-white/70 max-w-2xl">We’d love to learn about your project. Reach out and our team will respond promptly.</p>
      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}
