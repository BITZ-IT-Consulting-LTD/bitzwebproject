import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI and Automation Systems",
    description:
      "We design and deploy AI systems for specific operational needs.",
    capabilities: [
      "Document processing and classification",
      "Conversational interfaces for service delivery",
      "Workflow automation",
    ],
    where: [
      "High-volume document environments",
      "Customer service operations",
      "Crisis response systems",
    ],
    application:
      "Helpline chatbots for initial triage in Child Helpline Systems across five countries.",
    outcomes: [
      "Reduced response time",
      "Consistent service delivery",
      "Scalable capacity",
    ],
  },
  {
    number: "02",
    title: "Data Infrastructure",
    description:
      "We build data systems that allow institutions to access, manage, and use information in real time.",
    capabilities: [
      "Data pipeline architecture",
      "Warehouse implementation",
      "Integration across legacy systems",
    ],
    where: [
      "Healthcare facilities needing unified patient records",
      "Financial institutions requiring member data consolidation",
      "Government agencies with siloed information",
    ],
    application:
      "OPENHMIS health data integration. Tower SACCO member data consolidation.",
    outcomes: [
      "Single source of truth",
      "Real-time reporting",
      "Reduced manual data entry",
    ],
  },
  {
    number: "03",
    title: "Cloud and Operations",
    description:
      "We implement and operate cloud infrastructure for mission-critical systems.",
    capabilities: [
      "Cloud architecture (AWS)",
      "DevOps and automation",
      "24/7 operations support",
    ],
    where: [
      "National platforms requiring high availability",
      "Multi-country deployments",
      "Systems handling sensitive data",
    ],
    application:
      "Cloud infrastructure for Child Helpline Systems (116) supporting five countries with 24/7 availability.",
    outcomes: [
      "99.9% uptime",
      "Automated scaling",
      "Compliance-ready security",
    ],
  },
  {
    number: "04",
    title: "Digital Assessment",
    description:
      "We evaluate organizational readiness and technical requirements for digital transformation.",
    capabilities: [
      "Digital maturity assessment",
      "Technical feasibility studies",
      "Implementation roadmap development",
    ],
    where: null,
    application: "KDEAP Digital Assessment recently completed.",
    outcomes: [
      "Clear understanding of requirements",
      "Risk identification",
      "Realistic implementation plans",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#051C2C] py-16 lg:py-24">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-[16px] font-medium text-[#00A9F4] mb-4">
            Our services
          </p>
          <h1 className="font-serif text-[44px] lg:text-[52px] font-light text-white leading-tight mb-6">
            What we do
          </h1>
          <p className="text-[18px] font-light text-white/80 max-w-[640px]">
            We define service offerings in operational terms.
          </p>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.number}
          className={index % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}
        >
          <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px] py-16 lg:py-20">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
              {/* Left column */}
              <div className="lg:col-span-4">
                <span className="text-[#2251FF] text-[14px] font-medium tracking-wider">
                  {service.number}
                </span>
                <h2 className="font-serif text-[32px] lg:text-[36px] font-light text-[#051C2C] leading-tight mt-2 mb-4">
                  {service.title}
                </h2>
                <p className="text-[16px] font-light text-[#333] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right column */}
              <div className="lg:col-span-8">
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Capabilities */}
                  <div>
                    <h3 className="font-serif text-[18px] font-light text-[#051C2C] mb-4">
                      Capabilities
                    </h3>
                    <ul className="space-y-2">
                      {service.capabilities.map((item) => (
                        <li
                          key={item}
                          className="text-[15px] font-light text-[#333] leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-1.5 block w-1.5 h-1.5 bg-[#2251FF] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Where we apply this */}
                  {service.where && (
                    <div>
                      <h3 className="font-serif text-[18px] font-light text-[#051C2C] mb-4">
                        Where we apply this
                      </h3>
                      <ul className="space-y-2">
                        {service.where.map((item) => (
                          <li
                            key={item}
                            className="text-[15px] font-light text-[#333] leading-relaxed flex items-start gap-2"
                          >
                            <span className="mt-1.5 block w-1.5 h-1.5 bg-[#2251FF] flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Real application */}
                  <div>
                    <h3 className="font-serif text-[18px] font-light text-[#051C2C] mb-4">
                      Real application
                    </h3>
                    <p className="text-[15px] font-light text-[#333] leading-relaxed">
                      {service.application}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div>
                    <h3 className="font-serif text-[18px] font-light text-[#051C2C] mb-4">
                      Outcome
                    </h3>
                    <ul className="space-y-2">
                      {service.outcomes.map((item) => (
                        <li
                          key={item}
                          className="text-[15px] font-light text-[#333] leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-1.5 block w-1.5 h-1.5 bg-[#2251FF] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px] py-16 lg:py-20 text-center">
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light text-[#051C2C] mb-4">
            Not sure what you need?
          </h2>
          <p className="text-[18px] font-light text-[#333] mb-8 max-w-[480px] mx-auto">
            We assess requirements and recommend approaches.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#2251FF] text-white px-6 py-3 text-[16px] font-medium hover:bg-[#1a3fcc] transition-colors"
          >
            Talk to an Expert
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
