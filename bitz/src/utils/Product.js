export const productsData = [
  {
    id: 1,
    menu_name: "OPENCHS",
    menu_description: "National Helpline Platform",
    title: "Child Helpline Systems (116)",
    description: "A national crisis response platform operational in five countries, integrating intake, case management, and cross-agency coordination.",
    Modules: "Multi-channel intake (voice, SMS, chat), Case tracking and escalation, AI-powered triage, Real-time reporting",
    imageUrl: '/src/assets/display_photos/product1.jpg',
    features: [
      {
        Module: "System Intake",
        Feature: "Multi-channel Capability",
        Description: "Unified access via dial 116, SMS, and chat, providing a single entry point for crisis support.",
        imageUrl: '/src/assets/display_photos/feature_call.jpg',
      },
      {
        Module: "Case Management",
        Feature: "Escalation Protocols",
        Description: "Tracked cases with predefined escalation paths to ensure timely intervention and cross-agency coordination.",
        imageUrl: '/src/assets/display_photos/feature_workflow.jpg',
      },
      {
        Module: "Intelligence",
        Feature: "AI-Powered Triage",
        Description: "Initial automated assessment to categorize cases and prioritize urgent interventions.",
        imageUrl: '/src/assets/display_photos/feature_qa.jpg',
      },
      {
        Module: "Operations",
        Feature: "24/7 National Coverage",
        Description: "Infrastructure designed for high availability and multi-country deployment.",
        imageUrl: '/src/assets/display_photos/feature_dashboard.jpg',
      }
    ],
    outcome: "Hours to minutes response time. Operational across 5 countries. 10,000+ monthly calls."
  },
  {
    id: 2,
    menu_name: "OPENHMIS",
    menu_description: "Electronic Health Records",
    title: "Electronic Medical Records & Inventory",
    description: "A comprehensive health management system for healthcare facilities, digitizing patient history and automating Ministry reporting.",
    Modules: "Electronic Medical Records, Inventory management, Laboratory integration, Automated MOH reporting",
    imageUrl: '/src/assets/display_photos/product2.jpg',
    features: [
      {
        Module: "Clinical",
        Feature: "Digitized Patient History",
        Description: "Centralized access to patient medical records across multiple visits and facilities.",
        imageUrl: '/src/assets/display_photos/feature_files.jpg',
      },
      {
        Module: "Supply Chain",
        Feature: "Inventory Tracking",
        Description: "Real-time monitoring of drug stock levels to prevent stockouts and manage replenishment.",
        imageUrl: '/src/assets/display_photos/feature_crm.jpg',
      },
      {
        Module: "Reporting",
        Feature: "Automated MOH Reports",
        Description: "Direct generation of reports for Ministry of Health compliance, reducing manual effort.",
        imageUrl: '/src/assets/display_photos/feature_reports.jpg',
      }
    ],
    outcome: "50,000+ records digitized. Reporting time reduced from 2 weeks to 2 days."
  },
  {
    id: 3,
    menu_name: "Financial Operations",
    menu_description: "Cooperative Management",
    title: "SACCO CRM & Member Management",
    description: "An operational platform for financial cooperatives to consolidate member records and automate loan workflows.",
    Modules: "Consolidated Member View, Automated Loan Processing, Call Center Integration, Financial Reporting",
    imageUrl: '/src/assets/display_photos/product3.jpg',
    features: [
      {
        Module: "Member Services",
        Feature: "Unified Member Records",
        Description: "A single source of truth for all member data, replacing fragmented spreadsheets.",
        imageUrl: '/src/assets/display_photos/feature_crm2.jpg',
      },
      {
        Module: "Credit",
        Feature: "Loan Workflow Automation",
        Description: "Digital end-to-end loan application and approval process for faster disbursements.",
        imageUrl: '/src/assets/display_photos/feature_workflow.jpg',
      },
      {
        Module: "Engagement",
        Feature: "Integrated Call Center",
        Description: "IVR and ticket tracking to improve member service and satisfaction.",
        imageUrl: '/src/assets/display_photos/feature_call.jpg',
      }
    ],
    outcome: "Loan processing time reduced from 5 days to 1 day. 5,000+ members managed."
  }
]

export const projectsData = [
  {
    id: 'pr1',
    title: 'National Child Helpline Systems (116)',
    category: 'Government & Social Protection',
    description: 'Unified crisis response platform deployed across five countries.',
    client: 'National Agencies & International Partners',
    technologies: ['Cloud-based call center', 'Multi-channel intake', 'CRM Case Tracking', 'AI Triage'],
    status: 'Operational',
    duration: 'Ongoing',
    teamSize: 'Multi-disciplinary',
    imageUrl: '/src/assets/display_photos/project1.jpg',
    fullDescription: 'Deployment of a unified helpline platform with cloud-based call center infrastructure, multi-channel intake (voice, SMS, chat), and AI-powered triage.',
    features: [
      '24/7 National Operations',
      'Real-time Reporting Dashboard',
      'Cross-agency coordination',
      'Secure data management'
    ],
    challenge: 'Fragmented crisis response and no centralized case management.',
    solution: 'Unified national platform with 24/7 access (dial 116).'
  },
  {
    id: 'pr2',
    title: 'OPENHMIS Deployment',
    category: 'Healthcare',
    description: 'Digitization of patient records and inventory in health facilities.',
    client: 'Regional Health Facilities',
    technologies: ['Electronic Medical Records', 'Inventory Module', 'MOH Reporting Automation'],
    status: 'Active',
    duration: '18 months',
    teamSize: 'Technical Leads',
    imageUrl: '/src/assets/display_photos/project2.jpg',
    fullDescription: 'Deployment of OPENHMIS with modules for registration, pharmacy, laboratory, and automated government reporting.',
    features: [
      '50,000+ patient records digitized',
      'Real-time drug inventory tracking',
      'Offline capability for connectivity gaps'
    ],
    challenge: 'Paper-based records and 2-week delays in Ministry reporting.',
    solution: 'Integrated electronic health management system.'
  },
  {
    id: 'pr3',
    title: 'Tower SACCO Digital Transformation',
    category: 'Financial Services',
    description: 'Operational system upgrade for a 5,000+ member cooperative.',
    client: 'Tower SACCO',
    technologies: ['Integrated CRM', 'Call Center with IVR', 'Automated Loan Workflow'],
    status: 'Completed',
    duration: '12 months',
    teamSize: 'Core Development Team',
    imageUrl: '/src/assets/display_photos/project3.jpg',
    fullDescription: 'Transition from manual spreadsheets to an integrated digital platform for member management and loan processing.',
    features: [
      'Loan processing: 5 days to 1 day',
      'Real-time balance inquiries',
      'Automated financial reporting'
    ],
    challenge: 'Manual loan processing and fragmented member data.',
    solution: 'Integrated CRM and automated operational workflows.'
  }
] 
