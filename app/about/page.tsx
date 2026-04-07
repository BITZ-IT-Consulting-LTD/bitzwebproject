import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="font-sans text-[16px] font-light text-[#333]">
      {/* Hero */}
      <section className="bg-[#051C2C] py-16 lg:py-24">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <h1 className="font-serif text-[44px] lg:text-[52px] font-light text-white leading-tight mb-6">
            About BITZ
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            A technology consulting firm with proven delivery capability.
          </p>
        </div>
      </section>

      {/* Section 1: Company Overview */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-lg leading-relaxed max-w-3xl mb-12">
            BITZ is a technology consulting firm. We design, build, and operate
            digital systems for public institutions and enterprises in Africa.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            <div>
              <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-6">
                Focus areas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Government digital transformation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Health information systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Financial services infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Social protection platforms
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-6">
                Geographic scope
              </h3>
              <p>Kenya, Uganda, Tanzania, Lesotho, Somalia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mission */}
      <section className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <blockquote className="font-serif text-[32px] lg:text-[40px] font-light text-[#051C2C] leading-tight max-w-4xl">
            &ldquo;To build reliable digital infrastructure for institutions
            that serve the public.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Section 3: Track Record */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light text-[#051C2C] mb-12">
            Track record
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Recognition */}
            <div className="bg-white border border-[#E2E8F0] p-6">
              <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-6">
                Recognition
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  UNICEF Venture Fund recipient
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  KDEAP Digital Assessment completed
                </li>
              </ul>
            </div>

            {/* Operational Systems */}
            <div className="bg-white border border-[#E2E8F0] p-6">
              <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-6">
                Operational Systems
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Child Helpline Systems (116): Five countries, 24/7 operations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  OPENHMIS: Health records platform deployed across multiple
                  facilities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Tower SACCO: Member management system for financial cooperative
                </li>
              </ul>
            </div>

            {/* Scale */}
            <div className="bg-white border border-[#E2E8F0] p-6">
              <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-6">
                Scale
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  <strong>50,000+</strong> patient records digitized
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  <strong>5,000+</strong> financial members managed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  <strong>10,000+</strong> monthly crisis calls handled
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Differentiation */}
      <section className="bg-[#051C2C] text-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-[24px] font-light mb-4">
                We build systems that operate.
              </h3>
              <p className="text-white/70">
                Many firms design. We implement, deploy, and run national-scale
                platforms.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[24px] font-light mb-4">
                Multi-country experience.
              </h3>
              <p className="text-white/70">
                We understand the operational realities of deploying systems
                across borders, regulatory environments, and infrastructure
                constraints.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-[24px] font-light mb-4">
                Public sector focus.
              </h3>
              <p className="text-white/70">
                We work with governments and institutions where reliability,
                security, and compliance are non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Delivery Approach */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light text-[#051C2C] mb-12">
            Delivery approach
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              {
                step: "01",
                title: "Design",
                subtitle: "Technical architecture, feasibility, planning",
              },
              {
                step: "02",
                title: "Build",
                subtitle: "Development, integration, testing",
              },
              {
                step: "03",
                title: "Deploy",
                subtitle: "Installation, training, go-live",
              },
              {
                step: "04",
                title: "Operate",
                subtitle: "24/7 support, maintenance, evolution",
              },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="relative border border-[#E2E8F0] p-6"
              >
                {index < 3 && (
                  <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 bg-[#2251FF] items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                )}
                <p className="text-[14px] font-medium text-[#2251FF] mb-2">
                  {phase.step}
                </p>
                <h3 className="font-serif text-[24px] font-light text-[#051C2C] mb-3">
                  {phase.title}
                </h3>
                <p className="text-[#333]/70 text-[15px]">{phase.subtitle}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[#333]/70 text-[15px]">
            Each phase is documented, transparent, and measured against
            operational outcomes.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2251FF] text-white py-16">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px] text-center">
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light mb-8">
            Discuss a project
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#051C2C] px-6 py-3 text-[16px] font-medium hover:bg-white/90 transition-colors"
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
