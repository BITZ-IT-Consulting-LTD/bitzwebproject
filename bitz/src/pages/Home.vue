<template>
  <div class="home bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="hero bg-primary text-white pt-32 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="hero-text" v-scroll-animate>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 border border-white/20 rounded text-xs font-bold uppercase mb-6 tracking-widest">
              <Award :size="12" /> UNICEF Venture Fund Recipient
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Technology systems for public institutions
            </h1>
            <p class="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
              We design, build, and operate digital infrastructure for governments, health systems, and financial institutions across Africa.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/contact" class="px-8 py-4 bg-white text-primary font-bold rounded-sm hover:bg-slate-100 transition-all transform hover:-translate-y-0.5">
                Request Consultation
              </router-link>
              <router-link to="/services" class="px-8 py-4 border border-white text-white font-bold rounded-sm hover:bg-white/10 transition-all">
                View Our Work
              </router-link>
            </div>
          </div>
          <div class="hero-visual hidden lg:block" v-scroll-animate>
            <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-8 backdrop-blur-sm">
              <h3 class="text-slate-400 uppercase tracking-wider text-sm font-semibold mb-6">Operational Now In</h3>
              <div class="space-y-4">
                <div v-for="(country, index) in countries.slice(0, 4)" :key="country.name" class="flex items-center gap-4 group p-3 rounded hover:bg-white/5 transition-colors">
                  <span class="text-2xl">{{ country.flag }}</span>
                  <div class="flex-1">
                    <h4 class="font-bold text-white group-hover:text-secondary transition-colors">{{ country.name }}</h4>
                    <p class="text-sm text-slate-400">{{ country.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Signals -->
    <section class="py-12 border-b border-slate-200 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8" v-scroll-animate>
          <div class="text-center md:text-left">
            <p class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Recognition & Trust</p>
            <h2 class="text-xl font-bold text-primary">UNICEF Venture Fund recipient</h2>
          </div>
          <div class="flex flex-wrap justify-center gap-6 items-center">
            <div class="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-sm border border-slate-100">
              <Award class="text-secondary" :size="18" />
              <span class="font-bold text-sm text-primary">UNICEF Venture Fund</span>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-sm border border-slate-100">
              <Globe class="text-secondary" :size="18" />
              <span class="font-bold text-sm text-primary">Digital Public Good</span>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-sm border border-slate-100">
              <Phone class="text-secondary" :size="18" />
              <span class="font-bold text-sm text-primary">116 Helpline Operators</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Work / Products Preview -->
    <section class="py-24 bg-background">
      <div class="container-custom mx-auto px-6">
        <div class="mb-16" v-scroll-animate>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">What We Build</p>
          <h2 class="text-3xl md:text-4xl font-bold text-primary max-w-2xl">Operational platforms handling real workloads</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(product, index) in products" :key="product.name" 
               class="bg-white border border-slate-200 p-8 rounded-sm hover:border-secondary transition-all card-hover group"
               v-scroll-animate :data-delay="index * 50">
            <div class="w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors">
              <component :is="product.icon" class="text-secondary" :size="24" />
            </div>
            <h3 class="text-lg font-bold mb-2 text-primary">{{ product.name }}</h3>
            <p class="text-text-secondary text-sm mb-4">{{ product.description }}</p>
            <div class="pt-4 border-t border-slate-100">
              <div class="text-xs text-slate-400">
                <span class="font-semibold text-secondary">{{ product.metric }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mt-12 text-center">
          <router-link to="/products" class="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-sm hover:bg-navy-800 transition-all">
            View All Solutions <ArrowRight :size="18" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- Flagship System Callout -->
    <section class="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1" v-scroll-animate>
            <div class="relative">
              <img src="/src/assets/display_photos/dashboard.jpg" alt="Child Helpline System" class="rounded-lg shadow-2xl border border-white/10" />
              <div class="absolute -bottom-6 -right-6 bg-white text-primary p-6 rounded-lg shadow-xl hidden md:block">
                <div class="text-3xl font-bold text-secondary">10,000+</div>
                <div class="text-sm font-medium text-text-secondary">Monthly Calls Handled</div>
              </div>
            </div>
          </div>
          <div class="order-1 lg:order-2" v-scroll-animate>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded text-xs font-bold uppercase mb-6 tracking-widest">
              <Globe :size="12" /> Digital Public Good
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Child Helpline Systems (116)</h2>
            <p class="text-slate-400 text-lg mb-8 leading-relaxed">
              A national crisis response platform operational in five countries, providing 24/7 support for gender-based violence response, mental health crisis support, and migrant worker assistance.
            </p>
            
            <div class="grid grid-cols-3 gap-4 mb-10">
              <div class="bg-white/5 p-4 rounded border border-white/10 text-center">
                <div class="text-2xl font-bold text-secondary mb-1">5</div>
                <div class="text-xs uppercase tracking-wider text-slate-500 font-bold">Countries</div>
              </div>
              <div class="bg-white/5 p-4 rounded border border-white/10 text-center">
                <div class="text-2xl font-bold text-secondary mb-1">24/7</div>
                <div class="text-xs uppercase tracking-wider text-slate-500 font-bold">Operations</div>
              </div>
              <div class="bg-white/5 p-4 rounded border border-white/10 text-center">
                <div class="text-2xl font-bold text-secondary mb-1">AI</div>
                <div class="text-xs uppercase tracking-wider text-slate-500 font-bold">Enabled</div>
              </div>
            </div>

            <div class="space-y-3 mb-8">
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="18" />
                <span class="text-slate-300">Voice, SMS, WhatsApp, Web intake</span>
              </div>
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="18" />
                <span class="text-slate-300">VAC, GBV, Migrant Worker case workflows</span>
              </div>
              <div class="flex items-center gap-3">
                <Check class="text-secondary" :size="18" />
                <span class="text-slate-300">AI-powered triage and summarization</span>
              </div>
            </div>

            <router-link to="/projects" class="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-blue-600 transition-colors">
              Read Case Study <ArrowRight :size="16" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Connected to Work -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="mb-16 text-center" v-scroll-animate>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Services connected to delivered work</h2>
          <p class="text-text-secondary max-w-2xl mx-auto">Every service we offer is backed by systems we've built and operate</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="service.title" 
               class="bg-slate-50 border border-slate-200 p-10 rounded-sm hover:border-secondary transition-all card-hover"
               v-scroll-animate :data-delay="index * 100">
            <div class="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-6 shadow-sm">
              <component :is="service.icon" class="text-secondary" :size="24" />
            </div>
            <h3 class="text-xl font-bold mb-4 text-primary">{{ service.title }}</h3>
            <p class="text-text-secondary mb-6 text-sm leading-relaxed">
              {{ service.description }}
            </p>
            <div class="pt-6 border-t border-slate-200">
              <p class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Connected To</p>
              <p class="text-sm font-semibold text-primary">{{ service.connectedTo }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- UNICEF Venture Fund Feature -->
    <section class="py-24 bg-background">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-scroll-animate>
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded text-xs font-bold uppercase mb-6 tracking-widest">
              <Award :size="12" /> UNICEF Venture Fund
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">AI for Child Protection</h2>
            <p class="text-text-secondary text-lg mb-6 leading-relaxed">
              $99,500 investment to develop AI-powered voice recognition and automated triage for child helplines. Making crisis response faster and more effective.
            </p>
            
            <div class="space-y-4 mb-8">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-secondary/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <Check class="text-secondary" :size="14" />
                </div>
                <span class="text-text-secondary"><strong>100+ hours</strong> of Tanzanian telephony data collected</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-secondary/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <Check class="text-secondary" :size="14" />
                </div>
                <span class="text-text-secondary"><strong>Swahili ASR</strong> optimized for telephony audio</span>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-secondary/10 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <Check class="text-secondary" :size="14" />
                </div>
                <span class="text-text-secondary"><strong>Automated triage</strong> reduces counselor workload</span>
              </div>
            </div>

            <router-link to="/services#ai-automation" class="inline-flex items-center gap-2 text-secondary font-bold hover:underline">
              Learn about our AI services <ArrowRight :size="18" />
            </router-link>
          </div>
          <div class="bg-primary text-white p-8 rounded-lg" v-scroll-animate>
            <blockquote class="text-xl leading-relaxed mb-6">
              "With UNICEF Venture Fund's support, we transformed OpenCHS from an operational helpline platform into AI-enabled, open-source protection infrastructure."
            </blockquote>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <Users class="text-secondary" :size="24" />
              </div>
              <div>
                <div class="font-bold">BITZ IT Team</div>
                <div class="text-sm text-slate-400">UNICEF Venture Fund Cohort</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sector Focus -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-scroll-animate>
            <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Sector Expertise</p>
            <h2 class="text-3xl font-bold mb-8 text-primary">Where we focus</h2>
            <div class="space-y-6">
              <div v-for="(sector, index) in sectors" :key="sector.title" 
                   class="border-l-4 border-slate-100 hover:border-secondary pl-6 transition-all py-2 group cursor-pointer"
                   @click="$router.push('/sectors')">
                <h4 class="font-bold text-lg mb-2 text-primary group-hover:text-secondary transition-colors">{{ sector.title }}</h4>
                <p class="text-text-secondary text-sm leading-relaxed">{{ sector.description }}</p>
              </div>
            </div>
            <div class="mt-8">
              <router-link to="/sectors" class="inline-flex items-center gap-2 text-secondary font-bold hover:underline">
                Explore sectors <ArrowRight :size="18" />
              </router-link>
            </div>
          </div>
          <div class="bg-slate-50 p-6 rounded-lg" v-scroll-animate>
            <img src="/src/assets/display_photos/feature_crm.jpg" alt="Sector Solutions" class="rounded shadow-sm w-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Preview -->
    <section class="py-24 bg-background">
      <div class="container-custom mx-auto px-6">
        <div class="mb-16" v-scroll-animate>
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Case Studies</p>
          <h2 class="text-3xl md:text-4xl font-bold text-primary">Proven capability through evidence</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(study, index) in caseStudies" :key="study.title" 
               class="bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-secondary transition-all card-hover"
               v-scroll-animate :data-delay="index * 100">
            <div class="p-8">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{{ study.category }}</div>
              <h3 class="text-xl font-bold mb-4 text-primary">{{ study.title }}</h3>
              <div class="space-y-4">
                <div>
                  <span class="text-xs font-bold text-red-500 uppercase">Problem</span>
                  <p class="text-sm text-text-secondary mt-1">{{ study.problem }}</p>
                </div>
                <div>
                  <span class="text-xs font-bold text-secondary uppercase">Outcome</span>
                  <p class="text-sm font-semibold text-primary mt-1">{{ study.outcome }}</p>
                </div>
              </div>
            </div>
            <div class="px-8 py-4 bg-slate-50 border-t border-slate-100">
              <router-link to="/projects" class="text-sm font-bold text-secondary hover:underline">
                Read full case study →
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Digital Public Good CTA -->
    <section class="py-24 bg-navy-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 32px 32px;"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10 text-center" v-scroll-animate>
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 border border-white/20 rounded text-xs font-bold uppercase mb-6 tracking-widest">
          <Globe :size="12" /> Digital Public Good
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Shared digital infrastructure</h2>
        <p class="text-slate-400 text-lg mb-10 max-w-3xl mx-auto">
          OpenCHS is registered as a Digital Public Good. Available for any government to adopt, adapt, and own—without vendor lock-in or licensing fees.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/products" class="px-8 py-4 bg-secondary text-white font-bold rounded-sm hover:bg-blue-600 transition-all">
            Explore OpenCHS
          </router-link>
          <router-link to="/contact" class="px-8 py-4 border border-white text-white font-bold rounded-sm hover:bg-white/10 transition-all">
            Discuss Adoption
          </router-link>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-24 bg-white text-center">
      <div class="container-custom mx-auto px-6" v-scroll-animate>
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">Discuss a project</h2>
        <p class="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
          Talk to our team about your technical requirements. We can demonstrate operational platforms and discuss implementation approaches.
        </p>
        <router-link to="/contact" class="inline-flex items-center gap-2 px-10 py-4 bg-primary text-white font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-navy-800 transition-all transform hover:-translate-y-1">
          Request Consultation <ArrowRight :size="18" />
        </router-link>
        <p class="text-slate-400 text-sm mt-6">Response within 48 hours. All inquiries confidential.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ArrowRight, 
  Check,
  Award,
  Globe,
  Phone,
  Building2,
  Stethoscope,
  Shield,
  Headphones,
  Palette,
  Code,
  Users
} from 'lucide-vue-next'
import { homeContent } from '@/data/HomeContent.js'
import { vScrollAnimate } from '@/composables/useScrollAnimation'

const content = homeContent
const countries = content.hero.countriesShowcase.countries

const products = [
  {
    name: 'Call Center Systems',
    description: 'Multi-channel intake platforms for national helplines handling voice, SMS, and chat.',
    icon: Phone,
    metric: '10,000+ calls monthly'
  },
  {
    name: 'Case Management',
    description: 'Specialized workflows for VAC, GBV, and Migrant Worker protection cases.',
    icon: Shield,
    metric: '5 countries operational'
  },
  {
    name: 'SACCO CRM',
    description: 'Member management with automated loan workflows and integrated call center.',
    icon: Building2,
    metric: '5,000+ members managed'
  },
  {
    name: 'OPENHMIS',
    description: 'Electronic Medical Records with inventory and automated MOH reporting.',
    icon: Stethoscope,
    metric: '50,000+ patient records'
  }
]

const services = [
  {
    title: 'Custom Software Development',
    description: 'We build the platforms we operate. Child helplines, health systems, and financial infrastructure—running 24/7 across five countries.',
    icon: Code,
    connectedTo: 'Child Helpline 116, OPENHMIS, Tower SACCO CRM'
  },
  {
    title: 'AI & Automation',
    description: 'UNICEF-funded AI development for child protection. Voice recognition, automated triage, and smart case management.',
    icon: Palette,
    connectedTo: 'OpenCHS AI Service (UNICEF Venture Fund)'
  },
  {
    title: 'Consulting & Assessment',
    description: 'Strategic advisory based on real deployment experience. Digital maturity assessments and implementation roadmaps.',
    icon: Headphones,
    connectedTo: 'ICTA Digital Assessment, KDEAP'
  }
]

const sectors = content.sectorFocus.sectors

const caseStudies = [
  {
    category: 'Government & Social Protection',
    title: 'Child Helpline Systems',
    problem: 'Fragmented crisis response with no unified case management across agencies.',
    outcome: '5 countries operational. 10,000+ monthly calls. Hours to minutes response time.'
  },
  {
    category: 'Financial Services',
    title: 'Tower SACCO Platform',
    problem: 'Manual member management and 5-day loan processing times.',
    outcome: '5 days to 1 day loan processing. 5,000+ members managed.'
  },
  {
    category: 'Healthcare',
    title: 'OPENHMIS Deployment',
    problem: 'Paper-based records and 2-week delays in Ministry reporting.',
    outcome: '50,000+ records digitized. Reporting: 2 weeks to 2 days.'
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
