<template>
  <div class="about bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20">
      <div class="container-custom mx-auto px-6">
        <div class="max-w-3xl">
          <p class="text-secondary font-bold uppercase tracking-widest text-sm mb-4">About BITZ</p>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-8">
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
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Our Mission</h2>
            <p class="text-3xl font-bold text-primary leading-tight">
              To build reliable digital infrastructure for institutions that serve the public.
            </p>
          </div>
          <div class="space-y-6">
            <p class="text-lg text-text-secondary">
              We focus on areas where reliability, security, and compliance are non-negotiable:
            </p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li v-for="focus in focusAreas" :key="focus" class="flex items-center gap-3 font-medium text-primary">
                <div class="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                {{ focus }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Track Record / Achievements -->
    <section class="py-24 bg-background">
      <div class="container-custom mx-auto px-6">
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-primary mb-4">Track Record</h2>
          <p class="text-text-secondary">Proven delivery capability at national scale.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="achievement in achievements" :key="achievement.id" class="bg-white border border-slate-200 p-8 rounded-sm">
            <div class="text-4xl font-bold text-secondary mb-2">{{ achievement.value }}</div>
            <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">{{ achievement.label }}</div>
            <h3 class="text-lg font-bold mb-2 text-primary">{{ achievement.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Differentiation -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <h2 class="text-3xl font-bold text-primary mb-12">Why BITZ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="space-y-4">
            <h4 class="font-bold text-xl text-primary">We build systems that operate.</h4>
            <p class="text-text-secondary">Many firms design. We implement, deploy, and run national-scale platforms with 24/7 availability.</p>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-xl text-primary">Multi-country experience.</h4>
            <p class="text-text-secondary">We understand the operational realities of deploying systems across borders, regulatory environments, and infrastructure constraints.</p>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-xl text-primary">Public sector focus.</h4>
            <p class="text-text-secondary">We work with governments and institutions where reliability, security, and compliance are non-negotiable.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Delivery Approach -->
    <section class="py-24 bg-navy-900 text-white">
      <div class="container-custom mx-auto px-6">
        <div class="mb-16 text-center">
          <h2 class="text-3xl font-bold mb-4">Delivery Approach</h2>
          <p class="text-slate-400">Our documented and transparent implementation methodology.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in deliverySteps" :key="step.title" class="relative">
            <div class="text-6xl font-bold text-white/5 absolute -top-8 -left-4">{{ index + 1 }}</div>
            <h4 class="font-bold text-xl mb-4 text-secondary">{{ step.title }}</h4>
            <p class="text-slate-400 text-sm leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Placeholder -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-primary mb-6">Discuss a project</h2>
        <p class="text-text-secondary mb-10 max-w-2xl mx-auto">
          Our leadership team brings deep domain expertise in public sector systems and enterprise-grade technical delivery.
        </p>
        <router-link to="/contact" class="px-8 py-4 bg-primary text-white font-bold rounded hover:bg-navy-800 transition-all">
          Request Consultation
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { achievementsData } from '@/utils/Achievements'

const achievements = achievementsData
const focusAreas = [
  "Government digital transformation",
  "Health information systems",
  "Financial services infrastructure",
  "Social protection platforms"
]

const deliverySteps = [
  { title: "Design", description: "Technical architecture, feasibility, and operational planning." },
  { title: "Build", description: "Development, systems integration, and rigorous testing." },
  { title: "Deploy", description: "Installation, comprehensive training, and go-live support." },
  { title: "Operate", description: "24/7 support, maintenance, and continuous evolution." }
]
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}
</style>
