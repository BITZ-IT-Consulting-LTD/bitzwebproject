<template>
  <div class="services bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20">
      <div class="container-custom mx-auto px-6">
        <div class="max-w-3xl">
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Services</p>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Strategic advisory and systems implementation
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            We operate as a technology consulting firm and systems implementation partner, building and operating mission-critical digital infrastructure.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Detailed List -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="space-y-32">
          <div v-for="(service, index) in services" :key="service.id" :id="service.id" class="service-block">
            <!-- Service Header -->
            <div class="mb-12">
              <div class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Service 0{{ index + 1 }}</div>
              <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">{{ service.title }}</h2>
              <p class="text-xl text-text-secondary max-w-4xl leading-relaxed">
                {{ service.overview }}
              </p>
            </div>

            <!-- Flagship Feature for Software -->
            <div v-if="service.flagship" class="mb-16 bg-navy-950 text-white p-12 rounded-sm border-l-8 border-secondary">
               <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div class="md:col-span-2">
                    <div class="text-xs font-bold text-secondary uppercase tracking-[0.2em] mb-4">Flagship System</div>
                    <h3 class="text-2xl font-bold mb-4">{{ service.flagship.name }}</h3>
                    <p class="text-slate-400 mb-6 leading-relaxed">{{ service.flagship.description }}</p>
                    <div class="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
                      <span>Kenya</span>
                      <span>•</span>
                      <span>Uganda</span>
                      <span>•</span>
                      <span>Tanzania</span>
                      <span>•</span>
                      <span>Lesotho</span>
                      <span>•</span>
                      <span>Somalia</span>
                    </div>
                  </div>
                  <div class="flex flex-col justify-center border-l border-white/10 pl-12">
                    <div class="text-4xl font-bold text-white mb-1">Active</div>
                    <div class="text-xs text-slate-500 uppercase tracking-widest">Operational Status</div>
                  </div>
               </div>
            </div>

            <!-- DPG Emphasis for AI -->
            <div v-if="service.dpgEmphasis" class="mb-16 bg-slate-50 p-8 border border-slate-200 rounded-sm">
               <h4 class="text-lg font-bold text-primary mb-2">{{ service.dpgEmphasis.title }}</h4>
               <p class="text-text-secondary text-sm leading-relaxed">{{ service.dpgEmphasis.content }}</p>
            </div>

            <!-- Service Details Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <!-- Left: What We Do & Engagements -->
              <div class="lg:col-span-7 space-y-12">
                <div>
                  <h3 class="text-xs font-bold text-primary uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">What we do</h3>
                  <ul class="space-y-4">
                    <li v-for="item in service.whatWeDo" :key="item" class="flex items-start gap-3 text-text-primary">
                      <div class="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                      <span class="leading-relaxed">{{ item }}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 class="text-xs font-bold text-primary uppercase tracking-widest mb-6 border-b border-slate-100 pb-2">Typical Engagements</h3>
                  <ul class="space-y-4">
                    <li v-for="eng in service.engagements" :key="eng" class="text-text-secondary leading-relaxed flex items-start gap-3 italic">
                       <ArrowRight :size="16" class="mt-1 text-slate-300 shrink-0" />
                       {{ eng }}
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Right: Outcomes & Experience -->
              <div class="lg:col-span-5 space-y-12">
                <div class="bg-slate-50 p-8 rounded-sm border border-slate-100">
                  <h3 class="text-xs font-bold text-primary uppercase tracking-widest mb-6">Outcomes</h3>
                  <ul class="space-y-4">
                    <li v-for="outcome in service.outcomes" :key="outcome" class="flex items-start gap-3">
                      <Check :size="18" class="text-secondary shrink-0" />
                      <span class="text-sm font-medium text-text-primary leading-relaxed">{{ outcome }}</span>
                    </li>
                  </ul>
                </div>

                <div class="px-8">
                  <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Relevant Experience</h3>
                  <div class="space-y-8">
                    <div v-for="exp in service.experience" :key="exp.name">
                      <div class="font-bold text-primary mb-1">{{ exp.name }}</div>
                      <p class="text-sm text-text-secondary leading-relaxed">{{ exp.detail }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 bg-primary text-white text-center">
      <div class="container-custom mx-auto px-6">
        <h2 class="text-3xl font-bold mb-6">Discuss a consulting engagement</h2>
        <p class="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          We assess requirements and recommend approaches for mission-critical digital transformation projects across government and enterprise sectors.
        </p>
        <router-link to="/contact" class="px-10 py-4 bg-secondary text-white font-bold rounded-sm hover:bg-blue-600 transition-all">
          Request Consultation
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, Check } from 'lucide-vue-next'
import { homeContent } from '@/data/HomeContent.js'

const services = homeContent.services.items
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}
</style>
