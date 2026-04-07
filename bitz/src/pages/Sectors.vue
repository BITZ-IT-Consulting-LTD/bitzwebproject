<template>
  <div class="sectors bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="max-w-3xl" v-scroll-animate>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Solutions by Sector</p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Sector-specific problems, proven interventions
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            We document what is broken, what we do, and what changes. Each sector solution is backed by operational systems handling real cases.
          </p>
        </div>
      </div>
    </section>

    <!-- Government and Social Protection -->
    <section class="py-24 bg-white" id="government">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" v-scroll-animate>
          <div class="lg:col-span-4">
            <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Sector 01</div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded text-xs font-bold uppercase mb-6 tracking-wider">
              <Award :size="12" /> UNICEF Funded
            </div>
            <h2 class="text-3xl font-bold text-primary mb-6">Government and Social Protection</h2>
            <div class="bg-navy-900 text-white p-6 rounded-sm">
              <h3 class="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Systems Deployed</h3>
              <ul class="space-y-2 text-sm text-slate-300">
                <li>• Child Helpline 116 (5 countries)</li>
                <li>• VAC Case Management</li>
                <li>• GBV Response Platforms</li>
                <li>• Migrant Worker Support</li>
              </ul>
            </div>
          </div>
          <div class="lg:col-span-8 space-y-8">
            <!-- What is broken -->
            <div class="border-l-4 border-red-500 pl-6">
              <h3 class="text-lg font-bold text-primary mb-3">What is broken</h3>
              <p class="text-text-secondary leading-relaxed">
                Crisis response systems are fragmented. Vulnerable populations cannot access help. Agencies operate in silos with no unified case management. Children experiencing violence face long wait times, language barriers, and overwhelmed operators juggling multiple cases.
              </p>
            </div>
            <!-- What we do -->
            <div class="border-l-4 border-secondary pl-6">
              <h3 class="text-lg font-bold text-primary mb-3">What we do</h3>
              <p class="text-text-secondary leading-relaxed mb-4">
                We design and operate national helpline platforms that integrate intake, case management, and cross-agency coordination. Our OpenCHS platform—registered as a Digital Public Good—provides 24/7 crisis response capabilities.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-slate-50 rounded-sm">
                  <h4 class="font-bold text-sm text-primary mb-2">Call Center Systems</h4>
                  <p class="text-xs text-text-secondary">Multi-channel intake: voice, SMS, WhatsApp, web</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-sm">
                  <h4 class="font-bold text-sm text-primary mb-2">Case Management</h4>
                  <p class="text-xs text-text-secondary">VAC, GBV, Migrant Worker specialized workflows</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-sm">
                  <h4 class="font-bold text-sm text-primary mb-2">AI Triage</h4>
                  <p class="text-xs text-text-secondary">UNICEF-funded automated case prioritization</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-sm">
                  <h4 class="font-bold text-sm text-primary mb-2">Cross-agency Coord</h4>
                  <p class="text-xs text-text-secondary">Multi-stakeholder case referral system</p>
                </div>
              </div>
            </div>
            <!-- What changes -->
            <div class="bg-slate-50 p-8 border border-slate-200 rounded-sm">
              <h3 class="text-lg font-bold text-primary mb-4">What changes</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">10,000+</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Monthly Calls</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">5</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Countries</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">Minutes</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Response Time</div>
                </div>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Single access point for crisis support (dial 116)</span>
                </li>
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Tracked cases with escalation protocols</span>
                </li>
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Unified reporting across government agencies</span>
                </li>
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">AI reduces counselor administrative burden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Healthcare -->
    <section class="py-24 bg-background" id="healthcare">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" v-scroll-animate>
          <div class="lg:col-span-4">
            <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Sector 02</div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 border border-green-200 rounded text-xs font-bold uppercase mb-6 tracking-wider">
              <Stethoscope :size="12" /> Healthcare
            </div>
            <h2 class="text-3xl font-bold text-primary mb-6">Healthcare</h2>
            <div class="bg-primary text-white p-6 rounded-sm">
              <h3 class="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Systems Deployed</h3>
              <ul class="space-y-2 text-sm text-slate-300">
                <li>• OPENHMIS EMR Platform</li>
                <li>• Patient Registration Systems</li>
                <li>• Pharmacy & Inventory</li>
                <li>• MOH Reporting Automation</li>
              </ul>
            </div>
          </div>
          <div class="lg:col-span-8 space-y-8">
            <!-- What is broken -->
            <div class="border-l-4 border-red-500 pl-6">
              <h3 class="text-lg font-bold text-primary mb-3">What is broken</h3>
              <p class="text-text-secondary leading-relaxed">
                Patient records are paper-based and fragmented. Facilities cannot track history. Drug stockouts are common. Reporting to ministries is manual and delayed by weeks. Patient wait times are excessive.
              </p>
            </div>
            <!-- What we do -->
            <div class="border-l-4 border-secondary pl-6">
              <h3 class="text-lg font-bold text-primary mb-3">What we do</h3>
              <p class="text-text-secondary leading-relaxed mb-4">
                We implement electronic medical record systems with inventory management, automated reporting, and offline capability. OPENHMIS handles patient registration, clinical workflows, pharmacy, and laboratory integration.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-white rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">Electronic Records</h4>
                  <p class="text-xs text-text-secondary">Patient history across visits and facilities</p>
                </div>
                <div class="p-4 bg-white rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">Inventory Tracking</h4>
                  <p class="text-xs text-text-secondary">Real-time drug stock monitoring</p>
                </div>
                <div class="p-4 bg-white rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">MOH Reporting</h4>
                  <p class="text-xs text-text-secondary">Automated Ministry compliance reports</p>
                </div>
                <div class="p-4 bg-white rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">Offline Mode</h4>
                  <p class="text-xs text-text-secondary">Works without constant connectivity</p>
                </div>
              </div>
            </div>
            <!-- What changes -->
            <div class="bg-white p-8 border border-slate-200 rounded-sm">
              <h3 class="text-lg font-bold text-primary mb-4">What changes</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">50,000+</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Records Digitized</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">2 Days</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Reporting Time</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">-30%</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Wait Times</div>
                </div>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Digitized patient history accessible across visits</span>
                </li>
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Real-time drug inventory tracking prevents stockouts</span>
                </li>
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Automated reporting to Ministry of Health</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Financial Services -->
    <section class="py-24 bg-white" id="financial">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" v-scroll-animate>
          <div class="lg:col-span-4">
            <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Sector 03</div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 border border-blue-200 rounded text-xs font-bold uppercase mb-6 tracking-wider">
              <Building2 :size="12" /> Financial Services
            </div>
            <h2 class="text-3xl font-bold text-primary mb-6">Financial Services</h2>
            <div class="bg-primary text-white p-6 rounded-sm">
              <h3 class="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Systems Deployed</h3>
              <ul class="space-y-2 text-sm text-slate-300">
                <li>• Tower SACCO CRM</li>
                <li>• Member Management</li>
                <li>• Loan Workflow Automation</li>
                <li>• Integrated Call Center</li>
              </ul>
            </div>
          </div>
          <div class="lg:col-span-8 space-y-8">
            <!-- What is broken -->
            <div class="border-l-4 border-red-500 pl-6">
              <h3 class="text-lg font-bold text-primary mb-3">What is broken</h3>
              <p class="text-text-secondary leading-relaxed">
                Member management relies on spreadsheets. Loan processing is manual and takes days. Customer service has no ticket tracking. No unified view of member relationships. Monthly reporting is manual and error-prone.
              </p>
            </div>
            <!-- What we do -->
            <div class="border-l-4 border-secondary pl-6">
              <h3 class="text-lg font-bold text-primary mb-3">What we do</h3>
              <p class="text-text-secondary leading-relaxed mb-4">
                We build CRM and call center platforms with automated workflows and real-time reporting. Our SACCO solutions provide 360-degree member views with end-to-end loan automation.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-slate-50 rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">CRM Platform</h4>
                  <p class="text-xs text-text-secondary">360-degree member relationship view</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">Loan Automation</h4>
                  <p class="text-xs text-text-secondary">Digital application to disbursement</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">Call Center</h4>
                  <p class="text-xs text-text-secondary">IVR and ticket tracking integration</p>
                </div>
                <div class="p-4 bg-slate-50 rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">SMS Alerts</h4>
                  <p class="text-xs text-text-secondary">Automated member notifications</p>
                </div>
              </div>
            </div>
            <!-- What changes -->
            <div class="bg-slate-50 p-8 border border-slate-200 rounded-sm">
              <h3 class="text-lg font-bold text-primary mb-4">What changes</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">5,000+</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Members</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">1 Day</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Loan Processing</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-secondary mb-1">+40%</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Satisfaction</div>
                </div>
              </div>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Consolidated member records</span>
                </li>
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary font-semibold">Loan processing: 5 days to 1 day</span>
                </li>
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Real-time balance inquiries</span>
                </li>
                <li class="flex items-start gap-3">
                  <Check class="text-secondary shrink-0 mt-0.5" :size="18" />
                  <span class="text-text-primary">Automated monthly reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- International Development -->
    <section class="py-24 bg-background" id="development">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start" v-scroll-animate>
          <div class="lg:col-span-4">
            <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Sector 04</div>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 border border-purple-200 rounded text-xs font-bold uppercase mb-6 tracking-wider">
              <Globe :size="12" /> International Development
            </div>
            <h2 class="text-3xl font-bold text-primary mb-6">International Development</h2>
            <div class="bg-primary text-white p-6 rounded-sm">
              <h3 class="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Services Delivered</h3>
              <ul class="space-y-2 text-sm text-slate-300">
                <li>• Digital Assessment (KDEAP)</li>
                <li>• ICTA Consulting</li>
                <li>• Donor Reporting Systems</li>
                <li>• Program Monitoring</li>
              </ul>
            </div>
          </div>
          <div class="lg:col-span-8 space-y-8">
            <!-- What is broken -->
            <div class="border-l-4 border-red-500 pl-6">
              <h3 class="text-lg font-bold text-primary mb-3">What is broken</h3>
              <p class="text-text-secondary leading-relaxed">
                Donor reporting requires manual compilation from multiple tools. Program monitoring is retrospective. Field data does not reach decision-makers in time. Digital transformation lacks clear roadmaps.
              </p>
            </div>
            <!-- What we do -->
            <div class="border-l-4 border-secondary pl-6">
              <h3 class="text-lg font-bold text-primary mb-3">What we do</h3>
              <p class="text-text-secondary leading-relaxed mb-4">
                We integrate data systems and build real-time monitoring platforms with automated reporting. Our consulting services provide digital maturity assessments and implementation roadmaps based on real deployment experience.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 bg-white rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">Digital Assessment</h4>
                  <p class="text-xs text-text-secondary">Maturity and readiness evaluation</p>
                </div>
                <div class="p-4 bg-white rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">ICT Governance</h4>
                  <p class="text-xs text-text-secondary">Frameworks for digital records & e-services</p>
                </div>
                <div class="p-4 bg-white rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">Data Integration</h4>
                  <p class="text-xs text-text-secondary">Unified program data from multiple sources</p>
                </div>
                <div class="p-4 bg-white rounded-sm border border-slate-200">
                  <h4 class="font-bold text-sm text-primary mb-2">Auto Reporting</h4>
                  <p class="text-xs text-text-secondary">Automated donor compliance reports</p>
                </div>
              </div>
            </div>
            <!-- Track Record -->
            <div class="bg-white p-8 border border-slate-200 rounded-sm">
              <h3 class="text-lg font-bold text-primary mb-4">Track Record</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-sm">
                  <CheckCircle class="text-secondary shrink-0" :size="20" />
                  <div>
                    <h4 class="font-bold text-primary">KDEAP Digital Assessment</h4>
                    <p class="text-sm text-text-secondary">National economic acceleration and digital infrastructure readiness assessment completed.</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-sm">
                  <CheckCircle class="text-secondary shrink-0" :size="20" />
                  <div>
                    <h4 class="font-bold text-primary">ICTA Engagement</h4>
                    <p class="text-sm text-text-secondary">Advisory on digital records management, e-services delivery, and public sector ICT governance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-primary text-white">
      <div class="container-custom mx-auto px-6 text-center" v-scroll-animate>
        <h2 class="text-3xl font-bold mb-6">Discuss requirements for your sector</h2>
        <p class="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          We assess sector-specific challenges and design appropriate technical responses based on proven operational systems.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-white font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-blue-600 transition-all">
          Request Consultation <ArrowRight :size="18" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  Check, 
  ArrowRight, 
  CheckCircle,
  Award,
  Stethoscope,
  Building2,
  Globe
} from 'lucide-vue-next'
import { vScrollAnimate } from '@/composables/useScrollAnimation'
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}

section[id] {
  scroll-margin-top: 100px;
}
</style>
