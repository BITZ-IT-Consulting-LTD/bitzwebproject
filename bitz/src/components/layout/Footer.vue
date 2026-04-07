<template>
  <footer class="bg-primary text-white py-24 border-t border-navy-800">
    <div class="container-custom mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
              <span class="text-primary font-bold text-lg">B</span>
            </div>
            <span class="text-xl font-bold tracking-tight">BITZ</span>
          </div>
          <p class="text-slate-400 text-sm leading-relaxed mb-8">
            Designing, building, and operating digital infrastructure for public institutions and enterprises across Africa.
          </p>
          <div class="flex gap-4">
            <a href="#" class="text-slate-400 hover:text-white transition-colors"><Linkedin :size="20" /></a>
            <a href="#" class="text-slate-400 hover:text-white transition-colors"><Twitter :size="20" /></a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-6 text-slate-500">Services</h4>
          <ul class="space-y-4 text-sm font-medium">
            <li><router-link to="/products" class="text-slate-300 hover:text-white transition-colors">Digital System Design</router-link></li>
            <li><router-link to="/products" class="text-slate-300 hover:text-white transition-colors">Scalable Infrastructure</router-link></li>
            <li><router-link to="/products" class="text-slate-300 hover:text-white transition-colors">National Platform Operations</router-link></li>
            <li><router-link to="/products" class="text-slate-300 hover:text-white transition-colors">Digital Assessment</router-link></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-6 text-slate-500">Company</h4>
          <ul class="space-y-4 text-sm font-medium">
            <li><router-link to="/about" class="text-slate-300 hover:text-white transition-colors">About Us</router-link></li>
            <li><router-link to="/projects" class="text-slate-300 hover:text-white transition-colors">Case Studies</router-link></li>
            <li><router-link to="/our-team" class="text-slate-300 hover:text-white transition-colors">Leadership</router-link></li>
            <li><router-link to="/contact" class="text-slate-300 hover:text-white transition-colors">Contact</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-widest mb-6 text-slate-500">Contact</h4>
          <div class="space-y-6 text-sm">
            <div class="flex items-start gap-3">
              <MapPin :size="18" class="text-secondary shrink-0" />
              <span class="text-slate-300">Prime Cartons, Dongkung building along Mombasa Road, Nairobi, Kenya</span>
            </div>
            <div class="flex items-center gap-3">
              <Mail :size="18" class="text-secondary shrink-0" />
              <a href="mailto:info@bitz-itc.com" class="text-slate-300 hover:text-white transition-colors">info@bitz-itc.com</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-24 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-slate-500 text-xs">
          © {{ new Date().getFullYear() }} BITZ IT Consulting. All rights reserved.
        </p>
        <div class="flex gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
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
