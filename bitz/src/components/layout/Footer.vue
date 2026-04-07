<template>
  <footer class="bg-navy-950 text-white py-20 border-t border-navy-900">
    <div class="container-custom mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-secondary flex items-center justify-center rounded-sm">
              <span class="text-white font-bold text-xl">B</span>
            </div>
            <span class="text-xl font-bold tracking-tight">BITZ</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">
            Designing, building, and operating digital infrastructure for public institutions and enterprises across Africa.
          </p>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 bg-navy-900 rounded-sm flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary transition-all">
              <Linkedin :size="18" />
            </a>
            <a href="#" class="w-10 h-10 bg-navy-900 rounded-sm flex items-center justify-center text-slate-400 hover:text-white hover:bg-secondary transition-all">
              <Twitter :size="18" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-6 text-slate-500">Services</h4>
          <ul class="space-y-3">
            <li><router-link to="/services#ai-automation" class="text-slate-300 hover:text-white transition-colors text-sm">AI and Automation</router-link></li>
            <li><router-link to="/services#data-infrastructure" class="text-slate-300 hover:text-white transition-colors text-sm">Data Infrastructure</router-link></li>
            <li><router-link to="/services#cloud-operations" class="text-slate-300 hover:text-white transition-colors text-sm">Cloud and Operations</router-link></li>
            <li><router-link to="/services#digital-assessment" class="text-slate-300 hover:text-white transition-colors text-sm">Digital Assessment</router-link></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-6 text-slate-500">Company</h4>
          <ul class="space-y-3">
            <li><router-link to="/about" class="text-slate-300 hover:text-white transition-colors text-sm">About Us</router-link></li>
            <li><router-link to="/sectors" class="text-slate-300 hover:text-white transition-colors text-sm">Sectors</router-link></li>
            <li><router-link to="/projects" class="text-slate-300 hover:text-white transition-colors text-sm">Case Studies</router-link></li>
            <li><router-link to="/contact" class="text-slate-300 hover:text-white transition-colors text-sm">Contact</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-6 text-slate-500">Contact</h4>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <MapPin :size="16" class="text-secondary shrink-0 mt-1" />
              <span class="text-slate-300 text-sm leading-relaxed">
                Prime Cartons, Dongkung building<br />
                Mombasa Road, Nairobi, Kenya
              </span>
            </div>
            <div class="flex items-center gap-3">
              <Mail :size="16" class="text-secondary shrink-0" />
              <a href="mailto:info@bitz-itc.com" class="text-slate-300 hover:text-white transition-colors text-sm">info@bitz-itc.com</a>
            </div>
            <div class="pt-4 mt-4 border-t border-navy-900">
              <router-link 
                to="/contact" 
                class="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white text-sm font-bold rounded-sm hover:bg-blue-600 transition-colors"
              >
                Request Consultation
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-navy-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-xs">
          © {{ new Date().getFullYear() }} BITZ IT Consulting. All rights reserved.
        </p>
        <div class="flex gap-8 text-xs font-medium text-slate-500">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Linkedin, Twitter, MapPin, Mail } from 'lucide-vue-next'
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}
</style>
