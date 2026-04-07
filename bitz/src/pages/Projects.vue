<template>
  <div class="projects bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="max-w-3xl" v-scroll-animate>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Case Studies</p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Documented capability through operational systems
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            These aren't concept documents. These are systems running in production, handling real cases, serving real people, 24/7.
          </p>
        </div>
      </div>
    </section>

    <!-- Case Studies List -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="space-y-32">
          
          <!-- Case Study 1: Child Helpline / UNICEF -->
          <div class="case-study" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <!-- Left: Summary -->
              <div class="lg:col-span-4">
                <div class="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Case Study 01</div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded text-xs font-bold uppercase mb-4 tracking-wider">
                  <Award :size="12" /> UNICEF Funded
                </div>
                <h2 class="text-3xl font-bold text-primary mb-6 leading-tight">National Child Helpline Systems (116)</h2>
                <div class="space-y-4 mb-6">
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Context</h4>
                    <p class="text-sm text-text-secondary leading-relaxed">
                      National child protection agencies in five countries needed unified crisis response capability for VAC and GBV cases.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Client</h4>
                    <p class="text-sm font-bold text-primary">National Agencies & UNICEF</p>
                  </div>
                  <div class="p-4 bg-navy-900 text-white rounded-sm">
                    <h4 class="text-xs font-bold text-secondary uppercase tracking-widest mb-2">UNICEF Investment</h4>
                    <p class="text-sm text-slate-300">$99,500 Venture Fund for AI development</p>
                  </div>
                </div>
                <div class="p-4 bg-secondary/5 border border-secondary/20 rounded-sm">
                  <span class="text-xs font-bold text-secondary uppercase tracking-widest">Services Delivered</span>
                  <ul class="text-sm text-text-secondary mt-2 space-y-1">
                    <li>• Call Center Development</li>
                    <li>• Case Management (VAC/GBV)</li>
                    <li>• AI Automation Systems</li>
                    <li>• Cloud Operations</li>
                  </ul>
                </div>
              </div>

              <!-- Right: Details -->
              <div class="lg:col-span-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Problem -->
                  <div class="border-l-4 border-red-500 pl-6">
                    <h4 class="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <XCircle class="text-red-500" :size="20" />
                      Problem
                    </h4>
                    <ul class="space-y-3 text-text-secondary">
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>No 24/7 access to crisis support</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Fragmented systems across agencies</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>No centralized case management for VAC/GBV</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Language barriers (40+ languages in Uganda)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Manual reporting with delays</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Intervention -->
                  <div class="border-l-4 border-secondary pl-6">
                    <h4 class="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <Settings class="text-secondary" :size="20" />
                      Intervention
                    </h4>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>OpenCHS Platform:</strong> Open-source case management</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>Multi-channel:</strong> Voice, SMS, WhatsApp, Web</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>AI Triage:</strong> Automated case prioritization</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>ASR Models:</strong> Swahili voice recognition</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>Cloud Infrastructure:</strong> AWS multi-country</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- AI Development Detail -->
                <div class="mt-8 p-6 bg-navy-50 border border-navy-100 rounded-sm">
                  <h4 class="text-sm font-bold text-navy-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Sparkles :size="16" class="text-secondary" />
                    UNICEF Venture Fund AI Development
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div class="text-2xl font-bold text-secondary mb-1">100+</div>
                      <div class="text-xs text-slate-500 uppercase tracking-wider mb-2">Hours of Training Data</div>
                      <p class="text-sm text-text-secondary">Tanzanian telephony recordings collected and annotated</p>
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-secondary mb-1">ASR</div>
                      <div class="text-xs text-slate-500 uppercase tracking-wider mb-2">Speech Recognition</div>
                      <p class="text-sm text-text-secondary">Domain-adapted for East African accents and protection vocabulary</p>
                    </div>
                    <div>
                      <div class="text-2xl font-bold text-secondary mb-1">AI</div>
                      <div class="text-xs text-slate-500 uppercase tracking-wider mb-2">Smart Triage</div>
                      <p class="text-sm text-text-secondary">Automated case classification and counselor assistance</p>
                    </div>
                  </div>
                </div>

                <!-- Outcome Box -->
                <div class="mt-8 bg-navy-900 text-white p-8 rounded-sm">
                  <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <TrendingUp class="text-secondary" :size="20" />
                    Outcome
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">5</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Countries Operational</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">10,000+</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Monthly Calls</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">Minutes</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Response Time</div>
                    </div>
                  </div>
                  <div class="mt-6 pt-6 border-t border-white/10">
                    <p class="text-slate-300 text-sm">
                      24/7 crisis support for GBV, mental health, migrant assistance. Case response time reduced from hours to minutes. AI-powered triage reduces counselor workload and ensures urgent cases get immediate attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="section-divider"></div>

          <!-- Case Study 2: Tower SACCO -->
          <div class="case-study" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <!-- Left: Summary -->
              <div class="lg:col-span-4">
                <div class="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Case Study 02</div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 border border-blue-200 rounded text-xs font-bold uppercase mb-4 tracking-wider">
                  Financial Services
                </div>
                <h2 class="text-3xl font-bold text-primary mb-6 leading-tight">Tower SACCO Digital Transformation</h2>
                <div class="space-y-4 mb-6">
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Context</h4>
                    <p class="text-sm text-text-secondary leading-relaxed">
                      Member-owned financial cooperative with 5,000+ members required operational system upgrade.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Client</h4>
                    <p class="text-sm font-bold text-primary">Tower SACCO</p>
                  </div>
                </div>
                <div class="p-4 bg-secondary/5 border border-secondary/20 rounded-sm">
                  <span class="text-xs font-bold text-secondary uppercase tracking-widest">Services Delivered</span>
                  <ul class="text-sm text-text-secondary mt-2 space-y-1">
                    <li>• SACCO CRM Development</li>
                    <li>• Call Center Integration</li>
                    <li>• Loan Workflow Automation</li>
                    <li>• Cloud Operations</li>
                  </ul>
                </div>
              </div>

              <!-- Right: Details -->
              <div class="lg:col-span-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Problem -->
                  <div class="border-l-4 border-red-500 pl-6">
                    <h4 class="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <XCircle class="text-red-500" :size="20" />
                      Problem
                    </h4>
                    <ul class="space-y-3 text-text-secondary">
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Member management in spreadsheets</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Loan processing: 5 days average</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>No ticket tracking for customer service</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Manual monthly reporting</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Intervention -->
                  <div class="border-l-4 border-secondary pl-6">
                    <h4 class="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <Settings class="text-secondary" :size="20" />
                      Intervention
                    </h4>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>CRM Platform:</strong> 360-degree member view</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>Call Center:</strong> IVR and ticket tracking</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>Loan Automation:</strong> Digital workflow</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>SMS System:</strong> Automated notifications</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Outcome Box -->
                <div class="mt-8 bg-navy-900 text-white p-8 rounded-sm">
                  <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <TrendingUp class="text-secondary" :size="20" />
                    Outcome
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">5,000+</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Members Managed</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">1 Day</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Loan Processing</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">+40%</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Customer Satisfaction</div>
                    </div>
                  </div>
                  <div class="mt-6 pt-6 border-t border-white/10">
                    <p class="text-slate-300 text-sm">
                      Loan processing reduced from 5 days to 1 day. Real-time balance inquiries enabled. Monthly reporting automated. Customer satisfaction increased by 40%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="section-divider"></div>

          <!-- Case Study 3: OPENHMIS -->
          <div class="case-study" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <!-- Left: Summary -->
              <div class="lg:col-span-4">
                <div class="text-xs font-bold text-secondary uppercase tracking-widest mb-4">Case Study 03</div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 border border-green-200 rounded text-xs font-bold uppercase mb-4 tracking-wider">
                  Healthcare
                </div>
                <h2 class="text-3xl font-bold text-primary mb-6 leading-tight">OPENHMIS Deployment</h2>
                <div class="space-y-4 mb-6">
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Context</h4>
                    <p class="text-sm text-text-secondary leading-relaxed">
                      Healthcare facilities required electronic medical records and inventory management with MOH reporting.
                    </p>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Client</h4>
                    <p class="text-sm font-bold text-primary">Regional Health Facilities</p>
                  </div>
                </div>
                <div class="p-4 bg-secondary/5 border border-secondary/20 rounded-sm">
                  <span class="text-xs font-bold text-secondary uppercase tracking-widest">Services Delivered</span>
                  <ul class="text-sm text-text-secondary mt-2 space-y-1">
                    <li>• EMR System Implementation</li>
                    <li>• Inventory Management</li>
                    <li>• MOH Reporting Automation</li>
                    <li>• Training & Support</li>
                  </ul>
                </div>
              </div>

              <!-- Right: Details -->
              <div class="lg:col-span-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <!-- Problem -->
                  <div class="border-l-4 border-red-500 pl-6">
                    <h4 class="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <XCircle class="text-red-500" :size="20" />
                      Problem
                    </h4>
                    <ul class="space-y-3 text-text-secondary">
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Paper-based patient records</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>No centralized patient history</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Manual MOH reporting (2+ weeks)</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-red-500 mt-1.5">•</span>
                        <span>Drug stockouts due to poor tracking</span>
                      </li>
                    </ul>
                  </div>

                  <!-- Intervention -->
                  <div class="border-l-4 border-secondary pl-6">
                    <h4 class="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                      <Settings class="text-secondary" :size="20" />
                      Intervention
                    </h4>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>EMR System:</strong> Electronic patient records</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>Registration:</strong> Queue management</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>Pharmacy:</strong> Inventory tracking</span>
                      </li>
                      <li class="flex items-start gap-2 text-text-primary">
                        <Check class="text-secondary shrink-0 mt-0.5" :size="16"/>
                        <span><strong>Offline Mode:</strong> Connectivity gaps</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <!-- Outcome Box -->
                <div class="mt-8 bg-navy-900 text-white p-8 rounded-sm">
                  <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <TrendingUp class="text-secondary" :size="20" />
                    Outcome
                  </h4>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">50,000+</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Records Digitized</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">2 Days</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Reporting Time</div>
                    </div>
                    <div class="text-center">
                      <div class="text-3xl font-bold text-secondary mb-1">-30%</div>
                      <div class="text-xs uppercase tracking-wider text-slate-400">Patient Wait Times</div>
                    </div>
                  </div>
                  <div class="mt-6 pt-6 border-t border-white/10">
                    <p class="text-slate-300 text-sm">
                      Real-time drug inventory tracking prevents stockouts. Offline capability ensures continuous operation during connectivity gaps. Automated MOH reporting reduces administrative burden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services Connection -->
    <section class="py-24 bg-navy-900 text-white">
      <div class="container-custom mx-auto px-6">
        <div class="text-center mb-16" v-scroll-animate>
          <h2 class="text-3xl font-bold mb-4">These case studies demonstrate our services</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">Every system shown above represents services we offer to new clients</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8" v-scroll-animate>
          <div class="text-center p-6 bg-white/5 rounded border border-white/10">
            <Phone class="text-secondary mx-auto mb-4" :size="32" />
            <h3 class="font-bold mb-2">Call Centers</h3>
            <p class="text-sm text-slate-400">Multi-channel intake platforms for national helplines</p>
          </div>
          <div class="text-center p-6 bg-white/5 rounded border border-white/10">
            <Shield class="text-secondary mx-auto mb-4" :size="32" />
            <h3 class="font-bold mb-2">Case Management</h3>
            <p class="text-sm text-slate-400">VAC, GBV, Migrant Worker protection workflows</p>
          </div>
          <div class="text-center p-6 bg-white/5 rounded border border-white/10">
            <Building2 class="text-secondary mx-auto mb-4" :size="32" />
            <h3 class="font-bold mb-2">SACCO CRM</h3>
            <p class="text-sm text-slate-400">Member management with loan automation</p>
          </div>
          <div class="text-center p-6 bg-white/5 rounded border border-white/10">
            <Stethoscope class="text-secondary mx-auto mb-4" :size="32" />
            <h3 class="font-bold mb-2">Health Systems</h3>
            <p class="text-sm text-slate-400">EMR with inventory and MOH reporting</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-background border-t border-slate-200">
      <div class="container-custom mx-auto px-6 text-center" v-scroll-animate>
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">Discuss a similar engagement</h2>
        <p class="text-text-secondary mb-10 max-w-2xl mx-auto">
          Our team is available to discuss your technical requirements and provide detailed implementation roadmaps based on proven delivery models.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-navy-800 transition-all">
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
  XCircle, 
  Settings, 
  TrendingUp,
  Sparkles,
  Award,
  Phone,
  Shield,
  Building2,
  Stethoscope
} from 'lucide-vue-next'
import { vScrollAnimate } from '@/composables/useScrollAnimation'
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}

.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #E2E8F0, transparent);
}

.case-study {
  scroll-margin-top: 100px;
}
</style>
