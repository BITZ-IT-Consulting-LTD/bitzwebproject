<template>
  <div class="products bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="max-w-3xl" v-scroll-animate>
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 border border-white/20 rounded text-xs font-bold uppercase mb-6 tracking-widest">
            <Globe :size="12" /> Digital Public Good
          </div>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Solutions</p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Operational platforms, not slide decks
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            These systems are running in production across five countries. They handle real cases, real patients, real members—24/7.
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions Grid -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="space-y-24">
          
          <!-- OpenCHS - Child Helpline -->
          <div class="solution-block" id="openchs" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="order-2 lg:order-1">
                <img src="/src/assets/display_photos/dashboard.jpg" alt="OpenCHS Dashboard" class="rounded-lg shadow-xl border border-slate-200" />
              </div>
              <div class="order-1 lg:order-2">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded text-xs font-bold uppercase mb-4 tracking-wider">
                  <Award :size="12" /> UNICEF Funded
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">OpenCHS / Child Helpline 116</h2>
                <p class="text-text-secondary text-lg mb-6 leading-relaxed">
                  National crisis response platform for child protection and GBV survivors. Multi-channel intake, AI-powered triage, and case management in one integrated system.
                </p>
                
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <div class="text-2xl font-bold text-secondary">10,000+</div>
                    <div class="text-xs text-slate-500 uppercase tracking-wider">Monthly Calls</div>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <div class="text-2xl font-bold text-secondary">5</div>
                    <div class="text-xs text-slate-500 uppercase tracking-wider">Countries</div>
                  </div>
                </div>

                <div class="space-y-3 mb-8">
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Multi-channel intake:</strong> Voice, SMS, WhatsApp, Web</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>AI triage:</strong> Automatic case prioritization and summarization</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>VAC/GBV workflows:</strong> Specialized case management for protection</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Cross-agency coordination:</strong> Multi-stakeholder case referral</span>
                  </div>
                </div>

                <div class="p-4 bg-navy-900 text-white rounded-sm">
                  <div class="flex items-center gap-2 mb-2">
                    <Globe :size="14" class="text-secondary" />
                    <span class="text-xs font-bold text-secondary uppercase tracking-widest">Digital Public Good</span>
                  </div>
                  <p class="text-sm text-slate-300">Open-source platform available for any country to adopt. No licensing fees. Full country ownership.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="section-divider"></div>

          <!-- OPENHMIS -->
          <div class="solution-block" id="openhmis" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 border border-green-200 rounded text-xs font-bold uppercase mb-4 tracking-wider">
                  <Stethoscope :size="12" /> Healthcare
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">OPENHMIS</h2>
                <p class="text-text-secondary text-lg mb-6 leading-relaxed">
                  Electronic Medical Records and health information system. Patient registration, clinical workflows, pharmacy inventory, and automated Ministry reporting.
                </p>
                
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <div class="text-2xl font-bold text-secondary">50,000+</div>
                    <div class="text-xs text-slate-500 uppercase tracking-wider">Patient Records</div>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <div class="text-2xl font-bold text-secondary">2 Days</div>
                    <div class="text-xs text-slate-500 uppercase tracking-wider">MOH Reporting</div>
                  </div>
                </div>

                <div class="space-y-3 mb-8">
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Patient Management:</strong> Registration, history, queue management</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Pharmacy & Inventory:</strong> Drug tracking, stock alerts, dispensing</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Laboratory Integration:</strong> Test orders and results management</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Offline Capability:</strong> Works without constant connectivity</span>
                  </div>
                </div>

                <div class="p-4 bg-green-50 border border-green-100 rounded-sm">
                  <p class="text-sm text-green-800"><strong>Impact:</strong> Reporting time reduced from 2 weeks to 2 days. Patient wait times reduced by 30%.</p>
                </div>
              </div>
              <div>
                <img src="/src/assets/display_photos/feature_files.jpg" alt="OPENHMIS" class="rounded-lg shadow-xl border border-slate-200" />
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="section-divider"></div>

          <!-- SACCO CRM -->
          <div class="solution-block" id="sacco-crm" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="order-2 lg:order-1">
                <img src="/src/assets/display_photos/feature_crm.jpg" alt="SACCO CRM" class="rounded-lg shadow-xl border border-slate-200" />
              </div>
              <div class="order-1 lg:order-2">
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 border border-blue-200 rounded text-xs font-bold uppercase mb-4 tracking-wider">
                  <Building2 :size="12" /> Financial Services
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">SACCO CRM & Operations</h2>
                <p class="text-text-secondary text-lg mb-6 leading-relaxed">
                  Member management, loan processing, and call center integration for financial cooperatives. From spreadsheets to automated workflows.
                </p>
                
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <div class="text-2xl font-bold text-secondary">5,000+</div>
                    <div class="text-xs text-slate-500 uppercase tracking-wider">Members</div>
                  </div>
                  <div class="p-4 bg-slate-50 rounded-sm border border-slate-100">
                    <div class="text-2xl font-bold text-secondary">1 Day</div>
                    <div class="text-xs text-slate-500 uppercase tracking-wider">Loan Processing</div>
                  </div>
                </div>

                <div class="space-y-3 mb-8">
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Member 360° View:</strong> Complete relationship history</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Automated Loans:</strong> End-to-end digital workflow</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>Call Center IVR:</strong> Member self-service via phone</span>
                  </div>
                  <div class="flex items-start gap-3">
                    <Check class="text-secondary shrink-0 mt-1" :size="16" />
                    <span class="text-sm text-text-secondary"><strong>SMS Notifications:</strong> Automated member alerts</span>
                  </div>
                </div>

                <div class="p-4 bg-blue-50 border border-blue-100 rounded-sm">
                  <p class="text-sm text-blue-800"><strong>Result:</strong> Loan processing time reduced from 5 days to 1 day. Customer satisfaction increased by 40%.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="section-divider"></div>

          <!-- AI Services -->
          <div class="solution-block" id="ai-services" v-scroll-animate>
            <div class="bg-navy-900 text-white p-8 md:p-12 rounded-lg">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded text-xs font-bold uppercase mb-4 tracking-wider">
                    <Sparkles :size="12" /> AI-Powered
                  </div>
                  <h2 class="text-3xl font-bold mb-4">OpenCHS AI Service</h2>
                  <p class="text-slate-400 text-lg mb-6 leading-relaxed">
                    UNICEF Venture Fund investment ($99,500) to develop AI capabilities for child protection helplines. Voice recognition, transcription, and automated triage.
                  </p>
                  
                  <div class="space-y-4">
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 bg-white/5 rounded flex items-center justify-center shrink-0">
                        <Mic class="text-secondary" :size="20" />
                      </div>
                      <div>
                        <h4 class="font-bold mb-1">Speech Recognition</h4>
                        <p class="text-sm text-slate-400">Telephony-optimized ASR for East African accents. 100+ hours of training data.</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 bg-white/5 rounded flex items-center justify-center shrink-0">
                        <Languages class="text-secondary" :size="20" />
                      </div>
                      <div>
                        <h4 class="font-bold mb-1">Translation</h4>
                        <p class="text-sm text-slate-400">Swahili-English translation for case review and cross-border coordination.</p>
                      </div>
                    </div>
                    <div class="flex items-start gap-4">
                      <div class="w-10 h-10 bg-white/5 rounded flex items-center justify-center shrink-0">
                        <Brain class="text-secondary" :size="20" />
                      </div>
                      <div>
                        <h4 class="font-bold mb-1">Smart Triage</h4>
                        <p class="text-sm text-slate-400">Automated case classification and prioritization. Urgent cases get immediate attention.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="space-y-6">
                  <div class="p-6 bg-white/5 rounded border border-white/10">
                    <h3 class="text-sm font-bold text-secondary uppercase tracking-widest mb-4">AI Impact</h3>
                    <ul class="space-y-3 text-sm">
                      <li class="flex items-center gap-3">
                        <TrendingUp class="text-secondary" :size="16" />
                        <span>Fewer dropped calls during high volume</span>
                      </li>
                      <li class="flex items-center gap-3">
                        <Clock class="text-secondary" :size="16" />
                        <span>Faster crisis response times</span>
                      </li>
                      <li class="flex items-center gap-3">
                        <Users class="text-secondary" :size="16" />
                        <span>Reduced counselor administrative burden</span>
                      </li>
                      <li class="flex items-center gap-3">
                        <FileText class="text-secondary" :size="16" />
                        <span>Auto-generated case summaries</span>
                      </li>
                    </ul>
                  </div>
                  <div class="p-6 bg-secondary/10 rounded border border-secondary/30">
                    <p class="text-sm text-slate-300 italic">
                      "AI helps ensure fewer dropped or missed calls and improves service continuity. This innovation strengthens child protection systems across Africa."
                    </p>
                    <p class="text-xs text-secondary mt-2">— Michael Marwa, CEO of C-Sema (Tanzania)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-primary text-white text-center">
      <div class="container-custom mx-auto px-6" v-scroll-animate>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">See these systems in action</h2>
        <p class="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          We can demonstrate operational platforms and discuss how they might address your specific requirements.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 px-10 py-4 bg-secondary text-white font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-blue-600 transition-all">
          Request a Demo <ArrowRight :size="18" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  Check, 
  ArrowRight, 
  Award,
  Globe,
  Stethoscope,
  Building2,
  Sparkles,
  Mic,
  Languages,
  Brain,
  TrendingUp,
  Clock,
  Users,
  FileText
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

.solution-block {
  scroll-margin-top: 100px;
}
</style>
