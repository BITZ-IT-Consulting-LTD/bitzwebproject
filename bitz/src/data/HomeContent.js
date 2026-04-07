export const homeContent = {
  hero: {
    title: "Technology systems for public institutions and enterprises",
    description: "We design, build, and operate digital infrastructure for governments, health systems, and financial institutions across Africa.",
    countriesShowcase: {
      title: "Operational Presence",
      countries: [
        {
          name: 'Kenya',
          flag: '🇰🇪',
          description: 'National Child Helpline platform (116) and health information systems.',
          projects: '50+',
          years: '15+'
        },
        {
          name: 'Uganda',
          flag: '🇺🇬',
          description: 'Sauti 116 Helpline and social protection systems deployment.',
          projects: '25+',
          years: '8+'
        },
        {
          name: 'Tanzania',
          flag: '🇹🇿',
          description: 'Child protection systems and health data integration projects.',
          projects: '20+',
          years: '6+'
        },
        {
          name: 'Lesotho',
          flag: '🇱🇸',
          description: 'Government digitization and national helpline operations.',
          projects: '10+',
          years: '3+'
        },
        {
          name: 'Somalia',
          flag: '🇸🇴',
          description: 'Deployment of crisis response and child protection platforms.',
          projects: '5+',
          years: '2+'
        }
      ]
    }
  },

  trustSignals: {
    headline: "Trusted by government and institutional partners",
    subheadline: "UNICEF Venture Fund recipient | Systems deployed across five countries",
    badges: ["UNICEF Venture Fund", "KDEAP Digital Assessment"]
  },

  services: {
    sectionTitle: "Service Offerings",
    sectionDescription: "We integrate strategic advisory with technical execution, focusing on the design and operation of mission-critical digital infrastructure.",
    items: [
      {
        id: "consulting",
        title: "Consulting Services",
        overview: "We provide strategic technology advisory for public and private institutions. We focus on assessing digital maturity, designing architectures for scale, and aligning technology investments with institutional policy and governance frameworks.",
        whatWeDo: [
          "Conduct national and institutional digital maturity assessments",
          "Design technical architectures for large-scale e-service platforms",
          "Develop digital transformation roadmaps and investment strategies",
          "Draft ICT governance frameworks and data protection protocols",
          "Audit digital record systems for compliance and operational efficiency",
          "Consult on the adoption and localization of Digital Public Goods (DPGs)"
        ],
        engagements: [
          "National-level digital acceleration assessments to identify infrastructure gaps",
          "Advisory on the transition from manual to digital government record management",
          "Strategic planning for cross-agency system interoperability"
        ],
        experience: [
          { name: "KDEAP Digital Assessment", detail: "Consulting and technical assessment for national economic acceleration and digital infrastructure readiness." },
          { name: "ICTA Engagement", detail: "Advisory services on digital records management, e-services delivery, and public sector ICT governance." }
        ],
        outcomes: [
          "Mitigated implementation risk for large-scale technology projects",
          "Clear, actionable roadmaps for institutional digitization",
          "Standardized governance frameworks ensuring compliance and security"
        ]
      },
      {
        id: "software",
        title: "Software Development & Systems Implementation",
        overview: "We design and deploy high-availability software platforms that manage complex operational workflows. Our specialization lies in case management, integrated CRM systems, and multi-country system rollouts.",
        whatWeDo: [
          "Develop and implement custom enterprise software platforms",
          "Implement integrated CRM and call center systems",
          "Deploy national-scale case management solutions (VAC, GBV, Mental Health)",
          "Implement Electronic Medical Record (EMR) systems (OPENHMIS)",
          "Integrate fragmented legacy data into unified operational platforms",
          "Manage end-to-end implementation from requirements to 24/7 support"
        ],
        flagship: {
          name: "Child Helpline Systems (116)",
          countries: "Kenya, Uganda, Tanzania, Lesotho, Somalia",
          description: "An active, operational national crisis response platform supporting case management and multi-channel call handling."
        },
        engagements: [
          "National crisis response and helpline rollouts across five countries",
          "Modernization of operational systems for financial cooperatives (SACCOs)",
          "Digitization of clinical and inventory workflows in regional health facilities"
        ],
        experience: [
          { name: "Child Helpline Systems (116)", detail: "Multi-country implementation and operation of national helplines." },
          { name: "Tower SACCO", detail: "Implementation of an integrated CRM and call center for member management." },
          { name: "OPENHMIS", detail: "Deployment of Electronic Medical Records (EMR) and inventory systems." }
        ],
        outcomes: [
          "Reduced processing time for critical services (loans, crisis response)",
          "Unified visibility across disparate case and member records",
          "Automated reporting for regulatory and donor compliance"
        ]
      },
      {
        id: "ai-data",
        title: "AI & Data Services",
        overview: "We implement machine learning and data infrastructure to optimize institutional operations. We focus on automating high-volume tasks, such as triage and documentation, while building robust data pipelines.",
        whatWeDo: [
          "Develop custom machine learning models for operational automation",
          "Implement LLM-based systems for automated triage and case summarization",
          "Design and build document intelligence and transcription systems",
          "Engineer scalable data pipelines and real-time analytics dashboards",
          "Configure open-source AI platforms as Digital Public Goods",
          "Build systems for multi-lingual call transcription and translation"
        ],
        dpgEmphasis: {
          title: "Digital Public Goods",
          content: "We are committed to the builder-operator model for DPGs. Our OpenCHS platform is designed for public sector adoption, ensuring scalability without vendor lock-in."
        },
        engagements: [
          "AI-powered triage for high-volume crisis helplines to prioritize urgent cases",
          "Automated consolidation of health data for national reporting",
          "Implementation of automated call transcription for multi-lingual delivery"
        ],
        experience: [
          { name: "UNICEF Venture Fund", detail: "Development of AI systems for helplines, including transcription, translation, and summarization." },
          { name: "OpenCHS / AI Platforms", detail: "Open-source case management infrastructure built for public sector adoption." }
        ],
        outcomes: [
          "Increased service delivery capacity through automated triage",
          "Enhanced accuracy in multi-lingual data collection",
          "Real-time operational intelligence for national stakeholders"
        ]
      }
    ]
  },

  sectorFocus: {
    sectionTitle: "Sector Expertise",
    sectors: [
      {
        title: "Government and Social Protection",
        description: "National-scale systems for public service delivery and crisis response."
      },
      {
        title: "Healthcare",
        description: "Electronic medical records and health information systems (OPENHMIS)."
      },
      {
        title: "Financial Services",
        description: "Member management and operational platforms for cooperatives (Tower SACCO)."
      },
      {
        title: "International Development",
        description: "Monitoring and reporting systems for donor-funded programs."
      }
    ]
  },

  contact: {
    title: "Discuss a project",
    description: "Discuss your technical requirements with our engineering team.",
    actions: [
      {
        text: "Request Consultation",
        link: "/contact",
        type: "primary"
      }
    ]
  }
}
