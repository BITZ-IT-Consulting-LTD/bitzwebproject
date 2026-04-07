import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Phone, MessageSquare, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <main>
      {/* Section 1: Hero */}
      <section className="relative bg-deep-navy text-white py-16 lg:py-24 overflow-hidden">
        <Image
          src="/Gemini_Generated_Image_bejuz2bejuz2beju.png"
          alt=""
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="relative z-10 max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <h1 className="font-serif text-[52px] lg:text-[76px] font-light leading-[1] text-white max-w-4xl">
            Technology systems for public institutions and enterprises
          </h1>
          <p className="text-[18px] lg:text-[24px] font-light text-white/80 max-w-2xl mt-8 leading-relaxed">
            We design, build, and operate digital infrastructure for governments, health systems, and financial institutions across Africa.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/contact"
              className="bg-electric-blue text-white px-6 py-3 text-[16px] font-normal inline-block"
            >
              Request Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent border border-white/30 text-white px-6 py-3 text-[16px] font-normal inline-block"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Credibility Strip */}
      <section className="bg-white border-y border-[#E2E8F0]">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px] py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0 text-center">
            <p className="text-[16px] font-medium text-[#333] md:px-8">
              UNICEF Venture Fund recipient
            </p>
            <div className="hidden md:block w-px h-6 bg-[#E2E8F0]" />
            <p className="text-[16px] font-medium text-[#333] md:px-8">
              Systems deployed across five countries
            </p>
            <div className="hidden md:block w-px h-6 bg-[#E2E8F0]" />
            <p className="text-[16px] font-medium text-[#333] md:px-8">
              Operators of national Child Helpline platforms
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Trust Signals */}
      <section className="bg-off-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-eyebrow font-medium text-[#333] mb-8">
            Trusted by government and institutional partners
          </p>
          <div className="flex flex-wrap gap-4">
            {["Kenya", "Uganda", "Tanzania", "Lesotho", "Somalia"].map((country) => (
              <span
                key={country}
                className="border border-[#E2E8F0] bg-white px-5 py-2 text-[16px] font-medium text-[#333]"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Services Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <h2 className="font-serif text-display-lg text-[#333]">What we do</h2>
          <p className="text-body text-[#333] mt-4 mb-12">We help organizations to:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#E2E8F0]">
            <Link href="/services#ai-automation" className="group p-8 border-r border-[#E2E8F0] hover:bg-[#F7F7F7] transition-colors relative">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-sans text-[20px] font-medium text-[#000] group-hover:text-electric-blue transition-colors">
                  Design digital systems
                </h4>
                <ArrowRight className="h-5 w-5 text-[#ccc] group-hover:text-electric-blue transition-colors shrink-0 mt-1" />
              </div>
              <ul className="space-y-3">
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>Architecture and platform design</li>
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>System integration planning</li>
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>Technical feasibility assessment</li>
              </ul>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-electric-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link href="/services#data-infrastructure" className="group p-8 border-r border-[#E2E8F0] hover:bg-[#F7F7F7] transition-colors relative">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-sans text-[20px] font-medium text-[#000] group-hover:text-electric-blue transition-colors">
                  Build scalable infrastructure
                </h4>
                <ArrowRight className="h-5 w-5 text-[#ccc] group-hover:text-electric-blue transition-colors shrink-0 mt-1" />
              </div>
              <ul className="space-y-3">
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>Custom software development</li>
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>Data platform implementation</li>
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>Cloud and DevOps infrastructure</li>
              </ul>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-electric-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            <Link href="/services#cloud-operations" className="group p-8 hover:bg-[#F7F7F7] transition-colors relative">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-sans text-[20px] font-medium text-[#000] group-hover:text-electric-blue transition-colors">
                  Operate national platforms
                </h4>
                <ArrowRight className="h-5 w-5 text-[#ccc] group-hover:text-electric-blue transition-colors shrink-0 mt-1" />
              </div>
              <ul className="space-y-3">
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>24/7 system operations</li>
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>Multi-country deployment</li>
                <li className="text-body text-[#333] flex items-start gap-2"><span className="text-electric-blue mt-1">—</span>Ongoing support and maintenance</li>
              </ul>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-electric-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </div>
          <div className="mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-[16px] font-medium text-electric-blue hover:underline">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Sector Focus */}
      <section className="bg-deep-navy text-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-eyebrow font-medium text-white/70 mb-4">Sector focus</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-8">
            {[
              { title: "Government and Social Protection", desc: "National-scale systems for public service delivery.", href: "/solutions#government" },
              { title: "Healthcare", desc: "Electronic medical records and health information systems.", href: "/solutions#healthcare" },
              { title: "Financial Services", desc: "Member management and operational platforms for cooperatives.", href: "/solutions#financial" },
              { title: "International Development", desc: "Monitoring and reporting systems for donor-funded programs.", href: "/solutions#development" },
            ].map((sector) => (
              <Link key={sector.title} href={sector.href} className="group border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-all relative">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-sans text-[20px] font-medium text-white group-hover:text-cyan transition-colors">
                    {sector.title}
                  </h4>
                  <ArrowRight className="h-5 w-5 text-white/30 group-hover:text-cyan transition-colors shrink-0 mt-1" />
                </div>
                <p className="text-body text-white/60 group-hover:text-white/80 transition-colors">
                  {sector.desc}
                </p>
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Flagship System */}
      <section className="bg-off-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-eyebrow font-medium text-[#333] mb-2">Flagship system</p>
          <h2 className="font-serif text-display-lg text-[#333]">Child Helpline Systems (116)</h2>
          <p className="text-[18px] font-light text-[#333] mt-4 mb-12">
            A national crisis response platform operational in five countries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans text-[16px] font-medium text-[#333] mb-4">Capabilities</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-body text-[#333]">
                  <Phone className="w-5 h-5 text-electric-blue mt-0.5 shrink-0" />
                  Multi-channel intake (voice, SMS, chat)
                </li>
                <li className="flex items-start gap-3 text-body text-[#333]">
                  <MessageSquare className="w-5 h-5 text-electric-blue mt-0.5 shrink-0" />
                  Case management and escalation
                </li>
                <li className="flex items-start gap-3 text-body text-[#333]">
                  <CheckCircle className="w-5 h-5 text-electric-blue mt-0.5 shrink-0" />
                  Real-time reporting and analytics
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans text-[16px] font-medium text-[#333] mb-4">Use cases</h4>
              <ul className="space-y-3">
                <li className="text-body text-[#333]">Gender-based violence response</li>
                <li className="text-body text-[#333]">Mental health crisis support</li>
                <li className="text-body text-[#333]">Migrant worker assistance</li>
              </ul>
              <p className="mt-8 text-[16px] font-medium text-electric-blue">
                10,000+ calls monthly across all deployments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Case Study Preview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-eyebrow font-medium text-[#333] mb-2">Proven delivery</p>
          <h2 className="font-serif text-display-lg text-[#333] mb-12">Case studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#E2E8F0]">
            {/* Card 1 */}
            <Link href="/case-studies#helpline" className="group p-8 border-r border-[#E2E8F0] hover:bg-[#F7F7F7] transition-colors relative">
              <div className="flex items-start justify-between mb-6">
                <p className="text-[12px] font-medium text-electric-blue uppercase tracking-wider">Child Helpline 116</p>
                <ArrowRight className="h-4 w-4 text-[#ccc] group-hover:text-electric-blue transition-colors" />
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Organization</p>
                  <p className="text-body text-[#333]">National child protection agency</p>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-body text-[#333]">Fragmented crisis response</p>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Intervention</p>
                  <p className="text-body text-[#333]">Unified helpline platform</p>
                </div>
                <div className="pt-4 border-t border-[#E2E8F0]">
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-[20px] font-medium text-electric-blue">5 countries operational</p>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-electric-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            {/* Card 2 */}
            <Link href="/case-studies#sacco" className="group p-8 hover:bg-[#F7F7F7] transition-colors relative">
              <div className="flex items-start justify-between mb-6">
                <p className="text-[12px] font-medium text-electric-blue uppercase tracking-wider">Tower SACCO</p>
                <ArrowRight className="h-4 w-4 text-[#ccc] group-hover:text-electric-blue transition-colors" />
              </div>
              <div className="space-y-5">
                <div>
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Organization</p>
                  <p className="text-body text-[#333]">Financial cooperative</p>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-body text-[#333]">Manual member management</p>
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Intervention</p>
                  <p className="text-body text-[#333]">CRM and call center system</p>
                </div>
                <div className="pt-4 border-t border-[#E2E8F0]">
                  <p className="text-[12px] font-medium text-[#64748B] uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-[20px] font-medium text-electric-blue">5 days → 1 day loan processing</p>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-electric-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </div>
          <div className="mt-10">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[16px] font-medium text-electric-blue"
            >
              View all case studies
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Differentiators */}
      <section className="bg-deep-navy text-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <h2 className="font-serif text-display-lg text-white mb-12">Why BITZ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { num: "01", text: "Proven delivery of government-grade systems" },
              { num: "02", text: "Multi-country deployment experience" },
              { num: "03", text: "Real operational platforms, not concepts" },
              { num: "04", text: "KDEAP Digital Assessment completed" },
            ].map((item) => (
              <div key={item.num} className="border-t border-l border-white/10 p-8 hover:bg-white/5 transition-colors">
                <span className="text-[14px] font-medium text-cyan mb-4 block">{item.num}</span>
                <p className="text-[18px] font-light text-white leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="bg-electric-blue text-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px] text-center">
          <h2 className="font-serif text-display text-white">Discuss a project</h2>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-white text-deep-navy px-6 py-3 text-[16px] font-normal inline-block"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
