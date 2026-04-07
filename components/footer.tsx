import Link from "next/link"
import { Linkedin, Twitter, Mail, MessageSquare, Headphones } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E2E8F0]">
      <div className="max-w-content mx-auto px-6 lg:px-[108px]">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
          {/* Left: Logo + Nav */}
          <div>
            <Link href="/" className="inline-block mb-8">
              <span className="text-[28px] font-serif font-light text-deep-navy leading-tight">
                BITZ<br />
                <span className="text-[18px]">IT Consulting</span>
              </span>
            </Link>
            <nav className="flex flex-col gap-3">
              {[
                { href: '/services', label: 'Services' },
                { href: '/solutions', label: 'Solutions' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/about', label: 'About Us' },
                { href: '/team', label: 'Team' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-body-lg font-normal text-[#000] hover:text-electric-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Subscribe + Contact */}
          <div>
            <h3 className="text-body-lg font-medium text-[#000] mb-2">Subscribe</h3>
            <p className="text-body text-[#333] mb-4">Select topics and stay current with our latest insights</p>
            <div className="flex gap-0 mb-8">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 border border-[#ccc] text-[16px] focus:outline-none focus:border-electric-blue"
              />
              <button className="px-6 py-3 bg-cyan text-white text-[16px] font-normal hover:bg-[#0291DC] transition-colors">
                →
              </button>
            </div>

            <h3 className="text-body-lg font-medium text-[#000] mb-3">Connect</h3>
            <div className="flex items-center gap-4">
              <Link href="https://www.linkedin.com/company/bitz-it-consulting/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-electric-blue transition-colors">
                <Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/Consulting41793" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-electric-blue transition-colors">
                <Twitter className="h-5 w-5" /><span className="sr-only">X / Twitter</span>
              </Link>
              <Link href="mailto:info@bitz-itc.com" className="text-[#333] hover:text-electric-blue transition-colors">
                <Mail className="h-5 w-5" /><span className="sr-only">Email</span>
              </Link>
              <Link href="https://wa.me/254110952788" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-electric-blue transition-colors">
                <MessageSquare className="h-5 w-5" /><span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="tel:0110952788" className="text-[#333] hover:text-electric-blue transition-colors">
                <Headphones className="h-5 w-5" /><span className="sr-only">Support</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E2E8F0] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-[#333]">© 2026 BITZ IT Consulting Ltd. All rights reserved.</p>
          <div className="flex gap-6 text-caption text-[#000]">
            <span className="hover:text-electric-blue transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-electric-blue transition-colors cursor-pointer">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
