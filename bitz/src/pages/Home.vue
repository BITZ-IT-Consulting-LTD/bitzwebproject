<template>
  <div class="home bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="hero bg-primary text-white pt-32 pb-20">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="hero-text">
            <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
              {{ content.hero.title }}
            </h1>
            <p class="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
              {{ content.hero.description }}
            </p>
            <div class="flex gap-4">
              <router-link to="/contact" class="px-6 py-3 bg-white text-primary font-medium rounded-sm hover:bg-slate-100 transition-colors">
                Request Consultation
              </router-link>
              <router-link to="/products" class="px-6 py-3 border border-white text-white font-medium rounded-sm hover:bg-white/10 transition-colors">
                View Services
              </router-link>
            </div>
          </div>
          <div class="hero-visual hidden md:block">
            <div class="bg-navy-800/50 border border-navy-700 rounded-lg p-8 backdrop-blur-sm">
              <h3 class="text-slate-400 uppercase tracking-wider text-sm font-semibold mb-6">{{ content.hero.countriesShowcase.title }}</h3>
              <div class="space-y-6">
                <div v-for="country in countries" :key="country.name" class="flex items-center gap-4 group">
                  <span class="text-3xl">{{ country.flag }}</span>
                  <div>
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
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-center md:text-left">
            <p class="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Recognition & Trust</p>
            <h2 class="text-xl font-bold text-primary">{{ content.trustSignals.headline }}</h2>
          </div>
          <div class="flex flex-wrap justify-center gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
            <div class="font-bold text-navy-900 border-2 border-navy-900 px-4 py-1">UNICEF</div>
            <div class="font-bold text-navy-900 border-2 border-navy-900 px-4 py-1">KDEAP</div>
            <div class="font-bold text-navy-900 border-2 border-navy-900 px-4 py-1">ICTA</div>
            <div class="font-bold text-navy-900 border-2 border-navy-900 px-4 py-1">MINISTRY OF HEALTH</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Summary (Consulting Led) -->
    <section class="py-24 bg-background">
      <div class="container-custom mx-auto px-6">
        <div class="mb-16">
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">{{ content.services.sectionTitle }}</p>
          <h2 class="text-3xl md:text-4xl font-bold text-primary max-w-2xl">{{ content.services.sectionDescription }}</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="service in content.services.items" :key="service.id" class="bg-white border border-slate-200 p-10 rounded-sm hover:border-secondary transition-all">
            <h3 class="text-xl font-bold mb-4 text-primary">{{ service.title }}</h3>
            <p class="text-text-secondary mb-8 text-sm leading-relaxed h-20">
              {{ service.overview }}
            </p>
            <div class="mb-8 h-32 overflow-hidden">
               <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Experience</div>
               <ul class="space-y-3">
                  <li v-for="exp in service.experience.slice(0, 2)" :key="exp.name" class="flex items-start gap-3 text-xs font-bold text-text-primary">
                    <Check class="text-secondary shrink-0" :size="14" />
                    {{ exp.name }}
                  </li>
               </ul>
            </div>
            <router-link :to="'/products#' + service.id" class="text-sm font-bold text-secondary flex items-center gap-2 hover:underline">
              View Service Details <ArrowRight :size="16" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Flagship Callout (Child Helpline) -->
    <section class="py-24 bg-navy-900 text-white">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1">
            <img src="/src/assets/display_photos/dashboard.jpg" alt="Child Helpline System" class="rounded shadow-2xl border border-white/10" />
          </div>
          <div class="order-1 md:order-2">
            <div class="inline-flex items-center gap-2 px-3 py-1 bg-secondary/20 text-secondary border border-secondary/30 rounded text-[10px] font-bold uppercase mb-6 tracking-widest">
              Flagship System
            </div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Child Helpline Systems (116)</h2>
            <p class="text-slate-400 text-lg mb-8 leading-relaxed">
              An active, multi-country crisis response platform operational in Kenya, Uganda, Tanzania, Lesotho, and Somalia.
            </p>
            
            <div class="grid grid-cols-3 gap-4 mb-10">
              <div class="bg-white/5 p-4 rounded border border-white/10 text-center">
                <div class="text-2xl font-bold text-secondary mb-1">5</div>
                <div class="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Countries</div>
              </div>
              <div class="bg-white/5 p-4 rounded border border-white/10 text-center">
                <div class="text-2xl font-bold text-secondary mb-1">24/7</div>
                <div class="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Operations</div>
              </div>
              <div class="bg-white/5 p-4 rounded border border-white/10 text-center">
                <div class="text-2xl font-bold text-secondary mb-1">Active</div>
                <div class="text-[9px] uppercase tracking-wider text-slate-500 font-bold">Status</div>
              </div>
            </div>

            <router-link to="/projects" class="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-blue-600 transition-colors">
              Read Case Study <ArrowRight :size="16" />
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Sector Focus -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-8 text-primary">Sector Expertise</h2>
            <div class="space-y-8">
              <div v-for="sector in content.sectorFocus.sectors" :key="sector.title" class="border-l-4 border-slate-100 hover:border-secondary pl-6 transition-colors group">
                <h4 class="font-bold text-lg mb-2 text-primary group-hover:text-secondary transition-colors">{{ sector.title }}</h4>
                <p class="text-text-secondary text-sm leading-relaxed">{{ sector.description }}</p>
              </div>
            </div>
          </div>
          <div class="bg-slate-50 p-4 rounded">
             <img src="/src/assets/display_photos/feature_crm.jpg" alt="Sector Solutions" class="rounded shadow-sm" />
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-24 bg-primary text-white text-center">
      <div class="container-custom mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ content.contact.title }}</h2>
        <p class="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          {{ content.contact.description }}
        </p>
        <router-link to="/contact" class="px-10 py-4 bg-secondary text-white font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-blue-600 transition-all transform hover:-translate-y-1 inline-block">
          {{ content.contact.actions[0].text }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  ArrowRight, 
  Check
} from 'lucide-vue-next'
import { homeContent } from '@/data/HomeContent.js'

const content = homeContent
const countries = content.hero.countriesShowcase.countries
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}
</style>
