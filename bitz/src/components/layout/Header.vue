<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white border-b border-slate-200' 
        : 'bg-transparent'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div 
            class="w-10 h-10 bg-primary flex items-center justify-center rounded-sm transition-transform duration-300 group-hover:scale-105"
          >
            <span class="text-white font-bold text-xl">B</span>
          </div>
          <span 
            class="text-lg font-bold transition-colors duration-300 tracking-tight"
            :class="isScrolled ? 'text-primary' : 'text-white'"
          >
            BITZ
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="text-sm font-bold uppercase tracking-widest transition-all duration-300"
            :class="[
              $route.path === item.path
                ? 'text-secondary'
                : isScrolled
                  ? 'text-primary hover:text-secondary'
                  : 'text-white/80 hover:text-white'
            ]"
          >
            {{ item.name }}
          </router-link>
          
          <!-- Contact Button -->
          <router-link
            to="/contact"
            class="px-6 py-2 border font-bold text-[10px] uppercase tracking-[0.2em] transition-all duration-300"
            :class="[
              isScrolled 
                ? 'bg-primary border-primary text-white hover:bg-navy-800' 
                : 'bg-white border-white text-primary hover:bg-slate-100'
            ]"
          >
            Contact
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden flex items-center justify-center w-10 h-10 rounded-sm transition-all duration-300"
          :class="[
            isScrolled 
              ? 'text-primary' 
              : 'text-white'
          ]"
        >
          <Menu v-if="!isMobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4">
        <div v-if="isMobileMenuOpen" class="lg:hidden py-8 border-t border-slate-100 bg-white">
          <div class="flex flex-col space-y-4">
            <router-link
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.path"
              class="px-4 py-2 font-bold text-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </router-link>
            <div class="px-4 pt-4 border-t border-slate-100">
              <router-link
                to="/contact"
                class="flex items-center justify-center px-6 py-4 bg-primary text-white font-bold text-sm uppercase tracking-widest"
                @click="closeMobileMenu"
              >
                Contact
              </router-link>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/products' },
  { name: 'Case Studies', path: '/projects' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(() => route.path, () => {
  closeMobileMenu()
})
</script>
