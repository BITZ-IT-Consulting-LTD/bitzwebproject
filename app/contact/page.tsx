'use client'

import { useState, useRef } from 'react'
import { toast } from 'sonner'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    budget: '',
    timeline: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.name || !formData.organization || !formData.email || !formData.message) {
      toast.error('Please fill out all required fields.')
      setIsSubmitting(false)
      return
    }

    const serviceId = 'service_fop0jwq'
    const templateId = 'template_ojykqwj'
    const publicKey = 'chyeh0dVMSnjhLRVq'

    if (form.current) {
      try {
        await emailjs.sendForm(serviceId, templateId, form.current, publicKey)
        toast.success('Message sent successfully! We will be in touch within 48 hours.')
        setFormData({ name: '', organization: '', email: '', phone: '', budget: '', timeline: '', message: '' })
      } catch (error) {
        console.error('Error sending email:', error)
        toast.error('Failed to send message. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    } else {
      toast.error('Form reference not found.')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">

        {/* Hero */}
        <section className="bg-[#051C2C] py-16 lg:py-24">
          <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
            <h1 className="font-serif text-[52px] font-light text-white leading-tight">
              Contact us
            </h1>
            <p className="mt-4 text-[20px] font-light text-white/80 max-w-xl">
              Discuss a project or engagement. We respond within 48 hours.
            </p>
          </div>
        </section>

        {/* Two-column layout */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
            <div className="grid gap-16 lg:grid-cols-[1fr_380px] lg:gap-20 items-start">

              {/* LEFT: Contact Form */}
              <div>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-[14px] font-medium text-[#333]">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full border border-[#ccc] px-4 py-3 text-[16px] text-[#333] focus:border-[#2251FF] focus:outline-none rounded-none bg-white"
                    />
                  </div>

                  {/* Organization */}
                  <div className="space-y-2">
                    <label htmlFor="organization" className="block text-[14px] font-medium text-[#333]">
                      Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      placeholder="Your organization"
                      className="w-full border border-[#ccc] px-4 py-3 text-[16px] text-[#333] focus:border-[#2251FF] focus:outline-none rounded-none bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-[14px] font-medium text-[#333]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@organization.com"
                      className="w-full border border-[#ccc] px-4 py-3 text-[16px] text-[#333] focus:border-[#2251FF] focus:outline-none rounded-none bg-white"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-[14px] font-medium text-[#333]">
                      Phone <span className="text-[#999] font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 000 000 000"
                      className="w-full border border-[#ccc] px-4 py-3 text-[16px] text-[#333] focus:border-[#2251FF] focus:outline-none rounded-none bg-white"
                    />
                  </div>

                  {/* Budget & Timeline row */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Budget */}
                    <div className="space-y-2">
                      <label htmlFor="budget" className="block text-[14px] font-medium text-[#333]">
                        Budget range <span className="text-[#999] font-normal">(optional)</span>
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full border border-[#ccc] px-4 py-3 text-[16px] text-[#333] focus:border-[#2251FF] focus:outline-none rounded-none bg-white appearance-none"
                      >
                        <option value="">Select budget</option>
                        <option value="Under $50K">Under $50K</option>
                        <option value="$50K-$100K">$50K–$100K</option>
                        <option value="$100K-$500K">$100K–$500K</option>
                        <option value="$500K+">$500K+</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="block text-[14px] font-medium text-[#333]">
                        Timeline <span className="text-[#999] font-normal">(optional)</span>
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full border border-[#ccc] px-4 py-3 text-[16px] text-[#333] focus:border-[#2251FF] focus:outline-none rounded-none bg-white appearance-none"
                      >
                        <option value="">Select timeline</option>
                        <option value="1-3 months">1–3 months</option>
                        <option value="3-6 months">3–6 months</option>
                        <option value="6-12 months">6–12 months</option>
                        <option value="12+ months">12+ months</option>
                      </select>
                    </div>
                  </div>

                  {/* Project description */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-[14px] font-medium text-[#333]">
                      Project description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project, goals, and any specific requirements."
                      className="w-full border border-[#ccc] px-4 py-3 text-[16px] text-[#333] focus:border-[#2251FF] focus:outline-none rounded-none bg-white min-h-[160px] resize-y"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2251FF] text-white text-[16px] font-medium py-3 px-6 rounded-none hover:bg-[#1a41cc] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Request Consultation'}
                  </button>

                  <p className="text-[14px] text-[#666] text-center">
                    Or email us directly at{' '}
                    <a href="mailto:contact@bitzconsulting.com" className="text-[#2251FF] underline">
                      contact@bitzconsulting.com
                    </a>
                  </p>
                </form>
              </div>

              {/* RIGHT: Trust indicators */}
              <div className="space-y-8">
                {/* Trust items */}
                <div className="space-y-6">
                  {/* Systems deployed */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#2251FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#333]">Systems deployed across five countries</p>
                    </div>
                  </div>

                  {/* UNICEF */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#2251FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#333]">UNICEF Venture Fund recipient</p>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#2251FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#333]">Response time: 24–48 hours</p>
                    </div>
                  </div>

                  {/* Confidential */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-[#2251FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[16px] font-medium text-[#333]">All inquiries confidential</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#E2E8F0]" />

                {/* Quick action buttons */}
                <div className="space-y-3">
                  <a
                    href="https://wa.me/254110952788"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full border border-[#E2E8F0] bg-white px-6 py-3 text-[16px] font-medium text-[#333] hover:border-[#2251FF] hover:text-[#2251FF] transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href="tel:0110952788"
                    className="flex items-center justify-center gap-3 w-full border border-[#E2E8F0] bg-white px-6 py-3 text-[16px] font-medium text-[#333] hover:border-[#2251FF] hover:text-[#2251FF] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    Call Support
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
