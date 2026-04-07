<template>
  <div class="projects bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20">
      <div class="container-custom mx-auto px-6">
        <div class="max-w-3xl">
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Case Studies</p>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-8">
            Documented capability through factual evidence
          </h1>
          <p class="text-xl text-slate-300 leading-relaxed">
            We document our proven capability through factual case summaries, focusing on technical interventions and measurable outcomes.
          </p>
        </div>
      </div>
    </section>

    <!-- Case Studies List -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="space-y-32">
          <div v-for="project in projects" :key="project.id" class="border-b border-slate-100 pb-24 last:border-0 last:pb-0">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <!-- Left Column: Summary -->
              <div class="lg:col-span-4">
                <div class="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{{ project.category }}</div>
                <h2 class="text-3xl font-bold text-primary mb-6 leading-tight">{{ project.title }}</h2>
                <div class="space-y-6">
                  <div>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Context</h4>
                    <p class="text-sm text-text-secondary leading-relaxed">{{ getProjectContext(project.id) }}</p>
                  </div>
                  <div>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Client</h4>
                    <p class="text-sm font-bold text-primary">{{ project.client }}</p>
                  </div>
                </div>
              </div>

              <!-- Right Column: Details -->
              <div class="lg:col-span-8">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div class="space-y-8">
                    <div>
                      <h4 class="text-lg font-bold text-primary mb-4 border-l-4 border-red-500 pl-4">Problem</h4>
                      <p class="text-text-secondary leading-relaxed">{{ project.challenge }}</p>
                    </div>
                    <div>
                      <h4 class="text-lg font-bold text-primary mb-4 border-l-4 border-secondary pl-4">Intervention</h4>
                      <p class="text-text-secondary leading-relaxed mb-4">{{ project.fullDescription }}</p>
                      <ul class="space-y-2">
                        <li v-for="feature in project.features" :key="feature" class="flex items-start gap-2 text-sm text-text-primary">
                          <Check class="text-secondary shrink-0 mt-1" :size="14" />
                          {{ feature }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="bg-slate-50 p-8 rounded-sm border border-slate-100 h-fit">
                    <h4 class="text-lg font-bold text-primary mb-6">Outcome</h4>
                    <div class="space-y-6">
                       <p class="text-text-secondary italic mb-4">{{ project.solution }}</p>
                       <div class="grid grid-cols-1 gap-4">
                          <div v-for="tag in project.technologies" :key="tag" class="flex items-center gap-2">
                            <div class="w-1 h-1 bg-secondary rounded-full"></div>
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">{{ tag }}</span>
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

    <!-- Final CTA -->
    <section class="py-24 bg-background border-t border-slate-200">
      <div class="container-custom mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">Discuss a similar engagement</h2>
        <p class="text-text-secondary mb-10 max-w-2xl mx-auto">
          Our team is available to discuss your technical requirements and provide detailed implementation roadmaps.
        </p>
        <router-link to="/contact" class="px-8 py-4 bg-primary text-white font-bold rounded hover:bg-navy-800 transition-all">
          Request Consultation
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Check } from 'lucide-vue-next'
import { projectsData } from '@/utils/Product'

const projects = projectsData

const getProjectContext = (id) => {
  const contexts = {
    'pr1': 'National child protection agencies in five countries needed unified crisis response capability.',
    'pr2': 'Healthcare facilities required electronic medical records and inventory management.',
    'pr3': 'Member-owned financial cooperative with 5,000+ members required operational system upgrade.'
  }
  return contexts[id] || ''
}
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}
</style>
