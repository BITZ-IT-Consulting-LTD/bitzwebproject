import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  return (
    <main className="font-sans text-[16px] font-light text-[#333]">
      {/* Hero */}
      <section className="bg-[#051C2C] py-16 lg:py-24">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-[16px] font-medium text-[#00A9F4] mb-4">
            Proven delivery
          </p>
          <h1 className="font-serif text-[44px] lg:text-[52px] font-light text-white leading-tight mb-6">
            Case studies
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Documented capability through factual case summaries.
          </p>
        </div>
      </section>

      {/* Case Study 1: Child Helpline Systems */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-[16px] font-medium text-[#2251FF] mb-3">
            Case Study 01
          </p>
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light leading-tight mb-10">
            Child Helpline Systems (116)
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Context */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Context
              </h3>
              <p>
                National child protection agencies in five countries needed
                unified crisis response capability.
              </p>
            </div>

            {/* Problem */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Problem
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  No 24/7 access to crisis support
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Fragmented systems across agencies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  No centralized case management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Manual reporting with delays
                </li>
              </ul>
            </div>

            {/* Intervention */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Intervention
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Cloud-based call center infrastructure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Multi-channel intake (voice, SMS, chat)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  CRM with case tracking and escalation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  AI-powered triage chatbot
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Real-time reporting dashboard
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Outcome
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Operational in <strong>5 countries</strong> (Kenya, Uganda, Tanzania, Lesotho, Somalia)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  <strong>24/7</strong> crisis support for GBV, mental health, migrant assistance
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Case response time: <strong>hours to minutes</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  <strong>10,000+</strong> calls monthly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 2: Tower SACCO */}
      <section className="bg-[#F8FAFC] py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-[16px] font-medium text-[#2251FF] mb-3">
            Case Study 02
          </p>
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light leading-tight mb-10">
            Tower SACCO
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Context */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Context
              </h3>
              <p>
                Member-owned financial cooperative with 5,000+ members required
                operational system upgrade.
              </p>
            </div>

            {/* Problem */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Problem
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Member management in spreadsheets
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Loan processing: 5 days average
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  No ticket tracking for customer service
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Manual monthly reporting
                </li>
              </ul>
            </div>

            {/* Intervention */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Intervention
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  360-degree member view
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Automated loan workflow
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Call center with IVR
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  SMS notification system
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Financial reporting dashboard
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Outcome
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  <strong>5,000+</strong> member records consolidated
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Loan processing: <strong>5 days to 1 day</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Real-time balance inquiries enabled
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Monthly reporting automated
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Customer satisfaction: <strong>+40%</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 3: OPENHMIS */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-[16px] font-medium text-[#2251FF] mb-3">
            Case Study 03
          </p>
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light leading-tight mb-10">
            OPENHMIS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Context */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Context
              </h3>
              <p>
                Healthcare facilities required electronic medical records and
                inventory management.
              </p>
            </div>

            {/* Problem */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Problem
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Paper-based patient records
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  No centralized patient history
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Manual Ministry of Health reporting (2+ weeks)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Drug stockouts due to poor tracking
                </li>
              </ul>
            </div>

            {/* Intervention */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Intervention
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Electronic medical records
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Patient registration and queue management
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Pharmacy and inventory module
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Laboratory integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Automated government reporting
                </li>
              </ul>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="font-serif text-[20px] font-light mb-4 text-[#051C2C]">
                Outcome
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  <strong>50,000+</strong> patient records digitized
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Patient wait times: <strong>-30%</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Real-time drug inventory tracking
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Reporting time: <strong>2 weeks to 2 days</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2251FF] mt-1.5 shrink-0">&#8212;</span>
                  Offline capability for connectivity gaps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2251FF] text-white py-16">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px] text-center">
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light mb-8">
            Discuss a similar engagement.
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
