import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sectors = [
  {
    title: "Government and Social Protection",
    bg: "bg-white",
    broken:
      "Crisis response systems are fragmented. Vulnerable populations cannot access help. Agencies operate in silos with no unified case management.",
    whatWeDo:
      "We design and operate national helpline platforms that integrate intake, case management, and cross-agency coordination.",
    whatChanges: [
      "Single access point for crisis support (dial 116)",
      "Tracked cases with escalation protocols",
      "Unified reporting across government agencies",
    ],
    realSystem:
      "Child Helpline Systems operational in Kenya, Uganda, Tanzania, Lesotho, Somalia.",
  },
  {
    title: "Healthcare",
    bg: "bg-[#F8FAFC]",
    broken:
      "Patient records are paper-based and fragmented. Facilities cannot track history. Drug stockouts are common. Reporting to ministries is manual and delayed.",
    whatWeDo:
      "We implement electronic medical record systems with inventory management, automated reporting, and offline capability.",
    whatChanges: [
      "Digitized patient history accessible across visits",
      "Real-time drug inventory tracking",
      "Automated reporting to Ministry of Health",
    ],
    realSystem: "OPENHMIS deployed across multiple health facilities.",
  },
  {
    title: "Financial Services",
    bg: "bg-white",
    broken:
      "Member management relies on spreadsheets. Loan processing is manual. Customer service has no ticket tracking. No unified view of member relationships.",
    whatWeDo:
      "We build CRM and call center platforms with automated workflows and real-time reporting.",
    whatChanges: [
      "Consolidated member records",
      "Loan processing time: 5 days to 1 day",
      "Real-time balance inquiries",
      "Automated monthly reporting",
    ],
    realSystem: "Tower SACCO member management platform.",
  },
  {
    title: "International Development",
    bg: "bg-[#F8FAFC]",
    broken:
      "Donor reporting requires manual compilation from multiple tools. Program monitoring is retrospective. Field data does not reach decision-makers in time.",
    whatWeDo:
      "We integrate data systems and build real-time monitoring platforms with automated reporting.",
    whatChanges: [
      "Unified program data from multiple sources",
      "Real-time dashboard visibility",
      "Automated donor reporting",
    ],
    realSystem: null,
  },
];

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#051C2C] py-16 lg:py-24">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px]">
          <p className="text-[16px] font-medium text-[#00A9F4] mb-4">
            Solutions by sector
          </p>
          <h1 className="font-serif text-[44px] lg:text-[52px] font-light text-white leading-tight">
            Sector-specific solutions
          </h1>
        </div>
      </section>

      {/* Sector Sections */}
      {sectors.map((sector) => (
        <section key={sector.title} className={sector.bg}>
          <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px] py-16 lg:py-20">
            {/* Sector title */}
            <h2 className="font-serif text-[32px] lg:text-[40px] font-light text-[#051C2C] leading-tight mb-12">
              {sector.title}
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: What is broken + What we do */}
              <div className="space-y-10">
                <div>
                  <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-3">
                    What is broken
                  </h3>
                  <p className="text-[16px] font-light text-[#333] leading-relaxed">
                    {sector.broken}
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-3">
                    What we do
                  </h3>
                  <p className="text-[16px] font-light text-[#333] leading-relaxed">
                    {sector.whatWeDo}
                  </p>
                </div>
              </div>

              {/* Right: What changes + Real system */}
              <div className="space-y-10">
                <div>
                  <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-3">
                    What changes
                  </h3>
                  <ul className="space-y-2">
                    {sector.whatChanges.map((item) => (
                      <li
                        key={item}
                        className="text-[16px] font-light text-[#333] leading-relaxed flex items-start gap-3"
                      >
                        <span className="mt-2 block w-1.5 h-1.5 bg-[#2251FF] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {sector.realSystem && (
                  <div>
                    <h3 className="font-serif text-[20px] font-light text-[#051C2C] mb-3">
                      Real system
                    </h3>
                    <p className="text-[16px] font-light text-[#333] leading-relaxed">
                      {sector.realSystem}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="mt-16 border-b border-[#E2E8F0]" />
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#2251FF]">
        <div className="max-w-[1216px] mx-auto px-6 lg:px-[108px] py-16 text-center">
          <h2 className="font-serif text-[32px] lg:text-[40px] font-light text-white mb-8">
            Discuss requirements for your sector.
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
