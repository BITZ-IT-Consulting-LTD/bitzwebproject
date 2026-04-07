<template>
  <div class="about bg-background text-text-primary font-sans">
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
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">About BITZ</p>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            Technology systems for public institutions and enterprises
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            BITZ is a technology consulting firm. We design, build, and operate digital systems for public institutions and enterprises in Africa.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-24 bg-white border-b border-slate-200">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-scroll-animate>
            <h2 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Our Mission</h2>
            <p class="text-3xl md:text-4xl font-bold text-primary leading-tight">
              To build reliable digital infrastructure for institutions that serve the public.
            </p>
          </div>
          <div class="space-y-6" v-scroll-animate>
            <p class="text-lg text-text-secondary">
              We focus on areas where reliability, security, and compliance are non-negotiable:
            </p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li v-for="focus in focusAreas" :key="focus" class="flex items-center gap-3 font-medium text-primary bg-slate-50 p-4 rounded-sm border border-slate-100">
                <div class="w-2 h-2 bg-secondary rounded-full"></div>
                {{ focus }}
              </li>
            </ul>
            <div class="pt-4">
              <p class="text-sm text-text-secondary">
                <span class="font-semibold text-primary">Geographic scope:</span> Kenya, Uganda, Tanzania, Lesotho, Somalia. Exploring Eswatini and South Sudan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- UNICEF Venture Fund Feature -->
    <section class="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-scroll-animate>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded text-xs font-bold uppercase mb-6 tracking-widest">
              <Award :size="12" /> UNICEF Venture Fund
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">AI for Child Protection</h2>
            <p class="text-slate-400 text-lg mb-6 leading-relaxed">
              In 2024, BITZ IT received $99,500 from the UNICEF Venture Fund to develop AI-powered capabilities for child protection helplines across Africa.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-white/5 rounded flex items-center justify-center shrink-0">
                  <Mic class="text-secondary" :size="24" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">Voice Recognition</h4>
                  <p class="text-sm text-slate-400">ASR models trained on 100+ hours of Tanzanian telephony data for Swahili speech recognition</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-white/5 rounded flex items-center justify-center shrink-0">
                  <Languages class="text-secondary" :size="24" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">Translation</h4>
                  <p class="text-sm text-slate-400">Swahili-English translation breaking language barriers in 40+ language environments</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-white/5 rounded flex items-center justify-center shrink-0">
                  <Brain class="text-secondary" :size="24" />
                </div>
                <div>
                  <h4 class="font-bold mb-1">Smart Triage</h4>
                  <p class="text-sm text-slate-400">AI-powered case classification and prioritization for crisis response</p>
                </div>
              </div>
            </div>

            <div class="p-4 bg-white/5 rounded border border-white/10">
              <p class="text-sm text-slate-300 italic">
                "With UNICEF's support, we transformed OpenCHS from an operational helpline platform into AI-enabled, open-source protection infrastructure."
              </p>
            </div>
          </div>
          <div class="bg-white/5 p-8 rounded-lg border border-white/10" v-scroll-animate>
            <h3 class="text-lg font-bold mb-6">AI Development Timeline</h3>
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="w-16 text-xs font-bold text-secondary text-right pt-1">SEP 2025</div>
                <div class="flex-1 pb-6 border-l border-white/10 pl-4">
                  <h4 class="font-bold text-sm">Prototype Launch</h4>
                  <p class="text-sm text-slate-400">Multi-stage AI pipeline for VAC workflows deployed</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-16 text-xs font-bold text-secondary text-right pt-1">DEC 2025</div>
                <div class="flex-1 pb-6 border-l border-white/10 pl-4">
                  <h4 class="font-bold text-sm">Data Collection</h4>
                  <p class="text-sm text-slate-400">14 hours of annotated Tanzanian telephony data</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-16 text-xs font-bold text-secondary text-right pt-1">FEB 2026</div>
                <div class="flex-1 border-l border-white/10 pl-4">
                  <h4 class="font-bold text-sm">100+ Hours Milestone</h4>
                  <p class="text-sm text-slate-400">Domain-adapted ASR models in production</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Track Record / Achievements -->
    <section class="py-24 bg-background">
      <div class="container-custom mx-auto px-6">
        <div class="mb-16" v-scroll-animate>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Track Record</p>
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Proven delivery capability</h2>
          <p class="text-text-secondary max-w-2xl">Operational systems at national scale. Real outcomes. Verifiable results.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(achievement, index) in achievements" :key="achievement.id" 
               class="bg-white border border-slate-200 p-8 rounded-sm hover:border-secondary transition-all card-hover"
               v-scroll-animate :data-delay="index * 50">
            <div class="text-4xl font-bold text-secondary mb-2">{{ achievement.value }}</div>
            <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{{ achievement.label }}</div>
            <h3 class="text-lg font-bold mb-2 text-primary">{{ achievement.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Digital Public Good -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-scroll-animate>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded text-xs font-bold uppercase mb-6 tracking-widest">
              <Globe :size="12" /> Digital Public Good
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">OpenCHS: Shared Infrastructure</h2>
            <p class="text-text-secondary text-lg mb-6 leading-relaxed">
              OpenCHS is registered as a Digital Public Good. We are committed to the builder-operator model—ensuring countries can adopt, adapt, and own their systems without vendor lock-in.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="20" />
                <span class="text-primary font-medium">Open-source, no licensing fees</span>
              </div>
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="20" />
                <span class="text-primary font-medium">Country ownership and control</span>
              </div>
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="20" />
                <span class="text-primary font-medium">Continuous community improvement</span>
              </div>
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="20" />
                <span class="text-primary font-medium">Multi-country deployment ready</span>
              </div>
            </div>
          </div>
          <div class="bg-slate-50 p-8 rounded-lg border border-slate-100" v-scroll-animate>
            <h3 class="text-lg font-bold text-primary mb-6">Countries Using OpenCHS</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="flex items-center gap-3 p-3 bg-white rounded border border-slate-200">
                <span class="text-2xl">🇰🇪</span>
                <div>
                  <div class="font-bold text-primary">Kenya</div>
                  <div class="text-xs text-slate-400">Operational</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded border border-slate-200">
                <span class="text-2xl">🇺🇬</span>
                <div>
                  <div class="font-bold text-primary">Uganda</div>
                  <div class="text-xs text-slate-400">Operational</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded border border-slate-200">
                <span class="text-2xl">🇹🇿</span>
                <div>
                  <div class="font-bold text-primary">Tanzania</div>
                  <div class="text-xs text-slate-400">AI-enabled</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded border border-slate-200">
                <span class="text-2xl">🇱🇸</span>
                <div>
                  <div class="font-bold text-primary">Lesotho</div>
                  <div class="text-xs text-slate-400">Operational</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-white rounded border border-slate-200">
                <span class="text-2xl">🇸🇴</span>
                <div>
                  <div class="font-bold text-primary">Somalia</div>
                  <div class="text-xs text-slate-400">Operational</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-secondary/10 rounded border border-secondary/30">
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

    <!-- Differentiation -->
    <section class="py-24 bg-background">
      <div class="container-custom mx-auto px-6">
        <div class="mb-16" v-scroll-animate>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Why BITZ</p>
          <h2 class="text-3xl md:text-4xl font-bold text-primary">Differentiation</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(diff, index) in differentiators" :key="diff.title" 
               class="bg-white p-10 border border-slate-200 rounded-sm hover:border-secondary transition-all"
               v-scroll-animate :data-delay="index * 100">
            <h4 class="font-bold text-xl mb-4 text-primary">{{ diff.title }}</h4>
            <p class="text-text-secondary leading-relaxed">{{ diff.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Recognition -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div v-scroll-animate>
            <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Recognition</p>
            <h2 class="text-3xl font-bold text-primary mb-8">Credentials</h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4 p-6 bg-slate-50 rounded-sm border border-slate-100">
                <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <Award class="text-secondary" :size="24" />
                </div>
                <div>
                  <h3 class="font-bold text-primary mb-1">UNICEF Venture Fund</h3>
                  <p class="text-sm text-text-secondary">$99,500 investment for AI-powered helpline technology development for child protection.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-6 bg-slate-50 rounded-sm border border-slate-100">
                <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle class="text-secondary" :size="24" />
                </div>
                <div>
                  <h3 class="font-bold text-primary mb-1">KDEAP Digital Assessment</h3>
                  <p class="text-sm text-text-secondary">Digital Assessment completed for national economic acceleration and digital infrastructure readiness.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-6 bg-slate-50 rounded-sm border border-slate-100">
                <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center shrink-0">
                  <Building class="text-secondary" :size="24" />
                </div>
                <div>
                  <h3 class="font-bold text-primary mb-1">ICTA Engagement</h3>
                  <p class="text-sm text-text-secondary">Advisory services on digital records management, e-services delivery, and public sector ICT governance.</p>
                </div>
              </div>
            </div>
          </div>
          <div v-scroll-animate>
            <h3 class="text-lg font-bold text-primary mb-6">Operational Systems</h3>
            <div class="space-y-4">
              <div v-for="system in operationalSystems" :key="system.name" class="p-4 border border-slate-200 rounded-sm hover:border-secondary transition-colors">
                <div class="flex items-center justify-between mb-2">
                  <h4 class="font-bold text-primary">{{ system.name }}</h4>
                  <span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">{{ system.status }}</span>
                </div>
                <p class="text-sm text-text-secondary">{{ system.description }}</p>
              </div>
            </div>
            <div class="mt-8 p-6 bg-navy-900 text-white rounded-sm">
              <h4 class="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Scale</h4>
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-2xl font-bold">50,000+</div>
                  <div class="text-xs text-slate-400">Patient Records</div>
                </div>
                <div>
                  <div class="text-2xl font-bold">5,000+</div>
                  <div class="text-xs text-slate-400">SACCO Members</div>
                </div>
                <div>
                  <div class="text-2xl font-bold">10,000+</div>
                  <div class="text-xs text-slate-400">Monthly Calls</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Delivery Approach -->
    <section class="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="mb-16 text-center" v-scroll-animate>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">How we work</p>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Delivery Approach</h2>
          <p class="text-slate-400 max-w-2xl mx-auto">Our documented and transparent implementation methodology.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in deliverySteps" :key="step.title" 
               class="relative p-8"
               v-scroll-animate :data-delay="index * 100">
            <div class="text-7xl font-bold text-white/5 absolute -top-4 -left-2">{{ index + 1 }}</div>
            <div class="relative z-10">
              <div class="w-12 h-12 bg-secondary/20 rounded-sm flex items-center justify-center mb-6">
                <component :is="step.icon" class="text-secondary" :size="24" />
              </div>
              <h4 class="font-bold text-xl mb-4 text-secondary">{{ step.title }}</h4>
              <p class="text-slate-400 text-sm leading-relaxed">{{ step.description }}</p>
            </div>
          </div>
        </div>
        
        <div class="mt-16 text-center" v-scroll-animate>
          <p class="text-slate-500 text-sm">Each phase is documented, transparent, and measured against operational outcomes.</p>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6 text-center" v-scroll-animate>
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">Discuss a project</h2>
        <p class="text-text-secondary mb-10 max-w-2xl mx-auto">
          Our team brings deep domain expertise in public sector systems and enterprise-grade technical delivery.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-navy-800 transition-all">
          Request Consultation <ArrowRight :size="18" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { achievementsData } from '@/utils/Achievements'
import { 
  ArrowRight, 
  Check, 
  Award, 
  CheckCircle,
  Building,
  Palette,
  Code,
  Rocket,
  Headphones,
  Mic,
  Languages,
  Brain,
  Globe
} from 'lucide-vue-next'
import { vScrollAnimate } from '@/composables/useScrollAnimation'

const achievements = achievementsData

const focusAreas = [
  "Government digital transformation",
  "Health information systems",
  "Financial services infrastructure",
  "Social protection platforms"
]

const operationalSystems = [
  { name: 'Child Helpline Systems (116)', description: 'Five countries, 24/7 operations, AI-enabled', status: 'Active' },
  { name: 'OPENHMIS', description: 'Health records platform deployed across facilities', status: 'Active' },
  { name: 'Tower SACCO', description: 'Member management system for financial cooperative', status: 'Active' }
]

const differentiators = [
  {
    title: "We build systems that operate",
    description: "Many firms design. We implement, deploy, and run national-scale platforms with 24/7 availability. Our systems handle real workloads every day."
  },
  {
    title: "Multi-country experience",
    description: "We understand the operational realities of deploying systems across borders, regulatory environments, and infrastructure constraints. Five countries and growing."
  },
  {
    title: "Digital Public Good commitment",
    description: "OpenCHS is open-source infrastructure. We believe countries should own their systems. No vendor lock-in. No licensing fees. Full transparency."
  }
]

const deliverySteps = [
  { 
    title: "Design", 
    description: "Technical architecture, feasibility, and operational planning.",
    icon: Palette
  },
  { 
    title: "Build", 
    description: "Development, systems integration, and rigorous testing.",
    icon: Code
  },
  { 
    title: "Deploy", 
    description: "Installation, comprehensive training, and go-live support.",
    icon: Rocket
  },
  { 
    title: "Operate", 
    description: "24/7 support, maintenance, and continuous evolution.",
    icon: Headphones
  }
]
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}

.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
}
</style>
