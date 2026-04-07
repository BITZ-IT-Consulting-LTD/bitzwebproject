<template>
  <div class="services bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="max-w-3xl" v-scroll-animate>
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 border border-white/20 rounded text-xs font-bold uppercase mb-6 tracking-widest">
            <Award :size="12" /> UNICEF Venture Fund Recipient
          </div>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Technology services connected to delivered work
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            Every service we offer is backed by operational systems running in production. We don't sell concepts—we sell proven capability.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="space-y-32">
          
          <!-- Service 1: Custom Software Development -->
          <div class="service-section" id="software-development" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div class="lg:col-span-4">
                <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Service 01</div>
                <h2 class="text-3xl font-bold text-primary mb-6">Custom Software Development</h2>
                <p class="text-text-secondary leading-relaxed mb-6">
                  We build mission-critical systems that handle real operational workloads. Our platforms are running 24/7 across five countries.
                </p>
                <div class="p-4 bg-secondary/5 border border-secondary/20 rounded-sm">
                  <span class="text-xs font-bold text-secondary uppercase tracking-widest">Digital Public Good</span>
                  <p class="text-sm text-text-secondary mt-2">OpenCHS is registered as a Digital Public Good, available for any country to adopt without licensing fees.</p>
                </div>
              </div>
              <div class="lg:col-span-8">
                <!-- Product Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div class="bg-slate-50 p-6 border border-slate-200 rounded-sm hover:border-secondary transition-all group">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center">
                        <Phone class="text-secondary" :size="20" />
                      </div>
                      <h3 class="font-bold text-primary">Call Center Systems</h3>
                    </div>
                    <p class="text-sm text-text-secondary mb-4">Multi-channel intake platforms handling voice, SMS, and chat for national helplines.</p>
                    <div class="text-xs text-slate-400">
                      <span class="font-semibold text-secondary">Deployed:</span> Kenya, Uganda, Tanzania, Lesotho, Somalia
                    </div>
                  </div>
                  
                  <div class="bg-slate-50 p-6 border border-slate-200 rounded-sm hover:border-secondary transition-all group">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center">
                        <Shield class="text-secondary" :size="20" />
                      </div>
                      <h3 class="font-bold text-primary">Case Management</h3>
                    </div>
                    <p class="text-sm text-text-secondary mb-4">Specialized workflows for VAC, GBV, and Migrant Worker protection cases.</p>
                    <div class="text-xs text-slate-400">
                      <span class="font-semibold text-secondary">Usage:</span> 10,000+ cases managed monthly
                    </div>
                  </div>
                  
                  <div class="bg-slate-50 p-6 border border-slate-200 rounded-sm hover:border-secondary transition-all group">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center">
                        <Building2 class="text-secondary" :size="20" />
                      </div>
                      <h3 class="font-bold text-primary">CRM for SACCOs</h3>
                    </div>
                    <p class="text-sm text-text-secondary mb-4">Member management with automated loan workflows and integrated call center.</p>
                    <div class="text-xs text-slate-400">
                      <span class="font-semibold text-secondary">Result:</span> 5 days to 1 day loan processing
                    </div>
                  </div>
                  
                  <div class="bg-slate-50 p-6 border border-slate-200 rounded-sm hover:border-secondary transition-all group">
                    <div class="flex items-center gap-3 mb-4">
                      <div class="w-10 h-10 bg-secondary/10 rounded-sm flex items-center justify-center">
                        <Stethoscope class="text-secondary" :size="20" />
                      </div>
                      <h3 class="font-bold text-primary">OPENHMIS (EMR)</h3>
                    </div>
                    <p class="text-sm text-text-secondary mb-4">Electronic Medical Records with inventory management and automated MOH reporting.</p>
                    <div class="text-xs text-slate-400">
                      <span class="font-semibold text-secondary">Scale:</span> 50,000+ patient records digitized
                    </div>
                  </div>
                </div>

                <!-- Connection Statement -->
                <div class="bg-navy-900 text-white p-6 rounded-sm">
                  <div class="flex items-start gap-4">
                    <CheckCircle class="text-secondary shrink-0 mt-1" :size="20" />
                    <div>
                      <h4 class="font-bold mb-2">Connected to Real Work</h4>
                      <p class="text-sm text-slate-300">These aren't product concepts—they're operational systems running in production. Child Helpline 116 platforms handle 10,000+ calls monthly. OPENHMIS manages 50,000+ patient records. Tower SACCO processes loans for 5,000+ members.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 2: AI and Automation -->
          <div class="service-section" id="ai-automation" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div class="lg:col-span-4">
                <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Service 02</div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded text-xs font-bold uppercase mb-6 tracking-wider">
                  <Award :size="12" /> UNICEF Funded
                </div>
                <h2 class="text-3xl font-bold text-primary mb-6">AI and Automation Systems</h2>
                <p class="text-text-secondary leading-relaxed mb-6">
                  $99,500 UNICEF Venture Fund investment to develop AI-powered child protection infrastructure. Voice recognition, transcription, and automated triage for helplines.
                </p>
                <div class="space-y-3">
                  <div class="flex items-center gap-2 text-sm">
                    <Check class="text-secondary" :size="16" />
                    <span>100+ hours Tanzanian telephony data</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <Check class="text-secondary" :size="16" />
                    <span>Swahili-English translation models</span>
                  </div>
                  <div class="flex items-center gap-2 text-sm">
                    <Check class="text-secondary" :size="16" />
                    <span>Automated case prioritization</span>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div class="bg-slate-50 p-8 border border-slate-200 rounded-sm">
                    <h3 class="text-sm font-bold text-primary uppercase tracking-widest mb-4">AI Capabilities</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>Automatic Speech Recognition (ASR)</strong> - Telephony-optimized for East African accents</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>Real-time Translation</strong> - Swahili to English for case review</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>Case Classification</strong> - Automated VAC/GBV categorization</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>Smart Summarization</strong> - AI-generated case notes</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>Named Entity Recognition</strong> - Auto-extract key information</span>
                      </li>
                    </ul>
                  </div>
                  <div class="space-y-6">
                    <div class="bg-primary text-white p-6 rounded-sm">
                      <h3 class="text-xs font-bold text-secondary uppercase tracking-widest mb-3">UNICEF Venture Fund Impact</h3>
                      <p class="text-sm text-slate-300 leading-relaxed">
                        "With UNICEF's support, we transformed OpenCHS from an operational helpline platform into AI-enabled, open-source protection infrastructure."
                      </p>
                    </div>
                    <div>
                      <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Real Application</h3>
                      <p class="text-sm text-text-secondary leading-relaxed">
                        AI triage in Child Helpline 116 systems reduces counselor workload by filtering non-urgent calls and prioritizing crisis cases—ensuring fewer dropped calls when children need help most.
                      </p>
                    </div>
                    <div class="p-4 bg-secondary/5 border border-secondary/20 rounded-sm">
                      <span class="text-xs font-bold text-secondary uppercase tracking-widest">Countries Using AI</span>
                      <p class="text-sm text-text-secondary mt-2">Tanzania (production), Kenya & Uganda (in development)</p>
                    </div>
                  </div>
                </div>
                <div class="mt-8 pt-8 border-t border-slate-100">
                  <div class="flex items-center gap-3">
                    <Check class="text-secondary shrink-0" :size="20" />
                    <span class="font-medium text-primary">Outcome: Reduced counselor workload. Faster crisis response. Consistent service delivery at scale.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 3: Consulting & Assessment -->
          <div class="service-section" id="consulting" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div class="lg:col-span-4">
                <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Service 03</div>
                <h2 class="text-3xl font-bold text-primary mb-6">Consulting & Digital Assessment</h2>
                <p class="text-text-secondary leading-relaxed mb-6">
                  Strategic advisory for public institutions. We assess digital maturity, design architectures, and create implementation roadmaps based on real deployment experience.
                </p>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-sm">
                  <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Featured Engagement</h4>
                  <p class="font-bold text-primary">ICTA Digital Assessment</p>
                  <p class="text-sm text-text-secondary mt-1">Digital Records, E-Services & Governance</p>
                </div>
              </div>
              <div class="lg:col-span-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div class="bg-slate-50 p-8 border border-slate-200 rounded-sm">
                    <h3 class="text-sm font-bold text-primary uppercase tracking-widest mb-4">Assessment Areas</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>Digital Records Management</strong> - Transition from manual to digital systems</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>E-Services Delivery</strong> - Citizen-facing digital service platforms</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>ICT Governance</strong> - Frameworks for public sector technology</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>Digital Maturity</strong> - National and institutional readiness</span>
                      </li>
                    </ul>
                  </div>
                  <div class="space-y-6">
                    <div>
                      <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Where it applies</h3>
                      <p class="text-sm text-text-secondary leading-relaxed">
                        Government agencies planning digital transformation. International development programs. Public institutions modernizing service delivery.
                      </p>
                    </div>
                    <div class="bg-navy-900 text-white p-6 rounded-sm">
                      <h3 class="text-xs font-bold text-secondary uppercase tracking-widest mb-2">Track Record</h3>
                      <p class="text-sm text-slate-300 leading-relaxed">
                        <strong>KDEAP Digital Assessment</strong> completed for national economic acceleration. <strong>ICTA Engagement</strong> advising on digital records and e-services governance.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mt-8 pt-8 border-t border-slate-100">
                  <div class="flex items-center gap-3">
                    <Check class="text-secondary shrink-0" :size="20" />
                    <span class="font-medium text-primary">Outcome: Clear implementation roadmaps. Risk mitigation. Realistic budgets and timelines based on proven delivery models.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Service 4: Cloud and Operations -->
          <div class="service-section" id="cloud-operations" v-scroll-animate>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div class="lg:col-span-4">
                <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Service 04</div>
                <h2 class="text-3xl font-bold text-primary mb-6">Cloud Infrastructure & Operations</h2>
                <p class="text-text-secondary leading-relaxed">
                  We don't just build and hand over—we operate. 24/7 infrastructure management for mission-critical systems across multiple countries.
                </p>
              </div>
              <div class="lg:col-span-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="bg-slate-50 p-8 border border-slate-200 rounded-sm">
                    <h3 class="text-sm font-bold text-primary uppercase tracking-widest mb-4">Capabilities</h3>
                    <ul class="space-y-3">
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>AWS Cloud Architecture</strong> - Scalable, secure infrastructure</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>DevOps & CI/CD</strong> - Automated deployment pipelines</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>24/7 Monitoring</strong> - Real-time system health tracking</span>
                      </li>
                      <li class="flex items-start gap-3">
                        <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                        <span class="text-sm"><strong>Multi-country Deployment</strong> - Cross-border infrastructure</span>
                      </li>
                    </ul>
                  </div>
                  <div class="space-y-6">
                    <div>
                      <h3 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Operational Systems</h3>
                      <ul class="space-y-2 text-sm text-text-secondary">
                        <li>• Child Helpline 116 (5 countries, 24/7)</li>
                        <li>• OPENHMIS health platforms</li>
                        <li>• SACCO member management systems</li>
                      </ul>
                    </div>
                    <div class="bg-primary text-white p-6 rounded-sm">
                      <div class="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div class="text-2xl font-bold text-secondary">99.9%</div>
                          <div class="text-xs uppercase tracking-wider text-slate-500">Uptime</div>
                        </div>
                        <div>
                          <div class="text-2xl font-bold text-secondary">5</div>
                          <div class="text-xs uppercase tracking-wider text-slate-500">Countries</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Digital Public Good CTA -->
    <section class="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-scroll-animate>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 border border-white/20 rounded text-xs font-bold uppercase mb-6 tracking-widest">
              <Globe :size="12" /> Digital Public Good
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">OpenCHS: Shared Digital Infrastructure</h2>
            <p class="text-slate-400 text-lg leading-relaxed mb-8">
              We are committed to the builder-operator model for Digital Public Goods. OpenCHS is designed for public sector adoption—ensuring scalability without vendor lock-in.
            </p>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="20" />
                <span>Open-source case management platform</span>
              </div>
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="20" />
                <span>No licensing fees for governments</span>
              </div>
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="20" />
                <span>Country ownership and control</span>
              </div>
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="20" />
                <span>Continuous improvement through community</span>
              </div>
            </div>
          </div>
          <div class="bg-white/5 p-8 rounded-lg border border-white/10" v-scroll-animate>
            <h3 class="text-xl font-bold mb-6">Countries Using OpenCHS</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center gap-3 p-3 bg-white/5 rounded">
                <span class="text-2xl">🇰🇪</span>
                <div>
                  <div class="font-bold">Kenya</div>
                  <div class="text-xs text-slate-400">Operational</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white/5 rounded">
                <span class="text-2xl">🇺🇬</span>
                <div>
                  <div class="font-bold">Uganda</div>
                  <div class="text-xs text-slate-400">Operational</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white/5 rounded">
                <span class="text-2xl">🇹🇿</span>
                <div>
                  <div class="font-bold">Tanzania</div>
                  <div class="text-xs text-slate-400">AI-enabled</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white/5 rounded">
                <span class="text-2xl">🇱🇸</span>
                <div>
                  <div class="font-bold">Lesotho</div>
                  <div class="text-xs text-slate-400">Operational</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white/5 rounded">
                <span class="text-2xl">🇸🇴</span>
                <div>
                  <div class="font-bold">Somalia</div>
                  <div class="text-xs text-slate-400">Operational</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-secondary/20 rounded border border-secondary/30">
                <span class="text-xl">🌍</span>
                <div>
                  <div class="font-bold text-secondary">Eswatini</div>
                  <div class="text-xs text-slate-400">Exploring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Not Sure CTA -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6 text-center" v-scroll-animate>
        <h2 class="text-3xl font-bold text-primary mb-6">Not sure what you need?</h2>
        <p class="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
          We assess requirements and recommend approaches based on systems we've actually built and operate. No predefined packages. No unnecessary scope.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-navy-800 transition-all">
          Talk to an Expert <ArrowRight :size="18" />
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
  Phone,
  Shield,
  Building2,
  Stethoscope,
  CheckCircle,
  Globe
} from 'lucide-vue-next'
import { vScrollAnimate } from '@/composables/useScrollAnimation'
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}

.service-section {
  scroll-margin-top: 100px;
}
</style>
