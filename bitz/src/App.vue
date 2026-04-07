<template>
  <div id="app" class="font-sans bg-background text-text-primary min-h-screen">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main>
      <router-view v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Scroll to Top Button -->
    <Transition name="fade">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary text-white rounded-sm shadow-sm transition-all duration-300 flex items-center justify-center hover:bg-navy-800"
        aria-label="Scroll to top"
      >
        <ChevronUp :size="20" />
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { ChevronUp } from 'lucide-vue-next'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { useScroll } from '@/composables/useScroll'

const { scrollY, scrollToTop } = useScroll()

const showScrollTop = computed(() => scrollY.value > 400)

onMounted(() => {
  // Ensure we start at the top
  window.scrollTo(0, 0)
})
</script>

<style>
/* Global resets or base styles if needed */
body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
